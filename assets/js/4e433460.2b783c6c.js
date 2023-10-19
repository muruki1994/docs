"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[783],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9055:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));a(4996);const i={id:"docker",title:"How to Run a Validator Node using Docker",sidebar_label:"Using Docker",description:"Learn about running an Avail validator using Docker.",keywords:["docs","avail","node","docker","validator","data availability"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},o=void 0,l={unversionedId:"operate/validator/docker",id:"operate/validator/docker",title:"How to Run a Validator Node using Docker",description:"Learn about running an Avail validator using Docker.",source:"@site/docs/operate/validator/0020-validator-node-docker.md",sourceDirName:"operate/validator",slug:"/operate/validator/docker",permalink:"/operate/validator/docker",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/validator/0020-validator-node-docker.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1697443636,formattedLastUpdatedAt:"Oct 16, 2023",sidebarPosition:20,frontMatter:{id:"docker",title:"How to Run a Validator Node using Docker",sidebar_label:"Using Docker",description:"Learn about running an Avail validator using Docker.",keywords:["docs","avail","node","docker","validator","data availability"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Using Binaries",permalink:"/operate/validator/binaries"},next:{title:"Stake Your Validator",permalink:"/operate/validator/staking"}},s={},d=[{value:"Preliminaries",id:"preliminaries",level:2},{value:"Run a Validator Node",id:"run-a-validator-node",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"preliminaries"},"Preliminaries"),(0,r.kt)("p",null,"Validator nodes hold a pivotal role in maintaining network integrity by staking real-value tokens. Successfully managing a validator comes with a comprehensive grasp of node operations, hardware configuration, and constant vigilance. Validators face the potential consequences of penalties, such as slashing, for infractions like extended periods of offline activity or equivocation. This responsibility underscores the need for a profound understanding of the associated risks."),(0,r.kt)("admonition",{title:"System administration",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"While Avail is currently in its testnet phase, running validator nodes requires significant system administration expertise.")),(0,r.kt)("p",null,"Becoming a validator is a significant responsibility because mistakes or errors can jeopardize not just your tokens but also your reputation, given your role in managing both your stake and that of your nominators. Despite these challenges, it offers a rewarding chance to enhance network security and be incentivized."),(0,r.kt)("admonition",{title:"Onboarding",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please join the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/y6fHnxZQX8"},(0,r.kt)("ins",null,"Avail Discord"))," for up-to-date information on the Kate Testnet and\nvalidator onboarding.")),(0,r.kt)("h2",{id:"run-a-validator-node"},"Run a Validator Node"),(0,r.kt)("p",null,"Run the following commands to launch your Avail node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /mnt/avail\n\nsudo docker run -v $(pwd)/state:/da/state:rw -v $(pwd)/keystore:/da/keystore:rw -e DA_CHAIN=kate -e DA_NAME=kate-docker-avail-Node -p 0.0.0.0:30333:30333 -p 9615:9615 -p 9933:9933 -d --restart unless-stopped availj/avail:v1.7.1\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Docker command performs several important steps:")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Navigating to ",(0,r.kt)("inlineCode",{parentName:"li"},"/mnt/avail")," to ensure we're in the correct directory."),(0,r.kt)("li",{parentName:"ul"},"Mapping ",(0,r.kt)("inlineCode",{parentName:"li"},"/mnt/avail/state")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"/da/state")," and granting read-write permissions to ensure data persistence, even if the container crashes."),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"DA_CHAIN")," to specify the kate chainspec."),(0,r.kt)("li",{parentName:"ul"},"Setting ",(0,r.kt)("inlineCode",{parentName:"li"},"DA_NAME")," as the name of your node; in our example, it's ",(0,r.kt)("inlineCode",{parentName:"li"},"kate-docker-avail-Node"),"."),(0,r.kt)("li",{parentName:"ul"},"Utilizing port ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"30333"))," for public P2P connections, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"9615"))," for the Prometheus metrics endpoint, and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"9933"))," for the HTTP RPC port. For WebSocket, add port ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"9944")),"."),(0,r.kt)("li",{parentName:"ul"},"Using an image from the Avail Docker Hub repository."),(0,r.kt)("li",{parentName:"ul"},"Adding any desired node flags after the image name, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"--rpc"),"."))),(0,r.kt)("p",null,"Inspect the Docker logs to verify that the node is functioning as expected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ubuntu:/mnt/avail# docker ps\nCONTAINER ID   IMAGE                     COMMAND            CREATED         STATUS         PORTS                                                                                                            NAMES\n5b3978de8f35   availj/avail:v1.6.2-rc1   "/entrypoint.sh"   6 minutes ago   Up 6 minutes   0.0.0.0:9615->9615/tcp, :::9615->9615/tcp, 0.0.0.0:9933->9933/tcp, 0.0.0.0:30333->30333/tcp, :::9933->9933/tcp   relaxed_wilson\nubuntu:/mnt/avail# docker logs 5b3978de8f35\n# 5b3978de8f35 is the container id\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'2023-08-21 08:29:55 Avail Node\n2023-08-21 08:29:55 \u270c\ufe0f  version 1.6.2-bb4cc104b25\n2023-08-21 08:29:55 \u2764\ufe0f  by Anonymous, 2017-2023\n2023-08-21 08:29:55 \ud83d\udccb Chain specification: Avail Kate Testnet\n2023-08-21 08:29:55 \ud83c\udff7  Node name: kate-docker-avail-Node\n2023-08-21 08:29:55 \ud83d\udc64 Role: FULL\n2023-08-21 08:29:55 \ud83d\udcbe Database: RocksDb at /da/state/chains/Avail Testnet_116d7474-0481-11ee-bc2a-7bfc086be54e/db/full\n2023-08-21 08:29:55 \u26d3  Native runtime: data-avail-11 (data-avail-0.tx1.au11)\n2023-08-21 08:30:04 \ud83c\udff7  Local node identity is: 12D3KooWEdgyAtH8ZCU8ScTx1hx5NWh4gmDGNcedtLxrJ1htSeBe\n2023-08-21 08:30:04 Prometheus metrics extended with avail metrics\n2023-08-21 08:30:04 \ud83d\udcbb Operating system: linux\n2023-08-21 08:30:04 \ud83d\udcbb CPU architecture: x86_64\n2023-08-21 08:30:04 \ud83d\udcbb Target environment: gnu\n2023-08-21 08:30:04 \ud83d\udcbb CPU: Intel(R) Xeon(R) Platinum 8175M CPU @ 2.50GHz\n2023-08-21 08:30:04 \ud83d\udcbb CPU cores: 1\n2023-08-21 08:30:04 \ud83d\udcbb Memory: 7835MB\n2023-08-21 08:30:04 \ud83d\udcbb Kernel: 5.15.0-1040-aws\n2023-08-21 08:30:04 \ud83d\udcbb Linux distribution: Debian GNU/Linux 11 (bullseye)\n2023-08-21 08:30:04 \ud83d\udcbb Virtual machine: yes\n2023-08-21 08:30:04 \ud83d\udce6 Highest known block at #9150\n2023-08-21 08:30:04 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2023-08-21 08:30:04 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]\n2023-08-21 08:30:04 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]\n2023-08-21 08:30:04 \ud83c\udfc1 CPU score: 671.55 MiBs\n2023-08-21 08:30:04 \ud83c\udfc1 Memory score: 4.47 GiBs\n2023-08-21 08:30:04 \ud83c\udfc1 Disk score (seq. writes): 339.36 MiBs\n2023-08-21 08:30:04 \ud83c\udfc1 Disk score (rand. writes): 62.48 MiBs\n2023-08-21 08:30:05 \ud83d\udd0d Discovered new external address for our node: /ip4/13.53.42.153/tcp/30333/ws/p2p/12D3KooWEdgyAtH8ZCU8ScTx1hx5NWh4gmDGNcedtLxrJ1htSeBe2023-08-21 08:30:09 \u2699\ufe0f  Syncing, target=#326624 (15 peers), best: #9406 (0x875e\u2026c887), finalized #9317 (0x37b6\u202628ff), \u2b07 321.9kiB/s \u2b06 30.1kiB/s\n2023-08-21 08:30:14 \u2699\ufe0f  Syncing 64.4 bps, target=#326624 (15 peers), best: #9728 (0xb4fe\u2026e318), finalized #9317 (0x37b6\u202628ff), \u2b07 40.2kiB/s \u2b06 1.8kiB/s\n')),(0,r.kt)("p",null,"Your node will also appear on the ",(0,r.kt)("a",{parentName:"p",href:"http://telemetry.avail.tools/"},"Avail Telemetry"),'\nwebsite, listed under the "Node name" displayed in the node command output. Be sure\nto select the appropriate network tab at the top corresponding to the network you\'ve\njoined.'))}u.isMDXComponent=!0}}]);