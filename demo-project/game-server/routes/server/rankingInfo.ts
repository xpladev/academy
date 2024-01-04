import { Mysql } from '../../system/mysql'

module.exports =  async function(req) {

    console.log("[rankingInfo]", req.body)

    const {wallet} = req.body 

    const result: { [key: string]: any } = {};

    try {

      const [userInfoRow, ] = await Mysql.connect((con) => con.query('SELECT * FROM user_info WHERE wallet = ?', [wallet]))()
      if(userInfoRow.length <= 0) {          
        result.returnCode = '401'
        result.returnMsg = "Failed to Get User Information"

        return result 
      }
      const userInfoData = userInfoRow[0]

      let [rankingRow, ] = await Mysql.connect((con) => con.query(
        `SELECT RANK() OVER (ORDER BY chain_high_score DESC) AS chain_ranking, id, chain_high_score FROM user_info WHERE chain_high_score > -1 LIMIT 10`, []))()
      if(rankingRow.length <= 0) {          
        result.returnCode = '499'
        result.returnMsg = 'Server error 1'
  
        return result 
      }
  
      let [myRankingRow, ] = await Mysql.connect((con) => con.query(
        `SELECT CASE WHEN chain_high_score < 0 THEN -1 ELSE chain_ranking END AS chain_ranking, id, chain_high_score FROM (
          SELECT id, a.pid, a.wallet, a.diamond, a.chain_high_score, a.chain_high_score_date, a.high_stage,
          IFNULL(b.isCheat, 1)AS isCheat, RANK() OVER (ORDER BY chain_high_score DESC) AS chain_ranking
          FROM user_info AS a
          LEFT JOIN cheat_user AS b
          ON a.pid = b.pid )AS aa
          WHERE pid = ?`, [userInfoData.pid]))()
      if(myRankingRow.length <= 0) {          
        result.returnCode = '499'
        result.returnMsg = 'Server error 2'
  
        return result 
      }

      result.returnCode = '0'
      result.returnMsg = "success"
      result.id = userInfoData.id
      result.score = userInfoData.high_score
      result.date = userInfoData.high_score_date.toISOString().replace('T', ' ').slice(0, -5);
      result.ranking = rankingRow
      result.myRanking = myRankingRow
      result.isRecoding = userInfoData.isRecoding
      
      return result

    } catch(err) {
      console.log("error:", err)

      result.returnCode = '499'
      result.returnMsg = "MiddleServer error"

      return result
    }

  }
  