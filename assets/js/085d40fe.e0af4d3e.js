"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[1417],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var l=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,l,i=function(t,e){if(null==t)return{};var a,l,i={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=l.createContext({}),d=function(t){var e=l.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return l.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),m=d(a),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||n;return a?l.createElement(k,o(o({ref:e},p),{},{components:a})):l.createElement(k,o({ref:e},p))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,o=new Array(n);o[0]=u;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[m]="string"==typeof t?t:i,o[1]=r;for(var d=2;d<n;d++)o[d]=a[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34673:(t,e,a)=>{a.d(e,{Z:()=>k});var l=a(87462),i=a(67294),n=a(86010),o=a(72389),r=a(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function d(t){return!!t&&("SUMMARY"===t.tagName||d(t.parentElement))}function p(t,e){return!!t&&(t===e||p(t.parentElement,e))}function m(t){let{summary:e,children:a,...m}=t;const c=(0,o.Z)(),u=(0,i.useRef)(null),{collapsed:k,setCollapsed:g}=(0,r.u)({initialState:!m.open}),[y,x]=(0,i.useState)(m.open),w=i.isValidElement(e)?e:i.createElement("summary",null,e??"Details");return i.createElement("details",(0,l.Z)({},m,{ref:u,open:y,"data-collapsed":k,className:(0,n.Z)(s.details,c&&s.isBrowser,m.className),onMouseDown:t=>{d(t.target)&&t.detail>1&&t.preventDefault()},onClick:t=>{t.stopPropagation();const e=t.target;d(e)&&p(e,u.current)&&(t.preventDefault(),k?(g(!1),x(!0)):g(!0))}}),w,i.createElement(r.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:t=>{g(t),x(!t)}},i.createElement("div",{className:s.collapsibleContent},a)))}const c={details:"details_b_Ee"},u="alert alert--info";function k(t){let{...e}=t;return i.createElement(m,(0,l.Z)({},e,{className:(0,n.Z)(u,c.details,e.className)}))}},51007:(t,e,a)=>{a.d(e,{Z:()=>o});var l=a(67294),i=a(86010);const n={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(t){let{children:e,minHeight:a,url:o="http://localhost:3000",style:r,bodyStyle:s}=t;return l.createElement("div",{className:n.browserWindow,style:{...r,minHeight:a}},l.createElement("div",{className:n.browserWindowHeader},l.createElement("div",{className:n.buttons},l.createElement("span",{className:n.dot,style:{background:"#f25f58"}}),l.createElement("span",{className:n.dot,style:{background:"#fbbe3c"}}),l.createElement("span",{className:n.dot,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,i.Z)(n.browserWindowAddressBar,"text--truncate")},o),l.createElement("div",{className:n.browserWindowMenuIcon},l.createElement("div",null,l.createElement("span",{className:n.bar}),l.createElement("span",{className:n.bar}),l.createElement("span",{className:n.bar})))),l.createElement("div",{className:n.browserWindowBody,style:s},e))}},61497:(t,e,a)=>{a.d(e,{Z:()=>i});var l=a(67294);const i=t=>{let{imgSrc:e,style:a}=t;return l.createElement("img",{className:"max-w-sm",style:a,src:e,alt:""})}},82231:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var l=a(87462),i=(a(67294),a(3905)),n=a(34673),o=a(61497),r=a(51007);const s={sidebar_position:2},d="\ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30 (Vault)",p={unversionedId:"tutorial/make-cw20/make-cw20-with-vault",id:"tutorial/make-cw20/make-cw20-with-vault",title:"\ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30 (Vault)",description:"CW20\uc744 \uc774\uc6a9\ud558\uba74 \uac8c\uc784 \uc0dd\ud0dc\uacc4\uc640 XPLA \ube14\ub85d\uccb4\uc778\uc744 \ub354 \uc27d\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. XPLA \uc9c0\uac11 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc778 Vault\ub97c \uc774\uc6a9\ud558\uc5ec \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0 \uc804\uc1a1\uae4c\uc9c0 \ud574\ubd05\uc2dc\ub2e4. Vault \uc124\uce58 \ubc0f \uc9c0\uac11 \uc0dd\uc131\uc740 \uc774\uc804 \ub2e8\uacc4\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694.",source:"@site/docs/3-tutorial/1-make-cw20/1-make-cw20-with-vault.mdx",sourceDirName:"3-tutorial/1-make-cw20",slug:"/tutorial/make-cw20/make-cw20-with-vault",permalink:"/academy/docs/tutorial/make-cw20/make-cw20-with-vault",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud1a0\ud070(CW20) \ub2e4\ub8e8\uae30",permalink:"/academy/docs/category/\ud1a0\ud070cw20-\ub2e4\ub8e8\uae30"},next:{title:"\ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30 (Javascript)",permalink:"/academy/docs/tutorial/make-cw20/make-cw20-with-js"}},m={},c=[{value:"CW20 \ubc1c\ud589\ud558\uae30",id:"make-cw20",level:2},{value:"Vault \uc811\uc18d",id:"make-accessvault",level:3},{value:"CW20 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131",id:"instantiate",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \ud655\uc778",id:"make-confirm",level:3},{value:"CW20 \uc804\uc1a1\ud558\uae30",id:"send-cw20",level:2}],u={toc:c},k="wrapper";function g(t){let{components:e,...a}=t;return(0,i.kt)(k,(0,l.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ud1a0\ud070cw20-\ubc1c\ud589-\ubc0f-\uc804\uc1a1\ud558\uae30-vault"},"\ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30 (Vault)"),(0,i.kt)("p",null,"CW20\uc744 \uc774\uc6a9\ud558\uba74 \uac8c\uc784 \uc0dd\ud0dc\uacc4\uc640 XPLA \ube14\ub85d\uccb4\uc778\uc744 \ub354 \uc27d\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. XPLA \uc9c0\uac11 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc778 Vault\ub97c \uc774\uc6a9\ud558\uc5ec \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0 \uc804\uc1a1\uae4c\uc9c0 \ud574\ubd05\uc2dc\ub2e4. Vault \uc124\uce58 \ubc0f \uc9c0\uac11 \uc0dd\uc131\uc740 ",(0,i.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault"},"\uc774\uc804 \ub2e8\uacc4"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,i.kt)(n.Z,{summary:"CW20\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,i.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud50c\ub7ab\ud3fc\uc778 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub354\ub9ac\uc6c0\uc758 ERC20\ucc98\ub7fc, ",(0,i.kt)("strong",{parentName:"p"},"CW20"),"\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc5d0\uc11c \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(Fungible tokens)\uc5d0 \ub300\ud55c \ud45c\uc900\uc785\ub2c8\ub2e4. \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/crate/cw20/0.2.3"},"\uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,i.kt)("h2",{id:"make-cw20"},"CW20 \ubc1c\ud589\ud558\uae30"),(0,i.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc808\ucc28\ub85c Vault\ub97c \ud1b5\ud574 CW20\uc744 \ubc1c\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#make-accessvault"},"Vault \uc811\uc18d"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#instantiate"},"CW20 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#make-confirm"},"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \ud655\uc778")))),(0,i.kt)("h3",{id:"make-accessvault"},"Vault \uc811\uc18d"),(0,i.kt)("p",null,"\uba3c\uc800 Chrome Extension \uc571\uc778 Vault\uc5d0\uc11c CW20\uc744 \ubc1c\ud589\ud560 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uace0, \ub124\ud2b8\uc6cc\ud06c\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"testnet"),"\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/select-testnet.png",mdxType:"VaultImgCard"}))),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/vault-testnet.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://vault.xpla.io/"},"Vault \uc6f9\uc0ac\uc774\ud2b8"),"\uc5d0 \uc811\uc18d\ud558\uace0, \uc6b0\uce21 \uc0c1\ub2e8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc9c0\uac11\uc744 \uc5f0\uacb0\ud569\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"40px",width:"100%",top:0,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:40,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/click-connect.png",mdxType:"VaultImgCard"}))),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/web-vault-popup.png",mdxType:"VaultImgCard"}))),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:59,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-testnet.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"instantiate"},"CW20 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131"),(0,i.kt)("p",null,"Vault \uc6f9\uc5d0\uc11c Contract \ud56d\ubaa9\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:59,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-click-contract.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Instantiate")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/contract",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:59,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-click-instantiate.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Admin"),"\uc774\ub780 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc778\uc774 \ub420 \uc9c0\uac11 \uc8fc\uc18c\uc785\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," \uc9c0\uac11 \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17.5px",width:"100%",top:0,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:17.5,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:58.5,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-instantiate-admin.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"CW20 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\uc774\ubbc0\ub85c, ",(0,i.kt)("inlineCode",{parentName:"p"},"Code ID"),"\uc5d0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\uc744 \uc785\ub825\ud574\uc90d\ub2c8\ub2e4. "),(0,i.kt)(n.Z,{summary:"Code ID\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,i.kt)("p",null,"EVM\uacfc \ub2ec\ub9ac, Cosmwasm\uc5d0\uc11c\ub294 \ucf54\ub4dc \ubc30\ud3ec(Code Deploy)\uc640 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc774 \ud55c\ubc88\uc5d0 \uc774\ub904\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \ucf54\ub4dc\ub97c \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec(StoreCode)\ud558\uba74 \ud574\ub2f9 \ucf54\ub4dc\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \ubc1c\uae09 \ubc1b\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \uae30\ubc18\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131(InstantiateContract)\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub611\uac19\uc740 Code ID\ub85c \uc0dd\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\ub4e4\uc740 \ubaa8\ub450 \uac19\uc740 \ucf54\ub4dc \uae30\ubc18\uc785\ub2c8\ub2e4. \ub2e4\ub9cc \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c \uc785\ub825\ud558\ub294 \ucd08\uae43\uac12(init_msg)\uc774 \ub2e4\ub974\uba74, \ucee8\ud2b8\ub799\ud2b8\uc758 \uc138\ubd80 \uc0ac\ud56d\ub3c4 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \ub354 \uc790\uc138\ud55c \uc0ac\ud56d\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/core-modules/wasm/#code-id"},"XPLA Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17.5px",width:"100%",top:0,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:17.5,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:58.5,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-instantiate-codeid.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Init msg"),"\uc5d0\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucd08\uae43\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ucd08\uae43\uac12\uc740 \ubc1c\ud589\ud560 \ud1a0\ud070\uc5d0 \ub300\ud55c \uc815\ubcf4\uc785\ub2c8\ub2e4. \ubc1c\ud589\uc790\uac00 \ub204\uad6c\uc778\uc9c0(minter), \uc5b4\ub290 \uc9c0\uac11\uc5d0 \ud1a0\ud070\uc744 \uba87 \uac1c\ub098 \ubc1c\ud589\ud560 \uac83\uc778\uc9c0(initial_balances), \ud1a0\ud070 \ub2e8\uc704\ub294 \ubb34\uc5c7\uc778\uc9c0(symbol) \ub4f1\uc744 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc608\uc81c\uc5d0\uc11c\ub294 \uc544\ub798 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 minter\uc640 address \ud56d\ubaa9\uc5d0 \ubcf8\uc778 \uc9c0\uac11 \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. name, symbol, \ud639\uc740 amount \uac12\ub3c4 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 \ub2e4\ub978 \uac12\uc73c\ub85c \ub123\uc5b4\uc8fc\uc138\uc694."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "My CW20 Token",\n  "symbol": "MCT",\n  "decimals": 6,\n  "initial_balances": [\n    {\n      "address": "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",\n      "amount": "2000000000000000"\n    }\n  ],\n  "mint": {\n    "minter": "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n  }\n}\n')),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18.5px",width:"100%",top:0,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18.5,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"33px",width:"100%",top:58.5,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-instantiate-initmsg.png",mdxType:"VaultImgCard"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ud1a0\ud070\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"decimals"),"\ub294 \ubc1c\ud589\ud560 \ub54c \ub9c8\uc74c\ub300\ub85c \uc124\uc815\ud574\ub3c4 \uc0c1\uad00\uc5c6\uc2b5\ub2c8\ub2e4. \uc608\uc81c \ucd08\uae43\uac12\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"decimals")," \ud56d\ubaa9\uc744 ",(0,i.kt)("strong",{parentName:"p"},"6"),"\uc73c\ub85c \uc9c0\uc815\ud588\uc2b5\ub2c8\ub2e4. \ucc38\uace0\ub85c ",(0,i.kt)("strong",{parentName:"p"},"XPLA"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"decimals"),"\ub294 ",(0,i.kt)("strong",{parentName:"p"},"18"),"\uc774\ubbc0\ub85c, 10",(0,i.kt)("sup",null,"18")," ",(0,i.kt)("strong",{parentName:"p"},"aXPLA")," = 1 ",(0,i.kt)("strong",{parentName:"p"},"XPLA")," \uc600\uc2b5\ub2c8\ub2e4. ")),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Amount"),"\ub294 \ucee8\ud2b8\ub799\ud2b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ub97c \uc9c4\ud589\ud560 \ub54c, \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud558\uace0 \uc2f6\uc740 XPLA \uc218\ub7c9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. CW20 \ucee8\ud2b8\ub799\ud2b8\ub294 XPLA \ucf54\uc778\uc744 \ubcf4\uc720\ud560 \uc774\uc720\uac00 \uc5c6\uc73c\ubbc0\ub85c, \uc774 \ubd80\ubd84\uc740 \uc0dd\ub7b5\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Label"),"\uc740 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ub2a5\uc744 \ub098\ud0c0\ub0b4\ub3c4\ub85d \uc791\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"My CW20 Token"),"\uc73c\ub85c \uae30\uc785\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 Submit \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694."),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"16.5px",width:"100%",top:0,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"38.5px",width:"100%",top:16.5,zIndex:0}}),(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"33.5px",width:"100%",top:55,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault-web-instantiate-label.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ud558\uace0 \uc2f6\uc740\ub370, \uac01 \ud56d\ubaa9\uc5d0 \uc5b4\ub5a4 \uac12\uc744 \uc785\ub825\ud574\uc57c \ud560 \uc9c0 \ubaa8\ub97c \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f4 \ub54c\ub294 \uac19\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucc38\uace0\ud558\uba74 \ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,i.kt)("inlineCode",{parentName:"p"},"Code ID"),"\uac00 1\uc778 \ub2e4\ub978 CW20 \ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg"},"XPLA Explorer"),"\uc5d0\uc11c \uc0b4\ud3b4\ubd05\uc2dc\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"Init Msg")," \uac12\uc744 \ucc38\uace0\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uae30\ud638\ub300\ub85c \ub0b4\uc6a9\uc744 \uc218\uc815\ud558\uba74, \uc27d\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  ")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Submit \ubc84\ud2bc\uc744 \ub204\ub974\uba74 Chrome Extension Vault \uc571\uc5d0\uc11c \ud31d\uc5c5\uc774 \ud558\ub098 \ub728\uac8c \ub429\ub2c8\ub2e4. \uc774\ub54c Password\ub97c \uc785\ub825\ud558\uba74, ",(0,i.kt)("inlineCode",{parentName:"p"},"Instantatie")," Method \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\uac8c \ub418\ub294 \uac83\uc785\ub2c8\ub2e4. \uc9c0\uac11\uc744 \ub9cc\ub4e4\uc5c8\uc744 \ub54c \uc124\uc815\ud588\ub358 Password\ub97c \uc785\ub825\ud558\uace0, Post \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694."),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:"0px 0px 16px 0px"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center"},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/input-password.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\uc11c\uba85\uc774 \uc644\ub8cc\ub418\uba74 \ud2b8\ub79c\uc7ad\uc158\uc774 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub824\uc57c \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74 ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Tx hash \uac12\uc744 \ud074\ub9ad\ud574\ubcf4\uc138\uc694."),(0,i.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,i.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/success-tx-click-hash.png",mdxType:"VaultImgCard"}))),(0,i.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/E3D5F9E105E5E8729A357BB6B44E54372FF46B1C6D97C6542D8617694E2D2AD5",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)(o.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/explorer-tx.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"make-confirm"},"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \ud655\uc778"),(0,i.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc774 \uc798 \ub098\uc654\ub2e4\uba74 EventLogs\uc5d0\uc11c \uc5ec\ub7ec\ubd84\uc774 \ubc1c\ud589\ud55c CW20 \ud1a0\ud070\uc758 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,i.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/E3D5F9E105E5E8729A357BB6B44E54372FF46B1C6D97C6542D8617694E2D2AD5#EventLogs",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)(o.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/eventlogs.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Init msg")," \uac12\uc744 \uc785\ub825\ud560 \ub54c, ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_balances")," \ud56d\ubaa9\uc5d0\uc11c CW20 \ud1a0\ud070\uc744 \uc5b4\ub290 \uc9c0\uac11\uc5d0 \uba87 \uac1c \ubc1c\ud589\ud560 \uac83\uc778\uc9c0\ub97c \uae30\uc785\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud574\ub2f9 \uc9c0\uac11\uc5d0 \ud1a0\ud070\uc774 \uc798 \ub4e4\uc5b4\uc654\ub294\uc9c0\ub97c \ud655\uc778\ud574\ubd10\uc57c\uaca0\uc9c0\uc694. \uc5ed\uc2dc Vault\uc5d0\uc11c \uc27d\uac8c \ud655\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"Chrome Extension \uc571 Vault\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"Add tokens"),"\ub97c \ud074\ub9ad\ud574\uc8fc\uc138\uc694. "),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/vault-addtokens.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\uac80\uc0c9\ucc3d\uc5d0 \uc5ec\ub7ec\ubd84\uc758 CW20 \ud1a0\ud070 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/vault-search.png",mdxType:"VaultImgCard"}))),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/vault-search-token.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\uc774\ucc98\ub7fc Vault\uc5d0\uc11c MCT \ud1a0\ud070\uc774 \uc798 \ubc1c\ud589\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4! "),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/vault-add-cw20.png",mdxType:"VaultImgCard"}))),(0,i.kt)(n.Z,{summary:"initial_balances\uc5d0\uc11c amount\uac12\uc774 2,000,000,000,000,000\uac1c\uc778\ub370 \uc65c 2,000,000,000\uac1c \ubc16\uc5d0 \ub4e4\uc5b4 \uc788\uc9c0 \uc54a\ub098\uc694?",mdxType:"Details"},(0,i.kt)("p",null,"initial_balances\uc5d0\uc11c amount\uac12\uc744 \uc785\ub825\ud560 \ub54c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"decimals")," \ud56d\ubaa9\uc744 \uace0\ub824\ud574\uc57c \ud569\ub2c8\ub2e4. MCT \ud1a0\ud070\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"decimals")," \uac12\uc744 ",(0,i.kt)("strong",{parentName:"p"},"6"),"\uc73c\ub85c \uc9c0\uc815\ud588\uae30 \ub54c\ubb38\uc5d0, 2,000,000,000 * 10",(0,i.kt)("sup",null,"6")," \uc73c\ub85c \uc785\ub825\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc815\uc0c1\uc801\uc73c\ub85c 2,000,000,000\uac1c\uac00 \ubc1c\ud589\ub41c \uac83\uc774 \ub9de\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"send-cw20"},"CW20 \uc804\uc1a1\ud558\uae30"),(0,i.kt)("p",null,"\ubc1c\ud589\ud55c CW20\uc744 \ub2e4\ub978 \uc9c0\uac11\uc73c\ub85c \uc804\uc1a1\ud574\ubd05\uc2dc\ub2e4. Chrome Extension \uc571 Vault\uc5d0\uc11c \uc804\uc1a1\ud558\uace0 \uc2f6\uc740 CW20 \ud1a0\ud070\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"Send")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/vault-click-send.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\ubcf4\ub0b4\uace0 \uc2f6\uc740 \uc9c0\uac11 \uc8fc\uc18c\ub97c Recipient\uc5d0, \ubcf4\ub0b4\uace0 \uc2f6\uc740 \uc218\ub7c9\ub9cc\ud07c Amount\uc5d0  \uc785\ub825\ud569\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8")," \uc9c0\uac11\uc73c\ub85c 10 MCT\ub9cc\ud07c \uc804\uc1a1\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/send-input-amount.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Memo \ud56d\ubaa9\uc740 \uc0dd\ub7b5\ud558\uace0, \ubc14\ub85c Password\ub97c \uc785\ub825 \ud6c4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit")," \ubc84\ud2bc\uc744 \ub20c\ub800\uc2b5\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/send-submit.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc774 \uc804\ud30c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud31d\uc5c5\uc744 \uae30\ub2e4\ub9ac\uba74 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc798 \uc0dd\uc131\ub418\uc5c8\ub2e4\ub294 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \ud074\ub9ad\ud558\uba74 CW20 \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158\uc744 ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/send-click-txhash.png",mdxType:"VaultImgCard"}))),(0,i.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/573D9161AC25F1691E2ADADD15C68B747FC783F4C13DBAD8BBB26CEE4C8174A1",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,i.kt)(o.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/send-explorer.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\ub2e4\uc2dc \uc9c0\uac11\uc744 \uc0b4\ud3b4\ubcf4\uba74 \uae30\uc874 2000000000\uac1c \uc788\uc5c8\ub358 MCT\uac00 10\uac1c \ub9cc\ud07c \uc904\uc5b4\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. CW20 \uc804\uc1a1\uc774 \uc798 \uc9c4\ud589\ub418\uc5c8\uad70\uc694!"),(0,i.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,i.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,i.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,i.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,i.kt)(o.Z,{imgSrc:"/academy/img/3-tutorial/1-make-cw20/vault/send-result.png",mdxType:"VaultImgCard"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"\uc774\ub807\uac8c Vault \uc571\uc73c\ub85c CW20 \ud1a0\ud070 \ubc1c\ud589\uacfc \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js"},"\ub2e4\uc74c \ub2e8\uacc4"),"\uc5d0\uc11c\ub294 Javascript \ucf54\ub4dc\ub85c \uc9c1\uc811 CW20 \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0 \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}g.isMDXComponent=!0}}]);