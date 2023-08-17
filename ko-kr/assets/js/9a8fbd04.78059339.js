"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[1080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23612:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),l=n(86010),r=n(35281),o=n(95999);const i={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};var s=n(25108);const c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:e.title??t,children:n}}function p(e){const{children:t,type:n,title:o,icon:p}=d(e),m=function(e){const t=u[e]??e,n=c[t];return n||(s.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),c.info)}(n),f=o??m.label,{iconComponent:b}=m,g=p??a.createElement(b,null);return a.createElement("div",{className:(0,l.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${m.infimaClassName}`,i.admonition)},a.createElement("div",{className:i.admonitionHeading},a.createElement("span",{className:i.admonitionIcon},g),f),a.createElement("div",{className:i.admonitionContent},t))}},34673:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(87462),l=n(67294),r=n(86010),o=n(72389),i=n(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function u(e,t){return!!e&&(e===t||u(e.parentElement,t))}function d(e){let{summary:t,children:n,...d}=e;const p=(0,o.Z)(),m=(0,l.useRef)(null),{collapsed:f,setCollapsed:b}=(0,i.u)({initialState:!d.open}),[g,k]=(0,l.useState)(d.open),h=l.isValidElement(t)?t:l.createElement("summary",null,t??"Details");return l.createElement("details",(0,a.Z)({},d,{ref:m,open:g,"data-collapsed":f,className:(0,r.Z)(s.details,p&&s.isBrowser,d.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&u(t,m.current)&&(e.preventDefault(),f?(b(!1),k(!0)):b(!0))}}),h,l.createElement(i.z,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{b(e),k(!e)}},l.createElement("div",{className:s.collapsibleContent},n)))}const p={details:"details_b_Ee"},m="alert alert--info";function f(e){let{...t}=e;return l.createElement(d,(0,a.Z)({},t,{className:(0,r.Z)(m,p.details,t.className)}))}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(87462),l=n(67294),r=n(86010),o=n(12466),i=n(16550),s=n(91980),c=n(67392),u=n(50012);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function p(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=f({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var g=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,r.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},l.createElement(h,(0,a.Z)({},e,t)),l.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return l.createElement(y,(0,a.Z)({key:String(t)},e))}},8400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var a=n(87462),l=(n(67294),n(3905)),r=n(34673),o=n(74866),i=n(85162),s=n(77693),c=n(23612),u=n(25108);const d={sidebar_position:4},p="\uc9c0\uac11 \ub9cc\ub4e4\uae30 (CLI)",m={unversionedId:"settings/create-wallet/create-wallet-with-xplad",id:"settings/create-wallet/create-wallet-with-xplad",title:"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (CLI)",description:"xplad\ub97c \uc124\uce58\ud558\uba74 \uba85\ub839\uc904 \uc778\ud130\ud398\uc774\uc2a4(command-line interface, cli)\uc5d0\uc11c\ub3c4 \uc27d\uac8c \uc9c0\uac11\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. cli\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\uc73c\uc2dc\uac70\ub098, xplad \uc124\uce58\uc5d0 \uc5b4\ub824\uc6c0\uc744 \uacaa\uc73c\uc2e0\ub2e4\uba74 \ubc14\ub85c \ub2e4\uc74c \ub2e8\uacc4\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko-kr/docusaurus-plugin-content-docs/current/2-settings/1-create-wallet/3-create-wallet-with-xplad.mdx",sourceDirName:"2-settings/1-create-wallet",slug:"/settings/create-wallet/create-wallet-with-xplad",permalink:"/academy/ko-kr/docs/settings/create-wallet/create-wallet-with-xplad",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (Javascript)",permalink:"/academy/ko-kr/docs/settings/create-wallet/create-wallet-with-js"},next:{title:"\ud14c\uc2a4\ud2b8\ub137 XPLA \ucf54\uc778 \ubc1b\uae30",permalink:"/academy/ko-kr/docs/settings/create-wallet/get-testnet-xpla"}},f={},b=[{value:"xplad \uc124\uce58",id:"installxplad",level:2},{value:"xplad\ub85c \uc9c0\uac11 \ub9cc\ub4e4\uae30",id:"makewallet",level:2}],g=(k="Link",function(e){return u.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var k;const h={toc:b},v="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(v,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uc9c0\uac11-\ub9cc\ub4e4\uae30-cli"},"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (CLI)"),(0,l.kt)("p",null,"xplad\ub97c \uc124\uce58\ud558\uba74 \uba85\ub839\uc904 \uc778\ud130\ud398\uc774\uc2a4(command-line interface, cli)\uc5d0\uc11c\ub3c4 \uc27d\uac8c \uc9c0\uac11\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. cli\uc5d0 \uc775\uc219\ud558\uc9c0 \uc54a\uc73c\uc2dc\uac70\ub098, xplad \uc124\uce58\uc5d0 \uc5b4\ub824\uc6c0\uc744 \uacaa\uc73c\uc2e0\ub2e4\uba74 \ubc14\ub85c ",(0,l.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/get-testnet-xpla"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)(r.Z,{summary:"xplad\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,l.kt)("p",null,"xplad\ub780 XPLA Chain\uacfc \uc9c1\uc811 \uc0c1\ud638\uc791\uc6a9\ud560 \uc218 \uc788\ub294 \uba85\ub839\uc904 \uc778\ud130\ud398\uc774\uc2a4\uc785\ub2c8\ub2e4. "),(0,l.kt)("p",null,"xplad\ub85c \ub2e4\uc591\ud55c \uc77c\ub4e4\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. XPLA \ube14\ub85d\uccb4\uc778\uc5d0 query\ub97c \ubcf4\ub0b4\uc11c \uacb0\uacfc\ub97c \uac00\uc838\uc62c \uc218\ub3c4 \uc788\uace0, \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \ub610, ",(0,l.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/full-node/run-a-full-node/overview/"},"\ud480\ub178\ub4dc(Full-node)"),"\ub97c \uc2e4\ud589\ud560 \ub54c\uc5d0\ub3c4 xplad\ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"xplad\uc5d0 \uad00\ud55c \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/tools/xplad/install-xplad/"},"Docs"),"\ub098 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/xpladev/xpla"},"Github"),"\uc744 \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,l.kt)("h2",{id:"installxplad"},"xplad \uc124\uce58"),(0,l.kt)("p",null,"\uba3c\uc800 xplad\ub97c \uc124\uce58\ud574\ubd05\uc2dc\ub2e4. ",(0,l.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/tools/xplad/install-xplad/"},"Docs"),"\ub97c \ucc38\uace0\ud558\uc5ec \uc124\uce58\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"1. Windows \ud658\uacbd\uc5d0\uc11c Linux\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574, ",(0,l.kt)(g,{to:"https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support#1-overview",mdxType:"Link"},"WSL(Windows Subsystem for Linux)"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. WSL\uc744 \uc124\uce58\ud558\uace0, \uc2e4\ud589\ud574\uc8fc\uc138\uc694.",(0,l.kt)("br",null),(0,l.kt)("br",null),"2. WSL \ud658\uacbd\uc5d0\uc11c \uc544\ub798 command\ub97c \uc785\ub825\ud558\uc5ec ",(0,l.kt)(g,{to:"https://go.dev/",mdxType:"Link"},"Golang"),"\uc744 \uc124\uce58\ud569\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"sudo apt-get update\nwget https://golang.org/dl/go1.18.1.linux-amd64.tar.gz tar -xvf go1.18.1.linux-amd64.tar.gz\nrm -f go1.18.1.linux-amd64.tar.gz\nmkdir app\nmkdir app/bin\nmkdir app/pkg"),(0,l.kt)("br",null),"3. Golang\uc5d0 \uad00\ud55c \ud658\uacbd\ubcc0\uc218\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uba3c\uc800 .profile \ud30c\uc77c\uc744 vim\uc73c\ub85c \uc5fd\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"vim .profile"),(0,l.kt)("br",null),"\uc544\ub798 \ub0b4\uc6a9\ub300\ub85c .profile \ud30c\uc77c\uc744 \uc218\uc815\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"export GOROOT=$HOME/go\nexport GOPATH=$HOME/app\nexport PATH=$GOPATH/bin:$GOROOT/bin:$PATH"),(0,l.kt)("br",null),"\uc218\uc815\ud55c \ub0b4\uc6a9\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"source .profile"),(0,l.kt)("br",null),"4. ",(0,l.kt)("a",{target:"_blank",href:"https://github.com/xpladev/xpla"},"Github"),"\uc5d0\uc11c xplad\uc5d0 \uad00\ud55c \uc18c\uc2a4 \ucf54\ub4dc\ub97c ",(0,l.kt)("code",null,"clone"),"\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"git clone https://github.com/xpladev/xpla\ncd xpla"),(0,l.kt)("br",null),"5. xplad \uc2e4\ud589\uc744 \uc704\ud574 \ube4c\ub4dc\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"make install"),(0,l.kt)("br",null),"6. xplad\uac00 \uc798 \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"xplad version --long"),"\uc544\ub798\uc640 \uac19\uc740 \uacb0\uacfc\uac00 \ub098\uc624\uba74 xplad\uac00 \uc798 \uc124\uce58\ub41c \uac83\uc785\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"name: xpla\nserver_name: xplad\nversion: v0.0.5\ncommit: d947adaefadda0f29c92f18e8b33f769816f3c33\nbuild_tags: netgo,ledger\ngo: go version go1.18.4 darwin/amd64"),(0,l.kt)("br",null),(0,l.kt)(c.Z,{type:"danger",title:"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74...",mdxType:"Admonition"},"\ub9cc\uc57d ",(0,l.kt)("code",null,"xplad: command not found")," \uba54\uc2dc\uc9c0\uac00 \ub098\uc628\ub2e4\uba74, \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uace0 \ub2e4\uc2dc 4\ubc88 \uacfc\uc815\uc744 \uc9c4\ud589\ud574\ubcf4\uc138\uc694.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"export PATH=$PATH:$(go env GOPATH)/bin"))),(0,l.kt)(i.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"1. ",(0,l.kt)("a",{target:"_blank",href:"https://github.com/xpladev/xpla/tags"},"Github"),"\uc5d0\uc11c \ucd5c\uc2e0 \ucd9c\uc2dc \ubc84\uc804\uc744 \ud074\ub9ad\ud558\uc138\uc694.",(0,l.kt)("br",null),(0,l.kt)("br",null),"2. ",(0,l.kt)("code",null,"Source code (tar.gz)"),"\ub97c \ud074\ub9ad\ud558\uc5ec \xa0",(0,l.kt)("code",null,"xpla_<latest-version-here>.tar.gz")," \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc73c\uc138\uc694.",(0,l.kt)("br",null),(0,l.kt)("br",null),"3. \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc740 \ud30c\uc77c\uc744 \ub354\ube14\ud074\ub9ad\ud558\uc5ec \uc555\ucd95\uc744 \ud574\uc81c\ud574\uc8fc\uc138\uc694.",(0,l.kt)("br",null),(0,l.kt)("br",null),"4. \uc555\ucd95 \ud574\uc81c\ud55c \ud3f4\ub354\ub97c \uc791\uc5c5 \ud3f4\ub354\ub85c \uc124\uc815\ud569\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"cd Downloads/xpla_<downloaded-version>/"),"5. ",(0,l.kt)("code",null,"libwasmvm.dylib"),"\ub97c \xa0",(0,l.kt)("code",null,"/lib"),"\uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"sudo cp libwasmvm.dylib /usr/local/lib"),(0,l.kt)(c.Z,{type:"danger",title:"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c\ub2e4\uba74...",mdxType:"Admonition"},"M1 Mac \uc0ac\uc6a9\uc790\ub4e4\uc740 ",(0,l.kt)("code",null,"/lib"),"\uacfc ",(0,l.kt)("code",null,"/bin")," \ud3f4\ub354\ub97c ",(0,l.kt)("code",null,"/usr/local")," \ud3f4\ub354 \uc548\uc5d0 \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"sudo cd /usr/local\nsudo mkdir lib\nsudo mkdir bin")),"6. ",(0,l.kt)("code",null,"xplad"),"\ub97c path\uc5d0 \ucd94\uac00\ud569\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"sudo cp xplad /usr/local/bin"),"7. xplad\uac00 \uc798 \uc124\uce58\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.",(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"xplad version --long"))),(0,l.kt)("h2",{id:"makewallet"},"xplad\ub85c \uc9c0\uac11 \ub9cc\ub4e4\uae30"),(0,l.kt)("p",null,"xplad\ub97c \uc798 \uc124\uce58\ud558\uc168\ub098\uc694? \uc774\uc81c xplad\ub97c \uc774\uc6a9\ud558\uc5ec \uc9c0\uac11\uc744 \ub9cc\ub4e4\uc5b4\ubd05\uc2dc\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798 \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \uc9c0\uac11\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"xplad keys add <your-key-name>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<your-key-name>")," \ubd80\ubd84\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \uc124\uc815\ud560 \uc9c0\uac11\uc758 \uc774\ub984\uc744 \ub300\uc785\ud574\uc8fc\uc138\uc694. \uc608\ub97c \ub4e4\uba74 ",(0,l.kt)("inlineCode",{parentName:"p"},"xplad keys add test1"),"\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub7fc \uc544\ub798\uc640 \uac19\uc740 \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ xplad keys add test1\nEnter keyring passphrase:\n\n- name: test1\n  type: local\n  address: xpla1z92x0yghmyz4k755d8f3vcm478se5rl5zl7sqr\n  pubkey: \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AgTUIN8fbHKx9O26MkdWIsV+97/trkIbLD/cqU7m4s6N"}\'\n  mnemonic: ""\n\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nstate wall exist drum depart between debate inject scorpion truly equip smile height window rural install crystal crumble lock begin inform blur since army\n')),(0,l.kt)("p",null,"cli\uc5d0 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\uc640 \uc9c0\uac11 \uc8fc\uc18c\uac00 \ucd9c\ub825\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc9c0\uac11\uc774 \uc798 \uc0dd\uc131\ub418\uc5c8\uad70\uc694. \ub2f9\uc5f0\ud788 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub294 \uc798 \ubcf4\uad00\ud574\uc57c \ud569\ub2c8\ub2e4. "),(0,l.kt)("p",null,"\uc9c0\uac11 \uc0dd\uc131 \uba85\ub839\uc5b4(",(0,l.kt)("inlineCode",{parentName:"p"},"xplad keys add"),")\uc5d0 \uad00\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/tools/xplad/subcommands/#keys-add"},"Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694. \ubfd0\ub9cc \uc544\ub2c8\ub77c ",(0,l.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/tools/xplad/commands/"},"Docs"),"\ub97c \ud1b5\ud574 xplad\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ub2e4\uc591\ud55c \uba85\ub839\uc5b4\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}y.isMDXComponent=!0}}]);