(function(t){function e(e){for(var r,i,s=e[0],o=e[1],u=e[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(m.length)m.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ynab-reconcile/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0184":function(t,e,n){},"233c":function(t,e,n){},"23e6":function(t,e,n){"use strict";var r=n("233c"),a=n.n(r);a.a},"2f27":function(t,e,n){"use strict";var r=n("0184"),a=n.n(r);a.a},3354:function(t,e,n){"use strict";var r=n("e216"),a=n.n(r);a.a},"3f1b":function(t,e,n){"use strict";var r=n("b30c"),a=n.n(r);a.a},"535e":function(t,e,n){"use strict";var r=n("6d91"),a=n.n(r);a.a},5387:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("43f9"),c=n.n(a),i=(n("51de"),n("e094"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("md-app",{attrs:{"md-mode":"fixed",id:"app"}},[n("md-app-toolbar",{staticClass:"md-primary"},[n("span",{staticClass:"md-title",on:{click:t.onHeaderClick}},[t._v("YNAB Reconcile")]),t.store.isLoggedIn()?n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-icon-button",on:{click:t.refresh}},[n("md-icon",[t._v("refresh")])],1),n("md-menu",{attrs:{"md-size":"small"}},[n("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[n("md-icon",[t._v("more_vert")])],1),n("md-menu-content",[n("md-menu-item",{on:{click:t.logout}},[t._v("Logout")])],1)],1)],1):t._e()]),n("md-app-content",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout-item md-size-25 md-small-hide"}),n("div",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[n("router-view",{attrs:{store:t.store}})],1)])],1)],1)}),s=[],o=(n("4160"),n("159b"),n("96cf"),n("1da1"));n("4de4");function u(t){return l.apply(this,arguments)}function l(){return l=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:return n=t.sent,r=n.filter((function(t){return t.on_budget})),a=n.filter((function(t){return!t.on_budget})),t.abrupt("return",{budget:r,tracking:a});case 6:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return m=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return!t.closed})));case 4:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return p=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.accounts.getAccounts("default");case 3:return n=t.sent,r=n.data.accounts,r.forEach((function(t){return t.transactions=null})),t.abrupt("return",r);case 9:throw t.prev=9,t.t0=t["catch"](0),a=t.t0.error.detail,Error("Error while fetching accounts from YNAB: ".concat(a));case 13:case"end":return t.stop()}}),t,null,[[0,9]])}))),p.apply(this,arguments)}var h={getOpenAccountsByType:u},v=(n("d81d"),n("d3c8"));function b(t,e){return g.apply(this,arguments)}function g(){return g=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.transactions.getTransactionsByAccount("default",n);case 2:return r=t.sent,t.abrupt("return",r.data.transactions);case 4:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function y(t,e){return _.apply(this,arguments)}function _(){return _=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(e,n);case 2:return r=t.sent,a=r.filter((function(t){return"cleared"==t.cleared})),c=r.filter((function(t){return"uncleared"==t.cleared})),t.abrupt("return",{cleared:a,uncleared:c});case 6:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}function w(t,e,n){return x.apply(this,arguments)}function x(){return x=Object(o["a"])(regeneratorRuntime.mark((function t(e,n,r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={account_id:n.id,date:v.utils.getCurrentDateInISOFormat(),cleared:"reconciled",amount:r,payee_name:"YNAB Reconcile: Adjustment",memo:"Entered automatically by YNAB Reconcile"},t.next=3,e.transactions.createTransaction("default",{transaction:a});case 3:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function C(t,e,n,r){return k.apply(this,arguments)}function k(){return k=Object(o["a"])(regeneratorRuntime.mark((function t(e,n,r,a){var c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0==a){t.next=3;break}return t.next=3,w(e,n,a);case 3:if(!r.length){t.next=14;break}return c=r.map((function(t){return{id:t.id,cleared:"reconciled"}})),t.prev=5,t.next=8,e.transactions.updateTransactions("default",{transactions:c});case 8:t.next=14;break;case 10:throw t.prev=10,t.t0=t["catch"](5),i=t.t0.error.detail,Error("Error while reconciling on YNAB: ".concat(i));case 14:case"end":return t.stop()}}),t,null,[[5,10]])}))),k.apply(this,arguments)}var O={getAccountTransactionsByType:y,reconcile:C},A=n("d3c8");function T(t,e,n){var r=new Date,a={value:e,expiry:r.getTime()+n};localStorage.setItem(t,JSON.stringify(a))}function j(t){var e=localStorage.getItem(t);if(!e)return null;var n=JSON.parse(e),r=new Date;return r.getTime()>n.expiry?(localStorage.removeItem(t),null):n.value}function R(t,e){return E.apply(this,arguments)}function E(){return E=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.getOpenAccountsByType(e);case 2:r=t.sent,a=r.budget,c=r.tracking,n.accounts.budget=a,n.accounts.tracking=c,a.forEach((function(t){return B(e,t)})),c.forEach((function(t){return B(e,t)}));case 9:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}function B(t,e){return S.apply(this,arguments)}function S(){return S=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.getAccountTransactionsByType(e,n.id);case 2:r=t.sent,a=r.cleared,c=r.uncleared,n.transactions={cleared:a,uncleared:c};case 6:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}var N={ynab:null,state:{accounts:{budget:[],tracking:[]},accountsLoaded:!1,reconciling:!1,error:""},isLoggedIn:function(){return null!=j("access_token")},maybeFirstLoad:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ynab){t.next=5;break}return e=j("access_token"),this.ynab=new A.API(e),t.next=5,this.reload();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),login:function(t){var e=72e5;T("access_token",t,e)},logout:function(){localStorage.removeItem("access_token")},reload:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.state.accountsLoaded=!1,t.prev=1,t.next=4,R(this.ynab,this.state);case 4:this.state.accountsLoaded=!0,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.error(t.t0);case 10:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}(),reconcile:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.state.reconciling=!0,t.prev=1,t.next=4,O.reconcile(this.ynab,e,n,r);case 4:this.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.error(t.t0);case 10:this.state.reconciling=!1;case 11:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(e,n,r){return t.apply(this,arguments)}return e}(),error:function(t){this.state.error=t.message,console.log("Error details: ",t)}},I={data:function(){return{store:N}},methods:{onHeaderClick:function(){this.$router.push("/")},logout:function(){this.store.logout(),this.$router.push("/login")},refresh:function(){this.store.reload()}}},L=I,$=(n("5c0b"),n("9fe2"),n("2877")),P=Object($["a"])(L,i,s,!1,null,"4c1c2b60",null),D=P.exports,V=n("9483");Object(V["a"])("".concat("/ynab-reconcile/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var z=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.loaded?n("div",[n("account-list",{attrs:{accounts:t.budgetAccounts,"subheader-content":"Budget Accounts","no-accounts-content":"No budget accounts.","on-select":t.goToAccount}}),n("account-list",{attrs:{accounts:t.trackingAccounts,"subheader-content":"Tracking Accounts","no-accounts-content":"No tracking accounts.","on-select":t.goToAccount}})],1):t.error.length?n("div",{staticClass:"md-title loader-container"},[n("div",[n("md-icon",{staticClass:"md-size-4x md-accent"},[t._v("error")])],1),t._v(" Oops... Something went wrong. ")]):n("div",{staticClass:"loader-container"},[n("span",{staticClass:"md-title"},[t._v("Loading accounts...")]),n("md-progress-spinner",{attrs:{"md-mode":"indeterminate"}})],1),n("md-snackbar",{staticClass:"error",attrs:{"md-duration":1/0,"md-active":t.error.length>0,"md-persistent":""}},[n("span",[t._v("Error encountered: "+t._s(t.error))]),n("md-button",{staticClass:"md-primary",on:{click:t.retryOnError}},[t._v("Retry")])],1)],1)},Y=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-list",{staticClass:"accounts-list"},[n("md-subheader",[t._v(t._s(t.subheaderContent))]),t._l(t.accounts,(function(e){return n("div",{key:e.key},[n("md-list-item",{on:{click:function(n){return t.onSelect(e)}}},[n("account-summary",{attrs:{account:e}})],1),n("md-divider")],1)})),t.accounts.length?t._e():n("md-list-item",{staticClass:"empty-accounts-list"},[t._v(" "+t._s(t.noAccountsContent)+" ")])],2)},M=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-list-item-content account-summary"},[n("md-content",{staticClass:"account-marker md-primary"}),n("div",{staticClass:"account-info"},[n("span",[t._v(t._s(t.account.name))]),n("div",{staticClass:"transactions-status"},[t.account.transactions?t.clearedTransactions.length?n("span",[n("span",{staticClass:"transaction-count"},[n("md-badge",{staticClass:"md-primary md-square",attrs:{"md-content":t.clearedTransactions.length}})],1),t._v(" unreconciled "+t._s(t.pluralize("transaction",t.clearedTransactions.length))+" ")]):t.unclearedTransactions.length?n("span",[t._v(" "+t._s(t.unclearedTransactions.length)+" uncleared "+t._s(t.pluralize("transaction",t.unclearedTransactions.length))+" ")]):n("span",{staticClass:"reconciled-state"},[t._v("Reconciled")]):n("span",[t._v(" Loading... ")])])]),n("div",{staticClass:"balance md-list-item-text"},[n("currency",{attrs:{"initial-value":t.balance}})],1),n("md-icon",[t._v("chevron_right")])],1)},J=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"currency",class:{positive:t.value>=0,negative:t.value<0}},[t.editable?n("md-field",{staticClass:"currency-field",class:t.fieldClasses},[n("span",{staticClass:"md-prefix"},[t._v("$")]),t._v(" "),n("auto-width-input",{directives:[{name:"currency",rawName:"v-currency",value:t.currencyOptions,expression:"currencyOptions"}],staticClass:"currency-input",attrs:{id:"balance-input",autowidth:t.autowidth},on:{"md-field-classes":function(e){t.fieldClasses=e}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t.clearable?n("md-button",{staticClass:"md-icon-button md-dense",on:{click:t.onClear}},[n("md-icon",[t._v("clear")])],1):t._e()],1):n("span",[t._v(t._s(t.formatValue(t.initialValue,!0)))])],1)},q=[],Z=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"},{name:"autowidth",rawName:"v-autowidth",value:t.autowidth,expression:"autowidth"}],staticClass:"md-input md-has-value",attrs:{type:"text"},domProps:{value:t.text},on:{focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.target.blur()},input:function(e){e.target.composing||(t.text=e.target.value)}}})}),G=[],Q={name:"AutoWidthInput",props:{value:String,autowidth:Object},data:function(){return{model:"",focused:!1}},computed:{text:{get:function(){return this.model},set:function(t){this.model=t,this.$emit("input",t)}}},watch:{value:{handler:function(t){this.model=t},immediate:!0},focused:{handler:function(){this.updateClasses()},immediate:!0}},methods:{updateClasses:function(){var t=["md-has-value"];this.focused&&t.push("md-focused"),this.$emit("md-field-classes",t)}}},K=Q,X=Object($["a"])(K,Z,G,!1,null,"c2db27ea",null),tt=X.exports,et=n("d413"),nt=n("d3c8");function rt(t){return nt.utils.convertMilliUnitsToCurrencyAmount(t,2)}var at={name:"Currency",props:{initialValue:Number,editable:{type:Boolean,default:!1},autowidth:Object,clearable:{type:Boolean,default:!1}},components:{AutoWidthInput:tt},data:function(){return{rawText:"",currencyOptions:{currency:null,locale:"en",distractionFree:!1,allowNegative:!0,autoDecimalMode:!0},fieldClasses:[]}},watch:{initialValue:{handler:function(t){this.text=this.formatValue(t,!1)},immediate:!0}},computed:{text:{get:function(){return this.rawText},set:function(t){this.rawText=t;var e=Object(et["b"])(t,this.currencyOptions),n=1e3*e;this.$emit("update:value",n)}},value:function(){return Object(et["b"])(this.text,this.currencyOptions)}},methods:{formatValue:function(t,e){var n=rt(t),r={};r=e?{style:"currency",currency:"USD"}:{style:"decimal",minimumFractionDigits:2};var a=new Intl.NumberFormat("en-US",r);return a.format(n)},onClear:function(){this.text=this.formatValue(this.initialValue,!1)}}},ct=at,it=(n("3354"),Object($["a"])(ct,W,q,!1,null,"387ed8d7",null)),st=it.exports,ot={name:"AccountSummary",props:{account:Object},components:{Currency:st},computed:{balance:function(){return this.account.cleared_balance},clearedTransactions:function(){return this.account.transactions.cleared||[]},unclearedTransactions:function(){return this.account.transactions.uncleared||[]}},methods:{pluralize:function(t,e){return e>1?t+"s":t}}},ut=ot,lt=(n("d56e"),Object($["a"])(ut,H,J,!1,null,"8228edec",null)),dt=lt.exports,mt={name:"AccountList",props:{accounts:Array,subheaderContent:String,noAccountsContent:String,onSelect:Function},components:{AccountSummary:dt}},ft=mt,pt=(n("d9cb"),Object($["a"])(ft,F,M,!1,null,"5fc4a815",null)),ht=pt.exports,vt={name:"Home",props:{store:Object},components:{AccountList:ht},computed:{loaded:function(){return this.store.state.accountsLoaded},error:function(){return this.store.state.error},budgetAccounts:function(){return this.store.state.accounts.budget},trackingAccounts:function(){return this.store.state.accounts.tracking}},methods:{goToAccount:function(t){this.$router.push({name:"Account",params:{id:t.id}})},retryOnError:function(){this.store.reload()}}},bt=vt,gt=(n("2f27"),Object($["a"])(bt,U,Y,!1,null,"a7d3701c",null)),yt=gt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("img",{staticClass:"icon",attrs:{src:"img/icons/android-chrome-192x192.png"}}),n("p",{staticClass:"md-title md-primary"},[t._v("Reconcile your accounts")]),n("md-button",{staticClass:"md-raised md-primary",attrs:{href:t.oauthUrl}},[t._v("Connect to YNAB")])],1),t._m(0),n("span",[t._v(" Made with "),n("md-icon",{staticClass:"md-accent"},[t._v("favorite")]),t._v(", code on "),n("a",{staticClass:"md-accent",attrs:{href:"https://github.com/JesseEmond/ynab-reconcile"}},[t._v("GitHub")])],1)])},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"details"},[n("p",{staticClass:"md-subheading"},[t._v(" Quickly bring your accounts up-to-date, even on mobile. Your data stays on YNAB. ")])])}];n("99af"),n("ac1f");function xt(){var t="7154e14f57f646adf749363b684aea1ff707ee87737a81b383863e5e8f26aec2";if(!t)throw Error("Client ID not configured. Make sure to include an env variable with name VUE_APP_YNAB_OAUTH_CLIENT_ID based on your YNAB OAuth configuration.");var e="https://jesseemond.github.io/ynab-reconcile/";if(!e)throw Error("Redirect URI not configured. Make sure to include an env variable with name VUE_APP_YNAB_OAUTH_REDIRECT_URI.");return"https://app.youneedabudget.com/oauth/authorize?"+"client_id=".concat(t,"&redirect_uri=").concat(e,"&")+"response_type=token"}function Ct(t){var e=/access_token=([0-9a-zA-Z]+)/,n=e.exec(t);if(n){var r=n[1];return r}return!1}var kt={oauthPath:xt,tryParseToken:Ct},Ot={name:"Login",props:{store:Object},computed:{oauthUrl:function(){return kt.oauthPath()}}},At=Ot,Tt=(n("3f1b"),Object($["a"])(At,_t,wt,!1,null,"5f023820",null)),jt=Tt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",{staticClass:"account-name md-title"},[t._v(t._s(t.account.name))]),n("currency",{ref:"balance",staticClass:"balance",attrs:{id:"balance",editable:"","initial-value":t.initialBalance,autowidth:{maxWidth:"100%",minWidth:"100px",comfortZone:25},clearable:t.currentBalance!=t.serverBalance},on:{"update:value":function(e){t.currentBalance=e}}}),n("div",{style:{visibility:0!=t.reconciliationTransaction?"visible":"hidden"}},[n("md-icon",{staticClass:"md-accent"},[t._v("info")]),n("span",{staticClass:"md-subheading"},[t._v(" A reconciliation transaction of "),n("currency",{attrs:{initialValue:t.reconciliationTransaction}}),t._v(" will be created. ")],1)],1),n("div",{staticClass:"transactions"},[n("md-content",{staticClass:"transactions-list md-scrollbar md-elevation-4"},[t.transactions&&!t.submitting?n("div",[n("transaction-list",{attrs:{cleared:t.transactions.cleared,uncleared:t.transactions.uncleared},on:{selected:function(e){t.selectedTransactions=e}}})],1):n("div",{staticClass:"loader-container"},[n("span",{staticClass:"md-title"},[t._v("Loading transactions...")]),n("md-progress-spinner",{attrs:{"md-mode":"indeterminate"}})],1)]),n("p",{style:{visibility:t.selectedTransactions.length?"visible":"hidden"}},[n("md-icon",{staticClass:"md-accent"},[t._v("info")]),n("span",{staticClass:"md-subheading"},[t._v(" "+t._s(t.selectedTransactions.length)+" "+t._s(t.pluralize("transaction",t.selectedTransactions.length))+" will be marked as reconciled. ")])],1)],1),n("div",{staticClass:"actions-area"},[n("md-button",{attrs:{to:"/"}},[t._v("Cancel")]),n("span",[n("md-button",{staticClass:"md-raised md-primary",attrs:{disabled:!t.needsReconciliation},on:{click:t.reconcile}},[t._v(" Reconcile ")]),n("md-tooltip",[t._v(t._s(t.reconcileTooltip))])],1)],1)],1)},Et=[],Bt=(n("7db0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.transactions.length?n("md-table",{attrs:{id:"transactions","md-card":"","md-selected-value":t.selected},on:{"update:mdSelectedValue":function(e){t.selected=e},"update:md-selected-value":function(e){t.selected=e}},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var r=e.item;return n("md-table-row",{attrs:{"md-selectable":"multiple","md-auto-select":""}},[n("md-table-cell",{attrs:{"md-label":"Payee"}},[t._v(t._s(r.payee_name))]),n("md-table-cell",{attrs:{"md-label":"Date"}},[t._v(t._s(t.formatDate(r.date)))]),n("md-table-cell",{attrs:{"md-label":"Amount"}},[n("currency",{attrs:{initialValue:r.amount}})],1)],1)}}],null,!1,3703077063),model:{value:t.transactions,callback:function(e){t.transactions=e},expression:"transactions"}},[n("md-table-toolbar",[n("h1",{staticClass:"md-title"},[t._v("Transactions to reconcile")])])],1):n("md-empty-state",{staticClass:"md-primary",attrs:{"md-icon":"done","md-label":"No transactions to reconcile","md-description":"New transactions you add will show up here."}})],1)}),St=[],Nt=n("2909"),It=n("d3c8"),Lt={name:"TransactionList",props:{cleared:Array,uncleared:Array},components:{Currency:st},data:function(){return{transactions:[],selected:[]}},watch:{selected:function(t){this.$emit("selected",t)},immediate:!0},created:function(){this.transactions=Object(Nt["a"])(this.cleared),this.selected=Object(Nt["a"])(this.cleared)},methods:{formatDate:function(t){var e=It.utils.convertFromISODateString(t),n={day:"numeric",month:"short"},r=new Intl.DateTimeFormat("en-US",n);return r.format(e)}}},$t=Lt,Pt=(n("6037"),n("23e6"),Object($["a"])($t,Bt,St,!1,null,"d76d1b4a",null)),Dt=Pt.exports,Vt={name:"Account",props:{store:Object,id:String},data:function(){return{initialBalance:null,currentBalance:null,selectedTransactions:[]}},computed:{account:function(){var t=this,e=this.store.state.accounts,n=e.budget,r=e.tracking,a=n.find((function(e){return e.id==t.id}));return null!==a&&void 0!==a?a:r.find((function(e){return e.id==t.id}))},transactions:function(){return this.account.transactions},submitting:function(){return this.store.state.reconciling},needsReconciliation:function(){return this.selectedTransactions.length>0||0!=this.reconciliationTransaction},serverBalance:function(){return this.account.cleared_balance},reconciliationTransaction:function(){return this.currentBalance-this.serverBalance},reconcileTooltip:function(){return this.needsReconciliation?"Reconcile on YNAB.":"Nothing to reconcile."}},watch:{store:{handler:function(){this.initialBalance=this.serverBalance,this.currentBalance=this.initialBalance},deep:!0,immediate:!0}},components:{Currency:st,TransactionList:Dt},methods:{reconcile:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.store.reconcile(this.account,this.selectedTransactions,this.reconciliationTransaction);case 2:this.store.state.error||this.$router.push("/");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),pluralize:function(t,e){return e>1?t+"s":t}}},zt=Vt,Ut=(n("6005"),n("535e"),Object($["a"])(zt,Rt,Et,!1,null,"3600f119",null)),Yt=Ut.exports;function Ft(t,e,n){N.isLoggedIn()?n("/"):n()}function Mt(t,e,n){return Ht.apply(this,arguments)}function Ht(){return Ht=Object(o["a"])(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!N.isLoggedIn()){t.next=6;break}return t.next=3,N.maybeFirstLoad();case 3:r(),t.next=7;break;case 6:r("/login");case 7:case"end":return t.stop()}}),t)}))),Ht.apply(this,arguments)}function Jt(t,e,n){var r=kt.tryParseToken(t.path);r?(N.login(r),n("/")):n()}r["default"].use(z["a"]);var Wt=[{path:"/",name:"Home",component:yt,beforeEnter:Mt},{path:"/login",name:"Login",component:jt,beforeEnter:Ft},{path:"/account/:id",name:"Account",component:Yt,beforeEnter:Mt,props:!0}],qt=new z["a"]({routes:Wt});qt.beforeEach(Jt);var Zt=qt,Gt=n("f174"),Qt=n.n(Gt);r["default"].config.productionTip=!1,r["default"].use(c.a),r["default"].use(Qt.a),r["default"].use(et["a"]),new r["default"]({router:Zt,render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5387"),a=n.n(r);a.a},6005:function(t,e,n){"use strict";var r=n("ef20"),a=n.n(r);a.a},6037:function(t,e,n){"use strict";var r=n("b368"),a=n.n(r);a.a},"6d91":function(t,e,n){},"8e7d":function(t,e,n){},"9fe2":function(t,e,n){"use strict";var r=n("a6f6"),a=n.n(r);a.a},a6f6:function(t,e,n){},b30c:function(t,e,n){},b368:function(t,e,n){},bd0c:function(t,e,n){},d56e:function(t,e,n){"use strict";var r=n("8e7d"),a=n.n(r);a.a},d9cb:function(t,e,n){"use strict";var r=n("bd0c"),a=n.n(r);a.a},e216:function(t,e,n){},ef20:function(t,e,n){}});
//# sourceMappingURL=app.27c5a72c.js.map