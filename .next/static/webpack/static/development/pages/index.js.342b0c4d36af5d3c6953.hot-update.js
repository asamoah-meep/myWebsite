webpackHotUpdate("static\\development\\pages\\index.js",{

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

      console.log(this.filePath);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJmaWxlTmFtZSIsImZpbGVQYXRoIiwic2NlbmUiLCJUSFJFRSIsImNhbWVyYSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZ2FtbWFPdXRwdXQiLCJnYW1tYUZhY3RvciIsInRvcExpZ2h0Iiwic2V0IiwiYm90dG9tTGlnaHQiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwiT3JiaXRDb250cm9scyIsIlJhd09yYml0Q29udHJvbHMiLCJjb250cm9sbGVyIiwiZG9tRWxlbWVudCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwibG9hZCIsImdsdGYiLCJsb2dvIiwicm90YXRpb24iLCJ5IiwiTWF0aCIsIlBJIiwic2NhbGUiLCJhZGQiLCJ4aHIiLCJ1bmRlZmluZWQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEs7QUFFRixpQkFBWUMsUUFBWixFQUFxQjtBQUFBOztBQUNqQixTQUFLQyxRQUFMLDhCQUFvQ0QsUUFBcEM7QUFFQSxTQUFLRSxLQUFMLEdBQWEsSUFBSUMsMkNBQUosRUFBYjtBQUVBLFNBQUtDLE1BQUwsR0FBYyxJQUFJRCx1REFBSixDQUE0QixFQUE1QixFQUErQkUsTUFBTSxDQUFDQyxXQUFQLEdBQW1CRCxNQUFNLENBQUNDLFdBQXpELEVBQXFFLEVBQXJFLEVBQXdFLElBQXhFLENBQWQ7QUFDQSxTQUFLRixNQUFMLENBQVlHLFFBQVosQ0FBcUJDLENBQXJCLEdBQXlCLENBQXpCO0FBRUEsU0FBS0MsUUFBTCxHQUFnQixJQUFJTixtREFBSixDQUF3QjtBQUFDTyxlQUFTLEVBQUMsSUFBWDtBQUFnQkMsV0FBSyxFQUFDO0FBQXRCLEtBQXhCLENBQWhCO0FBQ0EsU0FBS0YsUUFBTCxDQUFjRyxPQUFkLENBQXNCLEdBQXRCLEVBQTBCLEdBQTFCO0FBQ0EsU0FBS0gsUUFBTCxDQUFjSSxhQUFkLENBQTRCLFFBQTVCLEVBQXFDLENBQXJDO0FBQ0EsU0FBS0osUUFBTCxDQUFjSyxXQUFkLEdBQTBCLElBQTFCO0FBQ0EsU0FBS0wsUUFBTCxDQUFjTSxXQUFkLEdBQTBCLEdBQTFCO0FBRUEsU0FBS0MsUUFBTCxHQUFnQixJQUFJYixnREFBSixDQUFxQixRQUFyQixFQUE4QixDQUE5QixDQUFoQjtBQUNBLFNBQUthLFFBQUwsQ0FBY1QsUUFBZCxDQUF1QlUsR0FBdkIsQ0FBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsRUFBK0IsQ0FBL0I7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLElBQUlmLGdEQUFKLENBQXFCLFFBQXJCLEVBQThCLENBQTlCLENBQW5CO0FBQ0EsU0FBS2UsV0FBTCxDQUFpQlgsUUFBakIsQ0FBMEJVLEdBQTFCLENBQThCLENBQTlCLEVBQWdDLENBQWhDLEVBQWtDLENBQUMsQ0FBbkM7QUFFQSxTQUFLRSxNQUFMLEdBQWMsSUFBSUMsd0RBQUosRUFBZDtBQUNIOzs7OzJCQUVLO0FBQUE7O0FBRUYsVUFBTUMsYUFBYSxHQUFHQyxpREFBZ0IsQ0FBQ25CLGtDQUFELENBQXRDO0FBQ0EsVUFBTW9CLFVBQVUsR0FBRyxJQUFJRixhQUFKLENBQWtCLEtBQUtqQixNQUF2QixFQUErQixLQUFLSyxRQUFMLENBQWNlLFVBQTdDLENBQW5COztBQUVBLFVBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQUk7QUFDaEJDLDZCQUFxQixDQUFFRCxPQUFGLENBQXJCO0FBQ0FGLGtCQUFVLENBQUNJLE1BQVg7O0FBQ0EsYUFBSSxDQUFDbEIsUUFBTCxDQUFjbUIsTUFBZCxDQUFzQixLQUFJLENBQUMxQixLQUEzQixFQUFrQyxLQUFJLENBQUNFLE1BQXZDO0FBQ0gsT0FKRDs7QUFPQXlCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUs3QixRQUFqQjtBQUNBLFdBQUtrQixNQUFMLENBQVlZLElBQVosQ0FBaUIsS0FBSzlCLFFBQXRCLEVBQWdDLFVBQUMrQixJQUFELEVBQVM7QUFDckMsYUFBSSxDQUFDQyxJQUFMLEdBQVlELElBQUksQ0FBQzlCLEtBQWpCO0FBQ0EsYUFBSSxDQUFDK0IsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxDQUFuQixHQUFxQixDQUFDQyxJQUFJLENBQUNDLEVBQU4sR0FBUyxDQUE5Qjs7QUFDQSxhQUFJLENBQUNKLElBQUwsQ0FBVUssS0FBVixDQUFnQnJCLEdBQWhCLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLENBQXhCOztBQUNBLGFBQUksQ0FBQ2YsS0FBTCxDQUFXcUMsR0FBWCxDQUFlLEtBQUksQ0FBQ04sSUFBcEI7O0FBQ0EsYUFBSSxDQUFDL0IsS0FBTCxDQUFXcUMsR0FBWCxDQUFlLEtBQUksQ0FBQ3ZCLFFBQXBCOztBQUNBLGFBQUksQ0FBQ2QsS0FBTCxDQUFXcUMsR0FBWCxDQUFlLEtBQUksQ0FBQ3JCLFdBQXBCOztBQUNBTyxlQUFPO0FBRVYsT0FURCxFQVNFLFVBQUNlLEdBQUQsRUFBTztBQUNMLGVBQU9DLFNBQVAsQ0FESyxDQUNhO0FBQ3JCLE9BWEQsRUFXRyxVQUFDQyxLQUFELEVBQVU7QUFDVGIsZUFBTyxDQUFDYSxLQUFSLENBQWNBLEtBQWQ7QUFDSCxPQWJEO0FBY0g7Ozs7OztBQUdVM0Msb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjM0MmIwYzRkMzZhZjVkM2M2OTUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR0xURkxvYWRlciBmcm9tICd0aHJlZS1nbHRmLWxvYWRlcic7XHJcbmltcG9ydCAqIGFzIFJhd09yYml0Q29udHJvbHMgZnJvbSAndGhyZWUtb3JiaXQtY29udHJvbHMnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5jbGFzcyBNb2RlbHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWUpe1xyXG4gICAgICAgIHRoaXMuZmlsZVBhdGggPSBgLi4vcHVibGljL21vZGVscy8ke2ZpbGVOYW1lfS5nbHRmYDtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSx3aW5kb3cuaW5uZXJIZWlnaHQvd2luZG93LmlubmVySGVpZ2h0LC4xLDEwMDApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczp0cnVlLGFscGhhOnRydWV9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoMTAwLDEwMCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmYwMDAwLDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmdhbW1hRmFjdG9yPTIuMjtcclxuXHJcbiAgICAgICAgdGhpcy50b3BMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLDQpO1xyXG4gICAgICAgIHRoaXMudG9wTGlnaHQucG9zaXRpb24uc2V0KDAsMCw3KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3R0b21MaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLDQpO1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGlnaHQucG9zaXRpb24uc2V0KDAsMCwtNyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IE9yYml0Q29udHJvbHMgPSBSYXdPcmJpdENvbnRyb2xzKFRIUkVFKTtcclxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZVBhdGgpO1xyXG4gICAgICAgIHRoaXMubG9hZGVyLmxvYWQodGhpcy5maWxlUGF0aCwgKGdsdGYpID0+e1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28gPSBnbHRmLnNjZW5lO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28ucm90YXRpb24ueT0tTWF0aC5QSS8yO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28uc2NhbGUuc2V0KDIsMiwyKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5sb2dvKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy50b3BMaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuYm90dG9tTGlnaHQpO1xyXG4gICAgICAgICAgICBhbmltYXRlKCk7XHJcblxyXG4gICAgICAgIH0sKHhocik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsgLy9UT0RPOiBhZGQgbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICB9LCAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==