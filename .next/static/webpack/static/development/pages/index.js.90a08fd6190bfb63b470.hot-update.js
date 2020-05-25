webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/stickyBar.js":
/*!*********************************!*\
  !*** ./components/stickyBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_theme_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/theme.js */ "./public/theme.js");
/* harmony import */ var components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/dropdown.js */ "./components/dropdown.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var components_projectHeader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/projectHeader.js */ "./components/projectHeader.js");
/* harmony import */ var _public_model_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../public/model.js */ "./public/model.js");







var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\stickyBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var StickyBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StickyBar, _React$Component);

  var _super = _createSuper(StickyBar);

  function StickyBar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StickyBar);

    _this = _super.call(this, props);
    _this.toggleTheme = _this.toggleTheme.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.openDropdown = _this.openDropdown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.state = Object(_public_theme_js__WEBPACK_IMPORTED_MODULE_11__["default"])(js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get('theme'));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StickyBar, [{
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
        js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('theme', 'dark');
      } else {
        //change to light
        background = 'rgba(223,240,255,0.9)';
        text = 'rgb(58,118,158)';
        headings = '#5DA2D5';
        subheadings = '#CB669E';
        theme = 'light';
        js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.set('theme', 'light');
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
      this.logoModel = new _public_model_js__WEBPACK_IMPORTED_MODULE_17__["default"](this.state.theme, true);
      this.mount.appendChild(this.logoModel.renderer.domElement);
      this.logoModel.load();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.mount.removeChild(this.logoModel.renderer.domElement);
      this.logoModel = new _public_model_js__WEBPACK_IMPORTED_MODULE_17__["default"](this.state.theme, true);
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
      var _this2 = this,
          _jsx,
          _jsx2;

      var contact = __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEnvelope"],
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
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPhoneSquare"],
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
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faLinkedin"],
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
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["faGithub"],
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
      }, __jsx(components_projectHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        subject: "Timeline",
        name: "Tutor Timeline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }), __jsx(components_projectHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        subject: "KMeans",
        name: "K-Means Demo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }), __jsx(components_projectHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        subject: "Website",
        name: "This Website",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }), __jsx(components_projectHeader_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      }, "Asamoah"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faHome"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 43
        }
      }), "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faAddressCard"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 43
        }
      }), "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faCube"],
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
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], (_jsx = {
        className: "barIcon"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "expandableIcon"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "icon", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faTasks"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 18
      }), _jsx)), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Projects",
        barDropdown: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 34
        }
      }, projects)), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], (_jsx2 = {
        className: "barIcon"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "className", "expandableIcon"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "icon", _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faInbox"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 18
      }), _jsx2)), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Contact / Media",
        barDropdown: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 34
        }
      }, contact)), __jsx("div", {
        id: "toggleTheme",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }
      }, __jsx("span", {
        style: {
          visibility: this.state.theme === 'light' ? 'visible' : 'hidden'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }, "Light"), __jsx("label", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }, __jsx("input", {
        type: "checkbox",
        value: this.state.theme,
        onChange: this.toggleTheme,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }
      }), __jsx("span", {
        className: "slider round",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }
      })), __jsx("span", {
        style: {
          visibility: this.state.theme === 'dark' ? 'visible' : 'hidden'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, "Dark")));

      var globalStyle = __jsx("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 29
        }
      }, "\n        body{\n            background: ".concat(this.state.background, "\n        }\n\n        h1{\n            color: ").concat(this.state.headings, "\n        }\n\n        h3, div svg{\n            color: ").concat(this.state.subheadings, "\n        }\n\n        p,a,span,li,div,form,text{\n            color: ").concat(this.state.text, "\n        }\n\n        section{\n            boder-bottom: solid 2px ").concat(this.state.subheadings, ";\n        }"));

      var style = __jsx("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 23
        }
      }, "\n\n            #logoMount{\n                height:75px;\n                position:relative;\n            }\n\n            #logoMount p{\n                visibility: hidden;\n                width:120px;\n                opacity: .4;\n                text-align:center;\n                animation-name: fadeIn;\n                animation-duration: 5s;\n                padding: 5px 0;\n                border-radius: 6px;\n                position: absolute;\n                top:-30px;\n            }\n\n            @keyframes fadeIn{\n                from {visibility: visible;}\n                to {visibility: hidden;}\n            }\n\n            #logoMount:hover p{\n                visibility: visible;\n            }\n\n            .barIcon{\n                color: ".concat(this.state.subheadings, ";\n                display:inline-block;\n                position:relative;\n                right:5px;\n            }\n\n            .expandableIcon{\n                vertical-align:top;\n                top:30px;\n            }\n\n            .barDropdown{\n                display:inline-block;\n            }\n\n            #content{\n                display:inline-block;\n                margin-top:5px;\n                position:relative;\n                left: 30px;\n                width:730px;\n                padding-left: 15px;\n                vertical-align:top;\n                border-left: solid 2px ").concat(this.state.subheadings, ";\n            }\n\n            #stickyBar{\n                vertical-align:top;\n                position: relative;\n                display:inline-block;\n                left:20px;\n                // width:200px;\n                margin-right: 5px;\n                margin-top:5px;\n            }\n            .subHeading{\n                font-family: NunitoItalic;\n                color: ").concat(this.state.subheadings, ";\n                display: block;\n                font-size: 1.5rem;\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n                margin-inline-start: 0px;\n                margin-inline-end: 0px;\n                font-weight: bold;\n            }\n\n            #toggleTheme{\n                position:relative;\n                left:10%;\n            }\n            \n            #toggleTheme span{\n                padding:10px;\n            }\n\n            .switch {\n                position: relative;\n                display: inline-block;\n                width: 60px;\n                height: 34px;\n            }\n\n            .switch input {\n                opacity: 0;\n                width: 0;\n                height: 0;\n            }\n\n            .slider {\n                position: absolute;\n                cursor: pointer;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: #ccc;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            .slider:before {\n                position: absolute;\n                content: \"\";\n                height: 26px;\n                width: 26px;\n                left: 4px;\n                bottom: 4px;\n                background-color: white;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            input[type='checkbox']:not(:checked) + .slider{\n                background-color: rgba(223,240,255,0.9);\n            }\n\n            input[type='checkbox']:checked + .slider {\n                background-color: #2F4454;\n            }\n\n            input:focus + .slider {\n                box-shadow: 0 0 1px #15DB95;\n            }\n\n            input:checked + .slider:before {\n                -webkit-transform: translateX(26px);\n                -ms-transform: translateX(26px);\n                transform: translateX(26px);\n            }\n\n            .slider.round {\n                border-radius: 34px;\n            }\n\n            .slider.round:before {\n                border-radius: 50%;\n            }\n        "));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, style, globalStyle, bar, __jsx("div", {
        id: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 13
        }
      }, this.props.children));
    }
  }]);

  return StickyBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
      }, "My name is Jeffrey Asamoah, and I'm currently living in the NYC metropolitan area. I studied Mathematics and Computer Science at New York University and recently graduated in May 2020. My hobbies include running, coding, and 3-D modelling.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
      }, "QR codes "), "in advertising. QR codes are functionally 2-D bar codes and since most mobile phones come equipped to scan them, it makes sense to leverage them for quick access to a web page. The page makes use of CSS media queries and", __jsx("a", {
        href: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }, " Responsive Design Practices"), " to be responsive to different devices in order to be visually appealing across all devices."), __jsx("ul", {
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
      }, "API "), "for our ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Optical_character_recognition",
        target: "_blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 33
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0aWNreUJhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiU3RpY2t5QmFyIiwicHJvcHMiLCJ0b2dnbGVUaGVtZSIsImJpbmQiLCJvcGVuRHJvcGRvd24iLCJzdGF0ZSIsInRoZW1lVmFsdWVzIiwiQ29va2llIiwiZ2V0IiwiZXZ0IiwiYmFja2dyb3VuZCIsInRleHQiLCJoZWFkaW5ncyIsInN1YmhlYWRpbmdzIiwidGhlbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldCIsInNldFN0YXRlIiwibG9nb01vZGVsIiwiTW9kZWwiLCJtb3VudCIsImFwcGVuZENoaWxkIiwicmVuZGVyZXIiLCJkb21FbGVtZW50IiwibG9hZCIsInJlbW92ZUNoaWxkIiwiZWxlIiwibXlEcm9wcyIsImNoaWxkcmVuIiwic2xpY2UiLCJtYXAiLCJzZWxlY3RlZERyb3AiLCJjb25zb2xlIiwibG9nIiwiY29udGFjdCIsImZhRW52ZWxvcGUiLCJmYVBob25lU3F1YXJlIiwiZmFMaW5rZWRpbiIsImZhR2l0aHViIiwicHJvamVjdHMiLCJiYXIiLCJyZWYiLCJwb3NpdGlvbiIsImxlZnQiLCJmYUhvbWUiLCJmYUFkZHJlc3NDYXJkIiwiZmFDdWJlIiwiZmFUYXNrcyIsImZhSW5ib3giLCJ2aXNpYmlsaXR5IiwiZ2xvYmFsU3R5bGUiLCJzdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztJQUNNQSxTOzs7OztBQUVGLHFCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7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QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQXNCO0FBQUcsWUFBSSxFQUFDLHFCQUFSO0FBQThCLGNBQU0sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF0QixDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBcUI7QUFBRyxZQUFJLEVBQUMsaURBQVI7QUFBMEQsY0FBTSxFQUFDLFFBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXJCLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFvQjtBQUFHLFlBQUksRUFBQyxrR0FBUjtBQUNoQixjQUFNLEVBQUMsUUFEUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFwQixDQUhKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBVTtBQUFHLFlBQUksRUFBQywrQkFBUjtBQUF3QyxjQUFNLEVBQUMsUUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBVixDQUxKLENBUlIsQ0FESixDQWhHSixDQURPLENBQVA7QUFxSEg7Ozs7RUF6SGVGLDRDQUFLLENBQUNDLFM7O0FBNEhYQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTBhMDhmZDYxOTBiZmI2M2I0NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAnc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHRoZW1lVmFsdWVzIGZyb20gJy4uL3B1YmxpYy90aGVtZS5qcyc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdjb21wb25lbnRzL2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtmYUhvbWUsIGZhQWRkcmVzc0NhcmQsZmFFbnZlbG9wZSxmYVRhc2tzLGZhQ3ViZSxcclxuICAgICAgICBmYVBob25lU3F1YXJlLCBmYUluYm94fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7ZmFHaXRodWIsIGZhTGlua2VkaW59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBQcm9qZWN0SGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvcHJvamVjdEhlYWRlci5qcyc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICcuLi9wdWJsaWMvbW9kZWwuanMnO1xyXG5jbGFzcyBTdGlja3lCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy50b2dnbGVUaGVtZSA9IHRoaXMudG9nZ2xlVGhlbWUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW5Ecm9wZG93biA9IHRoaXMub3BlbkRyb3Bkb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoZW1lVmFsdWVzKENvb2tpZS5nZXQoJ3RoZW1lJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVRoZW1lKGV2dCl7XHJcblxyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kLCB0ZXh0LGhlYWRpbmdzLHN1YmhlYWRpbmdzLHRoZW1lO1xyXG5cclxuICAgICAgICBpZihldnQudGFyZ2V0LnZhbHVlPT09J2xpZ2h0Jyl7IC8vY2hhbmdlIHRvIGRhcmtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA9ICcjMkY0NDU0JztcclxuICAgICAgICAgICAgdGV4dCA9ICcjRDFFOEUyJztcclxuICAgICAgICAgICAgaGVhZGluZ3MgPSAnI0ZGQ0I5QSc7XHJcbiAgICAgICAgICAgIHN1YmhlYWRpbmdzID0gJyNEOUIwOGMnO1xyXG4gICAgICAgICAgICB0aGVtZSA9ICdkYXJrJztcclxuICAgICAgICAgICAgQ29va2llLnNldCgndGhlbWUnLCdkYXJrJyk7XHJcbiAgICAgICAgfWVsc2V7IC8vY2hhbmdlIHRvIGxpZ2h0XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSAncmdiYSgyMjMsMjQwLDI1NSwwLjkpJztcclxuICAgICAgICAgICAgdGV4dCA9ICdyZ2IoNTgsMTE4LDE1OCknO1xyXG4gICAgICAgICAgICBoZWFkaW5ncyA9ICcjNURBMkQ1JztcclxuICAgICAgICAgICAgc3ViaGVhZGluZ3MgPSAnI0NCNjY5RSc7XHJcbiAgICAgICAgICAgIHRoZW1lID0gJ2xpZ2h0JztcclxuICAgICAgICAgICAgQ29va2llLnNldCgndGhlbWUnLCdsaWdodCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQsXHJcbiAgICAgICAgICAgIHRleHQsXHJcbiAgICAgICAgICAgIGhlYWRpbmdzLFxyXG4gICAgICAgICAgICBzdWJoZWFkaW5ncyxcclxuICAgICAgICAgICAgdGhlbWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMubG9nb01vZGVsID0gbmV3IE1vZGVsKHRoaXMuc3RhdGUudGhlbWUsdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tb3VudC5hcHBlbmRDaGlsZCh0aGlzLmxvZ29Nb2RlbC5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbC5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5tb3VudC5yZW1vdmVDaGlsZCh0aGlzLmxvZ29Nb2RlbC5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmxvZ29Nb2RlbCA9IG5ldyBNb2RlbCh0aGlzLnN0YXRlLnRoZW1lLHRydWUpO1xyXG4gICAgICAgIHRoaXMubW91bnQuYXBwZW5kQ2hpbGQodGhpcy5sb2dvTW9kZWwucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5sb2dvTW9kZWwubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Ecm9wZG93bihlbGUpe1xyXG4gICAgICAgIGNvbnN0IG15RHJvcHMgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnNsaWNlKDEpLm1hcChlbGU9PmVsZS5wcm9wcy5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWREcm9wID0gbXlEcm9wc1swXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhteURyb3BzLHNlbGVjdGVkRHJvcCk7XHJcbiAgICAgICAgLy9zZWxlY3RlZERyb3AuZXhwYW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IDw+XHJcbiAgICAgICAgICAgIDxwPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUVudmVsb3BlfS8+RS1tYWlsOiBqYTMxODBAbnl1LmVkdTwvcD5cclxuICAgICAgICAgICAgPHA+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhUGhvbmVTcXVhcmV9IC8+VGVsZXBob25lOiA5MTQtMjI0LTYyNDE8L3A+XHJcbiAgICAgICAgICAgIDxwPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUxpbmtlZGlufS8+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qZWZmcmV5LWFzYW1vYWgtMDc5OTFhMTI1L1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbmtlZEluPC9hPjxici8+PC9wPlxyXG4gICAgICAgICAgICA8cD48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFHaXRodWJ9Lz48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FzYW1vYWgtbWVlcFwiIHRhcmdldD1cIl9ibGFua1wiPkdpdGh1YjwvYT48L3A+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gPHVsPlxyXG4gICAgICAgICAgICA8UHJvamVjdEhlYWRlciBzdWJqZWN0PSdUaW1lbGluZScgbmFtZT0nVHV0b3IgVGltZWxpbmUnLz5cclxuICAgICAgICAgICAgPFByb2plY3RIZWFkZXIgc3ViamVjdD0nS01lYW5zJyBuYW1lPSdLLU1lYW5zIERlbW8nLz5cclxuICAgICAgICAgICAgPFByb2plY3RIZWFkZXIgc3ViamVjdD0nV2Vic2l0ZScgbmFtZT0nVGhpcyBXZWJzaXRlJy8+XHJcbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHN1YmplY3Q9J1FSJyBuYW1lPSdRUiBNYXJrZXRpbmcgUHJvamVjdCcvPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIGNvbnN0IGJhciA9IDxkaXYgaWQ9J3N0aWNreUJhcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvTW91bnRcIiByZWY9e3JlZj0+KHRoaXMubW91bnQgPSByZWYpfT5cclxuICAgICAgICAgICAgICAgIDxwPlJvdGF0ZSBtZSE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3twb3NpdGlvbjpcInJlbGF0aXZlXCIsIGxlZnQ6XCIxMnB4XCJ9fT5KZWZmcmV5PC9oMT5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCBsZWZ0OlwiMjVweFwifX0+QXNhbW9haDwvaDE+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzdWJIZWFkaW5nJz48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFIb21lfS8+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3N1YkhlYWRpbmcnPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUFkZHJlc3NDYXJkfS8+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2dhbGxlcnknPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdzdWJIZWFkaW5nJz48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFDdWJlfS8+M0QgR2FsbGVyeTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2PjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBjbGFzc05hbWU9J2V4cGFuZGFibGVJY29uJyBcclxuICAgICAgICAgICAgICAgIGljb249e2ZhVGFza3N9Lz4gPERyb3Bkb3duIHRpdGxlPVwiUHJvamVjdHNcIiBiYXJEcm9wZG93bj57cHJvamVjdHN9PC9Ecm9wZG93bj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgY2xhc3NOYW1lPSdleHBhbmRhYmxlSWNvbidcclxuICAgICAgICAgICAgICAgIGljb249e2ZhSW5ib3h9Lz4gPERyb3Bkb3duIHRpdGxlPSdDb250YWN0IC8gTWVkaWEnIGJhckRyb3Bkb3duPntjb250YWN0fTwvRHJvcGRvd24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J3RvZ2dsZVRoZW1lJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dmlzaWJpbGl0eTogdGhpcy5zdGF0ZS50aGVtZT09PSdsaWdodCc/ICd2aXNpYmxlJzogJ2hpZGRlbid9fT5MaWdodDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9e3RoaXMuc3RhdGUudGhlbWV9IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZVRoZW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dmlzaWJpbGl0eTogdGhpcy5zdGF0ZS50aGVtZT09PSdkYXJrJz8gJ3Zpc2libGUnOiAnaGlkZGVuJ319PkRhcms8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgY29uc3QgZ2xvYmFsU3R5bGU9ICA8c3R5bGU+e2BcclxuICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMuc3RhdGUuYmFja2dyb3VuZH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLmhlYWRpbmdzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMsIGRpdiBzdmd7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLGEsc3BhbixsaSxkaXYsZm9ybSx0ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnRleHR9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWN0aW9ue1xyXG4gICAgICAgICAgICBib2Rlci1ib3R0b206IHNvbGlkIDJweCAke3RoaXMuc3RhdGUuc3ViaGVhZGluZ3N9O1xyXG4gICAgICAgIH1gfTwvc3R5bGU+O1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsZSA9IDxzdHlsZT57YFxyXG5cclxuICAgICAgICAgICAgI2xvZ29Nb3VudHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo3NXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNsb2dvTW91bnQgcHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6LTMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xyXG4gICAgICAgICAgICAgICAgZnJvbSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XHJcbiAgICAgICAgICAgICAgICB0byB7dmlzaWJpbGl0eTogaGlkZGVuO31cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2xvZ29Nb3VudDpob3ZlciBwe1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJhckljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICByaWdodDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leHBhbmRhYmxlSWNvbntcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgICAgIHRvcDozMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFyRHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2NvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NzMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMnB4ICR7dGhpcy5zdGF0ZS5zdWJoZWFkaW5nc307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNzdGlja3lCYXJ7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjBweDtcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3ViSGVhZGluZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG9JdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLnN0YXRlLnN1YmhlYWRpbmdzfTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI3RvZ2dsZVRoZW1le1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgI3RvZ2dsZVRoZW1lIHNwYW57XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zd2l0Y2gge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zd2l0Y2ggaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOm5vdCg6Y2hlY2tlZCkgKyAuc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDI1NSwwLjkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjQ0NTQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMxNURCOTU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXIucm91bmQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPiAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAge3N0eWxlfVxyXG4gICAgICAgICAgICB7Z2xvYmFsU3R5bGV9XHJcbiAgICAgICAgICAgIHtiYXJ9XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J2NvbnRlbnQnPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RpY2t5QmFyOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCAnc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBCYXIgZnJvbSAnY29tcG9uZW50cy9zdGlja3lCYXIuanMnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdjb21wb25lbnRzL2Ryb3Bkb3duLmpzJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICA8QmFyPlxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvYnV0dGVyZmx5LnBuZycvPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgPGgxPkhvbWU8L2gxPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nQWJvdXRNZSc+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gdGl0bGU9XCJBYm91dCBNZVwiIG9wZW5PblN0YXJ0PlxyXG4gICAgICAgICAgICAgICAgPHA+SGV5LCBsb29rcyBsaWtlIHlvdSBmb3VuZCBteSB3ZWJzaXRlITwvcD5cclxuICAgICAgICAgICAgICAgIDxwPk15IG5hbWUgaXMgSmVmZnJleSBBc2Ftb2FoLCBhbmQgSSdtIGN1cnJlbnRseSBsaXZpbmcgaW4gdGhlIE5ZQyBtZXRyb3BvbGl0YW4gYXJlYS5cclxuICAgICAgICAgICAgICAgICAgICBJIHN0dWRpZWQgTWF0aGVtYXRpY3MgYW5kIENvbXB1dGVyIFNjaWVuY2UgYXQgTmV3IFlvcmsgVW5pdmVyc2l0eSBhbmQgcmVjZW50bHkgZ3JhZHVhdGVkIFxyXG4gICAgICAgICAgICAgICAgICAgIGluIE1heSAyMDIwLiBNeSBob2JiaWVzIGluY2x1ZGUgcnVubmluZywgY29kaW5nLCBhbmQgMy1EIG1vZGVsbGluZy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+U2VlIG1vcmUgaGVyZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nVGltZWxpbmVIZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHRpdGxlPVwiVGltZWxpbmUgQXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5JIGNyZWF0ZWQgdGhpcyB0aW1lbGluZSBhcHAgdG8gZW11bGF0ZSB0aGUgcHJvamVjdCBJIHdvcmtlZCBvbiBkdXJpbmcgbXkgQ29tY2FzdCBJbnRlcm5zaGlwLiBBdCBteSBpbnRlcm5zaGlwIG15IHByb2plY3Qgd2FzIFxyXG4gICAgICAgICAgICAgICAgICAgIHRvIGNyZWF0ZSBhIGZvd2FyZC1mYWNpbmcgdmlzdWFsIHRvIGRpc3BsYXkgaG93IHRoZSBYZmluaXR5IEZyYXVkIE1hbmFnbWVudCAoWEZNKSB0ZWFtIG1vbml0b3JlZCBhbmQgbWl0aWdhdGVkIGZyYXVkIGFjdGl2aXR5LlxyXG4gICAgICAgICAgICAgICAgICAgIEZvciBteSBpbnRlcm5zaGlwIEkgZGlzcGxheWVkIHRoZSB+NDAgdXNlIGNhc2VzIG9mIHBvdGVudGlhbGx5IGZyYXVkdWxlbnQgYWN0aXZpdHkgYW5kIHBsb3R0ZWQgdGhlIG9jY3VyZW5jZXMgb2YgZWFjaCB1c2VjYXNlLiBUaGUgXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwIGFsbG93ZWQgZm9yIHlvdSB0byBmaWx0ZXIgd2hpY2ggaXRlbXMgeW91IHdhbnRlZCB0byBsb29rIGF0IGFzIHdlbGwgYXMgc2VsZWN0IHRoZSB0aW1lZnJhbWUgb24gd2hpY2ggeW91IHdlcmUgbG9va2luZy5cclxuICAgICAgICAgICAgICAgICAgICBJIHJlY3JlYXRlZCB0aGF0IHByb2plY3QgdXNpbmcgZGF0YSBmcm9tIG15IHR1dG9yaW5nIGV4cGVyaWVuY2UgYXQgTllVLiBIZXJlIEkgZGlzcGxheSB3aGVuIGVhY2ggc3R1ZGVudCB3b3VsZCBhcHByb2FjaCB2YXJpb3VzIHR1dG9yc1xyXG4gICAgICAgICAgICAgICAgICAgIGFuZCB0aGUgc3VjY2VzcyBvZiB0aGUgdHV0b3Jpbmcgc2Vzc2lvbi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+QnVpbHQgdXNpbmcgPGEgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IFJlYWN0LmpzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPkRhdGEgd2FzIHJlYWQgZnJvbTxhIGhyZWY9XCJodHRwOi8vY2Fzc2FuZHJhLmFwYWNoZS5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IENhc3NhbmRyYSBEQiAobm93IHN0YXRpYyBkYXRhKTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5Vc2VkIDxhIGhyZWY9XCJodHRwczovL2QzanMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPkQzIGxpYnJhcmllczwvYT4gdG8gc2NhbGUgYW5kIHBsb3QgZGF0YSBwb2ludHMgYWNjb3JkaW5nIHRvIHRoZWlyIGRhdGVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+VXNlZCBEMyBsaWJyYXJpZXMgdG8gY3JlYXRlIGEgd2luZG93IGZyYW1lIHRvIGFkanVzdCB0aGUgZGF0ZSB3aW5kb3cgb2Ygdmlld2luZzwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9hc2Ftb2FoLW1lZXAvMTAxVGltZWxpbmUnIHRhcmdldD1cIl9ibGFua1wiPlZpZXcgc291cmNlPC9hPjxici8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLzEwMVRpbWVsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TGl2ZSBEZW1vPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPSdLTWVhbnNIZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHRpdGxlPVwiSy1NZWFucyBEZW1vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSy1tZWFuc19jbHVzdGVyaW5nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Sy1NZWFuczwvYT4gcHJvamVjdCBpcyBhIHNlbGYtbWFkZSBkYXRhIGNsdXN0ZXJpbmcgYWxnb3JpdGhtIHRoYXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEkgY3JlYXRlZCBmb3IgbXkgcHJlZGljdGl2ZSBhbmFseXRpY3MgY2xhc3MuIFRoZSBhbGdvcml0aG0gdGFrZXMgaW4gMjQgZG9jdW1lbnRzIHJvdWdobHkgY29uY2VybmVkIHdpdGggMyB0b3BpY3MgKE1vdXRoIGFuZCBGb290IERpc2Vhc2VzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWlybGluZSBTYWZldHksIGFuZCBJbnRlcm5hdGlvbmFsIEhvdXNpbmcgUHJpY2VzKSBhbmQgY2x1c3RlcnMgdGhlbSBpbnRvIGsgY2VudHJvaWRzLiBUaGUgZGF0YSBpcyAxPHN1cD5zdDwvc3VwPiBjb252ZXJ0ZWQgaW50byBhIFRGLUlERiBtYXRyaXggYWRqdXN0ZWQgZm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUgbGVuZ3RocyBvZiB0aGUgcmVzcGVjdGl2ZSBkb2N1bWVudHMuIFRoZSBkYXRhIGlzIHRoZW4gdHJpbW1lZCBieSByZW1vdmluZyBsb3cgaW50cmEtZGltZW5zaW9uYWwgd29yZHMsIGNvbWJpbmluZyBoaWdobHkgY29ycmVsYXRlZCBkaW1lbnNpb25zLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHRoZW4gYWRqdXN0aW5nIHRoZSBtYXRyaXggdXNpbmcgPGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1ByaW5jaXBhbF9jb21wb25lbnRfYW5hbHlzaXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5QQ0E8L2E+LlRoZSBzaW1pbGFyaXR5IGlzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlZCB1c2luZyA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29zaW5lX3NpbWlsYXJpdHlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5jb3NpbmUgc2ltaWxhcml0eTwvYT4gaW50byBjbHVzdGVkIGRldGVybWluZWQgYnkgaW5pdGlhbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVhbnMgZnVydGhlc3QgYXdheSBmcm9tIGVhY2ggb3RoZXIgKHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSy1tZWFucyUyQiUyQlwiIHRhcmdldD1cIl9ibGFua1wiPkstTWVhbnMrKzwvYT4pLiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWZ0ZXIgdGhlIGRhdGEgaXMgY2x1c3RlcmVkIGl0IGlzIHRoZW4gdHJhbnNmb3JtZWQgYWdhaW4gYnkgUENBIG9udG8gMiBkaW1lbnNpb25zIGFuZCBwbG90dGVkIG9uIGEgMi1EIGdyYXBoLiBcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+QnVpbHQgaW4gPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vdGVjaG5ldHdvcmsvamF2YS9qYXZhc2Uvb3ZlcnZpZXcvamF2YTgtMjEwMDMyMS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SmF2YTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+VXNlZCA8YSBocmVmPVwiaHR0cHM6Ly9jb21tb25zLmFwYWNoZS5vcmcvcHJvcGVyL2NvbW1vbnMtbWF0aC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BcGFjaGUgQ29tbW9uczwvYT4gTWF0aCBmb3IgdmVjdG9yL21hdHJpeCBtYW5pcHVsYXRpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+VXNlZCA8YSBocmVmPVwiaHR0cDovL3d3dy5qZnJlZS5vcmcvamZyZWVjaGFydC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5KRnJlZSBjaGFydHM8L2E+IHRvIGNyZWF0ZSBwbG90czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vYXNhbW9haC1tZWVwJyB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IHNvdXJjZTwvYT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD0nUVJIZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHRpdGxlPSdRUiBNYXJrZXRpbmcgUHJvamVjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgcHJvamVjdCB3YXMgdG8gYnVpbGQgYSBtb2JpbGUtZnJpZW5kbHkgd2ViIHBhZ2UgdG8gZGVtbyB0aGUgdXNlIG9mIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9RUl9jb2RlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UVIgY29kZXMgPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW4gYWR2ZXJ0aXNpbmcuIFFSIGNvZGVzIGFyZSBmdW5jdGlvbmFsbHkgMi1EIGJhciBjb2RlcyBhbmQgc2luY2UgbW9zdCBtb2JpbGUgcGhvbmVzIGNvbWUgZXF1aXBwZWQgdG8gc2NhbiB0aGVtLCBpdCBtYWtlcyBzZW5zZSB0byBsZXZlcmFnZSB0aGVtIGZvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVpY2sgYWNjZXNzIHRvIGEgd2ViIHBhZ2UuIFRoZSBwYWdlIG1ha2VzIHVzZSBvZiBDU1MgbWVkaWEgcXVlcmllcyBhbmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0NTUy9DU1NfbGF5b3V0L1Jlc3BvbnNpdmVfRGVzaWduXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IFJlc3BvbnNpdmUgRGVzaWduIFByYWN0aWNlczwvYT4gdG8gYmUgcmVzcG9uc2l2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG8gZGlmZmVyZW50IGRldmljZXMgaW4gb3JkZXIgdG8gYmUgdmlzdWFsbHkgYXBwZWFsaW5nIGFjcm9zcyBhbGwgZGV2aWNlcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+QnVpbGQgZm9yIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnB2aC5jb20vJyB0YXJnZXQ9J19ibGFuayc+UFZIPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Vc2luZyA8YSBocmVmPSdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9RUl9jb2RlJyB0YXJnZXQ9J2JsYW5rJz5RUiBjb2RlczwvYT4gZm9yIGVhc3kgbW9iaWxlIG1hcmtldGluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcHZoJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PSdfYmxhbmsnPlFSIFByb2plY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJXZWJzaXRlSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gdGl0bGU9J1RoaXMgV2Vic2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSB3ZWJzaXRlIHlvdSBzZWUgaGVyZSB3YXMgYnVpbHQgdXNpbmcgTmV4dC5qcy4gYSBzZXJ2ZXItc2lkZSBmcmFtZXdvcmsgYnVpbHQgb24gdG9wIG9mIFJlYWN0LiBJIHdhbnRlZCB0byBjcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYSB3ZWJzaXRlIHRvIHNob3djYXNlIGFsbCBvZiBwcm9qZWN0cyBhbmQgd29yayB0aGF0IEkgYW0gcHJvdWQgb2YuIFNpbmNlIGl0IGlzIGltcG9ydGFudCB0byBkZW1vIHByb2plY3RzIGFzIHRyYW5zcGFyZW50bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHNlZW1sZXNzbHkgYXMgcG9zc2libGUgaXQgbWFkZSBzZW5zZSB0byBob3N0IGl0IGFsbCBvbiBhIHNpbmdsZSB3ZWJzaXRlLiBUaGlzIHdlYnNpdGUgd2lsbCBjb250aW51b3VzbHkgYmUgYSB3b3JrIGluIHByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzIEkgdHJ5IHRvIGltcGxlbWVudCBhbmQgYWRkIGJvdGggbmV3IGZlYXR1cmVzIGFuZCBuZXcgcHJvamVjdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkluIFByb2dyZXNzOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BYm91dCBNZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JbXBsZW1lbnRpbmcgbW9yZSAzRCBtb2RlbHMgdG8gZ2FsbGVyeTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5SZXNwb25zaXZlIERlc2lnbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CdWlsdCB1c2luZyA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPk5leHQuanM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhvc3RlZCB1c2luZyA8YSBocmVmPVwiaHR0cHM6Ly96ZWl0LmNvL2RvY3MjcmVsYXRlZFwiIHRhcmdldD1cIl9ibGFua1wiPlplaXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cIm9jckFQSVwiPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHRpdGxlPSdPQ1IgQVBJJz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NeSAxc3QgcHJvamVjdCBhdCBHRVAgd2FzIHRvIGhlbHAgY29uc3RydWN0IGFuIDxhIGhyZWY9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BcHBsaWNhdGlvbl9wcm9ncmFtbWluZ19pbnRlcmZhY2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5BUEkgPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIG91ciA8YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvT3B0aWNhbF9jaGFyYWN0ZXJfcmVjb2duaXRpb25cIiB0YXJnZXQ9XCJfYmxhbmtcIj4gT3B0aWNhbCBDb2RlIFJlY29nbml0aW9uIChPQ1IpPC9hPiBwcm9qZWN0LiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgT3VyIEFQSSB3b3VsZCByZWNpZXZlIGRhdGEgZnJvbSB0aGUgQUkgdGhhdCByZWFkIHRoZSBkYXRhIChpbiBvdXIgY2FzZSBpbnZvaWNlcyksIGlkZW50aWZ5IGtleSBlbGVtZW50cyBhbmQgaW5mb3JtYXRpb24sIHNhdmUgaXQgaW50byBvdXIgZGF0YWJhc2UsIGFuZCB0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG8gY3JlYXRlIHRoZSBpbnZvaWNlIG9uIG91ciBzZXJ2aWNlIHdpdGggdGhlIGRhdGEuIE15IHJvbGUgd2FzIHdhcyB0byBjcmVhdGUgdW5pdCB0ZXN0cyBmb3IgbmV3IGNvbXBvbmVudHMsIG1pZ3JhdGUgZGF0YSBhY2Nlc3NpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRzIHRvIHNlcGVyYXRlIEFQSSBjYWxscyBmb3Igc2VjdXJpdHkvaW5kZXBlbmRlbmNlLCBhbmQgaW1wbGVtZW50IG5ldyBlcnJvcnMgZm9yIG1pc3NpbmcgaW5mb3JtYXRpb24gd2l0aGluIHRoZSBkb2N1bWVudHMuIFRoaXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QgaXMgb25lIG9mIHRoZSAxc3QgZW50ZXJwcmlzZSBwcm9qZWN0cyBJJ3ZlIHdvcmtlZCBvbiB3aXRoIGEgdGVhbSBhbmQgaXQgaGFzIHRhdWdodCBtZSBhIGxvdCBhYm91dCB0aGUgaW1wb3J0YW5jZSBvZiBjb21tdW5pY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3RoIGluIGNsYXJpdHkgb2YgY29kZSBhbmQgd29ya2luZyB3aXRoIGNvbGxlZ2VzLiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Gcm9udCBFbmQgZG9uZSBpbiA8YSBocmVmPVwiaHR0cHM6Ly9hbmd1bGFyLmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPkFuZ3VsYXI1LzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJhY2sgRW5kIGRvbmUgaW4gPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2RvdG5ldC9jc2hhcnAvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QyMgLk5FVCBmcmFtZXdvcms8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BUEkgaG9zdGVkIHdpdGggPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2lpcy9leHRlbnNpb25zL2ludHJvZHVjdGlvbi10by1paXMtZXhwcmVzcy9paXMtZXhwcmVzcy1vdmVydmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+SUlTIEV4cHJlc3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Vc2luZyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3JhY2xlLmNvbS9teXNxbC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NeVNRTCBkYXRhYmFzZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvQmFyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9