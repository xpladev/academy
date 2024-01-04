import { Mysql } from '../../system/mysql'

module.exports =  async function() {

    console.log("[gameConfig]")

    const result: { [key: string]: any } = {};

    try {

        let data 

        const [row, ] = await Mysql.connect((con) => con.query('SELECT * FROM game_config', []))()
        if(row.length < 0) {         
            result.returnCode = '499'
            result.returnMsg = "MiddleServer error"
    
            return result 
        }
    
        data = row[0]
        const resultData : { [key: string]: any } = {};
        resultData.numberOfMaterials = data.numberOfMaterials
        resultData.c2xMintingFee = data.c2xMintingFee
        resultData.gameTokenMintingFee = data.gameTokenMintingFee
        resultData.traitAffectingFees = data.traitAffectingFees
        resultData.affectedC2xMintingFees = []
        resultData.affectedGameTokenMintingFees = []
            
        result.returnCode = '0'
        result.returnMsg = "success"
        result.isNft = data.isNft
        result.nftConfig = resultData
        
        return result
    } catch(err) {
        console.log("error:", err)

        result.returnCode = '499'
        result.returnMsg = "MiddleServer error"

        return result
    }

  }
  