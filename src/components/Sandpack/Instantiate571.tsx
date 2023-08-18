import {
  Sandpack,
} from "@codesandbox/sandpack-react";
import React from "react";

const Instantiate571 = () => {
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
        "/index.js": `const { LCDClient, MnemonicKey, MsgInstantiateContract, Fee, SignMode } = require("@xpla/xpla.js");

const lcd = new LCDClient({
  chainID: 'cube_47-5',
  URL: 'https://cube-lcd.xpla.dev'
});

const main = async () => {
  const mk = new MnemonicKey({
    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // Replace with your mnemonic words
  })

  const wallet = lcd.wallet(mk);
  const myWalletAddress = wallet.key.accAddress;

  const init_msg = {
    owner: "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",
    description: "Game Data Contract",
  };

  const instantiate = new MsgInstantiateContract(
    myWalletAddress, // sender
    myWalletAddress, // admin
    571, // Example Contract Code ID
    init_msg,
    {}, 
    'My First Comswasm Contract', 
  );

  const signedTx = await lcd.wallet(mk).createAndSignTx({ 
    msgs: [instantiate]
  });

  const txResult = await lcd.tx.broadcastSync(signedTx);
  console.log(txResult.txhash);
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

export default Instantiate571;
