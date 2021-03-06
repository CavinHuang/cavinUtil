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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _date = __webpack_require__(11);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  date: _date2.default
};
module.exports = exports['default'];

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 模仿PHP的date()函数
 * strtotime('Y-m-d H:i:s');
 * @param format 只支持 'Y-m-d H:i:s','Y-m-d','H:i:s' 三种调用方式
 *        实现 Y m d H i s
 * @param time 为空时，取当前时间
 * @return 日期格式化的字符串
 */
function date(format, time, option) {
  var _temp = time != null ? new Date(time * 1000) : new Date();
  // var _return = '';

  var Year = _temp.getFullYear();
  var Month = _temp.getMonth();
  var Day = _temp.getDate();
  var Hour = _temp.getHours();
  var Minte = _temp.getMinutes();
  var Sencond = _temp.getSeconds();
  var Week = _temp.getDay();

  format = format.replace('Y', Year);
  format = format.replace('m', Month);
  format = format.replace('M', monthNote(Month, option.short));
  format = format.replace('d', Day);
  format = format.replace('H', Hour);
  format = format.replace('i', Minte);
  format = format.replace('s', Sencond);
  format = format.replace('w', Week + 1);
  format = format.replace('W', week2Chinese(Week, option.short, option.chainese));

  return format;
}

/**
 * 返回中文星期
 * @param  {[type]} w [description]
 * @return {[type]}   [description]
 */
function weekNote(w, short, chainese) {
  var chaineseWeek = ['日', '一', '二', '三', '四', '五', '六'];
  var DAY_NAMES = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  var DAY_SHORT_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if (short) return DAY_SHORT_NAMES[w];else if (chainese) return chaineseWeek[w];else return DAY_NAMES[w];
}

/**
 * 返回英文全称或者简写月份
 * @param  {[type]} m     [description]
 * @param  {[type]} short [description]
 * @return {[type]}       [description]
 */
function monthNote(m, short) {
  var MONTH_NAMES = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  var MONTH_SHORT_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (short) return MONTH_SHORT_NAMES[m];else return MONTH_NAMES[m];
}
module.exports = date;

/***/ })

/******/ });
});
//# sourceMappingURL=date.js.map