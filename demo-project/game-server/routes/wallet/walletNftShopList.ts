import { walletMysql } from "../../system/mysql";
import { LCDClient } from "@xpla/xpla.js"
import { URL, chainID, cw721_contract } from './serverInfo'

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  console.log("[walletNftShopList]", req.body)

  const {wallet} = req.body 

  const result: { [key: string]: any } = {};

  try {

    let [shopRow, ] = await walletMysql.connect((con) => con.query(
      `SELECT * FROM nft_shop`, []))()
    if(shopRow.length <= 0) {          
      result.returnCode = '401'
      result.returnMsg = "Failed to Get User Information"

      return result 
    }

    let shopNoAry = []
    let tokens : any = await lcd.wasm.contractQuery(
      cw721_contract,
      {
        "tokens":{
          "owner":wallet,
          "limit": 30
        }
      }
    );

    for( let i = 0 ; i < tokens.tokens.length ; ++i ) {
      let tokenId = tokens.tokens[i]
      let nftInfo: any = await lcd.wasm.contractQuery(
        cw721_contract,
        {"all_nft_info":{"token_id":tokenId}}
      );       
      
      let findOwner = nftInfo?.info?.extension?.attributes.filter(function (obj) {    
        return obj['trait_type'] === 'shop_no'
      });          

      let shopNo = 0
      try{
        shopNo = findOwner[0].value
      } catch(err) {
      }    

      if( shopNo != 0 ){
        shopNoAry.push(shopNo)
      }
    }
    
    for( let i = 0 ; i < shopRow.length ; ++i ){
      let isHave = shopNoAry.includes(String(shopRow[i].idx))
      console.log("isHave:", shopRow[i].idx, isHave )

      if( isHave === false ) {
        shopRow[i].isHave = 0
      } else {
        shopRow[i].isHave = 1
      }
    }

    result.returnCode = '0'
    result.returnMsg = "success"
    result.shopList = shopRow
    return result

  } catch(err) {
    console.log("error:", err)

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  
