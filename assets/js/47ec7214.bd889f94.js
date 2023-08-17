"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[7748],{34673:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),l=n(67294),s=n(86010),r=n(72389),i=n(86043);const o={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function d(e){let{summary:t,children:n,...d}=e;const m=(0,r.Z)(),u=(0,l.useRef)(null),{collapsed:k,setCollapsed:w}=(0,i.u)({initialState:!d.open}),[g,x]=(0,l.useState)(d.open),h=l.isValidElement(t)?t:l.createElement("summary",null,t??"Details");return l.createElement("details",(0,a.Z)({},d,{ref:u,open:g,"data-collapsed":k,className:(0,s.Z)(o.details,m&&o.isBrowser,d.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&p(t,u.current)&&(e.preventDefault(),k?(w(!1),x(!0)):w(!0))}}),h,l.createElement(i.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{w(e),x(!e)}},l.createElement("div",{className:o.collapsibleContent},n)))}const m={details:"details_b_Ee"},u="alert alert--info";function k(e){let{...t}=e;return l.createElement(d,(0,a.Z)({},t,{className:(0,s.Z)(u,m.details,t.className)}))}},51007:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(86010);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function r(e){let{children:t,minHeight:n,url:r="http://localhost:3000",style:i,bodyStyle:o}=e;return a.createElement("div",{className:s.browserWindow,style:{...i,minHeight:n}},a.createElement("div",{className:s.browserWindowHeader},a.createElement("div",{className:s.buttons},a.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,l.Z)(s.browserWindowAddressBar,"text--truncate")},r),a.createElement("div",{className:s.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:s.bar}),a.createElement("span",{className:s.bar}),a.createElement("span",{className:s.bar})))),a.createElement("div",{className:s.browserWindowBody,style:o},t))}},61497:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const l=e=>{let{imgSrc:t,style:n}=e;return a.createElement("img",{className:"max-w-sm",style:n,src:t,alt:""})}},90843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>w});var a=n(87462),l=n(67294),s=n(3905),r=n(34673),i=n(18947);const o=()=>l.createElement(i.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":"const { LCDClient, MsgSend, MnemonicKey } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n  chainID: 'cube_47-5',\n  URL: 'https://cube-lcd.xpla.dev'\n});\n\nasync function main() {\n  const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n  })\n\n  const from = lcd.wallet(mk).key.accAddress;\n  const to = \"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv\"; // faucet \uc9c0\uac11 \uc8fc\uc18c\n  const token = { axpla: 25 };\n\n  const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n    msgs: [new MsgSend(from, to, token)]\n  });\n\n  const txResult = await lcd.tx.broadcastSync(signedTx); // \ud2b8\ub79c\uc7ad\uc158\uc744 \ube14\ub85d\uccb4\uc778\uc5d0 \uc804\uc1a1\n  console.log(\"Your Transaction Hash: \" + txResult.txhash);\n}\nmain()"},options:{layout:"console",showLineNumbers:!0,editorHeight:600}});var c=n(61497),p=n(51007);const d={sidebar_position:1},m="XPLA \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158 \ub9cc\ub4e4\uae30",u={unversionedId:"settings/create-testnet-transaction/send-tx",id:"settings/create-testnet-transaction/send-tx",title:"XPLA \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158 \ub9cc\ub4e4\uae30",description:"\ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub41c \ub370\uc774\ud130\ub4e4\uc744 \ud2b8\ub79c\uc7ad\uc158(Transaction)\uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Alice\uac00 Bob\uc5d0\uac8c 1 XPLA\ub97c \ubcf4\ub0c4\uc774\ub77c\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub9cc\ub4e4\uc5b4 \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ud560 \uc218 \uc788\uaca0\uad70\uc694.",source:"@site/docs/2-settings/2-create-testnet-transaction/1-send-tx.mdx",sourceDirName:"2-settings/2-create-testnet-transaction",slug:"/settings/create-testnet-transaction/send-tx",permalink:"/academy/docs/settings/create-testnet-transaction/send-tx",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\ud558\uae30",permalink:"/academy/docs/category/\ud2b8\ub79c\uc7ad\uc158-\uc0dd\uc131\ud558\uae30"},next:{title:"\ud2b8\ub79c\uc7ad\uc158 \ud655\uc778\ud558\uae30 (Explorer)",permalink:"/academy/docs/settings/create-testnet-transaction/check-tx-in-explorer"}},k={},w=[{value:"Preview",id:"preview",level:2},{value:"Javascript\ub85c Transaction \uc0dd\uc131\ud558\uae30",id:"runjs",level:2},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"runcode",level:3},{value:"\uc9c0\uac11 \ud655\uc778",id:"checkvault",level:2},{value:"\uc124\uba85",id:"explaination",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],g={toc:w},x="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(x,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"xpla-\uc804\uc1a1-\ud2b8\ub79c\uc7ad\uc158-\ub9cc\ub4e4\uae30"},"XPLA \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158 \ub9cc\ub4e4\uae30"),(0,s.kt)("p",null,"\ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub41c \ub370\uc774\ud130\ub4e4\uc744 \ud2b8\ub79c\uc7ad\uc158(Transaction)\uc774\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 ",(0,s.kt)("inlineCode",{parentName:"p"},"Alice\uac00 Bob\uc5d0\uac8c 1 XPLA\ub97c \ubcf4\ub0c4"),"\uc774\ub77c\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub9cc\ub4e4\uc5b4 \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ud560 \uc218 \uc788\uaca0\uad70\uc694. "),(0,s.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\ub824\uba74 XPLA \ucf54\uc778\uc73c\ub85c \uc218\uc218\ub8cc\ub97c \uc9c0\ubd88\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/get-testnet-xpla"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c \ud14c\uc2a4\ud2b8\ub137 XPLA \ucf54\uc778\uc744 \ubc1b\uc558\uc73c\ub2c8, \uc218\uc218\ub8cc \uac71\uc815 \uc5c6\uc774 \ud14c\uc2a4\ud2b8\ub137\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud574\ubd05\uc2dc\ub2e4. "),(0,s.kt)(r.Z,{summary:"\ube14\ub85d\uccb4\uc778\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\ub824\uba74 \uc65c \uc218\uc218\ub8cc\ub97c \uc9c0\ubd88\ud574\uc57c \ud558\ub098\uc694?",mdxType:"Details"},(0,s.kt)("p",null,"\ube14\ub85d\uccb4\uc778\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc5b4\ub5bb\uac8c \uc0dd\uc131\ub418\ub294\uc9c0 \uc608\uc2dc\ub85c \uc0b4\ud3b4\ubd05\uc2dc\ub2e4. ",(0,s.kt)("inlineCode",{parentName:"p"},"Alice\uac00 Bob\uc5d0\uac8c 1 XPLA\ub97c \ubcf4\ub0c4"),"\uc774\ub77c\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc54c\ub9bd\ub2c8\ub2e4(BroadCast). \uadf8\ub807\ub2e4\uba74 Alice\uac00 1 XPLA \uc774\uc0c1\uc744 \ubcf4\uc720\ud558\uace0 \uc788\ub294\uc9c0, Alice\uac00 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud55c \uac83\uc774 \ub9de\ub294\uc9c0 \ub4f1 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud574 \uac80\uc99d\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc744 \uac80\uc99d\ud558\ub294 \uc5ed\ud560\uc744 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/full-node/manage-a-validator/validator-faq/"},"\uac80\uc99d\uc790(Validator)"),"\ub4e4\uc774 \ub2f4\ub2f9\ud569\ub2c8\ub2e4. \uac80\uc99d\uc790\ub4e4\uc740 \ubaa8\ub4e0 \ube14\ub85d\uccb4\uc778 \ub370\uc774\ud130\ub97c \ud655\uc778\ud558\uc5ec, \uc0c8\ub85c \ube14\ub85d\uc5d0 \ub2f4\uc744 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ubb38\uc81c\uac00 \uc5c6\ub294\uc9c0\ub97c \uac80\uc99d\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uac80\uc99d\uc790\ub4e4\uc740 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/full-node/run-a-full-node/overview/"},"\ube14\ub85d\uccb4\uc778\uc758 \uc2dc\uc791\ubd80\ud130 \ud604\uc7ac\uae4c\uc9c0 \uae30\ub85d\ub41c \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc800\uc7a5"),"\ud558\uace0 \uc788\uc73c\uba74\uc11c, \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uacc4\uc18d \ud2b8\ub79c\uc7ad\uc158\uc744 \ubc1b\uc544 \uac80\uc99d\ud558\uae30 \ub54c\ubb38\uc5d0 \ub9ce\uc740 \ucef4\ud4e8\ud305 \uc790\uc6d0\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ucef4\ud4e8\ud305 \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ub300\uc2e0\uc5d0, \uc218\uc218\ub8cc\ub97c \uc9c0\ubd88\ud558\uc5ec \uac80\uc99d\uc790\ub4e4\uc5d0\uac8c \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\uc744 \uc694\uccad\ud569\ub2c8\ub2e4. \uc774\ub97c PoS(Proof of Stake) \ubc29\uc2dd\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ub610\ud55c \uc218\uc218\ub8cc\ub294 \uc545\uc758\uc801\uc778 \uacf5\uaca9\uc790\uac00 \ud2b8\ub79c\uc7ad\uc158\uc744 \ubb34\ud55c\ud788 \ubc1c\uc0dd\uc2dc\ucf1c \ube14\ub85d\uccb4\uc778 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubd80\ud558\ub97c \uac78\uc9c0 \ubabb\ud558\ub3c4\ub85d \ubc29\uc9c0\ud558\ub294 \uc5ed\ud560\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. ")),(0,s.kt)("h2",{id:"preview"},"Preview"),(0,s.kt)("p",null,"Javascript\ub85c \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub9cc\ub4dc\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \ub123\uc5b4 \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uace0 \uc2e4\ud589\ud574\ubcf4\uc138\uc694. \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(o,{mdxType:"Ex02"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/send-tx#runjs"},"\uc544\ub798 \ub0b4\uc6a9"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/check-tx-in-explorer"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"runjs"},"Javascript\ub85c Transaction \uc0dd\uc131\ud558\uae30"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/get-testnet-xpla"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c Faucet \uc9c0\uac11\uc5d0\uac8c XPLA \ucf54\uc778\uc744 \uc804\uc1a1\ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uc774\ubc88\uc5d4 \uc6b0\ub9ac \uc9c0\uac11\uc5d0\uc11c Faucet \uc9c0\uac11\uc73c\ub85c XPLA \ucf54\uc778\uc744 \uc804\uc1a1\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc804\uc1a1\ud558\ub294 \uae08\uc561\uc740 25aXPLA (0.000000000000000025XPLA)\uc785\ub2c8\ub2e4."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"10",(0,s.kt)("sup",null,"18")," ",(0,s.kt)("inlineCode",{parentName:"p"},"aXPLA"),"\ub294 1 ",(0,s.kt)("inlineCode",{parentName:"p"},"XPLA"),"\uc785\ub2c8\ub2e4.")),(0,s.kt)("h3",{id:"runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#runjs"},"\uc55e\uc11c")," example-1.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud55c \uac83\ucc98\ub7fc, example-2.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-2.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { LCDClient, MsgSend, MnemonicKey } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nasync function main() {\n    const mk = new MnemonicKey({\n        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n    })\n\n    const from = lcd.wallet(mk).key.accAddress;\n    const to = \"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv\"; // faucet \uc9c0\uac11 \uc8fc\uc18c\n    const token = { axpla: 25 };\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n        msgs: [new MsgSend(from, to, token)]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx); // \ud2b8\ub79c\uc7ad\uc158\uc744 \ube14\ub85d\uccb4\uc778\uc5d0 \uc804\uc1a1\n    console.log(\"Your Transaction Hash: \" + txResult.txhash);\n}\nmain()\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"10\ubc88\uc9f8 \uc904\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc218\uc815\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node example-2.js\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc758 \ud574\uc2dc\uac12\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."))),(0,s.kt)(r.Z,{summary:"\ud574\uc2dc\uac12\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,s.kt)("p",null,"\ud574\uc2dc\uac12\uc774\ub780 ",(0,s.kt)("inlineCode",{parentName:"p"},"\ub2e4\uc591\ud55c \uae38\uc774\uc758 \ub370\uc774\ud130\ub97c \uc77c\uc815\ud55c \uae38\uc774\uc758 \ub370\uc774\ud130\ub85c \ubcc0\ud658\ud55c \uac12"),"\uc785\ub2c8\ub2e4. \ub370\uc774\ud130\ub97c \ubcc0\ud658\ud558\ub294 \ubc29\ubc95\uc740 \uc801\uc6a9\ud558\ub294 \uc54c\uace0\ub9ac\uc998\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."),(0,s.kt)("p",null,"\ub300\ud45c\uc801\uc778 ",(0,s.kt)("inlineCode",{parentName:"p"},"SHA256")," \uc54c\uace0\ub9ac\uc998\uc744 \uc774\uc6a9\ud558\uc5ec \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubd05\uc2dc\ub2e4. \ub450 \uc785\ub825\uac12\uc758 \ub370\uc774\ud130 \uae38\uc774\ub294 \ub2e4\ub974\uc9c0\ub9cc, \ud574\uc2dc\uac12 \uae38\uc774\ub294 \ubaa8\ub450 64\uac1c\ub85c \ub3d9\uc77c\ud55c \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\uc785\ub825\uac12 : ",(0,s.kt)("inlineCode",{parentName:"p"},"helloworld")),(0,s.kt)("p",{parentName:"li"},"\ud574\uc2dc\uac12 : ",(0,s.kt)("inlineCode",{parentName:"p"},"936A185CAAA266BB9CBE981E9E05CB78CD732B0B3280EB944412BB6F8F8F07AF"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\uc785\ub825\uac12 : ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla")),(0,s.kt)("p",{parentName:"li"},"\ud574\uc2dc\uac12 : ",(0,s.kt)("inlineCode",{parentName:"p"},"2AA54B6285BB3FCF0A69452991C15DB65B76313950C4D6EF74E584AA5F0E3286")))),(0,s.kt)("p",null,"\ud574\uc2dc\uac12\uc758 \ud2b9\uc9d5\uc73c\ub85c\ub294, \uc785\ub825\uac12\uc774 \uc870\uae08\ub9cc \ub2ec\ub77c\uc838\ub3c4 \ud574\uc2dc\uac12\uc774 \ud06c\uac8c \ubc14\ub010\ub2e4\ub294 \uc810, \ud574\uc2dc\uac12\uc744 \ud1b5\ud574 \uc785\ub825\uac12\uc774 \ubb34\uc5c7\uc778\uc9c0\ub294 \uc54c\uc544\ub0b4\uae30 \uc5b4\ub835\ub2e4\ub294 \uc810 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc6b0\ub9ac\uac00 \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,s.kt)("inlineCode",{parentName:"p"},"\ud2b8\ub79c\uc7ad\uc158\uc774 \ud3ec\ud568\ub41c \ube14\ub85d\uc758 \ub192\uc774(Height)"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"\ud2b8\ub79c\uc7ad\uc158\uc774 \ubc1c\uc0dd\ud55c \uc2dc\uac04"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"\ud2b8\ub79c\uc7ad\uc158 \uc218\uc218\ub8cc")," \ub4f1 \ub2e4\uc591\ud55c \ub370\uc774\ud130\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub370\uc774\ud130\ub97c \uc785\ub825\uac12\uc73c\ub85c \ud2b8\ub79c\uc7ad\uc158\uc758 \ud574\uc2dc\uac12\uc774 \uacb0\uc815\ub429\ub2c8\ub2e4.")),(0,s.kt)("h2",{id:"checkvault"},"\uc9c0\uac11 \ud655\uc778"),(0,s.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc744 \uc798 \uc0dd\uc131\ud588\ub2e4\uba74, \uc5ec\ub7ec\ubd84\uc758 \uc9c0\uac11\uc744 Vault\uc5d0\uc11c \ud655\uc778\ud574\ubcf4\uc138\uc694. \uc544\ub798\uc640 \uac19\uc774 \uae30\uc874 Faucet\uc5d0\uc11c \ubc1b\uc558\ub358 100 XPLA\uac00 \uc544\ub2cc, \ub354 \ub0ae\uc740 \uae08\uc561\uc744 \ubcf4\uc720\ud558\uace0 \uacc4\uc2e4\uac81\ub2c8\ub2e4."),(0,s.kt)("p",null,"25aXPLA\ub97c \ub2e4\ub978 \uc9c0\uac11\uc5d0 \uc804\uc1a1\ud588\uace0, \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\uc744 \uc704\ud574 \uc218\uc218\ub8cc\ub3c4 \uc9c0\ubd88\ud588\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,"XPLA \ucf54\uc778\uc774 \uc18c\ubaa8\ub418\uc5c8\ub2e4\ub294 \uac83\uc744 \ud1b5\ud574, \uc6b0\ub9ac\ub294 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc798 \uc0dd\uc131\ub418\uc5c8\ub2e4\uace0 \uac04\uc811\uc801\uc73c\ub85c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(p.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,s.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,s.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,s.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,s.kt)(c.Z,{imgSrc:"/academy/img/2-settings/2-create-testnet-transaction/send-tx/sendtx-checkfee.png",mdxType:"VaultImgCard"}))),(0,s.kt)("h2",{id:"explaination"},"\uc124\uba85"),(0,s.kt)("p",null,"\uba3c\uc800 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc9c0\uac11\uc744 \ubd88\ub7ec\uc654\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 \ub2e4\ub978 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uc9c0\uac11\uc744 \ubd88\ub7ec\uc624\uc168\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n})\n")),(0,s.kt)("br",null),(0,s.kt)("p",null,"\ubcf4\ub0b4\ub294 \uc9c0\uac11 \uc8fc\uc18c, \ubc1b\ub294 \uc9c0\uac11 \uc8fc\uc18c, \ubcf4\ub0b4\ub824\ub294 \ud1a0\ud070\uc758 \uc815\ubcf4\ub97c \uc801\uc5b4\uc90d\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 \uc18c\uc720\ud55c \uc9c0\uac11\uc5d0\uc11c Faucet \uc9c0\uac11\uc73c\ub85c 25aXPLA\ub9cc\ud07c \ubcf4\ub0b4\uaca0\uad70\uc694. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const from = lcd.wallet(mk).key.accAddress;\nconst to = "xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv"; // faucet \uc9c0\uac11 \uc8fc\uc18c\nconst token = { axpla: 25 };\n')),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, \uc11c\uba85\uae4c\uc9c0 \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc11c\uba85\uc740 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \uc54c\uace0 \uc788\uc73c\uba74 \uc774\ub807\uac8c \ucf54\ub4dc\ub85c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n    msgs: [new MsgSend(from, to, token)]\n});\n")),(0,s.kt)(r.Z,{summary:"\uc11c\uba85\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,s.kt)("p",null,"\uc11c\uba85\uc740 ",(0,s.kt)("inlineCode",{parentName:"p"},"\uc9c0\uac11\uc758 \uc8fc\uc778\uc774 \ud2b8\ub79c\uc7ad\uc158\uc744 \ub9cc\ub4e6"),"\uc744 \uc99d\uba85\ud558\ub294 \uc218\ub2e8\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc6b0\ub9ac\ub294 \uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \ub9cc\ub4e4\uc5b4 \uc6b0\ub9ac \uc9c0\uac11\uc5d0\uc11c \ub2e4\ub978 \uc9c0\uac11\uc73c\ub85c XPLA\ub97c \uc804\uc1a1\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc545\uc758\uc801\uc778 \uc0ac\ub78c\uc774 \ub0b4 \uc9c0\uac11\uc758 XPLA\ub97c \ub2e4\ub978 \uc9c0\uac11\uc73c\ub85c \uc804\uc1a1\ud560 \uc218 \uc788\uc73c\uba74 \uc548\ub418\uaca0\uc8e0."),(0,s.kt)("p",null,"\uc774\uac83\uc744 \ubc29\uc9c0\ud558\ub294 \uac83\uc774 \ubc14\ub85c \uc11c\uba85\uc785\ub2c8\ub2e4. \uc11c\uba85\uc740 \uc9c0\uac11\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub098 \uac1c\uc778\ud0a4\ub97c \uc54c\uc544\uc57c\ub9cc \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc5ec\ub7ec \ubc88 \uc5b8\uae09\ub4dc\ub838\uc9c0\ub9cc \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \uc798 \ubcf4\uad00\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \uc54c\uace0 \uc788\uc73c\uba74 \ub2e4\ub978 \uc0ac\ub78c\uc774 \uc11c\uba85\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\uace0, \uc774\ub97c \ud1b5\ud574 \uc790\uae08\uc744 \ud0c8\ucde8\ud560 \uc218 \uc788\uac8c \ub418\ub2c8\uae4c\uc694."),(0,s.kt)("p",null,"\ubfd0\ub9cc \uc544\ub2c8\ub77c \uc11c\uba85\uc740 \ub354 \ub2e4\uc591\ud55c \uc758\ubbf8\ub97c \uc9c0\ub2c8\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc11c\uba85\uc740 \ud2b8\ub79c\uc7ad\uc158\uc758 \ub370\uc774\ud130\ub97c \uc774\uc6a9\ud558\uc5ec \ub9cc\ub4e4\uc5b4\uc9c0\ub294\ub370, \ud2b8\ub79c\uc7ad\uc158 \ub0b4 \ub370\uc774\ud130\ub97c \uc218\uc815\ud558\uba74 \uae30\uc874 \uc11c\uba85\uc740 \ud6a8\ub825\uc774 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4. \ub2e4\uc2dc \uc11c\uba85\uc744 \uc9c4\ud589\ud574\uc57c \ud558\uc8e0. \uc774\ub97c \ud1b5\ud574 \ub2e4\ub978 \uc0ac\ub78c\uc774 \ubab0\ub798 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \uc218\uc815\ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("p",null,"\ucc38\uace0\ub85c \ud2b8\ub79c\uc7ad\uc158\uc758 \uc11c\uba85\uc774 \ud0c0\ub2f9\ud55c\uc9c0\ub97c \uac80\uc99d\ud558\ub294 \uc0ac\ub78c\ub4e4\uc774 \uc55e\uc11c \uc5b8\uae09\ud588\ub358 \uac80\uc99d\uc790(Validator)\ub4e4\uc785\ub2c8\ub2e4.")),(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"broadcastSync")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc744 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc1a1\uc2e0\ud558\uba74, \uac80\uc99d\uc790(Validator)\ub4e4\uc774 \ud2b8\ub79c\uc7ad\uc158\uc744 \uac80\uc99d\ud560 \uac83\uc785\ub2c8\ub2e4. \uac80\uc99d \uc774\ud6c4 \ube14\ub85d\uccb4\uc778\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc774 \ucd94\uac00\ub418\uba74 \uacb0\uacfc\uac12\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("p",null,"\uacb0\uacfc\uac12\uc740 ",(0,s.kt)("inlineCode",{parentName:"p"},"txResult")," \ubcc0\uc218\uc5d0 \uc800\uc7a5\ub418\uace0 \uc774\ub97c \ud1b5\ud574 \ud574\uc2dc\uac12\uc744 \uc54c\uc544\ub0c5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const txResult = await lcd.tx.broadcastSync(signedTx); // \ud2b8\ub79c\uc7ad\uc158\uc744 \ube14\ub85d\uccb4\uc778\uc5d0 \uc804\uc1a1\nconsole.log("Your Transaction Hash: " + txResult.txhash);\n')),(0,s.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,s.kt)("p",null,"\uadf8\ub7f0\ub370 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \ub354 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c\uc694? \ud558\ub098\ub294 XPLA\uc758 \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158 \uae30\ub85d\uc744 \uc0b4\ud3b4\ubcfc \uc218 \uc788\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\ub97c \uc774\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ub610 \ub2e4\ub978 \ubc29\ubc95\uc73c\ub85c\ub294 \uc9c1\uc811 \ucf54\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac12\uc744 \ubc1b\uc544\uc624\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/check-tx-in-explorer"},"\ub2e4\uc74c \ub2e8\uacc4"),"\uc5d0\uc11c \ud558\ub098\uc529 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}h.isMDXComponent=!0}}]);