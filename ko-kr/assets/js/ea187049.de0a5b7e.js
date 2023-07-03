"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[2313],{505:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(8947),l=t(7294);const s=()=>l.createElement(a.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":"const { LCDClient, MnemonicKey, MsgInstantiateContract, Fee, SignMode } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n  chainID: 'cube_47-5',\n  URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n  const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \ubc14\uafd4\uc8fc\uc138\uc694.\n  })\n\n  const wallet = lcd.wallet(mk);\n  const myWalletAddress = wallet.key.accAddress;\n\n  const init_msg = {\n    name: \"MCT\", // My Cw20 Token\n    symbol: \"MCT\", // My Cw20 Token\n    decimals: 6,\n    initial_balances: [{ address: myWalletAddress, amount: \"2000000000000000\" }], // \ucd08\uae30 \ubb3c\ub7c9\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc744 \uc8fc\uc18c\ub4e4\uc744 \ubc30\uc5f4\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n    mint: { // \ucd94\uac00\ub85c mint\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\ub97c \ub300\ube44\ud574 minter\ub3c4 \uc9c0\uc815\ud560\uc218 \uc788\uc9c0\ub9cc \uc635\uc158\uc785\ub2c8\ub2e4.\n      minter: myWalletAddress\n    }\n  };\n\n  const instantiate = new MsgInstantiateContract(\n    myWalletAddress, // sender\n    myWalletAddress, // admin\n    1, // MAINNET, TESTNET CW20 code id\n    init_msg,\n    {}, // \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud560 XPLA \ud1a0\ud070 \uc218\ub7c9, \ud604\uc7ac\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\ub2c8 \ube44\uc6cc\ub460.\n    'Input your label', // \uc791\uc131\ud558\uace0 \uc2f6\uc740 \ub77c\ubca8\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.\n  );\n\n  const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n    msgs: [instantiate]\n  });\n\n  // createAndSignTx \ud568\uc218\ub97c \ubd84\ub9ac\ud558\uc5ec \uc9c1\uc811 \uc791\uc131\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.\n  // const accInfo = await lcd.auth.accountInfo(myWalletAddress) // \uc9c0\uac11 \uc815\ubcf4 \ubc1b\uc544\uc624\uae30\n  // const acc = accInfo;\n  \n  // const userSignOption = { // \uc11c\uba85 \uc815\ubcf4 \n  // \tchainID: 'cube_47-5',\n  // \taccountNumber: acc.account_number,\n  // \tsequence: acc.sequence,\n  // \tsignMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON\n  // }\n  \n  // const fee = new Fee(3000000, \"2550000000000000000axpla\") // \uc218\uc218\ub8cc \uae08\uc561 \uc124\uc815\n  \n  // const tx = await lcd.tx.create([], { msgs: [instantiate], fee }) // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\n  \n  // const signedTx = await wallet.key.signTx(tx, userSignOption) // \uc11c\uba85\n\n  const txResult = await lcd.tx.broadcastSync(signedTx);\n  console.log(txResult.txhash);\n}\nmain()\n        "},options:{layout:"console"}})},3854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(7462),l=(t(7294),t(3905)),s=t(4673),i=t(505);const o={sidebar_position:2},c="\uac8c\uc784 \ud1a0\ud070(CW20) \ubc1c\ud589",r={unversionedId:"tutorial/make-web3-game/make-cw20",id:"tutorial/make-web3-game/make-cw20",title:"\uac8c\uc784 \ud1a0\ud070(CW20) \ubc1c\ud589",description:"CW20\uc744 \uc774\uc6a9\ud558\uba74 \uac8c\uc784 \uc0dd\ud0dc\uacc4\uc640 XPLA \ube14\ub85d\uccb4\uc778\uc744 \ub354 \uc27d\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 CW20\uc744 \ud1b5\ud574 \uac8c\uc784 \ud1a0\ud070\uc744 \ubc1c\ud589\ud574\ubd05\uc2dc\ub2e4.",source:"@site/docs/3-tutorial/1-make-web3-game/2-make-cw20.mdx",sourceDirName:"3-tutorial/1-make-web3-game",slug:"/tutorial/make-web3-game/make-cw20",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/make-web3-game/make-cw20",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\uc608\uc81c \ucf54\ub4dc \ub2e4\uc6b4\ub85c\ub4dc",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/make-web3-game/download-code"},next:{title:"\uac8c\uc784 \ud1a0\ud070(CW20) \uc804\uc1a1",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/make-web3-game/send-cw20"}},m={},d=[{value:"Preview",id:"preview",level:2},{value:"Javascript\ub85c CW20 \ubc1c\ud589\ud558\uae30",id:"runjs",level:2},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"runcode",level:3},{value:"\uc124\uba85",id:"explaination",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],p={toc:d},u="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uac8c\uc784-\ud1a0\ud070cw20-\ubc1c\ud589"},"\uac8c\uc784 \ud1a0\ud070(CW20) \ubc1c\ud589"),(0,l.kt)("p",null,"CW20\uc744 \uc774\uc6a9\ud558\uba74 \uac8c\uc784 \uc0dd\ud0dc\uacc4\uc640 XPLA \ube14\ub85d\uccb4\uc778\uc744 \ub354 \uc27d\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 CW20\uc744 \ud1b5\ud574 \uac8c\uc784 \ud1a0\ud070\uc744 \ubc1c\ud589\ud574\ubd05\uc2dc\ub2e4."),(0,l.kt)(s.Z,{summary:"CW20\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,l.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud50c\ub7ab\ud3fc\uc778 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub354\ub9ac\uc6c0\uc758 ERC20\ucc98\ub7fc, ",(0,l.kt)("strong",{parentName:"p"},"CW20"),"\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc5d0\uc11c \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(Fungible tokens)\uc5d0 \ub300\ud55c \ud45c\uc900\uc785\ub2c8\ub2e4. \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/crate/cw20/0.2.3"},"\uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,l.kt)("h2",{id:"preview"},"Preview"),(0,l.kt)("p",null,"Javascript\ub85c CW20\uc744 \ubc1c\ud589\ud558\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \ub123\uc5b4 \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uace0 \uc2e4\ud589\ud574\ubcf4\uc138\uc694. \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(i.Z,{mdxType:"Ex04"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,l.kt)("a",{parentName:"p",href:"/docs/tutorial/make-web3-game/make-cw20#runjs"},"\uc544\ub798 \ub0b4\uc6a9"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,l.kt)("a",{parentName:"p",href:"/docs/tutorial/make-web3-game/send-cw20"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"runjs"},"Javascript\ub85c CW20 \ubc1c\ud589\ud558\uae30"),(0,l.kt)("p",null,"CW20 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud558\uc5ec CW20 \ud1a0\ud070\uc744 \ubc1c\ud589\ud574\ubd05\uc2dc\ub2e4. CW20 \ucee8\ud2b8\ub799\ud2b8\uc758 Code ID\ub294 \uba54\uc778\ub137\uacfc \ud14c\uc2a4\ud2b8\ub137 \ubaa8\ub450 ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uc785\ub2c8\ub2e4."),(0,l.kt)(s.Z,{summary:"Code ID\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,l.kt)("p",null,"EVM\uacfc \ub2ec\ub9ac, Cosmwasm\uc5d0\uc11c\ub294 \ucf54\ub4dc \ubc30\ud3ec(Code Deploy)\uc640 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc774 \ud55c\ubc88\uc5d0 \uc774\ub904\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \ucf54\ub4dc\ub97c \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec(StoreCode)\ud558\uba74 \ud574\ub2f9 \ucf54\ub4dc\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \ubc1c\uae09 \ubc1b\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 ",(0,l.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \uae30\ubc18\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131(InstantiateContract)\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub611\uac19\uc740 Code ID\ub85c \uc0dd\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\ub4e4\uc740 \ubaa8\ub450 \uac19\uc740 \ucf54\ub4dc \uae30\ubc18\uc785\ub2c8\ub2e4. \ub2e4\ub9cc \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c \uc785\ub825\ud558\ub294 \ucd08\uae43\uac12(init_msg)\uc774 \ub2e4\ub974\uba74, \ucee8\ud2b8\ub799\ud2b8\uc758 \uc138\ubd80 \uc0ac\ud56d\ub3c4 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \ub354 \uc790\uc138\ud55c \uc0ac\ud56d\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/core-modules/wasm/#code-id"},"XPLA Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,l.kt)("h3",{id:"runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"example-4.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-4.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { LCDClient, MnemonicKey, MsgInstantiateContract, Fee, SignMode } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \ubc14\uafd4\uc8fc\uc138\uc694.\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n\n    const init_msg = {\n        name: \"MCT\", // My Cw20 Token\n        symbol: \"MCT\", // My Cw20 Token\n        decimals: 6,\n        initial_balances: [{ address: myWalletAddress, amount: \"2000000000000000\" }], // \ucd08\uae30 \ubb3c\ub7c9\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc744 \uc8fc\uc18c\ub4e4\uc744 \ubc30\uc5f4\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n        mint: { // \ucd94\uac00\ub85c mint\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\ub97c \ub300\ube44\ud574 minter\ub3c4 \uc9c0\uc815\ud560\uc218 \uc788\uc9c0\ub9cc \uc635\uc158\uc785\ub2c8\ub2e4.\n            minter: myWalletAddress\n        }\n    };\n\n    const instantiate = new MsgInstantiateContract(\n        myWalletAddress, // sender\n        myWalletAddress, // admin\n        1, // MAINNET, TESTNET CW20 code id\n        init_msg,\n        {}, // \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud560 XPLA \ud1a0\ud070 \uc218\ub7c9, \ud604\uc7ac\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\ub2c8 \ube44\uc6cc\ub460.\n        'Input your label', // \uc791\uc131\ud558\uace0 \uc2f6\uc740 \ub77c\ubca8\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n        msgs: [instantiate]\n    });\n\n    // createAndSignTx \ud568\uc218\ub97c \ubd84\ub9ac\ud558\uc5ec \uc9c1\uc811 \uc791\uc131\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.\n    // const accInfo = await lcd.auth.accountInfo(myWalletAddress) // \uc9c0\uac11 \uc815\ubcf4 \ubc1b\uc544\uc624\uae30\n    // const acc = accInfo;\n    \n    // const userSignOption = { // \uc11c\uba85 \uc815\ubcf4 \n    //  chainID: 'cube_47-5',\n    //  accountNumber: acc.account_number,\n    //  sequence: acc.sequence,\n    //  signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON\n    // }\n    \n    // const fee = new Fee(3000000, \"2550000000000000000axpla\") // \uc218\uc218\ub8cc \uae08\uc561 \uc124\uc815\n    \n    // const tx = await lcd.tx.create([], { msgs: [instantiate], fee }) // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\n    \n    // const signedTx = await wallet.key.signTx(tx, userSignOption) // \uc11c\uba85\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"10\ubc88\uc9f8 \uc904\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc218\uc815\ud574\uc8fc\uc138\uc694.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node example-4.js\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. CW20 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0dd\uc131\ub418\uace0, \uc0dd\uc131 \ud2b8\ub79c\uc7ad\uc158\uc758 \ud574\uc2dc\uac12\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."))),(0,l.kt)("h2",{id:"explaination"},"\uc124\uba85"),(0,l.kt)("p",null,"\uc6b0\ub9ac\ub294 CW20\uc5d0 \uad00\ud55c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ucf54\ub4dc\ub294 \uc774\ubbf8 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec\ub418\uc5c8\uace0, \ub2e8\uc9c0 \ubc30\ud3ec\ub41c \ucf54\ub4dc\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud588\uc744 \ubfd0\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uba3c\uc800 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc9c0\uac11\uc744 \ubd88\ub7ec\uc654\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 \ub2e4\ub978 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uc9c0\uac11\uc744 \ubd88\ub7ec\uc624\uc168\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n})\n\nconst wallet = lcd.wallet(mk);\nconst myWalletAddress = wallet.key.accAddress;\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"CW20 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc744 \uc704\ud574 \ucd08\uae30\uac12\uc744 \ubbf8\ub9ac \uc9c0\uc815\ud574\uc92c\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uac12\ub4e4\uc740 \uc218\uc815\ud558\uc154\uc11c, \uc5ec\ub7ec\ubd84\ub9cc\uc758 \ud1a0\ud070\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uc2dc\ub294 \uac83\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const init_msg = {\n    name: "MCT", // My Cw20 Token\n    symbol: "MCT", // My Cw20 Token\n    decimals: 6,\n    initial_balances: [{ address: myWalletAddress, amount: "2000000000000000" }], // \ucd08\uae30 \ubb3c\ub7c9\uc744 \ubcf4\uc720\ud558\uace0 \uc788\uc744 \uc8fc\uc18c\ub4e4\uc744 \ubc30\uc5f4\ub85c \uc9c0\uc815\ud569\ub2c8\ub2e4.\n    mint: { // \ucd94\uac00\ub85c mint\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\ub97c \ub300\ube44\ud574 minter\ub3c4 \uc9c0\uc815\ud560\uc218 \uc788\uc9c0\ub9cc \uc635\uc158\uc785\ub2c8\ub2e4.\n        minter: myWalletAddress\n    }\n};\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("div",null),(0,l.kt)("p",{parentName:"admonition"},"CW20 \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uba74 \ud1a0\ud070\uc758 \uae30\ubcf8 \ub2e8\uc704\ub294 MCT\uac00 \ub418\uaca0\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \ub54c\ub85c\ub294 \ub354 \uc791\uc740 \ub2e8\uc704\uac00 \ud544\uc694\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. CW20\uc758 \ucd5c\uc18c \ub2e8\uc704\ub294 \uae30\ubcf8 \ub2e8\uc704\uc5d0 \uc811\ub450\uc0ac\ub85c 'u'\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. \uc608\uc81c \ucee8\ud2b8\ub799\ud2b8\ub294 'uMCT'\uac00 \ub418\uaca0\uad70\uc694."),(0,l.kt)("p",{parentName:"admonition"},"\uc704 \ucf54\ub4dc\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"decimals")," \ud56d\ubaa9\uc744 ",(0,l.kt)("strong",{parentName:"p"},"6"),"\uc73c\ub85c \uc9c0\uc815\ud588\uae30 \ub54c\ubb38\uc5d0 10",(0,l.kt)("sup",null,"6")," uMCT = 1 MCT \uac00 \ub429\ub2c8\ub2e4. \ucc38\uace0\ub85c XPLA\ub294 decimals\ub294 18\uc774\ubbc0\ub85c, 10",(0,l.kt)("sup",null,"18")," aXPLA = 1 XPLA \uc600\uc2b5\ub2c8\ub2e4. ")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\ub204\uac00 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud558\ub294\uc9c0(sender), \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc778\uc740 \ub204\uad6c\uc778\uc9c0(admin), Code ID, \ucd08\uae43\uac12, \ub77c\ubca8 \ub4f1\uc744 \uc785\ub825\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc744 \uc900\ube44\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const instantiate = new MsgInstantiateContract(\n    myWalletAddress, // sender\n    myWalletAddress, // admin\n    1, // MAINNET, TESTNET CW20 code id\n    init_msg,\n    {}, // \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud560 XPLA \ud1a0\ud070 \uc218\ub7c9, \ud604\uc7ac\ub294 \ud544\uc694\ud558\uc9c0 \uc54a\uc73c\ub2c8 \ube44\uc6cc\ub460.\n    'Input your label', // \uc791\uc131\ud558\uace0 \uc2f6\uc740 \ub77c\ubca8\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.\n);\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, \uc11c\uba85\uae4c\uc9c0 \uc9c4\ud589\ud569\ub2c8\ub2e4. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n    msgs: [instantiate]\n});\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," \ud568\uc218\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, \uc218\uc218\ub8cc \uae08\uc561\uc744 \uc790\ub3d9\uc73c\ub85c \uc124\uc815\ud574\uc8fc\uace0, \uc11c\uba85\ub3c4 \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc774\ub97c \uac01\uac01 \ubd84\ub9ac\ud558\uc5ec \uc544\ub798\uc640 \uac19\uc774 \uc9c1\uc811 \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const accInfo = await lcd.auth.accountInfo(myWalletAddress) // \uc9c0\uac11 \uc815\ubcf4 \ubc1b\uc544\uc624\uae30\nconst acc = accInfo;\n\nconst userSignOption = { // \uc11c\uba85 \uc815\ubcf4 \n    chainID: 'cube_47-5',\n    accountNumber: acc.account_number,\n    sequence: acc.sequence,\n    signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON\n}\n\nconst fee = new Fee(3000000, \"2550000000000000000axpla\") // \uc218\uc218\ub8cc \uae08\uc561 \uc124\uc815\n\nconst tx = await lcd.tx.create([], { msgs: [instantiate], fee }) // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\n\nconst signedTx = await wallet.key.signTx(tx, userSignOption) // \uc11c\uba85\n"))),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"broadcastSync")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc744 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc1a1\uc2e0\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uc798 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74, \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \uacb0\uacfc\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const txResult = await lcd.tx.broadcastSync(signedTx);\nconsole.log(txResult.txhash);\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\ub97c \uc544\ub798 \ucf54\ub4dc\ub85c \ud655\uc778\ud574\ubcf4\uc138\uc694."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"query-tx.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353")," \ub300\uc2e0 \uc704\uc5d0\uc11c \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \ub123\uc5b4\uc8fc\uc138\uc694."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { LCDClient } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nasync function main() {\n    const txInfo = await lcd.tx.txInfo(\"ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353\"); // \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\n    console.log(JSON.stringify(txInfo, null, 2));\n}\nmain()\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node query-tx.js\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\ud639\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\ub294 \uac83\ub3c4 \uc88b\uc740 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,l.kt)("p",null,"\uc774\ub807\uac8c \uc6b0\ub9ac\ub294 CW20 \ud1a0\ud070\uc744 \ubc1c\ud589\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \ud1a0\ud070\uc744 \uc774\uc6a9\ud558\uba74 \uac8c\uc784 \uc0dd\ud0dc\uacc4\ub97c \ub354\uc6b1 \uc54c\ucc28\uac8c \uad6c\uc131\ud560 \uc218 \uc788\uaca0\uc2b5\ub2c8\ub2e4. \uc774\uc81c \uc720\uc800\ub4e4\uc5d0\uac8c \ud1a0\ud070\uc744 \ub098\ub220\uc8fc\uc5b4\uc57c\uaca0\uc8e0. ",(0,l.kt)("a",{parentName:"p",href:"/docs/tutorial/make-web3-game/send-cw20"},"\ub2e4\uc74c \ub2e8\uacc4"),"\uc5d0\uc11c\ub294 \uc720\uc800\uac00 \ud1a0\ud070\uc744 \ud68d\ub4dd\ud560 \uc788\uac8c, CW20 \ud1a0\ud070 \uc804\uc1a1\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);