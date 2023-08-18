"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[392],{34673:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),r=n(67294),s=n(86010),o=n(72389),l=n(86043);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function i(e){return!!e&&("SUMMARY"===e.tagName||i(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function m(e){let{summary:t,children:n,...m}=e;const u=(0,o.Z)(),d=(0,r.useRef)(null),{collapsed:k,setCollapsed:N}=(0,l.u)({initialState:!m.open}),[f,w]=(0,r.useState)(m.open),y=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,a.Z)({},m,{ref:d,open:f,"data-collapsed":k,className:(0,s.Z)(c.details,u&&c.isBrowser,m.className),onMouseDown:e=>{i(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;i(t)&&p(t,d.current)&&(e.preventDefault(),k?(N(!1),w(!0)):N(!0))}}),y,r.createElement(l.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{N(e),w(!e)}},r.createElement("div",{className:c.collapsibleContent},n)))}const u={details:"details_b_Ee"},d="alert alert--info";function k(e){let{...t}=e;return r.createElement(m,(0,a.Z)({},t,{className:(0,s.Z)(d,u.details,t.className)}))}},51007:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:t,minHeight:n,url:o="http://localhost:3000",style:l,bodyStyle:c}=e;return a.createElement("div",{className:s.browserWindow,style:{...l,minHeight:n}},a.createElement("div",{className:s.browserWindowHeader},a.createElement("div",{className:s.buttons},a.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(s.browserWindowAddressBar,"text--truncate")},o),a.createElement("div",{className:s.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:s.bar}),a.createElement("span",{className:s.bar}),a.createElement("span",{className:s.bar})))),a.createElement("div",{className:s.browserWindowBody,style:c},t))}},61497:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=e=>{let{imgSrc:t,style:n}=e;return a.createElement("img",{className:"max-w-sm",style:n,src:t,alt:""})}},92142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>y,frontMatter:()=>m,metadata:()=>d,toc:()=>N});var a=n(87462),r=n(67294),s=n(3905),o=n(34673),l=n(18947);const c=()=>r.createElement(l.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const contractAddress = "xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn";\n    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";\n\n    const userNFTsMsg = {\n        tokens : {\n            owner : userAddress\n        }\n    };\n    const userNFTs = await lcd.wasm.contractQuery(contractAddress, userNFTsMsg);\n    console.log(userNFTs);\n\n    const tokenIds = userNFTs.tokens;\n    for (const tokenId of tokenIds) {\n        const nftInfoMsg = {\n            nft_info : {\n                token_id : tokenId\n            }\n        }\n        const nftInfo = await lcd.wasm.contractQuery(contractAddress, nftInfoMsg);\n        console.log(JSON.stringify(nftInfo, null, 2));\n    }\n}\nmain()'},options:{layout:"console",showLineNumbers:!0,editorHeight:600}});var i=n(61497),p=n(51007);const m={sidebar_position:3},u="CW721 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30",d={unversionedId:"tutorial/make-cw721/query-cw721",id:"tutorial/make-cw721/query-cw721",title:"CW721 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30",description:"\uac8c\uc784\uc5d0\uc11c \uc720\uc800\ub4e4\uc774 \uc18c\uc720\ud55c NFT\ub97c \uc5b4\ub5bb\uac8c \uc774\uc6a9\ud560 \uc218 \uc788\uc744\uae4c\uc694? LCDClient\ub97c \uc774\uc6a9\ud558\uc5ec Query\ub97c \ubcf4\ub0b4\uc11c NFT \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \uc9c1\uc811 \ub9cc\ub4e0 NFT \uc815\ubcf4\ub97c \uac00\uc838\uc640\ubd05\uc2dc\ub2e4. \uc608\uc81c\uc5d0\uc11c \uc0ac\uc6a9\ud55c CW721 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub294 xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn \uc785\ub2c8\ub2e4.",source:"@site/i18n/ko-kr/docusaurus-plugin-content-docs/current/3-tutorial/2-make-cw721/3-query-cw721.mdx",sourceDirName:"3-tutorial/2-make-cw721",slug:"/tutorial/make-cw721/query-cw721",permalink:"/academy/ko-kr/docs/tutorial/make-cw721/query-cw721",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"NFT(CW721) \ubc1c\ud589\ud558\uae30 (Javascript)",permalink:"/academy/ko-kr/docs/tutorial/make-cw721/make-nft-js"},next:{title:"Advenced - Dive deep into XPLA blockchain",permalink:"/academy/ko-kr/docs/category/advenced---dive-deep-into-xpla-blockchain"}},k={},N=[{value:"Preview",id:"preview",level:2},{value:"Javascript\ub85c NFT \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",id:"runjs",level:2},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"runcode",level:3},{value:"\uc124\uba85",id:"explaination",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],f={toc:N},w="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(w,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cw721-\ub370\uc774\ud130-\uc0ac\uc6a9\ud558\uae30"},"CW721 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30"),(0,s.kt)("p",null,"\uac8c\uc784\uc5d0\uc11c \uc720\uc800\ub4e4\uc774 \uc18c\uc720\ud55c NFT\ub97c \uc5b4\ub5bb\uac8c \uc774\uc6a9\ud560 \uc218 \uc788\uc744\uae4c\uc694? LCDClient\ub97c \uc774\uc6a9\ud558\uc5ec Query\ub97c \ubcf4\ub0b4\uc11c NFT \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/make-nft-vault"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c \uc9c1\uc811 \ub9cc\ub4e0 NFT \uc815\ubcf4\ub97c \uac00\uc838\uc640\ubd05\uc2dc\ub2e4. \uc608\uc81c\uc5d0\uc11c \uc0ac\uc6a9\ud55c CW721 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn")," \uc785\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"preview"},"Preview"),(0,s.kt)("p",null,"Javascript\ub85c NFT \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. 9\ubc88\uc9f8 \uc904\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 CW721 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c, 10\ubc88\uc9f8 \uc904\uc5d0 NFT\ub97c \ubcf4\uc720\ud558\uace0 \uc788\ub294 \uc9c0\uac11 \uc8fc\uc18c\ub85c \uc218\uc815\ud574\uc8fc\uc138\uc694. \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(c,{mdxType:"Ex10"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"LCDClient\ub85c Query\ub97c \ubcf4\ub0b4\uc11c \ud2b9\uc815 \uc9c0\uac11 \uc8fc\uc18c\uac00 \uc5b4\ub5a4 NFT\ub97c \uac00\uc9c0\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub610\ud55c NFT\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"token_id")," \uac12\uc73c\ub85c NFT \uc815\ubcf4\ub97c \ubd88\ub7ec\uc62c \uc218\ub3c4 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc720\uc800\ub4e4\uc774 \uac00\uc9c0\uace0 \uc788\ub294 NFT \uc815\ubcf4\ub97c \uc774\uc6a9\ud574 \uc5ec\ub7ec\ubd84\uc758 \uac8c\uc784\uc5d0 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c\ub3c4 \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. XPLA Explorer\uc5d0\uc11c CW20 \ud1a0\ud070 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uac80\uc0c9\ud558\uace0, ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn#InitMsg"},"Init Msg \ud0ed"),"\uc73c\ub85c \uc811\uc18d\ud574\ubd05\uc2dc\ub2e4. "),(0,s.kt)(p.Z,{url:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,s.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,s.kt)(i.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/query-cw721/explorer-initmsg.png",mdxType:"VaultImgCard"}))),(0,s.kt)("br",null),(0,s.kt)("p",null,"\uc774\ud6c4 \uc6b0\uce21\uc5d0 Query \ubc84\ud2bc\uc744 \ub20c\ub7ec\ubcf4\uba74 Query \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud558\ub294 \ud31d\uc5c5\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \uc27d\uac8c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(p.Z,{url:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,s.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,s.kt)(i.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/2-make-cw721/query-cw721/query.png",mdxType:"VaultImgCard"}))),(0,s.kt)("br",null),(0,s.kt)("admonition",{title:"XPLA Explorer\uc5d0\uc11c Query\ub97c \ubcf4\ub0bc \ub54c\uc5d0\ub294 JSON \ud615\ud0dc\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"\uc8fc\uc758\ud560 \uc810\uc740 Javascript \ucf54\ub4dc\uc5d0\uc11c \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud560 \ub54c\uc640\ub294 \ub2ec\ub9ac, \uc544\ub798\uc640 \uac19\uc774 JSON \ud615\ud0dc\ub85c \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. "),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tokens" : {\n        "owner" : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n    }\n}\n'))),(0,s.kt)(o.Z,{summary:"\ucee8\ud2b8\ub799\ud2b8 Query \uba54\uc2dc\uc9c0\ub294 \uc5b4\ub5a4 \ud615\uc2dd\uc73c\ub85c \uc791\uc131\ud574\uc57c \ud558\ub098\uc694?",mdxType:"Details"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L77"},"CW721 Github"),"\uc5d0\uc11c CW721 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 Query\ub97c \ubcf4\ub0bc \uc218 \uc788\ub294\uc9c0 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc758\ud560 \uc810\uc740 QueryMsg\uc5d0\uc11c \uba54\uc2dc\uc9c0 \uc774\ub984\uc774 ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\uc73c\ub098, \uc2e4\uc81c Query\ub97c \ubcf4\ub0bc \ub54c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4. parameter \ud56d\ubaa9\uc740 \ucf54\ub4dc \ud615\uc2dd \uadf8\ub300\ub85c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L77"},"CW721 Github"),"\uc5d0\uc11c ",(0,s.kt)("strong",{parentName:"p"},"NftInfo"),"(line 126) \uba54\uc2dc\uc9c0\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{7,12}","{7,12}":!0},"pub enum QueryMsg<Q: JsonSchema> {\n    ...\n    /// With MetaData Extension.\n    /// Returns metadata about one particular token, based on *ERC721 Metadata JSON Schema*\n    /// but directly from the contract\n    #[returns(cw721::NftInfoResponse<Q>)]\n    NftInfo { token_id: String },\n")),(0,s.kt)("p",null,"NftInfo Query\ub97c \ubcf4\ub0bc \ub54c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\ub294 ",(0,s.kt)("strong",{parentName:"p"},"NftInfo"),"\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubc14\uafb8\uc5b4 ",(0,s.kt)("strong",{parentName:"p"},"nft_info"),"\ub85c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4. parameter \ud56d\ubaa9\uc740 ",(0,s.kt)("strong",{parentName:"p"},"{ token_id: String }")," \uc774\ubbc0\ub85c, \uc815\ubcf4\ub97c \uc54c\uace0 \uc2f6\uc740 NFT\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"token_id")," \uac12\uc744 String Type\uc73c\ub85c \uc785\ub825\ud558\uba74 \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd5c\uc885 Query \uba54\uc2dc\uc9c0 \ud615\ud0dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n    nft_info : {\n        token_id : "token_id_myExampleNFT1"\n    }\n}\n')),(0,s.kt)("p",null,"\uc774\ub97c \ucc38\uace0\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub2e4\uc591\ud55c Query\ub97c \ubcf4\ub0b4\ubcf4\uc138\uc694.")),(0,s.kt)("br",null),(0,s.kt)("p",null,"\uc774\ub807\uac8c \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0b4\ub294 \ubc29\ubc95\uacfc Query \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc774\uc81c Preview Code\ub97c \ubd84\uc11d\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/query-cw721#runjs"},"\uc544\ub798 \ub0b4\uc6a9"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/local-network"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"runjs"},"Javascript\ub85c NFT \ub370\uc774\ud130 \uac00\uc838\uc624\uae30"),(0,s.kt)("p",null,"Javascript \ucf54\ub4dc\ub85c \ud2b9\uc815 \uc9c0\uac11 \uc8fc\uc18c\uac00 \uc5b4\ub5a4 NFT\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\ub294\uc9c0\ub97c \uc54c\uc544\ubcf4\uace0, \uac01 NFT\uc758 \uc815\ubcf4\uae4c\uc9c0 \ubd88\ub7ec\uc640 \ubd05\uc2dc\ub2e4."),(0,s.kt)("h3",{id:"runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"example-query-cw721.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-query-cw721.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\nchainID: \'cube_47-5\',\nURL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const contractAddress = "xpla1wx3rm4qxf7l3tczj20mxz62wpnr74kme3f45tvk3muh78c432ucs2ceuqn";\n    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";\n\n    const userNFTsMsg = {\n        tokens : {\n            owner : userAddress\n        }\n    };\n    const userNFTs = await lcd.wasm.contractQuery(contractAddress, userNFTsMsg);\n    console.log(userNFTs);\n\n    const tokenIds = userNFTs.tokens;\n    for (const tokenId of tokenIds) {\n        const nftInfoMsg = {\n            nft_info : {\n                token_id : tokenId\n            }\n        }\n        const nftInfo = await lcd.wasm.contractQuery(contractAddress, nftInfoMsg);\n        console.log(JSON.stringify(nftInfo, null, 2));\n    }\n}\nmain()\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"9\ubc88\uc9f8 \uc904\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 CW721 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c, 10\ubc88\uc9f8 \uc904\uc5d0 NFT\ub97c \ubcf4\uc720\ud558\uace0 \uc788\ub294 \uc9c0\uac11 \uc8fc\uc18c\ub85c \uc218\uc815\ud574\uc8fc\uc138\uc694. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node example-query-cw721.js\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \uccab\ubc88\uc9f8 Log \uac12\uc5d0\ub294 \ud2b9\uc815 \uc9c0\uac11\uc774 \uac00\uc9c4 NFT \uc815\ubcf4\ub4e4\uc774 \ub098\ud0c0\ub098\uace0, \ub450\ubc88\uc9f8 Log \uac12\uc5d0\ub294 \ud2b9\uc815 NFT\uc758 \uc815\ubcf4\ub97c \ubc1b\uc544\uc62c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."))),(0,s.kt)("h2",{id:"explaination"},"\uc124\uba85"),(0,s.kt)("p",null,"\uba3c\uc800 \ud2b9\uc815 \uc9c0\uac11\uc774 \uc5b4\ub5a4 NFT\ub97c \uac00\uc9c0\uace0 \uc788\ub294\uc9c0\ub97c \uc54c\uc544\ub0b4\uae30 \uc704\ud574, ",(0,s.kt)("strong",{parentName:"p"},"userNFTsMsg")," \ubcc0\uc218\uc5d0 \uc544\ub798\uc640 \uac19\uc774 Query \uba54\uc2dc\uc9c0\ub97c \ub2f4\uc544\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4. Query \uba54\uc2dc\uc9c0 \ud615\uc2dd\uc740 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L140"},"CW721 Github"),"\uc744 \ucc38\uace0\ud588\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const userNFTsMsg = {\n    tokens : {\n        owner : userAddress\n    }\n};\n")),(0,s.kt)(o.Z,{summary:"\ucee8\ud2b8\ub799\ud2b8 Query \uba54\uc2dc\uc9c0\ub294 \uc5b4\ub5a4 \ud615\uc2dd\uc73c\ub85c \uc791\uc131\ud574\uc57c \ud558\ub098\uc694?",mdxType:"Details"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L77"},"CW721 Github"),"\uc5d0\uc11c CW721 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 Query\ub97c \ubcf4\ub0bc \uc218 \uc788\ub294\uc9c0 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc758\ud560 \uc810\uc740 QueryMsg\uc5d0\uc11c \uba54\uc2dc\uc9c0 \uc774\ub984\uc774 ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\uc73c\ub098, \uc2e4\uc81c Query\ub97c \ubcf4\ub0bc \ub54c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4. parameter \ud56d\ubaa9\uc740 \ucf54\ub4dc \ud615\uc2dd \uadf8\ub300\ub85c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs#L77"},"CW721 Github"),"\uc5d0\uc11c ",(0,s.kt)("strong",{parentName:"p"},"NftInfo"),"(line 126) \uba54\uc2dc\uc9c0\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{7,12}","{7,12}":!0},"pub enum QueryMsg<Q: JsonSchema> {\n    ...\n    /// With MetaData Extension.\n    /// Returns metadata about one particular token, based on *ERC721 Metadata JSON Schema*\n    /// but directly from the contract\n    #[returns(cw721::NftInfoResponse<Q>)]\n    NftInfo { token_id: String },\n")),(0,s.kt)("p",null,"NftInfo Query\ub97c \ubcf4\ub0bc \ub54c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\ub294 ",(0,s.kt)("strong",{parentName:"p"},"NftInfo"),"\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubc14\uafb8\uc5b4 ",(0,s.kt)("strong",{parentName:"p"},"nft_info"),"\ub85c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4. parameter \ud56d\ubaa9\uc740 ",(0,s.kt)("strong",{parentName:"p"},"{ token_id: String }")," \uc774\ubbc0\ub85c, \uc815\ubcf4\ub97c \uc54c\uace0 \uc2f6\uc740 NFT\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"token_id")," \uac12\uc744 String Type\uc73c\ub85c \uc785\ub825\ud558\uba74 \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd5c\uc885 Query \uba54\uc2dc\uc9c0 \ud615\ud0dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n    nft_info : {\n        token_id : "token_id_myExampleNFT1"\n    }\n}\n')),(0,s.kt)("p",null,"\uc774\ub97c \ucc38\uace0\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub2e4\uc591\ud55c Query\ub97c \ubcf4\ub0b4\ubcf4\uc138\uc694.")),(0,s.kt)("br",null),(0,s.kt)("p",null,"LCDClient\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"contractQuery")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0c5\ub2c8\ub2e4. \uc785\ub825\ud55c Query \uba54\uc2dc\uc9c0\uc5d0 \ub9de\uac8c, \ucee8\ud2b8\ub799\ud2b8\uc5d0\uac8c \ub370\uc774\ud130\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const userNFTs = await lcd.wasm.contractQuery(contractAddress, userNFTsMsg);\nconsole.log(userNFTs);\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"userNFTs.tokens")," \ubcc0\uc218\uc5d0\ub294 \uc720\uc800\uac00 \uac00\uc9c4 NFT\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"token_id")," \uac12\ub4e4\uc774 \ubc30\uc5f4\ub85c \ub2f4\uaca8 \uc788\uc2b5\ub2c8\ub2e4. \uac01 NFT\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"token_id")," \uac12\uc744 ",(0,s.kt)("strong",{parentName:"p"},"nftInfoMsg")," \ubcc0\uc218\uc5d0 \ub2f4\uc544 \uc544\ub798\uc640 \uac19\uc774 Query \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1,5}","{1,5}":!0},"const tokenIds = userNFTs.tokens;\nfor (const tokenId of tokenIds) {\n    const nftInfoMsg = {\n        nft_info : {\n            token_id : tokenId\n        }\n    }\n...\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"\ub9c8\ucc2c\uac00\uc9c0\ub85c LCDClient\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"contractQuery")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0c5\ub2c8\ub2e4. \uc785\ub825\ud55c Query \uba54\uc2dc\uc9c0\uc5d0 \ub9de\uac8c, \ucee8\ud2b8\ub799\ud2b8\uc5d0\uac8c \ub370\uc774\ud130\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const nftInfo = await lcd.wasm.contractQuery(contractAddress, nftInfoMsg);\nconsole.log(JSON.stringify(nftInfo, null, 2));\n")),(0,s.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,s.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 CW721 \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0b4\ub294 \uacfc\uc815\uc744 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/contracts/cw721-base/src/msg.rs"},"CW721 Github"),"\uc744 \ucc38\uace0\ud558\uba74 CW721 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 Query\ub97c \ubcf4\ub0bc \uc218 \uc788\ub294\uc9c0 \ub354 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \uac8c\uc784\uc5d0 \ub9de\uac8c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c CW721 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0, \uc720\uc800\ub4e4\uc774 \uac8c\uc784\uc744 \ub354 \uc990\uae38 \uc218 \uc788\uac8c \ub9cc\ub4e4\uc5b4\ubd05\uc2dc\ub2e4."))}y.isMDXComponent=!0}}]);