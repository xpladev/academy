import {
    Sandpack,
  } from "@codesandbox/sandpack-react";
  import React from "react";
  
  const Query571 = () => {
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
          "/index.js": `const { LCDClient } = require("@xpla/xpla.js");

const lcd = new LCDClient({
    chainID: 'cube_47-5',
    URL: 'https://cube-lcd.xpla.dev'
});

async function main() {
    const contractAddress = "xpla1k6ufjtkyjnxgkmxjew96n2kssdzslpnp398ghm82hk5tt2xdls9spnufcz";
    
    const queryMsg = {
        game_data : {
            user : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"
        }
    }

    const gameData = await lcd.wasm.contractQuery(contractAddress, queryMsg);
    console.log(gameData);
}
main()`,
        }}
        options={{ 
          layout: "console",
          showLineNumbers : true,
          editorHeight: 400,
        }}
      />
    );
  };
  
  export default Query571;
  