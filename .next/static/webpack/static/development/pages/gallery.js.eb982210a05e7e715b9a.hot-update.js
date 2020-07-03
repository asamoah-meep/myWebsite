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

    //this.filePath = `../public/models/${fileName}.gltf`;
    this.filePath = 'fileName.glft';
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJmaWxlTmFtZSIsImZpbGVQYXRoIiwic2NlbmUiLCJUSFJFRSIsImNhbWVyYSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZ2FtbWFPdXRwdXQiLCJnYW1tYUZhY3RvciIsInRvcExpZ2h0Iiwic2V0IiwiYm90dG9tTGlnaHQiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwiT3JiaXRDb250cm9scyIsIlJhd09yYml0Q29udHJvbHMiLCJjb250cm9sbGVyIiwiZG9tRWxlbWVudCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJsb2FkIiwiZ2x0ZiIsImxvZ28iLCJyb3RhdGlvbiIsInkiLCJNYXRoIiwiUEkiLCJzY2FsZSIsImFkZCIsInhociIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEs7QUFFRixpQkFBWUMsUUFBWixFQUFxQjtBQUFBOztBQUNqQjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsZUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBSUMsMkNBQUosRUFBYjtBQUVBLFNBQUtDLE1BQUwsR0FBYyxJQUFJRCx1REFBSixDQUE0QixFQUE1QixFQUErQkUsTUFBTSxDQUFDQyxXQUFQLEdBQW1CRCxNQUFNLENBQUNDLFdBQXpELEVBQXFFLEVBQXJFLEVBQXdFLElBQXhFLENBQWQ7QUFDQSxTQUFLRixNQUFMLENBQVlHLFFBQVosQ0FBcUJDLENBQXJCLEdBQXlCLENBQXpCO0FBRUEsU0FBS0MsUUFBTCxHQUFnQixJQUFJTixtREFBSixDQUF3QjtBQUFDTyxlQUFTLEVBQUMsSUFBWDtBQUFnQkMsV0FBSyxFQUFDO0FBQXRCLEtBQXhCLENBQWhCO0FBQ0EsU0FBS0YsUUFBTCxDQUFjRyxPQUFkLENBQXNCLEdBQXRCLEVBQTBCLEdBQTFCO0FBQ0EsU0FBS0gsUUFBTCxDQUFjSSxhQUFkLENBQTRCLFFBQTVCLEVBQXFDLENBQXJDO0FBQ0EsU0FBS0osUUFBTCxDQUFjSyxXQUFkLEdBQTBCLElBQTFCO0FBQ0EsU0FBS0wsUUFBTCxDQUFjTSxXQUFkLEdBQTBCLEdBQTFCO0FBRUEsU0FBS0MsUUFBTCxHQUFnQixJQUFJYixnREFBSixDQUFxQixRQUFyQixFQUE4QixDQUE5QixDQUFoQjtBQUNBLFNBQUthLFFBQUwsQ0FBY1QsUUFBZCxDQUF1QlUsR0FBdkIsQ0FBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsRUFBK0IsQ0FBL0I7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLElBQUlmLGdEQUFKLENBQXFCLFFBQXJCLEVBQThCLENBQTlCLENBQW5CO0FBQ0EsU0FBS2UsV0FBTCxDQUFpQlgsUUFBakIsQ0FBMEJVLEdBQTFCLENBQThCLENBQTlCLEVBQWdDLENBQWhDLEVBQWtDLENBQUMsQ0FBbkM7QUFFQSxTQUFLRSxNQUFMLEdBQWMsSUFBSUMsd0RBQUosRUFBZDtBQUNIOzs7OzJCQUVLO0FBQUE7O0FBRUYsVUFBTUMsYUFBYSxHQUFHQyxpREFBZ0IsQ0FBQ25CLGtDQUFELENBQXRDO0FBQ0EsVUFBTW9CLFVBQVUsR0FBRyxJQUFJRixhQUFKLENBQWtCLEtBQUtqQixNQUF2QixFQUErQixLQUFLSyxRQUFMLENBQWNlLFVBQTdDLENBQW5COztBQUVBLFVBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQUk7QUFDaEJDLDZCQUFxQixDQUFFRCxPQUFGLENBQXJCO0FBQ0FGLGtCQUFVLENBQUNJLE1BQVg7O0FBQ0EsYUFBSSxDQUFDbEIsUUFBTCxDQUFjbUIsTUFBZCxDQUFzQixLQUFJLENBQUMxQixLQUEzQixFQUFrQyxLQUFJLENBQUNFLE1BQXZDO0FBQ0gsT0FKRDs7QUFNQSxXQUFLZSxNQUFMLENBQVlVLElBQVosQ0FBaUIsS0FBSzVCLFFBQXRCLEVBQWdDLFVBQUM2QixJQUFELEVBQVM7QUFDckMsYUFBSSxDQUFDQyxJQUFMLEdBQVlELElBQUksQ0FBQzVCLEtBQWpCO0FBQ0EsYUFBSSxDQUFDNkIsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxDQUFuQixHQUFxQixDQUFDQyxJQUFJLENBQUNDLEVBQU4sR0FBUyxDQUE5Qjs7QUFDQSxhQUFJLENBQUNKLElBQUwsQ0FBVUssS0FBVixDQUFnQm5CLEdBQWhCLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLENBQXhCOztBQUNBLGFBQUksQ0FBQ2YsS0FBTCxDQUFXbUMsR0FBWCxDQUFlLEtBQUksQ0FBQ04sSUFBcEI7O0FBQ0EsYUFBSSxDQUFDN0IsS0FBTCxDQUFXbUMsR0FBWCxDQUFlLEtBQUksQ0FBQ3JCLFFBQXBCOztBQUNBLGFBQUksQ0FBQ2QsS0FBTCxDQUFXbUMsR0FBWCxDQUFlLEtBQUksQ0FBQ25CLFdBQXBCOztBQUNBTyxlQUFPO0FBRVYsT0FURCxFQVNFLFVBQUNhLEdBQUQsRUFBTztBQUNMLGVBQU9DLFNBQVAsQ0FESyxDQUNhO0FBQ3JCLE9BWEQsRUFXRyxVQUFDQyxLQUFELEVBQVU7QUFDVEMsZUFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDSCxPQWJEO0FBY0g7Ozs7OztBQUdVekMsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdhbGxlcnkuanMuZWI5ODIyMTBhMDVlN2U3MTViOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHTFRGTG9hZGVyIGZyb20gJ3RocmVlLWdsdGYtbG9hZGVyJztcclxuaW1wb3J0ICogYXMgUmF3T3JiaXRDb250cm9scyBmcm9tICd0aHJlZS1vcmJpdC1jb250cm9scyc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmNsYXNzIE1vZGVse1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihmaWxlTmFtZSl7XHJcbiAgICAgICAgLy90aGlzLmZpbGVQYXRoID0gYC4uL3B1YmxpYy9tb2RlbHMvJHtmaWxlTmFtZX0uZ2x0ZmA7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZVBhdGggPSAnZmlsZU5hbWUuZ2xmdCc7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSx3aW5kb3cuaW5uZXJIZWlnaHQvd2luZG93LmlubmVySGVpZ2h0LC4xLDEwMDApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczp0cnVlLGFscGhhOnRydWV9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUoMTAwLDEwMCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmYwMDAwLDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFPdXRwdXQ9dHJ1ZTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmdhbW1hRmFjdG9yPTIuMjtcclxuXHJcbiAgICAgICAgdGhpcy50b3BMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLDQpO1xyXG4gICAgICAgIHRoaXMudG9wTGlnaHQucG9zaXRpb24uc2V0KDAsMCw3KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3R0b21MaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmLDQpO1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGlnaHQucG9zaXRpb24uc2V0KDAsMCwtNyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IE9yYml0Q29udHJvbHMgPSBSYXdPcmJpdENvbnRyb2xzKFRIUkVFKTtcclxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkZXIubG9hZCh0aGlzLmZpbGVQYXRoLCAoZ2x0ZikgPT57XHJcbiAgICAgICAgICAgIHRoaXMubG9nbyA9IGdsdGYuc2NlbmU7XHJcbiAgICAgICAgICAgIHRoaXMubG9nby5yb3RhdGlvbi55PS1NYXRoLlBJLzI7XHJcbiAgICAgICAgICAgIHRoaXMubG9nby5zY2FsZS5zZXQoMiwyLDIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmxvZ28pO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnRvcExpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5ib3R0b21MaWdodCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGUoKTtcclxuXHJcbiAgICAgICAgfSwoeGhyKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAvL1RPRE86IGFkZCBsb2FkaW5nIGFuaW1hdGlvblxyXG4gICAgICAgIH0sIChlcnJvcikgPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbDsiXSwic291cmNlUm9vdCI6IiJ9