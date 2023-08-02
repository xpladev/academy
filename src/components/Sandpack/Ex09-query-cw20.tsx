import {
  Sandpack,
} from "@codesandbox/sandpack-react";
import React from "react";

const Ex09 = () => {
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
    const contractAddress = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc";
    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";
    const msg = {
        balance : {
            address : userAddress
        }
    };

    const balance = await lcd.wasm.contractQuery(contractAddress, msg);
    console.log(balance);
}
main()`,
      }}
      options={{ 
        layout: "console",
        showLineNumbers : true,
        editorHeight: 500,
      }}
    />
  );
};

export default Ex09;
