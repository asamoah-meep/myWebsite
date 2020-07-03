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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwuanMiXSwibmFtZXMiOlsiTW9kZWwiLCJmaWxlTmFtZSIsImZpbGVQYXRoIiwic2NlbmUiLCJUSFJFRSIsImNhbWVyYSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiZ2FtbWFPdXRwdXQiLCJnYW1tYUZhY3RvciIsInRvcExpZ2h0Iiwic2V0IiwiYm90dG9tTGlnaHQiLCJsb2FkZXIiLCJHTFRGTG9hZGVyIiwiT3JiaXRDb250cm9scyIsIlJhd09yYml0Q29udHJvbHMiLCJjb250cm9sbGVyIiwiZG9tRWxlbWVudCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJsb2FkIiwiZ2x0ZiIsImxvZ28iLCJyb3RhdGlvbiIsInkiLCJNYXRoIiwiUEkiLCJzY2FsZSIsImFkZCIsInhociIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEs7QUFFRixpQkFBWUMsUUFBWixFQUFxQjtBQUFBOztBQUNqQjtBQUVBLFNBQUtDLFFBQUwsYUFBbUJELFFBQW5CO0FBQ0EsU0FBS0UsS0FBTCxHQUFhLElBQUlDLDJDQUFKLEVBQWI7QUFFQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUQsdURBQUosQ0FBNEIsRUFBNUIsRUFBK0JFLE1BQU0sQ0FBQ0MsV0FBUCxHQUFtQkQsTUFBTSxDQUFDQyxXQUF6RCxFQUFxRSxFQUFyRSxFQUF3RSxJQUF4RSxDQUFkO0FBQ0EsU0FBS0YsTUFBTCxDQUFZRyxRQUFaLENBQXFCQyxDQUFyQixHQUF5QixDQUF6QjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSU4sbURBQUosQ0FBd0I7QUFBQ08sZUFBUyxFQUFDLElBQVg7QUFBZ0JDLFdBQUssRUFBQztBQUF0QixLQUF4QixDQUFoQjtBQUNBLFNBQUtGLFFBQUwsQ0FBY0csT0FBZCxDQUFzQixHQUF0QixFQUEwQixHQUExQjtBQUNBLFNBQUtILFFBQUwsQ0FBY0ksYUFBZCxDQUE0QixRQUE1QixFQUFxQyxDQUFyQztBQUNBLFNBQUtKLFFBQUwsQ0FBY0ssV0FBZCxHQUEwQixJQUExQjtBQUNBLFNBQUtMLFFBQUwsQ0FBY00sV0FBZCxHQUEwQixHQUExQjtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSWIsZ0RBQUosQ0FBcUIsUUFBckIsRUFBOEIsQ0FBOUIsQ0FBaEI7QUFDQSxTQUFLYSxRQUFMLENBQWNULFFBQWQsQ0FBdUJVLEdBQXZCLENBQTJCLENBQTNCLEVBQTZCLENBQTdCLEVBQStCLENBQS9CO0FBRUEsU0FBS0MsV0FBTCxHQUFtQixJQUFJZixnREFBSixDQUFxQixRQUFyQixFQUE4QixDQUE5QixDQUFuQjtBQUNBLFNBQUtlLFdBQUwsQ0FBaUJYLFFBQWpCLENBQTBCVSxHQUExQixDQUE4QixDQUE5QixFQUFnQyxDQUFoQyxFQUFrQyxDQUFDLENBQW5DO0FBRUEsU0FBS0UsTUFBTCxHQUFjLElBQUlDLHdEQUFKLEVBQWQ7QUFDSDs7OzsyQkFFSztBQUFBOztBQUVGLFVBQU1DLGFBQWEsR0FBR0MsaURBQWdCLENBQUNuQixrQ0FBRCxDQUF0QztBQUNBLFVBQU1vQixVQUFVLEdBQUcsSUFBSUYsYUFBSixDQUFrQixLQUFLakIsTUFBdkIsRUFBK0IsS0FBS0ssUUFBTCxDQUFjZSxVQUE3QyxDQUFuQjs7QUFFQSxVQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFJO0FBQ2hCQyw2QkFBcUIsQ0FBRUQsT0FBRixDQUFyQjtBQUNBRixrQkFBVSxDQUFDSSxNQUFYOztBQUNBLGFBQUksQ0FBQ2xCLFFBQUwsQ0FBY21CLE1BQWQsQ0FBc0IsS0FBSSxDQUFDMUIsS0FBM0IsRUFBa0MsS0FBSSxDQUFDRSxNQUF2QztBQUNILE9BSkQ7O0FBTUEsV0FBS2UsTUFBTCxDQUFZVSxJQUFaLENBQWlCLEtBQUs1QixRQUF0QixFQUFnQyxVQUFDNkIsSUFBRCxFQUFTO0FBQ3JDLGFBQUksQ0FBQ0MsSUFBTCxHQUFZRCxJQUFJLENBQUM1QixLQUFqQjtBQUNBLGFBQUksQ0FBQzZCLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsQ0FBbkIsR0FBcUIsQ0FBQ0MsSUFBSSxDQUFDQyxFQUFOLEdBQVMsQ0FBOUI7O0FBQ0EsYUFBSSxDQUFDSixJQUFMLENBQVVLLEtBQVYsQ0FBZ0JuQixHQUFoQixDQUFvQixDQUFwQixFQUFzQixDQUF0QixFQUF3QixDQUF4Qjs7QUFDQSxhQUFJLENBQUNmLEtBQUwsQ0FBV21DLEdBQVgsQ0FBZSxLQUFJLENBQUNOLElBQXBCOztBQUNBLGFBQUksQ0FBQzdCLEtBQUwsQ0FBV21DLEdBQVgsQ0FBZSxLQUFJLENBQUNyQixRQUFwQjs7QUFDQSxhQUFJLENBQUNkLEtBQUwsQ0FBV21DLEdBQVgsQ0FBZSxLQUFJLENBQUNuQixXQUFwQjs7QUFDQU8sZUFBTztBQUVWLE9BVEQsRUFTRSxVQUFDYSxHQUFELEVBQU87QUFDTCxlQUFPQyxTQUFQLENBREssQ0FDYTtBQUNyQixPQVhELEVBV0csVUFBQ0MsS0FBRCxFQUFVO0FBQ1RDLGVBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0gsT0FiRDtBQWNIOzs7Ozs7QUFHVXpDLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxnYWxsZXJ5LmpzLmU3ODUxZmM3M2QyZDJhYjk1NjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR0xURkxvYWRlciBmcm9tICd0aHJlZS1nbHRmLWxvYWRlcic7XHJcbmltcG9ydCAqIGFzIFJhd09yYml0Q29udHJvbHMgZnJvbSAndGhyZWUtb3JiaXQtY29udHJvbHMnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5jbGFzcyBNb2RlbHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZmlsZU5hbWUpe1xyXG4gICAgICAgIC8vdGhpcy5maWxlUGF0aCA9IGAuLi9wdWJsaWMvbW9kZWxzLyR7ZmlsZU5hbWV9LmdsdGZgO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVQYXRoID0gYCR7ZmlsZU5hbWV9LmdsdGZgO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsd2luZG93LmlubmVySGVpZ2h0L3dpbmRvdy5pbm5lckhlaWdodCwuMSwxMDAwKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6dHJ1ZSxhbHBoYTp0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKDEwMCwxMDApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmMDAwMCwwKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmdhbW1hT3V0cHV0PXRydWU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5nYW1tYUZhY3Rvcj0yLjI7XHJcblxyXG4gICAgICAgIHRoaXMudG9wTGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiw0KTtcclxuICAgICAgICB0aGlzLnRvcExpZ2h0LnBvc2l0aW9uLnNldCgwLDAsNyk7XHJcblxyXG4gICAgICAgIHRoaXMuYm90dG9tTGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiw0KTtcclxuICAgICAgICB0aGlzLmJvdHRvbUxpZ2h0LnBvc2l0aW9uLnNldCgwLDAsLTcpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpe1xyXG5cclxuICAgICAgICBjb25zdCBPcmJpdENvbnRyb2xzID0gUmF3T3JiaXRDb250cm9scyhUSFJFRSk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRlID0gKCk9PntcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyLmxvYWQodGhpcy5maWxlUGF0aCwgKGdsdGYpID0+e1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28gPSBnbHRmLnNjZW5lO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28ucm90YXRpb24ueT0tTWF0aC5QSS8yO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ28uc2NhbGUuc2V0KDIsMiwyKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5sb2dvKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy50b3BMaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuYm90dG9tTGlnaHQpO1xyXG4gICAgICAgICAgICBhbmltYXRlKCk7XHJcblxyXG4gICAgICAgIH0sKHhocik9PntcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsgLy9UT0RPOiBhZGQgbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICB9LCAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7Il0sInNvdXJjZVJvb3QiOiIifQ==