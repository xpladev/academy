import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[gamecurrencyToCoin]", req.body)

    const {playerId, groupId, tid, gamecurrencyAmount, coinAmount} = req.body 

    const result: { [key: string]: any } = {};

    try {

      const [configRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM game_config', []))()
      if(configRow.length <= 0) {         
        result.returnCode = '499'
        result.returnMsg = "MiddleServer error"

        return result 
      }
  
      let gameConfigData  = configRow[0]
      const gameCurrencyAmountMin = gameConfigData.gameCurrencyAmountMin

      const [userInfoRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM user_info WHERE pid = ?', [playerId]))()
      if(userInfoRow.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }
    
      if( gameCurrencyAmountMin > gamecurrencyAmount ){          
        result.returnCode = '407'
        result.returnMsg = `Invalid Input Value`

        return result 
      }

      let userInfoData = userInfoRow[0]
      
      if( userInfoData.diamond < gamecurrencyAmount ){
        result.returnCode = '408'
        result.returnMsg = "Insufficient Currency to Convert"

        return result 
      }

      const [db, ] = await Mysql.connect((con) => con.query(
        `SELECT * FROM daily_convert WHERE DATE_FORMAT(convertDate, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') and pid = ?`, [playerId]))()
      if(db.length > 0) {    
        if( db[0].convertValue + gamecurrencyAmount > userInfoData.diamond_max ) {
          result.returnCode = '407'
          result.returnMsg = `Invalid Input Value`
  
          return result 
        }
      }

      await Mysql.connect((con) => con.query('update user_info set diamond = diamond - ? where pid = ? ', [ gamecurrencyAmount, playerId]))()
      console.log('update user_info set diamond = diamond - ? where pid = ? ', [ gamecurrencyAmount, playerId])
      await Mysql.connect((con) => con.query(`
        insert into convert_tx(idx, convertType, playerId, groupId, tId, gamecurrencyAmount, coinAmount, isComplete, regDate)
        values (null, 'out', ?, ?, ?, ?, ?, 0, now())`,
        [ playerId, '0', tid, gamecurrencyAmount, coinAmount ]))()
          
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
  