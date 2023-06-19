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
        "/index.js": `const { LCDClient } = require("@xpla/xpla.js");

const lcd = new LCDClient({
  chainID: 'cube_47-5',
  URL: 'https://cube-lcd.xpla.dev'
});

async function main() {
  const txInfo = await lcd.tx.txInfo("ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"); // 트랜잭션 데이터
  console.log(JSON.stringify(txInfo, null, 2));

  const balance = await lcd.bank.balance("xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8"); // 잔액 정보
  console.log(JSON.stringify(balance, null, 2));
}
main()`,
      }}
      options={{ layout: "console" }}
    />
  );
};

export default Ex01;
