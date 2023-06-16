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
        "/index.js": `const { MnemonicKey, LCDClient } = require("@xpla/xpla.js");

const newKey = new MnemonicKey();
console.log("mnemonic: " + newKey.mnemonic);

const lcd = new LCDClient({
	chainID : 'cube_47-5', // xpla testnet network의 이름
	URL : 'https://cube-lcd.xpla.dev' // xpla testnet LCD URL
});
console.log("accAddress: " + lcd.wallet(newKey).key.accAddress);`,
      }}
      options={{ layout: "console" }}
    />
  );
};

export default Ex01;
