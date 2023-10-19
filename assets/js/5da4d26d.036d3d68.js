"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[2639],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),v=r,m=u["".concat(d,".").concat(v)]||u[v]||c[v]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=v;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},8854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(4996);const l={id:"already-running-full-node",title:"Already Running a Full Node?",sidebar_label:"Already Running a Full Node",description:"Learn about running an Avail validator using binaries.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},i=void 0,o={unversionedId:"operate/validator/already-running-full-node",id:"operate/validator/already-running-full-node",title:"Already Running a Full Node?",description:"Learn about running an Avail validator using binaries.",source:"@site/docs/operate/validator/0000-already-running-full-node.md",sourceDirName:"operate/validator",slug:"/operate/validator/already-running-full-node",permalink:"/operate/validator/already-running-full-node",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/validator/0000-already-running-full-node.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1697443636,formattedLastUpdatedAt:"Oct 16, 2023",sidebarPosition:0,frontMatter:{id:"already-running-full-node",title:"Already Running a Full Node?",sidebar_label:"Already Running a Full Node",description:"Learn about running an Avail validator using binaries.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Become a Validator",permalink:"/category/become-a-validator"},next:{title:"Run a Validator Node",permalink:"/category/run-a-validator-node"}},d={},s=[{value:"Step 1. Stop Your Full Node",id:"step-1-stop-your-full-node",level:2},{value:"Step 2. Purge the Database",id:"step-2-purge-the-database",level:2},{value:"Step 3. Update Command Line Flags",id:"step-3-update-command-line-flags",level:2},{value:"Step 4. Update Systemd Service File",id:"step-4-update-systemd-service-file",level:2},{value:"Step 5. Restart the Service",id:"step-5-restart-the-service",level:2},{value:"Step 6. Verify Role",id:"step-6-verify-role",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you're already running a full node and wish to transition to a validator node, please note that simply adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--validator")," flag after your full node has synced will result in an error expecting an archive database. Follow the steps below to make the switch."),(0,r.kt)("h2",{id:"step-1-stop-your-full-node"},"Step 1. Stop Your Full Node"),(0,r.kt)("p",null,"Before making any changes, safely stop your running full node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop avail-node.service  # Replace 'avail-node.service' with your service name if different\n")),(0,r.kt)("h2",{id:"step-2-purge-the-database"},"Step 2. Purge the Database"),(0,r.kt)("p",null,"Since adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--validator")," flag after syncing expects an archive database, you'll need to purge the existing database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Replace the path with your actual data path\nrm -rf /path/to/your/data/directory\n")),(0,r.kt)("h2",{id:"step-3-update-command-line-flags"},"Step 3. Update Command Line Flags"),(0,r.kt)("p",null,"Modify the command line used for running your full node to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"--validator")," flag."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./data-avail --validator \\\n    --port 30333 \\\n    --base-path `pwd`/data \\\n    --chain `pwd`/chainspec.raw.json\n")),(0,r.kt)("h2",{id:"step-4-update-systemd-service-file"},"Step 4. Update Systemd Service File"),(0,r.kt)("p",null,"If you were running your full node as a systemd service, update the service file to reflect the new command\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"--validator")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/avail-node.service  # Replace 'avail-node.service' with your service name if different\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update the ",(0,r.kt)("inlineCode",{parentName:"li"},"ExecStart")," line with the new command."),(0,r.kt)("li",{parentName:"ul"},"Save and exit the editor.")),(0,r.kt)("h2",{id:"step-5-restart-the-service"},"Step 5. Restart the Service"),(0,r.kt)("p",null,"Restart the systemd service to apply the changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start avail-node.service  # Replace 'avail-node.service' with your service name if different\n")),(0,r.kt)("h2",{id:"step-6-verify-role"},"Step 6. Verify Role"),(0,r.kt)("p",null,"Once your node is up and running, verify that the role displays as ",(0,r.kt)("strong",{parentName:"p"},'"Authority,"')," confirming that you are now running a validator node."))}c.isMDXComponent=!0}}]);