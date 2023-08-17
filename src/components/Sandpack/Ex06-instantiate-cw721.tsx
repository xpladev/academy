import {
    Sandpack,
  } from "@codesandbox/sandpack-react";
  import React from "react";
  
  const Ex06 = () => {
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
          "/index.js": `const { LCDClient, MnemonicKey, MsgInstantiateContract } = require("@xpla/xpla.js");

const lcd = new LCDClient({
  chainID: 'cube_47-5',
  URL: 'https://cube-lcd.xpla.dev'
});

const main = async () => {
  const mk = new MnemonicKey({
    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // 여러분의 니모닉 단어로 바꿔주세요.
  })

  const wallet = lcd.wallet(mk);
  const myWalletAddress = wallet.key.accAddress;

  const init_msg = {
    "name": "YourNFTName",
    "symbol": "YNN",
    "minter": myWalletAddress
  }

  const instantiate = new MsgInstantiateContract(
    myWalletAddress, // sender
    myWalletAddress, // admin
    3, // MAINNET, TESTNET CW721 code id
    init_msg,
    {}, // 컨트랙트에 전송할 XPLA 토큰 수량, 현재는 필요하지 않으니 비워둡니다.
    'Input your label', // 작성하고 싶은 라벨을 입력해주세요.
  );

  const signedTx = await lcd.wallet(mk).createAndSignTx({ // 트랜잭션 생성 및 사이닝
    msgs: [instantiate]
  });

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
  
  export default Ex06;
  