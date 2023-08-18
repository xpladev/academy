"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[513],{34673:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),s=a(86010),o=a(72389),l=a(86043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function u(e){let{summary:t,children:a,...u}=e;const p=(0,o.Z)(),m=(0,r.useRef)(null),{collapsed:h,setCollapsed:k}=(0,l.u)({initialState:!u.open}),[w,y]=(0,r.useState)(u.open),g=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,n.Z)({},u,{ref:m,open:w,"data-collapsed":h,className:(0,s.Z)(i.details,p&&i.isBrowser,u.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,m.current)&&(e.preventDefault(),h?(k(!1),y(!0)):k(!0))}}),g,r.createElement(l.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),y(!e)}},r.createElement("div",{className:i.collapsibleContent},a)))}const p={details:"details_b_Ee"},m="alert alert--info";function h(e){let{...t}=e;return r.createElement(u,(0,n.Z)({},t,{className:(0,s.Z)(m,p.details,t.className)}))}},51007:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:t,minHeight:a,url:o="http://localhost:3000",style:l,bodyStyle:i}=e;return n.createElement("div",{className:s.browserWindow,style:{...l,minHeight:a}},n.createElement("div",{className:s.browserWindowHeader},n.createElement("div",{className:s.buttons},n.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(s.browserWindowAddressBar,"text--truncate")},o),n.createElement("div",{className:s.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:s.bar}),n.createElement("span",{className:s.bar}),n.createElement("span",{className:s.bar})))),n.createElement("div",{className:s.browserWindowBody,style:i},t))}},61497:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=e=>{let{imgSrc:t,style:a}=e;return n.createElement("img",{className:"max-w-sm",style:a,src:t,alt:""})}},84451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>k});var n=a(87462),r=a(67294),s=a(3905),o=a(34673),l=a(18947);const i=()=>r.createElement(l.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const contractAddress = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc";\n    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";\n    const msg = {\n        balance : {\n            address : userAddress\n        }\n    };\n\n    const balance = await lcd.wasm.contractQuery(contractAddress, msg);\n    console.log(balance);\n}\nmain()'},options:{layout:"console",showLineNumbers:!0,editorHeight:500}});var c=a(61497),d=a(51007);const u={sidebar_position:3},p="Working with CW20 Data",m={unversionedId:"tutorial/make-cw20/query-cw20",id:"tutorial/make-cw20/query-cw20",title:"Working with CW20 Data",description:"Users will receive CW20 tokens as rewards in the game. How can we find out how many CW20 tokens each user has? You can use LCDClient to send a Query and retrieve CW20 token data. Let's fetch information about the CW20 token you created in the previous step. The contract address for the MCT token used in the example is xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc.",source:"@site/docs/3-tutorial/1-make-cw20/3-query-cw20.mdx",sourceDirName:"3-tutorial/1-make-cw20",slug:"/tutorial/make-cw20/query-cw20",permalink:"/academy/docs/tutorial/make-cw20/query-cw20",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Issue and send CW20 Tokens (Javascript)",permalink:"/academy/docs/tutorial/make-cw20/make-cw20-with-js"},next:{title:"Utilize NFT(CW721)",permalink:"/academy/docs/category/utilize-nftcw721"}},h={},k=[{value:"Preview",id:"preview",level:2},{value:"Fetching CW20 Data with Javascript",id:"runjs",level:2},{value:"Run Code",id:"runcode",level:3},{value:"Description",id:"explaination",level:2},{value:"Conclusion",id:"conclusion",level:2}],w={toc:k},y="wrapper";function g(e){let{components:t,...a}=e;return(0,s.kt)(y,(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"working-with-cw20-data"},"Working with CW20 Data"),(0,s.kt)("p",null,"Users will receive CW20 tokens as rewards in the game. How can we find out how many CW20 tokens each user has? You can use LCDClient to send a Query and retrieve CW20 token data. Let's fetch information about the CW20 token you created in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js"},"previous step"),". The contract address for the MCT token used in the example is ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc"),"."),(0,s.kt)("h2",{id:"preview"},"Preview"),(0,s.kt)("p",null,"Here's how you can fetch CW20 token data using JavaScript. In the code below, replace the contract address you've created on line 9, and on line 10, put the wallet address that holds the CW20 tokens. Give it a moment, and you'll see the execution results on the right side. Just tweak those lines, and you're good to go!"),(0,s.kt)(i,{mdxType:"Ex09"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"We were able to use LCDClient to send a query and find out how many CW20 tokens a specific wallet address holds. As a result, we can discover how many CW20 tokens the game users possess."),(0,s.kt)("p",null,"You can also send queries to the contract using the ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),". Search for the CW20 token contract address on the XPLA Explorer and navigate to the ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg"},"Init Msg tab"),". This way, you can explore the CW20 token contract address through the XPLA Explorer and access the Init Msg tab."),(0,s.kt)(d.Z,{url:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,s.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,s.kt)(c.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/query-cw20/explorer-initmsg.png",mdxType:"VaultImgCard"}))),(0,s.kt)("br",null),(0,s.kt)("p",null,"Afterwards, if you click the Query button on the right side, you'll see a popup that allows you to compose a Query message. Through this, you can easily send a query to the contract without any hassle."),(0,s.kt)(d.Z,{url:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,s.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,s.kt)(c.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/query-cw20/query.png",mdxType:"VaultImgCard"}))),(0,s.kt)("br",null),(0,s.kt)("admonition",{title:"XPLA Explorer\uc5d0\uc11c Query\ub97c \ubcf4\ub0bc \ub54c\uc5d0\ub294 JSON \ud615\ud0dc\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"One thing to keep in mind is that unlike writing messages in JavaScript code, you should compose it in the JSON format as shown below."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "balance" : {\n        "address" : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n    }\n}\n'))),(0,s.kt)(o.Z,{summary:"How should I format the contract query message?",mdxType:"Details"},(0,s.kt)("p",null,"You can explore the CW20 contract on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"GitHub")," to see what kind of queries you can send to it. Just remember, even though the message names in QueryMsg are written in ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),", you need to send them in ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case")," when actually sending the query. For the parameters, you input them exactly as they appear in the code."),(0,s.kt)("p",null,"For example, let's take a look at the ",(0,s.kt)("strong",{parentName:"p"},"Balance")," and ",(0,s.kt)("strong",{parentName:"p"},"TokenInfo")," messages on the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"CW20 GitHub page"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{4,7}","{4,7}":!0},"pub enum Cw20QueryMsg {\n    /// Returns the current balance of the given address, 0 if unset.\n    /// Return type: BalanceResponse.\n    Balance { address: String },\n    /// Returns metadata on the contract - name, decimals, supply, etc.\n    /// Return type: TokenInfoResponse.\n    TokenInfo {},\n")),(0,s.kt)("p",null,"When sending a Balance query, you should change the ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case")," ",(0,s.kt)("strong",{parentName:"p"},"Balance")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),", which becomes ",(0,s.kt)("strong",{parentName:"p"},"balance"),". As for the parameter, which is ",(0,s.kt)("strong",{parentName:"p"},"{ address: String }"),", you input the wallet address you want to check the balance for as a String. "),(0,s.kt)("p",null,"So, the final format of the query message would be like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n    balance : {\n        address : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n    }\n}\n')),(0,s.kt)("p",null,"Sending a TokenInfo query is the same. You change the ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case")," ",(0,s.kt)("strong",{parentName:"p"},"TokenInfo")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),", which becomes ",(0,s.kt)("strong",{parentName:"p"},"token_info"),". Since there are no parameters in this case, the final format of the query message would be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n    token_info : {}\n}\n")),(0,s.kt)("p",null,"Feel free to use these examples to send various queries to your contract!")),(0,s.kt)("br",null),(0,s.kt)("p",null,"We've learned how to send a query to the contract and how to compose a query message. Now, let's delve into analyzing the Preview Code. If you've understood the Preview Code, feel free to skip reading the ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/query-cw20#runjs"},"following content")," and proceed directly to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/make-nft-vault"},"next step"),"."),(0,s.kt)("h2",{id:"runjs"},"Fetching CW20 Data with Javascript"),(0,s.kt)("p",null,"Let's check how much CW20 tokens a specific wallet address holds using JavaScript code."),(0,s.kt)("h3",{id:"runcode"},"Run Code"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Please create a file named "example-query-cw20.js".')),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},'Copy and paste the code below into the "example-query-cw20.js" file, then save it.'),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const contractAddress = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc";\n    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";\n    const msg = {\n        balance : {\n            address : userAddress\n        }\n    };\n\n    const balance = await lcd.wasm.contractQuery(contractAddress, msg);\n    console.log(balance);\n}\nmain()\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc")," on line 9, enter the contract address of the CW20 token you created. Also, replace ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," on line 10 with the wallet address that holds the CW20 tokens.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter the following command in the VSCode Terminal. "),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node example-query-cw20.js\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Check the results in the Terminal. You'll be able to see how many CW20 tokens the ",(0,s.kt)("inlineCode",{parentName:"p"},"userAddress")," wallet holds."))),(0,s.kt)("h2",{id:"explaination"},"Description"),(0,s.kt)("p",null,"The desired query message is placed in the ",(0,s.kt)("inlineCode",{parentName:"p"},"msg")," variable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const msg = {\n    balance : {\n        address : userAddress\n    }\n};\n")),(0,s.kt)(o.Z,{summary:"How should I format the contract query message?",mdxType:"Details"},(0,s.kt)("p",null,"You can explore the CW20 contract on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"GitHub")," to see what kind of queries you can send to it. Just remember, even though the message names in QueryMsg are written in ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),", you need to send them in ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case")," when actually sending the query. For the parameters, you input them exactly as they appear in the code."),(0,s.kt)("p",null,"For example, let's take a look at the ",(0,s.kt)("strong",{parentName:"p"},"Balance")," and ",(0,s.kt)("strong",{parentName:"p"},"TokenInfo")," messages on the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"CW20 GitHub page"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{4,7}","{4,7}":!0},"pub enum Cw20QueryMsg {\n    /// Returns the current balance of the given address, 0 if unset.\n    /// Return type: BalanceResponse.\n    Balance { address: String },\n    /// Returns metadata on the contract - name, decimals, supply, etc.\n    /// Return type: TokenInfoResponse.\n    TokenInfo {},\n")),(0,s.kt)("p",null,"When sending a Balance query, you should change the ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case")," ",(0,s.kt)("strong",{parentName:"p"},"Balance")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),", which becomes ",(0,s.kt)("strong",{parentName:"p"},"balance"),". As for the parameter, which is ",(0,s.kt)("strong",{parentName:"p"},"{ address: String }"),", you input the wallet address you want to check the balance for as a String. "),(0,s.kt)("p",null,"So, the final format of the query message would be like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n    balance : {\n        address : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n    }\n}\n')),(0,s.kt)("p",null,"Sending a TokenInfo query is the same. You change the ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case")," ",(0,s.kt)("strong",{parentName:"p"},"TokenInfo")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),", which becomes ",(0,s.kt)("strong",{parentName:"p"},"token_info"),". Since there are no parameters in this case, the final format of the query message would be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n    token_info : {}\n}\n")),(0,s.kt)("p",null,"Feel free to use these examples to send various queries to your contract!")),(0,s.kt)("br",null),(0,s.kt)("p",null,"We're using the ",(0,s.kt)("inlineCode",{parentName:"p"},"contractQuery")," function of LCDClient to send a query to the contract. Based on the query message we've provided, we can receive data from the contract. Let's check if the user's balance is being displayed correctly in the logs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const balance = await lcd.wasm.contractQuery(contractAddress, msg);\nconsole.log(balance);\n")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"We've gone through the process of sending queries to the CW20 contract, which has enabled us to find out how much CW20 tokens a specific wallet address holds."),(0,s.kt)("p",null,"By referring to the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"CW20 GitHub"),", you can delve deeper into the queries that can be sent to the CW20 contract. Adapt the process to fetch CW20 data from the contract according to your game's needs, and let's make the game more enjoyable for the users."))}g.isMDXComponent=!0}}]);