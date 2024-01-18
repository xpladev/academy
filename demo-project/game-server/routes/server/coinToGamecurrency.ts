import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[coinToGamecurrency]", req.body)

    const {playerId, groupId, tid, gamecurrencyAmount, coinAmount} = req.body 

    const result: { [key: string]: any } = {};

    try {

      const [userInfoRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM user_info WHERE pid = ?', [playerId]))()
      if(userInfoRow.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }

      await Mysql.connect((con) => con.query(`
        insert into convert_tx(idx, convertType, playerId, groupId, tId, gamecurrencyAmount, coinAmount, iscomplete, regDate)
        values (null, 'in', ?, ?, ?, ?, ?, 0, now())`,
        [ playerId, 0, tid, gamecurrencyAmount, coinAmount ]))()
          
      result.returnCode = 0
      result.returnMsg = "success"

      return result

    } catch(err) {
      console.log("error:", err)

      result.returnCode = '499'
      result.returnMsg = "MiddleServer error"

      return result
    }

  }
  