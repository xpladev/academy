import {
  Sandpack,
} from "@codesandbox/sandpack-react";
import React from "react";

const Ex05 = () => {
  return (
    <Sandpack
      customSetup={{
        dependencies: {
          "@xpla/xpla.js": "^0.3.1",
          "crypto-browserify" : "latest"
        },
        entry: "index.js",
      }}
      files={{
        "/index.js": `const { LCDClient,  MnemonicKey, MsgExecuteContract, TxAPI, Fee } = require("@xpla/xpla.js");

const lcd = new LCDClient({
  chainID: 'cube_47-5',
  URL: 'https://cube-lcd.xpla.dev'
});

const main = async () => {
  const mk = new MnemonicKey({
    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle'
  })

  const wallet = lcd.wallet(mk);
  const myWalletAddress = wallet.key.accAddress;
  
  const cw20_contract = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc"; // example-4.js에서 생성한 cw20 토큰의 주소로 교체합니다.

  const transferMsg = new MsgExecuteContract(
    myWalletAddress,
    cw20_contract,
    {
      transfer: {
        recipient : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",
        amount: "100000"
      }
    }
  );
  
  const signedTx = await lcd.wallet(mk).createAndSignTx({ // 트랜잭션 생성 및 사이닝, 트랜잭션 fee 설정
    msgs: [transferMsg]
  });

  // const accInfo = await lcd.auth.accountInfo(myWalletAddress)
  // const acc = accInfo;
  
  // // 메세지에 대한 예상 트랜잭션 fee를 알아낸다.
  // const tx_api = new TxAPI(lcd)
  // const simul_fee = await tx_api.estimateFee(
  // 	[{
    //     sequenceNumber: acc.sequence,
    //     publicKey: mk.publicKey
    // }],
  // 	{
  // 		msgs: [transferMsg],
  // 		gasAdjustment: 1.25,			
  // 	}
  // )
    
  // const fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString());
  
  // const signedTx = await wallet.createAndSignTx({
  //   msgs: [transferMsg], fee
  // });

  const txResult = await lcd.tx.broadcastSync(signedTx);
  console.log(txResult.txhash);
}
main()
        `,
      }}
      options={{ 
        layout: "console",
        showLineNumbers : true,
        editorHeight: 600,
      }}
    />
  );
};

export default Ex05;
