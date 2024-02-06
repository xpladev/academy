import { LCDClient,  MnemonicKey, MsgExecuteContract, TxAPI, Fee, SimplePublicKey } from "@xpla/xpla.js"
import { walletPool, walletMysql } from "../../system/mysql";
import { URL, chainID, cw20MnemonicKey, cw20_contract, cw721MnemonicKey, cw20_scoreContract,
  seqMsg, publisherNftInit, walletLog } from './serverInfo'

var userInfo = require('../server/userInfo');

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  walletLog("info", "wallet-score-record-unsigned req", req.body)

  let {wallet, userPubKey, userSeq} = req.body 
  
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
    const groupId = "0"  
    const id = gameResult.id
    const score = gameResult.high_score
    const scoreDate = Math.floor(new Date(gameResult.high_score_date).getTime() / 1000);

    const minterMk = new MnemonicKey({ mnemonic: cw721MnemonicKey })
    const minterWallet = lcd.wallet(minterMk);

    const sender = minterWallet.key.accAddress // wallet    

    const [db, ] = await walletMysql.connect((con) => con.query(
      'insert into txhash values (null, ?, ?, ?, 4, ?, ?, ?, 0, ?, now())',
      [wallet, playerId, groupId, 0, 0, '', 0]))()
    if(db.length <= 0) {          
      result.returnCode = '499'
      result.returnMsg = "Wallet Server Error"

      return result 
    }     
    tid = db.insertId
    console.log("tid:", tid, sender, cw20_scoreContract, id, scoreDate)
        
    const transferMsg = new MsgExecuteContract(
      sender,
      cw20_scoreContract,
      {
        save_data : {
          user: wallet,
          id: id,
          high_score: score,
          record_time: scoreDate
        }
      }
    );

    let conn = await walletPool.getConnection()
    await conn.beginTransaction()
    let simul_fee
    let unsignedTx

    try{
      const [data, ] = await conn.query('SELECT sequence FROM publisher_sequence WHERE accAddress = ? FOR UPDATE', [minterWallet.key.accAddress])
      const minterSeq = data[0].sequence
      const minterPubKey = minterMk.publicKey    

      const tx_api = new TxAPI(lcd)
      simul_fee = await tx_api.estimateFee(
        [
          {sequenceNumber: minterSeq, publicKey: minterPubKey},
        ],
        {
          msgs: [transferMsg],
          gasAdjustment: 1.4,			
        }
      )
      const fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString(), wallet);

      const tx = await lcd.tx.create([], {msgs: [transferMsg], fee } )
      unsignedTx = Buffer.from(tx.toBytes()).toString('base64')
      await conn.commit(); 
      conn.release();

    } catch(err) {

      await conn.rollback()
      conn.release()

      throw err
    }

    setTimeout( waitResult, 120000, tid);

    result.returnCode = '0'
    result.returnMsg = "success"
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
