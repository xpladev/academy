import { LCDClient,  MnemonicKey, MsgExecuteContract, TxAPI, Fee, SimplePublicKey } from "@xpla/xpla.js"
import { walletMysql } from "../../system/mysql";
import { URL, chainID, cw20MnemonicKey, cw20_contract, cw721MnemonicKey, cw721_contract,
  tokenDecimal, seqMsg, publisherNftInit, walletLog, 
  ipfsCnf, ipfsPortCnf, ipfsClusterCnf, ipfsClusterPortCnf, ipfsGetUrlCnf } from './serverInfo'

import ipfsAPI from 'ipfs-api'
import ipfsCluster from 'ipfs-cluster-api'

var userInfo = require('../server/userInfo');

const fs = require("fs")
const lcd = new LCDClient({	chainID,	URL });
var walletTokenInfo = require('../wallet/walletTokenInfo');

let ipfs
let cluster

module.exports =  async function(req) { 

  walletLog("info", "wallet-minting-unsigned req", req.body)

  let {wallet, shopNo, userPubKey, userSeq} = req.body 
  
  const result: { [key: string]: any } = {};
  let tid = 0

  try {

    const req: { [key: string]: any } = {};
    req.body = {wallet}
    const gameResult = await userInfo(req)
    if( gameResult.returnCode != 0 ){
      result.returnCode = gameResult.returnCode
      result.returnMsg = gameResult.returnMsg

      return result
    }

    const playerId = gameResult.pid
    const highStage = gameResult.high_stage

    let [shopRow, ] = await walletMysql.connect((con) => con.query(
      `SELECT * FROM nft_shop where idx = ?`, [shopNo]))()
    if(shopRow.length <= 0) {          
      result.returnCode = '401'
      result.returnMsg = "Failed to Get User Information"

      return result 
    }

    const amount = shopRow[0].price
    const width = shopRow[0].width
    const count = shopRow[0].count
    const start_has_ball = shopRow[0].ball
    const clearStage = shopRow[0].clearStage
    const image = shopRow[0].imageUrl

    let haveToken = 0
    if( wallet != undefined && wallet != ""){
      const inputInfo = { 'body' : { 'wallet': wallet }}
      const walletResult = await walletTokenInfo(inputInfo)
      if( walletResult.returnCode == 0 ){
        haveToken = walletResult.tokenInfo.token
      }
    }
    if( amount > haveToken){
      result.returnCode = '417'
      result.returnMsg = "Purchase conditions not met"

      return result 
    }

    if( clearStage > highStage ){
      result.returnCode = '417'
      result.returnMsg = "Purchase conditions not met"

      return result 
    }

    const payAmount = amount * tokenDecimal
    
    const groupId = "0"  
    const gamecurrencyAmount = amount
    const coinAmount = amount

    const mk = new MnemonicKey({ mnemonic: cw20MnemonicKey })
    const serverWallet = lcd.wallet(mk);
    const minterMk = new MnemonicKey({ mnemonic: cw721MnemonicKey })
    const minterWallet = lcd.wallet(minterMk);

    const userState = await minterWallet.accountNumberAndSequence()
    const minterPubKey = minterMk.publicKey
    const minterSeq = userState.sequence

    const sender = wallet    
    const recipient = serverWallet.key.accAddress

    const [db, ] = await walletMysql.connect((con) => con.query(
      'insert into txhash values (null, ?, ?, ?, 3, ?, ?, ?, 0, ?, now())',
      [wallet, playerId, groupId, gamecurrencyAmount, coinAmount, '', 0]))()
    if(db.length <= 0) {          
      result.returnCode = '499'
      result.returnMsg = "Wallet Server Error"

      return result 
    }     
    tid = db.insertId
    
    const transferMsg = new MsgExecuteContract(
      sender,
      cw20_contract,
      {
          transfer: {
              recipient,
              amount: String(payAmount)
          }
      }
    );

    const thumbnailImage = shopRow[0].thumbnailUrl

    const tokenId = String(tid)
    const owner = String(wallet)
    const meta = {      
      "newItem" : {
        "extension" : {
          name: shopRow[0].name,
          image: image,
          description: 'academy mint!!!',
          attributes: [                         
            {
              "trait_type": "thumbnail_url",
              "value": thumbnailImage
            },      
            {
              "trait_type": "category",
              "value": 'Game'
            },
            {
              "trait_type": "collection",
              "value": 'academy'
            },
            {
              "trait_type": "creator",
              "value": 'BC Developer'
            },
            {
              "trait_type": "provider",
              "value": "BC Development Team."
            },
            {
              "trait_type": "dbid",
              "value": String(tid)
            },
            {
              "trait_type": "shop_no",
              "value": String(shopNo)
            },
            {
              "trait_type": "paddle_width",
              "value": String(width)
            },
            {
              "trait_type": "paddle_count",
              "value": String(count)
            },
            {
              "trait_type": "ball_count",
              "value": String(start_has_ball)
            }
          ]
        }
      }
    }

    let extension = meta.newItem.extension        
    const tokenUri = await UploadIPFS(meta, ipfsCnf, ipfsPortCnf, ipfsClusterCnf, ipfsClusterPortCnf, ipfsGetUrlCnf)

    const executeMsg = {
      mint: {
          token_id: tokenId,
          owner: owner,
          token_uri: tokenUri,
          extension: extension
      }
    }     

    const mintingExe = new MsgExecuteContract(
      minterWallet.key.accAddress,
      cw721_contract,
      {...executeMsg}
    );
    

    const tx_api = new TxAPI(lcd)
    const simul_fee = await tx_api.estimateFee(
      [
        {sequenceNumber: userSeq, publicKey: new SimplePublicKey(userPubKey)},
        {sequenceNumber: minterSeq, publicKey: minterPubKey},
      ],
      {
        msgs: [transferMsg, mintingExe],
        gasAdjustment: 1.25,			
      }
    )
    const fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString());

    const tx = await lcd.tx.create([], {msgs: [transferMsg, mintingExe], fee } )
    const unsignedTx = Buffer.from(tx.toBytes()).toString('base64')

    setTimeout( waitResult, 120000, tid);

    result.returnCode = '0'
    result.returnMsg = "success"
    result.payAmount = payAmount
    result.fee = simul_fee.amount.toString()
    result.tid = tid
    result.unsignedTx = unsignedTx
    return result

  } catch(err) {
    console.log("error:", err)

    try {
      const status = 2
      await walletMysql.connect((con) => con.query(
        'update txhash set status = ? where tid = ?', [status, tid]))()

      if(err.response?.data?.message?.indexOf(seqMsg) >= 0){
        publisherNftInit()
      }   
    } catch(err) {
      console.log("CS error:", err)
    }

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  

  
async function waitResult(tid) {

  let status = 2
  try {
    const [selectdb, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where tid = ? and status = 0', [tid]))()
    if(selectdb.length > 0) {          
      if( selectdb[0].status === 0 ) {
        console.log("Close txhash:", tid)
        await walletMysql.connect((con) => con.query(
          'update txhash set status = ? where tid = ? and status = 0', [status, tid]))()
      }
    }
  }catch(err) {    
    console.log("CS error:", err)
  }
}


async function UploadIPFSFile(meta: any, ipfsDB, ipfsPortDB, ipfsClusterDB, ipfsClusterPortDB) : Promise<string> {

  let retValue = ''
  
  try{
      if( ipfs === undefined ){
          ipfs = await ipfsAPI(ipfsDB ,ipfsPortDB, {protocol: 'http'})
          cluster = await ipfsCluster({ host: `${ipfsClusterDB}`, port: `${ipfsClusterPortDB}`, protocol: 'http' });
      }

      await ipfs.files.add(meta)
      .then(result=>{
          retValue = result[0].hash
      })

      await cluster.pin.add(retValue, (err) => {
          if( err === true ){
              throw err
          }
      });
  }
  catch(err){
      throw err
  }

  return retValue    
};

async function UploadIPFS(meta: any, ipfsDB, ipfsPortDB, ipfsClusterDB, ipfsClusterPortDB, ipfsGetUrlDB) : Promise<string> {
 
  
  try{
      const newItem = meta.newItem

      // json upload
      const jsonHash = await UploadIPFSFile(Buffer.from(JSON.stringify(newItem.extension)), ipfsDB, ipfsPortDB, ipfsClusterDB, ipfsClusterPortDB)
      if(jsonHash === ""){
          throw 'UploadIPFSFile jsonHash error'
      }
      const jsonUrl = `${ipfsGetUrlDB}/ipfs/${jsonHash}`

      delete newItem.token_uri
      
      return jsonUrl
  }
  catch(err){
      console.log(err)        
      throw err
  }
}
