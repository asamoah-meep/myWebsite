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
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-brush */ "./node_modules/d3-brush/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\Timeframe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
 // import './App.css';










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
    _this.scale = d3_scale__WEBPACK_IMPORTED_MODULE_11__["scaleTime"]().domain([moment__WEBPACK_IMPORTED_MODULE_14___default()("2018-09-01"), moment__WEBPACK_IMPORTED_MODULE_14___default()('2019-05-20')]).range([0, _this.props.width + 150]);

    _this.f = function () {
      var _this2 = this;

      d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#zoomBox").call(this.brush.move, [this.props.start, this.props.end].map(function (ele) {
        return _this2.scale(ele);
      }));
    };

    _this.brush = d3_brush__WEBPACK_IMPORTED_MODULE_12__["brushX"]().extent([[0, 0], [_this.props.width + 150, 120]]).on("end", function () {
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
      d3_selection__WEBPACK_IMPORTED_MODULE_10__["selectAll"]("#timeFrame span").on("click", function () {
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
      d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#timeScale").remove();
      d3_selection__WEBPACK_IMPORTED_MODULE_10__["selectAll"](".pointRow").remove();
      d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#zoomBrush").selectAll("*").remove();
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
      var scale = d3_scale__WEBPACK_IMPORTED_MODULE_11__["scaleTime"]().domain([this.props.start, this.props.end]).range([0, this.props.width]);
      var axis = d3_axis__WEBPACK_IMPORTED_MODULE_9__["axisBottom"](scale);
      var diff = Math.abs(this.props.start.diff(this.props.end, "months"));

      if (diff <= 3) {
        diff = Math.abs(this.props.start.diff(this.props.end, "hours"));
        if (diff < 72) axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_13__["timeFormat"]("%I%p %b %f"));else axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_13__["timeFormat"]("%b %e"));
      } else axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_13__["timeFormat"]("%b %Y"));

      d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#timeBox").append("g").attr("transform", "translate(150,0)").attr("id", "timeScale").call(axis);
    }
  }, {
    key: "createZoom",
    value: function createZoom() {
      var scale = this.scale;
      var axis = d3_axis__WEBPACK_IMPORTED_MODULE_9__["axisTop"](scale);
      axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_13__["timeFormat"]("%b %Y"));
      var brush = this.brush;
      d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#timeBox").append("g").attr("id", "zoomBox").attr("transform", "translate(20,30)");
      d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#timeBox").append("g").attr("transform", "translate(25,140)").call(axis);
      var zoomBrush = d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#zoomBox");
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
      var yScale = d3_scale__WEBPACK_IMPORTED_MODULE_11__["scaleLinear"]().domain([0, profData.length]).range([0, 100]);
      d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#zoomBox").selectAll("g [class=pointRow]").data(profData).enter().append('g').classed("pointRow", true).attr('y', function (d, i) {
        return yScale(i);
      });
      d3_selection__WEBPACK_IMPORTED_MODULE_10__["selectAll"]('.pointRow').selectAll('circle [class=scalePoint]').data(function (d) {
        return d.filter(function (ele) {
          return ele.date !== null;
        });
      }).enter().append('circle').classed('scalePoint', true).attr("cx", function (d) {
        return scale(moment__WEBPACK_IMPORTED_MODULE_14___default()(d.date));
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
          lineNumber: 168
        },
        __self: this
      }, "\n            .scalePoint{\n                r:3;\n            }\n          \n            #timeFrame span{\n                text-decoration:underline;\n                color:blue;\n                cursor:pointer;\n            }\n\n            .row .border{\n                fill:none;\n                stroke:black;\n              }\n\n              #zoomBox .selection{\n                stroke:#EAE7DC;\n              }\n          ");

      console.log(this.props.start.format('YYYY-MM-DD'));
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, style, __jsx("svg", {
        id: "timeBox",
        width: 1100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), __jsx("div", {
        className: "datePicker",
        id: "startDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Start Date:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), __jsx("input", {
        type: "date",
        value: this.props.start.toDate().toString(),
        onChange: function onChange(date) {
          return _this3.updateStart(date);
        },
        min: "2018-09-01",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      })), __jsx("div", {
        className: "datePicker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "End Date:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), __jsx("input", {
        type: "date",
        value: this.props.end.toDate().toString(),
        onChange: function onChange(date) {
          return _this3.updateEnd(date);
        },
        max: "2019-05-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      })), __jsx("div", {
        id: "timeFrame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "1 day"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "1 week"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "1 month"), " |", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Fall Semester"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Spring Semester"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "All")));
    }
  }]);

  return Timeframe;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Timeframe);

/***/ })

})
//# sourceMappingURL=101Timeline.js.6d8288b5ad2b05317bb6.hot-update.js.map