import {
  Sandpack,
} from "@codesandbox/sandpack-react";
import React from "react";

const Ex10 = () => {
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
    const contractAddress = "xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn";
    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";

    const userNFTsMsg = {
        tokens : {
            owner : userAddress
        }
    };
    const userNFTs = await lcd.wasm.contractQuery(contractAddress, userNFTsMsg);
    console.log(userNFTs);

    const tokenIds = userNFTs.tokens;
    for (const tokenId of tokenIds) {
        const nftInfoMsg = {
            nft_info : {
                token_id : tokenId
            }
        }
        const nftInfo = await lcd.wasm.contractQuery(contractAddress, nftInfoMsg);
        console.log(JSON.stringify(nftInfo, null, 2));
    }
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

export default Ex10;
