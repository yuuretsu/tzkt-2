var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,a;function i(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function u(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function d(t,e,n){t.$$.on_destroy.push(u(e,n))}function f(t,e,n,s){if(t){const r=p(t,e,n,s);return t[0](r)}}function p(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function h(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}function m(t,e,n,s,r,o){if(r){const c=p(e,n,s,o);t.p(c,r)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function $(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function k(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function x(){return w(" ")}function _(){return w("")}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function B(t,e,n){t.classList[n?"add":"remove"](e)}function C(t){a=t}function S(){if(!a)throw new Error("Function called outside component initialization");return a}function z(){const t=S();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(e,n);s.slice().forEach((e=>{e.call(t,r)}))}}}function N(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const O=[],L=[],M=[],A=[],R=Promise.resolve();let T=!1;function q(){T||(T=!0,R.then(D))}function I(t){M.push(t)}const P=new Set;let U=0;function D(){const t=a;do{for(;U<O.length;){const t=O[U];U++,C(t),H(t.$$)}for(C(null),O.length=0,U=0;L.length;)L.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];P.has(e)||(P.add(e),e())}M.length=0}while(O.length);for(;A.length;)A.pop()();T=!1,P.clear(),C(t)}function H(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const F=new Set;let Y;function W(){Y={r:0,c:[],p:Y}}function X(){Y.r||r(Y.c),Y=Y.p}function G(t,e){t&&t.i&&(F.delete(t),t.i(e))}function J(t,e,n,s){if(t&&t.o){if(F.has(t))return;F.add(t),Y.c.push((()=>{F.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function K(t,e){const n=e.token={};function s(t,s,r,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;void 0!==r&&(c=c.slice(),c[r]=o);const l=t&&(e.current=t)(c);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(W(),J(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),X())})):e.block.d(1),l.c(),G(l,1),l.m(e.mount(),e.anchor),a=!0),e.block=l,e.blocks&&(e.blocks[s]=l),a&&D()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=S();if(t.then((t=>{C(n),s(e.then,1,e.value,t),C(null)}),(t=>{if(C(n),s(e.catch,2,e.error,t),C(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var r}function Q(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}function V(t,e){J(t,1,1,(()=>{e.delete(t.key)}))}function Z(t,e,n,s,r,o,c,l,a,i,u,d){let f=t.length,p=o.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const g=[],$=new Map,v=new Map;for(h=p;h--;){const t=d(r,o,h),l=n(t);let a=c.get(l);a?s&&a.p(t,e):(a=i(l,t),a.c()),$.set(l,g[h]=a),l in m&&v.set(l,Math.abs(h-m[l]))}const b=new Set,k=new Set;function y(t){G(t,1),t.m(l,u),c.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=g[p-1],n=t[f-1],s=e.key,r=n.key;e===n?(u=e.first,f--,p--):$.has(r)?!c.has(s)||b.has(s)?y(e):k.has(r)?f--:v.get(s)>v.get(r)?(k.add(s),y(e)):(b.add(r),f--):(a(n,c),f--)}for(;f--;){const e=t[f];$.has(e.key)||a(e,c)}for(;p;)y(g[p-1]);return g}function tt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],l=e[o];if(l){for(const t in c)t in l||(s[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[o]=l}else for(const t in c)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function et(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function st(t,e,s,c){const{fragment:l,on_mount:a,on_destroy:i,after_update:u}=t.$$;l&&l.m(e,s),c||I((()=>{const e=a.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(I)}function rt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,n,o,c,l,i,u,d=[-1]){const f=a;C(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};u&&u(p.root);let h=!1;if(p.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&function(t,e){-1===t.$$.dirty[0]&&(O.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(b)}else p.fragment&&p.fragment.c();n.intro&&G(e.$$.fragment),st(e,n.target,n.anchor,n.customElement),D()}C(f)}class ct{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt=[];function at(t,e){return{subscribe:it(t,e).subscribe}}function it(e,n=t){let s;const r=new Set;function o(t){if(c(e,t)&&(e=t,s)){const t=!lt.length;for(const t of r)t[1](),lt.push(t,e);if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,l=t){const a=[c,l];return r.add(a),1===r.size&&(s=n(o)||t),c(e),()=>{r.delete(a),0===r.size&&(s(),s=null)}}}}function ut(e,n,s){const c=!Array.isArray(e),l=c?[e]:e,a=n.length<2;return at(s,(e=>{let s=!1;const i=[];let d=0,f=t;const p=()=>{if(d)return;f();const s=n(c?i[0]:i,e);a?e(s):f=o(s)?s:t},h=l.map(((t,e)=>u(t,(t=>{i[e]=t,d&=~(1<<e),s&&p()}),(()=>{d|=1<<e}))));return s=!0,p(),function(){r(h),f()}}))}function dt(t){let n,s,r;const o=[t[2]];var c=t[0];function l(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return c&&(n=new c(l()),n.$on("routeEvent",t[7])),{c(){n&&nt(n.$$.fragment),s=_()},m(t,e){n&&st(n,t,e),v(t,s,e),r=!0},p(t,e){const r=4&e?tt(o,[et(t[2])]):{};if(c!==(c=t[0])){if(n){W();const t=n;J(t.$$.fragment,1,0,(()=>{rt(t,1)})),X()}c?(n=new c(l()),n.$on("routeEvent",t[7]),nt(n.$$.fragment),G(n.$$.fragment,1),st(n,s.parentNode,s)):n=null}else c&&n.$set(r)},i(t){r||(n&&G(n.$$.fragment,t),r=!0)},o(t){n&&J(n.$$.fragment,t),r=!1},d(t){t&&b(s),n&&rt(n,t)}}}function ft(t){let n,s,r;const o=[{params:t[1]},t[2]];var c=t[0];function l(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return c&&(n=new c(l()),n.$on("routeEvent",t[6])),{c(){n&&nt(n.$$.fragment),s=_()},m(t,e){n&&st(n,t,e),v(t,s,e),r=!0},p(t,e){const r=6&e?tt(o,[2&e&&{params:t[1]},4&e&&et(t[2])]):{};if(c!==(c=t[0])){if(n){W();const t=n;J(t.$$.fragment,1,0,(()=>{rt(t,1)})),X()}c?(n=new c(l()),n.$on("routeEvent",t[6]),nt(n.$$.fragment),G(n.$$.fragment,1),st(n,s.parentNode,s)):n=null}else c&&n.$set(r)},i(t){r||(n&&G(n.$$.fragment,t),r=!0)},o(t){n&&J(n.$$.fragment,t),r=!1},d(t){t&&b(s),n&&rt(n,t)}}}function pt(t){let e,n,s,r;const o=[ft,dt],c=[];function l(t,e){return t[1]?0:1}return e=l(t),n=c[e]=o[e](t),{c(){n.c(),s=_()},m(t,n){c[e].m(t,n),v(t,s,n),r=!0},p(t,[r]){let a=e;e=l(t),e===a?c[e].p(t,r):(W(),J(c[a],1,1,(()=>{c[a]=null})),X(),n=c[e],n?n.p(t,r):(n=c[e]=o[e](t),n.c()),G(n,1),n.m(s.parentNode,s))},i(t){r||(G(n),r=!0)},o(t){J(n),r=!1},d(t){c[e].d(t),t&&b(s)}}}function ht(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const mt=at(null,(function(t){t(ht());const e=()=>{t(ht())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));ut(mt,(t=>t.location)),ut(mt,(t=>t.querystring));const gt=it(void 0);function $t(t,e,n){let{routes:s={}}=e,{prefix:r=""}=e,{restoreScrollState:o=!1}=e;class c{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:s}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,r,o,c=[],l="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(n=r[0])?(c.push("wild"),l+="/(.*)"):":"===n?(s=r.indexOf("?",1),o=r.indexOf(".",1),c.push(r.substring(1,~s?s:~o?o:r.length)),l+=~s&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(l+=(~s?"?":"")+"\\"+r.substring(o))):l+="/"+r;return{keys:c,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=s}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let s=0;for(;s<this._keys.length;){try{n[this._keys[s]]=decodeURIComponent(e[s+1]||"")||null}catch(t){n[this._keys[s]]=null}s++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const l=[];s instanceof Map?s.forEach(((t,e)=>{l.push(new c(e,t))})):Object.keys(s).forEach((t=>{l.push(new c(t,s[t]))}));let a=null,i=null,u={};const d=z();async function f(t,e){await(q(),R),d(t,e)}let p=null,h=null;var m;o&&(h=t=>{p=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),m=()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)},S().$$.after_update.push(m));let g=null,$=null;const v=mt.subscribe((async t=>{g=t;let e=0;for(;e<l.length;){const s=l[e].match(t.location);if(!s){e++;continue}const r={route:l[e].path,location:t.location,querystring:t.querystring,userData:l[e].userData,params:s&&"object"==typeof s&&Object.keys(s).length?s:null};if(!await l[e].checkConditions(r))return n(0,a=null),$=null,void f("conditionsFailed",r);f("routeLoading",Object.assign({},r));const o=l[e].component;if($!=o){o.loading?(n(0,a=o.loading),$=o,n(1,i=o.loadingParams),n(2,u={}),f("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:i}))):(n(0,a=null),$=null);const e=await o();if(t!=g)return;n(0,a=e&&e.default||e),$=o}return s&&"object"==typeof s&&Object.keys(s).length?n(1,i=s):n(1,i=null),n(2,u=l[e].props),void f("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:i})).then((()=>{gt.set(i)}))}n(0,a=null),$=null,gt.set(void 0)}));return function(t){S().$$.on_destroy.push(t)}((()=>{v(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,s=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,o=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=o?"manual":"auto")},[a,i,u,s,r,o,function(e){N.call(this,t,e)},function(e){N.call(this,t,e)}]}class vt extends ct{constructor(t){super(),ot(this,t,$t,pt,c,{routes:3,prefix:4,restoreScrollState:5})}}function bt(t,e){return t.slice(0,e)+"..."+t.slice(-e)}const kt=(yt="https://api.tzkt.io/v1",async(t,e={})=>await fetch(`${yt}${t}?`+new URLSearchParams(e)));var yt;const wt=(()=>{const t=it([]),e=(new signalR.HubConnectionBuilder).withUrl("https://api.tzkt.io/v1/events").build();async function n(){await e.start(),await e.invoke("SubscribeToBlocks"),t.set([]),kt("/blocks/count").then((t=>t.text())).then((e=>{Promise.all([...Array(10).keys()].map((t=>kt("/blocks/"+(Number(e)-t-1),{operations:!0}).then((t=>t.json()))))).then((e=>t.update((t=>[...e.reverse(),...t]))))}))}return e.onclose(n),e.on("blocks",(e=>{if(e.data)for(const n of e.data)console.log(Number(n.level)),kt(`/blocks/${Number(n.level)}`,{operations:!0}).then((t=>t.json())).then((e=>{t.update((t=>{const n=[...t,e];return n.slice(n.length-10)}))}))})),n(),t})();function xt(e){let n,s,r,o,c,l,a,i,u,d=(e[1].at(-1)?.level||"loading...")+"";return{c(){n=y("header"),s=y("div"),r=y("div"),o=y("a"),o.textContent="tezos explorer",c=x(),l=y("div"),a=w("current block: "),i=w(d),E(o,"class","logo svelte-rddav"),E(o,"href","#/"),E(l,"class","svelte-rddav"),E(r,"class","header-inner svelte-rddav"),E(r,"style",u=`height: ${e[0]}`),E(s,"class","container"),E(n,"class","svelte-rddav")},m(t,e){v(t,n,e),$(n,s),$(s,r),$(r,o),$(r,c),$(r,l),$(l,a),$(l,i)},p(t,[e]){2&e&&d!==(d=(t[1].at(-1)?.level||"loading...")+"")&&j(i,d),1&e&&u!==(u=`height: ${t[0]}`)&&E(r,"style",u)},i:t,o:t,d(t){t&&b(n)}}}function _t(t,e,n){let s;d(t,wt,(t=>n(1,s=t)));let{height:r="60px"}=e;return t.$$set=t=>{"height"in t&&n(0,r=t.height)},[r,s]}class Et extends ct{constructor(t){super(),ot(this,t,_t,xt,c,{height:0})}}function jt(e){let n;return{c(){n=y("div"),n.innerHTML="<span>Loading...</span>",E(n,"class","wrapper svelte-fj2cwv")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&b(n)}}}class Bt extends ct{constructor(t){super(),ot(this,t,null,jt,c,{})}}function Ct(t,e,n){const s=t.slice();return s[2]=e[n],s}function St(t){let e,n,s,r=t[2].parameter?.entrypoint+"";return{c(){e=y("span"),n=w(r),s=w("()"),E(e,"class","transaction-entrypoint svelte-4p6flo")},m(t,r){v(t,e,r),$(e,n),$(e,s)},p(t,e){1&e&&r!==(r=t[2].parameter?.entrypoint+"")&&j(n,r)},d(t){t&&b(e)}}}function zt(t){let e,n,s,r,o,c,l,a,u,d,f,p,h,m,g,k,_,C,S=t[2].numberInBlock+"",z=(t[2].sender.alias||bt(t[2].sender.address,5))+"",N=t[2].amount/1e6+"",O=t[2].parameter?.entrypoint&&St(t);return{c(){e=y("li"),n=y("span"),s=w("#"),r=w(S),o=x(),c=y("img"),d=x(),f=y("span"),p=w(z),h=x(),m=y("span"),g=w(N),k=w(" ꜩ"),_=x(),O&&O.c(),C=x(),E(n,"class","transaction-number svelte-4p6flo"),E(c,"class","sender-avatar svelte-4p6flo"),i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[2].sender.address}`)||E(c,"src",l),E(c,"width",a=20),E(c,"height",u=20),E(c,"alt",""),E(f,"class","sender-name svelte-4p6flo"),B(f,"alias",Boolean(t[2].sender.alias)),E(m,"class","transaction-amount svelte-4p6flo"),E(e,"class","transaction svelte-4p6flo"),B(e,"failed","failed"===t[2].status)},m(t,l){v(t,e,l),$(e,n),$(n,s),$(n,r),$(e,o),$(e,c),$(e,d),$(e,f),$(f,p),$(e,h),$(e,m),$(m,g),$(m,k),$(e,_),O&&O.m(e,null),$(e,C)},p(t,n){1&n&&S!==(S=t[2].numberInBlock+"")&&j(r,S),1&n&&!i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[2].sender.address}`)&&E(c,"src",l),1&n&&z!==(z=(t[2].sender.alias||bt(t[2].sender.address,5))+"")&&j(p,z),1&n&&B(f,"alias",Boolean(t[2].sender.alias)),1&n&&N!==(N=t[2].amount/1e6+"")&&j(g,N),t[2].parameter?.entrypoint?O?O.p(t,n):(O=St(t),O.c(),O.m(e,C)):O&&(O.d(1),O=null),1&n&&B(e,"failed","failed"===t[2].status)},d(t){t&&b(e),O&&O.d()}}}function Nt(e){let n,s,r,o,c,l,a,u,d,f,p,h,m,g=(e[0].alias||e[0].address)+"",_=e[1]&&function(e){let n;return{c(){n=y("span"),n.textContent=`${e[1]} ꜩ`,E(n,"class","reciever-amount svelte-4p6flo")},m(t,e){v(t,n,e)},p:t,d(t){t&&b(n)}}}(e),B=e[0].list,C=[];for(let t=0;t<B.length;t+=1)C[t]=zt(Ct(e,B,t));return{c(){n=y("div"),s=y("div"),r=y("span"),r.textContent="to",o=x(),c=y("img"),a=x(),u=y("a"),d=w(g),p=x(),_&&_.c(),h=x(),m=y("ul");for(let t=0;t<C.length;t+=1)C[t].c();E(r,"class","svelte-4p6flo"),E(c,"class","reciever-avatar svelte-4p6flo"),i(c.src,l=`https://services.tzkt.io/v1/avatars/${e[0].address}`)||E(c,"src",l),E(c,"width",25),E(c,"height",25),E(c,"alt",""),E(u,"class","reciever-name svelte-4p6flo"),E(u,"href",f=`#/accounts/${e[0].address}`),E(u,"target","_blank"),E(s,"class","reciever-head svelte-4p6flo"),E(m,"class","transactions-list svelte-4p6flo"),E(n,"class","reciever svelte-4p6flo")},m(t,e){v(t,n,e),$(n,s),$(s,r),$(s,o),$(s,c),$(s,a),$(s,u),$(u,d),$(s,p),_&&_.m(s,null),$(n,h),$(n,m);for(let t=0;t<C.length;t+=1)C[t].m(m,null)},p(t,[e]){if(1&e&&!i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[0].address}`)&&E(c,"src",l),1&e&&g!==(g=(t[0].alias||t[0].address)+"")&&j(d,g),1&e&&f!==(f=`#/accounts/${t[0].address}`)&&E(u,"href",f),t[1]&&_.p(t,e),1&e){let n;for(B=t[0].list,n=0;n<B.length;n+=1){const s=Ct(t,B,n);C[n]?C[n].p(s,e):(C[n]=zt(s),C[n].c(),C[n].m(m,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=B.length}},i:t,o:t,d(t){t&&b(n),_&&_.d(),k(C,t)}}}function Ot(t,e,n){let{reciever:s}=e,r=s.list.map((({amount:t})=>t)).reduce(((t,e)=>t+e),0)/1e6;return t.$$set=t=>{"reciever"in t&&n(0,s=t.reciever)},[s,r]}class Lt extends ct{constructor(t){super(),ot(this,t,Ot,Nt,c,{reciever:0})}}function Mt(t,e,n){const s=t.slice();return s[2]=e[n],s}function At(t,e){let n,s,r;return s=new Lt({props:{reciever:e[2]}}),{key:t,first:null,c(){n=_(),nt(s.$$.fragment),this.first=n},m(t,e){v(t,n,e),st(s,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.reciever=e[2]),s.$set(r)},i(t){r||(G(s.$$.fragment,t),r=!0)},o(t){J(s.$$.fragment,t),r=!1},d(t){t&&b(n),rt(s,t)}}}function Rt(t){let e,n,s=[],r=new Map,o=Object.values(t[0]);const c=t=>t[2].address;for(let e=0;e<o.length;e+=1){let n=Mt(t,o,e),l=c(n);r.set(l,s[e]=At(l,n))}return{c(){e=y("div");for(let t=0;t<s.length;t+=1)s[t].c();E(e,"class","block-body svelte-ratvwq")},m(t,r){v(t,e,r);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,[n]){1&n&&(o=Object.values(t[0]),W(),s=Z(s,n,c,1,t,o,r,e,V,At,null,Mt),X())},i(t){if(!n){for(let t=0;t<o.length;t+=1)G(s[t]);n=!0}},o(t){for(let t=0;t<s.length;t+=1)J(s[t]);n=!1},d(t){t&&b(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function Tt(t,e,n){let{block:s}=e;const r={};for(const[t,e]of Object.entries(s.transactions))r[e.target.address]??={list:[],...e.target},r[e.target.address].list.push({...e,numberInBlock:t});return t.$$set=t=>{"block"in t&&n(1,s=t.block)},[r,s]}class qt extends ct{constructor(t){super(),ot(this,t,Tt,Rt,c,{block:1})}}function It(t){let e,n;return e=new qt({props:{block:t[1]}}),{c(){nt(e.$$.fragment)},m(t,s){st(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.block=t[1]),e.$set(s)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){rt(e,t)}}}function Pt(t){let e,n,s,r,o,c,l,a,u,d,f,p,h,m,g,k,_,C,S,z,N,O=t[1].level+"",L=(t[1].baker.alias||"Baker")+"",M=t[1].baker.address+"",A=t[0]?"-":"+",R=t[0]&&It(t);return{c(){e=y("li"),n=y("div"),s=y("div"),r=w(O),o=x(),c=y("img"),a=x(),u=y("div"),d=y("div"),f=w(L),p=x(),h=y("div"),m=w(M),g=x(),k=y("button"),_=w(A),C=x(),R&&R.c(),E(s,"class","level svelte-10486pe"),i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[1].baker.address}`)||E(c,"src",l),E(c,"width",35),E(c,"height",35),E(c,"alt",""),E(c,"class","svelte-10486pe"),E(d,"class","baker-name svelte-10486pe"),E(h,"class","baker-address svelte-10486pe"),E(u,"class","svelte-10486pe"),E(k,"class","open-btn svelte-10486pe"),E(n,"class","block-head svelte-10486pe"),E(e,"class","block svelte-10486pe"),B(e,"show-body",t[0])},m(l,i){var b,y,w,x;v(l,e,i),$(e,n),$(n,s),$(s,r),$(n,o),$(n,c),$(n,a),$(n,u),$(u,d),$(d,f),$(u,p),$(u,h),$(h,m),$(n,g),$(n,k),$(k,_),$(e,C),R&&R.m(e,null),S=!0,z||(b=k,y="click",w=t[2],b.addEventListener(y,w,x),N=()=>b.removeEventListener(y,w,x),z=!0)},p(t,[n]){(!S||2&n)&&O!==(O=t[1].level+"")&&j(r,O),(!S||2&n&&!i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[1].baker.address}`))&&E(c,"src",l),(!S||2&n)&&L!==(L=(t[1].baker.alias||"Baker")+"")&&j(f,L),(!S||2&n)&&M!==(M=t[1].baker.address+"")&&j(m,M),(!S||1&n)&&A!==(A=t[0]?"-":"+")&&j(_,A),t[0]?R?(R.p(t,n),1&n&&G(R,1)):(R=It(t),R.c(),G(R,1),R.m(e,null)):R&&(W(),J(R,1,1,(()=>{R=null})),X()),1&n&&B(e,"show-body",t[0])},i(t){S||(G(R),S=!0)},o(t){J(R),S=!1},d(t){t&&b(e),R&&R.d(),z=!1,N()}}}function Ut(t,e,n){let{block:s}=e,{showBody:r=!1}=e;return t.$$set=t=>{"block"in t&&n(1,s=t.block),"showBody"in t&&n(0,r=t.showBody)},[r,s,()=>n(0,r=!r)]}class Dt extends ct{constructor(t){super(),ot(this,t,Ut,Pt,c,{block:1,showBody:0})}}function Ht(t,e,n){const s=t.slice();return s[1]=e[n],s}function Ft(e){let n,s;return n=new Bt({}),{c(){nt(n.$$.fragment)},m(t,e){st(n,t,e),s=!0},p:t,i(t){s||(G(n.$$.fragment,t),s=!0)},o(t){J(n.$$.fragment,t),s=!1},d(t){rt(n,t)}}}function Yt(t){let e,n,s=[],r=new Map,o=[...t[0]].reverse();const c=t=>t[1].hash;for(let e=0;e<o.length;e+=1){let n=Ht(t,o,e),l=c(n);r.set(l,s[e]=Wt(l,n))}return{c(){e=y("ul");for(let t=0;t<s.length;t+=1)s[t].c();E(e,"class","svelte-1bohe7p")},m(t,r){v(t,e,r);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,n){1&n&&(o=[...t[0]].reverse(),W(),s=Z(s,n,c,1,t,o,r,e,V,Wt,null,Ht),X())},i(t){if(!n){for(let t=0;t<o.length;t+=1)G(s[t]);n=!0}},o(t){for(let t=0;t<s.length;t+=1)J(s[t]);n=!1},d(t){t&&b(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function Wt(t,e){let n,s,r;return s=new Dt({props:{block:e[1]}}),{key:t,first:null,c(){n=_(),nt(s.$$.fragment),this.first=n},m(t,e){v(t,n,e),st(s,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.block=e[1]),s.$set(r)},i(t){r||(G(s.$$.fragment,t),r=!0)},o(t){J(s.$$.fragment,t),r=!1},d(t){t&&b(n),rt(s,t)}}}function Xt(t){let e,n,s,r,o,c;document.title=e="tzkt blocks | "+(t[0][t[0].length-1]?.level||"...");const l=[Yt,Ft],a=[];function i(t,e){return t[0].length?0:1}return s=i(t),r=a[s]=l[s](t),{c(){n=x(),r.c(),o=_()},m(t,e){v(t,n,e),a[s].m(t,e),v(t,o,e),c=!0},p(t,[n]){(!c||1&n)&&e!==(e="tzkt blocks | "+(t[0][t[0].length-1]?.level||"..."))&&(document.title=e);let u=s;s=i(t),s===u?a[s].p(t,n):(W(),J(a[u],1,1,(()=>{a[u]=null})),X(),r=a[s],r?r.p(t,n):(r=a[s]=l[s](t),r.c()),G(r,1),r.m(o.parentNode,o))},i(t){c||(G(r),c=!0)},o(t){J(r),c=!1},d(t){t&&b(n),a[s].d(t),t&&b(o)}}}function Gt(t,e,n){let s;return d(t,wt,(t=>n(0,s=t))),[s]}class Jt extends ct{constructor(t){super(),ot(this,t,Gt,Xt,c,{})}}const Kt=t=>({}),Qt=t=>({}),Vt=t=>({}),Zt=t=>({});function te(t){let e,n,s,r,o;const c=t[1].sidebar,l=f(c,t,t[0],Zt),a=t[1].main,i=f(a,t,t[0],Qt);return{c(){e=y("div"),n=y("div"),l&&l.c(),s=x(),r=y("div"),i&&i.c(),E(n,"class","left svelte-1022vnh"),E(r,"class","right svelte-1022vnh"),E(e,"class","wrapper svelte-1022vnh")},m(t,c){v(t,e,c),$(e,n),l&&l.m(n,null),$(e,s),$(e,r),i&&i.m(r,null),o=!0},p(t,[e]){l&&l.p&&(!o||1&e)&&m(l,c,t,t[0],o?h(c,t[0],e,Vt):g(t[0]),Zt),i&&i.p&&(!o||1&e)&&m(i,a,t,t[0],o?h(a,t[0],e,Kt):g(t[0]),Qt)},i(t){o||(G(l,t),G(i,t),o=!0)},o(t){J(l,t),J(i,t),o=!1},d(t){t&&b(e),l&&l.d(t),i&&i.d(t)}}}function ee(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class ne extends ct{constructor(t){super(),ot(this,t,ee,te,c,{})}}function se(t,e,n){const s=t.slice();return s[2]=e[n],s}function re(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function oe(e){let n,s,r,o,c,l,a,u,d,f,p,h,m,g,k,_,B,C,S,z,N,O,L,M=(e[5].alias||"User")+"",A=bt(e[5].address,10)+"",R=e[5].balance/1e6+"",T=e[5].counter+"",q=e[5].delegate&&ce(e);return{c(){n=y("div"),s=y("div"),r=y("img"),c=x(),l=y("div"),a=y("p"),u=w(M),d=x(),f=y("p"),p=w(A),h=x(),m=y("div"),g=w("balance: "),k=y("span"),_=w(R),B=w(" ꜩ"),C=x(),S=y("div"),z=w("counter: "),N=y("span"),O=w(T),L=x(),q&&q.c(),E(r,"class","account-avatar svelte-1o7xdh2"),i(r.src,o=`https://services.tzkt.io/v1/avatars/${e[5].address}`)||E(r,"src",o),E(r,"width",40),E(r,"height",40),E(r,"alt",""),E(a,"class","account-name svelte-1o7xdh2"),E(l,"class","account-header-text"),E(s,"class","account-header svelte-1o7xdh2"),E(k,"class","amount svelte-1o7xdh2"),E(n,"class","account")},m(t,e){v(t,n,e),$(n,s),$(s,r),$(s,c),$(s,l),$(l,a),$(a,u),$(l,d),$(l,f),$(f,p),$(n,h),$(n,m),$(m,g),$(m,k),$(k,_),$(k,B),$(n,C),$(n,S),$(S,z),$(S,N),$(N,O),$(n,L),q&&q.m(n,null)},p(t,e){1&e&&!i(r.src,o=`https://services.tzkt.io/v1/avatars/${t[5].address}`)&&E(r,"src",o),1&e&&M!==(M=(t[5].alias||"User")+"")&&j(u,M),1&e&&A!==(A=bt(t[5].address,10)+"")&&j(p,A),1&e&&R!==(R=t[5].balance/1e6+"")&&j(_,R),1&e&&T!==(T=t[5].counter+"")&&j(O,T),t[5].delegate?q?q.p(t,e):(q=ce(t),q.c(),q.m(n,null)):q&&(q.d(1),q=null)},i:t,o:t,d(t){t&&b(n),q&&q.d()}}}function ce(t){let e,n,s,r,o,c=(t[5].delegate.alias||t[5].delegate.address)+"";return{c(){e=y("div"),n=w("delegation: "),s=y("a"),r=w(c),E(s,"href",o=`#/accounts/${t[5].delegate.address}`)},m(t,o){v(t,e,o),$(e,n),$(e,s),$(s,r)},p(t,e){1&e&&c!==(c=(t[5].delegate.alias||t[5].delegate.address)+"")&&j(r,c),1&e&&o!==(o=`#/accounts/${t[5].delegate.address}`)&&E(s,"href",o)},d(t){t&&b(e)}}}function le(e){let n,s;return n=new Bt({}),{c(){nt(n.$$.fragment)},m(t,e){st(n,t,e),s=!0},p:t,i(t){s||(G(n.$$.fragment,t),s=!0)},o(t){J(n.$$.fragment,t),s=!1},d(t){rt(n,t)}}}function ae(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:le,then:oe,catch:re,value:5,blocks:[,,,]};return K(n=kt(`/accounts/${t[0].address}`).then(_e),r),{c(){e=y("div"),r.block.c(),E(e,"class","sidebar svelte-1o7xdh2"),E(e,"slot","sidebar")},m(t,n){v(t,e,n),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,s=!0},p(e,s){t=e,r.ctx=t,1&s&&n!==(n=kt(`/accounts/${t[0].address}`).then(_e))&&K(n,r)||Q(r,t,s)},i(t){s||(G(r.block),s=!0)},o(t){for(let t=0;t<3;t+=1){J(r.blocks[t])}s=!1},d(t){t&&b(e),r.block.d(),r.token=null,r=null}}}function ie(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function ue(e){let n,s=e[1].slice(0,100),r=[];for(let t=0;t<s.length;t+=1)r[t]=be(se(e,s,t));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=_()},m(t,e){for(let n=0;n<r.length;n+=1)r[n].m(t,e);v(t,n,e)},p(t,e){if(1&e){let o;for(s=t[1].slice(0,100),o=0;o<s.length;o+=1){const c=se(t,s,o);r[o]?r[o].p(c,e):(r[o]=be(c),r[o].c(),r[o].m(n.parentNode,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},i:t,o:t,d(t){k(r,t),t&&b(n)}}}function de(t){let e,n,s,r,o=t[2].type+"";return{c(){e=y("div"),n=w("//"),s=x(),r=w(o)},m(t,o){v(t,e,o),$(e,n),$(e,s),$(e,r)},p(t,e){1&e&&o!==(o=t[2].type+"")&&j(r,o)},d(t){t&&b(e)}}}function fe(t){let e,n;function s(t,e){return t[2].target.address===t[0].address?he:pe}let r=s(t),o=r(t);return{c(){e=y("div"),o.c(),n=x(),E(e,"class","operation svelte-1o7xdh2")},m(t,s){v(t,e,s),o.m(e,null),$(e,n)},p(t,c){r===(r=s(t))&&o?o.p(t,c):(o.d(1),o=r(t),o&&(o.c(),o.m(e,n)))},d(t){t&&b(e),o.d()}}}function pe(t){let e,n,s,r,o,c,l=(t[2].target.alias||bt(t[2].target.address,5))+"",a=t[2].parameter&&me(t),i=t[2].amount&&$e(t);return{c(){a&&a.c(),e=x(),i&&i.c(),n=x(),s=y("span"),s.textContent="to",r=y("a"),o=w(l),E(s,"class","svelte-1o7xdh2"),E(r,"class","operation-address-link svelte-1o7xdh2"),E(r,"href",c=`#/accounts/${t[2].target.address}`),B(r,"bold",Boolean(t[2].sender.alias))},m(t,c){a&&a.m(t,c),v(t,e,c),i&&i.m(t,c),v(t,n,c),v(t,s,c),v(t,r,c),$(r,o)},p(t,s){t[2].parameter?a?a.p(t,s):(a=me(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),t[2].amount?i?i.p(t,s):(i=$e(t),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),1&s&&l!==(l=(t[2].target.alias||bt(t[2].target.address,5))+"")&&j(o,l),1&s&&c!==(c=`#/accounts/${t[2].target.address}`)&&E(r,"href",c),1&s&&B(r,"bold",Boolean(t[2].sender.alias))},d(t){a&&a.d(t),t&&b(e),i&&i.d(t),t&&b(n),t&&b(s),t&&b(r)}}}function he(t){let e,n,s,r,o,c=(t[2].sender.alias||bt(t[2].sender.address,5))+"",l=t[2].amount&&ve(t);return{c(){l&&l.c(),e=x(),n=y("span"),n.textContent="from",s=y("a"),r=w(c),E(n,"class","svelte-1o7xdh2"),E(s,"class","operation-address-link svelte-1o7xdh2"),E(s,"href",o=`#/accounts/${t[2].sender.address}`),B(s,"bold",Boolean(t[2].sender.alias))},m(t,o){l&&l.m(t,o),v(t,e,o),v(t,n,o),v(t,s,o),$(s,r)},p(t,n){t[2].amount?l?l.p(t,n):(l=ve(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),1&n&&c!==(c=(t[2].sender.alias||bt(t[2].sender.address,5))+"")&&j(r,c),1&n&&o!==(o=`#/accounts/${t[2].sender.address}`)&&E(s,"href",o),1&n&&B(s,"bold",Boolean(t[2].sender.alias))},d(t){l&&l.d(t),t&&b(e),t&&b(n),t&&b(s)}}}function me(t){let e,n,s,r,o=t[2].parameter.entrypoint+"",c=t[2].amount&&ge();return{c(){e=y("code"),n=w(o),s=w("()"),c&&c.c(),r=_(),E(e,"class","entrypoint svelte-1o7xdh2")},m(t,o){v(t,e,o),$(e,n),$(e,s),c&&c.m(t,o),v(t,r,o)},p(t,e){1&e&&o!==(o=t[2].parameter.entrypoint+"")&&j(n,o),t[2].amount?c||(c=ge(),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},d(t){t&&b(e),c&&c.d(t),t&&b(r)}}}function ge(t){let e;return{c(){e=y("span"),e.textContent="with",E(e,"class","svelte-1o7xdh2")},m(t,n){v(t,e,n)},d(t){t&&b(e)}}}function $e(t){let e,n,s,r=t[2].amount/1e6+"";return{c(){e=y("span"),n=w(r),s=w(" ꜩ"),E(e,"class","amount amount--outcoming svelte-1o7xdh2")},m(t,r){v(t,e,r),$(e,n),$(e,s)},p(t,e){1&e&&r!==(r=t[2].amount/1e6+"")&&j(n,r)},d(t){t&&b(e)}}}function ve(t){let e,n,s,r=t[2].amount/1e6+"";return{c(){e=y("span"),n=w(r),s=w(" ꜩ"),E(e,"class","amount svelte-1o7xdh2")},m(t,r){v(t,e,r),$(e,n),$(e,s)},p(t,e){1&e&&r!==(r=t[2].amount/1e6+"")&&j(n,r)},d(t){t&&b(e)}}}function be(t){let e,n;function s(t,e){return"transaction"===t[2].type?fe:de}let r=s(t),o=r(t);return{c(){e=x(),o.c(),n=_()},m(t,s){v(t,e,s),o.m(t,s),v(t,n,s)},p(t,e){r===(r=s(t))&&o?o.p(t,e):(o.d(1),o=r(t),o&&(o.c(),o.m(n.parentNode,n)))},d(t){t&&b(e),o.d(t),t&&b(n)}}}function ke(e){let n,s;return n=new Bt({}),{c(){nt(n.$$.fragment)},m(t,e){st(n,t,e),s=!0},p:t,i(t){s||(G(n.$$.fragment,t),s=!0)},o(t){J(n.$$.fragment,t),s=!1},d(t){rt(n,t)}}}function ye(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:ke,then:ue,catch:ie,value:1,blocks:[,,,]};return K(n=kt(`/accounts/${t[0].address}/operations`).then(xe),r),{c(){e=y("div"),r.block.c(),E(e,"class","main svelte-1o7xdh2"),E(e,"slot","main")},m(t,n){v(t,e,n),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,s=!0},p(e,s){t=e,r.ctx=t,1&s&&n!==(n=kt(`/accounts/${t[0].address}/operations`).then(xe))&&K(n,r)||Q(r,t,s)},i(t){s||(G(r.block),s=!0)},o(t){for(let t=0;t<3;t+=1){J(r.blocks[t])}s=!1},d(t){t&&b(e),r.block.d(),r.token=null,r=null}}}function we(t){let e,n;return e=new ne({props:{$$slots:{main:[ye],sidebar:[ae]},$$scope:{ctx:t}}}),{c(){nt(e.$$.fragment)},m(t,s){st(e,t,s),n=!0},p(t,[n]){const s={};65&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){rt(e,t)}}}const xe=t=>t.json(),_e=t=>t.json();function Ee(t,e,n){let{params:s={}}=e;return t.$$set=t=>{"params"in t&&n(0,s=t.params)},[s]}class je extends ct{constructor(t){super(),ot(this,t,Ee,we,c,{params:0})}}function Be(e){let n;return{c(){n=y("div"),n.innerHTML='<div class="empty-page-content"><h2>404</h2> \n    <a href="#/" class="svelte-tfvyr3">go to main page</a></div>',E(n,"class","empty-page svelte-tfvyr3")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&b(n)}}}class Ce extends ct{constructor(t){super(),ot(this,t,null,Be,c,{})}}function Se(e){let n,s,r,o,c;return n=new Et({props:{height:ze}}),o=new vt({props:{routes:{"/":Jt,"/accounts/:address":je,"*":Ce},restoreScrollState:!0}}),{c(){nt(n.$$.fragment),s=x(),r=y("main"),nt(o.$$.fragment),E(r,"class","container svelte-179gnrj"),E(r,"style",`padding-top: calc(${ze} + 20px)`)},m(t,e){st(n,t,e),v(t,s,e),v(t,r,e),st(o,r,null),c=!0},p:t,i(t){c||(G(n.$$.fragment,t),G(o.$$.fragment,t),c=!0)},o(t){J(n.$$.fragment,t),J(o.$$.fragment,t),c=!1},d(t){rt(n,t),t&&b(s),t&&b(r),rt(o)}}}let ze="60px";return new class extends ct{constructor(t){super(),ot(this,t,null,Se,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
