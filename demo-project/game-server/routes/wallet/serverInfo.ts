import { LCDClient, MnemonicKey, BaseAccount } from '@xpla/xpla.js'
import { walletMysql } from "../../system/mysql";

const codeDbSourceVer = 1

export const chainID = 'cube_47-5';
export const URL = 'https://cube-lcd.xpla.dev';

export let cw20MnemonicKey
export let cw20_contract
export let cw721MnemonicKey
export let cw721_contract
export let cw20_scoreContract
export let ipfsCnf
export let ipfsPortCnf
export let ipfsClusterCnf
export let ipfsClusterPortCnf
export let ipfsGetUrlCnf

export const seqMsg  = "account sequence mismatch"
export const waitMsg = 'rpc error: code = NotFound desc = tx not found:'

export const tokenDecimal = 1000000
export const xplaDecimal = 1000000000000000000
export const unsignedTimeOut = 120000

export async function systemInit(){ 

  try{
    const [infoRow, ] = await walletMysql.connect((con) => con.execute('select * from server_info where idx = 1', []))()
            
    if(infoRow.length <= 0) {
      throw 'serverInfo error'
    }    
    cw20MnemonicKey = infoRow[0].cw20MnemonicKey
    cw20_contract = infoRow[0].cw20Contract
    cw721MnemonicKey = infoRow[0].cw721MnemonicKey
    cw721_contract = infoRow[0].cw721Contract
    cw20_scoreContract = infoRow[0].cw20ScoreContract
    ipfsCnf = infoRow[0].ipfs
    ipfsPortCnf = infoRow[0].ipfsPort
    ipfsClusterCnf = infoRow[0].ipfsCluster
    ipfsClusterPortCnf = infoRow[0].ipfsClusterPort
    ipfsGetUrlCnf = infoRow[0].ipfsGetUrl

    const dbSourceVer = infoRow[0].dbSourceVer
    if(codeDbSourceVer != dbSourceVer){
      throw 'This sourcecode version and db sourceversion are different. update it!'
    }
    console.log("Server Info:", infoRow[0])

    const [rows, ] = await walletMysql.connect((con) => con.execute('select * from txhash where status in (0, 3)', []))()
        
    if(rows.length > 0) {
      const promises = rows.map(processJob)
      const result = await Promise.all(promises)
    }
    console.log("systemInit dataRow:", rows.length)

    await publisherInit()
  }
  catch(err) {
    console.log("systemInit Err:", err)
    process.exit()
  }
}

async function publisherInit(){ 

  await publisherTokenInit()
  await publisherNftInit()
}

export async function publisherTokenInit(){ 
  try {
    const lcd = new LCDClient({	chainID,	URL });

    const mk = new MnemonicKey({ mnemonic: cw20MnemonicKey })
    const serverWallet = lcd.wallet(mk);

    const accAddress = serverWallet.key.accAddress
    const accInfo = await lcd.auth.accountInfo(accAddress)
    const acc = accInfo as BaseAccount
    const sequence = acc.sequence

    await walletMysql.connect((con) => con.query(`insert into publisher_sequence values (?, ?)
      ON DUPLICATE KEY UPDATE accAddress=?, sequence=?`, [accAddress, sequence, accAddress, sequence]))()

    console.log("publisherTokenInit:", accAddress, sequence)
  } catch(err) {
    console.log("publisherInit error:", err)
    process.exit()
  }
}

export async function publisherNftInit(){ 
  try {
    const lcd = new LCDClient({	chainID,	URL });

    const mk = new MnemonicKey({ mnemonic: cw721MnemonicKey })
    const serverWallet = lcd.wallet(mk);

    const accAddress = serverWallet.key.accAddress
    const accInfo = await lcd.auth.accountInfo(accAddress)
    const acc = accInfo as BaseAccount
    const sequence = acc.sequence

    await walletMysql.connect((con) => con.query(`insert into publisher_sequence values (?, ?)
      ON DUPLICATE KEY UPDATE accAddress=?, sequence=?`, [accAddress, sequence, accAddress, sequence]))()
    
    console.log("publisherNftInit:", accAddress, sequence)
  } catch(err) {
    console.log("publisherInit error:", err)
    process.exit()
  }
}
  

export async function walletLog( type, category, message ){ 
  console.log("log:", type, category, message)

  try {

    let convertMsg
    try {
      convertMsg = JSON.stringify(message)
    } catch(err) {
      convertMsg = String(message)
    }

    if( type === "info") {
      await walletMysql.connect((con) => con.query(`insert into info_log values ( null, ?, ?, now())`, [category, convertMsg]))()
    } else if ( type === "error" ) {
      await walletMysql.connect((con) => con.query(`insert into error_log values ( null, ?, ?, now())`, [category, convertMsg]))()
    }

  } catch(err) {
    console.log("log write error:", err)
  }
}

const processJob = async(row) => {
  
  const lcd = new LCDClient({	chainID,	URL });

  const tid = row.tid
  const txhash = row.txhash
  const wallet = row.wallet
  const playerId = row.pid
  const groupId = row.groupId
  const type = row.type
  const isTutorial = row.isTutorial

  var gamecurrencyToCoinComplete = require('../server/gamecurrencyToCoinComplete');
  var coinToGamecurrencyComplete = require('../server/coinToGamecurrencyComplete');

  let status = 2
  let success = false
  try {
    const txInfo = await lcd.tx.txInfo(txhash)
    if( txInfo.code === 0 ){
      try {
        status = 1
        success = true 
        console.log('complete:',tid, type, wallet, txhash);
      }catch(err) {        
        console.log('gameServerErr:',err);
      } 
    } else {
      console.log("tx error:", txInfo.code)
    }
  } catch(err) {
    console.log('...wait err:', err)
  }

  try {
    await walletMysql.connect((con) => con.query(
      'update txhash set status = ? where tid = ?', [status, tid]))()

    const req: { [key: string]: any } = {};       
    req.body = {playerId, groupId, tid, success}
    if( isTutorial === 0 ){
      if( type === 0 ) {
        await gamecurrencyToCoinComplete(req)      
      } else if ( type === 1 ) {
        await coinToGamecurrencyComplete(req)      
      }
    }
  } catch(err) {
    console.log("CS error:", err)
  }
}
		
