webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/stickyBar.js":
/*!*********************************!*\
  !*** ./components/stickyBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_theme_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/theme.js */ "./public/theme.js");
/* harmony import */ var components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/dropdown.js */ "./components/dropdown.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/projectHeader.js */ "./components/projectHeader.js");
/* harmony import */ var _public_model_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/model.js */ "./public/model.js");






var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\stickyBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var StickyBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(StickyBar, _React$Component);

  var _super = _createSuper(StickyBar);

  function StickyBar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StickyBar);

    _this = _super.call(this, props);
    _this.toggleTheme = _this.toggleTheme.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.openDropdown = _this.openDropdown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = Object(_public_theme_js__WEBPACK_IMPORTED_MODULE_10__["default"])(js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('theme'));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StickyBar, [{
    key: "toggleTheme",
    value: function toggleTheme(evt) {
      var background, text, headings, subheadings, theme;

      if (evt.target.value === 'light') {
        //change to dark
        background = '#2F4454';
        text = '#D1E8E2';
        headings = '#FFCB9A';
        subheadings = '#D9B08c';
        theme = 'dark';
        js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set('theme', 'dark');
      } else {
        //change to light
        background = 'rgba(223,240,255,0.9)';
        text = 'rgb(58,118,158)';
        headings = '#5DA2D5';
        subheadings = '#CB669E';
        theme = 'light';
        js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set('theme', 'light');
      }

      this.setState({
        background: background,
        text: text,
        headings: headings,
        subheadings: subheadings,
        theme: theme
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.logoModel = new _public_model_js__WEBPACK_IMPORTED_MODULE_16__["default"](this.state.theme, true);
      this.mount.appendChild(this.logoModel.renderer.domElement);
      this.logoModel.load();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.mount.removeChild(this.logoModel.renderer.domElement);
      this.logoModel = new _public_model_js__WEBPACK_IMPORTED_MODULE_16__["default"](this.state.theme, true);
      this.mount.appendChild(this.logoModel.renderer.domElement);
      this.logoModel.load();
    }
  }, {
    key: "openDropdown",
    value: function openDropdown(ele) {
      var myDrops = this.props.children.slice(1).map(function (ele) {
        return ele.props.children[0];
      });
      var selectedDrop = myDrops[0];
      console.log(myDrops, selectedDrop); //selectedDrop.expand();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var contact = __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faEnvelope"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 16
        }
      }), "E-mail: ja3180@nyu.edu"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPhoneSquare"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 16
        }
      }), "Telephone: 914-224-6241"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faLinkedin"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 16
        }
      }), __jsx("a", {
        href: "https://www.linkedin.com/in/jeffrey-asamoah-07991a125/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 72
        }
      }, "LinkedIn"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 165
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faGithub"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 16
        }
      }), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 70
        }
      }, "Github")));

      var projects = __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 26
        }
      }, __jsx(components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "Timeline",
        name: "Tutor Timeline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }), __jsx(components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "KMeans",
        name: "K-Means Demo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }), __jsx(components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "Website",
        name: "This Website",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }), __jsx(components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "QR",
        name: "QR Marketing Project",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }));

      var bar = __jsx("div", {
        id: "stickyBar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }
      }, __jsx("div", {
        id: "logoMount",
        ref: function ref(_ref) {
          return _this2.mount = _ref;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }, "Rotate me!")), __jsx("h1", {
        style: {
          position: "relative",
          left: "12px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }, "Jeffrey"), __jsx("h1", {
        style: {
          position: "relative",
          left: "25px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }
      }, "Asamoah"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "subHeading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faHome"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 43
        }
      }), "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "subHeading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faAddressCard"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 43
        }
      }), "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "subHeading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCube"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 43
        }
      }), "3D Gallery")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faTasks"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 18
        }
      }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Projects",
        barDropdown: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 72
        }
      }, projects)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faInbox"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 18
        }
      }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Contact / Media",
        barDropdown: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 72
        }
      }, contact)), __jsx("div", {
        id: "toggleTheme",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }
      }, __jsx("span", {
        style: {
          visibility: this.state.theme === 'light' ? 'visible' : 'hidden'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }
      }, "Light"), __jsx("label", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }, __jsx("input", {
        type: "checkbox",
        value: this.state.theme,
        onChange: this.toggleTheme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }
      }), __jsx("span", {
        className: "slider round",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }
      })), __jsx("span", {
        style: {
          visibility: this.state.theme === 'dark' ? 'visible' : 'hidden'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, "Dark")));

      var globalStyle = __jsx("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 29
        }
      }, "\n        body{\n            background: ".concat(this.state.background, "\n        }\n\n        h1{\n            color: ").concat(this.state.headings, "\n        }\n\n        h3, div svg{\n            color: ").concat(this.state.subheadings, "\n        }\n\n        p,a,span,li,div,form,text{\n            color: ").concat(this.state.text, "\n        }\n\n        section{\n            boder-bottom: solid 2px ").concat(this.state.subheadings, ";\n        }"));

      var style = __jsx("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 23
        }
      }, "\n\n            #logoMount{\n                height:75px;\n                position:relative;\n            }\n\n            #logoMount p{\n                visibility: hidden;\n                width:120px;\n                opacity: .4;\n                text-align:center;\n                animation-name: fadeIn;\n                animation-duration: 5s;\n                padding: 5px 0;\n                border-radius: 6px;\n                position: absolute;\n                top:-30px;\n            }\n\n            @keyframes fadeIn{\n                from {visibility: visible;}\n                to {visibility: hidden;}\n            }\n\n            #logoMount:hover p{\n                visibility: visible;\n            }\n\n            .barIcon{\n                color: ".concat(this.state.subheadings, ";\n                display:inline-block;\n                position:relative;\n                right:5px;\n            }\n\n            .barDropdown{\n                display:inline-block;\n            }\n\n            #content{\n                display:inline-block;\n                margin-top:5px;\n                position:relative;\n                left: 30px;\n                width:730px;\n                padding-left: 15px;\n                vertical-align:top;\n                border-left: solid 2px ").concat(this.state.subheadings, ";\n            }\n\n            #stickyBar{\n                vertical-align:top;\n                position: relative;\n                display:inline-block;\n                left:20px;\n                // width:200px;\n                margin-right: 5px;\n                margin-top:5px;\n            }\n            .subHeading{\n                font-family: NunitoItalic;\n                color: ").concat(this.state.subheadings, ";\n                display: block;\n                font-size: 1.5rem;\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n                margin-inline-start: 0px;\n                margin-inline-end: 0px;\n                font-weight: bold;\n            }\n\n            #toggleTheme{\n                position:relative;\n                left:10%;\n            }\n            \n            #toggleTheme span{\n                padding:10px;\n            }\n\n            .switch {\n                position: relative;\n                display: inline-block;\n                width: 60px;\n                height: 34px;\n            }\n\n            .switch input {\n                opacity: 0;\n                width: 0;\n                height: 0;\n            }\n\n            .slider {\n                position: absolute;\n                cursor: pointer;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: #ccc;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            .slider:before {\n                position: absolute;\n                content: \"\";\n                height: 26px;\n                width: 26px;\n                left: 4px;\n                bottom: 4px;\n                background-color: white;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            input[type='checkbox']:not(:checked) + .slider{\n                background-color: rgba(223,240,255,0.9);\n            }\n\n            input[type='checkbox']:checked + .slider {\n                background-color: #2F4454;\n            }\n\n            input:focus + .slider {\n                box-shadow: 0 0 1px #15DB95;\n            }\n\n            input:checked + .slider:before {\n                -webkit-transform: translateX(26px);\n                -ms-transform: translateX(26px);\n                transform: translateX(26px);\n            }\n\n            .slider.round {\n                border-radius: 34px;\n            }\n\n            .slider.round:before {\n                border-radius: 50%;\n            }\n        "));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, style, globalStyle, bar, __jsx("div", {
        id: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 13
        }
      }, this.props.children));
    }
  }]);

  return StickyBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StickyBar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_stickyBar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/stickyBar.js */ "./components/stickyBar.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_dropdown_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/dropdown.js */ "./components/dropdown.js");





