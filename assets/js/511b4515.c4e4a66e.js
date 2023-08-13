"use strict";(self.webpackChunkcorsaircoalition_github_io=self.webpackChunkcorsaircoalition_github_io||[]).push([[195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},i="Installation and Setup",l={unversionedId:"setup",id:"setup",title:"Installation and Setup",description:"To run the bot, assemble the bot components discussed in the previous section. This can be accomplished in many ways, but in this section, we will cover the simplest option of running these components using Docker Compose.",source:"@site/docs/2-setup.md",sourceDirName:".",slug:"/setup",permalink:"/setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/introduction"},next:{title:"Python Bot Development",permalink:"/development"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Development: Python",id:"development-python",level:2},{value:"Development: TypeScript",id:"development-typescript",level:2},{value:"Development: Any Other Language",id:"development-any-other-language",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-and-setup"},"Installation and Setup"),(0,a.kt)("p",null,"To run the bot, assemble the bot components discussed in the previous section. This can be accomplished in many ways, but in this section, we will cover the simplest option of running these components using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application\u2019s services. Then, with a single command, you create and start all the services from your configuration.")),(0,a.kt)("p",null,"We wrapped each service in ",(0,a.kt)("a",{parentName:"p",href:"https://opencontainers.org/"},"OCI-compatible images")," using ",(0,a.kt)("a",{parentName:"p",href:"https://alpinelinux.org/about/"},"Alpine Linux"),", which keeps the overhead to a minimum."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Non-Docker Option"),(0,a.kt)("p",null,(0,a.kt)("p",null,"Running these components without Docker requires running each service individually using their individual instructions. This is typically a one-line command but requires ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"NodeJS")," installed in your environment. Once you ensure that you are running the latest version of ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),", open separate terminals for each process and run the services individually. We developed and tested all components with NodeJS version 20."),(0,a.kt)("p",null,"Warning: Do not install NodeJS directly from Ubuntu repositories, since they often tend to be out of date. Use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodesource/distributions"},"NodeSource")," as instructed in the NodeJS official guide."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install"},"Docker Compose"))),(0,a.kt)("p",null,"Warning: Do not install Docker directly from Ubuntu repositories, since they often tend to be out of date. An older version of Docker will cause compatibility issues that are difficult to address. Use the official instructions given at the links above."),(0,a.kt)("p",null,"Use the following commands to test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker version\ndocker compose version\n")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone or download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/CorsairCoalition/docs"},"documentation repository"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/CorsairCoalition/docs\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose-examples")," directory has several examples of docker-compose files that you can use to bring up individual components as a single unit. Select the one or mix-and-match to meet your intended use. Place the docker compose file in your working directory and rename it to ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," for convenience.")),(0,a.kt)("p",null,"For Python bot development, use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.pybot.on.flobot.yml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.pybot.on.pybot.yml"),". This will require you to run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CorsairCoalition/PyBot/"},"PyBot")," separately to provide the bot logic. See the next section for detailed instructions."),(0,a.kt)("p",null,"To run the example implementation in TypeScript, use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.typescript.yml"),". This includes a rudimentary bot that uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CorsairCoalition/ArmadaAssault"},"ArmadaAssault")," to generate actions and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CorsairCoalition/StrategySentinel"},"StrategySentinel")," to select the appropriate action."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# TypeScript Bot Development\ncp docs/docker-compose-examples/docker-compose.typescript.yml docker-compose.yml\n\n# Python Bot Development\ncp docs/docker-compose-examples/docker-compose.pybot.on.flobot.yml docker-compose.yml\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Make a copy of the example configuration file, ",(0,a.kt)("inlineCode",{parentName:"li"},"config.example.json")," and change the ",(0,a.kt)("inlineCode",{parentName:"li"},"userId")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"username")," at a minimum. Change the ",(0,a.kt)("inlineCode",{parentName:"li"},"customGameId")," to your desired room.")),(0,a.kt)("p",null,"Note:  According to the GIO official developer documentation, bot names must start with ",(0,a.kt)("inlineCode",{parentName:"p"},"[Bot]")," and cannot be changed once set."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'cp docs/config.example.json config.json\nsed -i "s/RANDOMLY_GENERATED_STRING/$(openssl rand -base64 12)/" config.json\nsed -i "s/UNIQUE_DISPLAY_NAME/$(openssl rand -base64 12)/" config.json\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start background services. This command will start Docker containers for your framework components except CommanderCortex. CommanderCortex is a terminal-based application that requires total access to the current terminal and is incompatible with ",(0,a.kt)("inlineCode",{parentName:"li"},"docker compose up"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'docker compose up\n\n# Ignore the Redis-related warnings. When you see "READY TO PLAY", continue to the next step.\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open another terminal window and navigate to your working directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute the following command to start CommanderCortex. Ensure that the last part of the command matches the name of the service that you defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run commander-cortex\n")),(0,a.kt)("p",null,"The Commander Cortex UI should appear. You are now ready to play against other bots or humans."),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"In a browser window, navigate to the game lobby, typically at ",(0,a.kt)("inlineCode",{parentName:"li"},"https://bot.generals.io/games/YOUR_CUSTOM_ROOM_NAME"),", and click on ",(0,a.kt)("em",{parentName:"li"},"Spectator")," to observe the game while in progress.")),(0,a.kt)("h2",{id:"development-python"},"Development: Python"),(0,a.kt)("p",null,"To develop the brains of the bot using Python, ensure you use the appropriate docker compose file, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.pybot.on.flobot.yml"),", and then continue to the ",(0,a.kt)("a",{parentName:"p",href:"/development"},"Python Bot Development guide")," on the next page."),(0,a.kt)("h2",{id:"development-typescript"},"Development: TypeScript"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get the component that you want to modify and place it in the same directory."),(0,a.kt)("li",{parentName:"ol"},"Edit ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," - replace ",(0,a.kt)("inlineCode",{parentName:"li"},"image:")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"build:"),"."),(0,a.kt)("li",{parentName:"ol"},"Make desired changes and build a fresh image using ",(0,a.kt)("inlineCode",{parentName:"li"},"docker compose build"),".")),(0,a.kt)("h2",{id:"development-any-other-language"},"Development: Any Other Language"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Parse the config file and use the ",(0,a.kt)("inlineCode",{parentName:"li"},"userId")," string to compute the bot's unique hash, ",(0,a.kt)("inlineCode",{parentName:"li"},"botId"),". The last seven characters of the SHA256 checksum in base64 format represent the hash. The following command will print the unique ",(0,a.kt)("inlineCode",{parentName:"li"},"botId"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"printf YOUR_RANDOMLY_GENERATED_USER_ID | sha256sum | cut -d ' ' -f 1 | xxd -r -p | base64 | head -c 43 | tail -c 7\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"See the TypeScript ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CorsairCoalition/common/blob/master/src/types.d.ts"},"type declaration file")," to understand the underlying data structures.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/resources/clients/"},"Redis client")," to communicate with your Redis instance. Framework components use the following channels to broadcast their updates:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cortex-{botId}-command"),": game start/end instructions to SergeantSocket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cortex-{botId}-state"),": game start/win/loss events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cortex-{botId}-turn"),": turn-by-turn tick updates to synchronize the bot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cortex-{botId}-gameUpdate"),": low-level turn-by-turn game updates; use game state key instead")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cortex-{botId}-recommendation"),": ArmadaAssault uses this to broadcast generated actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cortex-{botId}-action"),": ",(0,a.kt)("strong",{parentName:"p"},"bot logic sends actions here"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Game state is published at each tick to a hash key ",(0,a.kt)("inlineCode",{parentName:"p"},"cortex-{botId}-{gameReplayId}"),"."))))}d.isMDXComponent=!0}}]);