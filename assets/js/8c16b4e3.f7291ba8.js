"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[6234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||n;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},44:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={id:"backup",title:"How to Backup Your Avail Validator",sidebar_label:"Backup Your Validator",description:"A comprehensive guide on backup tasks essential for maintaining an Avail Validator.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},i=void 0,l={unversionedId:"operate/validator/backup",id:"operate/validator/backup",title:"How to Backup Your Avail Validator",description:"A comprehensive guide on backup tasks essential for maintaining an Avail Validator.",source:"@site/docs/operate/validator/0040-backup-node.md",sourceDirName:"operate/validator",slug:"/operate/validator/backup",permalink:"/operate/validator/backup",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/validator/0040-backup-node.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1697443636,formattedLastUpdatedAt:"Oct 16, 2023",sidebarPosition:40,frontMatter:{id:"backup",title:"How to Backup Your Avail Validator",sidebar_label:"Backup Your Validator",description:"A comprehensive guide on backup tasks essential for maintaining an Avail Validator.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Stake Your Validator",permalink:"/operate/validator/staking"},next:{title:"Upgrade Your Validator",permalink:"/operate/validator/upgrade"}},s={},p=[{value:"Understanding Validator Directories",id:"understanding-validator-directories",level:2},{value:"Directory Structure",id:"directory-structure",level:3},{value:"Directory Descriptions",id:"directory-descriptions",level:3},{value:"Step 1: Re-Sync or Restore Snapshot",id:"step-1-re-sync-or-restore-snapshot",level:2},{value:"To Re-Sync from Genesis",id:"to-re-sync-from-genesis",level:3},{value:"To Restore a Database Snapshot",id:"to-restore-a-database-snapshot",level:3},{value:"Step 2: Backup Keystore",id:"step-2-backup-keystore",level:2},{value:"To Move Keystore to a Backup Node",id:"to-move-keystore-to-a-backup-node",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"understanding-validator-directories"},"Understanding Validator Directories"),(0,o.kt)("p",null,"Before diving into backup procedures, it's crucial to understand the directory structure of your Avail node."),(0,o.kt)("h3",{id:"directory-structure"},"Directory Structure"),(0,o.kt)("p",null,"The Avail node's directory structure is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2514\u2500\u2500 chains\n    \u2514\u2500\u2500 da_testnet\n        \u2514\u2500\u2500 db\n        \u2514\u2500\u2500 keystore\n        \u2514\u2500\u2500 network\n")),(0,o.kt)("h3",{id:"directory-descriptions"},"Directory Descriptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"db"),": This directory contains the database files, which store blockchain state, transaction history, and other data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"keystore"),": This is where the encrypted key files for your Validator are stored."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"network"),": This directory contains configuration files related to network connectivity and peer management.")),(0,o.kt)("p",null,"You can specify a custom directory using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path")," parameter."),(0,o.kt)("h2",{id:"step-1-re-sync-or-restore-snapshot"},"Step 1: Re-Sync or Restore Snapshot"),(0,o.kt)("h3",{id:"to-re-sync-from-genesis"},"To Re-Sync from Genesis"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"avail purge-chain\n")),(0,o.kt)("h3",{id:"to-restore-a-database-snapshot"},"To Restore a Database Snapshot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop your node."),(0,o.kt)("li",{parentName:"ol"},"Delete existing chain data."),(0,o.kt)("li",{parentName:"ol"},"Download a snapshot from another node."),(0,o.kt)("li",{parentName:"ol"},"Restore the snapshot to the ",(0,o.kt)("inlineCode",{parentName:"li"},"db")," folder.")),(0,o.kt)("admonition",{title:"Warp Sync",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Warp sync will be available in future releases, allowing quicker node setup.")),(0,o.kt)("h2",{id:"step-2-backup-keystore"},"Step 2: Backup Keystore"),(0,o.kt)("h3",{id:"to-move-keystore-to-a-backup-node"},"To Move Keystore to a Backup Node"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure the primary node is offline."),(0,o.kt)("li",{parentName:"ol"},"Transfer the keystore to a backup node that is in sync.")),(0,o.kt)("admonition",{title:"Equivocation Risk",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Never run two nodes with identical keys at the same time to avoid double-signing.")),(0,o.kt)("p",null,"This method is not recommended for routine transitions between nodes. For safer alternatives, consult the ",(0,o.kt)("a",{parentName:"p",href:"/operate/validator/upgrade"},"Upgrading Guide"),"."))}u.isMDXComponent=!0}}]);