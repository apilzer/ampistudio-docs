(()=>{"use strict";var e,t,r,a,o,n={},d={};function i(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=d,e=[],i.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var d=!0,f=0;f<r.length;f++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](r[f])))?r.splice(f--,1):(d=!1,o<n&&(n=o));if(d){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&a&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(o,n),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",64:"aa389739",93:"f17cbe3a",98:"a7bd4aaa",134:"393be207",235:"a7456010",401:"17896441",542:"02241eb1",567:"22dd74f7",634:"c4f5d8e4",647:"5e95c892",742:"aba21aa0",861:"99bfddfb",869:"d09e6428",969:"14eb3368",976:"0e384e19"}[e]||e)+"."+{48:"34a48771",61:"71a6f173",64:"9fd64ca2",93:"ab18b00d",98:"2fb1aa48",134:"7d41017b",235:"7731ce6c",237:"93c136c8",401:"03aafd23",408:"6bba11a2",542:"2337c22f",567:"ca618389",634:"3ced8df0",647:"30d8ee40",742:"9384a324",861:"f88c8f5a",869:"0030f179",969:"4a1708b1",976:"5fb82e6b"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="ampistudio-docs:",i.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var d,f;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){d=l;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",o+r),d.src=e),a[e]=[t];var b=(t,r)=>{d.onerror=d.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=b.bind(null,d.onerror),d.onload=b.bind(null,d.onload),f&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",i.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61",aa389739:"64",f17cbe3a:"93",a7bd4aaa:"98","393be207":"134",a7456010:"235","02241eb1":"542","22dd74f7":"567",c4f5d8e4:"634","5e95c892":"647",aba21aa0:"742","99bfddfb":"861",d09e6428:"869","14eb3368":"969","0e384e19":"976"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,250:0};i.f.j=(t,r)=>{var a=i.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(250|354)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=i.p+i.u(t),d=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],d=r[1],f=r[2],c=0;if(n.some((t=>0!==e[t]))){for(a in d)i.o(d,a)&&(i.m[a]=d[a]);if(f)var u=f(i)}for(t&&t(r);c<n.length;c++)o=n[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},r=self.webpackChunkampistudio_docs=self.webpackChunkampistudio_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();