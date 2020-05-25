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
      }, " \\t ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faAddressCard"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 47
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0aWNreUJhci5qcyJdLCJuYW1lcyI6WyJTdGlja3lCYXIiLCJwcm9wcyIsInRvZ2dsZVRoZW1lIiwiYmluZCIsIm9wZW5Ecm9wZG93biIsInN0YXRlIiwidGhlbWVWYWx1ZXMiLCJDb29raWUiLCJnZXQiLCJldnQiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImhlYWRpbmdzIiwic3ViaGVhZGluZ3MiLCJ0aGVtZSIsInRhcmdldCIsInZhbHVlIiwic2V0Iiwic2V0U3RhdGUiLCJsb2dvTW9kZWwiLCJNb2RlbCIsIm1vdW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJlciIsImRvbUVsZW1lbnQiLCJsb2FkIiwicmVtb3ZlQ2hpbGQiLCJlbGUiLCJteURyb3BzIiwiY2hpbGRyZW4iLCJzbGljZSIsIm1hcCIsInNlbGVjdGVkRHJvcCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWN0IiwiZmFFbnZlbG9wZSIsImZhUGhvbmVTcXVhcmUiLCJmYUxpbmtlZGluIiwiZmFHaXRodWIiLCJwcm9qZWN0cyIsImJhciIsInJlZiIsInBvc2l0aW9uIiwibGVmdCIsImZhSG9tZSIsImZhQWRkcmVzc0NhcmQiLCJmYUN1YmUiLCJmYVRhc2tzIiwiZmFJbmJveCIsInZpc2liaWxpdHkiLCJnbG9iYWxTdHlsZSIsInN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7SUFDTUEsUzs7Ozs7QUFFRixxQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQix5R0FBbkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQixLQUFLeEMsS0FBTCxDQUFXNEIsUUFBOUIsQ0FKRyxDQUFQO0FBTUg7Ozs7RUFuUm1Cd0IsNENBQUssQ0FBQ0MsUzs7QUFzUmZ0RCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQuanMuZGJhYjUwZjNiYTQxNjU1OWVjNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAnc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHRoZW1lVmFsdWVzIGZyb20gJy4uL3B1YmxpYy90aGVtZS5qcyc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdjb21wb25lbnRzL2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtmYUhvbWUsIGZhQWRkcmVzc0NhcmQsZmFFbnZlbG9wZSxmYVRhc2tzLGZhQ3ViZSxcclxuICAgICAgICBmYVBob25lU3F1YXJlLCBmYUluYm94fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7ZmFHaXRodWIsIGZhTGlua2VkaW59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBQcm9qZWN0SGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvcHJvamVjdEhlYWRlci5qcyc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9wdWJsaWMvbW9kZWwuanMnO1xyXG5jbGFzcyBTdGlja3lCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy50b2dnbGVUaGVtZSA9IHRoaXMudG9nZ2xlVGhlbWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5Ecm9wZG93biA9IHRoaXMub3BlbkRyb3Bkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoZW1lVmFsdWVzKENvb2tpZS5nZXQoJ3RoZW1lJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRoZW1lKGV2dCl7XHJcblxyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kLCB0ZXh0LGhlYWRpbmdzLHN1YmhlYWRpbmdzLHRoZW1lO1xyXG5cclxuICAgICAgICBpZihldnQudGFyZ2V0LnZhbHVlPT09J2xpZ2h0Jyl7IC8vY2hhbmdlIHRvIGRhcmtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9ICcjMkY0NDU0JztcclxuICAgICAgICAgICAgdGV4dCA9ICcjRDFFOEUyJztcclxuICAgICAgICAgICAgaGVhZGluZ3MgPSAnI0ZGQ0I5QSc7XHJcbiAgICAgICAgICAgIHN1YmhlYWRpbmdzID0gJyNEOUIwOGMnO1xyXG4gICAgICAgICAgICB0aGVtZSA9ICdkYXJrJztcclxuICAgICAgICAgICAgQ29va2llLnNldCgndGhlbWUnLCdkYXJrJyk7XHJcbiAgICAgICAgfWVsc2V7IC8vY2hhbmdlIHRvIGxpZ2h0XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSAncmdiYSgyMjMsMjQwLDI1NSwwLjkpJztcclxuICAgICAgICAgICAgdGV4dCA9ICdyZ2IoNTgsMTE4LDE1OCknO1xyXG4gICAgICAgICAgICBoZWFkaW5ncyA9ICcjNURBMkQ1JztcclxuICAgICAgICAgICAgc3ViaGVhZGluZ3MgPSAnI0NCNjY5RSc7XHJcbiAgICAgICAgICAgIHRoZW1lID0gJ2xpZ2h0JztcclxuICAgICAgICAgICAgQ29va2llLnNldCgndGhlbWUnLCdsaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIGhlYWRpbmdzLFxyXG4gICAgICAgICAgICBzdWJoZWFkaW5ncyxcclxuICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMubG9nb01vZGVsID0gbmV3IE1vZGVsKHRoaXMuc3RhdGUudGhlbWUsdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tb3VudC5hcHBlbmRDaGlsZCh0aGlzLmxvZ29Nb2RlbC5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbC5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5tb3VudC5yZW1vdmVDaGlsZCh0aGlzLmxvZ29Nb2RlbC5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbCA9IG5ldyBNb2RlbCh0aGlzLnN0YXRlLnRoZW1lLHRydWUpO1xyXG4gICAgICAgIHRoaXMubW91bnQuYXBwZW5kQ2hpbGQodGhpcy5sb2dvTW9kZWwucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5sb2dvTW9kZWwubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Ecm9wZG93bihlbGUpe1xyXG4gICAgICAgIGNvbnN0IG15RHJvcHMgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnNsaWNlKDEpLm1hcChlbGU9PmVsZS5wcm9wcy5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREcm9wID0gbXlEcm9wc1swXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhteURyb3BzLHNlbGVjdGVkRHJvcCk7XHJcbiAgICAgICAgLy9zZWxlY3RlZERyb3AuZXhwYW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IDw+XHJcbiAgICAgICAgICAgIDxwPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFFbnZlbG9wZX0vPkUtbWFpbDogamEzMTgwQG55dS5lZHU8L3A+XHJcbiAgICAgICAgICAgIDxwPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFQaG9uZVNxdWFyZX0gLz5UZWxlcGhvbmU6IDkxNC0yMjQtNjI0MTwvcD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmtlZGlufS8+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qZWZmcmV5LWFzYW1vYWgtMDc5OTFhMTI1L1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbmtlZEluPC9hPjxici8+PC9wPlxyXG4gICAgICAgICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifS8+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hc2Ftb2FoLW1lZXBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRodWI8L2E+PC9wPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IDx1bD5cclxuICAgICAgICAgICAgPFByb2plY3RIZWFkZXIgc3ViamVjdD0nVGltZWxpbmUnIG5hbWU9J1R1dG9yIFRpbWVsaW5lJy8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHN1YmplY3Q9J0tNZWFucycgbmFtZT0nSy1NZWFucyBEZW1vJy8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHN1YmplY3Q9J1dlYnNpdGUnIG5hbWU9J1RoaXMgV2Vic2l0ZScvPlxyXG4gICAgICAgICAgICA8UHJvamVjdEhlYWRlciBzdWJqZWN0PSdRUicgbmFtZT0nUVIgTWFya2V0aW5nIFByb2plY3QnLz5cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICBjb25zdCBiYXIgPSA8ZGl2IGlkPSdzdGlja3lCYXInPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nb01vdW50XCIgcmVmPXtyZWY9Pih0aGlzLm1vdW50ID0gcmVmKX0+XHJcbiAgICAgICAgICAgICAgICA8cD5Sb3RhdGUgbWUhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCBsZWZ0OlwiMTJweFwifX0+SmVmZnJleTwvaDE+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgbGVmdDpcIjI1cHhcIn19PkFzYW1vYWg8L2gxPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvbWV9Lz5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+IFxcdCA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQWRkcmVzc0NhcmR9Lz5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvZ2FsbGVyeSc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3N1YkhlYWRpbmcnPiAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUN1YmV9Lz4zRCBHYWxsZXJ5PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXY+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRhc2tzfS8+IDxEcm9wZG93biB0aXRsZT1cIlByb2plY3RzXCIgYmFyRHJvcGRvd24+e3Byb2plY3RzfTwvRHJvcGRvd24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluYm94fS8+IDxEcm9wZG93biB0aXRsZT0nQ29udGFjdCAvIE1lZGlhJyBiYXJEcm9wZG93bj57Y29udGFjdH08L0Ryb3Bkb3duPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSd0b2dnbGVUaGVtZSc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3Zpc2liaWxpdHk6IHRoaXMuc3RhdGUudGhlbWU9PT0nbGlnaHQnPyAndmlzaWJsZSc6ICdoaWRkZW4nfX0+TGlnaHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRoZW1lfSBvbkNoYW5nZT17dGhpcy50b2dnbGVUaGVtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3Zpc2liaWxpdHk6IHRoaXMuc3RhdGUudGhlbWU9PT0nZGFyayc/ICd2aXNpYmxlJzogJ2hpZGRlbid9fT5EYXJrPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcblxyXG4gICAgICAgIGNvbnN0IGdsb2JhbFN0eWxlPSAgPHN0eWxlPntgXHJcbiAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLnN0YXRlLmJhY2tncm91bmR9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5zdGF0ZS5oZWFkaW5nc31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzLCBkaXYgc3Zne1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCxhLHNwYW4sbGksZGl2LGZvcm0sdGV4dHtcclxuICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5zdGF0ZS50ZXh0fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VjdGlvbntcclxuICAgICAgICAgICAgYm9kZXItYm90dG9tOiBzb2xpZCAycHggJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfTtcclxuICAgICAgICB9YH08L3N0eWxlPjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSA8c3R5bGU+e2BcclxuXHJcbiAgICAgICAgICAgICNsb2dvTW91bnR7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NzVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbG9nb01vdW50IHB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMjBweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC40O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOi0zMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbntcclxuICAgICAgICAgICAgICAgIGZyb20ge3Zpc2liaWxpdHk6IHZpc2libGU7fVxyXG4gICAgICAgICAgICAgICAgdG8ge3Zpc2liaWxpdHk6IGhpZGRlbjt9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNsb2dvTW91bnQ6aG92ZXIgcHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYXJJY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc307XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6NXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFyRHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2NvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NzMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNzdGlja3lCYXJ7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjBweDtcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3ViSGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9JdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI3RvZ2dsZVRoZW1le1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgI3RvZ2dsZVRoZW1lIHNwYW57XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zd2l0Y2gge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zd2l0Y2ggaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOm5vdCg6Y2hlY2tlZCkgKyAuc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDI1NSwwLjkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjQ0NTQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMxNURCOTU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXIucm91bmQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPiAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAge3N0eWxlfVxyXG4gICAgICAgICAgICB7Z2xvYmFsU3R5bGV9XHJcbiAgICAgICAgICAgIHtiYXJ9XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J2NvbnRlbnQnPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=