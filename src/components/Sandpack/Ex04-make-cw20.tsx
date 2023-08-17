import {
  Sandpack,
} from "@codesandbox/sandpack-react";
import React from "react";

const Ex04 = () => {
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
    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // 여러분의 니모닉 단어로 바꿔주세요.
  })

  const wallet = lcd.wallet(mk);
  const myWalletAddress = wallet.key.accAddress;

  const init_msg = {
    name: "My CW20 Token", // My Cw20 Token
    symbol: "MCT", // My Cw20 Token
    decimals: 6,
    initial_balances: [{ address: myWalletAddress, amount: "2000000000000000" }], // 초기 물량을 보유하고 있을 주소들을 배열로 지정합니다.
    mint: { // 추가로 mint가 필요한 경우를 대비해 minter도 지정할수 있지만 옵션입니다.
      minter: myWalletAddress
    }
  };

  const instantiate = new MsgInstantiateContract(
    myWalletAddress, // sender
    myWalletAddress, // admin
    1, // MAINNET, TESTNET CW20 code id
    init_msg,
    {}, // 컨트랙트에 전송할 XPLA 토큰 수량, 현재는 필요하지 않으니 비워둠.
    'My CW20 Token', // 작성하고 싶은 라벨을 입력해주세요.
  );

  const signedTx = await lcd.wallet(mk).createAndSignTx({ // 트랜잭션 생성 및 사이닝
    msgs: [instantiate]
  });

  // createAndSignTx 함수를 분리하여 직접 작성하면 아래와 같습니다.
  // const accInfo = await lcd.auth.accountInfo(myWalletAddress) // 지갑 정보 받아오기
  // const acc = accInfo;
  
  // const userSignOption = { // 서명 정보 
  // 	chainID: 'cube_47-5',
  // 	accountNumber: acc.account_number,
  // 	sequence: acc.sequence,
  // 	signMode: SignMode.SIGN_MODE_DIRECT
  // }
  
  // const fee = new Fee(3000000, "2550000000000000000axpla") // 수수료 금액 설정
  
  // const tx = await lcd.tx.create([], { msgs: [instantiate], fee }) // 트랜잭션 생성
  
  // const signedTx = await wallet.key.signTx(tx, userSignOption) // 서명

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

export default Ex04;
