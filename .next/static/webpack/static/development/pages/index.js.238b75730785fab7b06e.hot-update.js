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
      }, " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Projects",
        barDropdown: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 19
        }
      }, [projects, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faTasks"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 70
        }
      })])), __jsx("div", {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0aWNreUJhci5qcyJdLCJuYW1lcyI6WyJTdGlja3lCYXIiLCJwcm9wcyIsInRvZ2dsZVRoZW1lIiwiYmluZCIsIm9wZW5Ecm9wZG93biIsInN0YXRlIiwidGhlbWVWYWx1ZXMiLCJDb29raWUiLCJnZXQiLCJldnQiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImhlYWRpbmdzIiwic3ViaGVhZGluZ3MiLCJ0aGVtZSIsInRhcmdldCIsInZhbHVlIiwic2V0Iiwic2V0U3RhdGUiLCJsb2dvTW9kZWwiLCJNb2RlbCIsIm1vdW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJlciIsImRvbUVsZW1lbnQiLCJsb2FkIiwicmVtb3ZlQ2hpbGQiLCJlbGUiLCJteURyb3BzIiwiY2hpbGRyZW4iLCJzbGljZSIsIm1hcCIsInNlbGVjdGVkRHJvcCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWN0IiwiZmFFbnZlbG9wZSIsImZhUGhvbmVTcXVhcmUiLCJmYUxpbmtlZGluIiwiZmFHaXRodWIiLCJwcm9qZWN0cyIsImJhciIsInJlZiIsInBvc2l0aW9uIiwibGVmdCIsImZhSG9tZSIsImZhQWRkcmVzc0NhcmQiLCJmYUN1YmUiLCJmYVRhc2tzIiwiZmFJbmJveCIsInZpc2liaWxpdHkiLCJnbG9iYWxTdHlsZSIsInN0eWxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7SUFDTUEsUzs7Ozs7QUFFRixxQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQix5R0FBbkI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElB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RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJ4QkE4QkcsS0FBSy9DLEtBQUwsQ0FBV1EsV0E5QmQsMGdCQWdEbUIsS0FBS1IsS0FBTCxDQUFXUSxXQWhEOUIseVpBOERHLEtBQUtSLEtBQUwsQ0FBV1EsV0E5RGQsNnJFQUFkOztBQWlKQSxhQUFPLG1FQUNGdUMsS0FERSxFQUVGRCxXQUZFLEVBR0ZWLEdBSEUsRUFJSDtBQUFLLFVBQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUIsS0FBS3hDLEtBQUwsQ0FBVzRCLFFBQTlCLENBSkcsQ0FBUDtBQU1IOzs7O0VBblJtQndCLDRDQUFLLENBQUNDLFM7O0FBc1JmdEQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjIzOGI3NTczMDc4NWZhYjdiMDZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJ3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCB0aGVtZVZhbHVlcyBmcm9tICcuLi9wdWJsaWMvdGhlbWUuanMnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9kcm9wZG93bi5qcyc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7ZmFIb21lLCBmYUFkZHJlc3NDYXJkLGZhRW52ZWxvcGUsZmFUYXNrcyxmYUN1YmUsXHJcbiAgICAgICAgZmFQaG9uZVNxdWFyZSwgZmFJbmJveH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge2ZhR2l0aHViLCBmYUxpbmtlZGlufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgUHJvamVjdEhlYWRlciBmcm9tICdjb21wb25lbnRzL3Byb2plY3RIZWFkZXIuanMnO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi4vcHVibGljL21vZGVsLmpzJztcclxuY2xhc3MgU3RpY2t5QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlVGhlbWUgPSB0aGlzLnRvZ2dsZVRoZW1lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuRHJvcGRvd24gPSB0aGlzLm9wZW5Ecm9wZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGVtZVZhbHVlcyhDb29raWUuZ2V0KCd0aGVtZScpKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaGVtZShldnQpe1xyXG5cclxuICAgICAgICBsZXQgYmFja2dyb3VuZCwgdGV4dCxoZWFkaW5ncyxzdWJoZWFkaW5ncyx0aGVtZTtcclxuXHJcbiAgICAgICAgaWYoZXZ0LnRhcmdldC52YWx1ZT09PSdsaWdodCcpeyAvL2NoYW5nZSB0byBkYXJrXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSAnIzJGNDQ1NCc7XHJcbiAgICAgICAgICAgIHRleHQgPSAnI0QxRThFMic7XHJcbiAgICAgICAgICAgIGhlYWRpbmdzID0gJyNGRkNCOUEnO1xyXG4gICAgICAgICAgICBzdWJoZWFkaW5ncyA9ICcjRDlCMDhjJztcclxuICAgICAgICAgICAgdGhlbWUgPSAnZGFyayc7XHJcbiAgICAgICAgICAgIENvb2tpZS5zZXQoJ3RoZW1lJywnZGFyaycpO1xyXG4gICAgICAgIH1lbHNleyAvL2NoYW5nZSB0byBsaWdodFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kID0gJ3JnYmEoMjIzLDI0MCwyNTUsMC45KSc7XHJcbiAgICAgICAgICAgIHRleHQgPSAncmdiKDU4LDExOCwxNTgpJztcclxuICAgICAgICAgICAgaGVhZGluZ3MgPSAnIzVEQTJENSc7XHJcbiAgICAgICAgICAgIHN1YmhlYWRpbmdzID0gJyNDQjY2OUUnO1xyXG4gICAgICAgICAgICB0aGVtZSA9ICdsaWdodCc7XHJcbiAgICAgICAgICAgIENvb2tpZS5zZXQoJ3RoZW1lJywnbGlnaHQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBoZWFkaW5ncyxcclxuICAgICAgICAgICAgc3ViaGVhZGluZ3MsXHJcbiAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbCA9IG5ldyBNb2RlbCh0aGlzLnN0YXRlLnRoZW1lLHRydWUpO1xyXG4gICAgICAgIHRoaXMubW91bnQuYXBwZW5kQ2hpbGQodGhpcy5sb2dvTW9kZWwucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5sb2dvTW9kZWwubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMubW91bnQucmVtb3ZlQ2hpbGQodGhpcy5sb2dvTW9kZWwucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5sb2dvTW9kZWwgPSBuZXcgTW9kZWwodGhpcy5zdGF0ZS50aGVtZSx0cnVlKTtcclxuICAgICAgICB0aGlzLm1vdW50LmFwcGVuZENoaWxkKHRoaXMubG9nb01vZGVsLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubG9nb01vZGVsLmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRHJvcGRvd24oZWxlKXtcclxuICAgICAgICBjb25zdCBteURyb3BzID0gdGhpcy5wcm9wcy5jaGlsZHJlbi5zbGljZSgxKS5tYXAoZWxlPT5lbGUucHJvcHMuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRHJvcCA9IG15RHJvcHNbMF07XHJcbiAgICAgICAgY29uc29sZS5sb2cobXlEcm9wcyxzZWxlY3RlZERyb3ApO1xyXG4gICAgICAgIC8vc2VsZWN0ZWREcm9wLmV4cGFuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSA8PlxyXG4gICAgICAgICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFFbnZlbG9wZX0vPkUtbWFpbDogamEzMTgwQG55dS5lZHU8L3A+XHJcbiAgICAgICAgICAgIDxwPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYVBob25lU3F1YXJlfSAvPlRlbGVwaG9uZTogOTE0LTIyNC02MjQxPC9wPlxyXG4gICAgICAgICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFMaW5rZWRpbn0vPjxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamVmZnJleS1hc2Ftb2FoLTA3OTkxYTEyNS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rZWRJbjwvYT48YnIvPjwvcD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhR2l0aHVifS8+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hc2Ftb2FoLW1lZXBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRodWI8L2E+PC9wPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IDx1bD5cclxuICAgICAgICAgICAgPFByb2plY3RIZWFkZXIgc3ViamVjdD0nVGltZWxpbmUnIG5hbWU9J1R1dG9yIFRpbWVsaW5lJy8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHN1YmplY3Q9J0tNZWFucycgbmFtZT0nSy1NZWFucyBEZW1vJy8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHN1YmplY3Q9J1dlYnNpdGUnIG5hbWU9J1RoaXMgV2Vic2l0ZScvPlxyXG4gICAgICAgICAgICA8UHJvamVjdEhlYWRlciBzdWJqZWN0PSdRUicgbmFtZT0nUVIgTWFya2V0aW5nIFByb2plY3QnLz5cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICBjb25zdCBiYXIgPSA8ZGl2IGlkPSdzdGlja3lCYXInPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nb01vdW50XCIgcmVmPXtyZWY9Pih0aGlzLm1vdW50ID0gcmVmKX0+XHJcbiAgICAgICAgICAgICAgICA8cD5Sb3RhdGUgbWUhPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCBsZWZ0OlwiMTJweFwifX0+SmVmZnJleTwvaDE+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgbGVmdDpcIjI1cHhcIn19PkFzYW1vYWg8L2gxPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhSG9tZX0vPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzdWJIZWFkaW5nJz48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFBZGRyZXNzQ2FyZH0vPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9nYWxsZXJ5Jz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhQ3ViZX0vPjNEIEdhbGxlcnk8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdj4gPERyb3Bkb3duIHRpdGxlPVwiUHJvamVjdHNcIiBiYXJEcm9wZG93bj57W3Byb2plY3RzLCA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFUYXNrc30vPl19PC9Ecm9wZG93bj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFJbmJveH0vPiA8RHJvcGRvd24gdGl0bGU9J0NvbnRhY3QgLyBNZWRpYScgYmFyRHJvcGRvd24+e2NvbnRhY3R9PC9Ecm9wZG93bj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0ndG9nZ2xlVGhlbWUnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t2aXNpYmlsaXR5OiB0aGlzLnN0YXRlLnRoZW1lPT09J2xpZ2h0Jz8gJ3Zpc2libGUnOiAnaGlkZGVuJ319PkxpZ2h0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17dGhpcy5zdGF0ZS50aGVtZX0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlVGhlbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t2aXNpYmlsaXR5OiB0aGlzLnN0YXRlLnRoZW1lPT09J2RhcmsnPyAndmlzaWJsZSc6ICdoaWRkZW4nfX0+RGFyazwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG5cclxuICAgICAgICBjb25zdCBnbG9iYWxTdHlsZT0gIDxzdHlsZT57YFxyXG4gICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUuaGVhZGluZ3N9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMywgZGl2IHN2Z3tcclxuICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAsYSxzcGFuLGxpLGRpdixmb3JtLHRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUudGV4dH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlY3Rpb257XHJcbiAgICAgICAgICAgIGJvZGVyLWJvdHRvbTogc29saWQgMnB4ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc307XHJcbiAgICAgICAgfWB9PC9zdHlsZT47XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gPHN0eWxlPntgXHJcblxyXG4gICAgICAgICAgICAjbG9nb01vdW50e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0Ojc1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2xvZ29Nb3VudCBwe1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTIwcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDotMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW57XHJcbiAgICAgICAgICAgICAgICBmcm9tIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cclxuICAgICAgICAgICAgICAgIHRvIHt2aXNpYmlsaXR5OiBoaWRkZW47fVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbG9nb01vdW50OmhvdmVyIHB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFySWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJhckRyb3Bkb3due1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNjb250ZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjczMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjc3RpY2t5QmFye1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjIwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDoyMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YkhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTnVuaXRvSXRhbGljO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc307XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICN0b2dnbGVUaGVtZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDoxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICN0b2dnbGVUaGVtZSBzcGFue1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3dpdGNoIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3dpdGNoIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpub3QoOmNoZWNrZWQpICsgLnNsaWRlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyNTUsMC45KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY0NDU0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAjMTVEQjk1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyLnJvdW5kIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT4gICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIHtzdHlsZX1cclxuICAgICAgICAgICAge2dsb2JhbFN0eWxlfVxyXG4gICAgICAgICAgICB7YmFyfVxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdjb250ZW50Jz57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreUJhcjsiXSwic291cmNlUm9vdCI6IiJ9