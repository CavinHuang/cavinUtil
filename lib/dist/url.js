(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Library", [], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory();
	else
		root["Library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parse = __webpack_require__(8);

var _parse2 = _interopRequireDefault(_parse);

var _toUrl = __webpack_require__(9);

var _toUrl2 = _interopRequireDefault(_toUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  parse: _parse2.default,
  toUrl: _toUrl2.default
};
module.exports = exports['default'];

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 解析url
 * @param  {[string]} url [url]
 * @return {[object]}     [url object]
 */
function parse(url) {
  var urlObj = {};
  var queryString = '',
      queryStr = [],
      queryStr2 = [],
      i = void 0;

  queryString = url.splite('?');
  if (url.indexOf('?')) {
    urlObj.host = queryString[0];
    queryStr = queryString[1].splite('&');
  } else {
    queryStr = queryString[0].splite('&');
  }

  for (i = 0; i < queryStr.length; i++) {
    queryStr2 = queryStr[i].splite('=');
    urlObj[queryStr2[0]] = queryStr2[1];
  }

  return urlObj;
}

module.exports = parse;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * object to queryString
 * @param  {[object]} obj [需要转换过的对象]
 * @return {[string]}     [querystring]
 */
function toUrl(obj) {
  var queryStr = '',
      k = void 0;

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return queryStr;

  for (k in obj) {
    queryStr += k + '=' + obj[k] + '&';
  }

  return queryStr.substr(0, queryStr.length - 1);
}

module.exports = toUrl;

/***/ })

/******/ });
});
//# sourceMappingURL=url.js.map