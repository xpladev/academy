import { LCDClient, Tx } from "@xpla/xpla.js"
import { walletMysql } from "../../system/mysql";
import { URL, chainID, cw20_contract, waitMsg, publisherTokenInit, seqMsg } from './serverInfo'

var coinToGamecurrency = require('../server/coinToGamecurrency');
var coinToGamecurrencyComplete = require('../server/coinToGamecurrencyComplete');

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  console.log("[walletCoinToGamecurrency]", req.body)

  let intervalId
  let count = 0

  const {wallet, tid, userTx} = req.body 

  const result: { [key: string]: any } = {};

  let playerId = 0
  let groupId = 0
  let gamecurrencyAmount = 0
  let coinAmount = 0

  try {

    const [db, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where wallet = ? and tid = ? and status = 0', [wallet, tid]))()
      if(db.length <= 0) {          
      result.returnCode = '405'
      result.returnMsg = "Request information not found"

      return result 
    }     

    const tx = Tx.fromBuffer(Buffer.from(String(userTx), 'base64'))

    playerId = db[0].pid
    groupId = db[0].groupId
    gamecurrencyAmount = db[0].gamecurrencyAmount
    coinAmount = db[0].coinAmount

    const req: { [key: string]: any } = {};
    req.body = {playerId, groupId, tid, gamecurrencyAmount, coinAmount}
    const gameResult = await coinToGamecurrency(req)
    if( gameResult.returnCode != 0 ){
      result.returnCode = gameResult.returnCode
      result.returnMsg = gameResult.returnMsg
    }

    let txResult = await lcd.tx.broadcastSync(tx)     

    if(txResult.raw_log != '[]' ){
      throw txResult.raw_log
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
      if( playerId != 0 ){
        const req: { [key: string]: any } = {};       
        req.body = {playerId, groupId, tid, success:false}
        await coinToGamecurrencyComplete(req)
      }

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
          const balance = await lcd.wasm.contractQuery(cw20_contract, { balance: { address: wallet } })
          console.log("tx result:", tid, JSON.stringify(balance, null, 2));

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

      const req: { [key: string]: any } = {};       
      req.body = {playerId, groupId, tid, success}
      await coinToGamecurrencyComplete(req)
    } catch(err) {
      console.log("CS error:", err)
    }

    clearInterval(intervalId)
  }
}  
