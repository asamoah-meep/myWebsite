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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/dropdown.js */ "./components/dropdown.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! three-gltf-loader */ "./node_modules/three-gltf-loader/index.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(three_gltf_loader__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\stickyBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








var StickyBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StickyBar, _React$Component);

  function StickyBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StickyBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StickyBar).call(this, props));
    _this.toggleTheme = _this.toggleTheme.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      theme: 'on'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StickyBar, [{
    key: "toggleTheme",
    value: function toggleTheme(evt) {
      console.log(evt.target.value);
      this.setState(function (oldState) {
        var newTheme = "";
        oldState.theme === 'on' ? newTheme = 'off' : newTheme = 'on';
        return {
          theme: newTheme
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var scene = new three__WEBPACK_IMPORTED_MODULE_10__["Scene"]();
      var camera = new three__WEBPACK_IMPORTED_MODULE_10__["PerspectiveCamera"](75, window.innerHeight / window.innerHeight, .1, 1000);
      camera.position.z = 5;
      camera.position.x = -1;
      var renderer = new three__WEBPACK_IMPORTED_MODULE_10__["WebGLRenderer"]({
        antialias: true,
        alpha: true
      });
      renderer.setSize(100, 100);
      renderer.setClearColor(0xffffff, 0);
      renderer.gammaOutput = true;
      renderer.gammaFactor = 2.2;
      this.mount.appendChild(renderer.domElement);
      var loader = new three_gltf_loader__WEBPACK_IMPORTED_MODULE_12___default.a();
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
      var _this2 = this;

      var contact = __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "E-mail: ja3180@nyu.edu"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Telephone: 914-224-6241"), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Github"));

      var projects = __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/#TimelineHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Tutor Timeline"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/#KMeansHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "K-Means Demo"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/#WebsiteHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "This Website"))));

      var bar = __jsx("div", {
        id: "stickyBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        id: "logoMount",
        ref: function ref(_ref) {
          return _this2.mount = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx("h1", {
        style: {
          position: "relative",
          left: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Jeffrey"), __jsx("h1", {
        style: {
          position: "relative",
          left: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Asamoah"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("a", {
        className: "subHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faHome"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), " Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("a", {
        className: "subHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faAddressCard"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), " About")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faTasks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Projects",
        barDropdown: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, projects), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faEnvelope"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Contact and Media",
        barDropdown: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, contact), __jsx("div", {
        id: "toggleTheme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx("span", {
        style: {
          visibility: this.state.theme === 'on' ? 'visible' : 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Light"), __jsx("label", {
        className: "switch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        value: this.state.theme,
        onChange: this.toggleTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx("span", {
        className: "slider round",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), __jsx("span", {
        style: {
          visibility: this.state.theme === 'off' ? 'visible' : 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Dark")));

      var style = __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "\n\n            #logoMount{\n                height:75px;\n            }\n\n            .barIcon{\n                color: #D9B08C;\n                display:inline-block;\n                position:relative;\n                right:5px;\n            }\n\n            .barDropdown{\n                display:inline-block;\n            }\n\n            #stickyBar{\n                vertical-align:top;\n                position: relative;\n                display:inline-block;\n                left:20px;\n                width:250px;\n                margin-right: 5px;\n                margin-top:5px;\n            }\n            .subHeading{\n                font-family: NunitoItalic;\n                color: #D9B08C;\n                display: block;\n                font-size: 1.5rem;\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n                margin-inline-start: 0px;\n                margin-inline-end: 0px;\n                font-weight: bold;\n            }\n\n            #toggleTheme{\n                position:relative;\n                left:10%;\n            }\n            \n            #toggleTheme span{\n                padding:10px;\n            }\n\n            .switch {\n                position: relative;\n                display: inline-block;\n                width: 60px;\n                height: 34px;\n            }\n\n            .switch input {\n                opacity: 0;\n                width: 0;\n                height: 0;\n            }\n\n            .slider {\n                position: absolute;\n                cursor: pointer;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: #ccc;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            .slider:before {\n                position: absolute;\n                content: \"\";\n                height: 26px;\n                width: 26px;\n                left: 4px;\n                bottom: 4px;\n                background-color: white;\n                -webkit-transition: .4s;\n                transition: .4s;\n            }\n\n            input[type='checkbox']:not(:checked) + .slider{\n                background-color: #F78888;\n            }\n\n            input[type='checkbox']:checked + .slider {\n                background-color: #2F4454;\n            }\n\n            input:focus + .slider {\n                box-shadow: 0 0 1px #15DB95;\n            }\n\n            input:checked + .slider:before {\n                -webkit-transform: translateX(26px);\n                -ms-transform: translateX(26px);\n                transform: translateX(26px);\n            }\n\n            .slider.round {\n                border-radius: 34px;\n            }\n\n            .slider.round:before {\n                border-radius: 50%;\n            }\n        ");

      var light = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3636536621",
        __self: this
      }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxteVdlYnNpdGVcXGNvbXBvbmVudHNcXHN0aWNreUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0TnlDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxteVdlYnNpdGVcXGNvbXBvbmVudHNcXHN0aWNreUJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAnc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ2NvbXBvbmVudHMvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgR0xURkxvYWRlciBmcm9tICd0aHJlZS1nbHRmLWxvYWRlcic7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7ZmFIb21lLCBmYUFkZHJlc3NDYXJkLGZhRW52ZWxvcGUsZmFUYXNrc30gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuY2xhc3MgU3RpY2t5QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlVGhlbWUgPSB0aGlzLnRvZ2dsZVRoZW1lLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICB0aGVtZTogJ29uJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVUaGVtZShldnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2dC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoIChvbGRTdGF0ZSk9PntcclxuICAgICAgICAgICBsZXQgbmV3VGhlbWUgPSBcIlwiO1xyXG4gICAgICAgICAgIG9sZFN0YXRlLnRoZW1lPT09J29uJz8gbmV3VGhlbWU9J29mZic6IG5ld1RoZW1lPSdvbic7XHJcbiAgICAgICAgICAgcmV0dXJuIHt0aGVtZTpuZXdUaGVtZX07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LHdpbmRvdy5pbm5lckhlaWdodC93aW5kb3cuaW5uZXJIZWlnaHQsLjEsMTAwMCk7XHJcblxyXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNTtcclxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IC0xO1xyXG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczp0cnVlLGFscGhhOnRydWV9KTtcclxuICAgICAgICByZW5kZXJlci5zZXRTaXplKDEwMCwxMDApO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYsMCk7XHJcbiAgICAgICAgcmVuZGVyZXIuZ2FtbWFPdXRwdXQ9dHJ1ZTtcclxuICAgICAgICByZW5kZXJlci5nYW1tYUZhY3Rvcj0yLjI7XHJcbiAgICAgICAgdGhpcy5tb3VudC5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcclxuICAgICAgICBsZXQgbG9nbyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGFuaW1hdGUgKTtcclxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBsb2FkZXIubG9hZCgnL0xvZ28uZ2x0ZicsIGZ1bmN0aW9uKGdsdGYpe1xyXG4gICAgICAgICAgICBsb2dvID0gZ2x0Zi5zY2VuZTtcclxuICAgICAgICAgICAgbG9nby5yb3RhdGlvbi54PS1NYXRoLlBJLzEyO1xyXG4gICAgICAgICAgICBsb2dvLnJvdGF0aW9uLnk9TWF0aC5QSS8xMjtcclxuICAgICAgICAgICAgbG9nby5yb3RhdGlvbi56PU1hdGguUEkvNjtcclxuICAgICAgICAgICAgbG9nby5zY2FsZS5zZXQoMiwyLDIpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGQobG9nbyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGUoKTtcclxuXHJcbiAgICAgICAgfSx1bmRlZmluZWQsZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IDw+XHJcbiAgICAgICAgICAgIDxwPkUtbWFpbDogamEzMTgwQG55dS5lZHU8L3A+XHJcbiAgICAgICAgICAgIDxwPlRlbGVwaG9uZTogOTE0LTIyNC02MjQxPC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FzYW1vYWgtbWVlcFwiIHRhcmdldD1cIl9ibGFua1wiPkdpdGh1YjwvYT5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSAgICAgICAgICAgICBcclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiLyNUaW1lbGluZUhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGE+VHV0b3IgVGltZWxpbmU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi8jS01lYW5zSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5LLU1lYW5zIERlbW88L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi8jV2Vic2l0ZUhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGE+VGhpcyBXZWJzaXRlPC9hPiAgICBcclxuICAgICAgICAgICAgPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgY29uc3QgYmFyID0gPGRpdiBpZD0nc3RpY2t5QmFyJz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29Nb3VudFwiIHJlZj17cmVmPT4odGhpcy5tb3VudCA9IHJlZil9Lz5cclxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7cG9zaXRpb246XCJyZWxhdGl2ZVwiLCBsZWZ0OlwiMTJweFwifX0+SmVmZnJleTwvaDE+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgbGVmdDpcIjI1cHhcIn19PkFzYW1vYWg8L2gxPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhSG9tZX0vPiBIb21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nc3ViSGVhZGluZyc+PEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhQWRkcmVzc0NhcmR9Lz4gQWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhVGFza3N9Lz4gPERyb3Bkb3duIHRpdGxlPVwiUHJvamVjdHNcIiBiYXJEcm9wZG93bj57cHJvamVjdHN9PC9Ecm9wZG93bj48YnIvPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT0nYmFySWNvbicgaWNvbj17ZmFFbnZlbG9wZX0vPiA8RHJvcGRvd24gdGl0bGU9J0NvbnRhY3QgYW5kIE1lZGlhJyBiYXJEcm9wZG93bj57Y29udGFjdH08L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSd0b2dnbGVUaGVtZSc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3Zpc2liaWxpdHk6IHRoaXMuc3RhdGUudGhlbWU9PT0nb24nPyAndmlzaWJsZSc6ICdoaWRkZW4nfX0+TGlnaHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRoZW1lfSBvbkNoYW5nZT17dGhpcy50b2dnbGVUaGVtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3Zpc2liaWxpdHk6IHRoaXMuc3RhdGUudGhlbWU9PT0nb2ZmJz8gJ3Zpc2libGUnOiAnaGlkZGVuJ319PkRhcms8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSA8c3R5bGU+e2BcclxuXHJcbiAgICAgICAgICAgICNsb2dvTW91bnR7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NzVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJhckljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Q5QjA4QztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICByaWdodDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYXJEcm9wZG93bntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjc3RpY2t5QmFye1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjIwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YkhlYWRpbmd7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTnVuaXRvSXRhbGljO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOUIwOEM7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICN0b2dnbGVUaGVtZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDoxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICN0b2dnbGVUaGVtZSBzcGFue1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3dpdGNoIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3dpdGNoIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpub3QoOmNoZWNrZWQpICsgLnNsaWRlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzg4ODg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJGNDQ1NDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzE1REI5NTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+ICAgICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdCBsaWdodCA9IDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgYH08L3N0eWxlPjtcclxuXHJcbiAgICAgICAgY29uc3QgZGFyayA9IDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZDQjlBO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgY29sb3I6ICNEOUIwOEM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAsYSxzcGFuLGxpLGRpdntcclxuICAgICAgICAgICAgY1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgIHtzdHlsZX1cclxuICAgICAgICAgICAge2Jhcn1cclxuICAgICAgICA8Lz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0aWNreUJhcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Documents\\\\myWebsite\\\\components\\\\stickyBar.js */");

      var dark = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3533458767",
        __self: this
      }, "h1{color:#FFCB9A;}h3{color:#D9B08C;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG9jdW1lbnRzXFxteVdlYnNpdGVcXGNvbXBvbmVudHNcXHN0aWNreUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErTndDLEFBRzJCLEFBR0EsY0FGbEIsQUFHQSIsImZpbGUiOiJDOlxcVXNlcnNcXFVzZXJcXERvY3VtZW50c1xcbXlXZWJzaXRlXFxjb21wb25lbnRzXFxzdGlja3lCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJ3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdjb21wb25lbnRzL2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0IEdMVEZMb2FkZXIgZnJvbSAndGhyZWUtZ2x0Zi1sb2FkZXInO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lSWNvbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge2ZhSG9tZSwgZmFBZGRyZXNzQ2FyZCxmYUVudmVsb3BlLGZhVGFza3N9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmNsYXNzIFN0aWNreUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVRoZW1lID0gdGhpcy50b2dnbGVUaGVtZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgdGhlbWU6ICdvbidcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVGhlbWUoZXZ0KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhldnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCAob2xkU3RhdGUpPT57XHJcbiAgICAgICAgICAgbGV0IG5ld1RoZW1lID0gXCJcIjtcclxuICAgICAgICAgICBvbGRTdGF0ZS50aGVtZT09PSdvbic/IG5ld1RoZW1lPSdvZmYnOiBuZXdUaGVtZT0nb24nO1xyXG4gICAgICAgICAgIHJldHVybiB7dGhlbWU6bmV3VGhlbWV9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSx3aW5kb3cuaW5uZXJIZWlnaHQvd2luZG93LmlubmVySGVpZ2h0LC4xLDEwMDApO1xyXG5cclxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IDU7XHJcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSAtMTtcclxuICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6dHJ1ZSxhbHBoYTp0cnVlfSk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSgxMDAsMTAwKTtcclxuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLDApO1xyXG4gICAgICAgIHJlbmRlcmVyLmdhbW1hT3V0cHV0PXRydWU7XHJcbiAgICAgICAgcmVuZGVyZXIuZ2FtbWFGYWN0b3I9Mi4yO1xyXG4gICAgICAgIHRoaXMubW91bnQuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XHJcbiAgICAgICAgbGV0IGxvZ28gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbG9hZGVyLmxvYWQoJy9Mb2dvLmdsdGYnLCBmdW5jdGlvbihnbHRmKXtcclxuICAgICAgICAgICAgbG9nbyA9IGdsdGYuc2NlbmU7XHJcbiAgICAgICAgICAgIGxvZ28ucm90YXRpb24ueD0tTWF0aC5QSS8xMjtcclxuICAgICAgICAgICAgbG9nby5yb3RhdGlvbi55PU1hdGguUEkvMTI7XHJcbiAgICAgICAgICAgIGxvZ28ucm90YXRpb24uej1NYXRoLlBJLzY7XHJcbiAgICAgICAgICAgIGxvZ28uc2NhbGUuc2V0KDIsMiwyKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkKGxvZ28pO1xyXG4gICAgICAgICAgICBhbmltYXRlKCk7XHJcblxyXG4gICAgICAgIH0sdW5kZWZpbmVkLGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSA8PlxyXG4gICAgICAgICAgICA8cD5FLW1haWw6IGphMzE4MEBueXUuZWR1PC9wPlxyXG4gICAgICAgICAgICA8cD5UZWxlcGhvbmU6IDkxNC0yMjQtNjI0MTwvcD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hc2Ftb2FoLW1lZXBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXRodWI8L2E+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gICAgICAgICAgICAgXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi8jVGltZWxpbmVIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhPlR1dG9yIFRpbWVsaW5lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvI0tNZWFuc0hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGE+Sy1NZWFucyBEZW1vPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvI1dlYnNpdGVIZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhPlRoaXMgV2Vic2l0ZTwvYT4gICAgXHJcbiAgICAgICAgICAgIDwvTGluaz48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIGNvbnN0IGJhciA9IDxkaXYgaWQ9J3N0aWNreUJhcic+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvTW91bnRcIiByZWY9e3JlZj0+KHRoaXMubW91bnQgPSByZWYpfS8+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3Bvc2l0aW9uOlwicmVsYXRpdmVcIiwgbGVmdDpcIjEycHhcIn19PkplZmZyZXk8L2gxPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3twb3NpdGlvbjpcInJlbGF0aXZlXCIsIGxlZnQ6XCIyNXB4XCJ9fT5Bc2Ftb2FoPC9oMT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3N1YkhlYWRpbmcnPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUhvbWV9Lz4gSG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3N1YkhlYWRpbmcnPjxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYUFkZHJlc3NDYXJkfS8+IEFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPSdiYXJJY29uJyBpY29uPXtmYVRhc2tzfS8+IDxEcm9wZG93biB0aXRsZT1cIlByb2plY3RzXCIgYmFyRHJvcGRvd24+e3Byb2plY3RzfTwvRHJvcGRvd24+PGJyLz5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9J2Jhckljb24nIGljb249e2ZhRW52ZWxvcGV9Lz4gPERyb3Bkb3duIHRpdGxlPSdDb250YWN0IGFuZCBNZWRpYScgYmFyRHJvcGRvd24+e2NvbnRhY3R9PC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgPGRpdiBpZD0ndG9nZ2xlVGhlbWUnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t2aXNpYmlsaXR5OiB0aGlzLnN0YXRlLnRoZW1lPT09J29uJz8gJ3Zpc2libGUnOiAnaGlkZGVuJ319PkxpZ2h0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT17dGhpcy5zdGF0ZS50aGVtZX0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlVGhlbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t2aXNpYmlsaXR5OiB0aGlzLnN0YXRlLnRoZW1lPT09J29mZic/ICd2aXNpYmxlJzogJ2hpZGRlbid9fT5EYXJrPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gPHN0eWxlPntgXHJcblxyXG4gICAgICAgICAgICAjbG9nb01vdW50e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0Ojc1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYXJJY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNEOUIwOEM7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6NXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYmFyRHJvcGRvd257XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI3N0aWNreUJhcntcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWJIZWFkaW5ne1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE51bml0b0l0YWxpYztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRDlCMDhDO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjdG9nZ2xlVGhlbWV7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAjdG9nZ2xlVGhlbWUgc3BhbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN3aXRjaCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN3aXRjaCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J106bm90KDpjaGVja2VkKSArIC5zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc4ODg4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjQ0NTQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMxNURCOTU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zbGlkZXIucm91bmQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPiAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbGlnaHQgPSA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIGB9PC9zdHlsZT47XHJcblxyXG4gICAgICAgIGNvbnN0IGRhcmsgPSA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGQ0I5QTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRDlCMDhDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLGEsc3BhbixsaSxkaXZ7XHJcbiAgICAgICAgICAgIGNcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICB7c3R5bGV9XHJcbiAgICAgICAgICAgIHtiYXJ9XHJcbiAgICAgICAgPC8+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGlja3lCYXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\User\\\\Documents\\\\myWebsite\\\\components\\\\stickyBar.js */");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, style, bar);
    }
  }]);

  return StickyBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StickyBar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_stickyBar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/stickyBar.js */ "./components/stickyBar.js");
/* harmony import */ var components_layout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/layout.js */ "./components/layout.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/dropdown.js */ "./components/dropdown.js");





var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(components_stickyBar_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), __jsx(components_layout_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Home")), __jsx("section", {
        id: "AboutMe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "About Me",
        openOnStart: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Hey, looks like you found my website!"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "My name is Jeffrey Asamoah, and I'm currently living in the NYC metropolitan area. I'm studying Mathematics and Computer Science at New York University and plan to graduate in May 2020. My hobbies include running, coding, and 3-D modelling.")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "See more here"))), __jsx("section", {
        id: "TimelineHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Timeline App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "I created this timeline app to emulate the project I worked on during my Comcast Internship. At my internship my project was to create a foward-facing visual to display how the Xfinity Fraud Managment (XFM) team monitored and mitigated fraud activity. For my internship I displayed the ~40 use cases of potentially fraudulent activity and plotted the occurences of each usecase. The app allowed for you to filter which items you wanted to look at as well as select the timeframe on which you were looking. I recreated that project using data from my tutoring experience at NYU. Here I display when each student would approach various tutors and the success of the tutoring session."), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Built using ", __jsx("a", {
        href: "https://reactjs.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, " React.js")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Data was read from", __jsx("a", {
        href: "http://cassandra.apache.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, " Cassandra DB (now static data)")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Used ", __jsx("a", {
        href: "https://d3js.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "D3 libraries"), " to scale and plot data points according to their dates"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Used D3 libraries to create a window frame to adjust the date window of viewing"))), __jsx("a", {
        href: "https://github.com/asamoah-meep/101Timeline",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "View source"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/101Timeline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Live Demo"))), __jsx("section", {
        id: "KMeansHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "K-Means Demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "This ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/K-means_clustering",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "K-Means"), " project is a self-made data clustering algorithm that I created for my predictive analytics class. The algorithm takes in 24 documents roughly concerned with 3 topics (Mouth and Foot Diseases, Airline Safety, and International Housing Prices) and clusters them into k centroids. The data is 1", __jsx("sup", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "st"), " converted into a TF-IDF matrix adjusted for the lengths of the respective documents. The data is then trimmed by removing low intra-dimensional words, combining highly correlated dimensions, and then adjusting the matrix using ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Principal_component_analysis",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "PCA"), ".The similarity is measured using ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/Cosine_similarity",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "cosine similarity"), " into clusted determined by initial means furthest away from each other (see ", __jsx("a", {
        href: "https://en.wikipedia.org/wiki/K-means%2B%2B",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "K-Means++"), "). After the data is clustered it is then transformed again by PCA onto 2 dimensions and plotted on a 2-D graph."), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Built in ", __jsx("a", {
        href: "https://www.oracle.com/technetwork/java/javase/overview/java8-2100321.html",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Java")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Used ", __jsx("a", {
        href: "https://commons.apache.org/proper/commons-math/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Apache Commons"), " Math for vector/matrix manipulation"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Used ", __jsx("a", {
        href: "http://www.jfree.org/jfreechart/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "JFree charts"), " to create plots"))), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "View source")), __jsx("section", {
        id: "QRHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "QR Marketing Project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Calvin Klein marketing project utilizing QR codes")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/pvh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("a", {
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "QR Project"))), __jsx("section", {
        id: "WebsiteHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "This Website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "More to come..."), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Built using ", __jsx("a", {
        href: "https://nextjs.org/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Next.js")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Hosted using ", __jsx("a", {
        href: "https://zeit.co/docs#related",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Zeit")))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.cabf57a253baf550d3cf.hot-update.js.map