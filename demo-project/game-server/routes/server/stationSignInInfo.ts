import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[stationSignInInfo]", req.body)

    const {accAddress, playerId} = req.body 

    const result: { [key: string]: any } = {};

    try {

      const [walletData, ] = await Mysql.connect((con) => con.query(`
        SELECT ifnull(wallet, '') as wallet from user_info where pid = ?`, [playerId]))()
      if(walletData.length <= 0) {          
        result.returnCode = '405'
        result.returnMsg = "Request information not found"

        return result 
      }

      // if( walletData[0].wallet != '' && walletData[0].wallet != undefined ){
      //   result.returnCode = '0'
      //   result.returnMsg = "success"
        
      //   return result
      // }

      await Mysql.connect((con) => con.query(`update user_info set wallet = ? where pid = ?`,
        [accAddress, playerId]))()
      
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
  