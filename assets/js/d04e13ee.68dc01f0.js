"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[97],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>v});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,v=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return a?i.createElement(v,l(l({ref:t},h),{},{components:a})):i.createElement(v,l({ref:t},h))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:n,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var i=a(7462),n=(a(7294),a(3905)),o=a(4996);const l={id:"chill",title:"Chill Your Validator",sidebar_label:"Chill Your Validator",description:"Learn about how Chill & Slashing Affect an Avail validator.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,s={unversionedId:"operate/validator/chill",id:"operate/validator/chill",title:"Chill Your Validator",description:"Learn about how Chill & Slashing Affect an Avail validator.",source:"@site/docs/operate/validator/0070-chilling.md",sourceDirName:"operate/validator",slug:"/operate/validator/chill",permalink:"/operate/validator/chill",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/validator/0070-chilling.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1697443636,formattedLastUpdatedAt:"Oct 16, 2023",sidebarPosition:70,frontMatter:{id:"chill",title:"Chill Your Validator",sidebar_label:"Chill Your Validator",description:"Learn about how Chill & Slashing Affect an Avail validator.",keywords:["docs","avail","node","validator"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Monitor Your Validator",permalink:"/operate/validator/monitor"},next:{title:"API Reference",permalink:"/category/api-reference"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Voluntary Chill",id:"voluntary-chill",level:2},{value:"Involuntary Chill",id:"involuntary-chill",level:2},{value:"Slashing",id:"slashing",level:3}],d={toc:h},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,'Two important concepts in Avail concensus are "Chill" and "Slashing". We will explore the conditions under which validators are chilled or slashed, the impact of these actions on validators and nominators.'),(0,n.kt)("h2",{id:"voluntary-chill"},"Voluntary Chill"),(0,n.kt)("p",null,'Staking bonds can exist in three different states: validating, nominating, or chilled. Chilled which refers to neither validating nor nominating. If a staker wishes to temporarily pause their active involvement\nin staking while keeping their funds bonded, they have the option to "chill" their participation.'),(0,n.kt)("p",null,'To step back from active staking or active validating an account can either click "Stop" on the Network > Staking > Account actions page in Avail Apps or make use of the chill extrinsic in the staking pallet.\nBy choosing to chill, the account or validator becomes inactive in the next era. It\'s important to note that the chill call must be signed by the controller account, not the stash.'),(0,n.kt)("p",null,"If you decide to voluntarily chill as a validator, your nominators will remain associated with your validator. However, while you are chilled, your bond will not be listed as an option for nominators to select.\nThis means that any nominators making new nominations or revising existing ones will not be able to choose your validator."),(0,n.kt)("h2",{id:"involuntary-chill"},"Involuntary Chill"),(0,n.kt)("p",null,"In the event that a validator becomes unresponsive for an entire session, the validator bond will undergo involuntary chilling. This process restricts the validator from being chosen in the subsequent election,\ndepending on the session in which the chilling occurred. However, a chilled validator has the ability to declare their intent to validate again at any time. If less than 10% of nodes go offline there is\nno slash for being unresponsive or offline."),(0,n.kt)("h3",{id:"slashing"},"Slashing"),(0,n.kt)("p",null,"Involuntary chilling can also occur as a consequence of slashing. However, in such a situation, the validator not only loses their nominations but also faces a potential loss of support. Consequently, even if\nthe validator re-declares their intent to validate before session 5, there may not be enough nominations to reintegrate the node into the active set."),(0,n.kt)("p",null,'Nominators have the opportunity to renominate a slashed validator through a display row available in Avail Apps in the "Account Actions".'),(0,n.kt)("p",null,"Slashing can occur under the following conditions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Equivocation is producing two blocks in the same slot. In GRANDPA, it is sending pre-vote or pre-commit messages for two chains that conflict with each other in the same round. This will slash\nthe validator and nominators."),(0,n.kt)("li",{parentName:"ul"},"If more than 10% of the validators go offline simultaneously and were chilled in an epoch, all of those validators will be slashed.")),(0,n.kt)("p",null,"The slashing will show immediately on ",(0,n.kt)("a",{parentName:"p",href:"https://testnet.avail.tools/#/staking/slashes"},"Avail Apps")," on the slash tab. However the financial slash is not applied at the time. The physical deduction from\nvalidator stake and nominator stake happens at a later stage. A governance proposal can be made to reverse the slash, this is why there is a delay in the physical deduction of coins. Without\nGovernance intervention the physical coin deduction will happen a few days later."),(0,n.kt)("p",null,"Example of a slash shown in Avail Apps:"),(0,n.kt)("img",{src:(0,o.Z)("img/avail/validator-slash.png"),width:"100%",height:"100%"}))}u.isMDXComponent=!0}}]);