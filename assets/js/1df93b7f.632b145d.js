(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[3237],{91649:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294),l=n(86010),r=n(85518);function c(){if(r.tq)return a.createElement("img",{src:"/img/PlayGame/comingsoon.svg"});const[e,t]=(0,a.useState)(!0),[n,c]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=window.innerWidth,n=window.innerHeight;if(e>=920&&n>=830)return t(!0),c(!1),void o(!1);92*n>83*e?(t(!1),c(!0),o(!1)):(t(!1),c(!1),o(!0))}),[]),window.onresize=function(e){const n=window.innerWidth,a=window.innerHeight;if(n>=920&&a>=830)return t(!0),c(!1),void o(!1);92*a>83*n?(t(!1),c(!0),o(!1)):(t(!1),c(!1),o(!0))};return a.createElement("div",{className:(0,l.Z)("z-10",{"w-[900px] h-[750px]":e,setWithWidth:n,setWithHeight:s}),dangerouslySetInnerHTML:{__html:'<iframe src="/img/web-desktop/index.html" width="100%" height="100%" scrolling ="no" ></iframe>'}})}},74584:(e,t,n)=>{"use strict";n.d(t,{v:()=>x,Z:()=>g});var a=n(87462),l=n(86010),r=n(67294);const c={features:"features_GNmN",devResourceButton:"devResourceButton_XBH6",endpointShadow:"endpointShadow_vthC",endpointMainnet:"endpointMainnet_rQEI",endpointTestnet:"endpointTestnet_ChlA",endpointURL:"endpointURL_jLlG",dropdownRotate:"dropdownRotate_HZz1",fadeOut:"fadeOut_zEfV",fadeout:"fadeout_BAoT",fadeIn:"fadeIn__JkO",fadein:"fadein_O_L3"};var s=n(39960),o=n(45111),m=n(13379),i=n(98396);async function x(e){return void 0!==e&&(navigator.clipboard&&window.isSecureContext&&await navigator.clipboard.writeText(e.toString()),!0)}const p=[{title:"Github",link:"https://github.com/xpladev",color:"#00B2FC"},{title:"Vault",link:"https://vault.xpla.io/",color:"#1277FF"},{title:"Explorer",link:"https://explorer.xpla.io/",color:"#00B2FC"},{title:"API Swagger",link:"https://dimension-lcd.xpla.dev/swagger/#/",color:"#1277FF"},{title:"XPLA.js",link:"https://www.npmjs.com/package/@xpla/xpla.js",color:"#00B2FC"},{title:"Faucet",link:"https://faucet.xpla.io/",color:"#1277FF"}];function d(e){let{title:t,link:n,color:a}=e;return r.createElement(s.Z,{to:n,className:(0,l.Z)("flex flex-col p-5 gap-5",c.devResourceButton),style:{backgroundColor:a,textDecoration:"none"},"aria-label":"resourcelink"+t},r.createElement("div",{className:"font-bold text-[20px] text-[#ffffff]"},t),r.createElement("div",{className:"flex justify-end"},r.createElement(m.Z,{sx:{color:"white"}})))}const u=[{title:"LCD",link:"https://dimension-lcd.xpla.dev"},{title:"RPC",link:"https://dimension-rpc.xpla.dev"},{title:"FCD",link:"https://dimension-fcd.xpla.dev"},{title:"GRPC",link:"dimension-grpc.xpla.dev:9090"},{title:"Websocket",link:"wss://dimension-rpc.xpla.dev/websocket"}],E=[{title:"LCD",link:"https://cube-lcd.xpla.dev"},{title:"RPC",link:"https://cube-rpc.xpla.dev"},{title:"FCD",link:"https://cube-fcd.xpla.dev"},{title:"GRPC",link:"cube-grpc.xpla.dev:9090"},{title:"Websocket",link:"wss://cube-rpc.xpla.dev/websocket"}];function f(e){let{title:t,link:n}=e;const[a,s]=(0,r.useState)(!0),[o,m]=(0,r.useState)(!1),p=(0,i.Z)("(max-width:768px)"),d=(0,r.useCallback)((()=>{s(!0),m(!0),setTimeout((()=>{s(!1)}),1e3),setTimeout((()=>{m(!1)}),1500),x(n)}),[]);return r.createElement("div",{className:"flex justify-between"},r.createElement("div",{className:"flex"},r.createElement("span",{className:"text-[18px] font-bold min-w-[130px] max-w-[130px] md:min-w-[175px] md:max-w-[175px]"},t),r.createElement("span",{className:"text-[18px] font-medium"},n)),r.createElement("div",{className:"relative w-[100px] flex justify-end"},o&&r.createElement("img",{src:"/img/DevResource/copied.svg",className:(0,l.Z)("absolute left-[64px] bottom-[37px] w-[60px] ",!a&&c.fadeOut)}),!p&&r.createElement("img",{onClick:d,src:"/img/DevResource/CopyButton.svg",className:"hover:cursor-pointer hover:opacity-60"})))}function g(e){let{moveToElement:t}=e;const[n,s]=(0,r.useState)(!1),[m,i]=(0,r.useState)(!1);return r.createElement("section",{ref:t,className:"bg-[#F5F4F4] px-[16px] pt-[117px] pb-[147px] flex flex-col gap-[55px] items-center"},r.createElement("div",{className:"#333333 font-bold text-[50px]"},"Tap into the DEV Resources"),r.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-[1180px] w-[100%]"},p.map(((e,t)=>r.createElement(d,(0,a.Z)({key:t},e))))),r.createElement("div",{className:(0,l.Z)("max-w-[1180px] w-[100%]",c.endpointShadow)},r.createElement("div",{onClick:()=>s(!n),className:(0,l.Z)("hover:cursor-pointer bg-[#C9FF00]","text-[20px] flex justify-between items-center",c.endpointMainnet)},r.createElement("span",null,"ENDPOINT",r.createElement("span",{className:"font-bold"},"(MAINNET)")),r.createElement(o.Z,{sx:{color:"black",fontSize:60},className:(0,l.Z)(n?c.dropdownRotate:"")})),n&&r.createElement("div",{className:c.endpointURL},r.createElement("div",{className:"flex flex-col w-[100%] gap-5"},u.map(((e,t)=>r.createElement(f,(0,a.Z)({key:t},e)))))),r.createElement("div",{onClick:()=>i(!m),className:(0,l.Z)("hover:cursor-pointer bg-[#004FFF]","text-[#ffffff] text-[20px] flex justify-between items-center",c.endpointTestnet)},r.createElement("span",null,"ENDPOINT",r.createElement("span",{className:"font-bold"},"(TESTNET)")),r.createElement(o.Z,{sx:{color:"white",fontSize:60},className:(0,l.Z)(m?c.dropdownRotate:"")})),m&&r.createElement("div",{className:c.endpointURL},r.createElement("div",{className:"flex flex-col w-[100%] gap-5"},E.map(((e,t)=>r.createElement(f,(0,a.Z)({key:t},e))))))))}},41690:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>_});var a=n(67294),l=n(39960),r=n(52263),c=n(51336);const s=e=>{let{en:t,kr:n}=e;const{i18n:a}=(0,r.Z)();return"en"===a.currentLocale?t:n};var o=n(67791),m=n(86010);function i(){return a.createElement("section",{className:"min-[997px]:h-[920px] max-[996px]:py-[20px] px-[20px] bg-[#004FFF] flex justify-center items-center"},a.createElement("div",{className:"max-w-[1180px] w-full flex flex-col justify-center items-start"},a.createElement("div",{className:"font-bold text-[50px] leading-[60px] text-white mb-[18px]"},"About XPLA ACADEMY"),a.createElement("div",{className:"font-normal text-[28px] leading-[36px] text-[#46E9FC] mb-[105px]"},a.createElement("span",{className:(0,m.Z)({"font-semibold leading-[38px]":"ko-kr"===o.currentLocale})},a.createElement(s,{en:"Education hub for building XPLA-linked Web3 projects.",kr:"XPLA ACADEMY\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Web3 \uac00\uc774\ub4dc\ub97c \ud1b5\ud574,"})),a.createElement("br",null),a.createElement("span",{className:(0,m.Z)({"font-semibold leading-[38px]":"ko-kr"===o.currentLocale})},a.createElement(s,{en:"Easy to follow guides and free source codes.",kr:"\ub204\uad6c\ub098 \uc27d\uac8c XPLA\uc5d0 \uc628\ubcf4\ub529\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}))),a.createElement("div",{className:"w-full flex max-[996px]:flex-col gap-[80px] items-center "},a.createElement("img",{src:"/img/AboutXPLAAcademy/venn_diagram.svg",alt:"venn_diagram"}),a.createElement("div",null,a.createElement("div",{className:"text-[40px] leading-[48px] text-[#C9FF00] font-bold mb-[16px]"},"Start Learning"),a.createElement("div",{className:(0,m.Z)(" leading-[38px]  text-white mb-[4px]",{"font-semibold text-[29px]":"en"===o.currentLocale,"font-bold text-[24px]":"ko-kr"===o.currentLocale})},a.createElement(s,{en:"Connect XPLA to your project.",kr:"Code Along \ud615\uc2dd\uc73c\ub85c \uc81c\uacf5\ub418\ub294 \uac1c\ubc1c \ud29c\ud1a0\ub9ac\uc5bc\uc785\ub2c8\ub2e4."})),a.createElement("div",{className:(0,m.Z)("font-normal leading-[38px] text-white mb-[70px]",{"text-[29px]":"en"===o.currentLocale,"text-[24px] min-[1250px]:whitespace-nowrap":"ko-kr"===o.currentLocale})},a.createElement(s,{en:"Add Web3 features by following the Code Along Guide.",kr:"\ub2e8\uacc4\ubcc4 \uac00\uc774\ub4dc\ub97c \ub530\ub77c\uc11c XPLA\uc758 Web3 \uae30\ub2a5\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})),a.createElement("div",{className:"text-[#46E9FC] text-[40px] leading-[48px] font-bold mb-[20px]"},"Try Demo"),a.createElement("div",{className:(0,m.Z)("text-white  leading-[38px] mb-[6px]",{"font-semibold text-[29px]":"en"===o.currentLocale,"font-bold text-[24px]":"ko-kr"===o.currentLocale})},a.createElement(s,{en:"Interact with the Demo projects.",kr:"XPLA\uc758 Web3 \uc11c\ube44\uc2a4\ub97c Demo \ud504\ub85c\uc81d\ud2b8\ub85c \uccb4\ud5d8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})),a.createElement("div",{className:(0,m.Z)("text-white   font-normal",{"leading-[34px] text-[29px]":"en"===o.currentLocale,"text-[24px] min-[1250px]:whitespace-nowrap text-[24px] leading-[38px]":"ko-kr"===o.currentLocale})},a.createElement(s,{en:"Everything built from Start Learning content!",kr:"Start Learning\uc758 \ub0b4\uc6a9\uc744 \ud504\ub85c\uc81d\ud2b8\ub85c \uad6c\ud604\ud558\uace0 \uc18c\uc2a4\ucf54\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."})),a.createElement("div",{className:(0,m.Z)("relative text-white  leading-[34px] font-normal",{"text-[29px]":"en"===o.currentLocale,"text-[24px] min-[1250px]:whitespace-nowrap":"ko-kr"===o.currentLocale})},a.createElement(s,{en:"From Web3 Game Project to",kr:"Game\uacfc"})," ",a.createElement("span",{className:(0,m.Z)("text-[#FAED00] inline-flex items-start",{"font-bold ":"en"===o.currentLocale,"font-medium ":"ko-kr"===o.currentLocale})},"Web3 Gaming Ops",a.createElement("span",{className:"mt-[3px] font-normal text-[16px] leading-[16px]"},"*\xa0")),a.createElement(s,{en:"",kr:"\ub97c \ud1b5\ud574 XPLA\uc758 \uac1c\ubc1c \ud658\uacbd\uc744 \ud655\uc778\ud558\uc138\uc694."}),"ko-kr"===o.currentLocale&&a.createElement("br",{className:"min-[2000px]:hidden"}),a.createElement("span",{className:(0,m.Z)("text-[#FAED00]  whitespace-nowrap font-normal ",{"text-[16px] leading-[34px] min-[1676px]:mt-[3px] min-[1676px]:absolute ":"en"===o.currentLocale,"text-[20px] leading-[34px]":"ko-kr"===o.currentLocale})},a.createElement(s,{en:"(A tool for managing Web3 assets)",kr:"(\uac8c\uc784 \uc5f0\ub3d9 Web3 \ud234 \uc11c\ube44\uc2a4)"})," "))))))}var x=n(87462);const p={features:"features_NgA9",featureSvg:"featureSvg_x_KM",ellipsis:"ellipsis_aa1a",square:"square_wf7P",card:"card_QzAh",mobileImg:"mobileImg_yskk",rightBorder:"rightBorder_BSkQ"};var d=n(85518);const u=[{Svg:"/img/DiveInto/easy-to-follow.svg",title:a.createElement(a.Fragment,null,"Try the easy tutorials"),description:a.createElement(a.Fragment,null,a.createElement(s,{en:"A step-by-step curriculum for understanding",kr:"\ucd08\ubcf4\uc790\ubd80\ud130 \uc0c1\uae09\uc790\uae4c\uc9c0 \uace0\ub824\ud55c"}),a.createElement("br",null),a.createElement(s,{en:"and applying Web3 \u2014 for everyone.",kr:"\ub2e8\uacc4\ubcc4 \ucee4\ub9ac\ud058\ub7fc\uc73c\ub85c Web3 \uc138\uacc4\uc5d0 \uc785\ubb38\ud558\uc138\uc694."})),rightBorder:!0,sizes:"(max-width: 768px) 100px, 150px",className:"h-[147px]"},{Svg:"/img/DiveInto/freely-moddable.svg",title:a.createElement(a.Fragment,null,"Use the free codes"),description:a.createElement(a.Fragment,null,a.createElement(s,{en:"Feel free to use the example code for anything!",kr:"\ubaa8\ub4e0 \uc608\uc81c\ub294 \uc624\ud508 \uc18c\uc2a4\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4."}),a.createElement("br",null),a.createElement(s,{en:"Check final output examples in Try Demo menu.",kr:"\ud504\ub85c\uc81d\ud2b8\uc5d0 \ud544\uc694\ud55c \ub9ac\uc18c\uc2a4\ub4e4\uc744 \ub9c8\uc74c\uaecf \ud65c\uc6a9\ud558\uc138\uc694."})),rightBorder:!0,sizes:"(max-width: 768px) 121px",className:"h-[141px]"},{Svg:"/img/DiveInto/game-developer-friendly.svg",title:a.createElement(a.Fragment,null,"We want to help you"),description:a.createElement(a.Fragment,null,a.createElement(s,{en:"Building Web3 games can be tough.",kr:"\uac01 \uc138\uc158\uc758 \ub313\uae00\uc744 \ud1b5\ud574 \uc11c\ub85c \ubb3b\uace0 \ub2f5\ud558\uba70"}),a.createElement("br",null),a.createElement(s,{en:"Share questions in the comments for help any time!",kr:"Web3 \uac8c\uc784\uc744 \ud568\uaed8 \ub9cc\ub4e4\uc5b4\uc694."})),rightBorder:!1,sizes:"(max-width: 768px) 158px",className:"h-[132px]"}];function E(e){let{Svg:t,title:n,description:l,rightBorder:r,sizes:c,className:s}=e;return a.createElement("div",{className:(0,m.Z)("flex flex-1 justify-center items-center",p.card,r&&[p.rightBorder])},a.createElement("div",{className:"flex flex-1 gap-[27px] items-center flex-col md:flex-col px-[16px] justify-between"},a.createElement("div",{className:(0,m.Z)("h-[141px]")},a.createElement("img",{src:t,className:(0,m.Z)(s),alt:"featureimg",sizes:c})),a.createElement("div",null,a.createElement("div",{className:"font-bold text-[26px] leading-[31px] text-black text-center md:mb-[16px]"},n),a.createElement("div",{className:(0,m.Z)("text-black text-center",{" text-[14px] font-medium leading-[24px]":"en"===o.currentLocale,"text-[16px] font-normal leading-[28px]":"ko-kr"===o.currentLocale})},l))))}function f(){return a.createElement("section",{className:"h-[1200px] md:h-[684px] bg-[#00B2FF] relative flex justify-center items-center px-[16px] max-w-screen"},a.createElement("img",{className:p.ellipsis,src:"/img/DiveInto/ellipsis.svg",alt:"ellipsis",sizes:"(min-width: 1780px) 303px"}),a.createElement("img",{className:p.square,src:"/img/DiveInto/square.svg",alt:"square",sizes:"(min-width: 1780px) 308px"}),a.createElement("div",{className:"max-w-[1180px] h-full flex flex-1 justify-center items-center z-10"},a.createElement("div",{className:"flex flex-col max-[700px]:h-full flex-1 md:gap-[57px]"},a.createElement("span",{className:"text-[#000000] flex md:flex-1 justify-center font-bold md:text-[50px] text-[40px] leading-[60px]"},"Dive into",d.tq?a.createElement("br",null):" ","XPLA ACADEMY"),a.createElement("div",{className:"flex-col md:flex-row flex flex-1 gap-[0px]"},u.map(((e,t)=>a.createElement(E,(0,x.Z)({key:t},e))))))))}const g={heroBanner:"heroBanner_qdFl",earth:"earth_bHu0"};var b=n(91649),k=n(91262);function h(e){let{moveToElement:t}=e;return a.createElement("section",{ref:t,className:(0,m.Z)("relative h-[1000px] md:h-[1392px] flex flex-col bg-[#CBF0FF] justify-center items-center px-4")},a.createElement("img",{src:"/img/PlayGame/bgassets-left.svg",alt:"bgassets-left",className:"max-[800px]:hidden absolute mix-blend-luminosity bottom-[103px] left-[116px]"}),a.createElement("img",{src:"/img/PlayGame/bgassets-right.svg",alt:"bgassets-right",className:"max-[800px]:hidden absolute mix-blend-luminosity bottom-0 right-0"}),a.createElement("div",{className:"flex flex-col items-center z-10"},a.createElement("img",{width:"780px",height:"66px",src:"/img/PlayGame/gametitle.svg",alt:"gametitle",className:"mb-[20px]"}),a.createElement("div",{className:"text-[#004FFF] font-semibold text-[50px] leading-[60px] mb-[56px]"},"Play Demo Game"),a.createElement("div",{className:"mb-[51px]"},a.createElement(k.Z,null,(()=>a.createElement(b.Z,null)))),a.createElement("div",{className:(0,m.Z)("mb-[42px] text-center text-[29px] leading-[39px] font-medium")},a.createElement(s,{en:"Play ",kr:""}),a.createElement("span",{className:"font-bold"},"XPLA ACADEMY"),a.createElement(s,{en:"'s Demo Game",kr:"\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub370\ubaa8 \uac8c\uc784\uc744 \ud1b5\ud574"}),a.createElement("br",null),a.createElement(s,{en:"Experience Game Building within XPLA",kr:"XPLA\uc5d0 \uc5f0\uacb0\ub41c \uac8c\uc784 \uc11c\ube44\uc2a4\ub97c \uccb4\ud5d8\ud574\ubcf4\uc138\uc694!"})),a.createElement("div",{className:"flex justify-center items-center gap-[84px]"},a.createElement(l.Z,{to:"https://github.com/xpladev/academy/tree/main/demo-project",className:(0,m.Z)("font-medium   text-black hover:text-[#004FFF] flex flex-col justify-between items-center text-center hover:text-[#004FFF] hover:no-underline",{"text-[20px] leading-[24px]":"en"===o.currentLocale,"text-[20px] leading-[28px]":"ko-kr"===o.currentLocale})},a.createElement("img",{src:"/img/PlayGame/githubwhite.svg",alt:"githubwhite",width:"40px",height:"40px",className:"mb-[8px]"}),a.createElement(s,{en:"Game code on",kr:"GitHub\uc5d0\uc11c \uc18c\uc2a4\ucf54\ub4dc\ub97c"}),a.createElement("br",null),a.createElement(s,{en:"GitHub \u2794",kr:"\ud655\uc778\ud558\uc138\uc694 \u2794"})),a.createElement("div",{className:"h-full border-solid border-[0px] border-r-[1.5px]"}),a.createElement(l.Z,{to:"/playgame#aboutGame",className:(0,m.Z)("font-medium text-[20px] text-black hover:text-[#004FFF] flex flex-col justify-between items-center text-center hover:text-[#004FFF] hover:no-underline",{"text-[20px] leading-[24px]":"en"===o.currentLocale,"text-[18px] leading-[28px]":"ko-kr"===o.currentLocale})},a.createElement("img",{src:"/img/PlayGame/game-asset.svg",alt:"gameAsset",width:"114px",height:"40px",className:"mb-[8px]"}),a.createElement(s,{en:"About",kr:"Break The Bricks\ub780"}),a.createElement("br",null),a.createElement(s,{en:"Break The Bricks \u2794",kr:"\ubb34\uc5c7\uc77c\uae4c\uc694? \u2794"})))))}var N=n(74584);const v={features:"features_IUEL",slickSet:"slickSet_dWMu",dotsCustom:"dotsCustom_vxkO",card:"card_RYvz",quotationMark:"quotationMark_N9Y_"};var w=n(46066),L=n(98396);function y(){const e=(0,a.useRef)(null),t=(0,a.useRef)(),n=(0,L.Z)("(max-width:768px)"),{i18n:l}=(0,r.Z)(),c=[{title:["en"===l.currentLocale?"Get to know Web3":"XPLA\ub97c \ud1b5\ud574","en"===l.currentLocale?"with XPLA!":"\uae30\ubcf8 Web3 \ud559\uc2b5\ud558\uae30"],color:"#F93AC3",contents:[{link:"/startlearning/category/lets-get-your-wallet-ready",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Experience the TESTNET!",kr:"Wallet\uc744 \ub9cc\ub4e4\uace0 Testnet\uc5d0\uc11c"}),a.createElement("br",null),a.createElement(s,{en:"Create a WALLET, Make your first",kr:"Transaction \uc2e4\ud589\uc2dc\ud0a4\uae30"}),a.createElement("span",{className:"font-bold text-[20px]"}," TRANSACTIONS!")):a.createElement("div",{className:(0,m.Z)(" text-[24px] h-[197px]",{"font-semibold":"en"===l.currentLocale,"font-bold":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Experience the",kr:"Wallet\uc744 \ub9cc\ub4e4\uace0,"}),a.createElement("br",null),a.createElement(s,{en:"TESTNET!",kr:"Testnet\uc5d0\uc11c"}),a.createElement("br",null),a.createElement(s,{en:"Create a WALLET",kr:"Transaction"}),a.createElement("br",null),a.createElement(s,{en:"Make your first",kr:"\uc2e4\ud589\uc2dc\ud0a4\uae30"}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[24px]"},a.createElement(s,{en:"TRANSACTIONS!",kr:""})))},{link:"/startlearning/category/utilize-tokens-cw20",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Play with your Creation!",kr:"\ub098\ub9cc\uc758"}),a.createElement("br",null),a.createElement(s,{en:"Issue",kr:"\ud1a0\ud070 \ub9cc\ub4e4\uae30"}),a.createElement("span",{className:"font-bold text-[20px]"}," ",a.createElement(s,{en:" TOKENS",kr:""}))):a.createElement("div",{className:(0,m.Z)("text-[24px] h-[197px]",{"font-semibold":"en"===l.currentLocale,"font-bold":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Play with your Creation!",kr:"\ub098\ub9cc\uc758"}),a.createElement("br",null),a.createElement(s,{en:"Issue",kr:"\ud1a0\ud070 \ub9cc\ub4e4\uae30"}),a.createElement("span",{className:"font-bold text-[24px]"},a.createElement(s,{en:" TOKENS",kr:""})))},{link:"/startlearning/category/utilize-nftcw721",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Play with your Creation!",kr:"\ub098\ub9cc\uc758"}),a.createElement("br",null),a.createElement(s,{en:"Issue",kr:"NFT \ub9cc\ub4e4\uae30"}),a.createElement("span",{className:"font-bold text-[20px]"}," ",a.createElement(s,{en:" NFT",kr:""}))):a.createElement("div",{className:(0,m.Z)("text-[24px] h-[197px]",{"font-semibold":"en"===l.currentLocale,"font-bold":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Play with your",kr:"\ub098\ub9cc\uc758"}),a.createElement("br",null),a.createElement(s,{en:"Creation!",kr:"NFT \ub9cc\ub4e4\uae30"}),a.createElement("br",null),a.createElement(s,{en:"Issue",kr:""}),a.createElement("span",{className:"font-bold text-[24px]"},a.createElement(s,{en:" NFT",kr:""})))}]},{title:["en"===l.currentLocale?"Be a pro with":"\uc2e4\uc804\uc5d0 \ubc14\ub85c \uc4f0\ub294","en"===l.currentLocale?"ADVANCED COURSES!":"\uc2ec\ud654 \uae30\uc220 \uc54c\uc544\ubcf4\uae30"],color:"#C9FF00",contents:[{link:"/startlearning/tutorial/deep-understand-xpla/local-network",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Make your own space!",kr:"XPLA Local Network\ub85c"}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[20px]"},a.createElement(s,{en:"XPLA Local Network",kr:"\ub098\ub9cc\uc758 \uac1c\ubc1c \ud658\uacbd \uad6c\ucd95\ud558\uae30"}))):a.createElement("div",{className:(0,m.Z)("text-[24px] h-[197px]",{"font-semibold ":"en"===l.currentLocale,"font-bold ":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Make your own",kr:"XPLA Local Network\ub85c"}),"en"===l.currentLocale&&a.createElement("br",null),a.createElement(s,{en:"space!",kr:""}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[24px]"}," ",a.createElement(s,{en:"XPLA ",kr:""})),a.createElement(s,{en:"Local Network",kr:"\ub098\ub9cc\uc758 \uac1c\ubc1c \ud658\uacbd \uad6c\ucd95\ud558\uae30"}))},{link:"/startlearning/tutorial/deep-understand-xpla/account-sequence",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Learn about",kr:""}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[20px]"},"Account number"," ",a.createElement("span",{className:"font-semibold"}," ",a.createElement(s,{en:"and",kr:"&"}))," ",a.createElement(s,{en:"Sequence!",kr:"Sequence"})),a.createElement(s,{en:"",kr:" \uc54c\uc544\ubcf4\uae30"})):a.createElement("div",{className:(0,m.Z)("text-[24px] h-[197px]",{"font-semibold ":"en"===l.currentLocale,"font-bold ":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Learn about",kr:""}),"en"===l.currentLocale&&a.createElement("br",null),a.createElement("span",{className:(0,m.Z)("text-[24px]",{"font-bold":"en"===l.currentLocale,"font-semibold":"ko-kr"===l.currentLocale})},"Account number"," ",a.createElement("span",{className:"font-semibold"}," ",a.createElement(s,{en:"and",kr:"&"}))),a.createElement("br",null),a.createElement("span",{className:(0,m.Z)("text-[24px]",{"font-bold":"en"===l.currentLocale,"font-semibold":"ko-kr"===l.currentLocale})}," ",a.createElement(s,{en:"Sequence!",kr:"Sequence"})),a.createElement(s,{en:"",kr:" \uc54c\uc544\ubcf4\uae30"}))},{link:"/startlearning/tutorial/deep-understand-xpla/walletprovider",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Integrate",kr:"Wallet Connect"}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[20px]"},a.createElement(s,{en:"WALLET CONNECT!",kr:""})),a.createElement(s,{en:"",kr:"\ub3c4\uc785\ud558\uae30"})):a.createElement("div",{className:(0,m.Z)(" text-[24px] h-[197px]",{"font-semibold ":"en"===l.currentLocale,"font-bold ":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Integrate",kr:"Wallet Connect"}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[24px]"},a.createElement(s,{en:"WALLET ",kr:""})),"en"===l.currentLocale&&a.createElement("br",null),a.createElement("span",{className:"font-bold text-[24px]"},a.createElement(s,{en:"CONNECT!",kr:""})),a.createElement(s,{en:"",kr:"\ub3c4\uc785\ud558\uae30"}))}]},{title:["en"===l.currentLocale?"Add Web3 to your project":"\ub0b4 \ud504\ub85c\uc81d\ud2b8","en"===l.currentLocale?"with XPLA!":"XPLA\uc640 \uc5f0\uacb0\ud558\uae30"],color:"#FFE200",contents:[{link:"/startlearning/tutorial/deep-understand-xpla/write-contract",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Deploy your own",kr:"\ub098\ub9cc\uc758 Contract \uc791\uc131\ud558\uace0"}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[20px]"},a.createElement(s,{en:"CONTRACT on XPLA",kr:""})),a.createElement(s,{en:"",kr:"XPLA\uc5d0\uc11c \uc2e4\ud589\ud558\uae30"})):a.createElement("div",{className:(0,m.Z)(" text-[24px] h-[197px]",{"font-semibold ":"en"===l.currentLocale,"font-bold ":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Deploy your own",kr:"\ub098\ub9cc\uc758"}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[24px]"},a.createElement(s,{en:"CONTRACT",kr:""})," "),a.createElement(s,{en:"on",kr:"Contract \uc791\uc131\ud558\uace0"}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[24px]"},a.createElement(s,{en:"XPLA",kr:""})),a.createElement(s,{en:"",kr:"XPLA\uc5d0\uc11c \uc2e4\ud589\ud558\uae30"}))},{link:"/startlearning/tutorial/deep-understand-xpla/convert",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Exchange Tokens with",kr:"CONVERT"}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[20px]"},a.createElement(s,{en:"CONVERT!",kr:""})),a.createElement(s,{en:"",kr:"\uc54c\uc544\ubcf4\uae30"})):a.createElement("div",{className:(0,m.Z)(" text-[24px] h-[197px]",{"font-semibold ":"en"===l.currentLocale,"font-bold ":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Exchange",kr:"CONVERT"}),"en"===l.currentLocale&&a.createElement("br",null),a.createElement(s,{en:"Tokens with",kr:""}),a.createElement("br",null),a.createElement("span",{className:"font-bold text-[24px]"},a.createElement(s,{en:"CONVERT!",kr:""})),a.createElement(s,{en:"",kr:"\uc54c\uc544\ubcf4\uae30"}))},{link:"/startlearning/tutorial/deep-understand-xpla/swap",description:n?a.createElement("span",{className:"font-semibold text-[20px]"},a.createElement(s,{en:"Exchange Tokens",kr:"SWAP"}),a.createElement("br",null),a.createElement("span",{className:" text-[20px]"},a.createElement(s,{en:"to $XPLA with",kr:"\uc54c\uc544\ubcf4\uae30"}),a.createElement("span",{className:"font-bold"},a.createElement(s,{en:" SWAP!",kr:""})))):a.createElement("div",{className:(0,m.Z)(" text-[24px] h-[197px]",{"font-semibold ":"en"===l.currentLocale,"font-bold ":"ko-kr"===l.currentLocale})},a.createElement(s,{en:"Exchange",kr:"SWAP"}),"en"===l.currentLocale&&a.createElement("br",null),a.createElement(s,{en:"Tokens to $XPLA with",kr:""}),a.createElement("br",null),a.createElement("span",{className:"font-bold"},a.createElement(s,{en:"SWAP!",kr:""})),a.createElement(s,{en:"",kr:"\uc54c\uc544\ubcf4\uae30"}))}]}];return a.createElement("section",{className:"h-[833px]",ref:e},a.createElement("div",{className:(0,m.Z)("w-full h-full",v.slickSet,v.dotsCustom)},a.createElement(w.Z,(0,x.Z)({ref:t},{dots:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1}),c.map((e=>a.createElement(a.Fragment,{key:e.title},a.createElement(A,e)))))))}const A=e=>{let{title:t,color:n,contents:r}=e;return a.createElement("div",{className:"flex justify-center items-center w-[100%] h-[100%] px-[16px]",style:{backgroundColor:n}},a.createElement("div",{className:"w-[1180px] flex flex-col items-center justify-center gap-[58px] mb-[60px]"},a.createElement("div",{className:"font-bold text-[30px] md:text-[50px] text-center leading-tight"},t.map(((e,t)=>a.createElement("div",{key:t},e)))),a.createElement("div",{className:"flex flex-col md:flex-row gap-5 w-[100%]"},r.map(((e,t)=>a.createElement(l.Z,{to:e.link,key:t,className:(0,m.Z)("flex flex-col justify-center text-[#000000] hover:text-[#000000]",v.card),style:{textDecoration:"none"},"aria-label":"content-link"+e.link},a.createElement("img",{className:(0,m.Z)("w-12 md:mb-[30px]",v.quotationMark),src:"/img/IntroduceTutorial/quotationMark.svg",alt:"questionMark",width:"48px",height:"36px"}),e.description,a.createElement("div",{className:"flex justify-end"},a.createElement("img",{className:(0,m.Z)("w-[51px]",v.quotationMark),src:"/img/IntroduceTutorial/right-arrow.svg",alt:"right-arrow",width:"51px",height:"20px"}))))))))},F={star:"star_HSHN",earth:"earth_jUqh",heart:"heart_I1_O",contactButton:"contactButton_zQiy"};function C(){return a.createElement("section",{className:"h-[276px] bg-[#F5F4F4] relative flex justify-center items-center px-[16px]"},a.createElement("img",{className:F.star,src:"/img/ContactUs/star.svg",width:"225px",height:"164px",alt:"star"}),a.createElement("img",{className:F.earth,src:"/img/ContactUs/earth.svg",width:"476px",height:"276px",alt:"earth"}),a.createElement("div",{className:"z-10 relative"},a.createElement("div",{className:"flex flex-col items-center gap-[20px]"},a.createElement("span",{className:"text-[#000000] font-semibold text-[30px] md:text-[42px] text-center"},"Interested in Collaborating?"),a.createElement("a",{href:"mailto:academy@xpla.io",className:(0,m.Z)("w-fit bg-[#00B2FC] flex items-center justify-center py-[5px] px-[36px] text-[#000000] hover:text-[#000000] hover:no-underline",F.contactButton)},a.createElement("span",{className:"font-medium text-[28px]"},"Contact Us"))),a.createElement("img",{className:F.heart,src:"/img/ContactUs/heart.svg",alt:"heart",width:"146px",height:"109px"})))}const Z={registerNow:"registerNow_WeWb",trailblazer:"trailblazer__1vM",bannerMaxWidth:"bannerMaxWidth_lYrx",devEvents:"devEvents_fOoS"};function T(){const e=(0,L.Z)("(max-width:768px)");return a.createElement("section",{className:"h-[832px] flex flex-col justify-center items-center px-[16px]"},a.createElement("div",{className:"font-bold text-[50px] mb-[53px]"},"Join the XPLA DEV Network"),a.createElement("div",{className:(0,m.Z)("justify-center px-[20px] md:px-[100px] md:py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-8",Z.trailblazer)},a.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"XPLA Trailblazer"),a.createElement(l.Z,{to:"https://6tpnthyk0ch.typeform.com/XPLATrailBlazer",className:"w-fit",style:{textDecoration:"none"},"aria-label":"xpla-trailblazer-link"},a.createElement("span",{className:Z.registerNow},"Register Now"))),e?a.createElement("div",{className:(0,m.Z)("justify-center px-[20px] md:px-[100px] md:py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-8",Z.trailblazer)},a.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"Dev Events")):a.createElement("div",{className:(0,m.Z)("px-[100px] py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-20",Z.devEvents)},a.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"Dev Events")))}var P=n(52252);function S(e){let{onMoveToElement:t}=e;const{siteConfig:n,i18n:c}=(0,r.Z)();return a.createElement("header",{className:"h-[800px] flex justify-center px-[16px] bg-[#F5F4F4]"},a.createElement("div",{className:"max-w-[1180px] flex flex-1 justify-between items-center relative"},a.createElement("div",{className:"flex flex-col max-w-[670px] pb-[5px]"},a.createElement("img",{className:"mb-[30px]",src:"/img/Homepage/xpla-academy.svg",alt:"xpla-academy",width:"564px",height:"55px"}),a.createElement("span",{className:(0,m.Z)("leading-[36px] mb-[10px]",{"text-[29px] font-semibold":"en"===c.currentLocale,"text-[28px] font-bold":"ko-kr"===c.currentLocale})},a.createElement(s,{en:n.tagline,kr:"XPLA\uc5d0\uc11c Web3 \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\uc138\uc694!"})),a.createElement("span",{className:(0,m.Z)({"text-[24px] leading-[29px]":"en"===c.currentLocale,"tracking-tight text-[20px] font-medium leading-[32px]":"ko-kr"===c.currentLocale})},a.createElement(s,{en:"Educational content related to blockchain development,",kr:"XPLA ACADEMY\ub294 \uac8c\uc784\uc5d0 \ud2b9\ud654\ub41c XPLA\ub9cc\uc758 \uae30\uc220\uacfc \ub178\ud558\uc6b0\ub97c"})),a.createElement("span",{className:(0,m.Z)("font-normal leading-[29px]",{"tracking-tight text-[20px]":"ko-kr"===c.currentLocale,"text-[24px]":"en"===c.currentLocale})},a.createElement(s,{en:"smart contracts, and game tokenomic systems all provided!",kr:"\ub2e8\uacc4\ubcc4\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc9c0\uae08 \ubc14\ub85c XPLA\uc758 \uac1c\ubc1c \ud658\uacbd\uc744 \ud655\uc778\ud558\uc138\uc694."})),a.createElement("div",{className:(0,m.Z)("mt-[56px] font-medium text-[24px] leading-[29px] text-[#004FFF]",{"font-medium":"en"===c.currentLocale,"font-semibold":"ko-kr"===c.currentLocale})},a.createElement(s,{en:"Your projects are just a click away!",kr:"\ub2f9\uc2e0\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uac04\ud3b8\ud558\uac8c \uad6c\ucd95\ud574\ubcf4\uc138\uc694!"})),a.createElement("div",{className:"flex gap-[20px] mt-[19px]"},a.createElement(l.Z,{"aria-label":"open-tutorial",to:"/startlearning/overview/intro",className:"bg-[#C9FF00] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"},a.createElement("span",{className:"font-medium text-[20px] "},"Start Learning")),a.createElement(l.Z,{"aria-label":"open-tutorial",to:"/playgame",className:" bg-[#fff] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"},a.createElement("span",{className:"font-medium text-[20px]"},"Play Game")))),a.createElement("img",{className:(0,m.Z)("hidden lg:block max-[1536px]:w-[50%] lg:static 2xl:top-[71px] 2xl:absolute 2xl:left-[610px]"),src:"/img/Homepage/explorer-play.svg",alt:"explorer-play",sizes:"(min-width: 1024px) 674px"}),a.createElement("img",{className:g.earth,src:"/img/Homepage/earth.svg",alt:"earth",sizes:"(min-width: 900px) 185px"})))}function _(){const e=(0,a.useRef)(null),t=(0,a.useRef)(null);(0,a.useEffect)((()=>{var e;"#playgame"===window.location.hash&&(e=t.current.getBoundingClientRect().top+window.pageYOffset-80,window.scrollTo({top:e,behavior:"smooth"}))}),[]);const[n,l]=(0,a.useState)();return(0,a.useEffect)((()=>{(0,P.c3)().then((e=>l(e))).catch((e=>{}))}),[]),a.createElement(c.Z,{title:"XPLA ACADEMY",description:"Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."},a.createElement(S,{onMoveToElement:()=>{var t=e.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:t,behavior:"smooth"})}}),a.createElement("main",null,a.createElement(i,null),a.createElement(f,null),a.createElement(h,{moveToElement:t}),a.createElement(y,null),a.createElement(N.Z,{moveToElement:e}),a.createElement(T,null),a.createElement(C,null)))}},36563:()=>{},46601:()=>{},89214:()=>{},85568:()=>{},34845:()=>{},52361:()=>{},94616:()=>{},33370:()=>{}}]);