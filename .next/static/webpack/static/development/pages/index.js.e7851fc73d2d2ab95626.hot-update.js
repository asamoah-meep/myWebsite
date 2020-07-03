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

    //this.filePath = `../public/models/${fileName}.gltf`;
    this.filePath = "".concat(fileName, ".gltf");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJmaWxlTmFtZSIsImZpbGVQYXRoIiwic2NlbmUiLCJUSFJFRSIsImNhbWVyYSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZ2FtbWFPdXRwdXQiLCJnYW1tYUZhY3RvciIsInRvcExpZ2h0Iiwic2V0IiwiYm90dG9tTGlnaHQiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwiT3JiaXRDb250cm9scyIsIlJhd09yYml0Q29udHJvbHMiLCJjb250cm9sbGVyIiwiZG9tRWxlbWVudCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJsb2FkIiwiZ2x0ZiIsImxvZ28iLCJyb3RhdGlvbiIsInkiLCJNYXRoIiwiUEkiLCJzY2FsZSIsImFkZCIsInhociIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEs7QUFFRixpQkFBWUMsUUFBWixFQUFxQjtBQUFBOztBQUNqQjtBQUVBLFNBQUtDLFFBQUwsYUFBbUJELFFBQW5CO0FBQ0EsU0FBS0UsS0FBTCxHQUFhLElBQUlDLDJDQUFKLEVBQWI7QUFFQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUQsdURBQUosQ0FBNEIsRUFBNUIsRUFBK0JFLE1BQU0sQ0FBQ0MsV0FBUCxHQUFtQkQsTUFBTSxDQUFDQyxXQUF6RCxFQUFxRSxFQUFyRSxFQUF3RSxJQUF4RSxDQUFkO0FBQ0EsU0FBS0YsTUFBTCxDQUFZRyxRQUFaLENBQXFCQyxDQUFyQixHQUF5QixDQUF6QjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSU4sbURBQUosQ0FBd0I7QUFBQ08sZUFBUyxFQUFDLElBQVg7QUFBZ0JDLFdBQUssRUFBQztBQUF0QixLQUF4QixDQUFoQjtBQUNBLFNBQUtGLFFBQUwsQ0FBY0csT0FBZCxDQUFzQixHQUF0QixFQUEwQixHQUExQjtBQUNBLFNBQUtILFFBQUwsQ0FBY0ksYUFBZCxDQUE0QixRQUE1QixFQUFxQyxDQUFyQztBQUNBLFNBQUtKLFFBQUwsQ0FBY0ssV0FBZCxHQUEwQixJQUExQjtBQUNBLFNBQUtMLFFBQUwsQ0FBY00sV0FBZCxHQUEwQixHQUExQjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSWIsZ0RBQUosQ0FBcUIsUUFBckIsRUFBOEIsQ0FBOUIsQ0FBaEI7QUFDQSxTQUFLYSxRQUFMLENBQWNULFFBQWQsQ0FBdUJVLEdBQXZCLENBQTJCLENBQTNCLEVBQTZCLENBQTdCLEVBQStCLENBQS9CO0FBRUEsU0FBS0MsV0FBTCxHQUFtQixJQUFJZixnREFBSixDQUFxQixRQUFyQixFQUE4QixDQUE5QixDQUFuQjtBQUNBLFNBQUtlLFdBQUwsQ0FBaUJYLFFBQWpCLENBQTBCVSxHQUExQixDQUE4QixDQUE5QixFQUFnQyxDQUFoQyxFQUFrQyxDQUFDLENBQW5DO0FBRUEsU0FBS0UsTUFBTCxHQUFjLElBQUlDLHdEQUFKLEVBQWQ7QUFDSDs7OzsyQkFFSztBQUFBOztBQUVGLFVBQU1DLGFBQWEsR0FBR0MsaURBQWdCLENBQUNuQixrQ0FBRCxDQUF0QztBQUNBLFVBQU1vQixVQUFVLEdBQUcsSUFBSUYsYUFBSixDQUFrQixLQUFLakIsTUFBdkIsRUFBK0IsS0FBS0ssUUFBTCxDQUFjZSxVQUE3QyxDQUFuQjs7QUFFQSxVQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFJO0FBQ2hCQyw2QkFBcUIsQ0FBRUQsT0FBRixDQUFyQjtBQUNBRixrQkFBVSxDQUFDSSxNQUFYOztBQUNBLGFBQUksQ0FBQ2xCLFFBQUwsQ0FBY21CLE1BQWQsQ0FBc0IsS0FBSSxDQUFDMUIsS0FBM0IsRUFBa0MsS0FBSSxDQUFDRSxNQUF2QztBQUNILE9BSkQ7O0FBTUEsV0FBS2UsTUFBTCxDQUFZVSxJQUFaLENBQWlCLEtBQUs1QixRQUF0QixFQUFnQyxVQUFDNkIsSUFBRCxFQUFTO0FBQ3JDLGFBQUksQ0FBQ0MsSUFBTCxHQUFZRCxJQUFJLENBQUM1QixLQUFqQjtBQUNBLGFBQUksQ0FBQzZCLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsQ0FBbkIsR0FBcUIsQ0FBQ0MsSUFBSSxDQUFDQyxFQUFOLEdBQVMsQ0FBOUI7O0FBQ0EsYUFBSSxDQUFDSixJQUFMLENBQVVLLEtBQVYsQ0FBZ0JuQixHQUFoQixDQUFvQixDQUFwQixFQUFzQixDQUF0QixFQUF3QixDQUF4Qjs7QUFDQSxhQUFJLENBQUNmLEtBQUwsQ0FBV21DLEdBQVgsQ0FBZSxLQUFJLENBQUNOLElBQXBCOztBQUNBLGFBQUksQ0FBQzdCLEtBQUwsQ0FBV21DLEdBQVgsQ0FBZSxLQUFJLENBQUNyQixRQUFwQjs7QUFDQSxhQUFJLENBQUNkLEtBQUwsQ0FBV21DLEdBQVgsQ0FBZSxLQUFJLENBQUNuQixXQUFwQjs7QUFDQU8sZUFBTztBQUVWLE9BVEQsRUFTRSxVQUFDYSxHQUFELEVBQU87QUFDTCxlQUFPQyxTQUFQLENBREssQ0FDYTtBQUNyQixPQVhELEVBV0csVUFBQ0MsS0FBRCxFQUFVO0FBQ1RDLGVBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0gsT0FiRDtBQWNIOzs7Ozs7QUFHVXpDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lNzg1MWZjNzNkMmQyYWI5NTYyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdMVEZMb2FkZXIgZnJvbSAndGhyZWUtZ2x0Zi1sb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBSYXdPcmJpdENvbnRyb2xzIGZyb20gJ3RocmVlLW9yYml0LWNvbnRyb2xzJztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuY2xhc3MgTW9kZWx7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGZpbGVOYW1lKXtcclxuICAgICAgICAvL3RoaXMuZmlsZVBhdGggPSBgLi4vcHVibGljL21vZGVscy8ke2ZpbGVOYW1lfS5nbHRmYDtcclxuXHJcbiAgICAgICAgdGhpcy5maWxlUGF0aCA9IGAke2ZpbGVOYW1lfS5nbHRmYDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LHdpbmRvdy5pbm5lckhlaWdodC93aW5kb3cuaW5uZXJIZWlnaHQsLjEsMTAwMCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDU7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YW50aWFsaWFzOnRydWUsYWxwaGE6dHJ1ZX0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSgxMDAsMTAwKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZjAwMDAsMCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5nYW1tYU91dHB1dD10cnVlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuZ2FtbWFGYWN0b3I9Mi4yO1xyXG5cclxuICAgICAgICB0aGlzLnRvcExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsNCk7XHJcbiAgICAgICAgdGhpcy50b3BMaWdodC5wb3NpdGlvbi5zZXQoMCwwLDcpO1xyXG5cclxuICAgICAgICB0aGlzLmJvdHRvbUxpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsNCk7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MaWdodC5wb3NpdGlvbi5zZXQoMCwwLC03KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBuZXcgR0xURkxvYWRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKXtcclxuXHJcbiAgICAgICAgY29uc3QgT3JiaXRDb250cm9scyA9IFJhd09yYml0Q29udHJvbHMoVEhSRUUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSwgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpPT57XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlci5sb2FkKHRoaXMuZmlsZVBhdGgsIChnbHRmKSA9PntcclxuICAgICAgICAgICAgdGhpcy5sb2dvID0gZ2x0Zi5zY2VuZTtcclxuICAgICAgICAgICAgdGhpcy5sb2dvLnJvdGF0aW9uLnk9LU1hdGguUEkvMjtcclxuICAgICAgICAgICAgdGhpcy5sb2dvLnNjYWxlLnNldCgyLDIsMik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubG9nbyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMudG9wTGlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmJvdHRvbUxpZ2h0KTtcclxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xyXG5cclxuICAgICAgICB9LCh4aHIpPT57XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7IC8vVE9ETzogYWRkIGxvYWRpbmcgYW5pbWF0aW9uXHJcbiAgICAgICAgfSwgKGVycm9yKSA9PntcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsOyJdLCJzb3VyY2VSb290IjoiIn0=