import { LCDClient,  MnemonicKey, MsgExecuteContract, TxAPI, Fee, SimplePublicKey } from "@xpla/xpla.js"
import { walletMysql, Mysql } from "../../system/mysql";
import { URL, chainID, cw20MnemonicKey, cw20_contract, tokenDecimal, unsignedTimeOut } from './serverInfo'

var coinToGamecurrency = require('../server/coinToGamecurrency');
var coinToGamecurrencyComplete = require('../server/coinToGamecurrencyComplete');

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  console.log("[walletCoinToGamecurrencyUnsigned]", req.body)

  const {wallet, amount, userPubKey, userSeq } = req.body 

  const amountDec = amount * tokenDecimal

  const groupId = "0"  
  const coinAmount = amount
  const gamecurrencyAmount = amount

  const result: { [key: string]: any } = {};
  let tid = 0

  try {

    const [userInfoRow, ] = await Mysql.connect((con) => con.query(
      `SELECT * FROM user_info WHERE wallet = ?`, [wallet]))()
    if(userInfoRow.length <= 0) {          
      result.returnCode = '401'
      result.returnMsg = "Failed to Get User Information"

      return result 
    }
    const playerId = userInfoRow[0].pid

    const mk = new MnemonicKey({ mnemonic: cw20MnemonicKey })
    const serverWallet = lcd.wallet(mk);
    const sender = wallet
    const recipient = serverWallet.key.accAddress

    const [db, ] = await walletMysql.connect((con) => con.query(
      'insert into txhash values (null, ?, ?, ?, 1, ?, ?, ?, 0, ?, now())',
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

    const tx_api = new TxAPI(lcd)
    const simul_fee = await tx_api.estimateFee(
      [{
        sequenceNumber: userSeq,
        publicKey: new SimplePublicKey(userPubKey) 
      }],
      {
        msgs: [transferMsg],
        gasAdjustment: 1.25,			
      }
    )
    
    const fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString());

    const tx = await lcd.tx.create([], {msgs: [transferMsg], fee } )
    const unsignedTx = Buffer.from(tx.toBytes()).toString('base64')

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
    } catch(err) {
      console.log("CS error:", err)
    }

    result.returnCode = '499'
    result.returnMsg = "Wallet Server Error"

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