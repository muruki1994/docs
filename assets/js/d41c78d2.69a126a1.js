"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[5258],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=i.createContext({}),c=function(t){var e=i.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?i.createElement(m,r(r({ref:e},u),{},{components:a})):i.createElement(m,r({ref:e},u))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1680:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const o={id:"validiums",title:"Avail-Powered Validiums",sidebar_label:"Validiums",description:"Learn about Avail's data availability chain",keywords:["docs","avail","availability","scale","rollup"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,l={unversionedId:"about/introduction/validiums",id:"about/introduction/validiums",title:"Avail-Powered Validiums",description:"Learn about Avail's data availability chain",source:"@site/docs/about/introduction/validiums.md",sourceDirName:"about/introduction",slug:"/about/introduction/validiums",permalink:"/about/introduction/validiums",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/about/introduction/validiums.md",tags:[],version:"current",lastUpdatedBy:"omahs",lastUpdatedAt:1697103966,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"validiums",title:"Avail-Powered Validiums",sidebar_label:"Validiums",description:"Learn about Avail's data availability chain",keywords:["docs","avail","availability","scale","rollup"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Light Clients",permalink:"/about/introduction/light-client"},next:{title:"Operate",permalink:"/category/operate"}},s={},c=[{value:"What are Validiums?",id:"what-are-validiums",level:3}],u={toc:c},d="wrapper";function p(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Due to the architecture of monolithic blockchains (such as Ethereum in\nits current state), operating the blockchain is expensive, resulting\nin high transaction fees. Rollups attempt to extract the burden of\nexecution by running transactions off-chain and then posting the\nexecution results and the ","[usually compressed]"," transaction data."),(0,n.kt)("p",null,"Validiums are the next step: instead of posting the transaction data,\nit is kept available off-chain, where a proof/attestation is only\nposted to the base layer. This is by far the most cost-effective\nsolution because both execution and data availability are kept\noff-chain while still allowing for final verification and settlement\non the layer 1 chain."),(0,n.kt)("p",null,"Avail is a blockchain optimized for data availability. Any rollup that\nwishes to become a validium can switch to post transaction data to\nAvail instead of the layer 1 and deploy a verification contract that,\nin addition to verifying the correct execution, also verifies data\navailability."),(0,n.kt)("p",null,"The Avail team will make this data availability verification simple on\nEthereum by building an attestation bridge to post data availability\nattestations directly to Ethereum. This will make the verification\ncontract's job a simple one, since the DA attestations will already be\non-chain. Please reach out to the Avail team for more information or\nto join our early access program."),(0,n.kt)("h3",{id:"what-are-validiums"},"What are Validiums?"),(0,n.kt)("p",null,"Validiums are scaling solutions that are using off-chain computation and\nvalidity proofs, but data is not stored on Ethereum chain which significantly\nincreases transactions throughput.  Validity proof can come in the form of zero\nknowledge proofs like ",(0,n.kt)("em",{parentName:"p"},"ZK-SNARK")," or ",(0,n.kt)("em",{parentName:"p"},"ZK-STARK")," in which one party can prove to\nanother party that the given statement is true while the prover avoids disclosure\nof additional information apart from the fact that the statement is indeed true.\nValidity of all transactions is enforced using validity proofs while data availability\nis kept off chain. User can withdraw funds by providing a Merkle proof which can prove\ninclusion of the users withdrawal transaction and allow the on-chain contract to process\nwithdrawal. Validium interact with Ethereum with a collection of contracts including main\n",(0,n.kt)("em",{parentName:"p"},"attestation")," contract that stores state commitments (Merkle data roots) submitted by the\nblock produce and ",(0,n.kt)("em",{parentName:"p"},"verification")," contract which verifies the validity proof when making\nstate transitions."))}p.isMDXComponent=!0}}]);