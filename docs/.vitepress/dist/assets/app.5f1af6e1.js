import{j as W,A as D,a1 as ue,a2 as ce,a3 as fe,a4 as pe,a5 as ge,a6 as ve,a7 as he,a8 as ze,a9 as ye,aa as be,ab as Ee,d as we,u as Le,x as Ce,ac as He,ad as Ae,ae as Oe,af as Se}from"./chunks/framework.1b3dd200.js";import{t as Te}from"./chunks/theme.881238d6.js";/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var b=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(n[d]=i[d])}return n},x=function(t){return t.tagName==="IMG"},xe=function(t){return NodeList.prototype.isPrototypeOf(t)},P=function(t){return t&&t.nodeType===1},Y=function(t){var i=t.currentSrc||t.src;return i.substr(-4).toLowerCase()===".svg"},Z=function(t){try{return Array.isArray(t)?t.filter(x):xe(t)?[].slice.call(t).filter(x):P(t)?[t].filter(x):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(x):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Pe=function(t){var i=document.createElement("div");return i.classList.add("medium-zoom-overlay"),i.style.background=t,i},Ie=function(t){var i=t.getBoundingClientRect(),d=i.top,p=i.left,I=i.width,N=i.height,h=t.cloneNode(),j=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=d+j+"px",h.style.left=p+A+"px",h.style.width=I+"px",h.style.height=N+"px",h.style.transform="",h},L=function(t,i){var d=b({bubbles:!1,cancelable:!1,detail:void 0},i);if(typeof window.CustomEvent=="function")return new CustomEvent(t,d);var p=document.createEvent("CustomEvent");return p.initCustomEvent(t,d.bubbles,d.cancelable,d.detail),p},Ne=function n(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(o){function a(){}o(a,a)},p=function(o){var a=o.target;if(a===S){z();return}g.indexOf(a)!==-1&&q({target:a})},I=function(){if(!(E||!e.original)){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(B-o)>m.scrollOffset&&setTimeout(z,150)}},N=function(o){var a=o.key||o.keyCode;(a==="Escape"||a==="Esc"||a===27)&&z()},h=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o;if(o.background&&(S.style.background=o.background),o.container&&o.container instanceof Object&&(a.container=b({},m.container,o.container)),o.template){var l=P(o.template)?o.template:document.querySelector(o.template);a.template=l}return m=b({},m,a),g.forEach(function(s){s.dispatchEvent(L("medium-zoom:update",{detail:{zoom:u}}))}),u},j=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(b({},m,o))},A=function(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];var s=a.reduce(function(r,f){return[].concat(r,Z(f))},[]);return s.filter(function(r){return g.indexOf(r)===-1}).forEach(function(r){g.push(r),r.classList.add("medium-zoom-image")}),O.forEach(function(r){var f=r.type,v=r.listener,w=r.options;s.forEach(function(y){y.addEventListener(f,v,w)})}),u},X=function(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];e.zoomed&&z();var s=a.length>0?a.reduce(function(r,f){return[].concat(r,Z(f))},[]):g;return s.forEach(function(r){r.classList.remove("medium-zoom-image"),r.dispatchEvent(L("medium-zoom:detach",{detail:{zoom:u}}))}),g=g.filter(function(r){return s.indexOf(r)===-1}),u},$=function(o,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(s){s.addEventListener("medium-zoom:"+o,a,l)}),O.push({type:"medium-zoom:"+o,listener:a,options:l}),u},G=function(o,a){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(s){s.removeEventListener("medium-zoom:"+o,a,l)}),O=O.filter(function(s){return!(s.type==="medium-zoom:"+o&&s.listener.toString()===a.toString())}),u},F=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.target,l=function(){var r={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},f=void 0,v=void 0;if(m.container)if(m.container instanceof Object)r=b({},r,m.container),f=r.width-r.left-r.right-m.margin*2,v=r.height-r.top-r.bottom-m.margin*2;else{var w=P(m.container)?m.container:document.querySelector(m.container),y=w.getBoundingClientRect(),R=y.width,ee=y.height,te=y.left,oe=y.top;r=b({},r,{width:R,height:ee,left:te,top:oe})}f=f||r.width-m.margin*2,v=v||r.height-m.margin*2;var H=e.zoomedHd||e.original,ne=Y(H)?f:H.naturalWidth||f,ae=Y(H)?v:H.naturalHeight||v,T=H.getBoundingClientRect(),re=T.top,ie=T.left,_=T.width,k=T.height,de=Math.min(Math.max(_,ne),f)/_,me=Math.min(Math.max(k,ae),v)/k,M=Math.min(de,me),le=(-ie+(f-_)/2+m.margin+r.left)/M,se=(-re+(v-k)/2+m.margin+r.top)/M,U="scale("+M+") translate3d("+le+"px, "+se+"px, 0)";e.zoomed.style.transform=U,e.zoomedHd&&(e.zoomedHd.style.transform=U)};return new d(function(s){if(a&&g.indexOf(a)===-1){s(u);return}var r=function R(){E=!1,e.zoomed.removeEventListener("transitionend",R),e.original.dispatchEvent(L("medium-zoom:opened",{detail:{zoom:u}})),s(u)};if(e.zoomed){s(u);return}if(a)e.original=a;else if(g.length>0){var f=g;e.original=f[0]}else{s(u);return}if(e.original.dispatchEvent(L("medium-zoom:open",{detail:{zoom:u}})),B=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,E=!0,e.zoomed=Ie(e.original),document.body.appendChild(S),m.template){var v=P(m.template)?m.template:document.querySelector(m.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",r),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,l()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),l())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),l()})}else l()})},z=function(){return new d(function(o){if(E||!e.original){o(u);return}var a=function l(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(S),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),E=!1,e.zoomed.removeEventListener("transitionend",l),e.original.dispatchEvent(L("medium-zoom:closed",{detail:{zoom:u}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,o(u)};E=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(L("medium-zoom:close",{detail:{zoom:u}})),e.zoomed.addEventListener("transitionend",a)})},q=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=o.target;return e.original?z():F({target:a})},K=function(){return m},J=function(){return g},Q=function(){return e.original},g=[],O=[],E=!1,B=0,m=i,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?m=t:(t||typeof t=="string")&&A(t),m=b({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},m);var S=Pe(m.background);document.addEventListener("click",p),document.addEventListener("keyup",N),document.addEventListener("scroll",I),window.addEventListener("resize",z);var u={open:F,close:z,toggle:q,update:h,clone:j,attach:A,detach:X,on:$,off:G,getOptions:K,getImages:J,getZoomedImage:Q};return u};function je(n,t){t===void 0&&(t={});var i=t.insertAt;if(!(!n||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css",i==="top"&&d.firstChild?d.insertBefore(p,d.firstChild):d.appendChild(p),p.styleSheet?p.styleSheet.cssText=n:p.appendChild(document.createTextNode(n))}}var Re=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";je(Re);const _e=Ne,ke={...Te,setup(){W(()=>{_e(".content img",{margin:24,background:"black"})})}};function V(n){if(n.extends){const t=V(n.extends);return{...t,...n,async enhanceApp(i){t.enhanceApp&&await t.enhanceApp(i),n.enhanceApp&&await n.enhanceApp(i)}}}return n}const C=V(ke),Me=we({name:"VitePressApp",setup(){const{site:n}=Le();return W(()=>{Ce(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),He(),Ae(),Oe(),C.setup&&C.setup(),()=>Se(C.Layout)}});async function De(){const n=qe(),t=Fe();t.provide(ce,n);const i=fe(n.route);return t.provide(pe,i),t.component("Content",ge),t.component("ClientOnly",ve),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return i.frontmatter.value}},$params:{get(){return i.page.value.params}}}),C.enhanceApp&&await C.enhanceApp({app:t,router:n,siteData:he}),{app:t,router:n,data:i}}function Fe(){return ze(Me)}function qe(){let n=D,t;return ye(i=>{let d=be(i);return d?(n&&(t=d),(n||t===d)&&(d=d.replace(/\.js$/,".lean.js")),D&&(n=!1),Ee(()=>import(d),[])):null},C.NotFound)}D&&De().then(({app:n,router:t,data:i})=>{t.go().then(()=>{ue(t.route,i.site),n.mount("#app")})});export{De as createApp};