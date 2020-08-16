webpackHotUpdate("static\\development\\pages\\gallery.js",{

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





var _jsxFileName = "C:\\Users\\Asamoah Family\\Documents\\myWebsite\\src\\pages\\gallery.js";

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
    _this.items = ['Logo_light', 'Logo_dark', 'Torch', 'Controller'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwicHJvcHMiLCJpdGVtcyIsIm1vZGVscyIsIm1hcCIsImVsZSIsIk1vZGVsIiwiaW5kZXgiLCJtb2RlbE5hbWUiLCJhZGRDaGlsZCIsInN0eWxlIiwicmVmIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTzs7Ozs7QUFFRixtQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLENBQUMsWUFBRCxFQUFjLFdBQWQsRUFBMEIsT0FBMUIsRUFBbUMsWUFBbkMsQ0FBYjtBQUZjO0FBR2pCOzs7O3dDQUVrQjtBQUNmLFVBQU1DLE1BQU0sR0FBRyxLQUFLRCxLQUFMLENBQVdFLEdBQVgsQ0FBZSxVQUFBQyxHQUFHO0FBQUEsZUFBRSxJQUFJQyxrREFBSixDQUFVRCxHQUFWLENBQUY7QUFBQSxPQUFsQixDQUFmO0FBRUEsVUFBSUUsS0FBSyxHQUFHLENBQVo7O0FBSGUsaURBSU0sS0FBS0wsS0FKWDtBQUFBOztBQUFBO0FBSWYsNERBQWdDO0FBQUEsY0FBeEJNLFNBQXdCO0FBQzVCLGVBQUtBLFNBQUwsRUFBZ0JDLFFBQWhCLENBQXlCTixNQUFNLENBQUNJLEtBQUssRUFBTixDQUEvQjtBQUNIO0FBTmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFsQjs7OzZCQUVPO0FBQUE7O0FBRUosVUFBTUcsS0FBSyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK05BQWQ7O0FBU0EsV0FBS1AsTUFBTCxHQUFjLEtBQUtELEtBQUwsQ0FBV0UsR0FBWCxDQUFlLFVBQUFDLEdBQUc7QUFBQSxlQUM1QixNQUFDLGtFQUFEO0FBQVUsYUFBRyxFQUFFQSxHQUFmO0FBQW9CLGFBQUcsRUFBRSxhQUFBTSxJQUFHO0FBQUEsbUJBQUcsTUFBSSxDQUFDTixHQUFELENBQUosR0FBWU0sSUFBZjtBQUFBLFdBQTVCO0FBQWlELGVBQUssRUFBRU4sR0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUQ0QjtBQUFBLE9BQWxCLENBQWQ7QUFJQSxhQUFPLG1FQUNQLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosRUFLSyxLQUFLRixNQUxWLENBRE8sQ0FBUDtBQVNIOzs7O0VBekNpQlMsNENBQUssQ0FBQ0MsUzs7QUE0Q2JiLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYWxsZXJ5LmpzLjBlMzNjY2QzZGQ5MzgzMDc2NWQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NyYy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IEJhciBmcm9tICdzcmMvY29tcG9uZW50cy9zdGlja3lCYXIuanMnO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdzcmMvY29tcG9uZW50cy9kcm9wZG93bi5qcyc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICdzcmMvbW9kZWwnO1xyXG5cclxuY2xhc3MgR2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbJ0xvZ29fbGlnaHQnLCdMb2dvX2RhcmsnLCdUb3JjaCcsICdDb250cm9sbGVyJ107XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCBtb2RlbHMgPSB0aGlzLml0ZW1zLm1hcChlbGU9Pm5ldyBNb2RlbChlbGUpKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IobGV0IG1vZGVsTmFtZSBvZiB0aGlzLml0ZW1zKXtcclxuICAgICAgICAgICAgdGhpc1ttb2RlbE5hbWVdLmFkZENoaWxkKG1vZGVsc1tpbmRleCsrXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSA8c3R5bGU+e2BcclxuICAgICAgICAgICAgI2dyaWR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZjtcclxuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoYXV0bywxNTBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIHRoaXMubW9kZWxzID0gdGhpcy5pdGVtcy5tYXAoZWxlPT5cclxuICAgICAgICAgICAgPERyb3Bkb3duIGtleT17ZWxlfSByZWY9e3JlZj0+KHRoaXNbZWxlXSA9IHJlZil9IHRpdGxlPXtlbGV9Lz5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICA8QmFyPlxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkdhbGxlcnk8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxyXG4gICAgICAgICAgICB7dGhpcy5tb2RlbHN9XHJcbiAgICAgICAgPC9CYXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==