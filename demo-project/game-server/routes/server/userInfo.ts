import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[userInfo]", req.body)

    const {wallet} = req.body 

    const result: { [key: string]: any } = {};

    try {

      // const [configRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM game_config', []))()
      // if(configRow.length <= 0) {         
      //   result.returnCode = '499'
      //   result.returnMsg = "MiddleServer error"

      //   return result 
      // }

      const [userInfoRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM user_info WHERE wallet = ?', [wallet]))()
      if(userInfoRow.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }
      const userInfoData = userInfoRow[0]
      
      let convertValue = 0
      const [convertRow, ] = await Mysql.connect((con) => con.query(
        `SELECT * FROM daily_convert 
        WHERE DATE_FORMAT(convertDate, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') and pid = ?`, [userInfoData.pid]))()
      if(convertRow.length > 0) {          
        convertValue = convertRow[0].convertValue
      }

      result.returnCode = '0'
      result.returnMsg = "success"
      result.id = userInfoData.id
      result.diamond = userInfoData.diamond
      result.pid = userInfoData.pid
      result.clearStage = userInfoData.high_stage
      result.high_score = userInfoData.high_score
      result.high_score_date = userInfoData.high_score_date
      result.chain_high_score = userInfoData.chain_high_score
      result.chain_high_score_date = userInfoData.chain_high_score_date.toISOString().replace('T', ' ').slice(0, -5)
      result.convertValue = convertValue
      result.convertMax = userInfoData.diamond_max
      
      return result

    } catch(err) {
      console.log("error:", err)

      result.returnCode = '499'
      result.returnMsg = "MiddleServer error"

      return result
    }

  }
  