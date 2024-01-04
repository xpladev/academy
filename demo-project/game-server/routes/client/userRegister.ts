import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[client_userRegister]", req.body.id)

    const {id, password, name} = req.body 

    const result: { [key: string]: any } = {};

    try {

      await Mysql.connect((con) => con.query(`
        insert into user_info(pid, id, password, diamond, diamond_max, name, highStage, chainHighScore, chainHighScoreDate, wallet)
        values (null, ?, SHA2(?, 512), 100, 5000, ?, 0, 0, 0, '')`,
        [ id, password, name ]))()

      result.returnCode = '0'
      result.returnMsg = "success"

      return result

    } catch(err) {
      console.log("error:", err)

      result.returnCode = '499'
      result.returnMsg = "GameServer error"

      return result
    }

  }
  