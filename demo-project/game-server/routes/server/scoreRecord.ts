import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[scoreRecord]", req.body)

    const {wallet} = req.body 

    const result: { [key: string]: any } = {};

    try {

      const [userInfoRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM user_info WHERE wallet = ?', [wallet]))()
      if(userInfoRow.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }      

      await Mysql.connect((con) => con.query(
      `update user_info set isRecoding = 1, chain_high_score = high_score, chain_high_score_date = high_score_date where wallet = ?`, [wallet]))()
      
      result.returnCode = '0'
      result.returnMsg = "success"
      
      return result

    } catch(err) {
      console.log("error:", err)

      result.returnCode = '499'
      result.returnMsg = "MiddleServer error"

      return result
    }

  }
  