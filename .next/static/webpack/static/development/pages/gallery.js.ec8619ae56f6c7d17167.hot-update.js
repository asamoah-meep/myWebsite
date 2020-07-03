webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-gltf-loader */ "./node_modules/three-gltf-loader/index.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three_gltf_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_orbit_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three-orbit-controls */ "./node_modules/three-orbit-controls/index.js");
/* harmony import */ var three_orbit_controls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_orbit_controls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");






var Model = /*#__PURE__*/function () {
  function Model(fileName) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Model);

    this.filePath = "../public/models/".concat(fileName, ".gltf");
    this.scene = new three__WEBPACK_IMPORTED_MODULE_4__["Scene"]();
    this.camera = new three__WEBPACK_IMPORTED_MODULE_4__["PerspectiveCamera"](75, window.innerHeight / window.innerHeight, .1, 1000);
    this.camera.position.z = 5;
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_4__["WebGLRenderer"]({
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(100, 100);
    this.renderer.setClearColor(0xff0000, 0);
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;
    this.topLight = new three__WEBPACK_IMPORTED_MODULE_4__["PointLight"](0xffffff, 4);
    this.topLight.position.set(0, 0, 7);
    this.bottomLight = new three__WEBPACK_IMPORTED_MODULE_4__["PointLight"](0xffffff, 4);
    this.bottomLight.position.set(0, 0, -7);
    this.loader = new three_gltf_loader__WEBPACK_IMPORTED_MODULE_2___default.a();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Model, [{
    key: "load",
    value: function load() {
      var _this = this;

      var OrbitControls = three_orbit_controls__WEBPACK_IMPORTED_MODULE_3__(three__WEBPACK_IMPORTED_MODULE_4__);
      var controller = new OrbitControls(this.camera, this.renderer.domElement);

      var animate = function animate() {
        requestAnimationFrame(animate);
        controller.update();

        _this.renderer.render(_this.scene, _this.camera);
      };

      this.loader.load(this.filePath, function (gltf) {
        _this.logo = gltf.scene;
        _this.logo.rotation.y = -Math.PI / 2;

        _this.logo.scale.set(2, 2, 2);

        _this.scene.add(_this.logo);

        _this.scene.add(_this.topLight);

        _this.scene.add(_this.bottomLight);

        animate();
      }, function (xhr) {
        return undefined; //TODO: add loading animation
      }, function (error) {
        console.error(error);
      });
    }
  }]);

  return Model;
}();

/* harmony default export */ __webpack_exports__["default"] = (Model);

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

/***/ "./src/pages/gallery.js":
/*!******************************!*\
  !*** ./src/pages/gallery.js ***!
  \******************************/
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
/* harmony import */ var src_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/styles.css */ "./src/styles.css");
/* harmony import */ var src_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_components_stickyBar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/stickyBar.js */ "./src/components/stickyBar.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_components_dropdown_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/dropdown.js */ "./src/components/dropdown.js");
/* harmony import */ var src_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/model */ "./src/model.js");





