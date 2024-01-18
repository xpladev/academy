import { LCDClient } from "@xpla/xpla.js"
import { URL, chainID, cw721_contract } from './serverInfo'

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  console.log("[walletNftList]", req.body)

  const {wallet, tokenId} = req.body 

  const result: { [key: string]: any } = {};

  try {

    let nftInfo: any = await lcd.wasm.contractQuery(
      cw721_contract,
      {"all_nft_info":{"token_id":tokenId}}
    );       

    if( wallet != nftInfo?.access?.owner) {
      result.returnCode = '405'
      result.returnMsg = "Request information not found"
      return result
    }

    result.returnCode = '0'
    result.returnMsg = "success"
    result.extension = nftInfo?.info?.extension
    return result

  } catch(err) {
    console.log("error:", err)

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  
