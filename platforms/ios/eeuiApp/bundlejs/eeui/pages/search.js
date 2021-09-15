// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/search.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/search.vue?entry=true":
/*!*****************************************!*\
  !*** ./src/pages/search.vue?entry=true ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-8724d974!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./search.vue */ "C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-8724d974!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/search.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./search.vue */ "C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\babel-loader\\lib\\index.js!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/search.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-8724d974!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./search.vue */ "C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-8724d974!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/search.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\study\\eeMusic\\src\\pages\\search.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8724d974"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\babel-loader\\lib\\index.js!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/search.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/babel-loader/lib!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/search.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var audio = app.requireModule("eeuiAudio");
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {},
  methods: {
    webmessage: function webmessage(_ref) {
      var data = _ref.message;

      if ((data === null || data === void 0 ? void 0 : data.module) === 'audio') {
        audio.play(data.songUrl);
        setTimeout(function () {
          var img = data.songImage;
          audio.notifyMusic(data.songname, data.singer, img);
        }, 500);
      }
    }
  }
});

/***/ }),

/***/ "C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-8724d974!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/search.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-8724d974!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/search.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1
  },
  "navbarc": {
    "width": "750",
    "height": "100"
  },
  "title": {
    "fontSize": "25",
    "fontWeight": "bold",
    "color": "#ffffff"
  },
  "icon": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-8724d974!C:\\Users\\xiayajiang\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/search.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-8724d974!C:/Users/xiayajiang/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/search.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('web-view', {
    staticClass: ["app"],
    attrs: {
      "url": "file://assets/dist/index.html#/searchList"
    },
    on: {
      "receiveMessage": _vm.webmessage
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });