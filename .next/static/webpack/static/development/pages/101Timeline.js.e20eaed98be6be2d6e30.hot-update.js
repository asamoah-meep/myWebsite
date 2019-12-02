webpackHotUpdate("static\\development\\pages\\101Timeline.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/101Timeline.js":
/*!******************************!*\
  !*** ./pages/101Timeline.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/Data/Fall2018.json */ "./public/Data/Fall2018.json");
var _public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/Data/Fall2018.json */ "./public/Data/Fall2018.json", 1);
/* harmony import */ var _public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/Data/Spring2019.json */ "./public/Data/Spring2019.json");
var _public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/Data/Spring2019.json */ "./public/Data/Spring2019.json", 1);
/* harmony import */ var _components_stickyBar_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/stickyBar.js */ "./components/stickyBar.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Timeframe_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Timeframe.js */ "./components/Timeframe.js");
/* harmony import */ var _components_Usecase_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Usecase.js */ "./components/Usecase.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\pages\\101Timeline.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;















var Timeline =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Timeline, _React$Component);

  function Timeline(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Timeline);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Timeline).call(this, props));
    var scale = d3_scale__WEBPACK_IMPORTED_MODULE_21__["scaleTime"]().domain([moment__WEBPACK_IMPORTED_MODULE_19___default()("2018-09-01"), moment__WEBPACK_IMPORTED_MODULE_19___default()("2019-05-20")]).range([0, 1150]);
    _this.updateZoom = _this.updateZoom.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.updateStart = _this.updateStart.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.updateEnd = _this.updateEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.updateFrame = _this.updateFrame.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.resetZoom = _this.resetZoom.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.resetFilter = _this.resetFilter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.filterStudent = _this.filterStudent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.filterTutor = _this.filterTutor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.enterStudent = _this.enterStudent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.enterTutor = _this.enterTutor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.parseData = _this.parseData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.mergeData = _this.mergeData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));

    var fData = _this.parseData(_public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_12__);

    var sData = _this.parseData(_public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_13__);

    var allData = _this.mergeData(fData, sData);

    _this.state = {
      start: moment__WEBPACK_IMPORTED_MODULE_19___default()("2018-09-01"),
      end: moment__WEBPACK_IMPORTED_MODULE_19___default()("2019-05-20"),
      scale: scale,
      filteredData: allData,
      initData: allData,
      queryStudent: "",
      queryTutor: ""
    };

    var style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\n          .App {\n            text-align: center;\n          }\n          \n          .datePicker{\n            display:inline-block;\n            position:relative;\n            left:15px;\n          }\n          \n          #filter{\n            margin-bottom:3px;\n          }\n          \n          .hideInfo{\n            visibility: hidden;\n          }\n          \n          #legend{\n            position: relative;\n            bottom:70px;\n            float: right;\n            border:2px solid black;\n            padding:2px;\n          }\n                    \n          #info{\n            text-align:left;\n            display:inline-block;\n            padding:5px;\n            margin:3px;\n            border:2px solid black;\n            max-width:300px;\n            overflow-x:auto;\n          }\n          \n          #info p{\n            font-size:.8em;\n            margin-block-start:.5em;\n            margin-block-end:.5em;\n          \n          }\n          \n          input{\n            background-color:#D8C3A5;\n          }\n          \n          #ucContainer{\n            overflow-y:auto;\n            height:350px;\n          }\n          \n          .ucRow foreignObject{\n            width:150px;\n            overflow-x:auto;\n            height:50px;\n          }\n          \n          #zoomBox .selection{\n            stroke:#EAE7DC;\n          }\n        ");

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Timeline, [{
    key: "resetZoom",
    value: function resetZoom(scale, f) {
      if (d3_selection__WEBPACK_IMPORTED_MODULE_20__["event"].selection === null) {
        this.setState({
          start: moment__WEBPACK_IMPORTED_MODULE_19___default()("2018-09-01"),
          end: moment__WEBPACK_IMPORTED_MODULE_19___default()('2019-05-20')
        }, f);
      }
    }
  }, {
    key: "parseData",
    value: function parseData(semesterData) {
      var profData = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(semesterData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var student = _step.value;
          if (profData[student.professor] === undefined) profData[student.professor] = [];
          profData[student.professor].push(student);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return profData;
    }
  }, {
    key: "mergeData",
    value: function mergeData(fData, sData) {
      var allData = {};

      for (var f in fData) {
        allData[f] = fData[f];
      }

      for (var s in sData) {
        if (s in allData) allData[s] = allData[s].concat(sData[s]);else allData[s] = sData[s];
      }

      return allData;
    }
  }, {
    key: "updateZoom",
    value: function updateZoom(scale, f) {
      var s = null,
          e = null;

      if (d3_selection__WEBPACK_IMPORTED_MODULE_20__["event"].selection === null) {
        this.resetZoom(scale, f);
        return;
      }

      var _d3Selection$event$se = d3_selection__WEBPACK_IMPORTED_MODULE_20__["event"].selection.map(function (ele) {
        return scale.invert(ele);
      });

      var _d3Selection$event$se2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_d3Selection$event$se, 2);

      s = _d3Selection$event$se2[0];
      e = _d3Selection$event$se2[1];
      s = moment__WEBPACK_IMPORTED_MODULE_19___default()(s);
      e = moment__WEBPACK_IMPORTED_MODULE_19___default()(e);
      this.setState({
        start: s,
        end: e
      });
    }
  }, {
    key: "updateStart",
    value: function updateStart(date, f) {
      this.setState({
        start: moment__WEBPACK_IMPORTED_MODULE_19___default()(date)
      }, f);
    }
  }, {
    key: "updateEnd",
    value: function updateEnd(date, f) {
      this.setState({
        end: moment__WEBPACK_IMPORTED_MODULE_19___default()(date)
      }, f);
    }
  }, {
    key: "updateFrame",
    value: function updateFrame(frame, f) {
      var start = this.state.start;
      var end = this.state.end;

      switch (frame) {
        case "1 day":
          end = moment__WEBPACK_IMPORTED_MODULE_19___default()(start).add(1, "day").isBefore(moment__WEBPACK_IMPORTED_MODULE_19___default()()) ? moment__WEBPACK_IMPORTED_MODULE_19___default()(start).add(1, "day") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "1 week":
          end = moment__WEBPACK_IMPORTED_MODULE_19___default()(start).add(1, "week").isBefore(moment__WEBPACK_IMPORTED_MODULE_19___default()()) ? moment__WEBPACK_IMPORTED_MODULE_19___default()(start).add(1, "week") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "1 month":
          end = moment__WEBPACK_IMPORTED_MODULE_19___default()(start).add(1, "month").isBefore(moment__WEBPACK_IMPORTED_MODULE_19___default()()) ? moment__WEBPACK_IMPORTED_MODULE_19___default()(start).add(1, "month") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "Fall Semester":
          start = moment__WEBPACK_IMPORTED_MODULE_19___default()('2018-09-01');
          end = moment__WEBPACK_IMPORTED_MODULE_19___default()('2018-12-15');
          this.setState({
            start: start,
            end: end
          }, f);
          break;

        case "Spring Semester":
          start = moment__WEBPACK_IMPORTED_MODULE_19___default()('2019-01-25');
          end = moment__WEBPACK_IMPORTED_MODULE_19___default()('2019-05-20');
          this.setState({
            start: start,
            end: end
          }, f);
          break;

        case "All":
        default:
          this.setState({
            start: moment__WEBPACK_IMPORTED_MODULE_19___default()("2018-09-01"),
            end: moment__WEBPACK_IMPORTED_MODULE_19___default()("2019-05-20")
          }, f);
          break;
      }
    }
  }, {
    key: "filterStudent",
    value: function filterStudent(event) {
      event.preventDefault();
      var query = this.state.queryStudent;
      if (query === "" || query === null || query === undefined) return this.state.initData;
      var filteredData = {};

      for (var prof in this.state.filteredData) {
        filteredData[prof] = [];
      }

      for (var _prof in this.state.initData) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(this.state.initData[_prof]), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var student = _step2.value;
            if (student.name.toLowerCase().includes(query.toLowerCase())) filteredData[_prof].push(student);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      this.setState({
        filteredData: filteredData,
        queryTutor: ""
      });
    }
  }, {
    key: "filterTutor",
    value: function filterTutor(event) {
      event.preventDefault();
      var query = this.state.queryTutor;
      if (query === "" || query === null || query === undefined) return this.state.initData;
      var filteredData = {};

      for (var prof in this.state.filteredData) {
        filteredData[prof] = [];
      }

      for (var _prof2 in this.state.initData) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(this.state.initData[_prof2]), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var student = _step3.value;
            if (student.tutor.toLowerCase().includes(query.toLowerCase())) filteredData[_prof2].push(student);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      this.setState({
        filteredData: filteredData,
        queryStudent: ""
      });
    }
  }, {
    key: "resetFilter",
    value: function resetFilter(evt) {
      evt.preventDefault();
      d3_selection__WEBPACK_IMPORTED_MODULE_20__["select"]("#info").classed('hideInfo', true);
      this.setState({
        filteredData: this.state.initData,
        queryStudent: "",
        queryTutor: ""
      });
    }
  }, {
    key: "enterStudent",
    value: function enterStudent(evt) {
      this.setState({
        queryStudent: evt.target.value
      });
    }
  }, {
    key: "enterTutor",
    value: function enterTutor(evt) {
      this.setState({
        queryTutor: evt.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var profData = [];
      var numProfs = 0;
      var fontStyles = "\n         @font-face {\n            font-family: 'Font Awesome 5 Free';\n            font-style: normal;\n            font-weight: 400;\n            font-display: auto;\n            src: url(\"/FontAwesome/fa-regular-400.ttf\");\n            \n        }\n        .fa,\n        .fas {\n            -moz-osx-font-smoothing: grayscale;\n            -webkit-font-smoothing: antialiased;\n            display: inline-block;\n            font-style: normal;\n            font-variant: normal;\n            text-rendering: auto;\n            line-height: 1;\n            font-family: 'Font Awesome 5 Free';\n            font-weight: 900; }";

      for (var ele in this.state.filteredData) {
        var prof = this.state.filteredData[ele];
        var profInfo = ele.split(" ");

        var uc = __jsx(_components_Usecase_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
          num: numProfs++,
          data: prof,
          name: profInfo[0],
          lastName: profInfo[1],
          key: ele,
          start: this.state.start,
          end: this.state.end,
          width: 900,
          styling: fontStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 337
          },
          __self: this
        });

        profData.push(uc);
      }

      var ucContainer = __jsx("div", {
        id: "ucContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, profData);

      var timeLine = __jsx(_components_Timeframe_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        width: 900,
        start: this.state.start,
        end: this.state.end,
        updateZoom: this.updateZoom,
        updateEnd: this.updateEnd,
        updateStart: this.updateStart,
        setFrame: this.updateFrame,
        data: this.state.filteredData,
        key: "Timeline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      });

      var filter = __jsx("div", {
        id: "filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, " ", __jsx("form", {
        onSubmit: this.filterStudent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "Enter the Student Name: ", __jsx("input", {
        type: "text",
        value: this.state.queryStudent,
        onChange: this.enterStudent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }), " "), __jsx("form", {
        onSubmit: this.filterTutor,
        onReset: this.resetFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, "Enter the Tutor Name:  ", __jsx("input", {
        type: "text",
        value: this.state.queryTutor,
        onChange: this.enterTutor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }), __jsx("input", {
        type: "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      })));

      var legend = __jsx("div", {
        id: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, "LEGEND"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "Jeff: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faDragon"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }), "  Julia: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faCat"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }), " Bella: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faLemon"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "Alex: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faDog"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }), " Alan: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faCrow"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }), " Hari: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faCheese"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "Ilias: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faHippo"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }), "  Aashish: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faHorse"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }), "Gilad: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faFrog"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "Cindy: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faSpider"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }), " Santiago: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faBreadSlice"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }), "  Rahul: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faFish"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, "Jonathan: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_22__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_23__["faAppleAlt"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }), " "), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: '#CF142B'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Red"), ": Unresolved"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: "#FAD201"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "Yellow"), ": Partially Resolved"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: "#33A532"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "Green"), ": Resolved"));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_components_stickyBar_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }), __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: fontStyles.__hash,
        __self: this
      }, fontStyles), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, __jsx("title", {
        className: "jsx-".concat(fontStyles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Tutor Timeline")), __jsx("h1", {
        className: "jsx-".concat(fontStyles.__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "2018-2019 CS101 Tutoring Timeline"), filter, ucContainer, timeLine, legend));
    }
  }]);

  return Timeline;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Timeline);
