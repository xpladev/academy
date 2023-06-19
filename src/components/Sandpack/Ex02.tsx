import {
  Sandpack,
} from "@codesandbox/sandpack-react";
import React from "react";

const Ex01 = () => {
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
        "/index.js": `const { LCDClient, MsgSend, MnemonicKey } = require("@xpla/xpla.js");

const lcd = new LCDClient({
  chainID: 'cube_47-5',
  URL: 'https://cube-lcd.xpla.dev'
});

async function main() {
  const mk = new MnemonicKey({
    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',
  })

  const from = lcd.wallet(mk).key.accAddress;
  const to = "xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv"; // faucet 지갑 주소
  const token = { axpla: 25 };

  const signedTx = await lcd.wallet(mk).createAndSignTx({ // 트랜잭션 생성 및 사이닝, 트랜잭션 fee 설정
    msgs: [new MsgSend(from, to, token)]
  });

  const txResult = await lcd.tx.broadcastSync(signedTx); // 트랜잭션을 블록체인에 전송
  console.log("Your Transaction Hash: " + txResult.txhash);
}
main()`,
      }}
      options={{ layout: "console" }}
    />
  );
};

export default Ex01;
