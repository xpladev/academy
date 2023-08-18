"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[243],{34673:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),l=a(67294),o=a(86010),r=a(72389),i=a(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function u(e){let{summary:t,children:a,...u}=e;const m=(0,r.Z)(),p=(0,l.useRef)(null),{collapsed:h,setCollapsed:w}=(0,i.u)({initialState:!u.open}),[y,f]=(0,l.useState)(u.open),g=l.isValidElement(t)?t:l.createElement("summary",null,t??"Details");return l.createElement("details",(0,n.Z)({},u,{ref:p,open:y,"data-collapsed":h,className:(0,o.Z)(s.details,m&&s.isBrowser,u.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,p.current)&&(e.preventDefault(),h?(w(!1),f(!0)):w(!0))}}),g,l.createElement(i.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{w(e),f(!e)}},l.createElement("div",{className:s.collapsibleContent},a)))}const m={details:"details_b_Ee"},p="alert alert--info";function h(e){let{...t}=e;return l.createElement(u,(0,n.Z)({},t,{className:(0,o.Z)(p,m.details,t.className)}))}},85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(86010);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o.tabItem,r),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),l=a(67294),o=a(86010),r=a(12466),i=a(16550),s=a(91980),c=a(67392),d=a(50012);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function w(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[r,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[u,w]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??u;return p({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),w(e)}),[c,w,o]),tabValues:o}}var y=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==i&&(u(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},r,{className:(0,o.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=w(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(k,(0,n.Z)({},e,t)))}function v(e){const t=(0,y.Z)();return l.createElement(b,(0,n.Z)({key:String(t)},e))}},51007:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(86010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function r(e){let{children:t,minHeight:a,url:r="http://localhost:3000",style:i,bodyStyle:s}=e;return n.createElement("div",{className:o.browserWindow,style:{...i,minHeight:a}},n.createElement("div",{className:o.browserWindowHeader},n.createElement("div",{className:o.buttons},n.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,l.Z)(o.browserWindowAddressBar,"text--truncate")},r),n.createElement("div",{className:o.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:o.bar}),n.createElement("span",{className:o.bar}),n.createElement("span",{className:o.bar})))),n.createElement("div",{className:o.browserWindowBody,style:s},t))}},61497:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=e=>{let{imgSrc:t,style:a}=e;return n.createElement("img",{className:"max-w-sm",style:a,src:t,alt:""})}},56639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>w,default:()=>v,frontMatter:()=>h,metadata:()=>y,toc:()=>g});var n=a(87462),l=a(67294),o=a(3905),r=a(18947);const i=()=>l.createElement(r.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { MnemonicKey, LCDClient } = require("@xpla/xpla.js");\n\nconst newKey = new MnemonicKey();\nconsole.log("mnemonic: " + newKey.mnemonic);\n\nconst lcd = new LCDClient({\n\tchainID : \'cube_47-5\', // The name of xpla testnet network\n\tURL : \'https://cube-lcd.xpla.dev\' // xpla testnet LCD URL\n});\nconsole.log("accAddress: " + lcd.wallet(newKey).key.accAddress);'},options:{layout:"console",showLineNumbers:!0}}),s=()=>l.createElement(r.oT,{files:{"/App.js":"import { LCDClient, MnemonicKey } from '@xpla/xpla.js';\n\nexport default function App() {\n    const newKey = new MnemonicKey();\n\n    const lcd = new LCDClient({\n      chainID : 'cube_47-5', // The name of xpla testnet network\n      URL : 'https://cube-lcd.xpla.dev' // xpla testnet LCD URL\n    });\n\n    return <>\n    <h3>mnemonic: {newKey.mnemonic}</h3>\n    <h3>accAddress: {lcd.wallet(newKey).key.accAddress}</h3>\n    </> \n}"},theme:"light",template:"react",customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"}}},l.createElement(r.sp,null,l.createElement(r.Lj,null),l.createElement(r._V,{closableTabs:!0,showTabs:!0}),l.createElement(r.Gj,null)));var c=a(61497),d=a(51007),u=a(34673),m=a(74866),p=a(85162);const h={sidebar_position:2},w="Creating a Wallet (Javascript)",y={unversionedId:"settings/create-wallet/create-wallet-with-js",id:"settings/create-wallet/create-wallet-with-js",title:"Creating a Wallet (Javascript)",description:"If you're a developer, you might be itching to create a wallet through code. Now is the time!!",source:"@site/docs/2-settings/1-create-wallet/2-create-wallet-with-js.mdx",sourceDirName:"2-settings/1-create-wallet",slug:"/settings/create-wallet/create-wallet-with-js",permalink:"/docs/settings/create-wallet/create-wallet-with-js",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating a Wallet (Vault)",permalink:"/docs/settings/create-wallet/create-wallet-with-vault"},next:{title:"Getting Testnet $XPLA Coins",permalink:"/docs/settings/create-wallet/get-testnet-xpla"}},f={},g=[{value:"Preview",id:"preview",level:2},{value:"Environment Setup",id:"setting",level:2},{value:"1. Install Node.js",id:"installnodejs",level:3},{value:"2. Install Visual Studio Code",id:"installvscode",level:3},{value:"Running JavaScript Code",id:"runjs",level:2},{value:"Setting up the environment",id:"requirements",level:3},{value:"Running the Code",id:"runcode",level:3},{value:"Explanation",id:"explanation",level:2}],k={toc:g},b="wrapper";function v(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-wallet-javascript"},"Creating a Wallet (Javascript)"),(0,o.kt)("p",null,"If you're a developer, you might be itching to create a wallet through code. Now is the time!!"),(0,o.kt)("p",null,"Oh! No worries if you are not a developer - having the right setup allows you to easily create a wallet with just 10 lines of code."),(0,o.kt)("h2",{id:"preview"},"Preview"),(0,o.kt)("p",null,"Below are the codes for creating a wallet using JavaScript. On the right side, you'll see the results of the execution."),(0,o.kt)(i,{mdxType:"Ex01"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can generate new mnemonic words using ",(0,o.kt)("inlineCode",{parentName:"p"},"new MnemonicKey()")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@xpla/xpla.js"},"@xpla/xpla.js")," module. Then, you can extract the wallet's address using the LCDClient."),(0,o.kt)("p",null,"If you've understood the Preview Code, feel free to skip the ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#setting"},"post-Setup section")," and move on to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/get-testnet-xpla"},"next steps"),"."),(0,o.kt)(u.Z,{summary:"Creating a Wallet Using React",style:{backgroundColor:"white"},mdxType:"Details"},(0,o.kt)(s,{mdxType:"Ex01_react"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using the mnemonic we've generated with code, you can initiate wallet recovery in Vault, basically bringing your wallet to life! Try connecting your wallet through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add a wallet")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"Recover wallet")," in Vault."),(0,o.kt)(d.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"60px",width:"100%",top:17,zIndex:0}}),(0,o.kt)(c.Z,{style:{zIndex:1},imgSrc:"/academy/img/2-settings/1-create-wallet/create-wallet-with-js/recover-wallet.png",mdxType:"VaultImgCard"}))),(0,o.kt)("p",{parentName:"admonition"},'"Wallet name" and "Password" refer to the name and password you will use for your Vault wallet. "Mnemonic" corresponds to the mnemonic words you obtained from the example. For Index, enter 0 by default. If the index values are different, a different address is created even if it is the same Mnemonic.')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To safely use the wallet you created with code on the XPLA network, remember to keep the mnemonic words secure. Never share them with others.")),(0,o.kt)(u.Z,{summary:"What is an LCDClient?",mdxType:"Details"},(0,o.kt)("p",null,"The LCDClient is a tool for fetching data from the XPLA blockchain. If you'd like to know more, refer to the ",(0,o.kt)("a",{target:"_blank",href:"https://docs.xpla.io/docs/develop/guides/start-the-light-client-daemon/"},"Docs"),"."),(0,o.kt)("p",null,"Even if you don't fully grasp this right now, it's okay. The key takeaway? Just remember that you can create a wallet through code!")),(0,o.kt)("h2",{id:"setting"},"Environment Setup"),(0,o.kt)("p",null,"Let's delve into setting up the environment to run the code we showed you in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#preview"},"Preview"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#installnodejs"},"Install Node.js"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#installvscode"},"Install Visual Studio Code")))),(0,o.kt)("h3",{id:"installnodejs"},"1. Install Node.js"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," that corresponds to your operating system."),(0,o.kt)("p",null,"To verify if Node.js is properly installed, open the Terminal and type ",(0,o.kt)("inlineCode",{parentName:"p"},"node -v"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),(0,o.kt)("p",null,"If the installed Node.js version is displayed, you're good to go! For instance, if it shows ",(0,o.kt)("inlineCode",{parentName:"p"},"v16.16.0"),", that's what you're looking for."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What's the Terminal?"),"It's a tool for controlling computer systems. If you're new to development, you might not be familiar with accessing the terminal. Depending on your operating system, you can access the terminal like this!",(0,o.kt)(m.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Open Windows RUN (Win + R) application. Then simply enter cmd."),(0,o.kt)(p.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"You can find out more information on ",(0,o.kt)("a",{href:"https://support.apple.com/ko-kr/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac",target:"_blank"},"Apple's official website.")))),(0,o.kt)("h3",{id:"installvscode"},"2. Install Visual Studio Code"),(0,o.kt)("p",null,"We'll use Visual Studio Code to easily edit code files. Let's install ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code")," if you do not already have it or if you have a brand new computer!"),(0,o.kt)("h2",{id:"runjs"},"Running JavaScript Code"),(0,o.kt)("p",null,"Now, let's dive into running the code you saw in the Preview."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#requirements"},"Setting up the environment"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-js#runcode"},"Running the Code")))),(0,o.kt)("h3",{id:"requirements"},"Setting up the environment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a folder for the example code files. Let's keep the name of the folder as xpla-academy-example. but just without a period. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch Visual Studio Code that you've installed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In Visual Studio Code, go to File - Open Folder and open the xpla-academy-example folder.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left-hand EXPLORER panel, click the icon next to the folder name (New file) to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"example-1.js")," file."),(0,o.kt)("img",{src:"/academy/img/2-settings/1-create-wallet/vscode-newfile.png",width:"400",height:"200"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the code below and paste it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"example-1.js")," file, then save!"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const { MnemonicKey, LCDClient } = require("@xpla/xpla.js");\n\nconst newKey = new MnemonicKey();\nconsole.log("mnemonic: " + newKey.mnemonic);\n\nconst lcd = new LCDClient({\n  chainID : \'cube_47-5\', // The name of xpla testnet network\n  URL : \'https://cube-lcd.xpla.dev\' // xpla testnet LCD URL\n});\nconsole.log("accAddress: " + lcd.wallet(newKey).key.accAddress);\n')))),(0,o.kt)("h3",{id:"runcode"},"Running the Code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'At the top menu of the VSCode click "Terminal" menu. Then hit New "Terminal" (Ctrl+Shift+`) for a new Terminal. (If you don\'t see the "Terminal" option, make the VSCode screen fullsize.)')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Type the following command in our new Terminal."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @xpla/xpla.js\nnode example-1.js\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the Terminal for results. You should see your mnemonic words and address."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your operating system is Windows, we recommend running VS Code Terminal with Command Prompt or Git Bash instead of Powershell. Of course, you can open the Terminal in your familiar environment."),(0,o.kt)("p",{parentName:"admonition"},"Here's how to set VS Code Default Terminal to Command Prompt."),(0,o.kt)(l.Fragment,null),'1. Open the Command Palette with "Ctrl + shift + P".',(0,o.kt)("br",null),(0,o.kt)(l.Fragment,null),'2. Search for "Terminal: Select Default Profile".',(0,o.kt)("br",null),(0,o.kt)(l.Fragment,null),"3. Set to Command Prompt, and run VS Code again."))),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("p",null,"Congratulations! You've just created a Wallet just using code!"),(0,o.kt)("p",null,"In the code below, you've used the ",(0,o.kt)("inlineCode",{parentName:"p"},"MnemonicKey()")," function to generate random mnemonic words."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const newKey = new MnemonicKey();\nconsole.log("mnemonic: " + newKey.mnemonic);\n')),(0,o.kt)("p",null,"You've discovered the address of the wallet composed of the newly created mnemonic through the LCDClient."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const lcd = new LCDClient({\n  chainID : 'cube_47-5', // The name of xpla testnet network\n  URL : 'https://cube-lcd.xpla.dev' // xpla testnet LCD URL\n});\nconsole.log(\"accAddress: \" + lcd.wallet(newKey).key.accAddress);\n")),(0,o.kt)("p",null,"Moving forward, we'll be using Wallets to accomplish even more tasks. If you wish to continue using the wallet you've crafted through code, we highly recommend connecting it to the Vault Chrome Extension."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using the mnemonic we've generated with code, you can initiate wallet recovery in Vault, basically bringing your wallet to life! Try connecting your wallet through the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add a wallet")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"Recover wallet")," in Vault."),(0,o.kt)(d.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,o.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17px",width:"100%",top:0,zIndex:0}}),(0,o.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"60px",width:"100%",top:17,zIndex:0}}),(0,o.kt)(c.Z,{style:{zIndex:1},imgSrc:"/academy/img/2-settings/1-create-wallet/create-wallet-with-js/recover-wallet.png",mdxType:"VaultImgCard"}))),(0,o.kt)("p",{parentName:"admonition"},'"Wallet name" and "Password" refer to the name and password you will use for your Vault wallet. "Mnemonic" corresponds to the mnemonic words you obtained from the example. For Index, enter 0 by default. If the index values are different, a different address is created even if it is the same Mnemonic.')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To safely use the wallet you created with code on the XPLA network, remember to keep the mnemonic words secure. Never share them with others.")),(0,o.kt)(u.Z,{summary:"What is an LCDClient?",mdxType:"Details"},"The LCDClient is a tool for fetching data from the XPLA blockchain. If you'd like to know more, refer to the ",(0,o.kt)("a",{target:"_blank",href:"https://docs.xpla.io/docs/develop/guides/start-the-light-client-daemon/"},"Docs"),".",(0,o.kt)("p",null,"Even if you don't fully grasp this right now, it's okay. The key takeaway? Just remember that you can create a wallet through code!")))}v.isMDXComponent=!0}}]);