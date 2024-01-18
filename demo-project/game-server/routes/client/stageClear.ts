import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[client_stageClear]", req.body)

    const {pid, diamond, score, stage} = req.body 

    const result: { [key: string]: any } = {};

    try {

      const [row, ] = await Mysql.connect((con) => con.query(
        `SELECT * FROM user_info WHERE pid = ?`, [pid]))()
      if(row.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }

      const sumDiamond = row[0].diamond + diamond
      let highScore = row[0].chain_high_score
      let isRecoding = row[0].isRecoding
      let highScoreDate = row[0].chain_high_score_date
      let isBestScore = 0
      if( highScore < score ){
        highScore = score
        isRecoding = 0
        highScoreDate = new Date()
        isBestScore = 1
      }

      let highStage = row[0].high_stage
      if( highStage < stage ){
        highStage = stage
      }

      await Mysql.connect((con) => con.query(
        `update user_info set diamond = ?, high_score = ?, high_score_date = ?, isRecoding = ?, high_stage = ? WHERE pid = ?`,
        [sumDiamond, highScore, highScoreDate, isRecoding, highStage, pid]))()
      if(row.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }
          
      result.returnCode = '0'
      result.returnMsg = ""
      result.isBestScore = isBestScore

      return result

    } catch(err) {
      console.log("error:", err)
      
      result.returnCode = '499'
      result.returnMsg = "GameServer error"

      return result
    }

  }
  