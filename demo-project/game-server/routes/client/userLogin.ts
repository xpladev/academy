import { Mysql } from '../../system/mysql'

var walletTokenInfo = require('../wallet/walletTokenInfo');
var userInfo = require('./userInfo');

module.exports =  async function(req) {

    console.log("[client_userLogin]", req.body.id)

    const {id, password} = req.body 

    let result: { [key: string]: any } = {};

    try {

      const [userInfoRow, ] = await Mysql.connect((con) => con.query(
        `SELECT pid FROM user_info 
         WHERE id = ? and password = SHA2(?, 512)`, [id, password]))()
      if(userInfoRow.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }

      const req: { [key: string]: any } = {};
      const pid = userInfoRow[0].pid
      req.body = {pid}
      result = await userInfo(req)
      console.log("result:", result)

      // req.session.pid = result.pid
      // req.session.wallet = result.wallet
      // req.session.authenticated = true

      // await req.session.save()
      // console.log("req.session:", req.session)

      return result

    } catch(err) {
      console.log("error:", err)
      
      result.returnCode = '499'
      result.returnMsg = "GameServer error"

      return result
    }

  }
  