webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./src/components/stickyBar.js":
/*!*************************************!*\
  !*** ./src/components/stickyBar.js ***!
  \*************************************/
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
/* harmony import */ var src_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/styles.css */ "./src/styles.css");
/* harmony import */ var src_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(src_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_theme_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/theme.js */ "./src/theme.js");
/* harmony import */ var src_components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/dropdown.js */ "./src/components/dropdown.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var src_components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/projectHeader.js */ "./src/components/projectHeader.js");
/* harmony import */ var src_model_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/model.js */ "./src/model.js");






var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\src\\components\\stickyBar.js";

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
    _this.state = Object(src_theme_js__WEBPACK_IMPORTED_MODULE_10__["default"])(js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get('theme'));
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
      this.logoModel = new src_model_js__WEBPACK_IMPORTED_MODULE_16__["default"]("Logo_".concat(this.state.theme));
      this.mount.appendChild(this.logoModel.renderer.domElement);
      this.logoModel.load();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.mount.removeChild(this.logoModel.renderer.domElement);
      this.logoModel = new src_model_js__WEBPACK_IMPORTED_MODULE_16__["default"]("Logo_".concat($this.state.theme));
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var contact = __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faEnvelope"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 16
        }
      }), "E-mail: ja3180@nyu.edu"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faPhoneSquare"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 16
        }
      }), "Telephone: 914-224-6241"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faLinkedin"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 16
        }
      }), __jsx("a", {
        href: "https://www.linkedin.com/in/jeffrey-asamoah-07991a125/",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 72
        }
      }, "LinkedIn"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 165
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faGithub"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 16
        }
      }), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 70
        }
      }, "Github")));

      var projects = __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 26
        }
      }, __jsx(src_components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "Timeline",
        name: "Tutor Timeline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }), __jsx(src_components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "KMeans",
        name: "K-Means Demo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }), __jsx(src_components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "Website",
        name: "This Website",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }), __jsx(src_components_projectHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        subject: "QR",
        name: "QR Marketing Project",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }));

      var bar = __jsx("div", {
        id: "stickyBar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
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
          lineNumber: 87,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
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
          lineNumber: 90,
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
          lineNumber: 91,
          columnNumber: 13
        }
      }, "Asamoah"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "subHeading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faHome"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 43
        }
      }), "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "subHeading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faAddressCard"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 43
        }
      }), "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "subHeading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCube"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 43
        }
      }), "3D Gallery")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon expandableIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faTasks"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 18
        }
      }), " ", __jsx(src_components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Projects",
        barDropdown: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 34
        }
      }, projects)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon expandableIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faInbox"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 18
        }
      }), " ", __jsx(src_components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Contact / Media",
        barDropdown: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 34
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
      }, "\n\n            #logoMount{\n                height:75px;\n                position:relative;\n            }\n\n            #logoMount p{\n                visibility: hidden;\n                width:120px;\n                opacity: .4;\n                text-align:center;\n                animation-name: fadeIn;\n                animation-duration: 5s;\n                padding: 5px 0;\n                border-radius: 6px;\n                position: absolute;\n                top:-30px;\n            }\n\n            @keyframes fadeIn{\n                from {visibility: visible;}\n                to {visibility: hidden;}\n            }\n\n            #logoMount:hover p{\n                visibility: visible;\n            }\n\n            .barIcon{\n                color: ".concat(this.state.subheadings, ";\n                display:inline-block;\n                position:relative;\n                right:5px;\n            }\n\n            .expandableIcon{\n                vertical-align:top;\n                top:30px;\n            }\n\n            .barDropdown{\n                display:inline-block;\n            }\n\n            #content{\n                display:inline-block;\n                margin-top:5px;\n                position:relative;\n                left: 30px;\n                width:730px;\n                padding-left: 15px;\n                vertical-align:top;\n                border-left: solid 2px ").concat(this.state.subheadings, ";\n            }\n\n            #stickyBar{\n                vertical-align:top;\n                position: relative;\n                display:inline-block;\n                left:20px;\n                // width:200px;\n                margin-right: 5px;\n                margin-top:5px;\n            }\n            .subHeading{\n                font-family: NunitoItalic;\n                color: ").concat(this.state.subheadings, ";\n                display: block;\n                font-size: 1.5rem;\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n                margin-inline-start: 0px;\n                margin-inline-end: 0px;\n                font-weight: bold;\n            }\n\n            #toggleTheme{\n                position:relative;\n                left:10%;\n            }\n            \n            #toggleTheme span{\n                padding:10px;\n            }\n\n            .switch {\n                position: relative;\n                display: inline-block;\n                width: 60px;\n                height: 34px;\n            }\n\n            .switch input {\n                opacity: 0;\n                width: 0;\n                height: 0;\n            }\n\n            .slider {\n                position: absolute;\n                cursor: pointer;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: #ccc;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            .slider:before {\n                position: absolute;\n                content: \"\";\n                height: 26px;\n                width: 26px;\n                left: 4px;\n                bottom: 4px;\n                background-color: white;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            input[type='checkbox']:not(:checked) + .slider{\n                background-color: rgba(223,240,255,0.9);\n            }\n\n            input[type='checkbox']:checked + .slider {\n                background-color: #2F4454;\n            }\n\n            input:focus + .slider {\n                box-shadow: 0 0 1px #15DB95;\n            }\n\n            input:checked + .slider:before {\n                -webkit-transform: translateX(26px);\n                -ms-transform: translateX(26px);\n                transform: translateX(26px);\n            }\n\n            .slider.round {\n                border-radius: 34px;\n            }\n\n            .slider.round:before {\n                border-radius: 50%;\n            }\n        "));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, style, globalStyle, bar, __jsx("div", {
        id: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGlja3lCYXIuanMiXSwibmFtZXMiOlsiU3RpY2t5QmFyIiwicHJvcHMiLCJ0b2dnbGVUaGVtZSIsImJpbmQiLCJvcGVuRHJvcGRvd24iLCJzdGF0ZSIsInRoZW1lVmFsdWVzIiwiQ29va2llIiwiZ2V0IiwiZXZ0IiwiYmFja2dyb3VuZCIsInRleHQiLCJoZWFkaW5ncyIsInN1YmhlYWRpbmdzIiwidGhlbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldCIsInNldFN0YXRlIiwibG9nb01vZGVsIiwiTW9kZWwiLCJtb3VudCIsImFwcGVuZENoaWxkIiwicmVuZGVyZXIiLCJkb21FbGVtZW50IiwibG9hZCIsInJlbW92ZUNoaWxkIiwiJHRoaXMiLCJlbGUiLCJteURyb3BzIiwiY2hpbGRyZW4iLCJzbGljZSIsIm1hcCIsInNlbGVjdGVkRHJvcCIsImNvbnRhY3QiLCJmYUVudmVsb3BlIiwiZmFQaG9uZVNxdWFyZSIsImZhTGlua2VkaW4iLCJmYUdpdGh1YiIsInByb2plY3RzIiwiYmFyIiwicmVmIiwicG9zaXRpb24iLCJsZWZ0IiwiZmFIb21lIiwiZmFBZGRyZXNzQ2FyZCIsImZhQ3ViZSIsImZhVGFza3MiLCJmYUluYm94IiwidmlzaWJpbGl0eSIsImdsb2JhbFN0eWxlIiwic3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztJQUNNQSxTOzs7OztBQUVGLHFCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLHlHQUFuQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIs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LEtBQUwsQ0FBV1EsV0FyRDlCLHlaQW1FRyxLQUFLUixLQUFMLENBQVdRLFdBbkVkLDZyRUFBZDs7QUFzSkEsYUFBTyxtRUFDRnNDLEtBREUsRUFFRkQsV0FGRSxFQUdGVixHQUhFLEVBSUg7QUFBSyxVQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1CLEtBQUt2QyxLQUFMLENBQVc2QixRQUE5QixDQUpHLENBQVA7QUFNSDs7OztFQXhSbUJzQiw0Q0FBSyxDQUFDQyxTOztBQTJSZnJELHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYWxsZXJ5LmpzLjlhMGJiMzlhODFjN2E1ZjhlNTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJ3NyYy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgdGhlbWVWYWx1ZXMgZnJvbSAnc3JjL3RoZW1lLmpzJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtmYUhvbWUsIGZhQWRkcmVzc0NhcmQsZmFFbnZlbG9wZSxmYVRhc2tzLGZhQ3ViZSxcclxuICAgICAgICBmYVBob25lU3F1YXJlLCBmYUluYm94fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7ZmFHaXRodWIsIGZhTGlua2VkaW59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBQcm9qZWN0SGVhZGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL3Byb2plY3RIZWFkZXIuanMnO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnc3JjL21vZGVsLmpzJztcclxuY2xhc3MgU3RpY2t5QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlVGhlbWUgPSB0aGlzLnRvZ2dsZVRoZW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRHJvcGRvd24gPSB0aGlzLm9wZW5Ecm9wZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGVtZVZhbHVlcyhDb29raWUuZ2V0KCd0aGVtZScpKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaGVtZShldnQpe1xyXG5cclxuICAgICAgICBsZXQgYmFja2dyb3VuZCwgdGV4dCxoZWFkaW5ncyxzdWJoZWFkaW5ncyx0aGVtZTtcclxuXHJcbiAgICAgICAgaWYoZXZ0LnRhcmdldC52YWx1ZT09PSdsaWdodCcpeyAvL2NoYW5nZSB0byBkYXJrXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSAnIzJGNDQ1NCc7XHJcbiAgICAgICAgICAgIHRleHQgPSAnI0QxRThFMic7XHJcbiAgICAgICAgICAgIGhlYWRpbmdzID0gJyNGRkNCOUEnO1xyXG4gICAgICAgICAgICBzdWJoZWFkaW5ncyA9ICcjRDlCMDhjJztcclxuICAgICAgICAgICAgdGhlbWUgPSAnZGFyayc7XHJcbiAgICAgICAgICAgIENvb2tpZS5zZXQoJ3RoZW1lJywnZGFyaycpO1xyXG4gICAgICAgIH1lbHNleyAvL2NoYW5nZSB0byBsaWdodFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0gJ3JnYmEoMjIzLDI0MCwyNTUsMC45KSc7XHJcbiAgICAgICAgICAgIHRleHQgPSAncmdiKDU4LDExOCwxNTgpJztcclxuICAgICAgICAgICAgaGVhZGluZ3MgPSAnIzVEQTJENSc7XHJcbiAgICAgICAgICAgIHN1YmhlYWRpbmdzID0gJyNDQjY2OUUnO1xyXG4gICAgICAgICAgICB0aGVtZSA9ICdsaWdodCc7XHJcbiAgICAgICAgICAgIENvb2tpZS5zZXQoJ3RoZW1lJywnbGlnaHQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBoZWFkaW5ncyxcclxuICAgICAgICAgICAgc3ViaGVhZGluZ3MsXHJcbiAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbCA9IG5ldyBNb2RlbChgTG9nb18ke3RoaXMuc3RhdGUudGhlbWV9YCk7XHJcbiAgICAgICAgdGhpcy5tb3VudC5hcHBlbmRDaGlsZCh0aGlzLmxvZ29Nb2RlbC5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbC5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5tb3VudC5yZW1vdmVDaGlsZCh0aGlzLmxvZ29Nb2RlbC5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbCA9IG5ldyBNb2RlbChgTG9nb18keyR0aGlzLnN0YXRlLnRoZW1lfWApO1xyXG4gICAgICAgIHRoaXMubW91bnQuYXBwZW5kQ2hpbGQodGhpcy5sb2dvTW9kZWwucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5sb2dvTW9kZWwubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Ecm9wZG93bihlbGUpe1xyXG4gICAgICAgIGNvbnN0IG15RHJvcHMgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnNsaWNlKDEpLm1hcChlbGU9PmVsZS5wcm9wcy5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREcm9wID0gbXlEcm9wc1swXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBjb250YWN0ID0gPD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhRW52ZWxvcGV9Lz5FLW1haWw6IGphMzE4MEBueXUuZWR1PC9wPlxyXG4gICAgICAgICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFQaG9uZVNxdWFyZX0gLz5UZWxlcGhvbmU6IDkxNC0yMjQtNjI0MTwvcD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhTGlua2VkaW59Lz48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2plZmZyZXktYXNhbW9haC0wNzk5MWExMjUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGlua2VkSW48L2E+PGJyLz48L3A+XHJcbiAgICAgICAgICAgIDxwPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUdpdGh1Yn0vPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXNhbW9haC1tZWVwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0aHViPC9hPjwvcD5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSA8dWw+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHN1YmplY3Q9J1RpbWVsaW5lJyBuYW1lPSdUdXRvciBUaW1lbGluZScvPlxyXG4gICAgICAgICAgICA8UHJvamVjdEhlYWRlciBzdWJqZWN0PSdLTWVhbnMnIG5hbWU9J0stTWVhbnMgRGVtbycvPlxyXG4gICAgICAgICAgICA8UHJvamVjdEhlYWRlciBzdWJqZWN0PSdXZWJzaXRlJyBuYW1lPSdUaGlzIFdlYnNpdGUnLz5cclxuICAgICAgICAgICAgPFByb2plY3RIZWFkZXIgc3ViamVjdD0nUVInIG5hbWU9J1FSIE1hcmtldGluZyBQcm9qZWN0Jy8+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgY29uc3QgYmFyID0gPGRpdiBpZD0nc3RpY2t5QmFyJz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29Nb3VudFwiIHJlZj17cmVmPT4odGhpcy5tb3VudCA9IHJlZil9PlxyXG4gICAgICAgICAgICAgICAgPHA+Um90YXRlIG1lITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgbGVmdDpcIjEycHhcIn19PkplZmZyZXk8L2gxPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3twb3NpdGlvbjpcInJlbGF0aXZlXCIsIGxlZnQ6XCIyNXB4XCJ9fT5Bc2Ftb2FoPC9oMT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3N1YkhlYWRpbmcnPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUhvbWV9Lz5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhQWRkcmVzc0NhcmR9Lz5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvZ2FsbGVyeSc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3N1YkhlYWRpbmcnPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUN1YmV9Lz4zRCBHYWxsZXJ5PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXY+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24gZXhwYW5kYWJsZUljb24nIFxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFUYXNrc30vPiA8RHJvcGRvd24gdGl0bGU9XCJQcm9qZWN0c1wiIGJhckRyb3Bkb3duPntwcm9qZWN0c308L0Ryb3Bkb3duPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uIGV4cGFuZGFibGVJY29uJyBcclxuICAgICAgICAgICAgICAgIGljb249e2ZhSW5ib3h9Lz4gPERyb3Bkb3duIHRpdGxlPSdDb250YWN0IC8gTWVkaWEnIGJhckRyb3Bkb3duPntjb250YWN0fTwvRHJvcGRvd24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J3RvZ2dsZVRoZW1lJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dmlzaWJpbGl0eTogdGhpcy5zdGF0ZS50aGVtZT09PSdsaWdodCc/ICd2aXNpYmxlJzogJ2hpZGRlbid9fT5MaWdodDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e3RoaXMuc3RhdGUudGhlbWV9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRoZW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dmlzaWJpbGl0eTogdGhpcy5zdGF0ZS50aGVtZT09PSdkYXJrJz8gJ3Zpc2libGUnOiAnaGlkZGVuJ319PkRhcms8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgY29uc3QgZ2xvYmFsU3R5bGU9ICA8c3R5bGU+e2BcclxuICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMuc3RhdGUuYmFja2dyb3VuZH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLmhlYWRpbmdzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMsIGRpdiBzdmd7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLGEsc3BhbixsaSxkaXYsZm9ybSx0ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnRleHR9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWN0aW9ue1xyXG4gICAgICAgICAgICBib2Rlci1ib3R0b206IHNvbGlkIDJweCAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9O1xyXG4gICAgICAgIH1gfTwvc3R5bGU+O1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsZSA9IDxzdHlsZT57YFxyXG5cclxuICAgICAgICAgICAgI2xvZ29Nb3VudHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo3NXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNsb2dvTW91bnQgcHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6LTMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xyXG4gICAgICAgICAgICAgICAgZnJvbSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XHJcbiAgICAgICAgICAgICAgICB0byB7dmlzaWJpbGl0eTogaGlkZGVuO31cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2xvZ29Nb3VudDpob3ZlciBwe1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJhckljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICByaWdodDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leHBhbmRhYmxlSWNvbntcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgICAgIHRvcDozMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFyRHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2NvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NzMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNzdGlja3lCYXJ7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjBweDtcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3ViSGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9JdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI3RvZ2dsZVRoZW1le1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgI3RvZ2dsZVRoZW1lIHNwYW57XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zd2l0Y2gge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zd2l0Y2ggaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOm5vdCg6Y2hlY2tlZCkgKyAuc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDI1NSwwLjkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjQ0NTQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMxNURCOTU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXIucm91bmQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPiAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAge3N0eWxlfVxyXG4gICAgICAgICAgICB7Z2xvYmFsU3R5bGV9XHJcbiAgICAgICAgICAgIHtiYXJ9XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J2NvbnRlbnQnPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=