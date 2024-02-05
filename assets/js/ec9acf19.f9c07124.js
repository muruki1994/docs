"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[9868],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(a),k=i,m=u["".concat(s,".").concat(k)]||u[k]||c[k]||o;return a?n.createElement(m,r(r({ref:e},p),{},{components:a})):n.createElement(m,r({ref:e},p))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6178:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));a(4996);const o={id:"staking",title:"How to Stake Your Validator",sidebar_label:"Stake Your Validator",description:"Learn about running an Avail validator using binaries.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,l={unversionedId:"operate/validator/staking",id:"operate/validator/staking",title:"How to Stake Your Validator",description:"Learn about running an Avail validator using binaries.",source:"@site/docs/operate/validator/0035-staking.md",sourceDirName:"operate/validator",slug:"/operate/validator/staking",permalink:"/operate/validator/staking",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/validator/0035-staking.md",tags:[],version:"current",lastUpdatedBy:"Marko Petrlic",lastUpdatedAt:1706234107,formattedLastUpdatedAt:"Jan 26, 2024",sidebarPosition:35,frontMatter:{id:"staking",title:"How to Stake Your Validator",sidebar_label:"Stake Your Validator",description:"Learn about running an Avail validator using binaries.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Session Keys",permalink:"/operate/validator/session-keys"},next:{title:"Backup Your Validator",permalink:"/operate/validator/backup"}},s={},d=[{value:"Step 1: Prepare for Staking",id:"step-1-prepare-for-staking",level:2},{value:"Create Avail Accounts",id:"create-avail-accounts",level:3},{value:"Bond Your Funds",id:"bond-your-funds",level:3},{value:"Submit Session Keys",id:"submit-session-keys",level:3},{value:"Step 3: Register as a Validator",id:"step-3-register-as-a-validator",level:2},{value:"Step 4: Start Validation",id:"step-4-start-validation",level:2},{value:"Verify Validator Status",id:"verify-validator-status",level:3},{value:"Monitor Validator in Action",id:"monitor-validator-in-action",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},u="wrapper";function c(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide offers a step-by-step walkthrough on how to stake your Avail validator.\nIt covers essential steps such as bonding your funds, managing session keys, and initiating the validation process."),(0,i.kt)("admonition",{title:"Before you start",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This chapter continues from the 'Session Keys' page, so be sure to read that one before proceeding with this one.")),(0,i.kt)("h2",{id:"step-1-prepare-for-staking"},"Step 1: Prepare for Staking"),(0,i.kt)("p",null,"Before you can become an active validator, you need to bond your funds to your node. This involves creating two separate Avail accounts: a ",(0,i.kt)("inlineCode",{parentName:"p"},"stash")," account for holding your funds and a ",(0,i.kt)("inlineCode",{parentName:"p"},"controller")," account for managing staking actions."),(0,i.kt)("h3",{id:"create-avail-accounts"},"Create Avail Accounts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the Goldberg network explorer at ",(0,i.kt)("a",{parentName:"li",href:"https://goldberg.avail.tools/"},(0,i.kt)("ins",null,"goldberg.avail.tools")),"."),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"stash")," and a ",(0,i.kt)("inlineCode",{parentName:"li"},"controller")," account. The ",(0,i.kt)("inlineCode",{parentName:"li"},"stash")," account should ideally be a cold wallet, while the ",(0,i.kt)("inlineCode",{parentName:"li"},"controller")," can be a hot wallet.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The controller key is responsible for managing staking activities and executing transactions,\nincluding the payment of transaction fees."),(0,i.kt)("li",{parentName:"ul"},"The stash key primarily safeguards your funds and should ideally be stored in a cold wallet or\nkept offline. It is not recommended to use the stash key for routine account activities like submitting\nextrinsics.")))),(0,i.kt)("li",{parentName:"ol"},"Ensure both accounts have sufficient funds to cover transaction fees.")),(0,i.kt)("admonition",{title:"Funding Accounts",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Keep the majority of your funds in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stash")," account and only a minimal amount in the ",(0,i.kt)("inlineCode",{parentName:"p"},"controller"),"\naccount to cover transaction fees.")),(0,i.kt)("img",{src:"/img/avail/stash-controller-accounts.png",width:"200%",height:"200%"}),(0,i.kt)("h3",{id:"bond-your-funds"},"Bond Your Funds"),(0,i.kt)("admonition",{title:"Bonding Tips",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Don't bond all your AVL tokens as you'll need some for transaction fees. You can always bond more tokens later.\nNote: Withdrawing any bonded amount is subject to the duration of the unbonding period.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Staking")," tab in the Explorer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Stash")," to initiate the bonding process."),(0,i.kt)("img",{src:"/img/avail/staking-bond-1.png",width:"100%",height:"100%"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the bonding preferences."))),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stash Account:")," This is your designated Stash account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Controller Account:")," Choose your Controller account, which only requires a minimal amount of AVL to initiate and cease validation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Value Bonded:")," Specify the quantity of AVL tokens you wish to bond from your Stash account. You can stake any amount that exceeds the minimum requirement."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Destination:")," This is the account where your validation rewards will be sent. For more details, visit ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-staking#reward-distribution"},"this link"),"."))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"After filling in the required fields, click ",(0,i.kt)("inlineCode",{parentName:"li"},"Bond"),". You will be prompted to enter your wallet password. Input your password and then click ",(0,i.kt)("strong",{parentName:"li"},"Sign and Submit"),".")),(0,i.kt)("img",{src:"/img/avail/staking-bond-3.png",width:"100%",height:"100%"}),(0,i.kt)("img",{src:"/img/avail/staking-bond-4.png",width:"100%",height:"100%"}),(0,i.kt)("h3",{id:"submit-session-keys"},"Submit Session Keys"),(0,i.kt)("p",null,"This action associates your session keys with your Stash account."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate back to the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://goldberg.avail.tools/#/staking/actions"},(0,i.kt)("ins",null,"Staking")))," tab."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Set Session Key")," and enter the hex-encoded result."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Set Session Key")," and enter your password when prompted.")),(0,i.kt)("img",{src:"/img/avail/set-session-keys.png",width:"100%",height:"100%"}),(0,i.kt)("p",null,"After submitting the extrinsic, you'll observe that ",(0,i.kt)("strong",{parentName:"p"},"Set Session Key")," changes\nto ",(0,i.kt)("strong",{parentName:"p"},"Validate"),". Make sure your node is fully synchronized before proceeding further."),(0,i.kt)("h2",{id:"step-3-register-as-a-validator"},"Step 3: Register as a Validator"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Validate")," on the ",(0,i.kt)("strong",{parentName:"li"},"Staking")," tab.")),(0,i.kt)("img",{src:"/img/avail/start-validating.png",width:"100%",height:"100%"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Set your validator commission percentage."),(0,i.kt)("li",{parentName:"ol"},"Enter your password and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Validate"),".")),(0,i.kt)("img",{src:"/img/avail/set-validate-commission.png",width:"100%",height:"100%"}),(0,i.kt)("h2",{id:"step-4-start-validation"},"Step 4: Start Validation"),(0,i.kt)("p",null,"Your validator is now prepared to begin the validation process. If you wish to discontinue,\nyou can click the stop icon. Please note that the Avail interface doesn't automatically verify\nif your node is synchronized; you'll need to confirm this manually."),(0,i.kt)("img",{src:"/img/avail/validator-ready.png",width:"100%",height:"100%"}),(0,i.kt)("h3",{id:"verify-validator-status"},"Verify Validator Status"),(0,i.kt)("p",null,"To verify that your node is ready for possible selection at the end of\nthe next era, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://goldberg.avail.tools/#/staking"},(0,i.kt)("ins",null,"Staking")))," tab and\nselect ",(0,i.kt)("inlineCode",{parentName:"li"},"Waiting")," to see if your account appears."),(0,i.kt)("li",{parentName:"ol"},"If your node has enough stake, it will be elected in the next era or two.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"A new set of validators is chosen every ",(0,i.kt)("strong",{parentName:"p"},"era"),", based on the amount staked.")))),(0,i.kt)("img",{src:"/img/avail/validator-waiting-list.png",width:"100%",height:"100%"}),(0,i.kt)("h3",{id:"monitor-validator-in-action"},"Monitor Validator in Action"),(0,i.kt)("p",null,"Once your validator node has accrued enough stake, it will be elected for validation.\nBelow is an example image of an elected validator node actively producing blocks."),(0,i.kt)("p",null,"In addition, please check out the guide on validator monitoring available\n",(0,i.kt)("a",{parentName:"p",href:"/operate/validator/monitor"},(0,i.kt)("ins",null,"here")),"."),(0,i.kt)("img",{src:"/img/avail/validator-active-set.png",width:"100%",height:"100%"}),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"Congratulations on successfully setting up your Avail Validator node!"),(0,i.kt)("p",null,"As you move forward, here are some essential actions to consider:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Backup Your Validator"),": Ensure you have a secure backup of your validator settings and keys. Refer to the\n",(0,i.kt)("a",{parentName:"p",href:"/operate/validator/backup"},(0,i.kt)("ins",null,"Backup Guide"))," for detailed steps.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Start Monitoring"),": If you haven't already, set up monitoring tools to keep track of your validator's performance. Check out the ",(0,i.kt)("a",{parentName:"p",href:"/operate/validator/monitor"},(0,i.kt)("ins",null,"Monitoring Guide"))," for recommendations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Join the Community"),": Connect with other validators and the Avail team on the official ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/y6fHnxZQX8"},(0,i.kt)("ins",null,"Discord Channel")),". It's a great place to share experiences, ask questions, and get updates."))))}c.isMDXComponent=!0}}]);