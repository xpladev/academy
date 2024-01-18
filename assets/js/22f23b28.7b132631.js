"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[8195],{34673:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),s=t(67294),r=t(86010),i=t(72389),o=t(86043);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function u(e,n){return!!e&&(e===n||u(e.parentElement,n))}function d(e){let{summary:n,children:t,...d}=e;const p=(0,i.Z)(),h=(0,s.useRef)(null),{collapsed:m,setCollapsed:k}=(0,o.u)({initialState:!d.open}),[g,w]=(0,s.useState)(d.open),f=s.isValidElement(n)?n:s.createElement("summary",null,n??"Details");return s.createElement("details",(0,a.Z)({},d,{ref:h,open:g,"data-collapsed":m,className:(0,r.Z)(l.details,p&&l.isBrowser,d.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;c(n)&&u(n,h.current)&&(e.preventDefault(),m?(k(!1),w(!0)):k(!0))}}),f,s.createElement(o.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),w(!e)}},s.createElement("div",{className:l.collapsibleContent},t)))}const p={details:"details_b_Ee"},h="alert alert--info";function m(e){let{...n}=e;return s.createElement(d,(0,a.Z)({},n,{className:(0,r.Z)(h,p.details,n.className)}))}},11338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=t(87462),s=t(67294),r=t(3905),i=(t(34673),t(18947));const o=()=>s.createElement(i.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient, MnemonicKey, MsgSend } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n  const mk = new MnemonicKey({\n    mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n  });\n\n  const distributor = lcd.wallet(mk);\n\n  const distributorInfo = await lcd.auth.accountInfo(distributor.key.accAddress);\n  const accountNumber = distributorInfo.account_number;\n  const sequence = distributorInfo.sequence;\n\n  const receivers = [\n    "xpla13hpy8pq6799d66qlnfql6jr7vfudq8rhqt66ma",\n    "xpla15msreuqde07m5070qsxvflqq3xy5tx2p4anhqu",\n    "xpla1lgx8hzlpytrvz0g9s24gspzfl6zh68srj7gwu8",\n    "xpla1uh30ekv9ll3e05nzl75euuy7qkjrlcreh5zmju",\n    "xpla1znpv2y0mm2wce79wvpces0yakmep42nj4xhpky",\n  ]\n\n  for (let i = 0; i < receivers.length; i++) {\n    try {\n      const send = new MsgSend(\n        distributor.key.accAddress,\n        receivers[i],\n        { axpla: 1 }\n      );\n    \n      const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n        msgs: [send],\n        memo: \'Air Drop Test\',\n        accountNumber,\n        sequence\n        // sequence : sequence + i\n      });\n    \n      const result = await lcd.tx.broadcastSync(signedTx);\n      console.log(result);\n\n    } catch (error) {\n      console.log(error.response.data.message);\n    }\n  }\n}\n\nmain();\n          '},options:{layout:"console",showLineNumbers:!0,editorHeight:600}}),l={sidebar_position:3},c="Decode Account Number and Sequence in Transactions",u={unversionedId:"tutorial/deep-understand-xpla/account-sequence",id:"tutorial/deep-understand-xpla/account-sequence",title:"Decode Account Number and Sequence in Transactions",description:"During the process of issuing tokens (CW20), when signing transactions, you filled in the accountNumber and sequence information as shown below.",source:"@site/startlearning/3-tutorial/3-deep-understand-xpla/2-account-sequence.mdx",sourceDirName:"3-tutorial/3-deep-understand-xpla",slug:"/tutorial/deep-understand-xpla/account-sequence",permalink:"/startlearning/tutorial/deep-understand-xpla/account-sequence",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run XPLA Blockchain Locally (Private)",permalink:"/startlearning/tutorial/deep-understand-xpla/local-network"},next:{title:"Connect React with XPLA Vault Wallet via Wallet Provider",permalink:"/startlearning/tutorial/deep-understand-xpla/walletprovider"}},d={},p=[{value:"Definition",id:"definition",level:2},{value:"Account Number",id:"accountnumber",level:3},{value:"Sequence",id:"sequence",level:3},{value:"Understanding through Code",id:"understandwithcode",level:2},{value:"Preview",id:"preview",level:3},{value:"Running the Code",id:"runcode",level:3},{value:"Explanation",id:"explaination",level:2},{value:"Wrapping Up",id:"conclusion",level:2}],h={toc:p},m="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decode-account-number-and-sequence-in-transactions"},"Decode Account Number and Sequence in Transactions"),(0,r.kt)("p",null,"During the process of ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/tutorial/make-cw20/make-cw20-with-js"},"issuing tokens (CW20)"),", when signing transactions, you filled in the ",(0,r.kt)("strong",{parentName:"p"},"accountNumber")," and ",(0,r.kt)("strong",{parentName:"p"},"sequence")," information as shown below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const userSignOption = { // Signing details \n    chainID: 'cube_47-5',\n    accountNumber: acc.account_number,\n    sequence: acc.sequence,\n    signMode: SignMode.SIGN_MODE_DIRECT\n}\n")),(0,r.kt)("p",null,"In this step, we'll explore what ",(0,r.kt)("strong",{parentName:"p"},"accountNumber")," and ",(0,r.kt)("strong",{parentName:"p"},"sequence")," are, and what roles they play."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("h3",{id:"accountnumber"},"Account Number"),(0,r.kt)("p",null,"Each wallet is assigned an accountNumber when it first interacts with the XPLA blockchain. For instance, in the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-testnet-transaction/send-query"},"step where you retrieved transaction data")," using the address ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"),", the accountNumber ",(0,r.kt)("a",{parentName:"p",href:"https://cube-lcd.xpla.dev/cosmos/auth/v1beta1/accounts/xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"},"28367")," indicates that it was the 28368th interaction with the XPLA blockchain on the testnet. The wallet address ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1psv57747avcnkwfx9z6q2l396z22uqafu8gewg")," was the first to interact with the testnet blockchain, with an accountNumber of 0."),(0,r.kt)("p",null,"Simply creating a wallet does not grant you an accountNumber. You need to record your wallet address information on the XPLA blockchain by receiving token transfer transactions to acquire an accountNumber."),(0,r.kt)("h3",{id:"sequence"},"Sequence"),(0,r.kt)("p",null,"Sequence refers to the sequential number of transactions generated by each wallet. If a wallet creates its first transaction, the sequence value becomes 0, and each subsequent transaction increases the sequence value by 1. It's similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nonce")," concept in the Ethereum blockchain."),(0,r.kt)("p",null,"Likewise, in the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-testnet-transaction/send-query"},"step where you retrieved transaction data")," using the address ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"),", the transaction with hash ",(0,r.kt)("inlineCode",{parentName:"p"},"ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353")," has a sequence value of ",(0,r.kt)("a",{parentName:"p",href:"https://cube-lcd.xpla.dev/cosmos/tx/v1beta1/txs/ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"},"0"),". This indicates that it was the first transaction created by that address."),(0,r.kt)("p",null,"Let's consider another example. A transaction with hash ",(0,r.kt)("inlineCode",{parentName:"p"},"FBD6E043781992215A53B285403628D3D4734AF4FC0003875775AB673F2D2737")," has a sequence value of ",(0,r.kt)("a",{parentName:"p",href:"https://cube-lcd.xpla.dev/cosmos/tx/v1beta1/txs/FBD6E043781992215A53B285403628D3D4734AF4FC0003875775AB673F2D2737"},"466"),", indicating that the address ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," created its 467th transaction."),(0,r.kt)("p",null,"Due to the Sequence value, each transaction is unique. You cannot replicate a transaction and use it. Therefore, each transaction created by a specific wallet will have a distinct sequence."),(0,r.kt)("p",null,"For example, let's think about Alice sending 1 XPLA to Bob in a transaction. Without the Sequence item, Bob could replicate and propagate Alice's transaction, causing Alice's wallet balance to be depleted. However, this is prevented due to the Sequence value. Transactions with the same Sequence value cannot be recorded on the blockchain. If someone tries to create a transaction with the same Sequence as a transaction already recorded on the blockchain, an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/32ef6361db3b4ed6f10cc4421341eeb37e18d4f4/x/auth/ante/sigverify.go#L292"},(0,r.kt)("inlineCode",{parentName:"a"},"Account Sequence Mismatch Error"))," occurs. This helps prevent attacks that repeatedly execute the same transaction."),(0,r.kt)("h2",{id:"understandwithcode"},"Understanding through Code"),(0,r.kt)("p",null,"Let's understand the role of Sequence through an example code. We'll look at code that sends 1 axpla to multiple wallets at once."),(0,r.kt)("h3",{id:"preview"},"Preview"),(0,r.kt)("p",null,"First, enter your mnemonic words into the code and modify as needed. If you like, you can also assign different wallet addresses to the ",(0,r.kt)("inlineCode",{parentName:"p"},"receivers")," variable. After a short wait, you'll see the execution results on the right side. "),(0,r.kt)(o,{mdxType:"Ex08"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"You'll notice that only the first transaction hash is correctly displayed, while the rest show errors."),(0,r.kt)("p",null,"Currently, the example code has the same sequence value entered for all transactions, causing errors. Modify the 39th line from ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence + i")," and try running it again. This time, five transaction hashes should be generated without errors."),(0,r.kt)("p",null,"If you've grasped the Preview code, feel free to skip the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/tutorial/deep-understand-xpla/account-sequence#runcode"},"following explanation")," and move on to the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/tutorial/deep-understand-xpla/walletprovider"},"next step"),"."),(0,r.kt)("h3",{id:"runcode"},"Running the Code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Create a file named "example-8.js".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Copy the code below and paste it into the "example-8.js" file, then save it. '),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient, MnemonicKey, MsgSend } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n    });\n\n    const distributor = lcd.wallet(mk);\n\n    const distributorInfo = await lcd.auth.accountInfo(distributor.key.accAddress);\n    const accountNumber = distributorInfo.account_number;\n    const sequence = distributorInfo.sequence;\n\n    const receivers = [\n        "xpla13hpy8pq6799d66qlnfql6jr7vfudq8rhqt66ma",\n        "xpla15msreuqde07m5070qsxvflqq3xy5tx2p4anhqu",\n        "xpla1lgx8hzlpytrvz0g9s24gspzfl6zh68srj7gwu8",\n        "xpla1uh30ekv9ll3e05nzl75euuy7qkjrlcreh5zmju",\n        "xpla1znpv2y0mm2wce79wvpces0yakmep42nj4xhpky",\n    ]\n\n    for (let i = 0; i < receivers.length; i++) {\n        try {\n            const send = new MsgSend(\n                distributor.key.accAddress,\n                receivers[i],\n                { axpla: 1 }\n            );\n        \n            const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n                msgs: [send],\n                memo: \'Air Drop Test\',\n                accountNumber,\n                sequence\n                // sequence : sequence + i\n            });\n        \n            const result = await lcd.tx.broadcastSync(signedTx);\n            console.log(result);\n\n        } catch (error) {\n            console.log(error.response.data.message);\n        }\n    }\n}\n\nmain();\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the mnemonic words in the 10th line with your own. You can also assign different wallet addresses to the ",(0,r.kt)("inlineCode",{parentName:"p"},"receivers")," variable if desired.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command in your VSCode Terminal. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node example-8.js\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the results in the terminal. You'll see that only the first transaction's hash is printed correctly, while the others display errors."))),(0,r.kt)("h2",{id:"explaination"},"Explanation"),(0,r.kt)("p",null,"First, we imported wallets using mnemonic words. You likely loaded your wallet with different mnemonic words."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle'\n});\n\nconst distributor = lcd.wallet(mk);\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now, we're using the LCD API to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"accountNumber")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," values for the wallet we're going to use to send $XPLA."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const distributorInfo = await lcd.auth.accountInfo(distributor.key.accAddress);\nconst accountNumber = distributorInfo.account_number;\nconst sequence = distributorInfo.sequence;\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"List the addresses of wallets that will receive $XPLA coins. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const receivers = [\n    "xpla13hpy8pq6799d66qlnfql6jr7vfudq8rhqt66ma",\n    "xpla15msreuqde07m5070qsxvflqq3xy5tx2p4anhqu",\n    "xpla1lgx8hzlpytrvz0g9s24gspzfl6zh68srj7gwu8",\n    "xpla1uh30ekv9ll3e05nzl75euuy7qkjrlcreh5zmju",\n    "xpla1znpv2y0mm2wce79wvpces0yakmep42nj4xhpky",\n]\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"This code creates and broadcasts transactions to transfer 1 axpla to each wallet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < receivers.length; i++) {\n    try {\n        const send = new MsgSend(\n            distributor.key.accAddress,\n            receivers[i],\n            { axpla: 1 }\n        );\n    \n        const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n            msgs: [send],\n            memo: 'Air Drop Test',\n            accountNumber,\n            sequence\n            // sequence : sequence + i\n        });\n    \n        const result = await lcd.tx.broadcastSync(signedTx);\n        console.log(result);\n\n    } catch (error) {\n        console.log(error.response.data.message);\n    }\n}\n")),(0,r.kt)("p",null,"The part causing errors here is on the 39th line, specifically the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," part. Following the code as is, all transactions would end up having the same sequence value whenever they're generated. This means only the first transaction would work correctly, and subsequent transactions would have the same sequence value as the first one, causing them not to be recorded on the blockchain."),(0,r.kt)("p",null,"If you want to generate all transactions without errors, instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," code, try inputting ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence: sequence + i")," code and see how it goes when you run it. By doing this, if you make sure each transaction has a different sequence value, the transactions will be generated successfully."),(0,r.kt)("p",null,"Did all the transaction hash values come out fine? Use the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer")," to check the transaction data and see."),(0,r.kt)("h2",{id:"conclusion"},"Wrapping Up"),(0,r.kt)("p",null,"This is how Account Number and Sequence work. Now, let's proceed to the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/tutorial/deep-understand-xpla/walletprovider"},"next step")," and delve deeper into Web3 functionality."))}k.isMDXComponent=!0}}]);