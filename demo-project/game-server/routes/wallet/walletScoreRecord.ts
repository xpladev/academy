import { LCDClient, Tx, MnemonicKey, SignOptions, SignMode } from "@xpla/xpla.js"
import { walletMysql, walletPool } from "../../system/mysql";
import { URL, chainID, waitMsg, cw721MnemonicKey, publisherTokenInit, seqMsg } from './serverInfo'

var scoreRecord = require('../server/scoreRecord');

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  console.log("[walletScoreRecord]", req.body)

  let intervalId
  let count = 0

  const {wallet, tid, userTx} = req.body 

  const result: { [key: string]: any } = {};

  let playerId = 0
  let groupId = 0
  let gamecurrencyAmount = 0
  let coinAmount = 0

  try {

    const serverMk = new MnemonicKey({ mnemonic: cw721MnemonicKey })
    const serverWallet = lcd.wallet(serverMk);

    const serverState = await serverWallet.accountNumberAndSequence()
    const serverAccNum = serverState.account_number   

    const [db, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where wallet = ? and tid = ? and status = 0', [wallet, tid]))()
      if(db.length <= 0) {          
      result.returnCode = '405'
      result.returnMsg = "Request information not found"

      return result 
    }     

    playerId = db[0].pid
    groupId = db[0].groupId
    gamecurrencyAmount = db[0].gamecurrencyAmount
    coinAmount = db[0].coinAmount

    const tx = Tx.fromBuffer(Buffer.from(String(userTx), 'base64'))

    let conn = await walletPool.getConnection()
    await conn.beginTransaction()
    let txResult

    try {

      const [data, ] = await conn.query('SELECT sequence FROM publisher_sequence WHERE accAddress = ? FOR UPDATE',
        [serverWallet.key.accAddress])
      const serverSeq = data[0].sequence

      const signOption: SignOptions = {
        chainID: chainID,
        accountNumber: serverAccNum,
        sequence: serverSeq,
        signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON
      }

      const allSignedTx = await serverWallet.key.signTx(tx, signOption, false)
      allSignedTx.signatures.reverse()
      allSignedTx.auth_info.signer_infos.reverse()

      txResult = await lcd.tx.broadcastSync(allSignedTx)      

      if(txResult.raw_log != '[]' ){
        throw txResult.raw_log
      }

      await conn.execute(`UPDATE publisher_sequence SET sequence = ? WHERE accAddress = ?`, [serverSeq+1, serverWallet.key.accAddress])

      await conn.commit(); 
      conn.release();

    } catch(err){

      await conn.rollback()
      conn.release()

      throw err
    }

    await walletMysql.connect((con) => con.query(`update txhash set txhash = ? where tid = ?`, [txResult.txhash, tid]))()

    intervalId = setInterval( waitResult, 1000, txResult.txhash, wallet, playerId, groupId, tid);
    
    result.returnCode = '0'
    result.returnMsg = "success"
    result.txhash = txResult.txhash
    return result

  } catch(err) {
    console.log("error:", err)

    try{
      if(err.indexOf(seqMsg) >= 0){
        publisherTokenInit()
      }   

      if( tid != 0 ){
        await walletMysql.connect((con) => con.query('update txhash set status = ? where tid = ?', [2, tid]))()
      }
    } catch(err) { 
      console.log("CS error:", err) 
    }

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
    
  async function waitResult(txhash, wallet, playerId, groupId, tid) {

    let status = 2
    let success = false
    try {
      const txInfo = await lcd.tx.txInfo(txhash)
      if( txInfo.code === 0 ){
        try {
          const req: { [key: string]: any } = {};
          req.body = {wallet}
          const gameResult = await scoreRecord(req)
          if( gameResult.returnCode != 0 ){
            throw gameResult.returnMsg
          }

          status = 1
          success = true 
        }catch(err) {        
          console.log('gameServerErr:',err);
        } 
      } else {
        console.log("tx error:", txInfo.code)
      }
    }catch(err) {
      
      if(err.response.data.message.indexOf(waitMsg) >= 0){
        console.log('...wait:')
        count = count + 1
        if( count < 30 ) {
          return
        }
        console.log("...timeout")

        status = 3
      } else {
        console.log('...wait err:', err)
      }
    }

    try {
      await walletMysql.connect((con) => con.query(
        'update txhash set status = ? where tid = ?', [status, tid]))()

    } catch(err) {
      console.log("CS error:", err)
    }

    clearInterval(intervalId)
  }
}  
