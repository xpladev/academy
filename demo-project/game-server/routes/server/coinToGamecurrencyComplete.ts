import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[coinToGamecurrencyComplete]", req.body)

    const {playerId, groupId, tid, success} = req.body 

    const result: { [key: string]: any } = {};

    try {

      let dbSuccess = 0

      const [convertTxRow, ] = await Mysql.connect((con) => con.query(`
        SELECT gameCurrencyAmount, playerId, isComplete 
        FROM convert_tx 
        WHERE tId = ? and groupId = ?`, [tid, 0]))()
      if(convertTxRow.length <= 0) {          
        result.returnCode = '405'
        result.returnMsg = "Request information not found"

        return result 
      }
      let convertTxData = convertTxRow[0]

      if(convertTxData.playerId != playerId) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }

      if( convertTxData.isComplete === 1){
        result.returnCode = '400'
        result.returnMsg = "Input Information Error"

        return result 
      }
      
      if( success === true ){      
        dbSuccess = 1
        let diamondRecoverValue = parseInt(convertTxData.gameCurrencyAmount)

        await Mysql.connect((con) => con.query('update user_info set diamond = diamond + ? where pid = ? ', [ diamondRecoverValue, playerId]))()
        console.log('update user_info set diamond = diamond + ? where pid = ? ', [ diamondRecoverValue, playerId])
      }

      await Mysql.connect((con) => con.query(`update convert_tx set isComplete = 1, success = ? where tId = ?`, [dbSuccess, tid]))()
            
      const [userInfoRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM user_info WHERE pid = ?', [playerId]))()
      if(userInfoRow.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }

      let userInfoData = userInfoRow[0]

      result.returnCode = '0'
      result.returnMsg = "success"
      result.gamecurrencyAmount = userInfoData.diamond
      
      return result

    } catch(err) {
      console.log("error:", err)

      result.returnCode = '499'
      result.returnMsg = "MiddleServer error"

      return result
    }

  }
  