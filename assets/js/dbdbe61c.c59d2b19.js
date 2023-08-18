"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[762],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>w});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),c=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,w=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return a?l.createElement(w,o(o({ref:t},d),{},{components:a})):l.createElement(w,o({ref:t},d))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51007:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:t,minHeight:a,url:o="http://localhost:3000",style:i,bodyStyle:s}=e;return l.createElement("div",{className:r.browserWindow,style:{...i,minHeight:a}},l.createElement("div",{className:r.browserWindowHeader},l.createElement("div",{className:r.buttons},l.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),l.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),l.createElement("span",{className:r.dot,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,n.Z)(r.browserWindowAddressBar,"text--truncate")},o),l.createElement("div",{className:r.browserWindowMenuIcon},l.createElement("div",null,l.createElement("span",{className:r.bar}),l.createElement("span",{className:r.bar}),l.createElement("span",{className:r.bar})))),l.createElement("div",{className:r.browserWindowBody,style:s},t))}},61497:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294);const n=e=>{let{imgSrc:t,style:a}=e;return l.createElement("img",{className:"max-w-sm",style:a,src:t,alt:""})}},57199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var l=a(87462),n=a(67294),r=a(3905);const o=e=>{let{imgLink:t,imgSrc:a,title:l,description:r}=e;const o=n.createElement("div",{className:"px-8 flex flex-row items-center cursor-pointer max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"},a&&n.createElement("img",{className:"w-16 rounded-t-lg",src:a,alt:""}),n.createElement("div",{className:"p-5"},n.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},l),n.createElement("p",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400"},r)));return t?n.createElement("a",{href:t,target:"_blank"},o):o};var i=a(61497),s=a(51007);const c={sidebar_position:1},d="Creating a Wallet (Vault)",m={unversionedId:"settings/create-wallet/create-wallet-with-vault",id:"settings/create-wallet/create-wallet-with-vault",title:"Creating a Wallet (Vault)",description:"In the world of blockchain, a wallet can mean software that takes care of a user's tokens or even the user's account itself.",source:"@site/docs/2-settings/1-create-wallet/1-create-wallet-with-vault.mdx",sourceDirName:"2-settings/1-create-wallet",slug:"/settings/create-wallet/create-wallet-with-vault",permalink:"/academy/docs/settings/create-wallet/create-wallet-with-vault",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Let's get your Wallet ready!",permalink:"/academy/docs/category/lets-get-your-wallet-ready"},next:{title:"Creating a Wallet (Javascript)",permalink:"/academy/docs/settings/create-wallet/create-wallet-with-js"}},p={},u=[{value:"Installing Vault",id:"install-vault",level:2},{value:"Creating a Wallet",id:"createwallet",level:2},{value:"1. Select &quot;New wallet&quot;",id:"clicknewwallet",level:3},{value:"2. Set up wallet info and securely store the mnemonic",id:"savemnemonic",level:3},{value:"3. Verify the mnemonic",id:"verifymnemonic",level:3},{value:"4. Connect the created wallet to Vault",id:"connectwallet",level:3}],w={toc:u},g="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,l.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-wallet-vault"},"Creating a Wallet (Vault)"),(0,r.kt)("p",null,"In the world of blockchain, a wallet can mean software that takes care of a user's tokens or even the user's account itself."),(0,r.kt)("h2",{id:"install-vault"},"Installing Vault"),(0,r.kt)("p",null,"Vault is a prominent wallet application used within the XPLA blockchain! Let's go ahead and install the ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/xpla-vault-wallet/ocjobpilfplciaddcbafabcegbilnbnb"},"Vault Chrome Extension"),", our tool of choice for this adventure."),(0,r.kt)("div",{className:"grid sm:grid-cols-2 gap-4 grid-cols-1"},(0,r.kt)(o,{imgLink:"https://chrome.google.com/webstore/detail/xpla-vault-wallet/ocjobpilfplciaddcbafabcegbilnbnb",imgSrc:"/academy/img/2-settings/1-create-wallet/vault.jpg",title:"Vault",description:"Widely used on the XPLA blockchain network.",mdxType:"Card"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Once you open up Vault as a Chrome Extension, you'll be greeted with a screen like the one below:"),(0,r.kt)(s.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,r.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,r.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,r.kt)(i.Z,{imgSrc:"/academy/img/2-settings/1-create-wallet/install-vault.png",mdxType:"VaultImgCard"}))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"createwallet"},"Creating a Wallet"),(0,r.kt)("p",null,"Create a Wallet in just a few steps using Vault:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault#clicknewwallet"},'Select "New wallet"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault#savemnemonic"},"Set up wallet info and securely store the mnemonic"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault#verifymnemonic"},"Verify the mnemonic"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault#connectwallet"},"Connect the created wallet to Vault")))),(0,r.kt)("h3",{id:"clicknewwallet"},'1. Select "New wallet"'),(0,r.kt)("p",null,"Launch Vault and select ",(0,r.kt)("inlineCode",{parentName:"p"},"New wallet"),"."),(0,r.kt)(s.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,r.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,r.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,r.kt)(i.Z,{imgSrc:"/academy/img/2-settings/1-create-wallet/select-newwallet.png",mdxType:"VaultImgCard"}))),(0,r.kt)("h3",{id:"savemnemonic"},"2. Set up wallet info and securely store the mnemonic"),(0,r.kt)("p",null,"Fill in the wallet's desired name and password, and SECURELY STORE the mnemonic words. (Always keep it safe!!!!)"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The mnemonic is crucial for wallet recovery. That means you need to remember your mnemonic to get back into your account. "),(0,r.kt)("p",{parentName:"admonition"},"If anyone knows or steals your Wallet mnemonic, it could lead to a complete loss of your wallet assets, which we definitely want to prevent. Therefore, keep it in a safe place and never disclose it to anyone. (Not even to your favorite cat.) ")),(0,r.kt)("p",null,"Then, hit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit")," button."),(0,r.kt)(s.Z,{url:"chrome-extension://vault.xpla.io",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,r.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"58px",width:"100%",top:0,zIndex:0}}),(0,r.kt)(i.Z,{style:{zIndex:1},imgSrc:"/academy/img/2-settings/1-create-wallet/save-mnemonic.png",mdxType:"VaultImgCard"}))),(0,r.kt)("h3",{id:"verifymnemonic"},"3. Verify the mnemonic"),(0,r.kt)("p",null,"Please use the saved mnemonic and choose the words in the order displayed on the screen."),(0,r.kt)(s.Z,{url:"chrome-extension://vault.xpla.io",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,r.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"55px",width:"100%",top:0,zIndex:0}}),(0,r.kt)(i.Z,{style:{zIndex:1},imgSrc:"/academy/img/2-settings/1-create-wallet/verify-mnemonic.png",mdxType:"VaultImgCard"}))),(0,r.kt)("h3",{id:"connectwallet"},"4. Connect the created wallet to Vault"),(0,r.kt)("p",null,"Ta-da! You just created a Wallet! Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect")," to link the newly generated wallet to ",(0,r.kt)("inlineCode",{parentName:"p"},"Vault"),", and you're all set."),(0,r.kt)(s.Z,{url:"chrome-extension://vault.xpla.io",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,r.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"53px",width:"100%",top:0,zIndex:0}}),(0,r.kt)(i.Z,{style:{zIndex:1},imgSrc:"/academy/img/2-settings/1-create-wallet/connect-wallet.png",mdxType:"VaultImgCard"}))),(0,r.kt)("p",null,"Now you can access your wallet information directly from the Vault Chrome Extension."),(0,r.kt)(s.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,r.kt)("img",{style:{height:"100%"},src:"/academy/img/2-settings/1-create-wallet/google.png"})),(0,r.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,r.kt)(i.Z,{imgSrc:"/academy/img/2-settings/1-create-wallet/create-success.png",mdxType:"VaultImgCard"}))))}y.isMDXComponent=!0}}]);