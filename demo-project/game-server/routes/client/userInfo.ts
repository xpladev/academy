import { Mysql } from '../../system/mysql'

var walletTokenInfo = require('../wallet/walletTokenInfo');

module.exports =  async function(req) {

    console.log("[client_userInfo]", req.body)

    const {pid} = req.body 

    const result: { [key: string]: any } = {};

    try {

      const [userInfoRow, ] = await Mysql.connect((con) => con.query(
        `SELECT id, PASSWORD, pid, wallet, diamond, chain_high_score, chain_high_score_date, high_stage, isCheat,
        CASE WHEN chain_high_score < 0 THEN -1 ELSE chain_ranking END AS chain_ranking  FROM (
          SELECT id, password, a.pid, a.wallet, a.diamond, a.chain_high_score, a.chain_high_score_date, a.high_stage,
          IFNULL(b.isCheat, 0) AS isCheat, RANK() OVER (ORDER BY chain_high_score DESC) AS chain_ranking
          FROM user_info AS a
          LEFT JOIN cheat_user AS b
          ON a.pid = b.pid ) AS aa
        WHERE pid = ?`, [pid]))()
      if(userInfoRow.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }

      const [configRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM game_config', []))()
      if(configRow.length <= 0) {         
        result.returnCode = '499'
        result.returnMsg = "GameServer error"

        return result 
      }
          
      result.returnCode = '0'
      result.returnMsg = ""     
      result.id = userInfoRow[0].id
      result.pid = userInfoRow[0].pid
      result.wallet = userInfoRow[0].wallet
      result.diamond = userInfoRow[0].diamond
      result.chainHighScore = userInfoRow[0].chain_high_score
      var dataConvert = userInfoRow[0].chain_high_score_date.toISOString().replace('T', ' ').slice(0, -5);
      result.chainHighScoreDate = dataConvert
      result.chainRanking = userInfoRow[0].chain_ranking
      result.highStage = userInfoRow[0].high_stage
      result.isCheat = userInfoRow[0].isCheat
      result.convertUri = configRow[0].convertUri      
      result.leaderboardUri = configRow[0].leaderboardUri
      result.mintUri = configRow[0].mintUri
      result.xpla = ""
      result.token = ""

      if( result.wallet != undefined && result.wallet != ""){
        const inputInfo = { 'body' : { 'wallet': result.wallet }}
        const walletResult = await walletTokenInfo(inputInfo)
        if( walletResult.returnCode == 0 ){
          result.xpla = walletResult.tokenInfo.xpla
          result.token = walletResult.tokenInfo.token
        }
      }

      return result

    } catch(err) {
      console.log("error:", err)
      
      result.returnCode = '499'
      result.returnMsg = "GameServer error"

      return result
    }

  }
  