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

      var bar = __jsx("div", {
        id: "stickyBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        id: "logoMount",
        ref: function ref(_ref) {
          return _this.mount = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Jeffrey"), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, " Asamoah"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("a", {
        className: "subHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("a", {
        className: "subHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "About")), __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Projects"), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#TimelineHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Tutor Timeline"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#KMeansHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "K-Means Demo"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#WebsiteHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "This Website")))));

      var style = __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\n\n            #logoMount{\n                height:75px;\n            }\n            #stickyBar{\n                vertical-align:top;\n                position: relative;\n                display:inline-block;\n                left:20px;\n                width:200px;\n                padding-right: 5px;\n                margin-right:5px;\n                margin-top:5px;\n                border-right: solid 2px #1E646E;\n            }\n            .subHeading{\n                font-family: NunitoItalic;\n                color: #1E646E;\n                display: block;\n                font-size: 1.17em;\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n                margin-inline-start: 0px;\n                margin-inline-end: 0px;\n                font-weight: bold;\n            }\n        ");

      var contact = __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "E-mail: ja3180@nyu.edu"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Telephone: 914-224-6241"), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Github"));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, style, bar);
    }
  }]);

  return StickyBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StickyBar);

/***/ })

})
//# sourceMappingURL=index.js.af529989ada46ff840e7.hot-update.js.map