/*
import React from 'react';
import './App.css';
import fallData from "./Data/Fall2018.json";
import springData from "./Data/Spring2018.json";
import Timeline from "./Timeline";
import UseCaseRow from "./UseCase";
import moment from "moment";
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
import {Helmet} from 'react-helmet';

class App extends React.Component{

  constructor(props){
    super(props);

    const scale = d3Scale.scaleTime()
      .domain([moment("2018-09-01"),moment("2019-05-20")])
      .range([0,1150]);

    this.updateZoom = this.updateZoom.bind(this);
    this.updateStart=this.updateStart.bind(this);
    this.updateEnd = this.updateEnd.bind(this);
    this.updateFrame = this.updateFrame.bind(this);
    this.resetZoom = this.resetZoom.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.filterStudent = this.filterStudent.bind(this);
    this.filterTutor = this.filterTutor.bind(this);
    this.enterStudent = this.enterStudent.bind(this);
    this.enterTutor = this.enterTutor.bind(this);
    this.parseData = this.parseData.bind(this);
    this.mergeData = this.mergeData.bind(this);
 
    const fData = this.parseData(fallData);
    const sData = this.parseData(springData);

    const allData = this.mergeData(fData,sData);

    this.state={
      start:moment("2018-09-01"),
      end: moment("2019-05-20"),   
      scale:scale,
      filteredData:allData,
      initData:allData,
      queryStudent:"",
      queryTutor:""
    }
  }


  parseData(semesterData){
    const profData = [];
    for(let student of semesterData){
      if(profData[student.professor] === undefined)
        profData[student.professor] = [];

      profData[student.professor].push(student); 
    }

    return profData;
  }

  mergeData(fData,sData){
    const allData = {};

    for(let f in fData)
      allData[f] = fData[f];
    
    for(let s in sData){
      if(s in allData)
        allData[s] = allData[s].concat(sData[s]);
      else
        allData[s] = sData[s];
    }

    return allData;
  }

  updateStart(date,f){
    this.setState({
      start:moment(date)
    },f);
  }
  
  updateEnd(date,f){
    this.setState({
      end:moment(date)
    },f);
  }

  updateFrame(frame,f){
    let start = this.state.start;
    let end = this.state.end;

    switch(frame){
      case "1 day":
        end = moment(start).add(1,"day").isBefore(moment()) ? moment(start).add(1,"day") : end;
        this.setState({
          end: end
        }, f);
        break;

      case "1 week":     
        end = moment(start).add(1,"week").isBefore(moment()) ? moment(start).add(1,"week") : end;
        this.setState({
          end:end
        },f);
        break;

      case "1 month":
        end = moment(start).add(1,"month").isBefore(moment()) ? moment(start).add(1,"month") : end;
        this.setState({
          end:end
        },f);
        break;

      case "Fall Semester":
        start = moment('2018-09-01');
        end = moment('2018-12-15');
        this.setState({
          start:start,
          end:end
        },f);
        break;

      case "Spring Semester":
        start = moment('2019-01-25');
        end = moment('2019-05-20');
        this.setState({
          start:start,
          end:end
        },f);
        break;

      case "All":
      default:
        this.setState({
          start:moment("2018-09-01"),
          end: moment("2019-05-20")
        },f);
        break;

    }
  }

  updateZoom(scale,f){
    let s = null, e = null;

    if(d3Selection.event.selection === null){
      this.resetZoom(scale,f);
      return;
    }

    [s,e] = d3Selection.event.selection.map(ele=>scale.invert(ele));
    s = moment(s);
    e = moment(e);
    

    this.setState({
      start:s,
      end:e
    });
  }

  resetZoom(scale,f){
    if(d3Selection.event.selection === null){
      this.setState({
          start:moment("2018-09-01"),
          end: moment('2019-05-20')
      },f);
    }
  }


  enterStudent(event){
    this.setState({queryStudent:event.target.value});
  }

  enterTutor(event){
    this.setState({queryTutor:event.target.value});
  }

  filterStudent(event){
    event.preventDefault();

    const query = this.state.queryStudent;
    if(query==="" || query===null || query===undefined)
      return this.state.initData;
      
    const filteredData = {};
    for(let prof in this.state.filteredData){
      filteredData[prof] = [];
    }
    

    for(let prof in this.state.initData){
      for(let student of this.state.initData[prof]){
        if(student.name.toLowerCase().includes(query.toLowerCase()))
          filteredData[prof].push(student);
      }
    }

    this.setState({
      filteredData:filteredData,
      queryTutor:""
    });
  }

  resetFilter(event){
    event.preventDefault();
    d3Selection.select("#info").classed('hideInfo',true);
    //d3Selection.select("#info").selectAll("*").remove();
    this.setState({
      filteredData:this.state.initData,
      queryStudent:"",
      queryTutor:""});
  }

  filterTutor(event){
    event.preventDefault();

    const query = this.state.queryTutor;
    if(query==="" || query===null || query===undefined)
      return this.state.initData;
      
    const filteredData = {};
    for(let prof in this.state.filteredData){
      filteredData[prof] = [];
    }
    
    for(let prof in this.state.initData){
      for(let student of this.state.initData[prof]){
        if(student.tutor.toLowerCase().includes(query.toLowerCase()))
          filteredData[prof].push(student);
      }
    }

    this.setState({
      filteredData:filteredData,
      queryStudent:""
    });
  }

  render(){
    const profData = [];

    let numProfs = 0;
    for(let ele in this.state.filteredData){
      const prof = this.state.filteredData[ele];
      const uc = <UseCaseRow num={numProfs++} data ={prof} name={ele.split(" ")[0]} lastName ={ele.split(" ")[1]} key={ele}
      start = {this.state.start} end = {this.state.end} width = {900}/>
      profData.push(uc);
    }

    const ucContainer = <div id="ucContainer">
      {profData}
    </div>

    const timeLine = <Timeline width={900}start={this.state.start} end = {this.state.end} 
    updateZoom = {this.updateZoom}updateEnd = {this.updateEnd} updateStart={this.updateStart} 
    setFrame={this.updateFrame} data={this.state.filteredData} key='Timeline'/>;

    let info = <div id="info" className='hideInfo'></div>    
 
    const legend = <div id='legend'>
        <h3>LEGEND</h3>
        <p>Jeff: <i className='fas fa-dragon'></i>  Julia: <i className='fas fa-cat'></i> Bella: <i className='fas fa-lemon'></i></p>
        <p>Alex: <i className='fas fa-dog'></i> Alan: <i className='fas fa-crow'></i>  Hari: <i className='fas fa-cheese'></i></p>
        <p>Ilias: <i className='fas fa-hippo'></i>  Aashish: <i className='fas fa-horse'></i> Gilad: <i className='fas fa-frog'></i></p>
        <p>Cindy: <i className='fas fa-spider'></i>Santiago: <i className='fas fa-bread-slice'></i>  Rahul: <i className='fas fa-fish'></i></p>
        <p>Jonathan: <i className='fas fa-apple-alt'></i></p>
        <br/>
        <p><span style={{color:'#CF142B'}}>Red</span>: Unresolved</p>
        <p><span style={{color:"#FAD201"}}>Yellow</span>: Partially Resolved</p>
        <p><span style={{color:"#33A532"}}>Green</span>: Resolved</p>
      </div>

    const filter = <div id='filter'> <form onSubmit={this.filterStudent}>
          Enter the Student Name: <input type="text" value={this.state.queryStudent} onChange={this.enterStudent}/>
          <input type='submit'/> </form>
        <form onSubmit={this.filterTutor} onReset = {this.resetFilter}>
          Enter the Tutor Name:  <input type="text" value={this.state.queryTutor} onChange={this.enterTutor}/>
          <input type='submit'/> <br/>
          <input type='reset'/>
        </form>
      </div>

    return <div>
      <Helmet>
        <title>Tutor Timeline</title>
      </Helmet>
      <h1>2018-2019 CS101 Tutoring Timeline</h1>
      {filter}
      {ucContainer}
      {timeLine}
      {legend}
      {info}
    </div>
  }
  
}
export default App;
*/

/***/ })

})
//# sourceMappingURL=101Timeline.js.e20eaed98be6be2d6e30.hot-update.js.map