import { Mysql } from '../../system/mysql'


function isAlphanumeric(input) {
  const alphanumericRegex = /^[A-Za-z0-9]+$/;
  return alphanumericRegex.test(input);
}

module.exports =  async function(req) {

    console.log("[wallet_connect]", req.body.wallet, req.body.id)

    const {wallet, id, password} = req.body 

    const result: { [key: string]: any } = {};

    try {

      const [userInfoRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM user_info WHERE id = ?', [id]))()
      if(userInfoRow.length > 0) {          
        result.returnCode = '400'
        result.returnMsg = "Unavailable ID"

        return result 
      }
  
      const [filterRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM id_filter WHERE id = ?', [id]))()
      if(filterRow.length > 0) {          
        result.returnCode = '400'
        result.returnMsg = "Unavailable ID"

        return result 
      }

      const idCheck = isAlphanumeric(id)
      if(idCheck === false){
        result.returnCode = '402'
        result.returnMsg = "ID Requirements Not Met"
  
        return result
      }
        
      if( id.length > 12 || id.length < 4 ){
        result.returnCode = '402'
        result.returnMsg = "ID Requirements Not Met"
  
        return result
      }

      if( password.length > 12 || password.length < 4 ){
        result.returnCode = '403'
        result.returnMsg = "PW Requirements Not Met"
  
        return result
      }
      
      await Mysql.connect((con) => con.query(`
        insert into user_info(pid, id, password, diamond, diamond_min, diamond_max, high_stage, chain_high_score, chain_high_score_date, isRecoding, wallet)
        values (null, ?, SHA2(?, 512), 100, 1, 5000, 0, -1, now(), 0, ?)`,
        [ id, password, wallet ]))()

      result.returnCode = '0'
      result.returnMsg = "success"   

      return result

    } catch(err) {
      console.log("error:", err)

      result.returnCode = '499'
      result.returnMsg = "Wallet Server Error"

      return result
    }

  }
  