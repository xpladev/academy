import { walletMysql } from "../../system/mysql";
import { walletLog } from './serverInfo'

const category = 'txinfo'

module.exports =  async function(req) { 
  const txhash = req.query.txhash

  const result: { [key: string]: any } = {};

  try {

    const [checkDb, ] = await walletMysql.connect((con) => con.query(
      'select * from txhash where txhash = ?', [txhash]))()
    if(checkDb.length === 0) {          
      result.returnCode = '405'
      result.returnMsg = "Request information not found"

      walletLog("info", `${category} result`, result)

      return result 
    }   

    if( checkDb[0].status === 0 ) {
      result.returnCode = '500'
      result.returnMsg = "Blockchain processing"
      return result
    } else if ( checkDb[0].status === 1 ) { 
      result.returnCode = '0'
      result.returnMsg = "success"
    } else if ( checkDb[0].status === 2 ) {
      result.returnCode = '501'
      result.returnMsg = "Blockchain write failure"
    } else if ( checkDb[0].status === 3 ) {
      result.returnCode = '502'
      result.returnMsg = "Block chain processing lookup timeout"
    }
    walletLog("info", `${category} result`, [result.returnCode, txhash])
    return result

  } catch(err) {
    walletLog("error", category, {txhash: err})

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  

