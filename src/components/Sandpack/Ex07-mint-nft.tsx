import {
    Sandpack,
  } from "@codesandbox/sandpack-react";
  import React from "react";
  
  const Ex07 = () => {
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
          "/index.js": `const { LCDClient, MnemonicKey, MsgExecuteContract } = require("@xpla/xpla.js");

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
  const myContractAddress = "xpla10r58td65tgvpaqngg7802rtpg5l6as8my2unnlnpa8en894qqstshxq0u0"; // Input your Contract Address

  const time = new Date();
  const mintJSON = {
    mint: {
      owner: myWalletAddress,
      token_id: \`token_id_\${time.getTime()}\`,
      // token_uri: "https://your.token.uri.address", // input your token_uri
      extension: {
        name : "My Test XPLA NFT",
        // image: "https://your.image.url", // input your nft image url
        attributes: [
          {
            value: 'Alice',
            trait_type: 'CharacterName',
          },
          {
            value: '100',
            trait_type: 'CP',
          },
          {
            value: '10',
            trait_type: 'HP',
          },
        ],
        description : "This is my First NFT in XPLA Blockchain!",
      },
    },
  };
  const mint = new MsgExecuteContract(
    myWalletAddress,
    myContractAddress,
    mintJSON
  );

  const signedTx = await lcd.wallet(mk).createAndSignTx({ // 트랜잭션 생성 및 사이닝, 트랜잭션 fee 설정
    msgs: [mint]
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
  
  export default Ex07;
  