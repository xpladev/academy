import { LCDClient } from "@xpla/xpla.js"
import { URL, chainID, cw20_contract, xplaDecimal, tokenDecimal } from './serverInfo'

const lcd = new LCDClient({	chainID,	URL });

module.exports =  async function(req) { 

  console.log("[walletTokenInfo]", req.body)

  const {wallet} = req.body 

  const result: { [key: string]: any } = {};

  try {

    const [balance] = await lcd.bank.balance(wallet);
    const balanceRet = balance.toData()

    let tokenInfo : { [key: string]: any } = {};
    for( let j = 0; j< balanceRet.length; ++j ) {
      tokenInfo.xpla = `${Number(balanceRet[j].amount)/xplaDecimal}`
    }

    const tokenBalance: any= await lcd.wasm.contractQuery(cw20_contract, { balance: { address: wallet } })
    tokenInfo.token =`${tokenBalance.balance/tokenDecimal}`

    result.returnCode = '0'
    result.returnMsg = "success"
    result.tokenInfo = tokenInfo
    return result

  } catch(err) {
    console.log("error:", err)

    result.returnCode = '499'
    result.returnMsg = err

    return result
  }
}  
