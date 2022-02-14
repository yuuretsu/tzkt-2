var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,a;function i(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function u(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function d(t,e,n){t.$$.on_destroy.push(u(e,n))}function f(t,e,n,s){if(t){const r=p(t,e,n,s);return t[0](r)}}function p(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function h(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}function m(t,e,n,s,r,o){if(r){const c=p(e,n,s,o);t.p(c,r)}}function $(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function g(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function v(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function k(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function E(){return _(" ")}function j(){return _("")}function B(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e,n){t.classList[n?"add":"remove"](e)}function L(t){a=t}function S(){if(!a)throw new Error("Function called outside component initialization");return a}function N(){const t=S();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(e,n);s.slice().forEach((e=>{e.call(t,r)}))}}}function O(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const q=[],M=[],A=[],T=[],R=Promise.resolve();let H=!1;function I(){H||(H=!0,R.then(F))}function P(t){A.push(t)}const U=new Set;let D=0;function F(){const t=a;do{for(;D<q.length;){const t=q[D];D++,L(t),Y(t.$$)}for(L(null),q.length=0,D=0;M.length;)M.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];U.has(e)||(U.add(e),e())}A.length=0}while(q.length);for(;T.length;)T.pop()();H=!1,U.clear(),L(t)}function Y(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const W=new Set;let X;function G(){X={r:0,c:[],p:X}}function J(){X.r||r(X.c),X=X.p}function K(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Q(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push((()=>{W.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function V(t,e){const n=e.token={};function s(t,s,r,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;void 0!==r&&(c=c.slice(),c[r]=o);const l=t&&(e.current=t)(c);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(G(),Q(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),J())})):e.block.d(1),l.c(),K(l,1),l.m(e.mount(),e.anchor),a=!0),e.block=l,e.blocks&&(e.blocks[s]=l),a&&F()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=S();if(t.then((t=>{L(n),s(e.then,1,e.value,t),L(null)}),(t=>{if(L(n),s(e.catch,2,e.error,t),L(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}else{if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}var r}function Z(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}const tt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function et(t,e){Q(t,1,1,(()=>{e.delete(t.key)}))}function nt(t,e,n,s,r,o,c,l,a,i,u,d){let f=t.length,p=o.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const $=[],g=new Map,v=new Map;for(h=p;h--;){const t=d(r,o,h),l=n(t);let a=c.get(l);a?s&&a.p(t,e):(a=i(l,t),a.c()),g.set(l,$[h]=a),l in m&&v.set(l,Math.abs(h-m[l]))}const b=new Set,y=new Set;function k(t){K(t,1),t.m(l,u),c.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=$[p-1],n=t[f-1],s=e.key,r=n.key;e===n?(u=e.first,f--,p--):g.has(r)?!c.has(s)||b.has(s)?k(e):y.has(r)?f--:v.get(s)>v.get(r)?(y.add(s),k(e)):(b.add(r),f--):(a(n,c),f--)}for(;f--;){const e=t[f];g.has(e.key)||a(e,c)}for(;p;)k($[p-1]);return $}function st(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],l=e[o];if(l){for(const t in c)t in l||(s[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[o]=l}else for(const t in c)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function rt(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function ct(t,e,s,c){const{fragment:l,on_mount:a,on_destroy:i,after_update:u}=t.$$;l&&l.m(e,s),c||P((()=>{const e=a.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(P)}function lt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(e,n,o,c,l,i,u,d=[-1]){const f=a;L(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};u&&u(p.root);let h=!1;if(p.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&function(t,e){-1===t.$$.dirty[0]&&(q.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(y)}else p.fragment&&p.fragment.c();n.intro&&K(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),F()}L(f)}class it{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];function dt(t,e){return{subscribe:ft(t,e).subscribe}}function ft(e,n=t){let s;const r=new Set;function o(t){if(c(e,t)&&(e=t,s)){const t=!ut.length;for(const t of r)t[1](),ut.push(t,e);if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,l=t){const a=[c,l];return r.add(a),1===r.size&&(s=n(o)||t),c(e),()=>{r.delete(a),0===r.size&&(s(),s=null)}}}}function pt(e,n,s){const c=!Array.isArray(e),l=c?[e]:e,a=n.length<2;return dt(s,(e=>{let s=!1;const i=[];let d=0,f=t;const p=()=>{if(d)return;f();const s=n(c?i[0]:i,e);a?e(s):f=o(s)?s:t},h=l.map(((t,e)=>u(t,(t=>{i[e]=t,d&=~(1<<e),s&&p()}),(()=>{d|=1<<e}))));return s=!0,p(),function(){r(h),f()}}))}function ht(t){let n,s,r;const o=[t[2]];var c=t[0];function l(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return c&&(n=new c(l()),n.$on("routeEvent",t[7])),{c(){n&&ot(n.$$.fragment),s=j()},m(t,e){n&&ct(n,t,e),b(t,s,e),r=!0},p(t,e){const r=4&e?st(o,[rt(t[2])]):{};if(c!==(c=t[0])){if(n){G();const t=n;Q(t.$$.fragment,1,0,(()=>{lt(t,1)})),J()}c?(n=new c(l()),n.$on("routeEvent",t[7]),ot(n.$$.fragment),K(n.$$.fragment,1),ct(n,s.parentNode,s)):n=null}else c&&n.$set(r)},i(t){r||(n&&K(n.$$.fragment,t),r=!0)},o(t){n&&Q(n.$$.fragment,t),r=!1},d(t){t&&y(s),n&&lt(n,t)}}}function mt(t){let n,s,r;const o=[{params:t[1]},t[2]];var c=t[0];function l(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return c&&(n=new c(l()),n.$on("routeEvent",t[6])),{c(){n&&ot(n.$$.fragment),s=j()},m(t,e){n&&ct(n,t,e),b(t,s,e),r=!0},p(t,e){const r=6&e?st(o,[2&e&&{params:t[1]},4&e&&rt(t[2])]):{};if(c!==(c=t[0])){if(n){G();const t=n;Q(t.$$.fragment,1,0,(()=>{lt(t,1)})),J()}c?(n=new c(l()),n.$on("routeEvent",t[6]),ot(n.$$.fragment),K(n.$$.fragment,1),ct(n,s.parentNode,s)):n=null}else c&&n.$set(r)},i(t){r||(n&&K(n.$$.fragment,t),r=!0)},o(t){n&&Q(n.$$.fragment,t),r=!1},d(t){t&&y(s),n&&lt(n,t)}}}function $t(t){let e,n,s,r;const o=[mt,ht],c=[];function l(t,e){return t[1]?0:1}return e=l(t),n=c[e]=o[e](t),{c(){n.c(),s=j()},m(t,n){c[e].m(t,n),b(t,s,n),r=!0},p(t,[r]){let a=e;e=l(t),e===a?c[e].p(t,r):(G(),Q(c[a],1,1,(()=>{c[a]=null})),J(),n=c[e],n?n.p(t,r):(n=c[e]=o[e](t),n.c()),K(n,1),n.m(s.parentNode,s))},i(t){r||(K(n),r=!0)},o(t){Q(n),r=!1},d(t){c[e].d(t),t&&y(s)}}}function gt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const vt=dt(null,(function(t){t(gt());const e=()=>{t(gt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));pt(vt,(t=>t.location)),pt(vt,(t=>t.querystring));const bt=ft(void 0);function yt(t,e,n){let{routes:s={}}=e,{prefix:r=""}=e,{restoreScrollState:o=!1}=e;class c{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:s}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,r,o,c=[],l="",a=t.split("/");for(a[0]||a.shift();r=a.shift();)"*"===(n=r[0])?(c.push("wild"),l+="/(.*)"):":"===n?(s=r.indexOf("?",1),o=r.indexOf(".",1),c.push(r.substring(1,~s?s:~o?o:r.length)),l+=~s&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(l+=(~s?"?":"")+"\\"+r.substring(o))):l+="/"+r;return{keys:c,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=s}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let s=0;for(;s<this._keys.length;){try{n[this._keys[s]]=decodeURIComponent(e[s+1]||"")||null}catch(t){n[this._keys[s]]=null}s++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const l=[];s instanceof Map?s.forEach(((t,e)=>{l.push(new c(e,t))})):Object.keys(s).forEach((t=>{l.push(new c(t,s[t]))}));let a=null,i=null,u={};const d=N();async function f(t,e){await(I(),R),d(t,e)}let p=null,h=null;var m;o&&(h=t=>{p=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),m=()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)},S().$$.after_update.push(m));let $=null,g=null;const v=vt.subscribe((async t=>{$=t;let e=0;for(;e<l.length;){const s=l[e].match(t.location);if(!s){e++;continue}const r={route:l[e].path,location:t.location,querystring:t.querystring,userData:l[e].userData,params:s&&"object"==typeof s&&Object.keys(s).length?s:null};if(!await l[e].checkConditions(r))return n(0,a=null),g=null,void f("conditionsFailed",r);f("routeLoading",Object.assign({},r));const o=l[e].component;if(g!=o){o.loading?(n(0,a=o.loading),g=o,n(1,i=o.loadingParams),n(2,u={}),f("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:i}))):(n(0,a=null),g=null);const e=await o();if(t!=$)return;n(0,a=e&&e.default||e),g=o}return s&&"object"==typeof s&&Object.keys(s).length?n(1,i=s):n(1,i=null),n(2,u=l[e].props),void f("routeLoaded",Object.assign({},r,{component:a,name:a.name,params:i})).then((()=>{bt.set(i)}))}n(0,a=null),g=null,bt.set(void 0)}));return function(t){S().$$.on_destroy.push(t)}((()=>{v(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,s=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,o=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=o?"manual":"auto")},[a,i,u,s,r,o,function(e){O.call(this,t,e)},function(e){O.call(this,t,e)}]}class kt extends it{constructor(t){super(),at(this,t,yt,$t,c,{routes:3,prefix:4,restoreScrollState:5})}}function xt(t,e){return t.slice(0,e)+"..."+t.slice(-e)}const wt=(_t="https://api.tzkt.io/v1",async(t,e={})=>await fetch(`${_t}${t}?`+new URLSearchParams(e)));var _t;const Et=(()=>{const t=ft([]),e=(new signalR.HubConnectionBuilder).withUrl("https://api.tzkt.io/v1/events").build();async function n(){await e.start(),await e.invoke("SubscribeToBlocks"),t.set([]),wt("/blocks/count").then((t=>t.text())).then((e=>{Promise.all([...Array(10).keys()].map((t=>wt("/blocks/"+(Number(e)-t-1),{operations:!0}).then((t=>t.json()))))).then((e=>t.update((t=>[...e.reverse(),...t]))))}))}return e.onclose(n),e.on("blocks",(e=>{if(e.data)for(const n of e.data)console.log(Number(n.level)),wt(`/blocks/${Number(n.level)}`,{operations:!0}).then((t=>t.json())).then((e=>{t.update((t=>{const n=[...t,e];return n.slice(n.length-10)}))}))})),n(),t})();function jt(e){let n,s,r,o,c,l,a,i,u,d=(e[1].at(-1)?.level||"loading...")+"";return{c(){n=x("header"),s=x("div"),r=x("div"),o=x("a"),o.textContent="tezos explorer",c=E(),l=x("div"),a=_("current block: "),i=_(d),B(o,"class","logo svelte-1102h95"),B(o,"href","#/"),B(l,"class","svelte-1102h95"),B(r,"class","header-inner svelte-1102h95"),B(r,"style",u=`height: ${e[0]}`),B(s,"class","container"),B(n,"class","svelte-1102h95")},m(t,e){b(t,n,e),v(n,s),v(s,r),v(r,o),v(r,c),v(r,l),v(l,a),v(l,i)},p(t,[e]){2&e&&d!==(d=(t[1].at(-1)?.level||"loading...")+"")&&z(i,d),1&e&&u!==(u=`height: ${t[0]}`)&&B(r,"style",u)},i:t,o:t,d(t){t&&y(n)}}}function Bt(t,e,n){let s;d(t,Et,(t=>n(1,s=t)));let{height:r="60px"}=e;return t.$$set=t=>{"height"in t&&n(0,r=t.height)},[r,s]}class zt extends it{constructor(t){super(),at(this,t,Bt,jt,c,{height:0})}}function Ct(e){let n;return{c(){n=x("div"),n.innerHTML="<span>Loading...</span>",B(n,"class","wrapper svelte-fj2cwv")},m(t,e){b(t,n,e)},p:t,i:t,o:t,d(t){t&&y(n)}}}class Lt extends it{constructor(t){super(),at(this,t,null,Ct,c,{})}}function St(t,e,n){const s=t.slice();return s[2]=e[n],s}function Nt(t){let e,n,s,r=t[2].amount/1e6+"";return{c(){e=x("span"),n=_(r),s=_(" ꜩ"),B(e,"class","transaction-amount svelte-1yvextx")},m(t,r){b(t,e,r),v(e,n),v(e,s)},p(t,e){1&e&&r!==(r=t[2].amount/1e6+"")&&z(n,r)},d(t){t&&y(e)}}}function Ot(t){let e,n,s,r=t[2].parameter?.entrypoint+"";return{c(){e=x("code"),n=_(r),s=_("()"),B(e,"class","transaction-entrypoint svelte-1yvextx")},m(t,r){b(t,e,r),v(e,n),v(e,s)},p(t,e){1&e&&r!==(r=t[2].parameter?.entrypoint+"")&&z(n,r)},d(t){t&&y(e)}}}function qt(t){let e,n,s,r,o,c,l,a,u,d,f,p,h,m,$,g,k=t[2].numberInBlock+"",w=(t[2].sender.alias||xt(t[2].sender.address,5))+"",j=t[2].amount&&Nt(t),L=t[2].parameter?.entrypoint&&Ot(t);return{c(){e=x("li"),n=x("span"),s=_("#"),r=_(k),o=E(),c=x("img"),d=E(),f=x("a"),p=_(w),m=E(),j&&j.c(),$=E(),L&&L.c(),g=E(),B(n,"class","transaction-number svelte-1yvextx"),B(c,"class","sender-avatar svelte-1yvextx"),i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[2].sender.address}`)||B(c,"src",l),B(c,"width",a=20),B(c,"height",u=20),B(c,"alt",""),B(f,"class","sender-name svelte-1yvextx"),B(f,"href",h=`#/accounts/${t[2].sender.address}`),B(f,"target","_blank"),C(f,"alias",Boolean(t[2].sender.alias)),B(e,"class","transaction svelte-1yvextx"),C(e,"failed","failed"===t[2].status)},m(t,l){b(t,e,l),v(e,n),v(n,s),v(n,r),v(e,o),v(e,c),v(e,d),v(e,f),v(f,p),v(e,m),j&&j.m(e,null),v(e,$),L&&L.m(e,null),v(e,g)},p(t,n){1&n&&k!==(k=t[2].numberInBlock+"")&&z(r,k),1&n&&!i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[2].sender.address}`)&&B(c,"src",l),1&n&&w!==(w=(t[2].sender.alias||xt(t[2].sender.address,5))+"")&&z(p,w),1&n&&h!==(h=`#/accounts/${t[2].sender.address}`)&&B(f,"href",h),1&n&&C(f,"alias",Boolean(t[2].sender.alias)),t[2].amount?j?j.p(t,n):(j=Nt(t),j.c(),j.m(e,$)):j&&(j.d(1),j=null),t[2].parameter?.entrypoint?L?L.p(t,n):(L=Ot(t),L.c(),L.m(e,g)):L&&(L.d(1),L=null),1&n&&C(e,"failed","failed"===t[2].status)},d(t){t&&y(e),j&&j.d(),L&&L.d()}}}function Mt(e){let n,s,r,o,c,l,a,u,d,f,p,h,m,$=(e[0].alias||e[0].address)+"",g=e[1]&&function(e){let n;return{c(){n=x("span"),n.textContent=`${e[1]} ꜩ`,B(n,"class","reciever-amount svelte-1yvextx")},m(t,e){b(t,n,e)},p:t,d(t){t&&y(n)}}}(e),w=e[0].list,j=[];for(let t=0;t<w.length;t+=1)j[t]=qt(St(e,w,t));return{c(){n=x("div"),s=x("div"),r=x("span"),r.textContent="to",o=E(),c=x("img"),a=E(),u=x("a"),d=_($),p=E(),g&&g.c(),h=E(),m=x("ul");for(let t=0;t<j.length;t+=1)j[t].c();B(r,"class","svelte-1yvextx"),B(c,"class","reciever-avatar svelte-1yvextx"),i(c.src,l=`https://services.tzkt.io/v1/avatars/${e[0].address}`)||B(c,"src",l),B(c,"width",25),B(c,"height",25),B(c,"alt",""),B(u,"class","reciever-name svelte-1yvextx"),B(u,"href",f=`#/accounts/${e[0].address}`),B(u,"target","_blank"),B(s,"class","reciever-head svelte-1yvextx"),B(m,"class","transactions-list svelte-1yvextx"),B(n,"class","reciever svelte-1yvextx")},m(t,e){b(t,n,e),v(n,s),v(s,r),v(s,o),v(s,c),v(s,a),v(s,u),v(u,d),v(s,p),g&&g.m(s,null),v(n,h),v(n,m);for(let t=0;t<j.length;t+=1)j[t].m(m,null)},p(t,[e]){if(1&e&&!i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[0].address}`)&&B(c,"src",l),1&e&&$!==($=(t[0].alias||t[0].address)+"")&&z(d,$),1&e&&f!==(f=`#/accounts/${t[0].address}`)&&B(u,"href",f),t[1]&&g.p(t,e),1&e){let n;for(w=t[0].list,n=0;n<w.length;n+=1){const s=St(t,w,n);j[n]?j[n].p(s,e):(j[n]=qt(s),j[n].c(),j[n].m(m,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=w.length}},i:t,o:t,d(t){t&&y(n),g&&g.d(),k(j,t)}}}function At(t,e,n){let{reciever:s}=e,r=s.list.map((({amount:t})=>t)).reduce(((t,e)=>t+e),0)/1e6;return t.$$set=t=>{"reciever"in t&&n(0,s=t.reciever)},[s,r]}class Tt extends it{constructor(t){super(),at(this,t,At,Mt,c,{reciever:0})}}function Rt(t,e,n){const s=t.slice();return s[2]=e[n],s}function Ht(t,e){let n,s,r;return s=new Tt({props:{reciever:e[2]}}),{key:t,first:null,c(){n=j(),ot(s.$$.fragment),this.first=n},m(t,e){b(t,n,e),ct(s,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.reciever=e[2]),s.$set(r)},i(t){r||(K(s.$$.fragment,t),r=!0)},o(t){Q(s.$$.fragment,t),r=!1},d(t){t&&y(n),lt(s,t)}}}function It(t){let e,n,s=[],r=new Map,o=Object.values(t[0]);const c=t=>t[2].address;for(let e=0;e<o.length;e+=1){let n=Rt(t,o,e),l=c(n);r.set(l,s[e]=Ht(l,n))}return{c(){e=x("div");for(let t=0;t<s.length;t+=1)s[t].c();B(e,"class","block-body svelte-ratvwq")},m(t,r){b(t,e,r);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,[n]){1&n&&(o=Object.values(t[0]),G(),s=nt(s,n,c,1,t,o,r,e,et,Ht,null,Rt),J())},i(t){if(!n){for(let t=0;t<o.length;t+=1)K(s[t]);n=!0}},o(t){for(let t=0;t<s.length;t+=1)Q(s[t]);n=!1},d(t){t&&y(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function Pt(t,e,n){let{block:s}=e;const r={};for(const[t,e]of Object.entries(s.transactions))r[e.target.address]??={list:[],...e.target},r[e.target.address].list.push({...e,numberInBlock:t});return t.$$set=t=>{"block"in t&&n(1,s=t.block)},[r,s]}class Ut extends it{constructor(t){super(),at(this,t,Pt,It,c,{block:1})}}function Dt(t){let e,n;return e=new Ut({props:{block:t[1]}}),{c(){ot(e.$$.fragment)},m(t,s){ct(e,t,s),n=!0},p(t,n){const s={};2&n&&(s.block=t[1]),e.$set(s)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function Ft(t){let e,n,s,r,o,c,l,a,u,d,f,p,h,m,$,g,k,w,j,L,S,N=t[1].level+"",O=(t[1].baker.alias||"Baker")+"",q=(t[2]?xt(t[1].baker.address,8):t[1].baker.address)+"",M=t[0]?"-":"+",A=t[0]&&Dt(t);return{c(){e=x("li"),n=x("div"),s=x("div"),r=_(N),o=E(),c=x("img"),a=E(),u=x("div"),d=x("div"),f=_(O),p=E(),h=x("div"),m=_(q),$=E(),g=x("button"),k=_(M),w=E(),A&&A.c(),B(s,"class","level svelte-1fzxdqu"),i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[1].baker.address}`)||B(c,"src",l),B(c,"width",35),B(c,"height",35),B(c,"alt",""),B(c,"class","svelte-1fzxdqu"),B(d,"class","baker-name svelte-1fzxdqu"),B(h,"class","baker-address svelte-1fzxdqu"),B(u,"class","svelte-1fzxdqu"),B(g,"class","open-btn svelte-1fzxdqu"),B(n,"class","block-head svelte-1fzxdqu"),B(e,"class","block svelte-1fzxdqu"),C(e,"show-body",t[0])},m(l,i){var y,x,_,E;b(l,e,i),v(e,n),v(n,s),v(s,r),v(n,o),v(n,c),v(n,a),v(n,u),v(u,d),v(d,f),v(u,p),v(u,h),v(h,m),v(n,$),v(n,g),v(g,k),v(e,w),A&&A.m(e,null),j=!0,L||(y=g,x="click",_=t[3],y.addEventListener(x,_,E),S=()=>y.removeEventListener(x,_,E),L=!0)},p(t,[n]){(!j||2&n)&&N!==(N=t[1].level+"")&&z(r,N),(!j||2&n&&!i(c.src,l=`https://services.tzkt.io/v1/avatars/${t[1].baker.address}`))&&B(c,"src",l),(!j||2&n)&&O!==(O=(t[1].baker.alias||"Baker")+"")&&z(f,O),(!j||6&n)&&q!==(q=(t[2]?xt(t[1].baker.address,8):t[1].baker.address)+"")&&z(m,q),(!j||1&n)&&M!==(M=t[0]?"-":"+")&&z(k,M),t[0]?A?(A.p(t,n),1&n&&K(A,1)):(A=Dt(t),A.c(),K(A,1),A.m(e,null)):A&&(G(),Q(A,1,1,(()=>{A=null})),J()),1&n&&C(e,"show-body",t[0])},i(t){j||(K(A),j=!0)},o(t){Q(A),j=!1},d(t){t&&y(e),A&&A.d(),L=!1,S()}}}function Yt(t,e,n){let{block:s}=e,{showBody:r=!1}=e,{compact:o=!0}=e;return t.$$set=t=>{"block"in t&&n(1,s=t.block),"showBody"in t&&n(0,r=t.showBody),"compact"in t&&n(2,o=t.compact)},[r,s,o,()=>n(0,r=!r)]}class Wt extends it{constructor(t){super(),at(this,t,Yt,Ft,c,{block:1,showBody:0,compact:2})}}function Xt(t,e,n){const s=t.slice();return s[1]=e[n],s}function Gt(e){let n,s;return n=new Lt({}),{c(){ot(n.$$.fragment)},m(t,e){ct(n,t,e),s=!0},p:t,i(t){s||(K(n.$$.fragment,t),s=!0)},o(t){Q(n.$$.fragment,t),s=!1},d(t){lt(n,t)}}}function Jt(t){let e,n,s=[],r=new Map,o=[...t[0]].reverse();const c=t=>t[1].hash;for(let e=0;e<o.length;e+=1){let n=Xt(t,o,e),l=c(n);r.set(l,s[e]=Kt(l,n))}return{c(){e=x("ul");for(let t=0;t<s.length;t+=1)s[t].c();B(e,"class","svelte-1bohe7p")},m(t,r){b(t,e,r);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,n){1&n&&(o=[...t[0]].reverse(),G(),s=nt(s,n,c,1,t,o,r,e,et,Kt,null,Xt),J())},i(t){if(!n){for(let t=0;t<o.length;t+=1)K(s[t]);n=!0}},o(t){for(let t=0;t<s.length;t+=1)Q(s[t]);n=!1},d(t){t&&y(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function Kt(t,e){let n,s,r;return s=new Wt({props:{block:e[1]}}),{key:t,first:null,c(){n=j(),ot(s.$$.fragment),this.first=n},m(t,e){b(t,n,e),ct(s,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.block=e[1]),s.$set(r)},i(t){r||(K(s.$$.fragment,t),r=!0)},o(t){Q(s.$$.fragment,t),r=!1},d(t){t&&y(n),lt(s,t)}}}function Qt(t){let e,n,s,r,o,c;document.title=e="tzkt blocks | "+(t[0][t[0].length-1]?.level||"...");const l=[Jt,Gt],a=[];function i(t,e){return t[0].length?0:1}return s=i(t),r=a[s]=l[s](t),{c(){n=E(),r.c(),o=j()},m(t,e){b(t,n,e),a[s].m(t,e),b(t,o,e),c=!0},p(t,[n]){(!c||1&n)&&e!==(e="tzkt blocks | "+(t[0][t[0].length-1]?.level||"..."))&&(document.title=e);let u=s;s=i(t),s===u?a[s].p(t,n):(G(),Q(a[u],1,1,(()=>{a[u]=null})),J(),r=a[s],r?r.p(t,n):(r=a[s]=l[s](t),r.c()),K(r,1),r.m(o.parentNode,o))},i(t){c||(K(r),c=!0)},o(t){Q(r),c=!1},d(t){t&&y(n),a[s].d(t),t&&y(o)}}}function Vt(t,e,n){let s;return d(t,Et,(t=>n(0,s=t))),[s]}class Zt extends it{constructor(t){super(),at(this,t,Vt,Qt,c,{})}}const te=t=>({}),ee=t=>({}),ne=t=>({}),se=t=>({});function re(t){let e,n,s,r,o;const c=t[1].sidebar,l=f(c,t,t[0],se),a=t[1].main,i=f(a,t,t[0],ee);return{c(){e=x("div"),n=x("div"),l&&l.c(),s=E(),r=x("div"),i&&i.c(),B(n,"class","left svelte-1022vnh"),B(r,"class","right svelte-1022vnh"),B(e,"class","wrapper svelte-1022vnh")},m(t,c){b(t,e,c),v(e,n),l&&l.m(n,null),v(e,s),v(e,r),i&&i.m(r,null),o=!0},p(t,[e]){l&&l.p&&(!o||1&e)&&m(l,c,t,t[0],o?h(c,t[0],e,ne):$(t[0]),se),i&&i.p&&(!o||1&e)&&m(i,a,t,t[0],o?h(a,t[0],e,te):$(t[0]),ee)},i(t){o||(K(l,t),K(i,t),o=!0)},o(t){Q(l,t),Q(i,t),o=!1},d(t){t&&y(e),l&&l.d(t),i&&i.d(t)}}}function oe(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class ce extends it{constructor(t){super(),at(this,t,oe,re,c,{})}}function le(t){let e,n;return{c(){e=w("title"),n=_(t[0])},m(t,s){b(t,e,s),v(e,n)},p(t,e){1&e&&z(n,t[0])},d(t){t&&y(e)}}}function ae(t){let e,n,s,r=t[0]&&le(t);const o=t[3].default,c=f(o,t,t[2],null);return{c(){e=w("svg"),r&&r.c(),n=j(),c&&c.c(),B(e,"xmlns","http://www.w3.org/2000/svg"),B(e,"viewBox",t[1]),B(e,"class","svelte-c8tyih")},m(t,o){b(t,e,o),r&&r.m(e,null),v(e,n),c&&c.m(e,null),s=!0},p(t,[l]){t[0]?r?r.p(t,l):(r=le(t),r.c(),r.m(e,n)):r&&(r.d(1),r=null),c&&c.p&&(!s||4&l)&&m(c,o,t,t[2],s?h(o,t[2],l,null):$(t[2]),null),(!s||2&l)&&B(e,"viewBox",t[1])},i(t){s||(K(c,t),s=!0)},o(t){Q(c,t),s=!1},d(t){t&&y(e),r&&r.d(),c&&c.d(t)}}}function ie(t,e,n){let{$$slots:s={},$$scope:r}=e,{title:o=null}=e,{viewBox:c}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"viewBox"in t&&n(1,c=t.viewBox),"$$scope"in t&&n(2,r=t.$$scope)},[o,c,r,s]}class ue extends it{constructor(t){super(),at(this,t,ie,ae,c,{title:0,viewBox:1})}}function de(t){let e;return{c(){e=w("path"),B(e,"d","M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z")},m(t,n){b(t,e,n)},d(t){t&&y(e)}}}function fe(t){let n,s;const r=[{viewBox:"0 0 24 24"},t[0]];let o={$$slots:{default:[de]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new ue({props:o}),{c(){ot(n.$$.fragment)},m(t,e){ct(n,t,e),s=!0},p(t,[e]){const s=1&e?st(r,[r[0],rt(t[0])]):{};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(K(n.$$.fragment,t),s=!0)},o(t){Q(n.$$.fragment,t),s=!1},d(t){lt(n,t)}}}function pe(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),g(t)))},[n=g(n)]}class he extends it{constructor(t){super(),at(this,t,pe,fe,c,{})}}function me(t){let e;return{c(){e=w("path"),B(e,"d","M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z")},m(t,n){b(t,e,n)},d(t){t&&y(e)}}}function $e(t){let n,s;const r=[{viewBox:"0 0 24 24"},t[0]];let o={$$slots:{default:[me]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new ue({props:o}),{c(){ot(n.$$.fragment)},m(t,e){ct(n,t,e),s=!0},p(t,[e]){const s=1&e?st(r,[r[0],rt(t[0])]):{};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(K(n.$$.fragment,t),s=!0)},o(t){Q(n.$$.fragment,t),s=!1},d(t){lt(n,t)}}}function ge(t,n,s){return t.$$set=t=>{s(0,n=e(e({},n),g(t)))},[n=g(n)]}class ve extends it{constructor(t){super(),at(this,t,ge,$e,c,{})}}const{Boolean:be}=tt;function ye(t,e,n){const s=t.slice();return s[2]=e[n],s}function ke(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function xe(e){let n,s,r,o,c,l,a,u,d,f,p,h,m,$,g,k,w,j,C,L,S,N,O,q=(e[5].alias||"User")+"",M=xt(e[5].address,10)+"",A=e[5].balance/1e6+"",T=e[5].counter+"",R=e[5].delegate&&we(e);return{c(){n=x("div"),s=x("div"),r=x("img"),c=E(),l=x("div"),a=x("p"),u=_(q),d=E(),f=x("p"),p=_(M),h=E(),m=x("div"),$=_("balance: "),g=x("span"),k=_(A),w=_(" ꜩ"),j=E(),C=x("div"),L=_("counter: "),S=x("span"),N=_(T),O=E(),R&&R.c(),B(r,"class","account-avatar svelte-1ca42ps"),i(r.src,o=`https://services.tzkt.io/v1/avatars/${e[5].address}`)||B(r,"src",o),B(r,"width",40),B(r,"height",40),B(r,"alt",""),B(a,"class","account-name svelte-1ca42ps"),B(l,"class","account-header-text"),B(s,"class","account-header svelte-1ca42ps"),B(g,"class","amount svelte-1ca42ps"),B(n,"class","account")},m(t,e){b(t,n,e),v(n,s),v(s,r),v(s,c),v(s,l),v(l,a),v(a,u),v(l,d),v(l,f),v(f,p),v(n,h),v(n,m),v(m,$),v(m,g),v(g,k),v(g,w),v(n,j),v(n,C),v(C,L),v(C,S),v(S,N),v(n,O),R&&R.m(n,null)},p(t,e){1&e&&!i(r.src,o=`https://services.tzkt.io/v1/avatars/${t[5].address}`)&&B(r,"src",o),1&e&&q!==(q=(t[5].alias||"User")+"")&&z(u,q),1&e&&M!==(M=xt(t[5].address,10)+"")&&z(p,M),1&e&&A!==(A=t[5].balance/1e6+"")&&z(k,A),1&e&&T!==(T=t[5].counter+"")&&z(N,T),t[5].delegate?R?R.p(t,e):(R=we(t),R.c(),R.m(n,null)):R&&(R.d(1),R=null)},i:t,o:t,d(t){t&&y(n),R&&R.d()}}}function we(t){let e,n,s,r,o,c=(t[5].delegate.alias||t[5].delegate.address)+"";return{c(){e=x("div"),n=_("delegation: "),s=x("a"),r=_(c),B(s,"href",o=`#/accounts/${t[5].delegate.address}`)},m(t,o){b(t,e,o),v(e,n),v(e,s),v(s,r)},p(t,e){1&e&&c!==(c=(t[5].delegate.alias||t[5].delegate.address)+"")&&z(r,c),1&e&&o!==(o=`#/accounts/${t[5].delegate.address}`)&&B(s,"href",o)},d(t){t&&y(e)}}}function _e(e){let n,s;return n=new Lt({}),{c(){ot(n.$$.fragment)},m(t,e){ct(n,t,e),s=!0},p:t,i(t){s||(K(n.$$.fragment,t),s=!0)},o(t){Q(n.$$.fragment,t),s=!1},d(t){lt(n,t)}}}function Ee(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:_e,then:xe,catch:ke,value:5,blocks:[,,,]};return V(n=wt(`/accounts/${t[0].address}`).then(Pe),r),{c(){e=x("div"),r.block.c(),B(e,"class","sidebar svelte-1ca42ps"),B(e,"slot","sidebar")},m(t,n){b(t,e,n),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,s=!0},p(e,s){t=e,r.ctx=t,1&s&&n!==(n=wt(`/accounts/${t[0].address}`).then(Pe))&&V(n,r)||Z(r,t,s)},i(t){s||(K(r.block),s=!0)},o(t){for(let t=0;t<3;t+=1){Q(r.blocks[t])}s=!1},d(t){t&&y(e),r.block.d(),r.token=null,r=null}}}function je(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Be(t){let e,n,s,r,o=t[1].slice(0,100),c=[];for(let e=0;e<o.length;e+=1)c[e]=Ae(ye(t,o,e));const l=t=>Q(c[t],1,1,(()=>{c[t]=null}));return{c(){e=x("h1"),e.textContent="Operations",n=E();for(let t=0;t<c.length;t+=1)c[t].c();s=j()},m(t,o){b(t,e,o),b(t,n,o);for(let e=0;e<c.length;e+=1)c[e].m(t,o);b(t,s,o),r=!0},p(t,e){if(1&e){let n;for(o=t[1].slice(0,100),n=0;n<o.length;n+=1){const r=ye(t,o,n);c[n]?(c[n].p(r,e),K(c[n],1)):(c[n]=Ae(r),c[n].c(),K(c[n],1),c[n].m(s.parentNode,s))}for(G(),n=o.length;n<c.length;n+=1)l(n);J()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)K(c[t]);r=!0}},o(t){c=c.filter(be);for(let t=0;t<c.length;t+=1)Q(c[t]);r=!1},d(t){t&&y(e),t&&y(n),k(c,t),t&&y(s)}}}function ze(e){let n,s,r,o,c=e[2].type+"";return{c(){n=x("div"),s=_("//"),r=E(),o=_(c)},m(t,e){b(t,n,e),v(n,s),v(n,r),v(n,o)},p(t,e){1&e&&c!==(c=t[2].type+"")&&z(o,c)},i:t,o:t,d(t){t&&y(n)}}}function Ce(t){let e,n,s,r,o;const c=[Se,Le],l=[];function a(t,e){return t[2].target.address===t[0].address?0:1}return n=a(t),s=l[n]=c[n](t),{c(){e=x("div"),s.c(),r=E(),B(e,"class","operation svelte-1ca42ps"),C(e,"failed","failed"===t[2].status)},m(t,s){b(t,e,s),l[n].m(e,null),v(e,r),o=!0},p(t,o){let i=n;n=a(t),n===i?l[n].p(t,o):(G(),Q(l[i],1,1,(()=>{l[i]=null})),J(),s=l[n],s?s.p(t,o):(s=l[n]=c[n](t),s.c()),K(s,1),s.m(e,r)),1&o&&C(e,"failed","failed"===t[2].status)},i(t){o||(K(s),o=!0)},o(t){Q(s),o=!1},d(t){t&&y(e),l[n].d()}}}function Le(t){let e,n,s,r,o,c,l,a,i,u,d=(t[2].target.alias||xt(t[2].target.address,5))+"";n=new ve({});let f=t[2].parameter&&Ne(t),p=t[2].amount&&qe(t);return{c(){e=x("div"),ot(n.$$.fragment),s=E(),f&&f.c(),r=E(),p&&p.c(),o=E(),c=x("span"),c.textContent="to",l=x("a"),a=_(d),B(e,"class","transaction-icon svelte-1ca42ps"),B(c,"class","svelte-1ca42ps"),B(l,"class","operation-address-link svelte-1ca42ps"),B(l,"href",i=`#/accounts/${t[2].target.address}`),C(l,"bold",Boolean(t[2].target.alias))},m(t,i){b(t,e,i),ct(n,e,null),b(t,s,i),f&&f.m(t,i),b(t,r,i),p&&p.m(t,i),b(t,o,i),b(t,c,i),b(t,l,i),v(l,a),u=!0},p(t,e){t[2].parameter?f?f.p(t,e):(f=Ne(t),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null),t[2].amount?p?p.p(t,e):(p=qe(t),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),(!u||1&e)&&d!==(d=(t[2].target.alias||xt(t[2].target.address,5))+"")&&z(a,d),(!u||1&e&&i!==(i=`#/accounts/${t[2].target.address}`))&&B(l,"href",i),1&e&&C(l,"bold",Boolean(t[2].target.alias))},i(t){u||(K(n.$$.fragment,t),u=!0)},o(t){Q(n.$$.fragment,t),u=!1},d(t){t&&y(e),lt(n),t&&y(s),f&&f.d(t),t&&y(r),p&&p.d(t),t&&y(o),t&&y(c),t&&y(l)}}}function Se(t){let e,n,s,r,o,c,l,a,i,u=(t[2].sender.alias||xt(t[2].sender.address,5))+"";n=new he({});let d=t[2].amount&&Me(t);return{c(){e=x("div"),ot(n.$$.fragment),s=E(),d&&d.c(),r=E(),o=x("span"),o.textContent="from",c=x("a"),l=_(u),B(e,"class","transaction-icon svelte-1ca42ps"),B(o,"class","svelte-1ca42ps"),B(c,"class","operation-address-link svelte-1ca42ps"),B(c,"href",a=`#/accounts/${t[2].sender.address}`),C(c,"bold",Boolean(t[2].sender.alias))},m(t,a){b(t,e,a),ct(n,e,null),b(t,s,a),d&&d.m(t,a),b(t,r,a),b(t,o,a),b(t,c,a),v(c,l),i=!0},p(t,e){t[2].amount?d?d.p(t,e):(d=Me(t),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null),(!i||1&e)&&u!==(u=(t[2].sender.alias||xt(t[2].sender.address,5))+"")&&z(l,u),(!i||1&e&&a!==(a=`#/accounts/${t[2].sender.address}`))&&B(c,"href",a),1&e&&C(c,"bold",Boolean(t[2].sender.alias))},i(t){i||(K(n.$$.fragment,t),i=!0)},o(t){Q(n.$$.fragment,t),i=!1},d(t){t&&y(e),lt(n),t&&y(s),d&&d.d(t),t&&y(r),t&&y(o),t&&y(c)}}}function Ne(t){let e,n,s,r,o=t[2].parameter.entrypoint+"",c=t[2].amount&&Oe();return{c(){e=x("code"),n=_(o),s=_("()"),c&&c.c(),r=j(),B(e,"class","entrypoint svelte-1ca42ps")},m(t,o){b(t,e,o),v(e,n),v(e,s),c&&c.m(t,o),b(t,r,o)},p(t,e){1&e&&o!==(o=t[2].parameter.entrypoint+"")&&z(n,o),t[2].amount?c||(c=Oe(),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},d(t){t&&y(e),c&&c.d(t),t&&y(r)}}}function Oe(t){let e;return{c(){e=x("span"),e.textContent="with",B(e,"class","svelte-1ca42ps")},m(t,n){b(t,e,n)},d(t){t&&y(e)}}}function qe(t){let e,n,s,r=t[2].amount/1e6+"";return{c(){e=x("span"),n=_(r),s=_(" ꜩ"),B(e,"class","amount amount--outcoming svelte-1ca42ps")},m(t,r){b(t,e,r),v(e,n),v(e,s)},p(t,e){1&e&&r!==(r=t[2].amount/1e6+"")&&z(n,r)},d(t){t&&y(e)}}}function Me(t){let e,n,s,r=t[2].amount/1e6+"";return{c(){e=x("span"),n=_(r),s=_(" ꜩ"),B(e,"class","amount svelte-1ca42ps")},m(t,r){b(t,e,r),v(e,n),v(e,s)},p(t,e){1&e&&r!==(r=t[2].amount/1e6+"")&&z(n,r)},d(t){t&&y(e)}}}function Ae(t){let e,n,s,r,o;const c=[Ce,ze],l=[];function a(t,e){return"transaction"===t[2].type?0:1}return n=a(t),s=l[n]=c[n](t),{c(){e=E(),s.c(),r=j()},m(t,s){b(t,e,s),l[n].m(t,s),b(t,r,s),o=!0},p(t,e){let o=n;n=a(t),n===o?l[n].p(t,e):(G(),Q(l[o],1,1,(()=>{l[o]=null})),J(),s=l[n],s?s.p(t,e):(s=l[n]=c[n](t),s.c()),K(s,1),s.m(r.parentNode,r))},i(t){o||(K(s),o=!0)},o(t){Q(s),o=!1},d(t){t&&y(e),l[n].d(t),t&&y(r)}}}function Te(e){let n,s;return n=new Lt({}),{c(){ot(n.$$.fragment)},m(t,e){ct(n,t,e),s=!0},p:t,i(t){s||(K(n.$$.fragment,t),s=!0)},o(t){Q(n.$$.fragment,t),s=!1},d(t){lt(n,t)}}}function Re(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Te,then:Be,catch:je,value:1,blocks:[,,,]};return V(n=wt(`/accounts/${t[0].address}/operations`).then(Ie),r),{c(){e=x("div"),r.block.c(),B(e,"class","main svelte-1ca42ps"),B(e,"slot","main")},m(t,n){b(t,e,n),r.block.m(e,r.anchor=null),r.mount=()=>e,r.anchor=null,s=!0},p(e,s){t=e,r.ctx=t,1&s&&n!==(n=wt(`/accounts/${t[0].address}/operations`).then(Ie))&&V(n,r)||Z(r,t,s)},i(t){s||(K(r.block),s=!0)},o(t){for(let t=0;t<3;t+=1){Q(r.blocks[t])}s=!1},d(t){t&&y(e),r.block.d(),r.token=null,r=null}}}function He(t){let e,n;return e=new ce({props:{$$slots:{main:[Re],sidebar:[Ee]},$$scope:{ctx:t}}}),{c(){ot(e.$$.fragment)},m(t,s){ct(e,t,s),n=!0},p(t,[n]){const s={};65&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}const Ie=t=>t.json(),Pe=t=>t.json();function Ue(t,e,n){let{params:s={}}=e;return t.$$set=t=>{"params"in t&&n(0,s=t.params)},[s]}class De extends it{constructor(t){super(),at(this,t,Ue,He,c,{params:0})}}function Fe(e){let n;return{c(){n=x("div"),n.innerHTML='<div class="empty-page-content"><h2>404</h2> \n    <a href="#/" class="svelte-tfvyr3">go to main page</a></div>',B(n,"class","empty-page svelte-tfvyr3")},m(t,e){b(t,n,e)},p:t,i:t,o:t,d(t){t&&y(n)}}}class Ye extends it{constructor(t){super(),at(this,t,null,Fe,c,{})}}function We(e){let n,s,r,o,c;return n=new zt({props:{height:Xe}}),o=new kt({props:{routes:{"/":Zt,"/accounts/:address":De,"*":Ye},restoreScrollState:!0}}),{c(){ot(n.$$.fragment),s=E(),r=x("main"),ot(o.$$.fragment),B(r,"class","container svelte-179gnrj"),B(r,"style",`padding-top: calc(${Xe} + 20px)`)},m(t,e){ct(n,t,e),b(t,s,e),b(t,r,e),ct(o,r,null),c=!0},p:t,i(t){c||(K(n.$$.fragment,t),K(o.$$.fragment,t),c=!0)},o(t){Q(n.$$.fragment,t),Q(o.$$.fragment,t),c=!1},d(t){lt(n,t),t&&y(s),t&&y(r),lt(o)}}}let Xe="60px";return new class extends it{constructor(t){super(),at(this,t,null,We,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
