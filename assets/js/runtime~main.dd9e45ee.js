(()=>{"use strict";var e,a,f,t,r,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=c,b.c=d,b.amdD=function(){throw new Error("define cannot be used indirect")},b.amdO={},e=[],b.O=(a,f,t,r)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,o=0;o<f.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,f({}),f([]),f(f)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",241:"52c87ca6",455:"f09fe0b7",1030:"a2838d92",1098:"10b23cb8",1186:"4f6f0beb",1275:"2a2808db",1608:"4b243dd3",2129:"28636581",2841:"7427411b",3065:"6234ba91",3237:"1df93b7f",3331:"0c260f1b",3727:"4cedd794",4021:"165643b6",4069:"9f8cf10a",4536:"44c21b18",4736:"eb1f62b8",5315:"fbacb533",5357:"e6436836",5901:"5361f80c",5914:"a9a7529f",6328:"71f399eb",6491:"617d15e7",6500:"53b3e819",6775:"52d401e3",7489:"b818f989",7680:"f8c209f7",7878:"5829772f",7918:"17896441",7920:"1a4e3797",8144:"ada441a0",8195:"22f23b28",8461:"331ecaca",8892:"77d752b9",9124:"c39725bf",9246:"e9f584e4",9343:"85285894",9371:"23817683",9514:"1be78505",9629:"a4a647f9",9817:"14eb3368",9956:"68efa075"}[e]||e)+"."+{53:"3e020514",241:"cf0af9d5",455:"63e5302f",614:"730790ce",1030:"8c20a653",1098:"07d7fb3f",1186:"12d02bdb",1275:"e4059d52",1608:"fd4ccf94",2129:"e1308e11",2191:"5050c726",2841:"4a1c5add",3065:"e3f46e67",3237:"49d8dfd0",3331:"86a5cd30",3727:"7989d646",3946:"f5659a6f",4021:"7215a054",4069:"8681f8f6",4536:"f326ef82",4736:"1241dba4",4965:"42392e0f",4972:"cd65050e",5199:"7a5c5fd7",5315:"936a79d9",5357:"8b5d2e38",5525:"f43b0435",5901:"b2cf760a",5914:"5ca9af33",6316:"d739c12a",6328:"213c7d3f",6393:"fae58590",6491:"545d81f3",6500:"e4748327",6775:"954f505c",7096:"03c0fe93",7192:"2029042a",7489:"50ed74d4",7680:"f120aa48",7724:"55c9d2c6",7878:"1da9671c",7918:"6755079f",7920:"34e76c18",8144:"0e93f355",8195:"7b132631",8443:"3bb62e12",8461:"551bf405",8548:"28c6cd1c",8892:"c827fa7f",9124:"fa0cde4d",9246:"5da623e5",9343:"ab5322d0",9371:"2c83a1e8",9487:"33e884df",9514:"ab353872",9629:"945973fb",9817:"23c13e78",9956:"24facc5c"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="xpla-academy:",b.l=(e,a,f,c)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+f){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+f),d.src=e),t[e]=[a];var u=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/",b.gca=function(e){return e={17896441:"7918",23817683:"9371",28636581:"2129",85285894:"9343","935f2afb":"53","52c87ca6":"241",f09fe0b7:"455",a2838d92:"1030","10b23cb8":"1098","4f6f0beb":"1186","2a2808db":"1275","4b243dd3":"1608","7427411b":"2841","6234ba91":"3065","1df93b7f":"3237","0c260f1b":"3331","4cedd794":"3727","165643b6":"4021","9f8cf10a":"4069","44c21b18":"4536",eb1f62b8:"4736",fbacb533:"5315",e6436836:"5357","5361f80c":"5901",a9a7529f:"5914","71f399eb":"6328","617d15e7":"6491","53b3e819":"6500","52d401e3":"6775",b818f989:"7489",f8c209f7:"7680","5829772f":"7878","1a4e3797":"7920",ada441a0:"8144","22f23b28":"8195","331ecaca":"8461","77d752b9":"8892",c39725bf:"9124",e9f584e4:"9246","1be78505":"9514",a4a647f9:"9629","14eb3368":"9817","68efa075":"9956"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var c=b.p+b.u(a),d=new Error;b.l(c,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,c=f[0],d=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(f);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},f=self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();