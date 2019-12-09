webpackHotUpdate("static\\development\\pages\\101Timeline.js",{

/***/ "./components/Timeframe.js":
/*!*********************************!*\
  !*** ./components/Timeframe.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-brush */ "./node_modules/d3-brush/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\Timeframe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








var Timeframe =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Timeframe, _React$Component);

  function Timeframe(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Timeframe);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Timeframe).call(this, props));
    _this.format = "YYYY-MM-DD";
    _this.createScale = _this.createScale.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.updateEnd = _this.updateEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.updateStart = _this.updateStart.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.removeScaleAndZoom = _this.removeScaleAndZoom.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.updatePoints = _this.updatePoints.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.createZoom = _this.createZoom.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.scale = d3_scale__WEBPACK_IMPORTED_MODULE_9__["scaleTime"]().domain([moment__WEBPACK_IMPORTED_MODULE_12___default()("2018-09-01"), moment__WEBPACK_IMPORTED_MODULE_12___default()('2019-05-20')]).range([0, _this.props.width + 150]);

    _this.f = function () {
      var _this2 = this;

      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#zoomBox").call(this.brush.move, [this.props.start, this.props.end].map(function (ele) {
        return _this2.scale(ele);
      }));
    };

    _this.brush = d3_brush__WEBPACK_IMPORTED_MODULE_10__["brushX"]().extent([[5, 0], [_this.props.width + 155, 110]]).on("end", function () {
      return _this.props.updateZoom(_this.scale, _this.f.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)));
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Timeframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createScale();
      this.createZoom();
      var that = this;
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["selectAll"]("#timeFrame span").on("click", function () {
        that.props.setFrame(this.innerHTML, that.f.bind(that));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.removeScaleAndZoom();
      this.createScale();
      this.updatePoints();
    }
  }, {
    key: "removeScaleAndZoom",
    value: function removeScaleAndZoom() {
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#timeScale").remove();
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["selectAll"](".pointRow").remove();
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#zoomBrush").selectAll("*").remove();
    }
  }, {
    key: "updateStart",
    value: function updateStart(date) {
      this.props.updateStart(date, this.f.bind(this));
    }
  }, {
    key: "updateEnd",
    value: function updateEnd(date) {
      this.props.updateEnd(date, this.f.bind(this));
    }
  }, {
    key: "createScale",
    value: function createScale() {
      var scale = d3_scale__WEBPACK_IMPORTED_MODULE_9__["scaleTime"]().domain([this.props.start, this.props.end]).range([0, this.props.width]);
      var axis = d3_axis__WEBPACK_IMPORTED_MODULE_7__["axisBottom"](scale);
      var diff = Math.abs(this.props.start.diff(this.props.end, "months"));

      if (diff <= 3) {
        diff = Math.abs(this.props.start.diff(this.props.end, "hours"));
        if (diff < 72) axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_11__["timeFormat"]("%I%p %b %f"));else axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_11__["timeFormat"]("%b %e"));
      } else axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_11__["timeFormat"]("%b %Y"));

      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#timeBox").append("g").attr("transform", "translate(150,0)").attr("id", "timeScale").call(axis);
    }
  }, {
    key: "createZoom",
    value: function createZoom() {
      var scale = this.scale;
      var axis = d3_axis__WEBPACK_IMPORTED_MODULE_7__["axisTop"](scale);
      axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_11__["timeFormat"]("%b %Y"));
      var brush = this.brush;
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#timeBox").append("g").attr("id", "zoomBox").attr("transform", "translate(20,30)");
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#timeBox").append("g").attr("transform", "translate(25,140)").call(axis);
      var zoomBrush = d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#zoomBox");
      zoomBrush.call(brush).call(brush.move, [this.props.start, this.props.end].map(function (ele) {
        return scale(ele);
      }));
    }
  }, {
    key: "updatePoints",
    value: function updatePoints() {
      var profData = [];

      for (var prof in this.props.data) {
        profData.push(this.props.data[prof]);
      }

      var scale = this.scale;
      var yScale = d3_scale__WEBPACK_IMPORTED_MODULE_9__["scaleLinear"]().domain([0, profData.length]).range([0, 100]);
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#zoomBox").selectAll("g [class=pointRow]").data(profData).enter().append('g').classed("pointRow", true).attr('y', function (d, i) {
        return yScale(i);
      });
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["selectAll"]('.pointRow').selectAll('circle [class=scalePoint]').data(function (d) {
        return d.filter(function (ele) {
          return ele.date !== null;
        });
      }).enter().append('circle').classed('scalePoint', true).attr("cx", function (d) {
        return scale(moment__WEBPACK_IMPORTED_MODULE_12___default()(d.date));
      }).attr("cy", function (d) {
        return +this.parentNode.getAttribute('y') + 10;
      }).attr("fill", function (d) {
        if (d.resolve === undefined) d.resolve = 'Unresolved';
        d.resolve = d.resolve.trim();
        if (d.resolve === 'Resolved: they get it!' || d.resolve === 'Resolved - they get it!') return '#33A532';else if (d.resolve === "Resolved - they're still shaky" || d.resolve === "Resolved: they're still shaky") return '#FAD201';else if (d.resolve.includes('Unresolved')) return '#CF142B';else return '#FAD201';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var style = __jsx("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "\n            .scalePoint{\n                r:3;\n            }\n          \n            #timeFrame span{\n                text-decoration:underline;\n                color: #D1E8E2;\n                cursor:pointer;\n            }\n\n            #timeframe span:hover{\n                color: #DA7B93;\n            }\n\n            .row .border{\n                fill:none;\n                stroke:black;\n            }\n\n            #zoomBox .selection{\n            stroke:#EAE7DC;\n            }\n          ");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, style, __jsx("svg", {
        id: "timeBox",
        width: 1100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), __jsx("div", {
        className: "datePicker",
        id: "startDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Start Date:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), __jsx("input", {
        type: "date",
        value: this.props.start.format('YYYY-MM-DD'),
        onChange: function onChange(date) {
          return _this3.updateStart(date);
        },
        min: "2018-09-01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      })), __jsx("div", {
        className: "datePicker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "End Date:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), __jsx("input", {
        type: "date",
        value: this.props.end.format('YYYY-MM-DD'),
        onChange: function onChange(date) {
          return _this3.updateEnd(date);
        },
        max: "2019-05-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      })), __jsx("div", {
        id: "timeFrame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "1 day"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "1 week"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "1 month"), " |", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Fall Semester"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Spring Semester"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "All")));
    }
  }]);

  return Timeframe;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Timeframe);

