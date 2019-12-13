webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/stickyBar.js":
/*!*********************************!*\
  !*** ./components/stickyBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var components_dropdown_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/dropdown.js */ "./components/dropdown.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three-gltf-loader */ "./node_modules/three-gltf-loader/index.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(three_gltf_loader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\stickyBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;








var StickyBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StickyBar, _React$Component);

  function StickyBar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StickyBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StickyBar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StickyBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var scene = new three__WEBPACK_IMPORTED_MODULE_8__["Scene"]();
      var camera = new three__WEBPACK_IMPORTED_MODULE_8__["PerspectiveCamera"](75, window.innerHeight / window.innerHeight, .1, 1000);
      camera.position.z = 5;
      camera.position.x = -1;
      var renderer = new three__WEBPACK_IMPORTED_MODULE_8__["WebGLRenderer"]({
        antialias: true,
        alpha: true
      });
      renderer.setSize(100, 100);
      renderer.setClearColor(0xffffff, 0);
      renderer.gammaOutput = true;
      renderer.gammaFactor = 2.2;
      this.mount.appendChild(renderer.domElement);
      var loader = new three_gltf_loader__WEBPACK_IMPORTED_MODULE_10___default.a();
      var logo = undefined;

      var animate = function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      loader.load('/Logo.gltf', function (gltf) {
        logo = gltf.scene;
        logo.rotation.x = -Math.PI / 12;
        logo.rotation.y = Math.PI / 12;
        logo.rotation.z = Math.PI / 6;
        logo.scale.set(2, 2, 2);
        scene.add(logo);
        animate();
      }, undefined, function (error) {
        console.error(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var contact = __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "E-mail: ja3180@nyu.edu"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Telephone: 914-224-6241"), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Github"));

      var projects = __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#TimelineHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Tutor Timeline"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#KMeansHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "K-Means Demo"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#WebsiteHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "This Website"))));

      var bar = __jsx("div", {
        id: "stickyBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("div", {
        id: "logoMount",
        ref: function ref(_ref) {
          return _this.mount = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("h1", {
        style: {
          position: "relative",
          left: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Jeffrey"), __jsx("h1", {
        style: {
          position: "relative",
          left: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Asamoah"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("a", {
        className: "subHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faHome"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), " Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("a", {
        className: "subHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faAddressCard"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), " About")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faTasks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Projects",
        barDropdown: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, projects), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faEnvelope"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Contact and Media",
        barDropdown: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, contact), __jsx("label", {
        "class": "switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), __jsx("span", {
        "class": "slider round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })));

      var style = __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\n\n            #logoMount{\n                height:75px;\n            }\n\n            .barIcon{\n                color: #D9B08C;\n                display:inline-block;\n                position:relative;\n                right:5px;\n            }\n\n            .barDropdown{\n                display:inline-block;\n            }\n\n            #stickyBar{\n                vertical-align:top;\n                position: relative;\n                display:inline-block;\n                left:20px;\n                width:250px;\n                margin-right: 5px;\n                margin-top:5px;\n            }\n            .subHeading{\n                font-family: NunitoItalic;\n                color: #D9B08C;\n                display: block;\n                font-size: 1.5rem;\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n                margin-inline-start: 0px;\n                margin-inline-end: 0px;\n                font-weight: bold;\n            }\n\n            .switch {\n                position: relative;\n                display: inline-block;\n                width: 60px;\n                height: 34px;\n            }\n\n            .switch input {\n                opacity: 0;\n                width: 0;\n                height: 0;\n            }\n\n            .slider {\n                position: absolute;\n                cursor: pointer;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: #ccc;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            .slider:before {\n                position: absolute;\n                content: \"\";\n                height: 26px;\n                width: 26px;\n                left: 4px;\n                bottom: 4px;\n                background-color: white;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            input:checked + .slider {\n                background-color: #2196F3;\n            }\n\n            input:focus + .slider {\n                box-shadow: 0 0 1px #2196F3;\n            }\n\n            input:checked + .slider:before {\n                -webkit-transform: translateX(26px);\n                -ms-transform: translateX(26px);\n                transform: translateX(26px);\n            }\n\n            .slider.round {\n                border-radius: 34px;\n            }\n\n            .slider.round:before {\n                border-radius: 50%;\n            }\n        ");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, style, bar);
    }
  }]);

  return StickyBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StickyBar);

/***/ }),

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_stickyBar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/stickyBar.js */ "./components/stickyBar.js");
/* harmony import */ var components_layout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/layout.js */ "./components/layout.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/dropdown.js */ "./components/dropdown.js");





