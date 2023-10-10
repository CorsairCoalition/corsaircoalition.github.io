"use strict";(self.webpackChunkcorsaircoalition_github_io=self.webpackChunkcorsaircoalition_github_io||[]).push([[829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={},a="Contribution Guide",l={unversionedId:"contributing",id:"contributing",title:"Contribution Guide",description:"Future Work Opportunities",source:"@site/docs/5-contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Resources",permalink:"/resources"}},u={},s=[{value:"Future Work Opportunities",id:"future-work-opportunities",level:2},{value:"Offline Play",id:"offline-play",level:3},{value:"Reinforcement Learning",id:"reinforcement-learning",level:3},{value:"Adapters or IO modules for other games",id:"adapters-or-io-modules-for-other-games",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Support",id:"support",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribution-guide"},"Contribution Guide"),(0,o.kt)("h2",{id:"future-work-opportunities"},"Future Work Opportunities"),(0,o.kt)("h3",{id:"offline-play"},"Offline Play"),(0,o.kt)("p",null,"This framework relies on the Generals.io allowing access the game server. The game engine is not open source and there is no guaranteed availability over the long run. There are several free and open source projects that aim to create a version of the game engine suitable for offline play. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GenniaApp/GenniaServer2"},"Gennia")," is the best available game engine as of this writing. Integration with an offline game engine would allow ML model training and development at scale."),(0,o.kt)("h3",{id:"reinforcement-learning"},"Reinforcement Learning"),(0,o.kt)("p",null,"Most of the example bots are driven by heuristics. An RL bot can adjusts its moves based on the adversary and terrain, which presents a great research opportunity."),(0,o.kt)("h3",{id:"adapters-or-io-modules-for-other-games"},"Adapters or IO modules for other games"),(0,o.kt)("p",null,"Our framework is highly modular. While ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CorsairCoalition/SergeantSocket"},"SergeantSocket")," connects directly to the GIO servers, the rest of the framework is decoupled from the data format and inner workings GIO. Any map-based game that follows similar rules can be played using this framework by developing an IO module (adapter) for that game."),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,o.kt)("p",null,"We adhere to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.contributor-covenant.org/"},"Contributor Covenant Code of Conduct"),"."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Join us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/QP63V5Y"},"Discord: generals.io")," (#botting channel) or contact us through ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CorsairCoalition"},"GitHub"),"."))}d.isMDXComponent=!0}}]);