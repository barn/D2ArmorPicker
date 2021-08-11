(()=>{"use strict";var e,r,t,o={865:(e,r,t)=>{var o=t(304);addEventListener("message",function(){var e=(0,o.Z)(function*({data:e}){console.group("WebWorker: Results Builder"),console.time("WebWorker: Results Builder");let r=e.config,o=new Uint32Array(e.permutations);console.group("Input"),console.debug("config",r),console.debug("mods",r.enabledMods),console.debug("permutation data",o),console.debug("permutation amount",o.length/12),console.groupEnd(),console.time("split permutations in packages of size 5e5");let s=[];for(let t=0;t<o.length/12;t+=5e5)s.push({buffer:Uint32Array.from(o.subarray(12*t,12*(t+5e5))).buffer,startPosition:t});console.timeEnd("split permutations in packages of size 5e5"),console.time("Get results from webworker helpers");let n=yield Promise.all(s.map(e=>new Promise(o=>{const s=new Worker(t.tu(new URL(t.p+t.u(118),t.b)));s.onmessage=({data:e})=>{o(e)},s.postMessage({permutations:e.buffer,startPosition:e.startPosition,config:r},[e.buffer])})));console.timeEnd("Get results from webworker helpers");let i=[0,0,0,0,0,0],a=new Set,u=new Set,l=n.reduce((e,r)=>e+r.buffer.byteLength,0);const f=new ArrayBuffer(l),c=new Uint16Array(f);let p=0;for(let t of n){let e=new Uint16Array(t.buffer);c.set(e,p),p+=e.length;for(let r=0;r<6;r++)t.maximumPossibleTiers[r]>i[r]&&(i[r]=t.maximumPossibleTiers[r]);a=new Set([...a,...t.statCombo3x100]),u=new Set([...u,...t.statCombo4x100])}console.log(`Sending ${c.length/7} results in ${l} bytes.`,c),console.timeEnd("WebWorker: Results Builder"),console.groupEnd(),postMessage({view:c.buffer,allArmorPermutations:o.buffer,maximumPossibleTiers:i,statCombo3x100:Array.from(a).sort(),statCombo4x100:Array.from(u).sort()},[c.buffer,o.buffer])});return function(r){return e.apply(this,arguments)}}())}},s={};function n(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={exports:{}};return o[e](t,t.exports,n),t.exports}n.m=o,n.x=()=>{var e=n.O(void 0,[592],()=>n(865));return n.O(e)},e=[],n.O=(r,t,o,s)=>{if(!t){var i=1/0;for(l=0;l<e.length;l++){for(var[t,o,s]=e[l],a=!0,u=0;u<t.length;u++)(!1&s||i>=s)&&Object.keys(n.O).every(e=>n.O[e](t[u]))?t.splice(u--,1):(a=!1,s<i&&(i=s));a&&(e.splice(l--,1),r=o())}return r}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[t,o,s]},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((r,t)=>(n.f[t](e,r),r),[])),n.u=e=>(592===e?"common":e)+"."+{118:"eb5923bf9e25afa0be52",592:"5f72fd69276d7fec5cb1"}[e]+".js",n.miniCssF=e=>{},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.tu=e=>(void 0===r&&(r={createScriptURL:e=>e},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("angular#bundler",r))),r.createScriptURL(e)),n.p="",(()=>{n.b=self.location+"";var e={865:1};n.f.i=(r,t)=>{e[r]||importScripts(n.tu(n.p+n.u(r)))};var r=self.webpackChunkd2_armor_picker=self.webpackChunkd2_armor_picker||[],t=r.push.bind(r);r.push=r=>{var[o,s,i]=r;for(var a in s)n.o(s,a)&&(n.m[a]=s[a]);for(i&&i(n);o.length;)e[o.pop()]=1;t(r)}})(),t=n.x,n.x=()=>n.e(592).then(t),n.x()})();