var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;







var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var theme = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1918019094",
        __self: this
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxteVdlYnNpdGVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXcUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEb2N1bWVudHNcXG15V2Vic2l0ZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzdHlsZXMuY3NzJztcclxuaW1wb3J0IEJhciBmcm9tICdjb21wb25lbnRzL3N0aWNreUJhci5qcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQuanMnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdjb21wb25lbnRzL2Ryb3Bkb3duLmpzJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgIGNvbnN0IHRoZW1lID0gPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgIGgxe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICA8QmFyLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J0Fib3V0TWUnPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHRpdGxlPVwiQWJvdXQgTWVcIiBvcGVuT25TdGFydD5cclxuICAgICAgICAgICAgICAgIDxwPkhleSwgbG9va3MgbGlrZSB5b3UgZm91bmQgbXkgd2Vic2l0ZSE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5NeSBuYW1lIGlzIEplZmZyZXkgQXNhbW9haCwgYW5kIEknbSBjdXJyZW50bHkgbGl2aW5nIGluIHRoZSBOWUMgbWV0cm9wb2xpdGFuIGFyZWEuXHJcbiAgICAgICAgICAgICAgICAgICAgSSdtIHN0dWR5aW5nIE1hdGhlbWF0aWNzIGFuZCBDb21wdXRlciBTY2llbmNlIGF0IE5ldyBZb3JrIFVuaXZlcnNpdHkgYW5kIHBsYW5cclxuICAgICAgICAgICAgICAgICAgICB0byBncmFkdWF0ZSBpbiBNYXkgMjAyMC4gTXkgaG9iYmllcyBpbmNsdWRlIHJ1bm5pbmcsIGNvZGluZywgYW5kIDMtRCBtb2RlbGxpbmcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlNlZSBtb3JlIGhlcmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1RpbWVsaW5lSGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biB0aXRsZT1cIlRpbWVsaW5lIEFwcFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+SSBjcmVhdGVkIHRoaXMgdGltZWxpbmUgYXBwIHRvIGVtdWxhdGUgdGhlIHByb2plY3QgSSB3b3JrZWQgb24gZHVyaW5nIG15IENvbWNhc3QgSW50ZXJuc2hpcC4gQXQgbXkgaW50ZXJuc2hpcCBteSBwcm9qZWN0IHdhcyBcclxuICAgICAgICAgICAgICAgICAgICB0byBjcmVhdGUgYSBmb3dhcmQtZmFjaW5nIHZpc3VhbCB0byBkaXNwbGF5IGhvdyB0aGUgWGZpbml0eSBGcmF1ZCBNYW5hZ21lbnQgKFhGTSkgdGVhbSBtb25pdG9yZWQgYW5kIG1pdGlnYXRlZCBmcmF1ZCBhY3Rpdml0eS5cclxuICAgICAgICAgICAgICAgICAgICBGb3IgbXkgaW50ZXJuc2hpcCBJIGRpc3BsYXllZCB0aGUgfjQwIHVzZSBjYXNlcyBvZiBwb3RlbnRpYWxseSBmcmF1ZHVsZW50IGFjdGl2aXR5IGFuZCBwbG90dGVkIHRoZSBvY2N1cmVuY2VzIG9mIGVhY2ggdXNlY2FzZS4gVGhlIFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcCBhbGxvd2VkIGZvciB5b3UgdG8gZmlsdGVyIHdoaWNoIGl0ZW1zIHlvdSB3YW50ZWQgdG8gbG9vayBhdCBhcyB3ZWxsIGFzIHNlbGVjdCB0aGUgdGltZWZyYW1lIG9uIHdoaWNoIHlvdSB3ZXJlIGxvb2tpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgSSByZWNyZWF0ZWQgdGhhdCBwcm9qZWN0IHVzaW5nIGRhdGEgZnJvbSBteSB0dXRvcmluZyBleHBlcmllbmNlIGF0IE5ZVS4gSGVyZSBJIGRpc3BsYXkgd2hlbiBlYWNoIHN0dWRlbnQgd291bGQgYXBwcm9hY2ggdmFyaW91cyB0dXRvcnNcclxuICAgICAgICAgICAgICAgICAgICBhbmQgdGhlIHN1Y2Nlc3Mgb2YgdGhlIHR1dG9yaW5nIHNlc3Npb24uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPkJ1aWx0IHVzaW5nIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPiBSZWFjdC5qczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5EYXRhIHdhcyByZWFkIGZyb208YSBocmVmPVwiaHR0cDovL2Nhc3NhbmRyYS5hcGFjaGUub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPiBDYXNzYW5kcmEgREIgKG5vdyBzdGF0aWMgZGF0YSk8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+VXNlZCA8YSBocmVmPVwiaHR0cHM6Ly9kM2pzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EMyBsaWJyYXJpZXM8L2E+IHRvIHNjYWxlIGFuZCBwbG90IGRhdGEgcG9pbnRzIGFjY29yZGluZyB0byB0aGVpciBkYXRlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlVzZWQgRDMgbGlicmFyaWVzIHRvIGNyZWF0ZSBhIHdpbmRvdyBmcmFtZSB0byBhZGp1c3QgdGhlIGRhdGUgd2luZG93IG9mIHZpZXdpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYXNhbW9haC1tZWVwLzEwMVRpbWVsaW5lJyB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IHNvdXJjZTwvYT48YnIvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8xMDFUaW1lbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkxpdmUgRGVtbzwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nS01lYW5zSGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biB0aXRsZT1cIkstTWVhbnMgRGVtb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0stbWVhbnNfY2x1c3RlcmluZ1wiIHRhcmdldD1cIl9ibGFua1wiPkstTWVhbnM8L2E+IHByb2plY3QgaXMgYSBzZWxmLW1hZGUgZGF0YSBjbHVzdGVyaW5nIGFsZ29yaXRobSB0aGF0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJIGNyZWF0ZWQgZm9yIG15IHByZWRpY3RpdmUgYW5hbHl0aWNzIGNsYXNzLiBUaGUgYWxnb3JpdGhtIHRha2VzIGluIDI0IGRvY3VtZW50cyByb3VnaGx5IGNvbmNlcm5lZCB3aXRoIDMgdG9waWNzIChNb3V0aCBhbmQgRm9vdCBEaXNlYXNlcywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFpcmxpbmUgU2FmZXR5LCBhbmQgSW50ZXJuYXRpb25hbCBIb3VzaW5nIFByaWNlcykgYW5kIGNsdXN0ZXJzIHRoZW0gaW50byBrIGNlbnRyb2lkcy4gVGhlIGRhdGEgaXMgMTxzdXA+c3Q8L3N1cD4gY29udmVydGVkIGludG8gYSBURi1JREYgbWF0cml4IGFkanVzdGVkIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGxlbmd0aHMgb2YgdGhlIHJlc3BlY3RpdmUgZG9jdW1lbnRzLiBUaGUgZGF0YSBpcyB0aGVuIHRyaW1tZWQgYnkgcmVtb3ZpbmcgbG93IGludHJhLWRpbWVuc2lvbmFsIHdvcmRzLCBjb21iaW5pbmcgaGlnaGx5IGNvcnJlbGF0ZWQgZGltZW5zaW9ucywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB0aGVuIGFkanVzdGluZyB0aGUgbWF0cml4IHVzaW5nIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QcmluY2lwYWxfY29tcG9uZW50X2FuYWx5c2lzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UENBPC9hPi5UaGUgc2ltaWxhcml0eSBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZWQgdXNpbmcgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Nvc2luZV9zaW1pbGFyaXR5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Y29zaW5lIHNpbWlsYXJpdHk8L2E+IGludG8gY2x1c3RlZCBkZXRlcm1pbmVkIGJ5IGluaXRpYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lYW5zIGZ1cnRoZXN0IGF3YXkgZnJvbSBlYWNoIG90aGVyIChzZWUgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0stbWVhbnMlMkIlMkJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5LLU1lYW5zKys8L2E+KS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyIHRoZSBkYXRhIGlzIGNsdXN0ZXJlZCBpdCBpcyB0aGVuIHRyYW5zZm9ybWVkIGFnYWluIGJ5IFBDQSBvbnRvIDIgZGltZW5zaW9ucyBhbmQgcGxvdHRlZCBvbiBhIDItRCBncmFwaC4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJ1aWx0IGluIDxhIGhyZWY9XCJodHRwczovL3d3dy5vcmFjbGUuY29tL3RlY2huZXR3b3JrL2phdmEvamF2YXNlL292ZXJ2aWV3L2phdmE4LTIxMDAzMjEuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkphdmE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZWQgPGEgaHJlZj1cImh0dHBzOi8vY29tbW9ucy5hcGFjaGUub3JnL3Byb3Blci9jb21tb25zLW1hdGgvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QXBhY2hlIENvbW1vbnM8L2E+IE1hdGggZm9yIHZlY3Rvci9tYXRyaXggbWFuaXB1bGF0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZWQgPGEgaHJlZj1cImh0dHA6Ly93d3cuamZyZWUub3JnL2pmcmVlY2hhcnQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SkZyZWUgY2hhcnRzPC9hPiB0byBjcmVhdGUgcGxvdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2FzYW1vYWgtbWVlcCcgdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBzb3VyY2U8L2E+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1FSSGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biB0aXRsZT0nUVIgTWFya2V0aW5nIFByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNhbHZpbiBLbGVpbiBtYXJrZXRpbmcgcHJvamVjdCB1dGlsaXppbmcgUVIgY29kZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3B2aCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJz5RUiBQcm9qZWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwiV2Vic2l0ZUhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHRpdGxlPSdUaGlzIFdlYnNpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb3JlIHRvIGNvbWUuLi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+QnVpbHQgdXNpbmcgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5OZXh0LmpzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ib3N0ZWQgdXNpbmcgPGEgaHJlZj1cImh0dHBzOi8vemVpdC5jby9kb2NzI3JlbGF0ZWRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5aZWl0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Documents\\\\myWebsite\\\\pages\\\\index.js */");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(components_stickyBar_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), __jsx(components_layout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Home")), __jsx("section", {
        id: "AboutMe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "About Me",
        openOnStart: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Hey, looks like you found my website!"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "My name is Jeffrey Asamoah, and I'm currently living in the NYC metropolitan area. I'm studying Mathematics and Computer Science at New York University and plan to graduate in May 2020. My hobbies include running, coding, and 3-D modelling.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "See more here"))), __jsx("section", {
        id: "TimelineHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Timeline App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "I created this timeline app to emulate the project I worked on during my Comcast Internship. At my internship my project was to create a foward-facing visual to display how the Xfinity Fraud Managment (XFM) team monitored and mitigated fraud activity. For my internship I displayed the ~40 use cases of potentially fraudulent activity and plotted the occurences of each usecase. The app allowed for you to filter which items you wanted to look at as well as select the timeframe on which you were looking. I recreated that project using data from my tutoring experience at NYU. Here I display when each student would approach various tutors and the success of the tutoring session."), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Built using ", __jsx("a", {
        href: "https://reactjs.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, " React.js")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Data was read from", __jsx("a", {
        href: "http://cassandra.apache.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, " Cassandra DB (now static data)")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Used ", __jsx("a", {
        href: "https://d3js.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "D3 libraries"), " to scale and plot data points according to their dates"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Used D3 libraries to create a window frame to adjust the date window of viewing"))), __jsx("a", {
        href: "https://github.com/asamoah-meep/101Timeline",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "View source"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/101Timeline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Live Demo"))), __jsx("section", {
        id: "KMeansHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "K-Means Demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "This ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "K-Means"), " project is a self-made data clustering algorithm that I created for my predictive analytics class. The algorithm takes in 24 documents roughly concerned with 3 topics (Mouth and Foot Diseases, Airline Safety, and International Housing Prices) and clusters them into k centroids. The data is 1", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "st"), " converted into a TF-IDF matrix adjusted for the lengths of the respective documents. The data is then trimmed by removing low intra-dimensional words, combining highly correlated dimensions, and then adjusting the matrix using ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Principal_component_analysis",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "PCA"), ".The similarity is measured using ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Cosine_similarity",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "cosine similarity"), " into clusted determined by initial means furthest away from each other (see ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/K-means%2B%2B",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "K-Means++"), "). After the data is clustered it is then transformed again by PCA onto 2 dimensions and plotted on a 2-D graph."), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Built in ", __jsx("a", {
        href: "https://www.oracle.com/technetwork/java/javase/overview/java8-2100321.html",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Java")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Used ", __jsx("a", {
        href: "https://commons.apache.org/proper/commons-math/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Apache Commons"), " Math for vector/matrix manipulation"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Used ", __jsx("a", {
        href: "http://www.jfree.org/jfreechart/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "JFree charts"), " to create plots"))), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "View source")), __jsx("section", {
        id: "QRHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "QR Marketing Project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Calvin Klein marketing project utilizing QR codes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/pvh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "QR Project"))), __jsx("section", {
        id: "WebsiteHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "This Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "More to come..."), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Built using ", __jsx("a", {
        href: "https://nextjs.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Next.js")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Hosted using ", __jsx("a", {
        href: "https://zeit.co/docs#related",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Zeit")))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a53e1b76858ce3e72de7.hot-update.js.map