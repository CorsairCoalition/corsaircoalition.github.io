"use strict";(self.webpackChunkcorsaircoalition_github_io=self.webpackChunkcorsaircoalition_github_io||[]).push([[806],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),m=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return t?o.createElement(g,r(r({ref:n},p),{},{components:t})):o.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var m=2;m<i;m++)r[m]=t[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=t(7462),a=(t(7294),t(3905));const i={},r="Python Bot Development",l={unversionedId:"development",id:"development",title:"Python Bot Development",description:"Below, you'll learn how to configure a 1-on-1 match between two python bots. Begin by cloning/downloading the PyBot repository. The remainder of this guide will show you how to update your docker-compose.yml and setup your bots' config.json files.",source:"@site/docs/3-development.md",sourceDirName:".",slug:"/development",permalink:"/development",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Installation and Setup",permalink:"/setup"},next:{title:"Gameplay Data Analysis",permalink:"/analysis"}},s={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Bot configuration (config.pybot*.json)",id:"bot-configuration-configpybotjson",level:3},{value:"gameConfig section",id:"gameconfig-section",level:4},{value:"redisConfig section",id:"redisconfig-section",level:4},{value:"Configuring Docker services (docker-compose.yml)",id:"configuring-docker-services-docker-composeyml",level:3},{value:"Testing your configuration",id:"testing-your-configuration",level:3},{value:"Implementing your own bot",id:"implementing-your-own-bot",level:2},{value:"Running from an IDE",id:"running-from-an-ide",level:3},{value:"Running from the terminal",id:"running-from-the-terminal",level:3},{value:"Example bots",id:"example-bots",level:2},{value:"Random Bot (example_randombot.py)",id:"random-bot-example_randombotpy",level:3},{value:"PathFinderBot Bot (example_pathfinderbot.py)",id:"pathfinderbot-bot-example_pathfinderbotpy",level:3},{value:"Flobot (example_flobot.py)",id:"flobot-example_flobotpy",level:3}],p={toc:m},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-bot-development"},"Python Bot Development"),(0,a.kt)("p",null,"Below, you'll learn how to configure a 1-on-1 match between two python bots. Begin by cloning/downloading the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CorsairCoalition/PyBot"},"PyBot")," repository. The remainder of this guide will show you how to update your ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and setup your bots' config.json files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/CorsairCoalition/PyBot\n")),(0,a.kt)("p",null,"The directory structure should look like this when you're finished following this guide:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u251c\u2500\u2500 CorsairCoalition/\n\u2502 \u251c\u2500\u2500 docs/\n\u2502 \u2502 \u251c\u2500\u2500 images/\n\u2502 \u2502 \u251c\u2500\u2500 ... \n\u2502 \u2502 \u2514\u2500\u2500 docker-compose.yml\n\u2502 \u251c\u2500\u2500 PyBot/\n\u2502 \u2502 \u251c\u2500\u2500 ggbot/\n| | \u2514\u2500\u2500 example_afkbot.py\n\u2502 \u251c\u2500\u2500 config.pybot1.json\n\u2502 \u2514\u2500\u2500 config.pybot2.json\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You will need to create a config for each bot and reference them in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". "),(0,a.kt)("h3",{id:"bot-configuration-configpybotjson"},"Bot configuration (config.pybot*.json)"),(0,a.kt)("p",null,"Each bot needs its own configuration file. These config files are in JSON format and provide the bot several important pieces of information, namely how to connect to Redis, unique user Id, unique user name, and the game server URL. "),(0,a.kt)("p",null,"Here's an example configuration from ",(0,a.kt)("inlineCode",{parentName:"p"},"config.pybot1.json")," (c.f. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CorsairCoalition/docs/blob/main/config.json.example"},"GitHub"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "gameConfig": {\n        "GAME_SERVER_URL": "wss://botws.generals.io/",\n        "MAX_TURNS": 5000,\n        "BOT_ID_PREFIX": "cortex",\n        "userId": "Choose a Random String",\n        "username": "[Bot] Choose a Bot Name",\n        "customGameId": "pybot",\n        "customGameSpeed": 4,\n        "warCry": [\n            "Beep bop blop!",\n            "Learn more at CorsairCoalition.github.io"\n        ]\n    },\n    "redisConfig": {\n        "HOST": "localhost",\n        "PORT": 6379,\n        "TLS": false,\n        "EXPIRATION_TIME": 31536000,\n        "USERNAME": "",\n        "PASSWORD": ""\n    }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!important]","\nYou must provide a unique ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," for each bot!")),(0,a.kt)("h4",{id:"gameconfig-section"},"gameConfig section"),(0,a.kt)("p",null,"The game configuration parameters are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GAME_SERVER_URL"),": the server to which you are connecting. Unless you use a local server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_TURNS"),": The GG Framework will terminate the game if it lasts this many turns. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BOT_ID_PREFIX"),": Redis will store all messages from this bot in a key-value store with this prefix"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userId"),":  The UUID for this bot. This string must be unique across all bots and is paired with a unique username"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"username"),': The (unique) bot name displayed during matches on the GIO servers. This MUST begin with the "',"[Bot]",' " tag.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"customGameId"),": This is the name of the custom room your bot will join. By default, you can spectate at ",(0,a.kt)("a",{parentName:"li",href:"https://bot.generals.io/games/customGameId"},"https://bot.generals.io/games/customGameId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"customGameSpeed"),": An number from ","[","0.25, 0.5, 0.75, 1, 2, 3, 4]. The server tick rate will be mulitplied by this factor. By default, the servers execute 2 game ticks per second. For instance, if ",(0,a.kt)("inlineCode",{parentName:"li"},"customGameSpeed")," is set to 4, the server will process $2\\times 4=8$ ticks per second.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!note]","\nOnly the lobby Host can change the custom game speed. If a human joins before a bot, the default game speed (1x) is used. You can adjust this by selecting 'Game' on the lobby screen, and choosing the desired Game Speed.")),(0,a.kt)("h4",{id:"redisconfig-section"},"redisConfig section"),(0,a.kt)("p",null,"This section of the config should only be changed if you are connecting to a remote instance of Redis. For local connections, the ",(0,a.kt)("inlineCode",{parentName:"p"},"USERNAME")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PASSWORD")," fields must be blank (as shown above)."),(0,a.kt)("h3",{id:"configuring-docker-services-docker-composeyml"},"Configuring Docker services (docker-compose.yml)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/08_using_compose"},"Docker Compose")," is a tool that helps define and share multi-container applications. The yml file included with the GG Framework defines the services available and with a single command, you can spin up everything, spin up only certain services, or tear it all down. "),(0,a.kt)("p",null,"In the GG Framework, Sergeant-Socket, Commander-Cortex, and Redis are all spun-up according to the configuration in the yml file. Here's an example yml that is suitable for running two python bots against one another:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"services:\n  \n  # Define the Redis service and expose the localhost's port\n  #\n  redis:\n    image: redis:alpine\n    ports:\n      - \"6379:6379\"\n  \n  # Define first bot's SergeantSocket and CommanderCortex services\n  # Both services use config.pybot1.json\n  #\n  sergeant-socket-1:\n    container_name: sergeant-socket-Pybot1\n    image: ghcr.io/corsaircoalition/sergeantsocket:latest\n    volumes: \n      - ../config.pybot1.json:/config.json # 1!\n    depends_on:\n      - redis\n    environment:\n      REDIS_HOST: redis\n  \n  commander-cortex-1:\n    profiles: \n      - ui\n    image: ghcr.io/corsaircoalition/commandercortex:latest\n    volumes:\n      - ../config.pybot1.json:/config.json # 1!\n    depends_on:\n      - redis\n    environment:\n      REDIS_HOST: redis\n    stdin_open: true\n    tty: true\n  \n  # Define second bot's SergeantSocket and CommanderCortex services\n  # Both services use config.pybot2.json\n  #\n  sergeant-socket-2:\n    container_name: sergeant-socket-Pybot2\n    image: ghcr.io/corsaircoalition/sergeantsocket:latest\n    volumes: \n      - ../config.pybot2.json:/config.json  # 2!\n    depends_on:\n      - redis\n    environment:\n      REDIS_HOST: redis\n  \n  commander-cortex-2:\n    profiles:\n      - ui\n    image: ghcr.io/corsaircoalition/commandercortex:latest\n    volumes:\n      - ../config.pybot2.json:/config.json # 2!\n    depends_on:\n      - redis\n    environment:\n      REDIS_HOST: redis\n    stdin_open: true\n    tty: true\n\n")),(0,a.kt)("p",null,"Although a deep-dive into Docker yml format is outside the scope of this guide, a few points are helpful for beginners:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unlike other formats that define key:value pairs, docker yml format uses value:key ordering. For instance, the CommanderCortex looks for a ",(0,a.kt)("inlineCode",{parentName:"li"},"/config.json")," (the key), and the services look to ",(0,a.kt)("inlineCode",{parentName:"li"},"../config.pybot*.json")," for its content (the value)."),(0,a.kt)("li",{parentName:"ul"},"It's best to run CommanderCortex in its own terminal since it is a UI app whose interface would be disturbed by terminal outputs from Redis and SergeantSocket. By adding ",(0,a.kt)("inlineCode",{parentName:"li"},"profiles: - ui"),"  to the CommanderCortex services, docker will not start those services when we run ",(0,a.kt)("inlineCode",{parentName:"li"},"docker compose up"),"; it'll wait until we explicitly use ",(0,a.kt)("inlineCode",{parentName:"li"},"docker compose run commander-cortex-1")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"docker compose run commander-cortex-2"),", which we can do from a separate terminal.")),(0,a.kt)("h3",{id:"testing-your-configuration"},"Testing your configuration"),(0,a.kt)("p",null,"You'll now test your configuration by starting a match between an AFK bot and Flobot. "),(0,a.kt)("p",null,"Assuming your folder structure matches the one above (see [","[# Configuring for Development]","]), open a terminal, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"CommanderCortex/docs/")," directory, and run the following to start Redis and start one instance of SergeantSocket for each of your bots:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose up\n")),(0,a.kt)("p",null,'You can safely ignore the Redis-related warnings. When you see "',(0,a.kt)("inlineCode",{parentName:"p"},"[READY TO PLAY]"),'", continue to the next step. '),(0,a.kt)("p",null,"Now run each of the following commands in their own terminal:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Terminal 1:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run commander-cortex-1\n"))),(0,a.kt)("li",{parentName:"ol"},"Terminal 2: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose run commander-cortex-2\n")))),(0,a.kt)("p",null,"Finally, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"CorsairCoalition/PyBot/")," directory and run the following commands in their own terminals:"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Terminal 3:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python example_afkbot.py -c config.pybot1.json\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Terminal 4: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python example_flobot.py -c config.pybot2.json\n")))),(0,a.kt)("h2",{id:"implementing-your-own-bot"},"Implementing your own bot"),(0,a.kt)("p",null,"Implementing your own bot begins by subclassing PythonBot from ggbot.core.\nThe only method you ",(0,a.kt)("strong",{parentName:"p"},"must")," override is ",(0,a.kt)("inlineCode",{parentName:"p"},"do_turn()"),".\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from ggbot.core import PythonBot\n\nclass MyFirstBot(PythonBot):\n\n    def do_turn(self) -> None:\n        # implement your bot's code below\n")),(0,a.kt)("p",null,'You can safely ignore the Redis-related warnings. When you see "',(0,a.kt)("inlineCode",{parentName:"p"},"[READY TO PLAY]"),'", continue to the next step. '),(0,a.kt)("p",null,"Access game state via your bot's ",(0,a.kt)("inlineCode",{parentName:"p"},"self.game")," field. See the source code comments for more details."),(0,a.kt)("p",null,"To connect your bot to the rest of the framework, you'll need to configure it properly. The easiest way to do this is to read in the config.json, and there's two utility methods to accomplish this: ",(0,a.kt)("inlineCode",{parentName:"p"},"ggbot.utils.get_config_from_file(file_path)")," designed to help run bots from within an IDE, and ",(0,a.kt)("inlineCode",{parentName:"p"},"ggbot.utils.get_config_from_cmdline_args()")," designed to help run bots from the command line."),(0,a.kt)("h3",{id:"running-from-an-ide"},"Running from an IDE"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ggbot.utils.get_config_from_file(file_path)")," method uses a path string to read the config file. This is helpful when actively debugging within an IDE. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if __name__ == \"__main__\":\n    config = ggbot.utils.get_config_from_file('config.json')\n    MyFirstBot().with_config(config).run()\n")),(0,a.kt)("h3",{id:"running-from-the-terminal"},"Running from the terminal"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ggbot.utils.get_config_from_cmdline_args()")," method allows you to specify the path to the config via command line arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'if __name__ == "__main__":\n    config = ggbot.utils.get_config_from_cmdline_args()\n    MyFirstBot().with_config(config).run()\n')),(0,a.kt)("p",null,"Then run your bot from the terminal with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python example_afkbot.py -c config.json\n")),(0,a.kt)("h2",{id:"example-bots"},"Example bots"),(0,a.kt)("p",null,"The GG Framework comes with several example bots that can help users get started.\nThey are defined in several ",(0,a.kt)("inlineCode",{parentName:"p"},"example_*.py")," files, discussed below"),(0,a.kt)("h3",{id:"random-bot-example_randombotpy"},"Random Bot (example_randombot.py)"),(0,a.kt)("p",null,"The Random Bot chooses a valid army at random and moves it to a randomly selected adjacent tile. Unlike the AFK bot which makes no moves, the Random Bot will issue movements using the ",(0,a.kt)("inlineCode",{parentName:"p"},"move()")," method. For your own bots, know that multiple calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"move()")," can be issued in a single turn, and the moves will be handled in the order they arrive."),(0,a.kt)("h3",{id:"pathfinderbot-bot-example_pathfinderbotpy"},"PathFinderBot Bot (example_pathfinderbot.py)"),(0,a.kt)("p",null,"The PathFinder Bot demonstates how to use the multi-target aStar algorithm to obtain a sequence of moves along a path. At regular intervals (every 12 game ticks) it picks its largest army and moves it to a randomly selected tile on the board. It also performs some simple checks to ensure a previous move is not still underway and that it is moving an army with a strength >1. "),(0,a.kt)("p",null,"For convenience, a PythonBot can enqueue the entire path selected by aStar using the ",(0,a.kt)("inlineCode",{parentName:"p"},"queue_moves()")," method. This will treat neighboring tile indices in the list as the start and end of consecutive moves. For instance, ",(0,a.kt)("inlineCode",{parentName:"p"},"queue_moves([1, 2, 3, 19])")," is equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"move(1,2)\nmove(2,3)\nmove(3,19)\n")),(0,a.kt)("h3",{id:"flobot-example_flobotpy"},"Flobot (example_flobot.py)"),(0,a.kt)("p",null,"This is a Python port of Flobot, an example of a much more complex bot. The ",(0,a.kt)("inlineCode",{parentName:"p"},"do_turn()")," method is remarkably simple because its logic is relegated to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Strategy")," class whose ",(0,a.kt)("inlineCode",{parentName:"p"},"pick_strategy()")," method determines which actions to take:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def pick_strategy(bot: 'FloBot'):\n    if bot.game.enemy_general != -1: # enemy general is visible!\n        Strategy.end_game(bot)\n    elif bot.is_infiltrating:\n        Infiltrate.infiltrate(bot)\n    elif Strategy.is_spread_needed(bot):\n        Spread.spread(bot)\n    elif bot.game.tick < Strategy.REINFORCEMENT_INTERVAL:\n        Strategy.early_game(bot, bot.game.tick)\n    else:\n        Strategy.mid_game(bot, bot.game.tick)\n")),(0,a.kt)("p",null,"In addition to exploring Flobot's strategy classes (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"Collect"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Discover"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Infiltrate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RushGeneral"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Spread"),"), new users of the GG Framework should also explore its ",(0,a.kt)("inlineCode",{parentName:"p"},"Heuristics")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FloAlgorithm")," classes. These classes showcase many ways to interact with the bot's ",(0,a.kt)("inlineCode",{parentName:"p"},"GameInstance")," field via ",(0,a.kt)("inlineCode",{parentName:"p"},"self.game"),"."))}d.isMDXComponent=!0}}]);