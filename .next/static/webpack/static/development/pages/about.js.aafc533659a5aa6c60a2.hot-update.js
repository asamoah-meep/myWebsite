webpackHotUpdate("static\\development\\pages\\about.js",{

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
          columnNumber: 52
        }
      }, "LinkedIn"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 145
        }
      })), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
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
          columnNumber: 50
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
      }, "  ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faAddressCard"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 45
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
      }, "  ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCube"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 45
        }
      }), "3D Gallery")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
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
          columnNumber: 52
        }
      }, projects)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
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
          columnNumber: 52
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0aWNreUJhci5qcyJdLCJuYW1lcyI6WyJTdGlja3lCYXIiLCJwcm9wcyIsInRvZ2dsZVRoZW1lIiwiYmluZCIsIm9wZW5Ecm9wZG93biIsInN0YXRlIiwidGhlbWVWYWx1ZXMiLCJDb29raWUiLCJnZXQiLCJldnQiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImhlYWRpbmdzIiwic3ViaGVhZGluZ3MiLCJ0aGVtZSIsInRhcmdldCIsInZhbHVlIiwic2V0Iiwic2V0U3RhdGUiLCJsb2dvTW9kZWwiLCJNb2RlbCIsIm1vdW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJlciIsImRvbUVsZW1lbnQiLCJsb2FkIiwicmVtb3ZlQ2hpbGQiLCJlbGUiLCJteURyb3BzIiwiY2hpbGRyZW4iLCJzbGljZSIsIm1hcCIsInNlbGVjdGVkRHJvcCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWN0IiwiZmFFbnZlbG9wZSIsImZhUGhvbmVTcXVhcmUiLCJmYUxpbmtlZGluIiwiZmFHaXRodWIiLCJwcm9qZWN0cyIsImJhciIsInJlZiIsInBvc2l0aW9uIiwibGVmdCIsImZhSG9tZSIsImZhQWRkcmVzc0NhcmQiLCJmYUN1YmUiLCJmYVRhc2tzIiwiZmFJbmJveCIsInZpc2liaWxpdHkiLCJnbG9iYWxTdHlsZSIsInN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7SUFDTUEsUzs7Ozs7QUFFRixxQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQix5R0FBbkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLHlHQUFwQjtBQUNBLFVBQUtFLEtBQUwsR0FBYUMsaUVBQVcsQ0FBQ0MsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBRCxDQUF4QjtBQUxjO0FBTWpCOzs7O2dDQUVXQyxHLEVBQUk7QUFFWixVQUFJQyxVQUFKLEVBQWdCQyxJQUFoQixFQUFxQkMsUUFBckIsRUFBOEJDLFdBQTlCLEVBQTBDQyxLQUExQzs7QUFFQSxVQUFHTCxHQUFHLENBQUNNLE1BQUosQ0FBV0MsS0FBWCxLQUFtQixPQUF0QixFQUE4QjtBQUFFO0FBQzVCTixrQkFBVSxHQUFHLFNBQWI7QUFDQUMsWUFBSSxHQUFHLFNBQVA7QUFDQUMsZ0JBQVEsR0FBRyxTQUFYO0FBQ0FDLG1CQUFXLEdBQUcsU0FBZDtBQUNBQyxhQUFLLEdBQUcsTUFBUjtBQUNBUCx3REFBTSxDQUFDVSxHQUFQLENBQVcsT0FBWCxFQUFtQixNQUFuQjtBQUNILE9BUEQsTUFPSztBQUFFO0FBQ0hQLGtCQUFVLEdBQUcsdUJBQWI7QUFDQUMsWUFBSSxHQUFHLGlCQUFQO0FBQ0FDLGdCQUFRLEdBQUcsU0FBWDtBQUNBQyxtQkFBVyxHQUFHLFNBQWQ7QUFDQUMsYUFBSyxHQUFHLE9BQVI7QUFDQVAsd0RBQU0sQ0FBQ1UsR0FBUCxDQUFXLE9BQVgsRUFBbUIsT0FBbkI7QUFDSDs7QUFFRCxXQUFLQyxRQUFMLENBQWM7QUFDVlIsa0JBQVUsRUFBVkEsVUFEVTtBQUVWQyxZQUFJLEVBQUpBLElBRlU7QUFHVkMsZ0JBQVEsRUFBUkEsUUFIVTtBQUlWQyxtQkFBVyxFQUFYQSxXQUpVO0FBS1ZDLGFBQUssRUFBTEE7QUFMVSxPQUFkO0FBU0g7Ozt3Q0FFa0I7QUFDZixXQUFLSyxTQUFMLEdBQWlCLElBQUlDLHlEQUFKLENBQVUsS0FBS2YsS0FBTCxDQUFXUyxLQUFyQixFQUEyQixJQUEzQixDQUFqQjtBQUNBLFdBQUtPLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QixLQUFLSCxTQUFMLENBQWVJLFFBQWYsQ0FBd0JDLFVBQS9DO0FBQ0EsV0FBS0wsU0FBTCxDQUFlTSxJQUFmO0FBQ0g7Ozt5Q0FFbUI7QUFDaEIsV0FBS0osS0FBTCxDQUFXSyxXQUFYLENBQXVCLEtBQUtQLFNBQUwsQ0FBZUksUUFBZixDQUF3QkMsVUFBL0M7QUFDQSxXQUFLTCxTQUFMLEdBQWlCLElBQUlDLHlEQUFKLENBQVUsS0FBS2YsS0FBTCxDQUFXUyxLQUFyQixFQUEyQixJQUEzQixDQUFqQjtBQUNBLFdBQUtPLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QixLQUFLSCxTQUFMLENBQWVJLFFBQWYsQ0FBd0JDLFVBQS9DO0FBQ0EsV0FBS0wsU0FBTCxDQUFlTSxJQUFmO0FBQ0g7OztpQ0FFWUUsRyxFQUFJO0FBQ2IsVUFBTUMsT0FBTyxHQUFHLEtBQUszQixLQUFMLENBQVc0QixRQUFYLENBQW9CQyxLQUFwQixDQUEwQixDQUExQixFQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQUosR0FBRztBQUFBLGVBQUVBLEdBQUcsQ0FBQzFCLEtBQUosQ0FBVTRCLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBRjtBQUFBLE9BQXBDLENBQWhCO0FBQ0EsVUFBTUcsWUFBWSxHQUFHSixPQUFPLENBQUMsQ0FBRCxDQUE1QjtBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBWixFQUFvQkksWUFBcEIsRUFIYSxDQUliO0FBQ0g7Ozs2QkFFTztBQUFBOztBQUNKLFVBQU1HLE9BQU8sR0FBRyxtRUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUcsTUFBQywrRUFBRDtBQUFpQixZQUFJLEVBQUVDLDZFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUgsMkJBRFksRUFFWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUcsTUFBQywrRUFBRDtBQUFpQixZQUFJLEVBQUVDLGdGQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUgsNEJBRlksRUFHWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUcsTUFBQywrRUFBRDtBQUFpQixZQUFJLEVBQUVDLDhFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUgsRUFBdUM7QUFBRyxZQUFJLEVBQUMsd0RBQVI7QUFBaUUsY0FBTSxFQUFDLFFBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQXZDLEVBQW9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBcEksQ0FIWSxFQUlaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBRyxNQUFDLCtFQUFEO0FBQWlCLFlBQUksRUFBRUMsNEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBSCxFQUFxQztBQUFHLFlBQUksRUFBQyxpQ0FBUjtBQUEwQyxjQUFNLEVBQUMsUUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBckMsQ0FKWSxDQUFoQjs7QUFPQSxVQUFNQyxRQUFRLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNiLE1BQUMsb0VBQUQ7QUFBZSxlQUFPLEVBQUMsVUFBdkI7QUFBa0MsWUFBSSxFQUFDLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGEsRUFFYixNQUFDLG9FQUFEO0FBQWUsZUFBTyxFQUFDLFFBQXZCO0FBQWdDLFlBQUksRUFBQyxjQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRmEsRUFHYixNQUFDLG9FQUFEO0FBQWUsZUFBTyxFQUFDLFNBQXZCO0FBQWlDLFlBQUksRUFBQyxjQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSGEsRUFJYixNQUFDLG9FQUFEO0FBQWUsZUFBTyxFQUFDLElBQXZCO0FBQTRCLFlBQUksRUFBQyxzQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUphLENBQWpCOztBQU9BLFVBQU1DLEdBQUcsR0FBRztBQUFLLFVBQUUsRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUjtBQUFLLFVBQUUsRUFBQyxXQUFSO0FBQW9CLFdBQUcsRUFBRSxhQUFBQyxJQUFHO0FBQUEsaUJBQUcsTUFBSSxDQUFDckIsS0FBTCxHQUFhcUIsSUFBaEI7QUFBQSxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixDQURRLEVBSVI7QUFBSSxhQUFLLEVBQUU7QUFBQ0Msa0JBQVEsRUFBQyxVQUFWO0FBQXNCQyxjQUFJLEVBQUM7QUFBM0IsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpRLEVBS1I7QUFBSSxhQUFLLEVBQUU7QUFBQ0Qsa0JBQVEsRUFBQyxVQUFWO0FBQXNCQyxjQUFJLEVBQUM7QUFBM0IsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxRLEVBTVIsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTBCLE1BQUMsK0VBQUQ7QUFBaUIsWUFBSSxFQUFFQyx5RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUExQixTQURKLENBTlEsRUFTUixNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNEIsTUFBQywrRUFBRDtBQUFpQixZQUFJLEVBQUVDLGdGQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTVCLFVBREosQ0FUUSxFQVlSLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE0QixNQUFDLCtFQUFEO0FBQWlCLFlBQUksRUFBRUMseUVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBNUIsZUFESixDQVpRLEVBZVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLE1BQUMsK0VBQUQ7QUFBaUIsWUFBSSxFQUFFQywwRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFMLE9BQXVDLE1BQUMsK0RBQUQ7QUFBVSxhQUFLLEVBQUMsVUFBaEI7QUFBMkIsbUJBQVcsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUF3Q1IsUUFBeEMsQ0FBdkMsQ0FmUSxFQWdCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssTUFBQywrRUFBRDtBQUFpQixZQUFJLEVBQUVTLDBFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQUwsT0FBdUMsTUFBQywrREFBRDtBQUFVLGFBQUssRUFBQyxpQkFBaEI7QUFBa0MsbUJBQVcsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQ2QsT0FBL0MsQ0FBdkMsQ0FoQlEsRUFpQlI7QUFBSyxVQUFFLEVBQUMsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxhQUFLLEVBQUU7QUFBQ2Usb0JBQVUsRUFBRSxLQUFLN0MsS0FBTCxDQUFXUyxLQUFYLEtBQW1CLE9BQW5CLEdBQTRCLFNBQTVCLEdBQXVDO0FBQXBELFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVJO0FBQU8saUJBQVMsRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixhQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXUyxLQUF6QztBQUFnRCxnQkFBUSxFQUFFLEtBQUtaLFdBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQU0saUJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FGSixFQU1JO0FBQU0sYUFBSyxFQUFFO0FBQUNnRCxvQkFBVSxFQUFFLEtBQUs3QyxLQUFMLENBQVdTLEtBQVgsS0FBbUIsTUFBbkIsR0FBMkIsU0FBM0IsR0FBc0M7QUFBbkQsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLENBakJRLENBQVo7O0FBMkJBLFVBQU1xQyxXQUFXLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0REFFRixLQUFLOUMsS0FBTCxDQUFXSyxVQUZULDREQU1QLEtBQUtMLEtBQUwsQ0FBV08sUUFOSixxRUFVUCxLQUFLUCxLQUFMLENBQVdRLFdBVkosbUZBY1AsS0FBS1IsS0FBTCxDQUFXTSxJQWRKLGtGQWtCVSxLQUFLTixLQUFMLENBQVdRLFdBbEJyQixrQkFBcEI7O0FBcUJBLFVBQU11QyxLQUFLLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyeEJBOEJHLEtBQUsvQyxLQUFMLENBQVdRLFdBOUJkLDBnQkFnRG1CLEtBQUtSLEtBQUwsQ0FBV1EsV0FoRDlCLHlaQThERyxLQUFLUixLQUFMLENBQVdRLFdBOURkLDZyRUFBZDs7QUFpSkEsYUFBTyxtRUFDRnVDLEtBREUsRUFFRkQsV0FGRSxFQUdGVixHQUhFLEVBSUg7QUFBSyxVQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1CLEtBQUt4QyxLQUFMLENBQVc0QixRQUE5QixDQUpHLENBQVA7QUFNSDs7OztFQW5SbUJ3Qiw0Q0FBSyxDQUFDQyxTOztBQXNSZnRELHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC5qcy5hYWZjNTMzNjU5YTVhYTZjNjBhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICdzdHlsZXMuY3NzJztcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgdGhlbWVWYWx1ZXMgZnJvbSAnLi4vcHVibGljL3RoZW1lLmpzJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge2ZhSG9tZSwgZmFBZGRyZXNzQ2FyZCxmYUVudmVsb3BlLGZhVGFza3MsZmFDdWJlLFxyXG4gICAgICAgIGZhUGhvbmVTcXVhcmUsIGZhSW5ib3h9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtmYUdpdGh1YiwgZmFMaW5rZWRpbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFByb2plY3RIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9wcm9qZWN0SGVhZGVyLmpzJztcclxuaW1wb3J0IE1vZGVsIGZyb20gJy4uL3B1YmxpYy9tb2RlbC5qcyc7XHJcbmNsYXNzIFN0aWNreUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVRoZW1lID0gdGhpcy50b2dnbGVUaGVtZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3BlbkRyb3Bkb3duID0gdGhpcy5vcGVuRHJvcGRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhlbWVWYWx1ZXMoQ29va2llLmdldCgndGhlbWUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGhlbWUoZXZ0KXtcclxuXHJcbiAgICAgICAgbGV0IGJhY2tncm91bmQsIHRleHQsaGVhZGluZ3Msc3ViaGVhZGluZ3MsdGhlbWU7XHJcblxyXG4gICAgICAgIGlmKGV2dC50YXJnZXQudmFsdWU9PT0nbGlnaHQnKXsgLy9jaGFuZ2UgdG8gZGFya1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0gJyMyRjQ0NTQnO1xyXG4gICAgICAgICAgICB0ZXh0ID0gJyNEMUU4RTInO1xyXG4gICAgICAgICAgICBoZWFkaW5ncyA9ICcjRkZDQjlBJztcclxuICAgICAgICAgICAgc3ViaGVhZGluZ3MgPSAnI0Q5QjA4Yyc7XHJcbiAgICAgICAgICAgIHRoZW1lID0gJ2RhcmsnO1xyXG4gICAgICAgICAgICBDb29raWUuc2V0KCd0aGVtZScsJ2RhcmsnKTtcclxuICAgICAgICB9ZWxzZXsgLy9jaGFuZ2UgdG8gbGlnaHRcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9ICdyZ2JhKDIyMywyNDAsMjU1LDAuOSknO1xyXG4gICAgICAgICAgICB0ZXh0ID0gJ3JnYig1OCwxMTgsMTU4KSc7XHJcbiAgICAgICAgICAgIGhlYWRpbmdzID0gJyM1REEyRDUnO1xyXG4gICAgICAgICAgICBzdWJoZWFkaW5ncyA9ICcjQ0I2NjlFJztcclxuICAgICAgICAgICAgdGhlbWUgPSAnbGlnaHQnO1xyXG4gICAgICAgICAgICBDb29raWUuc2V0KCd0aGVtZScsJ2xpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgaGVhZGluZ3MsXHJcbiAgICAgICAgICAgIHN1YmhlYWRpbmdzLFxyXG4gICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5sb2dvTW9kZWwgPSBuZXcgTW9kZWwodGhpcy5zdGF0ZS50aGVtZSx0cnVlKTtcclxuICAgICAgICB0aGlzLm1vdW50LmFwcGVuZENoaWxkKHRoaXMubG9nb01vZGVsLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubG9nb01vZGVsLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB0aGlzLm1vdW50LnJlbW92ZUNoaWxkKHRoaXMubG9nb01vZGVsLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubG9nb01vZGVsID0gbmV3IE1vZGVsKHRoaXMuc3RhdGUudGhlbWUsdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tb3VudC5hcHBlbmRDaGlsZCh0aGlzLmxvZ29Nb2RlbC5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbC5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRyb3Bkb3duKGVsZSl7XHJcbiAgICAgICAgY29uc3QgbXlEcm9wcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4uc2xpY2UoMSkubWFwKGVsZT0+ZWxlLnByb3BzLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZERyb3AgPSBteURyb3BzWzBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG15RHJvcHMsc2VsZWN0ZWREcm9wKTtcclxuICAgICAgICAvL3NlbGVjdGVkRHJvcC5leHBhbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBjb250YWN0ID0gPD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVudmVsb3BlfS8+RS1tYWlsOiBqYTMxODBAbnl1LmVkdTwvcD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBob25lU3F1YXJlfSAvPlRlbGVwaG9uZTogOTE0LTIyNC02MjQxPC9wPlxyXG4gICAgICAgICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59Lz48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2plZmZyZXktYXNhbW9haC0wNzk5MWExMjUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGlua2VkSW48L2E+PGJyLz48L3A+XHJcbiAgICAgICAgICAgIDxwPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9Lz48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FzYW1vYWgtbWVlcFwiIHRhcmdldD1cIl9ibGFua1wiPkdpdGh1YjwvYT48L3A+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gPHVsPlxyXG4gICAgICAgICAgICA8UHJvamVjdEhlYWRlciBzdWJqZWN0PSdUaW1lbGluZScgbmFtZT0nVHV0b3IgVGltZWxpbmUnLz5cclxuICAgICAgICAgICAgPFByb2plY3RIZWFkZXIgc3ViamVjdD0nS01lYW5zJyBuYW1lPSdLLU1lYW5zIERlbW8nLz5cclxuICAgICAgICAgICAgPFByb2plY3RIZWFkZXIgc3ViamVjdD0nV2Vic2l0ZScgbmFtZT0nVGhpcyBXZWJzaXRlJy8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHN1YmplY3Q9J1FSJyBuYW1lPSdRUiBNYXJrZXRpbmcgUHJvamVjdCcvPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIGNvbnN0IGJhciA9IDxkaXYgaWQ9J3N0aWNreUJhcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvTW91bnRcIiByZWY9e3JlZj0+KHRoaXMubW91bnQgPSByZWYpfT5cclxuICAgICAgICAgICAgICAgIDxwPlJvdGF0ZSBtZSE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3twb3NpdGlvbjpcInJlbGF0aXZlXCIsIGxlZnQ6XCIxMnB4XCJ9fT5KZWZmcmV5PC9oMT5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCBsZWZ0OlwiMjVweFwifX0+QXNhbW9haDwvaDE+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzdWJIZWFkaW5nJz48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSG9tZX0vPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzdWJIZWFkaW5nJz4gIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFBZGRyZXNzQ2FyZH0vPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9nYWxsZXJ5Jz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+ICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ3ViZX0vPjNEIEdhbGxlcnk8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGFza3N9Lz4gPERyb3Bkb3duIHRpdGxlPVwiUHJvamVjdHNcIiBiYXJEcm9wZG93bj57cHJvamVjdHN9PC9Ecm9wZG93bj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5ib3h9Lz4gPERyb3Bkb3duIHRpdGxlPSdDb250YWN0IC8gTWVkaWEnIGJhckRyb3Bkb3duPntjb250YWN0fTwvRHJvcGRvd24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J3RvZ2dsZVRoZW1lJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dmlzaWJpbGl0eTogdGhpcy5zdGF0ZS50aGVtZT09PSdsaWdodCc/ICd2aXNpYmxlJzogJ2hpZGRlbid9fT5MaWdodDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e3RoaXMuc3RhdGUudGhlbWV9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRoZW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dmlzaWJpbGl0eTogdGhpcy5zdGF0ZS50aGVtZT09PSdkYXJrJz8gJ3Zpc2libGUnOiAnaGlkZGVuJ319PkRhcms8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgY29uc3QgZ2xvYmFsU3R5bGU9ICA8c3R5bGU+e2BcclxuICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMuc3RhdGUuYmFja2dyb3VuZH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLmhlYWRpbmdzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMsIGRpdiBzdmd7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLGEsc3BhbixsaSxkaXYsZm9ybSx0ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnRleHR9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWN0aW9ue1xyXG4gICAgICAgICAgICBib2Rlci1ib3R0b206IHNvbGlkIDJweCAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9O1xyXG4gICAgICAgIH1gfTwvc3R5bGU+O1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsZSA9IDxzdHlsZT57YFxyXG5cclxuICAgICAgICAgICAgI2xvZ29Nb3VudHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo3NXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNsb2dvTW91bnQgcHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6LTMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xyXG4gICAgICAgICAgICAgICAgZnJvbSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XHJcbiAgICAgICAgICAgICAgICB0byB7dmlzaWJpbGl0eTogaGlkZGVuO31cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2xvZ29Nb3VudDpob3ZlciBwe1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJhckljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICByaWdodDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYXJEcm9wZG93bntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjY29udGVudHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo3MzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI3N0aWNreUJhcntcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJIZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE51bml0b0l0YWxpYztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjdG9nZ2xlVGhlbWV7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAjdG9nZ2xlVGhlbWUgc3BhbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN3aXRjaCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN3aXRjaCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J106bm90KDpjaGVja2VkKSArIC5zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjU1LDAuOSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJGNDQ1NDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzE1REI5NTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+ICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICB7c3R5bGV9XHJcbiAgICAgICAgICAgIHtnbG9iYWxTdHlsZX1cclxuICAgICAgICAgICAge2Jhcn1cclxuICAgICAgICAgICAgPGRpdiBpZD0nY29udGVudCc+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==