if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=e=>n(e,s),t={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-for_zavod"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.3574eb36.css",revision:null},{url:"/img/background_form.5a8ea335.png",revision:null},{url:"/img/banner.53f458f1.png",revision:null},{url:"/img/gf1.65f6b1be.png",revision:null},{url:"/img/logo.51dc6082.svg",revision:null},{url:"/img/map-marker.7de06036.svg",revision:null},{url:"/img/phone.4d3fc370.svg",revision:null},{url:"/img/severstal.8f5d68d2.png",revision:null},{url:"/img/teplit.f538ba1f.png",revision:null},{url:"/img/video.7e978bd9.png",revision:null},{url:"/index.html",revision:"e1f96c4be7e954f16b7608fe6005039f"},{url:"/js/app.d887dc1c.js",revision:null},{url:"/js/chunk-vendors.28d07ce9.js",revision:null},{url:"/manifest.json",revision:"4ff709056500c1808e94a661ceb63b61"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
