(function(){"use strict";var e={4856:function(e,n,t){var r=t(5130),o=t(6768);function i(e,n){const t=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(t)}var u=t(1241);const a={},c=(0,u.A)(a,[["render",i]]);var l=c,s=t(4458);(0,s.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=t(1387),d=t.p+"img/moon.5658c089.png",p=t.p+"img/sun.9b07ee5e.png",m=t.p+"img/clound.abf3ad8e.png",g=t.p+"img/tree.81f8855e.png";const v={class:"w"},h=(0,o.Fv)('<section><img src="'+d+'" alt="" class="img1"><img src="'+p+'" alt="" class="img2"><img src="'+m+'" alt="" class="img3"><img src="'+g+'" alt="" class="img4"><h2 id="text">Hello Frontend!</h2></section>',1),b=(0,o.Lk)("h1",null,"关于前端",-1),y=(0,o.Lk)("h2",null,"为什么选择前端",-1),k=(0,o.Lk)("p",null,"自己其实是一个比较喜欢创造东西的人，并且作为一个编程小白经过刚刚入学的时候的痛苦之后，其实自己对于自己的编程能力不是特别的自信，甚至觉得非常的枯燥······同时在写代码的时候也感觉不到有什么乐趣。 ",-1),w=(0,o.Lk)("p",null,"但是后面了解到了前端，感觉符合自己想要创造的想法，入门也比较容易，同时还有源源不断的正反馈，自己就坚持下来啦~",-1),A=(0,o.Lk)("h2",null,"学习的感受",-1),L=(0,o.Lk)("p",null,"一开始的html和css非常容易上手，而且也很快能够看到成果，但是随着学到的属性越来越多，深深地感觉到了要学的东西好多好杂！！！大学生不能没有chatgpt~ ",-1),E=(0,o.Lk)("p",null,"不过能看到自己做出来满意的效果还是非常有成就感的，比如上面那个banner我真的非常喜欢哈哈哈哈哈。",-1),C=(0,o.Lk)("h2",null,"学习途径",-1),O=(0,o.Lk)("p",null,"尝试了看文档学习和看视频学习，感觉还是看视频比较适合我。文档学习感觉有点枯燥无聊，同时在一些地方觉得文档不是非常清楚，感觉学起来挺累的。还是视频手把手教学更适合我这种小菜鸡。",-1);function S(e,n,t,r,i,u){const a=(0,o.g2)("navigation"),c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",v,[(0,o.bF)(a),h,(0,o.Lk)("footer",null,[b,y,k,w,A,L,E,C,O,(0,o.bF)(c,{to:"/two",class:"iconfont icon-jiantou_yemian_xiangyou",style:{"font-size":"5rem"}})])])}var j=t(8317),F={name:"HomeView",components:{navigation:j.A},mounted(){const e=document.querySelector(".img1"),n=document.querySelector(".img2"),t=document.querySelector(".img3"),r=document.querySelector("#text");window.addEventListener("scroll",(()=>{let o=window.scrollY;r.style.marginTop=.7*o*.0625+"rem",t.style.top=-1.5*o*.0625+"rem",n.style.left=1.5*o*.0625+"rem",n.style.top=1.5*o*.0625+"rem",e.style.top=1*o*.0625+"rem",e.style.left=-1*o*.0625+"rem"}))}};const N=(0,u.A)(F,[["render",S]]);var _=N;const x=[{path:"/",name:"one",component:_},{path:"/two",name:"two",component:()=>t.e(230).then(t.bind(t,4230))},{path:"/three",name:"three",component:()=>t.e(939).then(t.bind(t,4362))}],T=(0,f.aE)({history:(0,f.Bt)(),routes:x});var q=T;t(4188);const P=(0,r.Ef)(l);P.use(q).mount("#app")},8317:function(e,n,t){t.d(n,{A:function(){return s}});var r=t(6768);const o=(0,r.Lk)("div",{class:"logo"},"Alley~",-1),i={class:"nav"};function u(e,n){const t=(0,r.g2)("router-link"),u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("nav",null,[o,(0,r.Lk)("div",i,[(0,r.bF)(t,{to:"/",class:"a1"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.bF)(t,{to:"/two",class:"a2"},{default:(0,r.k6)((()=>[(0,r.eW)("About")])),_:1}),(0,r.bF)(t,{to:"/three",class:"a3"},{default:(0,r.k6)((()=>[(0,r.eW)("More")])),_:1})]),(0,r.bF)(u)])}var a=t(1241);const c={},l=(0,a.A)(c,[["render",u]]);var s=l}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{230:"89b6de2f",939:"a533b140"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{230:"830ba851",939:"9f3b95e6"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="new6:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",t.nc&&(u.nonce=t.nc);var a=function(t){if(u.onerror=u.onload=null,"load"===t.type)o();else{var r=t&&t.type,a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=n,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={230:1,939:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);l<u.length;l++)i=u[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunknew6"]=self["webpackChunknew6"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(4856)}));r=t.O(r)})();
//# sourceMappingURL=app.8c3d62be.js.map