var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\src\\pages\\gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Gallery = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Gallery, _React$Component);

  var _super = _createSuper(Gallery);

  function Gallery(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Gallery);

    _this = _super.call(this, props);
    _this.items = ['Logo_light', 'Logo_dark', 'Torch', 'Mask'];
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var models = this.items.map(function (ele) {
        return new src_model__WEBPACK_IMPORTED_MODULE_10__["default"](ele);
      });
      var index = 0;

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var modelName = _step.value;
          this[modelName].addChild(models[index++]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = __jsx("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 23
        }
      }, "\n            #grid{\n                display:grid;\n                grid-template-columns: 1fr 1f;\n                grid-gap: 100px;\n                grid-auto-rows: minmax(auto,150px);\n            }\n        ");

      this.models = this.items.map(function (ele) {
        return __jsx(src_components_dropdown_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: ele,
          ref: function ref(_ref) {
            return _this2[ele] = _ref;
          },
          title: ele,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }
        });
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(src_components_stickyBar_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }, "Gallery")), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, "Gallery"), this.models));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2dhbGxlcnkuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJmaWxlTmFtZSIsImZpbGVQYXRoIiwic2NlbmUiLCJUSFJFRSIsImNhbWVyYSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZ2FtbWFPdXRwdXQiLCJnYW1tYUZhY3RvciIsInRvcExpZ2h0Iiwic2V0IiwiYm90dG9tTGlnaHQiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwiT3JiaXRDb250cm9scyIsIlJhd09yYml0Q29udHJvbHMiLCJjb250cm9sbGVyIiwiZG9tRWxlbWVudCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJsb2FkIiwiZ2x0ZiIsImxvZ28iLCJyb3RhdGlvbiIsInkiLCJNYXRoIiwiUEkiLCJzY2FsZSIsImFkZCIsInhociIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSIsIkdhbGxlcnkiLCJwcm9wcyIsIml0ZW1zIiwibW9kZWxzIiwibWFwIiwiZWxlIiwiaW5kZXgiLCJtb2RlbE5hbWUiLCJhZGRDaGlsZCIsInN0eWxlIiwicmVmIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxLO0FBRUYsaUJBQVlDLFFBQVosRUFBcUI7QUFBQTs7QUFDakIsU0FBS0MsUUFBTCw4QkFBb0NELFFBQXBDO0FBRUEsU0FBS0UsS0FBTCxHQUFhLElBQUlDLDJDQUFKLEVBQWI7QUFFQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUQsdURBQUosQ0FBNEIsRUFBNUIsRUFBK0JFLE1BQU0sQ0FBQ0MsV0FBUCxHQUFtQkQsTUFBTSxDQUFDQyxXQUF6RCxF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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLEVBS0ssS0FBS0YsTUFMVixDQURPLENBQVA7QUFTSDs7OztFQXpDaUJRLDRDQUFLLENBQUNDLFM7O0FBNENiWixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZ2FsbGVyeS5qcy5lYzg2MTlhZTU2ZjZjN2QxNzE2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdMVEZMb2FkZXIgZnJvbSAndGhyZWUtZ2x0Zi1sb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBSYXdPcmJpdENvbnRyb2xzIGZyb20gJ3RocmVlLW9yYml0LWNvbnRyb2xzJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuY2xhc3MgTW9kZWx7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lKXtcclxuICAgICAgICB0aGlzLmZpbGVQYXRoID0gYC4uL3B1YmxpYy9tb2RlbHMvJHtmaWxlTmFtZX0uZ2x0ZmA7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsd2luZG93LmlubmVySGVpZ2h0L3dpbmRvdy5pbm5lckhlaWdodCwuMSwxMDAwKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6dHJ1ZSxhbHBoYTp0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKDEwMCwxMDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmMDAwMCwwKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmdhbW1hT3V0cHV0PXRydWU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5nYW1tYUZhY3Rvcj0yLjI7XHJcblxyXG4gICAgICAgIHRoaXMudG9wTGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiw0KTtcclxuICAgICAgICB0aGlzLnRvcExpZ2h0LnBvc2l0aW9uLnNldCgwLDAsNyk7XHJcblxyXG4gICAgICAgIHRoaXMuYm90dG9tTGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiw0KTtcclxuICAgICAgICB0aGlzLmJvdHRvbUxpZ2h0LnBvc2l0aW9uLnNldCgwLDAsLTcpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpe1xyXG5cclxuICAgICAgICBjb25zdCBPcmJpdENvbnRyb2xzID0gUmF3T3JiaXRDb250cm9scyhUSFJFRSk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRlID0gKCk9PntcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyLmxvYWQodGhpcy5maWxlUGF0aCwgKGdsdGYpID0+e1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28gPSBnbHRmLnNjZW5lO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28ucm90YXRpb24ueT0tTWF0aC5QSS8yO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28uc2NhbGUuc2V0KDIsMiwyKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5sb2dvKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy50b3BMaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuYm90dG9tTGlnaHQpO1xyXG4gICAgICAgICAgICBhbmltYXRlKCk7XHJcblxyXG4gICAgICAgIH0sKHhocik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsgLy9UT0RPOiBhZGQgbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICB9LCAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7IiwiaW1wb3J0ICdzcmMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBCYXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvc3RpY2t5QmFyLmpzJztcclxuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnc3JjL2NvbXBvbmVudHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnc3JjL21vZGVsJztcclxuXHJcbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gWydMb2dvX2xpZ2h0JywnTG9nb19kYXJrJywnVG9yY2gnLCAnTWFzayddO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3QgbW9kZWxzID0gdGhpcy5pdGVtcy5tYXAoZWxlPT5uZXcgTW9kZWwoZWxlKSk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbE5hbWUgb2YgdGhpcy5pdGVtcyl7XHJcbiAgICAgICAgICAgIHRoaXNbbW9kZWxOYW1lXS5hZGRDaGlsZChtb2RlbHNbaW5kZXgrK10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gPHN0eWxlPntgXHJcbiAgICAgICAgICAgICNncmlke1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWY7XHJcbiAgICAgICAgICAgICAgICBncmlkLWdhcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogbWlubWF4KGF1dG8sMTUwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICB0aGlzLm1vZGVscyA9IHRoaXMuaXRlbXMubWFwKGVsZT0+XHJcbiAgICAgICAgICAgIDxEcm9wZG93biBrZXk9e2VsZX0gcmVmPXtyZWY9Pih0aGlzW2VsZV0gPSByZWYpfSB0aXRsZT17ZWxlfS8+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPEJhcj5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5HYWxsZXJ5PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgIDxoMT5HYWxsZXJ5PC9oMT5cclxuICAgICAgICAgICAge3RoaXMubW9kZWxzfVxyXG4gICAgICAgIDwvQmFyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=