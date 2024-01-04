import { walletLog } from './serverInfo'

var rankingInfo = require('../server/rankingInfo');

module.exports =  async function(req) { 

  walletLog("info", "wallet-ranking-info req", req.body)

  const {wallet} = req.body 

  const result: { [key: string]: any } = {};

  try {

    const req: { [key: string]: any } = {};
    req.body = {wallet}
    const rankingData = await rankingInfo(req)
    if( rankingData.returnCode != 0 ){
      throw rankingData.returnMsg
    }

    result.returnCode = 0
    result.returnMsg = "success"
    result.id = rankingData.id
    result.score = rankingData.score
    result.date = rankingData.date
    result.ranking = rankingData.ranking
    result.myRanking = rankingData.myRanking
    result.isRecoding = rankingData.isRecoding

    return result

  } catch(err) {
    console.log("error:", err)

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  