var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(components_stickyBar_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }
      }, "Home"), __jsx("link", {
        rel: "icon",
        href: "/butterfly.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }
      })), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      }, "Home"), __jsx("section", {
        id: "AboutMe",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "About Me",
        openOnStart: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }
      }, "Hey, looks like you found my website!"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      }, "My name is Jeffrey Asamoah, and I'm currently living in the NYC metropolitan area. I'm studying Mathematics and Computer Science at New York University and plan to graduate in May 2020. My hobbies include running, coding, and 3-D modelling.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      }, "See more here"))), __jsx("section", {
        id: "TimelineHeader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Timeline App",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, "I created this timeline app to emulate the project I worked on during my Comcast Internship. At my internship my project was to create a foward-facing visual to display how the Xfinity Fraud Managment (XFM) team monitored and mitigated fraud activity. For my internship I displayed the ~40 use cases of potentially fraudulent activity and plotted the occurences of each usecase. The app allowed for you to filter which items you wanted to look at as well as select the timeframe on which you were looking. I recreated that project using data from my tutoring experience at NYU. Here I display when each student would approach various tutors and the success of the tutoring session."), __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }
      }, "Built using ", __jsx("a", {
        href: "https://reactjs.org/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 37
        }
      }, " React.js")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }, "Data was read from", __jsx("a", {
        href: "http://cassandra.apache.org/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 43
        }
      }, " Cassandra DB (now static data)")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, "Used ", __jsx("a", {
        href: "https://d3js.org/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 30
        }
      }, "D3 libraries"), " to scale and plot data points according to their dates"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }
      }, "Used D3 libraries to create a window frame to adjust the date window of viewing"))), __jsx("a", {
        href: "https://github.com/asamoah-meep/101Timeline",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }, "View source"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 102
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/101Timeline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }
      }, "Live Demo"))), __jsx("section", {
        id: "KMeansHeader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "K-Means Demo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }
      }, "This ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 29
        }
      }, "K-Means"), " project is a self-made data clustering algorithm that I created for my predictive analytics class. The algorithm takes in 24 documents roughly concerned with 3 topics (Mouth and Foot Diseases, Airline Safety, and International Housing Prices) and clusters them into k centroids. The data is 1", __jsx("sup", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 124
        }
      }, "st"), " converted into a TF-IDF matrix adjusted for the lengths of the respective documents. The data is then trimmed by removing low intra-dimensional words, combining highly correlated dimensions, and then adjusting the matrix using ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Principal_component_analysis",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 61
        }
      }, "PCA"), ".The similarity is measured using ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Cosine_similarity",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 40
        }
      }, "cosine similarity"), " into clusted determined by initial means furthest away from each other (see ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/K-means%2B%2B",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 66
        }
      }, "K-Means++"), "). After the data is clustered it is then transformed again by PCA onto 2 dimensions and plotted on a 2-D graph."), __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }
      }, "Built in ", __jsx("a", {
        href: "https://www.oracle.com/technetwork/java/javase/overview/java8-2100321.html",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 38
        }
      }, "Java")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }
      }, "Used ", __jsx("a", {
        href: "https://commons.apache.org/proper/commons-math/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 34
        }
      }, "Apache Commons"), " Math for vector/matrix manipulation"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }
      }, "Used ", __jsx("a", {
        href: "http://www.jfree.org/jfreechart/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 34
        }
      }, "JFree charts"), " to create plots"))), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }, "View source")), __jsx("section", {
        id: "QRHeader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "QR Marketing Project",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }
      }, "This project was to build a mobile-friendly web page to demo the use of ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/QR_code",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 97
        }
      }, "QR codes"), "in advertising. QR codes are functionally 2-D bar codes and since most mobile phones come equipped to scan them, it makes sense to leverage them for quick access to a web page. The page makes use of CSS media queries and", __jsx("a", {
        href: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }, "Responsive Design Practices"), " to be responsive to different devices in order to be visually appealing across all devices."), __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }
      }, "Build for ", __jsx("a", {
        href: "https://www.pvh.com/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 39
        }
      }, "PVH")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }
      }, "Using ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/QR_code",
        target: "blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 35
        }
      }, "QR codes"), " for easy mobile marketing"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/pvh",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }, __jsx("a", {
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }
      }, "QR Project"))), __jsx("section", {
        id: "WebsiteHeader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "This Website",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }
      }, "The website you see here was built using Next.js. a server-side framework built on top of React. I wanted to create a website to showcase all of projects and work that I am proud of. Since it is important to demo projects as transparently and seemlessly as possible it made sense to host it all on a single website. This website will continuously be a work in progress as I try to implement and add both new features and new projects."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, "In Progress:"), __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }
      }, "About Me"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }
      }, "Implementing more 3D models to gallery"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }
      }, "Responsive Design")), __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }
      }, "Built using ", __jsx("a", {
        href: "https://nextjs.org/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 41
        }
      }, "Next.js")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 25
        }
      }, "Hosted using ", __jsx("a", {
        href: "https://zeit.co/docs#related",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 42
        }
      }, "Zeit"))))), __jsx("section", {
        id: "ocrAPI",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "OCR API",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }
      }, "My 1st project at GEP was to help construct an ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Application_programming_interface",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 71
        }
      }, "API"), "for our ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Optical_character_recognition",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 34
        }
      }, " Optical Code Recognition (OCR)"), " project. Our API would recieve data from the AI that read the data (in our case invoices), identify key elements and information, save it into our database, and try to create the invoice on our service with the data. My role was was to create unit tests for new components, migrate data accessing points to seperate API calls for security/independence, and implement new errors for missing information within the documents. This project is one of the 1st enterprise projects I've worked on with a team and it has taught me a lot about the importance of communication, both in clarity of code and working with colleges. "), __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 25
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 29
        }
      }, "Front End done in ", __jsx("a", {
        href: "https://angular.io/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 51
        }
      }, "Angular5/")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 29
        }
      }, "Back End done in ", __jsx("a", {
        href: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 50
        }
      }, "C# .NET framework")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 29
        }
      }, "API hosted with ", __jsx("a", {
        href: "https://docs.microsoft.com/en-us/iis/extensions/introduction-to-iis-express/iis-express-overview",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 49
        }
      }, "IIS Express")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }
      }, "Using ", __jsx("a", {
        href: "https://www.oracle.com/mysql/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 39
        }
      }, "MySQL database")))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0aWNreUJhci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJTdGlja3lCYXIiLCJwcm9wcyIsInRvZ2dsZVRoZW1lIiwiYmluZCIsIm9wZW5Ecm9wZG93biIsInN0YXRlIiwidGhlbWVWYWx1ZXMiLCJDb29raWUiLCJnZXQiLCJldnQiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImhlYWRpbmdzIiwic3ViaGVhZGluZ3MiLCJ0aGVtZSIsInRhcmdldCIsInZhbHVlIiwic2V0Iiwic2V0U3RhdGUiLCJsb2dvTW9kZWwiLCJNb2RlbCIsIm1vdW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJlciIsImRvbUVsZW1lbnQiLCJsb2FkIiwicmVtb3ZlQ2hpbGQiLCJlbGUiLCJteURyb3BzIiwiY2hpbGRyZW4iLCJzbGljZSIsIm1hcCIsInNlbGVjdGVkRHJvcCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWN0IiwiZmFFbnZlbG9wZSIsImZhUGhvbmVTcXVhcmUiLCJmYUxpbmtlZGluIiwiZmFHaXRodWIiLCJwcm9qZWN0cyIsImJhciIsInJlZiIsInBvc2l0aW9uIiwibGVmdCIsImZhSG9tZSIsImZhQWRkcmVzc0NhcmQiLCJmYUN1YmUiLCJmYVRhc2tzIiwiZmFJbmJveCIsInZpc2liaWxpdHkiLCJnbG9iYWxTdHlsZSIsInN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztJQUNNQSxTOzs7OztBQUVGLHFCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLHlHQUFuQjtBQUNB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFxQjtBQUFHLFlBQUksRUFBQyxpREFBUjtBQUEwRCxjQUFNLEVBQUMsUUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBckIsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQW9CO0FBQUcsWUFBSSxFQUFDLGtHQUFSO0FBQ2hCLGNBQU0sRUFBQyxRQURTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXBCLENBSEosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFVO0FBQUcsWUFBSSxFQUFDLCtCQUFSO0FBQXdDLGNBQU0sRUFBQyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFWLENBTEosQ0FSUixDQURKLENBaEdKLENBRE8sQ0FBUDtBQXFISDs7OztFQXpIZUYsNENBQUssQ0FBQ0MsUzs7QUE0SFhDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNWY3MDI4ZmM1OTc5MzhhNGExNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICdzdHlsZXMuY3NzJztcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgdGhlbWVWYWx1ZXMgZnJvbSAnLi4vcHVibGljL3RoZW1lLmpzJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge2ZhSG9tZSwgZmFBZGRyZXNzQ2FyZCxmYUVudmVsb3BlLGZhVGFza3MsZmFDdWJlLFxyXG4gICAgICAgIGZhUGhvbmVTcXVhcmUsIGZhSW5ib3h9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtmYUdpdGh1YiwgZmFMaW5rZWRpbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFByb2plY3RIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9wcm9qZWN0SGVhZGVyLmpzJztcclxuaW1wb3J0IE1vZGVsIGZyb20gJy4uL3B1YmxpYy9tb2RlbC5qcyc7XHJcbmNsYXNzIFN0aWNreUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVRoZW1lID0gdGhpcy50b2dnbGVUaGVtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3BlbkRyb3Bkb3duID0gdGhpcy5vcGVuRHJvcGRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhlbWVWYWx1ZXMoQ29va2llLmdldCgndGhlbWUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGhlbWUoZXZ0KXtcclxuXHJcbiAgICAgICAgbGV0IGJhY2tncm91bmQsIHRleHQsaGVhZGluZ3Msc3ViaGVhZGluZ3MsdGhlbWU7XHJcblxyXG4gICAgICAgIGlmKGV2dC50YXJnZXQudmFsdWU9PT0nbGlnaHQnKXsgLy9jaGFuZ2UgdG8gZGFya1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0gJyMyRjQ0NTQnO1xyXG4gICAgICAgICAgICB0ZXh0ID0gJyNEMUU4RTInO1xyXG4gICAgICAgICAgICBoZWFkaW5ncyA9ICcjRkZDQjlBJztcclxuICAgICAgICAgICAgc3ViaGVhZGluZ3MgPSAnI0Q5QjA4Yyc7XHJcbiAgICAgICAgICAgIHRoZW1lID0gJ2RhcmsnO1xyXG4gICAgICAgICAgICBDb29raWUuc2V0KCd0aGVtZScsJ2RhcmsnKTtcclxuICAgICAgICB9ZWxzZXsgLy9jaGFuZ2UgdG8gbGlnaHRcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9ICdyZ2JhKDIyMywyNDAsMjU1LDAuOSknO1xyXG4gICAgICAgICAgICB0ZXh0ID0gJ3JnYig1OCwxMTgsMTU4KSc7XHJcbiAgICAgICAgICAgIGhlYWRpbmdzID0gJyM1REEyRDUnO1xyXG4gICAgICAgICAgICBzdWJoZWFkaW5ncyA9ICcjQ0I2NjlFJztcclxuICAgICAgICAgICAgdGhlbWUgPSAnbGlnaHQnO1xyXG4gICAgICAgICAgICBDb29raWUuc2V0KCd0aGVtZScsJ2xpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgaGVhZGluZ3MsXHJcbiAgICAgICAgICAgIHN1YmhlYWRpbmdzLFxyXG4gICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5sb2dvTW9kZWwgPSBuZXcgTW9kZWwodGhpcy5zdGF0ZS50aGVtZSx0cnVlKTtcclxuICAgICAgICB0aGlzLm1vdW50LmFwcGVuZENoaWxkKHRoaXMubG9nb01vZGVsLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubG9nb01vZGVsLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB0aGlzLm1vdW50LnJlbW92ZUNoaWxkKHRoaXMubG9nb01vZGVsLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubG9nb01vZGVsID0gbmV3IE1vZGVsKHRoaXMuc3RhdGUudGhlbWUsdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tb3VudC5hcHBlbmRDaGlsZCh0aGlzLmxvZ29Nb2RlbC5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbC5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRyb3Bkb3duKGVsZSl7XHJcbiAgICAgICAgY29uc3QgbXlEcm9wcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4uc2xpY2UoMSkubWFwKGVsZT0+ZWxlLnByb3BzLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZERyb3AgPSBteURyb3BzWzBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG15RHJvcHMsc2VsZWN0ZWREcm9wKTtcclxuICAgICAgICAvL3NlbGVjdGVkRHJvcC5leHBhbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBjb250YWN0ID0gPD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhRW52ZWxvcGV9Lz5FLW1haWw6IGphMzE4MEBueXUuZWR1PC9wPlxyXG4gICAgICAgICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFQaG9uZVNxdWFyZX0gLz5UZWxlcGhvbmU6IDkxNC0yMjQtNjI0MTwvcD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhTGlua2VkaW59Lz48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2plZmZyZXktYXNhbW9haC0wNzk5MWExMjUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGlua2VkSW48L2E+PGJyLz48L3A+XHJcbiAgICAgICAgICAgIDxwPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUdpdGh1Yn0vPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXNhbW9haC1tZWVwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0aHViPC9hPjwvcD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSA8dWw+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHN1YmplY3Q9J1RpbWVsaW5lJyBuYW1lPSdUdXRvciBUaW1lbGluZScvPlxyXG4gICAgICAgICAgICA8UHJvamVjdEhlYWRlciBzdWJqZWN0PSdLTWVhbnMnIG5hbWU9J0stTWVhbnMgRGVtbycvPlxyXG4gICAgICAgICAgICA8UHJvamVjdEhlYWRlciBzdWJqZWN0PSdXZWJzaXRlJyBuYW1lPSdUaGlzIFdlYnNpdGUnLz5cclxuICAgICAgICAgICAgPFByb2plY3RIZWFkZXIgc3ViamVjdD0nUVInIG5hbWU9J1FSIE1hcmtldGluZyBQcm9qZWN0Jy8+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgY29uc3QgYmFyID0gPGRpdiBpZD0nc3RpY2t5QmFyJz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29Nb3VudFwiIHJlZj17cmVmPT4odGhpcy5tb3VudCA9IHJlZil9PlxyXG4gICAgICAgICAgICAgICAgPHA+Um90YXRlIG1lITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgbGVmdDpcIjEycHhcIn19PkplZmZyZXk8L2gxPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3twb3NpdGlvbjpcInJlbGF0aXZlXCIsIGxlZnQ6XCIyNXB4XCJ9fT5Bc2Ftb2FoPC9oMT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3N1YkhlYWRpbmcnPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUhvbWV9Lz5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhQWRkcmVzc0NhcmR9Lz5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvZ2FsbGVyeSc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3N1YkhlYWRpbmcnPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUN1YmV9Lz4zRCBHYWxsZXJ5PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXY+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhVGFza3N9Lz4gPERyb3Bkb3duIHRpdGxlPVwiUHJvamVjdHNcIiBiYXJEcm9wZG93bj57cHJvamVjdHN9PC9Ecm9wZG93bj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFJbmJveH0vPiA8RHJvcGRvd24gdGl0bGU9J0NvbnRhY3QgLyBNZWRpYScgYmFyRHJvcGRvd24+e2NvbnRhY3R9PC9Ecm9wZG93bj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0ndG9nZ2xlVGhlbWUnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t2aXNpYmlsaXR5OiB0aGlzLnN0YXRlLnRoZW1lPT09J2xpZ2h0Jz8gJ3Zpc2libGUnOiAnaGlkZGVuJ319PkxpZ2h0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17dGhpcy5zdGF0ZS50aGVtZX0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlVGhlbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t2aXNpYmlsaXR5OiB0aGlzLnN0YXRlLnRoZW1lPT09J2RhcmsnPyAndmlzaWJsZSc6ICdoaWRkZW4nfX0+RGFyazwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG5cclxuICAgICAgICBjb25zdCBnbG9iYWxTdHlsZT0gIDxzdHlsZT57YFxyXG4gICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUuaGVhZGluZ3N9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMywgZGl2IHN2Z3tcclxuICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAsYSxzcGFuLGxpLGRpdixmb3JtLHRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUudGV4dH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlY3Rpb257XHJcbiAgICAgICAgICAgIGJvZGVyLWJvdHRvbTogc29saWQgMnB4ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc307XHJcbiAgICAgICAgfWB9PC9zdHlsZT47XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gPHN0eWxlPntgXHJcblxyXG4gICAgICAgICAgICAjbG9nb01vdW50e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0Ojc1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2xvZ29Nb3VudCBwe1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDotMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW57XHJcbiAgICAgICAgICAgICAgICBmcm9tIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cclxuICAgICAgICAgICAgICAgIHRvIHt2aXNpYmlsaXR5OiBoaWRkZW47fVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbG9nb01vdW50OmhvdmVyIHB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFySWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJhckRyb3Bkb3due1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNjb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjczMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjc3RpY2t5QmFye1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjIwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YkhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTnVuaXRvSXRhbGljO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc307XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICN0b2dnbGVUaGVtZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDoxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICN0b2dnbGVUaGVtZSBzcGFue1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3dpdGNoIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3dpdGNoIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpub3QoOmNoZWNrZWQpICsgLnNsaWRlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyNTUsMC45KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY0NDU0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAjMTVEQjk1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyLnJvdW5kIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT4gICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIHtzdHlsZX1cclxuICAgICAgICAgICAge2dsb2JhbFN0eWxlfVxyXG4gICAgICAgICAgICB7YmFyfVxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdjb250ZW50Jz57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreUJhcjsiLCJpbXBvcnQgJ3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQmFyIGZyb20gJ2NvbXBvbmVudHMvc3RpY2t5QmFyLmpzJztcclxuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9kcm9wZG93bi5qcyc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPEJhcj5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2J1dHRlcmZseS5wbmcnLz5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J0Fib3V0TWUnPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHRpdGxlPVwiQWJvdXQgTWVcIiBvcGVuT25TdGFydD5cclxuICAgICAgICAgICAgICAgIDxwPkhleSwgbG9va3MgbGlrZSB5b3UgZm91bmQgbXkgd2Vic2l0ZSE8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5NeSBuYW1lIGlzIEplZmZyZXkgQXNhbW9haCwgYW5kIEknbSBjdXJyZW50bHkgbGl2aW5nIGluIHRoZSBOWUMgbWV0cm9wb2xpdGFuIGFyZWEuXHJcbiAgICAgICAgICAgICAgICAgICAgSSdtIHN0dWR5aW5nIE1hdGhlbWF0aWNzIGFuZCBDb21wdXRlciBTY2llbmNlIGF0IE5ldyBZb3JrIFVuaXZlcnNpdHkgYW5kIHBsYW5cclxuICAgICAgICAgICAgICAgICAgICB0byBncmFkdWF0ZSBpbiBNYXkgMjAyMC4gTXkgaG9iYmllcyBpbmNsdWRlIHJ1bm5pbmcsIGNvZGluZywgYW5kIDMtRCBtb2RlbGxpbmcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlNlZSBtb3JlIGhlcmU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1RpbWVsaW5lSGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biB0aXRsZT1cIlRpbWVsaW5lIEFwcFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+SSBjcmVhdGVkIHRoaXMgdGltZWxpbmUgYXBwIHRvIGVtdWxhdGUgdGhlIHByb2plY3QgSSB3b3JrZWQgb24gZHVyaW5nIG15IENvbWNhc3QgSW50ZXJuc2hpcC4gQXQgbXkgaW50ZXJuc2hpcCBteSBwcm9qZWN0IHdhcyBcclxuICAgICAgICAgICAgICAgICAgICB0byBjcmVhdGUgYSBmb3dhcmQtZmFjaW5nIHZpc3VhbCB0byBkaXNwbGF5IGhvdyB0aGUgWGZpbml0eSBGcmF1ZCBNYW5hZ21lbnQgKFhGTSkgdGVhbSBtb25pdG9yZWQgYW5kIG1pdGlnYXRlZCBmcmF1ZCBhY3Rpdml0eS5cclxuICAgICAgICAgICAgICAgICAgICBGb3IgbXkgaW50ZXJuc2hpcCBJIGRpc3BsYXllZCB0aGUgfjQwIHVzZSBjYXNlcyBvZiBwb3RlbnRpYWxseSBmcmF1ZHVsZW50IGFjdGl2aXR5IGFuZCBwbG90dGVkIHRoZSBvY2N1cmVuY2VzIG9mIGVhY2ggdXNlY2FzZS4gVGhlIFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcCBhbGxvd2VkIGZvciB5b3UgdG8gZmlsdGVyIHdoaWNoIGl0ZW1zIHlvdSB3YW50ZWQgdG8gbG9vayBhdCBhcyB3ZWxsIGFzIHNlbGVjdCB0aGUgdGltZWZyYW1lIG9uIHdoaWNoIHlvdSB3ZXJlIGxvb2tpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgSSByZWNyZWF0ZWQgdGhhdCBwcm9qZWN0IHVzaW5nIGRhdGEgZnJvbSBteSB0dXRvcmluZyBleHBlcmllbmNlIGF0IE5ZVS4gSGVyZSBJIGRpc3BsYXkgd2hlbiBlYWNoIHN0dWRlbnQgd291bGQgYXBwcm9hY2ggdmFyaW91cyB0dXRvcnNcclxuICAgICAgICAgICAgICAgICAgICBhbmQgdGhlIHN1Y2Nlc3Mgb2YgdGhlIHR1dG9yaW5nIHNlc3Npb24uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPkJ1aWx0IHVzaW5nIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPiBSZWFjdC5qczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5EYXRhIHdhcyByZWFkIGZyb208YSBocmVmPVwiaHR0cDovL2Nhc3NhbmRyYS5hcGFjaGUub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPiBDYXNzYW5kcmEgREIgKG5vdyBzdGF0aWMgZGF0YSk8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+VXNlZCA8YSBocmVmPVwiaHR0cHM6Ly9kM2pzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EMyBsaWJyYXJpZXM8L2E+IHRvIHNjYWxlIGFuZCBwbG90IGRhdGEgcG9pbnRzIGFjY29yZGluZyB0byB0aGVpciBkYXRlczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlVzZWQgRDMgbGlicmFyaWVzIHRvIGNyZWF0ZSBhIHdpbmRvdyBmcmFtZSB0byBhZGp1c3QgdGhlIGRhdGUgd2luZG93IG9mIHZpZXdpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYXNhbW9haC1tZWVwLzEwMVRpbWVsaW5lJyB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IHNvdXJjZTwvYT48YnIvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8xMDFUaW1lbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkxpdmUgRGVtbzwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nS01lYW5zSGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biB0aXRsZT1cIkstTWVhbnMgRGVtb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlRoaXMgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0stbWVhbnNfY2x1c3RlcmluZ1wiIHRhcmdldD1cIl9ibGFua1wiPkstTWVhbnM8L2E+IHByb2plY3QgaXMgYSBzZWxmLW1hZGUgZGF0YSBjbHVzdGVyaW5nIGFsZ29yaXRobSB0aGF0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJIGNyZWF0ZWQgZm9yIG15IHByZWRpY3RpdmUgYW5hbHl0aWNzIGNsYXNzLiBUaGUgYWxnb3JpdGhtIHRha2VzIGluIDI0IGRvY3VtZW50cyByb3VnaGx5IGNvbmNlcm5lZCB3aXRoIDMgdG9waWNzIChNb3V0aCBhbmQgRm9vdCBEaXNlYXNlcywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFpcmxpbmUgU2FmZXR5LCBhbmQgSW50ZXJuYXRpb25hbCBIb3VzaW5nIFByaWNlcykgYW5kIGNsdXN0ZXJzIHRoZW0gaW50byBrIGNlbnRyb2lkcy4gVGhlIGRhdGEgaXMgMTxzdXA+c3Q8L3N1cD4gY29udmVydGVkIGludG8gYSBURi1JREYgbWF0cml4IGFkanVzdGVkIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGxlbmd0aHMgb2YgdGhlIHJlc3BlY3RpdmUgZG9jdW1lbnRzLiBUaGUgZGF0YSBpcyB0aGVuIHRyaW1tZWQgYnkgcmVtb3ZpbmcgbG93IGludHJhLWRpbWVuc2lvbmFsIHdvcmRzLCBjb21iaW5pbmcgaGlnaGx5IGNvcnJlbGF0ZWQgZGltZW5zaW9ucywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB0aGVuIGFkanVzdGluZyB0aGUgbWF0cml4IHVzaW5nIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9QcmluY2lwYWxfY29tcG9uZW50X2FuYWx5c2lzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UENBPC9hPi5UaGUgc2ltaWxhcml0eSBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZWQgdXNpbmcgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Nvc2luZV9zaW1pbGFyaXR5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Y29zaW5lIHNpbWlsYXJpdHk8L2E+IGludG8gY2x1c3RlZCBkZXRlcm1pbmVkIGJ5IGluaXRpYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lYW5zIGZ1cnRoZXN0IGF3YXkgZnJvbSBlYWNoIG90aGVyIChzZWUgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0stbWVhbnMlMkIlMkJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5LLU1lYW5zKys8L2E+KS4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFmdGVyIHRoZSBkYXRhIGlzIGNsdXN0ZXJlZCBpdCBpcyB0aGVuIHRyYW5zZm9ybWVkIGFnYWluIGJ5IFBDQSBvbnRvIDIgZGltZW5zaW9ucyBhbmQgcGxvdHRlZCBvbiBhIDItRCBncmFwaC4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJ1aWx0IGluIDxhIGhyZWY9XCJodHRwczovL3d3dy5vcmFjbGUuY29tL3RlY2huZXR3b3JrL2phdmEvamF2YXNlL292ZXJ2aWV3L2phdmE4LTIxMDAzMjEuaHRtbFwiIHRhcmdldD1cIl9ibGFua1wiPkphdmE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZWQgPGEgaHJlZj1cImh0dHBzOi8vY29tbW9ucy5hcGFjaGUub3JnL3Byb3Blci9jb21tb25zLW1hdGgvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QXBhY2hlIENvbW1vbnM8L2E+IE1hdGggZm9yIHZlY3Rvci9tYXRyaXggbWFuaXB1bGF0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZWQgPGEgaHJlZj1cImh0dHA6Ly93d3cuamZyZWUub3JnL2pmcmVlY2hhcnQvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SkZyZWUgY2hhcnRzPC9hPiB0byBjcmVhdGUgcGxvdHM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2FzYW1vYWgtbWVlcCcgdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBzb3VyY2U8L2E+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9J1FSSGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biB0aXRsZT0nUVIgTWFya2V0aW5nIFByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHByb2plY3Qgd2FzIHRvIGJ1aWxkIGEgbW9iaWxlLWZyaWVuZGx5IHdlYiBwYWdlIHRvIGRlbW8gdGhlIHVzZSBvZiA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUVJfY29kZVwiIHRhcmdldD1cIl9ibGFua1wiPlFSIGNvZGVzPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW4gYWR2ZXJ0aXNpbmcuIFFSIGNvZGVzIGFyZSBmdW5jdGlvbmFsbHkgMi1EIGJhciBjb2RlcyBhbmQgc2luY2UgbW9zdCBtb2JpbGUgcGhvbmVzIGNvbWUgZXF1aXBwZWQgdG8gc2NhbiB0aGVtLCBpdCBtYWtlcyBzZW5zZSB0byBsZXZlcmFnZSB0aGVtIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVpY2sgYWNjZXNzIHRvIGEgd2ViIHBhZ2UuIFRoZSBwYWdlIG1ha2VzIHVzZSBvZiBDU1MgbWVkaWEgcXVlcmllcyBhbmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0NTUy9DU1NfbGF5b3V0L1Jlc3BvbnNpdmVfRGVzaWduXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVzcG9uc2l2ZSBEZXNpZ24gUHJhY3RpY2VzPC9hPiB0byBiZSByZXNwb25zaXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0byBkaWZmZXJlbnQgZGV2aWNlcyBpbiBvcmRlciB0byBiZSB2aXN1YWxseSBhcHBlYWxpbmcgYWNyb3NzIGFsbCBkZXZpY2VzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CdWlsZCBmb3IgPGEgaHJlZj0naHR0cHM6Ly93d3cucHZoLmNvbS8nIHRhcmdldD0nX2JsYW5rJz5QVkg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzaW5nIDxhIGhyZWY9J2h0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1FSX2NvZGUnIHRhcmdldD0nYmxhbmsnPlFSIGNvZGVzPC9hPiBmb3IgZWFzeSBtb2JpbGUgbWFya2V0aW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wdmgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuayc+UVIgUHJvamVjdDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cIldlYnNpdGVIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biB0aXRsZT0nVGhpcyBXZWJzaXRlJz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHdlYnNpdGUgeW91IHNlZSBoZXJlIHdhcyBidWlsdCB1c2luZyBOZXh0LmpzLiBhIHNlcnZlci1zaWRlIGZyYW1ld29yayBidWlsdCBvbiB0b3Agb2YgUmVhY3QuIEkgd2FudGVkIHRvIGNyZWF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhIHdlYnNpdGUgdG8gc2hvd2Nhc2UgYWxsIG9mIHByb2plY3RzIGFuZCB3b3JrIHRoYXQgSSBhbSBwcm91ZCBvZi4gU2luY2UgaXQgaXMgaW1wb3J0YW50IHRvIGRlbW8gcHJvamVjdHMgYXMgdHJhbnNwYXJlbnRseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgc2VlbWxlc3NseSBhcyBwb3NzaWJsZSBpdCBtYWRlIHNlbnNlIHRvIGhvc3QgaXQgYWxsIG9uIGEgc2luZ2xlIHdlYnNpdGUuIFRoaXMgd2Vic2l0ZSB3aWxsIGNvbnRpbnVvdXNseSBiZSBhIHdvcmsgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXMgSSB0cnkgdG8gaW1wbGVtZW50IGFuZCBhZGQgYm90aCBuZXcgZmVhdHVyZXMgYW5kIG5ldyBwcm9qZWN0cy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SW4gUHJvZ3Jlc3M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFib3V0IE1lPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkltcGxlbWVudGluZyBtb3JlIDNEIG1vZGVscyB0byBnYWxsZXJ5PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlJlc3BvbnNpdmUgRGVzaWduPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJ1aWx0IHVzaW5nIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TmV4dC5qczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+SG9zdGVkIHVzaW5nIDxhIGhyZWY9XCJodHRwczovL3plaXQuY28vZG9jcyNyZWxhdGVkXCIgdGFyZ2V0PVwiX2JsYW5rXCI+WmVpdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwib2NyQVBJXCI+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gdGl0bGU9J09DUiBBUEknPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk15IDFzdCBwcm9qZWN0IGF0IEdFUCB3YXMgdG8gaGVscCBjb25zdHJ1Y3QgYW4gPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FwcGxpY2F0aW9uX3Byb2dyYW1taW5nX2ludGVyZmFjZVwiIHRhcmdldD1cIl9ibGFua1wiPkFQSTwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb3Igb3VyIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9PcHRpY2FsX2NoYXJhY3Rlcl9yZWNvZ25pdGlvblwiIHRhcmdldD1cIl9ibGFua1wiPiBPcHRpY2FsIENvZGUgUmVjb2duaXRpb24gKE9DUik8L2E+IHByb2plY3QuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPdXIgQVBJIHdvdWxkIHJlY2lldmUgZGF0YSBmcm9tIHRoZSBBSSB0aGF0IHJlYWQgdGhlIGRhdGEgKGluIG91ciBjYXNlIGludm9pY2VzKSwgaWRlbnRpZnkga2V5IGVsZW1lbnRzIGFuZCBpbmZvcm1hdGlvbiwgc2F2ZSBpdCBpbnRvIG91ciBkYXRhYmFzZSwgYW5kIHRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0byBjcmVhdGUgdGhlIGludm9pY2Ugb24gb3VyIHNlcnZpY2Ugd2l0aCB0aGUgZGF0YS4gTXkgcm9sZSB3YXMgd2FzIHRvIGNyZWF0ZSB1bml0IHRlc3RzIGZvciBuZXcgY29tcG9uZW50cywgbWlncmF0ZSBkYXRhIGFjY2Vzc2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludHMgdG8gc2VwZXJhdGUgQVBJIGNhbGxzIGZvciBzZWN1cml0eS9pbmRlcGVuZGVuY2UsIGFuZCBpbXBsZW1lbnQgbmV3IGVycm9ycyBmb3IgbWlzc2luZyBpbmZvcm1hdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50cy4gVGhpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdCBpcyBvbmUgb2YgdGhlIDFzdCBlbnRlcnByaXNlIHByb2plY3RzIEkndmUgd29ya2VkIG9uIHdpdGggYSB0ZWFtIGFuZCBpdCBoYXMgdGF1Z2h0IG1lIGEgbG90IGFib3V0IHRoZSBpbXBvcnRhbmNlIG9mIGNvbW11bmljYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdGggaW4gY2xhcml0eSBvZiBjb2RlIGFuZCB3b3JraW5nIHdpdGggY29sbGVnZXMuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZyb250IEVuZCBkb25lIGluIDxhIGhyZWY9XCJodHRwczovL2FuZ3VsYXIuaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QW5ndWxhcjUvPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QmFjayBFbmQgZG9uZSBpbiA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2NzaGFycC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5DIyAuTkVUIGZyYW1ld29yazwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkFQSSBob3N0ZWQgd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvaWlzL2V4dGVuc2lvbnMvaW50cm9kdWN0aW9uLXRvLWlpcy1leHByZXNzL2lpcy1leHByZXNzLW92ZXJ2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5JSVMgRXhwcmVzczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzaW5nIDxhIGhyZWY9XCJodHRwczovL3d3dy5vcmFjbGUuY29tL215c3FsL1wiIHRhcmdldD1cIl9ibGFua1wiPk15U1FMIGRhdGFiYXNlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9CYXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=