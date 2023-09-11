"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[277],{34673:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(87462),s=n(67294),o=n(86010),i=n(72389),l=n(86043);const r={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function m(e){let{summary:t,children:n,...m}=e;const p=(0,i.Z)(),h=(0,s.useRef)(null),{collapsed:u,setCollapsed:k}=(0,l.u)({initialState:!m.open}),[w,g]=(0,s.useState)(m.open),f=s.isValidElement(t)?t:s.createElement("summary",null,t??"Details");return s.createElement("details",(0,a.Z)({},m,{ref:h,open:w,"data-collapsed":u,className:(0,o.Z)(r.details,p&&r.isBrowser,m.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,h.current)&&(e.preventDefault(),u?(k(!1),g(!0)):k(!0))}}),f,s.createElement(l.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),g(!e)}},s.createElement("div",{className:r.collapsibleContent},n)))}const p={details:"details_b_Ee"},h="alert alert--info";function u(e){let{...t}=e;return s.createElement(m,(0,a.Z)({},t,{className:(0,o.Z)(h,p.details,t.className)}))}},90916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var a=n(87462),s=n(67294),o=n(3905),i=n(34673),l=n(18947);const r=()=>s.createElement(l.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":"const { LCDClient, MnemonicKey, MsgInstantiateContract, Fee, SignMode } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n  chainID: 'cube_47-5',\n  URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n  const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // Replace with your mnemonic words\n  })\n\n  const wallet = lcd.wallet(mk);\n  const myWalletAddress = wallet.key.accAddress;\n\n  const init_msg = {\n    name: \"My CW20 Token\", // My Cw20 Token\n    symbol: \"MCT\", // My Cw20 Token\n    decimals: 6,\n    initial_balances: [{ address: myWalletAddress, amount: \"2000000000000000\" }], // List the addresses that will initially hold the supply as an array.\n    mint: { // You can also optionally specify a minter in case additional minting is needed.\n      minter: myWalletAddress\n    }\n  };\n\n  const instantiate = new MsgInstantiateContract(\n    myWalletAddress, // sender\n    myWalletAddress, // admin\n    1, // MAINNET, TESTNET CW20 code id\n    init_msg,\n    {}, // XPLA token amount to send to the contract (leave empty for now, not needed at the moment).\n    'My CW20 Token', // Enter the label you want to write.\n  );\n\n  const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n    msgs: [instantiate]\n  });\n\n  // You can replace the createAndSignTx function with the code below\n  // const accInfo = await lcd.auth.accountInfo(myWalletAddress) // Getting wallet information\n  // const acc = accInfo;\n  \n  // const userSignOption = { // Signing details \n  // \tchainID: 'cube_47-5',\n  // \taccountNumber: acc.account_number,\n  // \tsequence: acc.sequence,\n  // \tsignMode: SignMode.SIGN_MODE_DIRECT\n  // }\n  \n  // const fee = new Fee(3000000, \"2550000000000000000axpla\") // Setting the fee amount\n  \n  // const tx = await lcd.tx.create([], { msgs: [instantiate], fee }) // Creating the transaction\n  \n  // const signedTx = await wallet.key.signTx(tx, userSignOption) // Signing\n\n  const txResult = await lcd.tx.broadcastSync(signedTx);\n  console.log(txResult.txhash);\n}\nmain()\n        "},options:{layout:"console",showLineNumbers:!0,editorHeight:600}}),c=()=>s.createElement(l.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient,  MnemonicKey, MsgExecuteContract, TxAPI, Fee } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n  const mk = new MnemonicKey({\n    mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n  })\n\n  const wallet = lcd.wallet(mk);\n  const myWalletAddress = wallet.key.accAddress;\n  \n  const cw20_contract = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc"; // Replace it with the address of the CW20 token created in example-4.js.\n\n  const transferMsg = new MsgExecuteContract(\n    myWalletAddress,\n    cw20_contract,\n    {\n      transfer: {\n        recipient : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",\n        amount: "100000"\n      }\n    }\n  );\n  \n  const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n    msgs: [transferMsg]\n  });\n\n  // const accInfo = await lcd.auth.accountInfo(myWalletAddress)\n  // const acc = accInfo;\n  \n  // // Estimating the expected transaction fee for the message.\n  // const tx_api = new TxAPI(lcd)\n  // const simul_fee = await tx_api.estimateFee(\n  // \t[{\n    //     sequenceNumber: acc.sequence,\n    //     publicKey: mk.publicKey\n    // }],\n  // \t{\n  // \t\tmsgs: [transferMsg],\n  // \t\tgasAdjustment: 1.25,\t\t\t\n  // \t}\n  // )\n    \n  // const fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString());\n  \n  // const signedTx = await wallet.createAndSignTx({\n  //   msgs: [transferMsg], fee\n  // });\n\n  const txResult = await lcd.tx.broadcastSync(signedTx);\n  console.log(txResult.txhash);\n}\nmain()\n        '},options:{layout:"console",showLineNumbers:!0,editorHeight:600}}),d={sidebar_position:3},m="Issue and send CW20 Tokens (Javascript)",p={unversionedId:"tutorial/make-cw20/make-cw20-with-js",id:"tutorial/make-cw20/make-cw20-with-js",title:"Issue and send CW20 Tokens (Javascript)",description:"Using CW20 makes it easier to connect the gaming ecosystem with the XPLA blockchain. This time, let's write code directly to issue tokens.",source:"@site/docs/3-tutorial/1-make-cw20/2-make-cw20-with-js.mdx",sourceDirName:"3-tutorial/1-make-cw20",slug:"/tutorial/make-cw20/make-cw20-with-js",permalink:"/docs/tutorial/make-cw20/make-cw20-with-js",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Issue and send CW20 Tokens (Vault)",permalink:"/docs/tutorial/make-cw20/make-cw20-with-vault"},next:{title:"Working with CW20 Data",permalink:"/docs/tutorial/make-cw20/query-cw20"}},h={},u=[{value:"Preview",id:"preview",level:2},{value:"Issuing CW20 Tokens using JavaScript",id:"make-cw20",level:2},{value:"Running the Code",id:"make-cw20-runcode",level:3},{value:"Explanation",id:"make-cw20-explaination",level:3},{value:"Send Issued CW20",id:"send-cw20",level:2},{value:"Running the Code",id:"send-cw20-runcode",level:3},{value:"Explanation",id:"send-cw20-explaination",level:3},{value:"Wrapping Up",id:"conclusion",level:2}],k={toc:u},w="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(w,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"issue-and-send-cw20-tokens-javascript"},"Issue and send CW20 Tokens (Javascript)"),(0,o.kt)("p",null,"Using CW20 makes it easier to connect the gaming ecosystem with the XPLA blockchain. This time, let's write code directly to issue tokens."),(0,o.kt)(i.Z,{summary:"But I have zero idea what CW20 is!",mdxType:"Details"},(0,o.kt)("p",null,"The XPLA Chain utilizes a smart contract platform called ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),". Just like ERC20 on Ethereum, ",(0,o.kt)("strong",{parentName:"p"},"CW20")," is the standard for Fungible tokens in ",(0,o.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),". For more, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/crate/cw20/0.2.3"},"docs for Cosmwasm"),".")),(0,o.kt)("h2",{id:"preview"},"Preview"),(0,o.kt)("p",null,"First, here's the code to create a CW20 contract using JavaScript. Modify and run the code with your mnemonic phrase. You'll see the execution result on the right side after a short wait."),(0,o.kt)(r,{mdxType:"Ex04"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"Have you successfully created the contract? Great, then the CW20 has been issued! Now, let's try sending the issued CW20 tokens to another wallet address."),(0,o.kt)("p",null,"Similarly, please insert your mnemonic phrase into the code below. Afterwards, assign the address of the previously created contract to the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"cw20_contract"),". After a short wait, you'll be able to see the execution result on the right side."),(0,o.kt)(i.Z,{summary:"Where can you find the address of the created contract?",mdxType:"Details"},(0,o.kt)("p",null,"The easiest way is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),". Take the transaction hash value from the execution result and search it on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),". Then, on the Transaction Details page, go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Event Logs")," tab to find the address of the created contract. You were able to find the example contract address ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/4BC262846BFA9F845480EF1447503B3F1927CCD4E08DFB82BA91C952BAC1825E#EventLogs"},"here"),".")),(0,o.kt)(c,{mdxType:"Ex05"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"If you\u2019ve understood the Preview Code, you can proceed to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/query-cw20"},"next step")," without reading the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js#make-cw20"},"following content"),"!"),(0,o.kt)("h2",{id:"make-cw20"},"Issuing CW20 Tokens using JavaScript"),(0,o.kt)("p",null,"Let's create a CW20 contract and issue CW20 tokens. The Code ID for the CW20 contract is ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," on both the mainnet and the testnet."),(0,o.kt)(i.Z,{summary:"Code ID?",mdxType:"Details"},(0,o.kt)("p",null,"Unlike EVM, the Code Deploy and Contract Creation do not go hand in hand in Cosmwasm. First, when you put your code onto the blockchain (StoreCode), you'll get a special number called a ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID")," for that code. Afterward, you can use this ",(0,o.kt)("inlineCode",{parentName:"p"},"Code ID")," to make a contract (InstantiateContract)."),(0,o.kt)("p",null,"All the contracts made with the same Code ID are based on the same original code. The only difference is that if you provide different starting values (init_msg) when making the contract, the specific details of the contract will be different. For more detailed information, you can take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/core-modules/wasm/#code-id"},"XPLA Docs"),".")),(0,o.kt)("h3",{id:"make-cw20-runcode"},"Running the Code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Please create a file named "example-4.js".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Copy and paste the code below into the "example-4.js" file and save it.'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { LCDClient, MnemonicKey, MsgInstantiateContract, Fee, SignMode } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // Replace with your mnemonic words\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n\n    const init_msg = {\n        name: \"My CW20 Token\", // My Cw20 Token\n        symbol: \"MCT\", // My Cw20 Token\n        decimals: 6,\n        initial_balances: [{ address: myWalletAddress, amount: \"2000000000000000\" }], // List the addresses that will initially hold the supply as an array.\n        mint: { // You can also optionally specify a minter in case additional minting is needed.\n            minter: myWalletAddress\n        }\n    };\n\n    const instantiate = new MsgInstantiateContract(\n        myWalletAddress, // sender\n        myWalletAddress, // admin\n        1, // MAINNET, TESTNET CW20 code id\n        init_msg,\n        {}, // XPLA token amount to send to the contract (leave empty for now, not needed at the moment).\n        'My CW20 Token', // Enter the label you want to write.\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n        msgs: [instantiate]\n    });\n\n    // You can replace the createAndSignTx function with the code below\n    // const accInfo = await lcd.auth.accountInfo(myWalletAddress) // Getting wallet information\n    // const acc = accInfo;\n    \n    // const userSignOption = { // Signing details \n    //  chainID: 'cube_47-5',\n    //  accountNumber: acc.account_number,\n    //  sequence: acc.sequence,\n    //  signMode: SignMode.SIGN_MODE_DIRECT\n    // }\n    \n    // const fee = new Fee(3000000, \"2550000000000000000axpla\") // Setting the fee amount\n    \n    // const tx = await lcd.tx.create([], { msgs: [instantiate], fee }) // Creating the transaction\n    \n    // const signedTx = await wallet.key.signTx(tx, userSignOption) // Signing\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Please replace the mnemonic words in the 10th line with your own mnemonic phrase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command in the VSCode Terminal:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node example-4.js\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Terminal, you will be able to see the results. The CW20 contract will be created, and you should be able to verify the transaction hash of the creation transaction."))),(0,o.kt)("h3",{id:"make-cw20-explaination"},"Explanation"),(0,o.kt)("p",null,"We haven't written the contract code for CW20. The code has already been deployed on the XPLA blockchain, and we've simply created the contract using the deployed code. We'll explore how to write contract code in later steps."),(0,o.kt)("p",null,"First, we loaded a wallet using mnemonic words. You've probably used different mnemonic words to load your own wallet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n})\n\nconst wallet = lcd.wallet(mk);\nconst myWalletAddress = wallet.key.accAddress;\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"To create a CW20 contract, we've pre-set some initial values. Feel free to modify the values below and create your own token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const init_msg = {\n    name: "My CW20 Token", // My Cw20 Token\n    symbol: "MCT", // My Cw20 Token\n    decimals: 6,\n    initial_balances: [{ address: myWalletAddress, amount: "2000000000000000" }], // List the addresses that will initially hold the supply as an array.\n    mint: { // You can also optionally specify a minter in case additional minting is needed.\n        minter: myWalletAddress\n    }\n};\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can freely set the ",(0,o.kt)("inlineCode",{parentName:"p"},"decimals")," value when issuing tokens. In the example initial values, we've set the ",(0,o.kt)("inlineCode",{parentName:"p"},"decimals")," field to ",(0,o.kt)("strong",{parentName:"p"},"6"),". Just to let you know, in the case of ",(0,o.kt)("strong",{parentName:"p"},"XPLA"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"decimals")," value is ",(0,o.kt)("strong",{parentName:"p"},"18"),". This means that 10",(0,o.kt)("sup",null,"18")," ",(0,o.kt)("strong",{parentName:"p"},"aXPLA")," is equal to 1 ",(0,o.kt)("strong",{parentName:"p"},"XPLA"),".")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Who is creating the contract (sender), and who is the owner of the contract (admin)? You prepare for contract creation by providing the Code ID, initial values, label, and other details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const instantiate = new MsgInstantiateContract(\n    myWalletAddress, // sender\n    myWalletAddress, // admin\n    1, // MAINNET, TESTNET CW20 code id\n    init_msg,\n    {}, // XPLA token amount to send to the contract (leave empty for now, not needed at the moment).\n    'My CW20 Token', // Enter the label you want to write.\n);\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"You generate and complete the signature for a transaction using the ",(0,o.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n    msgs: [instantiate]\n});\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," function generates a transaction, automatically sets the fee amount, and proceeds with the signing process. You can also separate the roles of the ",(0,o.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," function into creating a transaction, setting the fee, and signing individually, as shown in the commented sections of the example code."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const accInfo = await lcd.auth.accountInfo(myWalletAddress) // Getting wallet information\nconst acc = accInfo;\n\nconst userSignOption = { // Signing details \n    chainID: 'cube_47-5',\n    accountNumber: acc.account_number,\n    sequence: acc.sequence, \n    signMode: SignMode.SIGN_MODE_DIRECT\n}\n\nconst fee = new Fee(3000000, \"2550000000000000000axpla\") // Setting the fee amount\n\nconst tx = await lcd.tx.create([], { msgs: [instantiate], fee }) // Creating the transaction\n\nconst signedTx = await wallet.key.signTx(tx, userSignOption) // Signing\n"))),(0,o.kt)("br",null),(0,o.kt)("p",null,"You transmit the created transaction to the network using the ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastSync")," function. If the transaction is successfully created on the XPLA blockchain, you'll be able to confirm the transaction hash value as the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const txResult = await lcd.tx.broadcastSync(signedTx);\nconsole.log(txResult.txhash);\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Check the information of the created transaction using the following code."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a file named "query-tx.js."')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy and paste the code below. Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"),", please insert the transaction hash value you generated earlier."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { LCDClient } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nasync function main() {\n    const txInfo = await lcd.tx.txInfo(\"ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353\"); // Transaction data\n    console.log(JSON.stringify(txInfo, null, 2));\n}\nmain()\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Execute the following command in the Terminal.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node query-tx.js\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Confirm the transaction information.")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Alternatively, using the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer")," to check transaction data is also a good option."),(0,o.kt)("p",null,"So far, we've issued CW20 tokens. Using these tokens can enrich the gaming ecosystem even further. Now, it's time to distribute tokens to users. To allow users to acquire tokens, let's explore CW20 token transfers."),(0,o.kt)("h2",{id:"send-cw20"},"Send Issued CW20"),(0,o.kt)("p",null,"Let's go ahead and transfer the CW20 tokens that we issued earlier. Token transfers are carried out by ",(0,o.kt)("strong",{parentName:"p"},"executing")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," function of the CW20 contract. For this example, we'll use the contract address of the MCT token as ",(0,o.kt)("inlineCode",{parentName:"p"},"xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc"),", and we'll transfer the tokens to the address ",(0,o.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"),"."),(0,o.kt)("h3",{id:"send-cw20-runcode"},"Running the Code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Please create a file named example-5.js.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the following code and paste it into the example-5.js file, then save it."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient,  MnemonicKey, MsgExecuteContract, TxAPI, Fee } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n    mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n    \n    const cw20_contract = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc"; // Replace it with the address of the CW20 token created in example-4.js.\n\n    const transferMsg = new MsgExecuteContract(\n        myWalletAddress,\n        cw20_contract,\n        {\n            transfer: {\n                recipient : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",\n                amount: "100000"\n            }\n        }\n    );\n    \n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n        msgs: [transferMsg]\n    });\n\n    // const accInfo = await lcd.auth.accountInfo(myWalletAddress)\n    // const acc = accInfo;\n    \n    // // Estimating the expected transaction fee for the message.\n    // const tx_api = new TxAPI(lcd)\n    // const simul_fee = await tx_api.estimateFee(\n    //  [{\n    //     sequenceNumber: acc.sequence,\n    //     publicKey: mk.publicKey\n    // }],\n    //  {\n    //      msgs: [transferMsg],\n    //      gasAdjustment: 1.25,            \n    //  }\n    // )\n        \n    // const fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString());\n    \n    // const signedTx = await wallet.createAndSignTx({\n    //   msgs: [transferMsg], fee\n    // });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\n\nmain()\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Please replace the mnemonic words on the 10th line with your own mnemonic words."),(0,o.kt)("p",{parentName:"li"},"Assign your contract address, which you generated during ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js#make-cw20"},"the steps to issue CW20 tokens in JavaScript"),", to the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"cw20_contract")," on the 16th line. In the example, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc")," with your actual contract address."),(0,o.kt)(i.Z,{summary:"Where can I find the address of the contract I created?",mdxType:"Details"},(0,o.kt)("p",{parentName:"li"},"The easiest way is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),". Let's try searching for the transaction hash that appeared as a result of the execution on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),'. Once you\'re on the "Transaction Details" screen, go to the ',(0,o.kt)("inlineCode",{parentName:"p"},"Event Logs")," tab. There, you'll be able to see the address of the contract that was created. You could find the example contract address ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/4BC262846BFA9F845480EF1447503B3F1927CCD4E08DFB82BA91C952BAC1825E#EventLogs"},"right there"),".")),(0,o.kt)("p",{parentName:"li"},"Finally, please write the wallet address where you will receive the CW20 tokens in the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," field on the 23rd line. Instead of the example address ",(0,o.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"),", enter your own wallet address where you'll be receiving the CW20 tokens."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Don't have a wallet to receive the tokens? You can create an additional wallet using Vault and use that address, or alternatively, you can use the same sending wallet address as the receiving address. You can send tokens to yourself.\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command in VSCode Terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node example-5.js\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the results in the Terminal. You'll see that the CW20 tokens have been sent, and you'll be able to verify the transaction's hash value."))),(0,o.kt)("h3",{id:"send-cw20-explaination"},"Explanation"),(0,o.kt)("p",null,"Sending CW20 tokens works differently from sending XPLA coins. While XPLA coin transfers use the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSend")," method, CW20 token transfers are done by ",(0,o.kt)("strong",{parentName:"p"},"executing")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," function of the CW20 contract. This is why we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgExecuteContract")," method."),(0,o.kt)("p",null,"First, you've loaded the wallet with your mnemonic words. You might have used different mnemonic words to load your wallet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n})\n\nconst wallet = lcd.wallet(mk);\nconst myWalletAddress = wallet.key.accAddress;\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Then, we've specified the contract address of the token. You would have also assigned the contract address of the token you created."),(0,o.kt)("p",null,"Next, we've indicated who the transfer is going to and how much CW20 you're sending. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," field, you specify the quantity in uCW20 units. Remember that ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js#make-cw20-explaination"},"when you created the contract"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"decimal value")," was set to ",(0,o.kt)("strong",{parentName:"p"},"6"),". So, if you have 100,000 ",(0,o.kt)("strong",{parentName:"p"},"uCW20"),", you'll be sending 0.1 ",(0,o.kt)("strong",{parentName:"p"},"CW20"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const cw20_contract = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc"; // Replace it with the address of the CW20 token created in example-4.js.\n\nconst transferMsg = new MsgExecuteContract(\n    myWalletAddress,\n    cw20_contract,\n    {\n        transfer: {\n            recipient : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",\n            amount: "100000"\n        }\n    }\n);\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," function to generate a transaction and go through the signing process as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n    msgs: [transferMsg]\n});\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," handles creating transactions, automatically setting the fee amount, and performing the signing process. In the steps to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js#make-cw20-explaination"},"issue CW20 tokens using JavaScript"),", I also provided separate code for each of these steps."),(0,o.kt)("p",{parentName:"admonition"},"Now, let's take a look at the code that uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"estimateFee")," function to create transactions. Similarly, replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," function with the code below and give it a try:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const accInfo = await lcd.auth.accountInfo(myWalletAddress)\nconst acc = accInfo;\n\n// Estimating the expected transaction fee for the message.\nconst tx_api = new TxAPI(lcd)\nconst simul_fee = await tx_api.estimateFee(\n    [{\n    sequenceNumber: acc.sequence,\n    publicKey: mk.publicKey\n}],\n    {\n        msgs: [transferMsg],\n        gasAdjustment: 1.25,            \n    }\n)\n    \nconst fee = new Fee(simul_fee.gas_limit, simul_fee.amount.toString());\n\nconst signedTx = await wallet.createAndSignTx({\n    msgs: [transferMsg], fee\n});\n")),(0,o.kt)("p",{parentName:"admonition"},"Just as the ",(0,o.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," function automatically set the fee amount, this time we've used the ",(0,o.kt)("inlineCode",{parentName:"p"},"estimateFee")," function to set the fee. All the modules used in the example are included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@xpla/xpla.js")," package.")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"broadcastSync")," function to send the created transaction to the network. If the transaction has been successfully created on the XPLA blockchain, you should be able to see the transaction hash as the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const txResult = await lcd.tx.broadcastSync(signedTx);\nconsole.log(txResult.txhash);\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Did you receive the transaction hash value? Use the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer")," to check the transaction data and details."),(0,o.kt)("h2",{id:"conclusion"},"Wrapping Up"),(0,o.kt)("p",null,"We've looked into transferring CW20 tokens like this. Now, let's connect CW20 tokens to your game with the XPLA blockchain! In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/query-cw20"},"next chapter"),", we will retrieve data of the CW20 token we created ourselves from the blockchain."))}g.isMDXComponent=!0}}]);