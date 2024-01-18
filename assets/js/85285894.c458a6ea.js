"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[9343],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34673:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),s=a(86010),l=a(72389),o=a(86043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function c(e,t){return!!e&&(e===t||c(e.parentElement,t))}function d(e){let{summary:t,children:a,...d}=e;const u=(0,l.Z)(),m=(0,r.useRef)(null),{collapsed:h,setCollapsed:f}=(0,o.u)({initialState:!d.open}),[g,k]=(0,r.useState)(d.open),y=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,n.Z)({},d,{ref:m,open:g,"data-collapsed":h,className:(0,s.Z)(i.details,u&&i.isBrowser,d.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;p(t)&&c(t,m.current)&&(e.preventDefault(),h?(f(!1),k(!0)):f(!0))}}),y,r.createElement(o.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),k(!e)}},r.createElement("div",{className:i.collapsibleContent},a)))}const u={details:"details_b_Ee"},m="alert alert--info";function h(e){let{...t}=e;return r.createElement(d,(0,n.Z)({},t,{className:(0,s.Z)(m,u.details,t.className)}))}},46299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(34673);const l={sidebar_position:4},o="Create and Check Transactions (CLI)",i={unversionedId:"settings/create-testnet-transaction/use-xplad",id:"settings/create-testnet-transaction/use-xplad",title:"Create and Check Transactions (CLI)",description:"You can use xplad in the command-line interface (CLI) to create transactions and send queries. If you haven't installed xplad in the previous steps, feel free to move on to the next step.",source:"@site/startlearning/2-settings/2-create-testnet-transaction/4-use-xplad.mdx",sourceDirName:"2-settings/2-create-testnet-transaction",slug:"/settings/create-testnet-transaction/use-xplad",permalink:"/startlearning/settings/create-testnet-transaction/use-xplad",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4}},p={},c=[{value:"Creating Transactions with xplad",id:"maketx",level:2},{value:"Sending Queries with xplad",id:"sendquery",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-and-check-transactions-cli"},"Create and Check Transactions (CLI)"),(0,r.kt)("p",null,"You can use xplad in the command-line interface (CLI) to create transactions and send queries. If you haven't installed xplad in the previous steps, feel free to move on to the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/tutorial/make-cw20/make-cw20-with-vault"},"next step"),"."),(0,r.kt)("h2",{id:"maketx"},"Creating Transactions with xplad"),(0,r.kt)("p",null,"If you've installed xplad and successfully created a wallet in the previous steps, let's proceed with the following instructions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To create a transaction, you'll need some ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-wallet/get-testnet-xpla"},"testnet $XPLA")," in your wallet. Enter your wallet address in the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.xpla.io/"},"Faucet")," and receive testnet $XPLA.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can generate a transaction that transfers XPLA using the command below."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xplad tx bank send <from-key-or-address> <to-address> <coins> --chain-id=<chain-id> --fees=<fee> --node https://cube-rpc.xpla.dev:443  \n")),(0,r.kt)("p",null,"In the example, the wallet name was ",(0,r.kt)("inlineCode",{parentName:"p"},"test1"),". Therefore, the command to send 1 aXPLA to the Faucet address ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv")," would be as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xplad tx bank send test1 xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv 1axpla --chain-id=cube_47-5 --fees=170000000000000000axpla --node https://cube-rpc.xpla.dev:443 \n")),(0,r.kt)(s.Z,{summary:"What is the address https://cube-rpc.xpla.dev:443?",mdxType:"Details"},(0,r.kt)("p",null,"This address is the testnet RPC address. This address allows communication with the XPLA blockchain testnet."),(0,r.kt)("p",null,"For the mainnet, you should input ",(0,r.kt)("inlineCode",{parentName:"p"},"--node https://dimension-rpc.xpla.dev:443"),".")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"After entering the command in step 2, you'll be prompted to enter a passphrase as shown below in the CLI. Enter the passphrase you set when creating the wallet.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Enter keyring passphrase:\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"When transaction information is displayed in the CLI, confirm the transaction creation by entering ",(0,r.kt)("inlineCode",{parentName:"li"},"y"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"xpla1z92x0yghmyz4k755d8f3vcm478se5rl5zl7sqr","to_address":"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv","amount":[{"denom":"axpla","amount":"1"}]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[{"denom":"axpla","amount":"170000000000000000"}],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}\n\nconfirm transaction before signing and broadcasting [y/N]:\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You'll see the generated transaction hash value.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'code: 0\ncodespace: ""\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: A8FA5E9E6B54DF2E52C088CF860B6F9BA82D0497AEE1790DE5564CAFA2FD9373\n')),(0,r.kt)("p",null,"Did you receive the transaction hash value? Use the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer")," to check the transaction data."),(0,r.kt)("h2",{id:"sendquery"},"Sending Queries with xplad"),(0,r.kt)("p",null,"Sending queries and retrieving transaction data using xplad is simple. Just input the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xplad query tx <txhash> --node https://cube-rpc.xpla.dev:443 \n")),(0,r.kt)("p",null,"In the example, the transaction hash value was ",(0,r.kt)("inlineCode",{parentName:"p"},"A8FA5E9E6B54DF2E52C088CF860B6F9BA82D0497AEE1790DE5564CAFA2FD9373"),". Therefore, you can use the command below to obtain transaction data in the example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xplad query tx A8FA5E9E6B54DF2E52C088CF860B6F9BA82D0497AEE1790DE5564CAFA2FD9373 --node https://cube-rpc.xpla.dev:443 \n")),(0,r.kt)("p",null,"This way, you've used xplad to create transactions and retrieve transaction data. If you want to learn more about xplad, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.xpla.io/develop/develop/tools/xplad/about-xplad/"},"Docs"),"."))}m.isMDXComponent=!0}}]);