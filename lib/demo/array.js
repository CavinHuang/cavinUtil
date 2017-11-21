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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEqual = __webpack_require__(1);

var _arrayEqual2 = _interopRequireDefault(_arrayEqual);

var _concat = __webpack_require__(2);

var _concat2 = _interopRequireDefault(_concat);

var _inArray = __webpack_require__(3);

var _inArray2 = _interopRequireDefault(_inArray);

var _unique = __webpack_require__(4);

var _unique2 = _interopRequireDefault(_unique);

var _isArray = __webpack_require__(5);

var _isArray2 = _interopRequireDefault(_isArray);

var _join = __webpack_require__(6);

var _join2 = _interopRequireDefault(_join);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  arrayEqual: _arrayEqual2.default,
  concat: _concat2.default,
  inArray: _inArray2.default,
  unique: _unique2.default,
  isArray: _isArray2.default,
  join: _join2.default
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

module.exports = arrayEqual;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 合并多个数组为一个数组
 * @param {Array} args 要合并的数组参数，如：arr1,arr2,arr3...
 * @returns {Array} 合并后的结果数组
 */
function concat(args) {
  return [].concat.apply([], args);
}

module.exports = concat;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* 判断指定val是否在数组array中
* @param {Object} val 需要判断的值
* @param {Array} array 所在的数组
* @param {Number} idx 从数组array的idx处开始判断，若未指定，则从整个数组array中判断
* @returns {Number} val在array中的位置，若不在，则返回-1
*/
function InArray(val, array, idx) {
  var arrLen = array.length;

  if (!array) return -1;
  idx = idx || 0;
  idx = idx < 0 || idx > array.length - 1 ? 0 : idx;
  for (; idx < arrLen; idx++) {
    if (array[idx] === val) {
      return idx;
    }
  }
  return -1;
}
module.exports = InArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 去掉array中的重复项
 * @param {Array} arr 需要去重的数组
 * @returns {Array} 去重后的新数组
 */
function unique(arr) {
  var i,
      _arr = arr.sort(),
      duplicateIdx = [],
      idxLength = 0;

  if (!arr || arr.length <= 1) {
    return arr;
  }
  for (i = 1; i < _arr.length; i++) {
    if (_arr[i] === _arr[i - 1]) {
      idxLength = duplicateIdx.push(i);
    }
  }
  if (idxLength > 0) {
    while (idxLength--) {
      _arr.splice(duplicateIdx[idxLength], 1);
    }
    arr = _arr;
  }
  return arr;
}

module.exports = unique;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 是否是一个数组
 * @param  {[type]}  arr [description]
 * @return {Boolean}     [description]
 */
function isArray(arr) {
  return arr instanceof Array;
}

module.exports = isArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 将一个或者多个数组合并一个字符串
 * @param  {[type]} separator [指定分隔符]
 * @param  {[type]} args      [数组]
 * @return {[string]}           [返回字符串]
 */
function join(separator, args) {
  var source = [],
      i = 1;

  if (arguments.length > 2) {
    for (; i < arguments.length; i++) {
      source = source.concat(arguments[i]);
    }
  } else {
    source = args;
  }

  return source.join(separator);
}

module.exports = join;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var array = __webpack_require__(0);

// arrayEqual demo
var arr1 = [1, 2, '11'];
var arr2 = [1, 2, '11'];
var arr3 = [1, 2, '11', 2];

console.log(array.arrayEqual(arr1, arr2));
console.log(array.arrayEqual(arr2, arr3));

// concat
console.log(array.concat(arr1, arr2, arr3));

// inArray
console.log(array.inArray(2, arr3));
console.log(array.inArray(2, arr3, 3));

// isArray
console.log(array.isArray(arr1));

// join
console.log(array.join('_', arr1, arr2, arr3));

// unique
console.log(array.unique(arr3));

/***/ })
/******/ ]);
});
//# sourceMappingURL=array.js.map