// { "framework": "Vue"} 
if("undefined"==typeof app&&(app=weex),void 0===eeuiLog)var eeuiLog={_:function(e,t){var n=t.map((function(e){return"[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e}));void 0===this.__m&&(this.__m=app.requireModule("debug")),this.__m.addLog(e,n)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}};!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r,o,i=[];i.push(n(1)),r=n(2);var a=n(3);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(Object.keys(r).some((function(e){return"default"!==e&&"__esModule"!==e}))&&console.error("named exports are not supported in *.vue files."),o=r=r.default),"function"==typeof o&&(o=o.options),o.__file="F:\\study\\eeMusic\\src\\pages\\index.vue",o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-6be49aa4",o.style=o.style||{},i.forEach((function(e){for(var t in e)o.style[t]=e[t]})),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),e.exports=r,e.exports.el="true",new Vue(e.exports)},function(e,t){e.exports={app:{flex:1,background:"green"},webview:{flex:1},navbar:{width:"750",height:"100",paddingTop:"15",backgroundColor:"#ff5001"},text:{color:"#ffffff",fontWeight:"bold"}}},function(e,t,n){"use strict";n.r(t);app.requireModule("eeui"),app.requireModule("navigationBar");t.default={data:function(){return{url:"file://assets/dist/index.html#/musicList"}},appActive:function(e){},appDeactive:function(e){},pageReady:function(e){},pageResume:function(e){},pagePause:function(e){},pageDestroy:function(e){},mounted:function(){},methods:{}}},function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:["app"]},[t("navbar",{staticClass:["navbar"]},[t("navbar-item",{attrs:{type:"left"}},[t("icon",{staticClass:["icon"],attrs:{content:"md-arrow-back"}})],1),t("navbar-item",{attrs:{type:"title"}},[t("text",{staticClass:["text"]},[this._v("vip音乐文件解码")])]),t("navbar-item",{attrs:{type:"right"}},[t("icon",{staticClass:["icon"],attrs:{content:"md-refresh"}})],1)],1),t("web-view",{ref:"web",staticClass:["webview"],attrs:{url:this.url}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}]);