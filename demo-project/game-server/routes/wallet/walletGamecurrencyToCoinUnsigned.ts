import { LCDClient,  MnemonicKey, MsgExecuteContract, TxAPI, Fee, SimplePublicKey } from "@xpla/xpla.js"
import { walletPool, walletMysql } from "../../system/mysql";
import { URL, chainID, cw20MnemonicKey, cw20_contract, tokenDecimal, unsignedTimeOut, publisherTokenInit, seqMsg, walletLog } from './serverInfo'

var userInfo = require('../server/userInfo');

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  console.log("[walletGamecurrencyToCoinUnsigned]", req.body)

  const {wallet, amount, userPubKey, userSeq } = req.body 

  const amountDec = amount * tokenDecimal

  const groupId = "0"  
  const coinAmount = amount
  const gamecurrencyAmount = amount

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

    const serverKey = new MnemonicKey({mnemonic: cw20MnemonicKey})
    const serverWallet = lcd.wallet(serverKey);
    const sender = serverWallet.key.accAddress
    const recipient = wallet

    const [db, ] = await walletMysql.connect((con) => con.query(
      'insert into txhash values (null, ?, ?, ?, 0, ?, ?, ?, 0, ?, now())',
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
              amount: String(amountDec)
          }
      }
    );

    let conn = await walletPool.getConnection()
    await conn.beginTransaction()
    let simul_fee
    let unsignedTx

    try{
      const [payerInfo, ] = await walletMysql.connect((con) => con.query( 'SELECT sequence FROM publisher_sequence WHERE accAddress = ? FOR UPDATE', [serverWallet.key.accAddress]))()
      const serverSequence = payerInfo[0].sequence
      const serverPubKey = serverKey.publicKey as SimplePublicKey

      const tx_api = new TxAPI(lcd)
      simul_fee = await tx_api.estimateFee(
        [        
          { sequenceNumber: serverSequence, publicKey: serverPubKey }
        ],
        {
          msgs: [transferMsg],
          gasAdjustment: 1.5,			
        }
      )
      
      const fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString(), recipient);

      const tx = await lcd.tx.create([], {msgs: [transferMsg], fee } )
      unsignedTx = Buffer.from(tx.toBytes()).toString('base64')
      await conn.commit(); 
      conn.release();

    } catch(err) {

      await conn.rollback()
      conn.release()

      throw err
    }

    setTimeout( waitResult, unsignedTimeOut, tid);
    
    result.returnCode = '0'
    result.returnMsg = "success"
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
        publisherTokenInit()
      }   
    } catch (err) {
      console.log("CS error:", err)
    }

    if( err?.returnCode != undefined && err?.returnMsg != undefined ){
      result.returnCode = err.returnCode
      result.returnMsg = err.returnMsg
    } else {
      result.returnCode = '499'
      result.returnMsg = "Wallet Server Error"
    }

    return result
  }
}  

async function waitResult(tid) {

  let status = 2
  try {
    const [selectdb, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where tid = ? and status = 0', [tid]))()
    if(selectdb.length > 0) {          
      console.log("Close txhash:", tid)
      await walletMysql.connect((con) => con.query(
        'update txhash set status = ? where tid = ? and status = 0', [status, tid]))()
      
    }
  }catch(err) {    
    console.log("CS error:", err)
  }
}