import {
  Sandpack,
} from "@codesandbox/sandpack-react";
import React from "react";

const Ex02 = () => {
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
  const to = "xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv"; // Faucet wallet address
  const token = { axpla: 25 };

  const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction
    msgs: [new MsgSend(from, to, token)]
  });

  const txResult = await lcd.tx.broadcastSync(signedTx); // Sending transactions to blockchain
  console.log("Your Transaction Hash: " + txResult.txhash);
}
main()`,
      }}
      options={{ 
        layout: "console",
        showLineNumbers : true,
        editorHeight: 600,
      }}
    />
  );
};

export default Ex02;
