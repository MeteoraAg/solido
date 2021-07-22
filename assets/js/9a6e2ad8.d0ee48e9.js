(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4662],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(f,s(s({ref:e},u),{},{components:n})):a.createElement(f,s({ref:e},u))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:o,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6416:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return f}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),s=n.p+"assets/images/logged_in-1050a9f714754833dd3bd79a7bc0a892.png",r=n.p+"assets/images/connect-89b3a584f237fe8e367a8bd948319032.png",l=n.p+"assets/images/connect_dialog-ae808fd516eda2af5c43625dbf7b0401.png",c=n.p+"assets/images/updated-b00828d70e59c8d506105cf986ce34e4.png",u=n(6951),d=n(6327),p={title:"Phantom",description:"Overview of user staking in LIDO for Solana with Phantom",keywords:["staking","end-user","lido","solana","phantom"],sidebar_label:"Phantom",sidebar_position:3},h={unversionedId:"Guides/Staking/Wallets/Phantom",id:"Guides/Staking/Wallets/Phantom",isDocsHomePage:!1,title:"How to Stake Solana on Lido",description:"Overview of user staking in LIDO for Solana with Phantom",source:"@site/docs/Guides/Staking/Wallets/Phantom.md",sourceDirName:"Guides/Staking/Wallets",slug:"/Guides/Staking/Wallets/Phantom",permalink:"/solido/docs/Guides/Staking/Wallets/Phantom",version:"current",sidebar_label:"Phantom",sidebarPosition:3,frontMatter:{title:"Phantom",description:"Overview of user staking in LIDO for Solana with Phantom",keywords:["staking","end-user","lido","solana","phantom"],sidebar_label:"Phantom",sidebar_position:3},sidebar:"solidoSidebar",previous:{title:"How to Stake Solana on Lido",permalink:"/solido/docs/Guides/Staking/Wallets/Sollet"},next:{title:"How to Stake Solana on Lido",permalink:"/solido/docs/Guides/Staking/Wallets/Solflare"}},f=[{value:"Introduction",id:"introduction",children:[]},{value:"Lido for Solana staking guide",id:"lido-for-solana-staking-guide",children:[]},{value:"Step 1: Create or Restore Phantom Wallet",id:"step-1-create-or-restore-phantom-wallet",children:[{value:"Creating the wallet",id:"creating-the-wallet",children:[]},{value:"Restoring the wallet",id:"restoring-the-wallet",children:[]},{value:"Logged In",id:"logged-in",children:[]}]},{value:"Step 2: Connect Lido to Phantom",id:"step-2-connect-lido-to-phantom",children:[]},{value:"Step 3: Explore the interface",id:"step-3-explore-the-interface",children:[{value:"Account info",id:"account-info",children:[]},{value:"Transaction Parameters",id:"transaction-parameters",children:[]},{value:"Lido Statistics",id:"lido-statistics",children:[]},{value:"FAQs",id:"faqs",children:[]}]},{value:"Step 4: Stake your SOL",id:"step-4-stake-your-sol",children:[]},{value:"Step 5: View the transaction on Blockexplorer",id:"step-5-view-the-transaction-on-blockexplorer",children:[]},{value:"Withdrawing Solana",id:"withdrawing-solana",children:[]},{value:"Resources",id:"resources",children:[]}],k={toc:f};function g(t){var e=t.components,p=(0,o.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"\u2018Lido for Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Widget",src:n(923).Z})),(0,i.kt)("h2",{id:"lido-for-solana-staking-guide"},"Lido for Solana staking guide"),(0,i.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sollet"),(0,i.kt)("li",{parentName:"ol"},"Phantom"),(0,i.kt)("li",{parentName:"ol"},"Solflare"),(0,i.kt)("li",{parentName:"ol"},"Solong"),(0,i.kt)("li",{parentName:"ol"},"Ledger")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-1-create-or-restore-phantom-wallet"},"Step 1: Create or Restore Phantom Wallet"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://phantom.app/"},"https://phantom.app/")," to create/restore your solana wallet."),(0,i.kt)("h3",{id:"creating-the-wallet"},"Creating the wallet"),(0,i.kt)("p",null,"If you do not have a wallet you yet, you should create a new wallet and note down the seed phrase and store it in a safe place. Follow the onscreen instructions and make sure to fund your wallet with some SOL tokens before interacting with Lido"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Wallet",src:n(4815).Z}),"\n",(0,i.kt)("img",{alt:"Wallet",src:n(4505).Z})),(0,i.kt)("h3",{id:"restoring-the-wallet"},"Restoring the wallet"),(0,i.kt)("p",null,"If you already have a wallet, you can restore it on Phantom using the associated seed phrase. Follow the online instructions to restore your SOL account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Restore",src:n(8564).Z}),"\n",(0,i.kt)("img",{alt:"Restore 2",src:n(1475).Z})),(0,i.kt)("h3",{id:"logged-in"},"Logged In"),(0,i.kt)("p",null,"Once you have funded your Phantom wallet with Solana, you can click on the Phantom extension to see your account details."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:s,alt:"logged_in",width:"300"})),(0,i.kt)("h2",{id:"step-2-connect-lido-to-phantom"},"Step 2: Connect Lido to Phantom"),(0,i.kt)("p",null,"Once your wallet is setup visit ",(0,i.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Phantom account to the Lido interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connect",src:n(2427).Z})),(0,i.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:r,alt:"Wallets",width:"350"})),(0,i.kt)("p",null,"Selecting your wallet and pressing the connect button takes you to another window with the wallet\u2019s browser extension. On this window you will have to ",(0,i.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details listed on the approval screen by Phantom."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Approve Connection",src:n(9244).Z})),(0,i.kt)("p",null,"If you have set a password to open the wallet, you might get prompted to unlock your wallet. You will, then, have to allow Lido to connect to your wallet and fetch its balance. Once connected you would be able to see your balance on the Lido widget."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connected",src:n(6250).Z})),(0,i.kt)("p",null,"Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,i.kt)("h2",{id:"step-3-explore-the-interface"},"Step 3: Explore the interface"),(0,i.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Interface",src:n(8440).Z})),(0,i.kt)("h3",{id:"account-info"},"Account info"),(0,i.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process.\nThe address for the demo account is"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Address - ",(0,i.kt)("inlineCode",{parentName:"p"},"yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Blockexplorer URL - ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet"},"https://explorer.solana.com/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet"))),(0,i.kt)("p",null,"Its transaction history can be viewed on the blockexplorer ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/address/yBfu1AzbyRcfoJRU5TcUf59QwntqoFeDDTF9efh6XjL?cluster=testnet"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Account Info",src:n(5514).Z})),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:l,alt:"Connect Dialog",width:"350"})),(0,i.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,i.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,i.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,i.kt)("li",{parentName:"ul"},"Transaction cost"),(0,i.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction Params",src:n(9290).Z})),(0,i.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,i.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lido Params",src:n(97).Z})),(0,i.kt)("h3",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido team or Chorus One for any clarifications. The contact information is given at the end of this article."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Faqs",src:n(6489).Z})),(0,i.kt)("h2",{id:"step-4-stake-your-sol"},"Step 4: Stake your SOL"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stake",src:n(2963).Z})),(0,i.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. Once you submit you might get redirected to your wallet. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your wallet."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note ",(0,i.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to your wallet and approve it."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Staking",src:n(530).Z})),(0,i.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Approve",src:n(1933).Z})),(0,i.kt)("p",null,"After verifying the information you can approve now."),(0,i.kt)("h2",{id:"step-5-view-the-transaction-on-blockexplorer"},"Step 5: View the transaction on Blockexplorer"),(0,i.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,i.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:u.Z,alt:"View Tx",width:"500"})),(0,i.kt)("p",null,"This is useful as it tells you the ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet"},"current status")," of your transaction."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Link for the above transaction - ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.solana.com/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet"},"https://explorer.solana.com/tx/3jDcSYVRVUEyNfTVZ6T6WaddAKq24wyp5PapndbrzUQj2xbk3LAuSaTp4B2UAfseobQsTNaBsWaW5hzEqPwkyQKB?cluster=testnet"))),(0,i.kt)("p",null,"If you look at the Confirmations field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confirmations 1",src:n(4066).Z}),"\n",(0,i.kt)("img",{alt:"Confirmations 2",src:n(6282).Z}),"\n",(0,i.kt)("img",{alt:"Confirmations 3",src:n(6906).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finally after 32 confirmations, our transaction gets confirmed")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confirmations 4",src:n(8134).Z})),(0,i.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Update",src:n(171).Z})),(0,i.kt)("p",null,"Zooming into the widget we can observe the new SOL balance and the updated stSOL balance"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 1: We had 2 SOL in the beginning and we staked 1 SOL. We should be left with 1 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:c,alt:"Updated Balance",width:"450"})),(0,i.kt)("h2",{id:"withdrawing-solana"},"Withdrawing Solana"),(0,i.kt)("p",null,"Withdrawals are not enabled yet. They will be live within the coming months. If you click on the ",(0,i.kt)("strong",{parentName:"p"},"Unstake")," tab you will see an error message pop up."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:d.Z,alt:"Unstake",width:"450"})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/chorus-one/introducing-lido-for-solana-8aa02db8503"},"Introducing Lido for Solana")," - Explaining the SOL liquid staking solution by Chorus One"))}g.isMDXComponent=!0},6327:function(t,e,n){"use strict";e.Z=n.p+"assets/images/unstake-ff2783514f68340f6894e6afdca39954.png"},6951:function(t,e,n){"use strict";e.Z=n.p+"assets/images/view_tx-dfd323a7dd1a452a2dc4876e8ac1b760.png"},2427:function(t,e,n){"use strict";e.Z=n.p+"assets/images/connect-3dc119fcf29f83cab7aff88398f35670.png"},6489:function(t,e,n){"use strict";e.Z=n.p+"assets/images/faqs-671274d0d5fdd0090752e3091275d9bf.png"},8440:function(t,e,n){"use strict";e.Z=n.p+"assets/images/interface-49238591196cf9e54fd5ad68297ec267.png"},2963:function(t,e,n){"use strict";e.Z=n.p+"assets/images/stake-f2349237ab1661f08b0cb0e988f5e5de.png"},923:function(t,e,n){"use strict";e.Z=n.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"},5514:function(t,e,n){"use strict";e.Z=n.p+"assets/images/account_info-42002110c349093966374e911ac5c7d4.png"},1933:function(t,e,n){"use strict";e.Z=n.p+"assets/images/approve-96c5a5e652c30965a17f321284b2cc2f.png"},9244:function(t,e,n){"use strict";e.Z=n.p+"assets/images/approve_connection-11487f1b9ad469f267937857ab90093b.png"},4066:function(t,e,n){"use strict";e.Z=n.p+"assets/images/confirmations1-07932b34599ed0ff9467b8701d257757.png"},6282:function(t,e,n){"use strict";e.Z=n.p+"assets/images/confirmations2-3de987a8314613be41cdba4507ecb911.png"},6906:function(t,e,n){"use strict";e.Z=n.p+"assets/images/confirmations3-08ebb64e7dca8e5e62c049a6ed5182be.png"},8134:function(t,e,n){"use strict";e.Z=n.p+"assets/images/confirmations4-6ffd1511bc8ed0072b571bed70615b8d.png"},6250:function(t,e,n){"use strict";e.Z=n.p+"assets/images/connected-86ed16f80b4be799840c65218b1adaeb.png"},4815:function(t,e,n){"use strict";e.Z=n.p+"assets/images/create_wallet-7ca0c5f379940316b0cbc408b13e71c1.png"},4505:function(t,e,n){"use strict";e.Z=n.p+"assets/images/create_wallet2-9aada081d87ef532ed290dd71470db11.png"},97:function(t,e,n){"use strict";e.Z=n.p+"assets/images/lido_params-976584468a7318057c52aa970c3d6663.png"},8564:function(t,e,n){"use strict";e.Z=n.p+"assets/images/restore-f2e68bc4175c5fc8b098870412f2209a.png"},1475:function(t,e,n){"use strict";e.Z=n.p+"assets/images/restore2-8685fd72b20474185dc66c26eb74b769.png"},530:function(t,e,n){"use strict";e.Z=n.p+"assets/images/staking-c1b410e45dd8106d431af88422d8282d.png"},9290:function(t,e,n){"use strict";e.Z=n.p+"assets/images/tx_params-85f6822765e8825c28c1669208e2664b.png"},171:function(t,e,n){"use strict";e.Z=n.p+"assets/images/update-19375eb31602fa4386ebbc98729a875a.png"}}]);