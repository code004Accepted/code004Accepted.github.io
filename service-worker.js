if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return n;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/building-a-mc-server/index.html",revision:"766104b697e0bd7f73232619e219fcd8"},{url:"2021/building-a-mc-server/mcversions1.png",revision:"9f8285bbe9e2aa4127376a138aecf884"},{url:"2021/building-a-mc-server/mcversions2.png",revision:"326dcb9183ebb8b5f58d4d764a371559"},{url:"2021/building-a-mc-server/server1.png",revision:"928fc9c4e6784fa682af3c7f496fd234"},{url:"2021/building-a-mc-server/server2.png",revision:"e4e01bba017a312805d4c65d4d576c96"},{url:"2021/going-viral/index.html",revision:"37bdd3ba1a16bfb05d9351a5f5ad8fe0"},{url:"2021/my-colorful-life/index.html",revision:"a5b50b2a36075e5e59adcd35b722ae3f"},{url:"2021/test-on-encryption/index.html",revision:"71d89002bb9db7f75459a75aa3c98e82"},{url:"404.html",revision:"10a92e31424b54a955b140c72a22b975"},{url:"about/index.html",revision:"915971c8e7a344ed3ee32ded4a67f165"},{url:"appeal/index.html",revision:"404764bd78c63e67872e2420f51482c2"},{url:"archives/2021/04/index.html",revision:"4c3280847fbd408455410fcbaa1bcc96"},{url:"archives/2021/index.html",revision:"4c3280847fbd408455410fcbaa1bcc96"},{url:"archives/index.html",revision:"4c3280847fbd408455410fcbaa1bcc96"},{url:"categories/index.html",revision:"cfc80446759f716b7ffba8b6a53405e0"},{url:"categories/人生/index.html",revision:"df75a8a5d55904a2c6f6a0f7cd71d161"},{url:"categories/教程/index.html",revision:"d2a56b5052fd30998f11c12223c5ba4c"},{url:"categories/测试/index.html",revision:"7b0bab3afb4b4123cd322732c9308a13"},{url:"css/blog-encrypt.css",revision:"ee21c7086a59d52b97a9e7b6240a9414"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/main.css",revision:"818ce86f867417bc2a80cc84007c2703"},{url:"friends/index.html",revision:"2a13277c69e4cce6812cc57881a0b7a6"},{url:"img/128x128.png",revision:"b607466e800101240d77ed523290b888"},{url:"img/144x144.png",revision:"f09c9b7b4138ad5d2ac90e468fd4bfba"},{url:"img/16x16.png",revision:"805671cc2030ee69e8428aecc2712686"},{url:"img/180x180.png",revision:"b6e14bb7875e7a8190a78e755a93764a"},{url:"img/256x256.png",revision:"0ea94f96c5814793306683af3245f3f9"},{url:"img/32x32.png",revision:"f3337db8e3e00e247f2d23e2a5e15a87"},{url:"img/36x36.png",revision:"54b97ff5b17746f848a7a2e217691a81"},{url:"img/48x48.png",revision:"4cbcfe7e69acc38a1a22817b1eb155e0"},{url:"img/512x512.png",revision:"caba6a0c32e4ac056543e49e18882cac"},{url:"img/64x64.png",revision:"09487b0b74c53ce74e71e110d8150d18"},{url:"img/72x72.png",revision:"f98e58bffc871688ca7a109fe8cdd3d8"},{url:"img/90x90.png",revision:"d04bee8f88ed08096bff60073380b0dc"},{url:"img/96x96.png",revision:"8783e5a6119e496a421545d1e1e771ec"},{url:"img/avatar.png",revision:"b43b80b18db65b633cb2244d075fe6ca"},{url:"img/building-a-mc-server.jpg",revision:"9fdb9ef414f4f911647779597ea21b9a"},{url:"img/default.png",revision:"cbecf637ecf1059c2ff594cc419a04f9"},{url:"img/favicon.png",revision:"4bf28ec3eaa281bf86a84f7681c88163"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/my-colorful-life.jpg",revision:"99aa6a2ec3ebd6493d93da92eb2f7696"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/touchicon.png",revision:"4bf28ec3eaa281bf86a84f7681c88163"},{url:"index.html",revision:"0e72a52a1bc415934a866cce1755a24c"},{url:"js/boot.js",revision:"169ffc208dd5e8717a784877dc45828f"},{url:"js/color-schema.js",revision:"d19f1aa40bdbdca2ffbbea5d6525afe4"},{url:"js/debouncer.js",revision:"b191fcef450414f12dd272f9a75b4576"},{url:"js/events.js",revision:"b068a53e78e9d44705023286ff5084a1"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"eb5eb5f71bdb5d50dbf8082e64bfd0e6"},{url:"js/local-search.js",revision:"75f476f1d1a9d26231b2e6c4cde2d085"},{url:"js/plugins.js",revision:"fb2413b37749ab4ea3ae385cc36ebc45"},{url:"js/utils.js",revision:"2a78776680b15a5e41ccc9e63057306a"},{url:"lib/blog-encrypt.js",revision:"0bf58f8a39977610d0a1f563c635cff5"},{url:"lib/hint/hint.min.css",revision:"b5f3452bff6af473afc6ec1169990093"},{url:"links/index.html",revision:"2c14b3fc53ebc61e93de33bf7ad9e0a1"},{url:"msg/index.html",revision:"d08ee79fb5acd153c19a5bb062657d76"},{url:"personality/end.html",revision:"09e096cf1fab63545c01aebc58ce9fd7"},{url:"personality/index.html",revision:"04b15fed217525cee51bafc4936e0507"},{url:"personality/Q02.html",revision:"a89c95f4de07d5c3122776a1bfa7cdda"},{url:"personality/Q03.html",revision:"76a5f40f7d88c0862cd927af769994da"},{url:"personality/Q04.html",revision:"b66d52138cf60f64789c6c1567c13aba"},{url:"personality/start.html",revision:"0ccef6da2fd12085fd779d2cf2c094c6"},{url:"pwa/index.html",revision:"d16d189d8675173da8b4cb8116aedfed"},{url:"tags/index.html",revision:"91e3dced9f83e1196857f645ad1f47fe"},{url:"tags/Minecraft/index.html",revision:"454328ca8e0b66391f9ca7d8bf6c51ac"},{url:"tags/互联网/index.html",revision:"b87ca638016acd12aefa9a2e635c8e2b"}],{})}));
//# sourceMappingURL=service-worker.js.map