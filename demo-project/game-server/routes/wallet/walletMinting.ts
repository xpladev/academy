import { LCDClient, Tx, MnemonicKey, SignOptions, SignMode } from "@xpla/xpla.js"
import { walletMysql, walletPool } from "../../system/mysql";
import { URL, chainID, cw20_contract, waitMsg, cw721MnemonicKey, publisherNftInit, seqMsg, walletLog } from './serverInfo'

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  walletLog("info", "wallet-minting req", req.body)

  let intervalId
  let count = 0

  const {wallet, tid, userTx} = req.body 

  const result: { [key: string]: any } = {};

  try {
    const minterMk = new MnemonicKey({ mnemonic: cw721MnemonicKey })
    const minterWallet = lcd.wallet(minterMk);

    const minterState = await minterWallet.accountNumberAndSequence()
    const minterAccNum = minterState.account_number

    const [db, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where wallet = ? and tid = ? and status = 0', [wallet, tid]))()
      if(db.length <= 0) {          
      result.returnCode = '405'
      result.returnMsg = "Request information not found."

      return result 
    }     

    const tx = Tx.fromBuffer(Buffer.from(String(userTx), 'base64'))

    let conn = await walletPool.getConnection()
    await conn.beginTransaction()
    let txResult

    try {

      const [data, ] = await conn.query('SELECT sequence FROM publisher_sequence WHERE accAddress = ? FOR UPDATE', [minterWallet.key.accAddress])
      const minterSeq = data[0].sequence
      console.log("SelectSequence:", minterSeq)

      const signOption: SignOptions = {
        chainID: chainID,
        accountNumber: minterAccNum,
        sequence: minterSeq,
        signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON
      }

      const allSignedTx = await minterWallet.key.signTx(tx, signOption, false)

      txResult = await lcd.tx.broadcastSync(allSignedTx)      

      if(txResult.raw_log != '[]' ){
        throw txResult.raw_log
      }

      await conn.execute(`UPDATE publisher_sequence SET sequence = ? WHERE accAddress = ?`, [minterSeq+1, minterWallet.key.accAddress])

      await conn.commit(); 
      conn.release();

    } catch(err){

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
    console.log("error:", err)

    try{
      if(err.indexOf(seqMsg) >= 0){
        publisherNftInit()
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
    
  async function waitResult(txhash, wallet, tid) {

    let status = 2
    try {
      const txInfo = await lcd.tx.txInfo(txhash)
      if( txInfo.code === 0 ){
        try {
          const balance = await lcd.wasm.contractQuery(cw20_contract, { balance: { address: wallet } })
          console.log("tx result:", tid, JSON.stringify(balance, null, 2));

          status = 1
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