/***/ }),

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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





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

      var contact = __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "E-mail: ja3180@nyu.edu"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Telephone: 914-224-6241"), __jsx("a", {
        href: "https://github.com/asamoah-meep",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Github"));

      var projects = __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#TimelineHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Tutor Timeline"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#KMeansHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "K-Means Demo"))), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/#WebsiteHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "This Website"))));

      var bar = __jsx("div", {
        id: "stickyBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("div", {
        id: "logoMount",
        ref: function ref(_ref) {
          return _this.mount = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("h1", {
        style: {
          position: "relative",
          left: "12px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Jeffrey"), __jsx("h1", {
        style: {
          position: "relative",
          left: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Asamoah"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("a", {
        className: "subHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faHome"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), " Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("a", {
        className: "subHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faAddressCard"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), " About")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faTasks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Projects",
        barDropdown: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, projects), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
        className: "barIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faEnvelope"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Contact and Media",
        barDropdown: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, contact));

      var style = __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\n\n            #logoMount{\n                height:75px;\n            }\n\n            .barIcon{\n                color: #D9B08C;\n                display:inline-block;\n                position:relative;\n                right:5px;\n            }\n\n            .barDropdown{\n                display:inline-block;\n            }\n\n            #stickyBar{\n                vertical-align:top;\n                position: relative;\n                display:inline-block;\n                left:20px;\n                width:250px;\n                margin-right: 5px;\n                margin-top:5px;\n            }\n            .subHeading{\n                font-family: NunitoItalic;\n                color: #D9B08C;\n                display: block;\n                font-size: 1.5rem;\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n                margin-inline-start: 0px;\n                margin-inline-end: 0px;\n                font-weight: bold;\n            }\n        ");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, style, bar);
    }
  }]);

  return StickyBar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StickyBar);

/***/ })

})
//# sourceMappingURL=101Timeline.js.dc5da1a44969b3401b62.hot-update.js.map