import {
    Sandpack,
  } from "@codesandbox/sandpack-react";
  import React from "react";
  
  const Execute571 = () => {
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
          "/index.js": `const { LCDClient,  MnemonicKey, MsgExecuteContract } = require("@xpla/xpla.js");

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
    
    const contractAddress = "xpla1k6ufjtkyjnxgkmxjew96n2kssdzslpnp398ghm82hk5tt2xdls9spnufcz"; // Replace it with the address of the CW20 token created in example-4.js.

    const executeMsg = {
      save_data : {
          user : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",
          last_stage : 10,
          high_score : 100,
          game_gold : 10
      }
    };
    
    const message = new MsgExecuteContract(
        myWalletAddress,
        contractAddress,
        executeMsg
    );
    
    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction
        msgs: [message]
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
  
  export default Execute571;
  