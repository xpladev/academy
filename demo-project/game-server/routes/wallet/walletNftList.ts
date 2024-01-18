import { LCDClient } from "@xpla/xpla.js"
import { URL, chainID, cw721_contract } from './serverInfo'

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  console.log("[walletNftList]", req.body)

  const {wallet, startTokenId} = req.body 

  const result: { [key: string]: any } = {};
  let tokens

  try {

    if( startTokenId === ""){
      tokens = await lcd.wasm.contractQuery(
        cw721_contract,
        {
          "tokens":{
            "owner":wallet,
            "limit": 30
          }
        }
      );
    }
    else{
      tokens = await lcd.wasm.contractQuery(
        cw721_contract,
        {
          "tokens":{
            "owner":wallet,
            "start_after": startTokenId,
            "limit": 30
          }
        }
      );
    }

    result.returnCode = '0'
    result.returnMsg = "success"
    result.tokenList = tokens
    return result

  } catch(err) {
    console.log("error:", err)

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  
