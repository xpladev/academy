"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[8779],{1007:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:t,minHeight:n,url:l="http://localhost:3000",style:o,bodyStyle:i}=e;return a.createElement("div",{className:s.browserWindow,style:{...o,minHeight:n}},a.createElement("div",{className:s.browserWindowHeader},a.createElement("div",{className:s.buttons},a.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(s.browserWindowAddressBar,"text--truncate")},l),a.createElement("div",{className:s.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:s.bar}),a.createElement("span",{className:s.bar}),a.createElement("span",{className:s.bar})))),a.createElement("div",{className:s.browserWindowBody,style:i},t))}},1497:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{imgSrc:t,style:n}=e;return a.createElement("img",{className:"max-w-sm",style:n,src:t,alt:""})}},4435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(7462),r=n(7294),s=n(3905),l=(n(4673),n(8947));const o=()=>r.createElement(l.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n  const txInfo = await lcd.tx.txInfo("ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"); // \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\n  console.log(JSON.stringify(txInfo, null, 2));\n\n  const balance = await lcd.bank.balance("xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8"); // \uc794\uc561 \uc815\ubcf4\n  console.log(JSON.stringify(balance, null, 2));\n}\nmain()'},options:{layout:"console"}});n(1497),n(1007);const i={sidebar_position:3},c="\ucf54\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",d={unversionedId:"settings/create-testnet-transaction/send-query",id:"settings/create-testnet-transaction/send-query",title:"\ucf54\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",description:"\uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc5ec \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \ub9cc\ub4e0 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \uc9c1\uc811 \uac00\uc838\uc640\ubd05\uc2dc\ub2e4.",source:"@site/docs/2-settings/2-create-testnet-transaction/3-send-query.mdx",sourceDirName:"2-settings/2-create-testnet-transaction",slug:"/settings/create-testnet-transaction/send-query",permalink:"/xpla-academy-dev/ko-kr/docs/settings/create-testnet-transaction/send-query",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Explorer\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \ud655\uc778\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/settings/create-testnet-transaction/check-tx-in-explorer"},next:{title:"Web 3.0 \uac8c\uc784 \uad6c\ucd95\ud558\uae30 : \ubcbd\ub3cc\uae68\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/category/web-30-\uac8c\uc784-\uad6c\ucd95\ud558\uae30--\ubcbd\ub3cc\uae68\uae30"}},p={},m=[{value:"Preview",id:"preview",level:2},{value:"Javascript\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",id:"runjs",level:2},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"runcode",level:3},{value:"\uc124\uba85",id:"explaination",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],u={toc:m},k="wrapper";function x(e){let{components:t,...n}=e;return(0,s.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\ucf54\ub4dc\ub85c-\ud2b8\ub79c\uc7ad\uc158-\ub370\uc774\ud130-\uac00\uc838\uc624\uae30"},"\ucf54\ub4dc\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30"),(0,s.kt)("p",null,"\uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc5ec ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/send-tx"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c \ub9cc\ub4e0 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \uc9c1\uc811 \uac00\uc838\uc640\ubd05\uc2dc\ub2e4."),(0,s.kt)("h2",{id:"preview"},"Preview"),(0,s.kt)("p",null,"Javascript\ub85c \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. 9\ubc88\uc9f8 \uc904\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc758 \ud574\uc2dc\uac12\uc744 \uc785\ub825\ud558\uace0, 12\ubc88\uc9f8 \uc904\uc5d0\ub294 \uc5ec\ub7ec\ubd84 \uc9c0\uac11\uc758 \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc5ec \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uace0 \uc2e4\ud589\ud574\ubcf4\uc138\uc694. \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(o,{mdxType:"Ex03"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/send-query#runjs"},"\uc544\ub798 \ub0b4\uc6a9"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/check-tx-in-explorer"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"runjs"},"Javascript\ub85c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30"),(0,s.kt)("p",null,"Javascript \ucf54\ub4dc\ub85c ",(0,s.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/send-tx"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c \ub9cc\ub4e0 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\ubd05\uc2dc\ub2e4."),(0,s.kt)("h3",{id:"runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"example-3.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-3.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const txInfo = await lcd.tx.txInfo("ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"); // \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\n    console.log(JSON.stringify(txInfo, null, 2));\n\n    const balance = await lcd.bank.balance("xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8"); // \uc794\uc561 \uc815\ubcf4\n    console.log(JSON.stringify(balance, null, 2));\n}\nmain()\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"9\ubc88\uc9f8 \uc904\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353")," \ub300\uc2e0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc758 \ud574\uc2dc\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694. \ub610\ud55c, 12\ubc88\uc9f8 \uc904\uc5d0\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8")," \ub300\uc2e0 \uc5ec\ub7ec\ubd84 \uc9c0\uac11\uc758 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node example-3.js\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\uc640 \uc5ec\ub7ec\ubd84\uc758 \uc9c0\uac11 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,s.kt)("h2",{id:"explaination"},"\uc124\uba85"),(0,s.kt)("p",null,"LCDClient\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"txInfo")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \uc785\ub825\ud55c \ud574\uc2dc\uac12\uc5d0 \ud574\ub2f9\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \ubc1b\uc544\uc635\ub2c8\ub2e4. \uc2e4\ud589 \uacb0\uacfc\ub97c \uc0b4\ud3b4\ubcf4\uc2dc\uba74 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uc131\ub41c \ube14\ub85d\uc758 \ub192\uc774(Height), \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12(txhash), \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \uc2dc\uac01(timestamp) \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uacb0\uacfc\uac12\uc744 \ud1b5\ud574 \uc5ec\ub7ec\ubd84\uc774 \ud544\uc694\ud55c \uc815\ubcf4\ub9cc \uc774\uc6a9\ud558\uc2dc\uba74 \ub418\uaca0\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const txInfo = await lcd.tx.txInfo("ECDBC35B66384DEE25987AA0DDAE8CF946D1F4907B04A0E77939988474013353"); // \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\nconsole.log(JSON.stringify(txInfo, null, 2));\n')),(0,s.kt)("br",null),(0,s.kt)("p",null,"LCDClient\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"balance")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \uc785\ub825\ud55c \uc8fc\uc18c\uc758 \uc794\uc561\uc744 \ubc1b\uc544\uc635\ub2c8\ub2e4. \uae30\uc874 Faucet\uc5d0\uc11c 100 XPLA\ub97c \ubc1b\uc558\uc73c\ub098, \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uc5ec 100 XPLA\ubcf4\ub2e4 \ub0ae\uc740 \uae08\uc561\uc744 \ubcf4\uc720\ud558\uace0 \uacc4\uc2e4 \uac81\ub2c8\ub2e4. amount \ud56d\ubaa9\uc774 \uc81c\ub300\ub85c \ub098\uc624\ub294\uc9c0 \ud655\uc778\ud574\ubd05\uc2dc\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const balance = await lcd.bank.balance("xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8"); // \uc794\uc561 \uc815\ubcf4\nconsole.log(JSON.stringify(balance, null, 2));\n')),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\uc794\uc561\uc5d0 \ub108\ubb34 \ud070 \uc22b\uc790\uac00 \uae30\ub85d\ub418\uc5b4 \uc788\uc73c\uc2e0\uac00\uc694? \uadf8\uac83\uc740 \uc794\uc561\uc774 ",(0,s.kt)("inlineCode",{parentName:"p"},"axpla")," \ub2e8\uc704\ub85c \ud45c\uc2dc\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. 10",(0,s.kt)("sup",null,"18")," ",(0,s.kt)("inlineCode",{parentName:"p"},"aXPLA"),"\ub294 1 ",(0,s.kt)("inlineCode",{parentName:"p"},"XPLA"),"\uc778 \uac83\uc744 \uae30\uc5b5\ud574\uc8fc\uc2ed\uc2dc\uc624."),(0,s.kt)("p",{parentName:"admonition"},"Preview Code\uc758 \uacb0\uacfc\ub97c \ucc38\uace0\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uacb0\uacfc\uc640 \ube44\uad50\ud574\ubcf4\uc138\uc694.")),(0,s.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,s.kt)("p",null,"\ucf54\ub4dc\ub85c \uc5bb\uc740 \uacb0\uacfc\ub294 \ubaa8\ub450 ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc81c \ucf54\ub4dc\ub97c \uc774\uc6a9\ud558\uc5ec \ub354 \ub2e4\uc591\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc2e4 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc774\ub85c\uc368 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uc2e4 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4! \ub2e4\uc74c \ub2e8\uacc4\uc5d0\uc11c \ub354 \uae4a\uc774 \uacf5\ubd80\ud574\ubd05\uc2dc\ub2e4."))}x.isMDXComponent=!0}}]);