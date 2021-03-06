"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var eeui = app.requireModule('eeui');
Vue.mixin({
  methods: {
    isNullOrUndefined: function isNullOrUndefined(obj) {
      return typeof obj === "undefined" || obj === null;
    },
    isFunction: function isFunction(obj) {
      return this.isNullOrUndefined(obj) ? false : typeof obj === "function";
    },
    isObject: function isObject(obj) {
      return this.isNullOrUndefined(obj) ? false : _typeof(obj) === "object";
    },
    likeArray: function likeArray(obj) {
      return this.isNullOrUndefined(obj) ? false : typeof obj.length === 'number';
    },
    isJson: function isJson(obj) {
      return this.isObject(obj) && !this.likeArray(obj);
    },
    getObject: function getObject(obj, keys) {
      var object = obj;

      if (this.count(obj) === 0 || this.count(keys) === 0) {
        return "";
      }

      var arr = keys.replace(/,/g, "|").replace(/\./g, "|").split("|");
      this.each(arr, function (index, key) {
        object = typeof object[key] === "undefined" ? "" : object[key];
      });
      return object;
    },

    /**
     * ?????????????????????
     * @param elements
     * @param callback
     * @returns {*}
     */
    each: function each(elements, callback) {
      var i, key;

      if (this.likeArray(elements)) {
        if (typeof elements.length === "number") {
          for (i = 0; i < elements.length; i++) {
            if (callback.call(elements[i], i, elements[i]) === false) return elements;
          }
        }
      } else {
        for (key in elements) {
          if (!elements.hasOwnProperty(key)) continue;
          if (callback.call(elements[key], key, elements[key]) === false) return elements;
        }
      }

      return elements;
    },

    /**
     * ???????????????????????????
     * @param array
     * @returns {*}
     */
    last: function last(array) {
      var str = false;

      if (_typeof(array) === 'object' && array.length > 0) {
        str = array[array.length - 1];
      }

      return str;
    },

    /**
     * ???????????????????????????
     * @param array
     * @returns {Array}
     */
    delLast: function delLast(array) {
      var newArray = [];

      if (_typeof(array) === 'object' && array.length > 0) {
        this.each(array, function (index, item) {
          if (index < array.length - 1) {
            newArray.push(item);
          }
        });
      }

      return newArray;
    },

    /**
     * ?????????????????????
     * @param string
     * @param find
     * @returns {boolean}
     */
    strExists: function strExists(string, find) {
      string += "";
      find += "";
      return string.indexOf(find) !== -1;
    },

    /**
     * ???????????????????????????
     * @param string
     * @param find
     * @returns {boolean}
     */
    leftExists: function leftExists(string, find) {
      string += "";
      find += "";
      return string.substring(0, find.length) === find;
    },

    /**
     * ???????????????????????????
     * @param string
     * @param find
     * @returns {boolean}
     */
    rightExists: function rightExists(string, find) {
      string += "";
      find += "";
      return string.substring(string.length - find.length) === find;
    },

    /**
     * ??????????????????
     * @param string
     * @param start
     * @param end
     * @returns {*}
     */
    getMiddle: function getMiddle(string, start, end) {
      string += "";

      if (this.isHave(start) && this.strExists(string, start)) {
        string = string.substring(string.indexOf(start) + start.length);
      }

      if (this.isHave(end) && this.strExists(string, end)) {
        string = string.substring(0, string.indexOf(end));
      }

      return string;
    },

    /**
     * ???????????????
     * @param string
     * @param start
     * @param end
     * @returns {string}
     */
    subString: function subString(string, start, end) {
      string += "";

      if (!this.isHave(end)) {
        end = string.length;
      }

      return string.substring(start, end);
    },

    /**
     * ????????????
     * @param len
     * @returns {string}
     */
    randomString: function randomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
      var maxPos = $chars.length;
      var pwd = '';

      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }

      return pwd;
    },

    /**
     * ???????????????
     * @param set
     * @returns {boolean}
     */
    isHave: function isHave(set) {
      return !!(set !== null && set !== "null" && set !== undefined && set !== "undefined" && set);
    },

    /**
     * ??????
     * @param str
     * @param length
     * @param after
     * @returns {*}
     */
    zeroFill: function zeroFill(str, length, after) {
      str += "";

      if (str.length >= length) {
        return str;
      }

      var _str = '',
          _ret = '';

      for (var i = 0; i < length; i++) {
        _str += '0';
      }

      if (after || typeof after === 'undefined') {
        _ret = (_str + "" + str).substr(length * -1);
      } else {
        _ret = (str + "" + _str).substr(0, length);
      }

      return _ret;
    },

    /**
     * ????????????????????????
     * @param format
     * @param v
     * @returns {string}
     */
    formatDate: function formatDate(format, v) {
      if (format === '') {
        format = 'Y-m-d H:i:s';
      }

      if (typeof v === 'undefined') {
        v = new Date().getTime();
      } else if (/^(-)?\d{1,10}$/.test(v)) {
        v = v * 1000;
      } else if (/^(-)?\d{1,13}$/.test(v)) {
        v = v * 1000;
      } else if (/^(-)?\d{1,14}$/.test(v)) {
        v = v * 100;
      } else if (/^(-)?\d{1,15}$/.test(v)) {
        v = v * 10;
      } else if (/^(-)?\d{1,16}$/.test(v)) {
        v = v * 1;
      } else {
        return v;
      }

      var dateObj = new Date(v);

      if (parseInt(dateObj.getFullYear()) + "" === "NaN") {
        return v;
      } //


      format = format.replace(/Y/g, dateObj.getFullYear());
      format = format.replace(/m/g, this.zeroFill(dateObj.getMonth() + 1, 2));
      format = format.replace(/d/g, this.zeroFill(dateObj.getDate(), 2));
      format = format.replace(/H/g, this.zeroFill(dateObj.getHours(), 2));
      format = format.replace(/i/g, this.zeroFill(dateObj.getMinutes(), 2));
      format = format.replace(/s/g, this.zeroFill(dateObj.getSeconds(), 2));
      return format;
    },

    /**
     * ??????????????????
     * @returns {boolean}
     */
    isDate: function isDate(string) {
      var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
      var str = string + "";
      if (str === "") return false;
      return !(!reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31);
    },

    /**
     * ????????????????????????
     * @param str
     * @returns {boolean}
     */
    isMobile: function isMobile(str) {
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(str);
    },

    /**
     * ????????????????????????****
     * @param phone
     * @returns {string}
     */
    formatMobile: function formatMobile(phone) {
      if (this.count(phone) === 0) {
        return "";
      }

      return phone.substring(0, 3) + "****" + phone.substring(phone.length - 4);
    },

    /**
     * ????????????
     * @param myObj
     * @returns {*}
     */
    clone: function clone(myObj) {
      if (_typeof(myObj) !== 'object') return myObj;
      if (myObj === null) return myObj; //

      if (this.likeArray(myObj)) {
        var _myObj = _toArray(myObj),
            myNewObj = _myObj.slice(0);

        return myNewObj;
      } else {
        var _myNewObj = _extends({}, myObj);

        return _myNewObj;
      }
    },

    /**
     * ???????????????????????????
     * @param obj
     * @returns {number}
     */
    count: function count(obj) {
      try {
        if (typeof obj === "undefined") {
          return 0;
        }

        if (typeof obj === "number") {
          obj += "";
        }

        if (typeof obj.length === 'number') {
          return obj.length;
        } else {
          var i = 0,
              key;

          for (key in obj) {
            i++;
          }

          return i;
        }
      } catch (e) {
        return 0;
      }
    },

    /**
     * ????????? intval
     * @param str
     * @param fixed
     * @returns {number}
     */
    runNum: function runNum(str, fixed) {
      var _s = Number(str);

      if (_s + "" === "NaN") {
        _s = 0;
      }

      if (/^[0-9]*[1-9][0-9]*$/.test(fixed)) {
        _s = _s.toFixed(fixed);

        var rs = _s.indexOf('.');

        if (rs < 0) {
          _s += ".";

          for (var i = 0; i < fixed; i++) {
            _s += "0";
          }
        }
      }

      return _s;
    },

    /**
     * ????????????????????????????????????
     * @param value
     * @returns {string}
     */
    formatSeconds: function formatSeconds(value) {
      var theTime = parseInt(value); // ???

      var theTime1 = 0; // ???

      var theTime2 = 0; // ??????

      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);

        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60);
          theTime1 = parseInt(theTime1 % 60);
        }
      }

      var result = this.zeroFill(parseInt(theTime), 2) + "???";

      if (theTime1 > 0) {
        result = this.zeroFill(parseInt(theTime1), 2) + "???" + result;
      }

      if (theTime2 > 0) {
        if (theTime2 > 72) {
          var day = parseInt(theTime2 / 24);
          theTime2 -= parseInt(day * 24);
          result = day + "???" + this.zeroFill(parseInt(theTime2), 2) + "??????" + result;
        } else {
          result = this.zeroFill(parseInt(theTime2), 2) + "??????" + result;
        }
      }

      if (theTime1 === 0 && theTime2 === 0) {
        result = "00???" + result;
      }

      return result;
    },

    /**
     * ????????? JSON ??????????????????????????????try???
     * @param str
     * @param defaultVal
     * @returns {*}
     */
    jsonParse: function jsonParse(str, defaultVal) {
      try {
        return JSON.parse(str);
      } catch (e) {
        return defaultVal ? defaultVal : {};
      }
    },

    /**
     * ??? JavaScript ???????????? JSON ???????????????try???
     * @param json
     * @param defaultVal
     * @returns {string}
     */
    jsonStringify: function jsonStringify(json, defaultVal) {
      try {
        return JSON.stringify(json);
      } catch (e) {
        return defaultVal ? defaultVal : "";
      }
    },

    /**
     * ??????????????????????????????
     * @param value
     * @returns {Array}
     */
    removerNumberNaN: function removerNumberNaN() {
      var array = [];

      for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
        value[_key] = arguments[_key];
      }

      value.forEach(function (ele) {
        if (!isNaN(Number(ele))) {
          array.push(ele);
        }
      });
      return array;
    },

    /**
     * Math.max ??????NaN
     * @param value
     * @returns {number}
     */
    runMax: function runMax() {
      return Math.max.apply(Math, _toConsumableArray(this.removerNumberNaN.apply(this, arguments)));
    },

    /**
     * Math.min ??????NaN
     * @param value
     * @returns {number}
     */
    runMin: function runMin() {
      return Math.min.apply(Math, _toConsumableArray(this.removerNumberNaN.apply(this, arguments)));
    },

    /**
     * ???????????????
     * @param value ???????????????????????????
     * @returns {string}
     */
    stringConnect: function stringConnect() {
      var s = null;
      var text = "";

      for (var _len2 = arguments.length, value = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        value[_key2] = arguments[_key2];
      }

      value.forEach(function (val) {
        if (s === null) {
          s = val;
        } else if (val) {
          if (val && text) text += s;
          text += val;
        }
      });
      return text;
    },

    /**
     * ????????????
     * @param bytes
     * @returns {string}
     */
    bytesToSize: function bytesToSize(bytes) {
      if (bytes === 0) return '0 B';
      var k = 1024;
      var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));

      if (typeof sizes[i] === "undefined") {
        return '0 B';
      }

      return this.runNum(bytes / Math.pow(k, i), 2) + ' ' + sizes[i];
    },

    /**
     * ??????????????????
     * @param value
     * @param array
     * @returns {boolean}
     */
    inArray: function inArray(value, array) {
      if (this.likeArray(array)) {
        for (var i = 0; i < array.length; i++) {
          if (value === array[i]) {
            return true;
          }
        }
      }

      return false;
    },

    /**
     * ???????????????????????????????????????????????????
     * @param name
     * @param [alias]
     * @param callback(message) => {}
     */
    setBroadListener: function setBroadListener(name, alias, callback) {
      var lists = this.jsonParse(eeui.getVariate("__boad::listener", "{}"));
      if (typeof lists[name] === 'undefined') lists[name] = []; //

      if (this.isFunction(alias)) {
        callback = alias;
        alias = "";
      }

      if (this.isFunction(callback)) {
        var pageName = this.getObject(eeui.getPageInfo(), "pageName");
        var listenerName = name + "::" + pageName + "::" + alias;

        if (lists[name].indexOf(listenerName) === -1) {
          lists[name].push(listenerName);
          eeui.setVariate("__boad::listener", this.jsonStringify(lists));
        }

        eeui.setPageStatusListener({
          listenerName: listenerName,
          pageName: pageName
        }, function (res) {
          if (res.status === listenerName) {
            callback(res.extra);
          }
        });
      }
    },

    /**
     * ?????????????????????????????????????????????
     * @param name
     * @param message
     */
    onBroadListener: function onBroadListener(name, message) {
      var _this = this;

      var lists = this.jsonParse(eeui.getVariate("__boad::listener", "{}"));

      if (typeof lists[name] === 'undefined') {
        return;
      }

      this.each(lists[name], function (index, listenerName) {
        var pageName = _this.getMiddle(listenerName, "::", "::");

        eeui.onPageStatusListener({
          listenerName: listenerName,
          pageName: pageName,
          extra: message
        }, listenerName);
      });
    }
  }
});