"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9428],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9096:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],s={},l={unversionedId:"deployments",id:"deployments",isDocsHomePage:!1,title:"Deployments",description:"This page lists official addresses at which Lido for Solana is deployed, in the",source:"@site/docs/deployments.md",sourceDirName:".",slug:"/deployments",permalink:"/deployments",version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Exchange rate",permalink:"/internals/exchange-rate"},next:{title:"Security",permalink:"/security"}},p=[{value:"Mainnet-beta",id:"mainnet-beta",children:[]},{value:"Testnet",id:"testnet",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page lists official addresses at which Lido for Solana is deployed, in the\nform of ",(0,o.kt)("a",{parentName:"p",href:"/operation/the-solido-utility#configuration"},"a ",(0,o.kt)("inlineCode",{parentName:"a"},"solido")," config file"),"."),(0,o.kt)("p",null,"Aside from the config keys, we list a few additional addresses that do not need\nto be part of the config file, and that can be obtained through ",(0,o.kt)("a",{parentName:"p",href:"/operation/the-solido-utility"},(0,o.kt)("inlineCode",{parentName:"a"},"solido\nshow-solido")),", but which are useful to know anyway."),(0,o.kt)("h2",{id:"mainnet-beta"},"Mainnet-beta"),(0,o.kt)("p",null,"Version: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/releases/tag/v1.0.1"},"v1.0.1"),"."),(0,o.kt)("p",null,"Configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster": "https://api.mainnet-beta.solana.com",\n  "multisig_program_id": "AAHT26ecV3FEeFmL2gDZW6FfEqjPkghHbAkNZGqwT8Ww",\n  "multisig_address": "3cXyJbjoAUNLpQsFrFJTTTp8GD3uPeabYbsCVobkQpD1",\n  "solido_program_id": "CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi",\n  "solido_address": "49Yi1TKkNyYjPAFdR9LBvoHcUjuPX4Df5T5yv39w2XTn"\n}\n')),(0,o.kt)("p",null,"Related addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "multisig_pda": "GQ3QPrB1RHPRr4Reen772WrMZkHcFM4DL5q44x1BBTFm",\n  "st_sol_mint": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",\n  "withdraw_authority": "GgrQiJ8s2pfHsfMbEFtNcejnzLegzZ16c9XtJ2X2FpuF",\n  "reserve": "3Kwv3pEAuoe4WevPB4rgMBTZndGDb53XT7qwQKnvHPfX"\n}\n')),(0,o.kt)("p",null,"Multisig owners:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Cv6GM219kzMrdUUdgDGVJUPW6fGosvrhsFrvmEhz3Mc6": "P2P",\n  "ENH1xvwjinUWkwEgw1hKduyAg7CrJMiKvr9nAS7wLHrp": "Staking Facilities",\n  "6CawqfAJDviZGfUpHFJgeauq6H9vhKuivMMZULZeGnPw": "Figment",\n  "F4VFp4tFTyrQWo9YVjCbPE5eQP27ice2zyGDp2tN2Rkm": "Saber",\n  "AnoVUukL1fMAwEp4y2rrZV45BNHLes8ZwWsCRgEwhGH4": "ChainLayer",\n  "6S21QCmpAadEhHj3pY2RMbPMGwgYNvS4Pd7zUXoRDMdK": "Chorus One",\n  "8Lep9addZWUWqBNj3igx4QoHe43GBfvLhGJy18jJgWQa": "Solana Foundation"\n}\n')),(0,o.kt)("p",null,"Maintainers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "AR7FaVeVvUQwnLtojZNUc42H987KiHqfc4AN1qEwPUJw": "Chorus One",\n  "2rqLzNZCBWykEs8bFMbmgqCz4eosaEfU3aRL4RJWdZgQ": "Figment",\n  "DqCZaFR6cTMvFMuz43HS77Zcz1quR93n11kT1yY6aVf4": "Staking Facilities",\n  "p2pokvNcNc1SFCMoUrp1UBQ6SBET7H5EdLqahz4g55k":  "P2P"\n}\n\n')),(0,o.kt)("h2",{id:"testnet"},"Testnet"),(0,o.kt)("p",null,"Version: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/releases/tag/v0.4.0"},"v0.4.0"),"."),(0,o.kt)("p",null,"Configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster": "https://api.testnet.solana.com",\n  "multisig_program_id": "BY7D3NJMevi3JiT49xmAKditKL69a8TuyiCc9YuSvy4W",\n  "multisig_address": "7Yh1UgKE1KQoLYohynqdo84aNBwQ3GwU4XrCNY153PQ5",\n  "solido_program_id": "7k3rzqoNQxgTLTooAvXriGBKYsd16bV3JMvatvXcBfNo",\n  "solido_address": "7yoacaUf7yu5wqxpcHaXtwCaMciR7kFqps8FwnX4cjeK"\n}\n')),(0,o.kt)("p",null,"Related addresses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "st_sol_mint": "8ry9FhmvhifEBwLPJpg89fAu19rmUHskDVvEfKuDbQbT",\n  "withdraw_authority": "4t57fC1TwHGo5d6X4fpH9hkEvvDLaMDXj13vfkSZvvrQ",\n  "reserve": "BfT1Sn54zwUk46WtJRhizcu6izUvw9eTanndawX5MdR"\n}\n')),(0,o.kt)("p",null,"Multisig owners:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ENH1xvwjinUWkwEgw1hKduyAg7CrJMiKvr9nAS7wLHrp": "Staking Facilities",\n  "DBd1yUhptC7yRq79sM4cAH1Zhe5rdTpJizxXJQGxRTyn": "Figment",\n  "J4RLjzbJUrm4vRk5ZpPpk6CHzrmAiZGDByuyJ8f9jXR7": "P2P",\n  "6S21QCmpAadEhHj3pY2RMbPMGwgYNvS4Pd7zUXoRDMdK": "Chorus One",\n  "CeuSTdUx4XnPET4K4o3Zxx3zjh1yrR4f8fyWycGjs7wj": "Bonafida",\n  "6DzkRQ3CJXMdnwm9aS2ww7KNeKxw3YLANzpUeTFoRCtC": "Solana Foundation",\n  "F4VFp4tFTyrQWo9YVjCbPE5eQP27ice2zyGDp2tN2Rkm": "Saber"\n}\n')))}u.isMDXComponent=!0}}]);