(function(){"use strict";var e={932:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(4448),o=["src"],i=(0,r._)("br",null,null,-1);function u(e,t,n,u,a,c){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("video",{src:e.video,controls:""},null,8,o),i,(0,r._)("button",{onClick:t[0]||(t[0]=function(){return e.transcode&&e.transcode.apply(e,arguments)})}," Start "),(0,r._)("p",null,(0,r.zw)(e.message),1)],64)}var a=n(8534),c=(n(5666),n(1539),n(8783),n(3948),n(285),n(1637),n(5045)),l=(0,r.aZ)({name:"App",setup:function(){var e=(0,c.createFFmpeg)({log:!0}),t=(0,r.iH)("Click Start to Transcode"),n=(0,r.iH)(null),o="/vue-app/flame.avi";function i(){return u.apply(this,arguments)}function u(){return u=(0,a.Z)(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.value="Loading ffmeg-core.js",r.next=3,e.load();case 3:return t.value="Start transcoding",r.t0=e,r.next=7,(0,c.fetchFile)(o);case 7:return r.t1=r.sent,r.t0.FS.call(r.t0,"writeFile","test.avi",r.t1),r.next=11,e.run("-i","test.avi","test.mp4");case 11:t.value="Complete transcoding",i=e.FS("readFile","test.mp4"),n.value=URL.createObjectURL(new Blob([i.buffer],{type:"video/mp4"}));case 14:case"end":return r.stop()}}),r)}))),u.apply(this,arguments)}return{video:n,message:t,transcode:i}}}),f=n(3744);const s=(0,f.Z)(l,[["render",u]]);var p=s;(0,r.ri)(p).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(t&&t(r);l<u.length;l++)i=u[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(932)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.762d348e.js.map