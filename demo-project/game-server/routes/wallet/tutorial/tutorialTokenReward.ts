import { LCDClient,  MnemonicKey, MsgExecuteContract, MsgSend } from "@xpla/xpla.js"
import { walletPool, walletMysql, Mysql } from "../../../system/mysql";
import { URL, chainID, cw20MnemonicKey, cw20_contract, publisherTokenInit,
  waitMsg, seqMsg, tokenDecimal, xplaDecimal, walletLog } from '../serverInfo'

const lcd = new LCDClient({	chainID,	URL });
const category = 'tutorial-token-reward'

module.exports =  async function(req) { 

  walletLog("info", `${category} req`, req.body)
  
  let {wallet, amount, xplaAmount} = req.body 

  if( amount > 10000 ){
    amount = 10000
  }

  if( xplaAmount > 10 ){
    xplaAmount = 10
  }
  
  amount = amount * tokenDecimal

  const playerId = 0
  const groupId = "0"  
  const gamecurrencyAmount = amount
  const coinAmount = amount

  const result: { [key: string]: any } = {};
  let tid = 0
  let intervalId
  let count = 0

  try {

    const [checkDb, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where wallet = ? and status = 0', [wallet]))()
    if(checkDb.length > 0) {          
      result.returnCode = '498'
      result.returnMsg = "Transaction in Progress"

      return result 
    }   

    const [checkDb2, ] = await walletMysql.connect((con) => con.query(
      'select count(*) as cnt from txhash where wallet = ? and status in (0, 1) and isTutorial = 1', [wallet]))()
    if(checkDb2[0].cnt > 2) {          
      result.returnCode = '499'
      result.returnMsg = "There are too many payment requests."

      return result 
    }   

    const mk = new MnemonicKey({ mnemonic: cw20MnemonicKey })
    const serverWallet = lcd.wallet(mk);
    const sender = serverWallet.key.accAddress
    const recipient = wallet    

    const transferMsg = new MsgExecuteContract(
      sender,
      cw20_contract,
      {
        transfer: {
          recipient,
          amount: String(amount)
        }
      }
    );

    let strAmount = (xplaAmount * xplaDecimal) + 'axpla'
    let xplaSend = undefined
    if( xplaAmount > 0 ){
      xplaSend = new MsgSend(
        sender,
        recipient,
        strAmount          
      );
    }

    const [db, ] = await walletMysql.connect((con) => con.query(`
      insert into txhash values (null, ?, ?, ?, 0, ?, ?, ?, 1, 0, now())`, [wallet, playerId, groupId, gamecurrencyAmount, coinAmount, '']))()
    if(db.length <= 0) {          
      result.returnCode = '499'
      result.returnMsg = "Wallet Server Error"

      return result 
    }     
    tid = db.insertId

    let conn = await walletPool.getConnection()
    await conn.beginTransaction()
    let txResult

    try{
      const [data, ] = await conn.query('SELECT sequence FROM publisher_sequence WHERE accAddress = ? FOR UPDATE', [serverWallet.key.accAddress])
      const sequence = data[0].sequence
      walletLog("info", category, ["SelectSequence", sequence, serverWallet.key.accAddress])
      
      let signedTx
      if( xplaSend != undefined ){
        signedTx = await serverWallet.createAndSignTx({
            msgs: [transferMsg, xplaSend],
            sequence 
        });
      } else {
        signedTx = await serverWallet.createAndSignTx({
          msgs: [transferMsg],
          sequence 
      });
      }

      txResult = await lcd.tx.broadcastSync(signedTx);
      
      if(txResult.raw_log != '[]' ){        
        throw txResult.raw_log
      }

      await conn.execute(`UPDATE publisher_sequence SET sequence = ? WHERE accAddress = ?`, [sequence+1, serverWallet.key.accAddress])

      await conn.commit(); 
      conn.release();

    } catch(err) {

      await conn.rollback()
      conn.release()

      throw err
    }

    await conn.execute(`update txhash set txhash = ? where tid = ?`, [txResult.txhash, tid])

    intervalId = setInterval( waitResult, 1000, txResult.txhash, wallet, tid);

    result.returnCode = '0'
    result.returnMsg = "success"
    result.txhash = txResult.txhash
    return result

  } catch(err) {
    walletLog("error", category, {"catch(err)": err})

    try{
      if( tid != 0 ){
        await walletMysql.connect((con) => con.query('update txhash set status = ? where tid = ?', [2, tid]))()
      }

      if(err.response?.data?.message?.indexOf(seqMsg) >= 0){
        publisherTokenInit()
      }   
    } catch(err) { 
      walletLog("error", category, {"critical error": err})
    }

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
    
  async function waitResult(txhash, wallet, tid) {

    let status = 2
    try {
      const txInfo = await lcd.tx.txInfo(txhash)
      if( txInfo.code === 0 ){
        try {
          const balance = await lcd.wasm.contractQuery(cw20_contract, { balance: { address: wallet } })
          walletLog("info", `${category} wait`, ["tx result:", tid, wallet, JSON.stringify(balance)])

          status = 1
        }catch(err) {        
          walletLog("error", `${category} wait`, {'gameServerErr':err})
        } 
      } else {
        walletLog("error", `${category} wait`, {"tx error": txInfo.code})
      }
    }catch(err) {
      
      if(err.response.data.message.indexOf(waitMsg) >= 0){
        console.log('...wait:')
        count = count + 1
        if( count < 30 ) {
          return
        }
        walletLog("error", `${category} wait`, "timeout")

        status = 3
      } else {
        walletLog("error", `${category} wait`, {'wait err': err})
      }
    }

    try {
      await walletMysql.connect((con) => con.query(
        'update txhash set status = ? where tid = ?', [status, tid]))()
      
      walletLog("info", `${category} wait`, {'update complete': [status, tid]})
    } catch(err) {
      walletLog("error", `${category} wait`, {'critical err': err})
    }

    clearInterval(intervalId)
  }
}  

