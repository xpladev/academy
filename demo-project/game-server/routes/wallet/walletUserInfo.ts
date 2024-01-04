import { walletLog } from './serverInfo'

var userInfo = require('../server/userInfo');
var walletTokenInfo = require('./walletTokenInfo');


module.exports =  async function(req) { 

  walletLog("info", "wallet-user-info req", req.body)

  const {wallet} = req.body 

  const result: { [key: string]: any } = {};

  try {

    const req: { [key: string]: any } = {};
    req.body = {wallet}
    const gameResult = await userInfo(req)
    if( gameResult.returnCode != 0 ){
      throw gameResult.returnMsg
    }

    result.returnCode = '0'
    result.returnMsg = "success"
    result.diamond = gameResult.diamond
    result.id = gameResult.id
    result.clearStage = gameResult.clearStage
    result.convertValue = gameResult.convertValue
    result.convertMax = gameResult.convertMax

    const inputInfo = { 'body' : { 'wallet': wallet }}
    const walletResult = await walletTokenInfo(inputInfo)
    console.log("walletResult:", walletResult)
    if( walletResult.returnCode == 0 ){
      result.xpla = walletResult.tokenInfo.xpla
      result.token = walletResult.tokenInfo.token
    }

    return result

  } catch(err) {
    console.log("error:", err)

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  

