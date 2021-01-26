(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MpAwesomeProgress", [], factory);
	else if(typeof exports === 'object')
		exports["MpAwesomeProgress"] = factory();
	else
		root["MpAwesomeProgress"] = factory();
})(window, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(5);

var iterableToArray = __webpack_require__(6);

var unsupportedIterableToArray = __webpack_require__(7);

var nonIterableSpread = __webpack_require__(8);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(0);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(0);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ src_MpAwesomeProgress; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(1);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(2);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/bezier-easing/src/index.js
var src = __webpack_require__(4);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// CONCATENATED MODULE: ./src/utils/type.js
/*
 * @Author:
 * @Date: 2020-12-31 10:43:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 20:48:30
 * @Description:
 */

/**
 * 判断变量的数据类型
 * @param {any} val 变量值
 * @returns {string} 数据类型
 */
function getType(val) {
  return Object.prototype.toString.call(val).replace(/\[object\s(\w+)\]/, "$1").toLowerCase();
}
/**
 * 判断对象obj中是否存在key属性
 * @param {Object} obj
 * @param {*} key
 */

function isOwnProperty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * 判断变量是否有具体定义，即非null,非undefined,非空字符串
 * @param {any} val 变量值
 * @returns {boolean} 变量是否有具体定义
 */

function isDefined(val) {
  var type = getType(val);
  return type !== "null" && type !== "undefined" && val !== "";
}
function isObject(val) {
  return getType(val) === "object";
}
function isArray(val) {
  return getType(val) === "array";
}
function isNumber(val) {
  return getType(val) === "number";
}
function isString(val) {
  return getType(val) === "string";
}
function isBool(val) {
  return getType(val) === "boolean";
}
function isUndefined(val) {
  return getType(val) === "undefined";
}
function isNull(val) {
  return getType(val) === "null";
}
function isBasicType(val) {
  return isNumber(val) || isString(val) || isBool(val) || isUndefined(val) || isNull(val);
}
// CONCATENATED MODULE: ./src/utils/helper.js
/*
 * @Author: 蒋文斌
 * @Date: 2021-01-24 20:46:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 20:50:21
 * @Description: 自动生成
 */

/**
 * 深拷贝，此处不考虑Symbol,Map,Set,Function等数据类型
 * @param {any} obj 待深拷贝的数据
 */

function deepClone(obj) {
  var newObj;

  if (isObject(obj)) {
    newObj = {};
    Object.keys(obj).forEach(function (key) {
      newObj[key] = deepClone(obj[key]);
    });
  } else if (isArray(obj)) {
    newObj = [];
    obj.forEach(function (item) {
      newObj.push(deepClone(item));
    });
  } else {
    newObj = obj;
  }

  return newObj;
} // 比较值是否一样，如果是引用类型，会通过递归方式去比较值

function isEqual(obj1, obj2) {
  var _ref = [getType(obj1), getType(obj2)],
      type1 = _ref[0],
      type2 = _ref[1];

  if (type1 === type2) {
    if (isBasicType(obj1)) {
      return obj1 === obj2;
    } else if (type1 === "object") {
      return Object.keys(obj1).every(function (key) {
        return isEqual(obj1[key], obj2[key]);
      });
    } else if (type1 === "array") {
      return obj1.every(function (item, index) {
        return isEqual(item, obj2[index]);
      });
    } else if (type1 === "function" || type1 === "symbol") {
      return obj1.toString() === obj2.toString();
    } else if (type1 === "map") {
      var handledKeys1 = Array.from(obj1.keys());
      var handledKeys2 = Array.from(obj2.keys());
      return handledKeys1.length === handledKeys2.length && handledKeys1.every(function (key) {
        return isEqual(obj1.get(key), obj2.get(key));
      });
    } else if (type1 === "set") {
      var handledArray1 = Array.from(obj1.values());
      var handledArray2 = Array.from(obj2.values());
      return handledArray1.length === handledArray2.length && handledArray1.every(function (item, index) {
        return isEqual(item, handledArray2[index]);
      });
    } else {
      // 未知类型
      return false;
    }
  } else {
    // 类型不一致，无需比较
    return false;
  }
}

function findIndex(arr, item) {
  var targetIndex = -1;

  for (var index = 0; index < arr.length; index++) {
    if (isEqual(arr[index], item)) {
      targetIndex = index;
      break;
    } else {
      continue;
    }
  }

  return targetIndex;
}

function contains(obj, item) {
  var dataType = getType(obj);
  var containFlag = false;

  if (dataType === "object") {
    var keys = Object.keys(obj);

    for (var index = 0; index < keys.length; index++) {
      if (isEqual(keys[index], item)) {
        containFlag = true;
        break;
      }
    }
  } else if (dataType === "array") {
    for (var _index = 0; _index < obj.length; _index++) {
      if (isEqual(obj[_index], item)) {
        containFlag = true;
        break;
      }
    }
  } else {
    throw new Error("only support parameter whose type is object or array!");
  }

  return containFlag;
} // 合并两个数据，用于支撑merge方法


function mergeTwo(obj1, obj2) {
  var dataType1 = getType(obj1);
  var dataType2 = getType(obj2);

  if (dataType1 === dataType2) {
    // 如果合并的两个数据类型一致，才进行处理，否则直接返回obj1
    if (dataType1 === "object") {
      // Object类型
      Object.keys(obj2).forEach(function (key) {
        // 遍历obj2的keys
        if (obj1.hasOwnProperty(key)) {
          // 如果obj1包含obj2的key，采用合并策略
          obj1[key] = mergeTwo(obj1[key], obj2[key]);
        } else {
          // 不包含，则直接赋值
          obj1[key] = deepClone(obj2[key]);
        }
      });
    } else if (dataType1 === "array") {
      // Array类型
      obj2.forEach(function (item) {
        // 遍历obj2
        if (contains(obj1, item)) {
          // 合并数组不能forEach按顺序遍历，只能判断是否包含，如果obj1包含item，采用合并策略
          var dataindex = findIndex(obj1, item);
          obj1[dataindex] = mergeTwo(obj1[dataindex], item);
        } else {
          // 不包含，直接push
          obj1.push(deepClone(item));
        }
      });
    } else if (isBasicType(obj1)) {
      obj1 = obj2;
    }
  } else if (obj1 === null || obj1 === undefined) {
    obj1 = obj2;
  }

  return obj1;
} // 合并多个对象


function merge(srcObj) {
  var srcObjType = getType(srcObj);

  if (srcObjType === "object" || srcObjType === "array") {
    for (var _len = arguments.length, objs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objs[_key - 1] = arguments[_key];
    }

    var isSameType = objs.every(function (item) {
      return getType(item) === srcObjType;
    });

    if (isSameType) {
      // 是同样的类型，进行合并操作
      if (srcObjType === "object") {
        // object
        return [srcObj].concat(objs).reduce(function (preVal, curVal) {
          return mergeTwo(preVal, curVal);
        }, {});
      } else {
        // array
        return [srcObj].concat(objs).reduce(function (preVal, curVal) {
          return mergeTwo(preVal, curVal);
        }, []);
      }
    } else {
      // 类型不一致，直接深拷贝源对象
      return deepClone(srcObj);
    }
  } else {
    // 其他数据类型
    throw new Error("only support type of object or array!");
  }
}
// CONCATENATED MODULE: ./src/index.js




/*
 * @Author: 蒋文斌
 * @Date: 2021-01-24 20:45:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-26 16:00:59
 * @Description: 自动生成
 */

/*
 * @Author: 蒋文斌
 * @Date: 2021-01-22 18:21:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 20:36:58
 * @Description: 自动生成
 */



var defaultOptions = {
  canvasId: "myCanvas",
  cssSize: {
    width: 100,
    height: 100
  },
  startDeg: 270,
  percentage: 0,
  easing: "0.42,0,1,1",
  duration: 0.6,
  circleWidth: 6,
  circleColor: "#e5e5e5",
  lineWidth: 6,
  useGradient: false,
  lineColor: "#11B669",
  lineColorStops: [{
    percent: 0,
    color: "#13CDE3"
  }, {
    percent: 1,
    color: "#11B669"
  }],
  showText: true,
  textNodes: [],
  pointRadius: 0,
  pointColor: "#11B669",
  animated: true,
  onReady: null // 可以绘制时，触发的回调

};

var src_MpAwesomeProgress = /*#__PURE__*/function () {
  function MpAwesomeProgress(options) {
    classCallCheck_default()(this, MpAwesomeProgress);

    this._options = merge(defaultOptions, options);
    var _this$_options = this._options,
        startDeg = _this$_options.startDeg,
        percentage = _this$_options.percentage,
        easing = _this$_options.easing;

    if (startDeg < 0 || startDeg >= 360) {
      throw new Error("startDeg的范围必须是[0, 360)");
    }

    if (percentage < 0 || percentage > 360) {
      throw new Error("percentage的范围必须是[0, 100]");
    }

    if (!/^(\-?\d+(\.\d+)?,){3}\-?\d+(\.\d+)?$/.test(easing)) {
      throw new Error("easing格式不正确，示例格式0.42,0,1,1，具体请参考http://");
    }

    this.init();
  }

  createClass_default()(MpAwesomeProgress, [{
    key: "init",
    value: function init() {
      var _this$_options2 = this._options,
          easing = _this$_options2.easing,
          duration = _this$_options2.duration;
      var easingParams = easing.split(",").map(function (item) {
        return Number(item);
      });
      this.easingFunc = src_default.a.apply(void 0, toConsumableArray_default()(easingParams));
      this.steps = duration * 60;
      this.initCanvas();
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var _this = this;

      var _this$_options3 = this._options,
          cssSize = _this$_options3.cssSize,
          pointRadius = _this$_options3.pointRadius,
          lineWidth = _this$_options3.lineWidth,
          canvasId = _this$_options3.canvasId,
          useGradient = _this$_options3.useGradient,
          lineColorStops = _this$_options3.lineColorStops,
          onReady = _this$_options3.onReady;
      var query = wx.createSelectorQuery();
      query.select("#".concat(canvasId)).fields({
        node: true,
        size: true
      }).exec(function (res) {
        var _res$ = res[0],
            width = _res$.width,
            height = _res$.height,
            node = _res$.node;
        var cssWidth = cssSize.width,
            cssHeight = cssSize.height;
        _this.widthRatio = width / cssWidth;
        _this.heightRatio = height / cssHeight;
        _this.canvasInstance = node;
        _this.ctx = _this.canvasInstance.getContext("2d");
        _this.dpr = wx.getSystemInfoSync().pixelRatio;
        _this.canvasInstance.width = width * _this.dpr;
        _this.canvasInstance.height = height * _this.dpr;

        _this.ctx.scale(_this.dpr, _this.dpr); // 计算outerRadius


        _this.outerRadius = width / 2; // 计算circleRadius

        _this.circleRadius = pointRadius > 0 ? _this.outerRadius - pointRadius : _this.outerRadius - lineWidth / 2; // 设置渐变色

        if (useGradient) {
          _this.gradient = _this.ctx.createLinearGradient(_this.circleRadius, 0, _this.circleRadius, _this.circleRadius * 2);
          lineColorStops.forEach(function (item) {
            _this.gradient.addColorStop(item.percent, item.color);
          });
        }

        if (typeof onReady == "function") {
          onReady();
        }
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this$_options4 = this._options,
          percentage = _this$_options4.percentage,
          animated = _this$_options4.animated;

      if (percentage === 0) {
        this.animateDrawArc(0, 0, 0, 0);
      } else {
        if (animated) {
          // 用动画来画动态内容
          this.animateDrawArc(0, percentage, 1, this.steps);
        } else {
          this.animateDrawArc(0, percentage, this.steps, this.steps);
        }
      }
    }
  }, {
    key: "setTextNodes",
    value: function setTextNodes(value) {
      if (isArray(value)) {
        this._options.textNodes = value;
      } else {
        this._options.textNodes = [];
      }
    }
  }, {
    key: "setPercentage",
    value: function setPercentage(_ref) {
      var value = _ref.value,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 0.3 : _ref$duration;
      var oldVal = this._options.percentage;

      if (value === oldVal) {
        // 设置相同的值，不做处理
        return;
      }

      if (value >= 0 && value <= 100) {
        this.canvasInstance.cancelAnimationFrame(this.animationId);
        this._options.percentage = value;
        this.animateDrawArc(oldVal, value, 1, duration * 60);
      } else {
        throw new Error("进度百分比的范围必须在0~100内");
      }
    } // 利用raf控制动画绘制

  }, {
    key: "animateDrawArc",
    value: function animateDrawArc(beginPercent, endPercent, stepNo, stepTotal) {
      var _this2 = this;

      var _this$_options5 = this._options,
          lineWidth = _this$_options5.lineWidth,
          useGradient = _this$_options5.useGradient,
          showText = _this$_options5.showText,
          textNodes = _this$_options5.textNodes,
          startDeg = _this$_options5.startDeg,
          lineColor = _this$_options5.lineColor,
          circleColor = _this$_options5.circleColor,
          circleWidth = _this$_options5.circleWidth,
          pointRadius = _this$_options5.pointRadius,
          pointColor = _this$_options5.pointColor;
      this.ctx.clearRect(0, 0, this.canvasInstance.width, this.canvasInstance.height);
      var nextPercent = beginPercent + (endPercent - beginPercent) * this.easingFunc(stepNo / stepTotal);
      var nextDeg = this.getTargetDegByPercentage(nextPercent);
      var startArc = this.deg2Arc(startDeg);
      var nextArc = this.deg2Arc(nextDeg); // 画圆环

      this.ctx.strokeStyle = circleColor;
      this.ctx.lineWidth = circleWidth;
      this.ctx.beginPath();
      this.ctx.arc(this.outerRadius, this.outerRadius, this.circleRadius, 0, this.deg2Arc(360));
      this.ctx.stroke(); // 画文字

      if (showText) {
        // 支持绘制多组文字
        textNodes.forEach(function (_ref2) {
          var _ref2$type = _ref2.type,
              type = _ref2$type === void 0 ? "default" : _ref2$type,
              color = _ref2.color,
              font = _ref2.font,
              _ref2$fontStyle = _ref2.fontStyle,
              fontStyle = _ref2$fontStyle === void 0 ? "normal" : _ref2$fontStyle,
              _ref2$fontWeight = _ref2.fontWeight,
              fontWeight = _ref2$fontWeight === void 0 ? "normal" : _ref2$fontWeight,
              _ref2$fontSize = _ref2.fontSize,
              fontSize = _ref2$fontSize === void 0 ? 16 : _ref2$fontSize,
              _ref2$lineHeight = _ref2.lineHeight,
              lineHeight = _ref2$lineHeight === void 0 ? 1.5 : _ref2$lineHeight,
              _ref2$fontFamily = _ref2.fontFamily,
              fontFamily = _ref2$fontFamily === void 0 ? 'Arial,"Microsoft YaHei"' : _ref2$fontFamily,
              _ref2$textContent = _ref2.textContent,
              textContent = _ref2$textContent === void 0 ? "" : _ref2$textContent,
              _ref2$textAlign = _ref2.textAlign,
              textAlign = _ref2$textAlign === void 0 ? "center" : _ref2$textAlign,
              _ref2$textBaseline = _ref2.textBaseline,
              textBaseline = _ref2$textBaseline === void 0 ? "middle" : _ref2$textBaseline,
              format = _ref2.format,
              left = _ref2.left,
              top = _ref2.top;
          var realFontSize = fontSize * _this2.widthRatio + "px";
          var realLeft = left * _this2.widthRatio;
          var realTop = top * _this2.widthRatio;
          _this2.ctx.font = font || "".concat(fontWeight, " ").concat(fontStyle, " ").concat(realFontSize, "/").concat(lineHeight, " ").concat(fontFamily);
          _this2.ctx.fillStyle = color;
          _this2.ctx.textAlign = textAlign;
          _this2.ctx.textBaseline = textBaseline;
          var text;

          if (typeof format === "function") {
            text = format(nextPercent);
          } else if (type === "progress") {
            text = Math.round(nextPercent) + "%";
          } else if (type === "default") {
            text = textContent;
          }

          _this2.ctx.fillText(text, realLeft || _this2.canvasInstance._width / 2, realTop || _this2.canvasInstance._height / 2);
        });
      } // 画进度弧线


      if (stepTotal > 0) {
        this.ctx.strokeStyle = useGradient ? this.gradient : lineColor;
        this.ctx.lineWidth = lineWidth;
        this.ctx.lineCap = "round";
        this.ctx.beginPath();
        this.ctx.arc(this.outerRadius, this.outerRadius, this.circleRadius, startArc, nextArc);
        this.ctx.stroke();
      } // 画点


      if (pointRadius > 0) {
        this.ctx.fillStyle = pointColor;
        var pointPosition = this.getPositionsByDeg(nextDeg);
        this.ctx.beginPath();
        this.ctx.arc(pointPosition.x + pointRadius, pointPosition.y + pointRadius, pointRadius, 0, this.deg2Arc(360));
        this.ctx.fill();
      }

      if (stepNo !== stepTotal) {
        stepNo++;
        this.animationId = this.canvasInstance.requestAnimationFrame(this.animateDrawArc.bind(this, beginPercent, endPercent, stepNo, stepTotal));
      } else {
        this.canvasInstance.cancelAnimationFrame(this.animationId);
      }
    } // 根据开始角度和进度百分比求取目标角度

  }, {
    key: "getTargetDegByPercentage",
    value: function getTargetDegByPercentage(percentage) {
      var startDeg = this._options.startDeg;

      if (percentage === 100) {
        return startDeg + 360;
      } else {
        var targetDeg = (startDeg + 360 * percentage / 100) % 360;
        return targetDeg;
      }
    } // 根据角度获取点的位置

  }, {
    key: "getPositionsByDeg",
    value: function getPositionsByDeg(deg) {
      var x = 0;
      var y = 0;

      if (deg >= 0 && deg <= 90) {
        // 0~90度
        x = this.circleRadius * (1 + Math.cos(this.deg2Arc(deg)));
        y = this.circleRadius * (1 + Math.sin(this.deg2Arc(deg)));
      } else if (deg > 90 && deg <= 180) {
        // 90~180度
        x = this.circleRadius * (1 - Math.cos(this.deg2Arc(180 - deg)));
        y = this.circleRadius * (1 + Math.sin(this.deg2Arc(180 - deg)));
      } else if (deg > 180 && deg <= 270) {
        // 180~270度
        x = this.circleRadius * (1 - Math.sin(this.deg2Arc(270 - deg)));
        y = this.circleRadius * (1 - Math.cos(this.deg2Arc(270 - deg)));
      } else {
        // 270~360度
        x = this.circleRadius * (1 + Math.cos(this.deg2Arc(360 - deg)));
        y = this.circleRadius * (1 - Math.sin(this.deg2Arc(360 - deg)));
      }

      return {
        x: x,
        y: y
      };
    } // deg转弧度

  }, {
    key: "deg2Arc",
    value: function deg2Arc(deg) {
      return deg / 180 * Math.PI;
    }
  }]);

  return MpAwesomeProgress;
}();



/***/ })
/******/ ]);
});