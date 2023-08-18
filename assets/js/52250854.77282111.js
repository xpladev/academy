"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[733],{34673:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),s=n(67294),o=n(86010),r=n(72389),l=n(86043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function u(e){let{summary:t,children:n,...u}=e;const p=(0,r.Z)(),m=(0,s.useRef)(null),{collapsed:h,setCollapsed:k}=(0,l.u)({initialState:!u.open}),[w,f]=(0,s.useState)(u.open),y=s.isValidElement(t)?t:s.createElement("summary",null,t??"Details");return s.createElement("details",(0,a.Z)({},u,{ref:m,open:w,"data-collapsed":h,className:(0,o.Z)(i.details,p&&i.isBrowser,u.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,m.current)&&(e.preventDefault(),h?(k(!1),f(!0)):k(!0))}}),y,s.createElement(l.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),f(!e)}},s.createElement("div",{className:i.collapsibleContent},n)))}const p={details:"details_b_Ee"},m="alert alert--info";function h(e){let{...t}=e;return s.createElement(u,(0,a.Z)({},t,{className:(0,o.Z)(m,p.details,t.className)}))}},51007:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),s=n(86010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function r(e){let{children:t,minHeight:n,url:r="http://localhost:3000",style:l,bodyStyle:i}=e;return a.createElement("div",{className:o.browserWindow,style:{...l,minHeight:n}},a.createElement("div",{className:o.browserWindowHeader},a.createElement("div",{className:o.buttons},a.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,s.Z)(o.browserWindowAddressBar,"text--truncate")},r),a.createElement("div",{className:o.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:o.bar}),a.createElement("span",{className:o.bar}),a.createElement("span",{className:o.bar})))),a.createElement("div",{className:o.browserWindowBody,style:i},t))}},61497:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const s=e=>{let{imgSrc:t,style:n}=e;return a.createElement("img",{className:"max-w-sm",style:n,src:t,alt:""})}},61393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var a=n(87462),s=n(67294),o=n(3905),r=n(34673),l=n(18947);const i=()=>s.createElement(l.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const contractAddress = "xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn";\n    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";\n\n    const userNFTsMsg = {\n        tokens : {\n            owner : userAddress\n        }\n    };\n    const userNFTs = await lcd.wasm.contractQuery(contractAddress, userNFTsMsg);\n    console.log(userNFTs);\n\n    const tokenIds = userNFTs.tokens;\n    for (const tokenId of tokenIds) {\n        const nftInfoMsg = {\n            nft_info : {\n                token_id : tokenId\n            }\n        }\n        const nftInfo = await lcd.wasm.contractQuery(contractAddress, nftInfoMsg);\n        console.log(JSON.stringify(nftInfo, null, 2));\n    }\n}\nmain()'},options:{layout:"console",showLineNumbers:!0,editorHeight:600}});var c=n(61497),d=n(51007);const u={sidebar_position:3},p="Working with CW721 Data",m={unversionedId:"tutorial/make-cw721/query-cw721",id:"tutorial/make-cw721/query-cw721",title:"Working with CW721 Data",description:"How can players use the NFTs they own in the game? You can use the LCDClient to send a Query and retrieve NFT data. Let's fetch the NFT information you created in the previous steps. The CW721 contract address used in the example is xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn.",source:"@site/docs/3-tutorial/2-make-cw721/3-query-cw721.mdx",sourceDirName:"3-tutorial/2-make-cw721",slug:"/tutorial/make-cw721/query-cw721",permalink:"/academy/docs/tutorial/make-cw721/query-cw721",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Issue CW721 NFT (Javascript)",permalink:"/academy/docs/tutorial/make-cw721/make-nft-js"},next:{title:"Advenced - Dive deep into XPLA blockchain",permalink:"/academy/docs/category/advenced---dive-deep-into-xpla-blockchain"}},h={},k=[{value:"Preview",id:"preview",level:2},{value:"Fetching NFT Date with Javascript",id:"runjs",level:2},{value:"Run Code",id:"runcode",level:3},{value:"Description",id:"explaination",level:2},{value:"Conclusion",id:"conclusion",level:2}],w={toc:k},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-cw721-data"},"Working with CW721 Data"),(0,o.kt)("p",null,"How can players use the NFTs they own in the game? You can use the LCDClient to send a Query and retrieve NFT data. Let's fetch the NFT information you created in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/make-nft-vault"},"previous steps"),". The CW721 contract address used in the example is ",(0,o.kt)("inlineCode",{parentName:"p"},"xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn"),"."),(0,o.kt)("h2",{id:"preview"},"Preview"),(0,o.kt)("p",null,"Here's the code to get NFT data using JavaScript. Just change the contract address you created to your CW721 contract address on line 9, and put your wallet address that holds the NFT on line 10. Wait a bit, and you'll see the execution result on the right side."),(0,o.kt)(i,{mdxType:"Ex10"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"By using the LCDClient, we could send a query to find out which NFTs are owned by a specific wallet address. Additionally, we could also fetch NFT information using the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," of the NFT. This allows you to use the NFT information owned by users in your game."),(0,o.kt)("p",null,"You can also send queries to the contract using the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),". Let's search for the CW20 token contract address on the XPLA Explorer and take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn#InitMsg"},"Init Msg tab"),"."),(0,o.kt)(d.Z,{url:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(c.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/query-cw721/explorer-initmsg.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Afterward, if you click the Query button on the right, a pop-up will appear for you to write a Query message. This makes it easy for you to send a Query to the contract."),(0,o.kt)(d.Z,{url:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)(c.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/query-cw721/query.png",mdxType:"VaultImgCard"}))),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"XPLA Explorer\uc5d0\uc11c Query\ub97c \ubcf4\ub0bc \ub54c\uc5d0\ub294 JSON \ud615\ud0dc\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The important thing to note is that, unlike writing messages in JavaScript code, you need to write it in JSON format as shown below."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tokens" : {\n        "owner" : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n    }\n}\n'))),(0,o.kt)(r.Z,{summary:"How should I format the contract query message?",mdxType:"Details"},(0,o.kt)("p",null,"You can explore what queries you can send to the CW721 contract on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L77"},"CW721 GitHub"),". The thing to be careful about is that while the message names are written in ",(0,o.kt)("inlineCode",{parentName:"p"},"Camel Case")," in QueryMsg, you need to send them in ",(0,o.kt)("inlineCode",{parentName:"p"},"Snake Case")," when actually sending the query. You input the parameters exactly as they are in the code."),(0,o.kt)("p",null,"For example, let's take a look at the ",(0,o.kt)("strong",{parentName:"p"},"NftInfo")," message on line 126 in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L77"},"CW721 GitHub"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{7,12}","{7,12}":!0},"pub enum QueryMsg<Q: JsonSchema> {\n    ...\n    /// With MetaData Extension.\n    /// Returns metadata about one particular token, based on *ERC721 Metadata JSON Schema*\n    /// but directly from the contract\n    #[returns(cw721::NftInfoResponse<Q>)]\n    NftInfo { token_id: String },\n")),(0,o.kt)("p",null,"When sending an NftInfo query, you need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"Camel Case")," ",(0,o.kt)("strong",{parentName:"p"},"NftInfo")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Snake Case"),", so you'll input it as ",(0,o.kt)("strong",{parentName:"p"},"nft_info"),". The parameter section is ",(0,o.kt)("strong",{parentName:"p"},"{ token_id: String }"),", so you just need to enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," value of the NFT you want to know about as a String type. As a result, the final query message would look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    nft_info : {\n        token_id : "token_id_myExampleNFT1"\n    }\n}\n')),(0,o.kt)("p",null,"Use this as a reference to send various queries to your contract.")),(0,o.kt)("br",null),(0,o.kt)("p",null,"We've looked into how to send queries to the contract and how to write query messages. Now, let's analyze the Preview Code. If you've understood the Preview Code, you can skip reading the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/query-cw721#runjs"},"following")," and proceed to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/local-network"},"next step"),"."),(0,o.kt)("h2",{id:"runjs"},"Fetching NFT Date with Javascript"),(0,o.kt)("p",null,"Let's use JavaScript code to find out what NFTs a specific wallet address owns and even fetch the information for each of those NFTs."),(0,o.kt)("h3",{id:"runcode"},"Run Code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Please create a file named "example-query-cw721.js".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Copy and paste the code below into the "example-query-cw721.js" file and save it. '),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\nchainID: \'cube_47-5\',\nURL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const contractAddress = "xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn";\n    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";\n\n    const userNFTsMsg = {\n        tokens : {\n            owner : userAddress\n        }\n    };\n    const userNFTs = await lcd.wasm.contractQuery(contractAddress, userNFTsMsg);\n    console.log(userNFTs);\n\n    const tokenIds = userNFTs.tokens;\n    for (const tokenId of tokenIds) {\n        const nftInfoMsg = {\n            nft_info : {\n                token_id : tokenId\n            }\n        }\n        const nftInfo = await lcd.wasm.contractQuery(contractAddress, nftInfoMsg);\n        console.log(JSON.stringify(nftInfo, null, 2));\n    }\n}\nmain()\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On line 9, replace the CW721 contract address you created, and on line 10, replace it with the wallet address that holds the NFT.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command in the VSCode Terminal. "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node example-query-cw721.js\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the results in the Terminal. The first Log value will display the NFT information owned by a specific wallet, and the second Log value will show that you were able to retrieve information about a specific NFT."))),(0,o.kt)("h2",{id:"explaination"},"Description"),(0,o.kt)("p",null,"To figure out which NFTs a specific wallet owns, we prepared a Query message in the ",(0,o.kt)("strong",{parentName:"p"},"userNFTsMsg")," variable as follows. We followed the Query message format from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L140"},"CW721 GitHub")," as a reference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const userNFTsMsg = {\n    tokens : {\n        owner : userAddress\n    }\n};\n")),(0,o.kt)(r.Z,{summary:"How should I format the contract query message?",mdxType:"Details"},(0,o.kt)("p",null,"You can explore what queries you can send to the CW721 contract on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L77"},"CW721 GitHub"),". The thing to be careful about is that while the message names are written in ",(0,o.kt)("inlineCode",{parentName:"p"},"Camel Case")," in QueryMsg, you need to send them in ",(0,o.kt)("inlineCode",{parentName:"p"},"Snake Case")," when actually sending the query. You input the parameters exactly as they are in the code."),(0,o.kt)("p",null,"For example, let's take a look at the ",(0,o.kt)("strong",{parentName:"p"},"NftInfo")," message on line 126 in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L77"},"CW721 GitHub"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{7,12}","{7,12}":!0},"pub enum QueryMsg<Q: JsonSchema> {\n    ...\n    /// With MetaData Extension.\n    /// Returns metadata about one particular token, based on *ERC721 Metadata JSON Schema*\n    /// but directly from the contract\n    #[returns(cw721::NftInfoResponse<Q>)]\n    NftInfo { token_id: String },\n")),(0,o.kt)("p",null,"When sending an NftInfo query, you need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},"Camel Case")," ",(0,o.kt)("strong",{parentName:"p"},"NftInfo")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Snake Case"),", so you'll input it as ",(0,o.kt)("strong",{parentName:"p"},"nft_info"),". The parameter section is ",(0,o.kt)("strong",{parentName:"p"},"{ token_id: String }"),", so you just need to enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," value of the NFT you want to know about as a String type. As a result, the final query message would look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n    nft_info : {\n        token_id : "token_id_myExampleNFT1"\n    }\n}\n')),(0,o.kt)("p",null,"Use this as a reference to send various queries to your contract.")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"contractQuery")," function of LCDClient, we send a query to the contract. Depending on the query message we provide, we can receive data from the contract. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const userNFTs = await lcd.wasm.contractQuery(contractAddress, userNFTsMsg);\nconsole.log(userNFTs);\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"userNFTs.tokens")," variable contains an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," values for the NFTs owned by the user. We've taken each NFT's ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," value and included it in the ",(0,o.kt)("strong",{parentName:"p"},"nftInfoMsg")," variable to create the query message as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1,5}","{1,5}":!0},"const tokenIds = userNFTs.tokens;\nfor (const tokenId of tokenIds) {\n    const nftInfoMsg = {\n        nft_info : {\n            token_id : tokenId\n        }\n    }\n...\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"Similarly, we send a query to the contract using the ",(0,o.kt)("inlineCode",{parentName:"p"},"contractQuery")," function of LCDClient. Just like before, we can receive data from the contract based on the query message we input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const nftInfo = await lcd.wasm.contractQuery(contractAddress, nftInfoMsg);\nconsole.log(JSON.stringify(nftInfo, null, 2));\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"So far, we've looked at the process of sending queries to the CW721 contract. By referring to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs"},"CW721 GitHub"),", you can explore in more detail the types of queries that can be sent to the CW721 contract. Let's fetch CW721 data from the contract tailored to your game and make it more enjoyable for users to play."))}y.isMDXComponent=!0}}]);