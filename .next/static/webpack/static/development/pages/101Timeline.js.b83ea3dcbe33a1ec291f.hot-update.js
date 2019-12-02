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
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-brush */ "./node_modules/d3-brush/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);






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
    _this.scale = d3_scale__WEBPACK_IMPORTED_MODULE_10__["scaleTime"]().domain([moment__WEBPACK_IMPORTED_MODULE_13___default()("2018-09-01"), moment__WEBPACK_IMPORTED_MODULE_13___default()('2019-05-20')]).range([0, _this.props.width + 150]);

    _this.f = function () {
      var _this2 = this;

      d3_selection__WEBPACK_IMPORTED_MODULE_9__["select"]("#zoomBox").call(this.brush.move, [this.props.start, this.props.end].map(function (ele) {
        return _this2.scale(ele);
      }));
    };

    _this.brush = d3_brush__WEBPACK_IMPORTED_MODULE_11__["brushX"]().extent([[0, 0], [_this.props.width + 150, 120]]).on("end", function () {
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
      d3_selection__WEBPACK_IMPORTED_MODULE_9__["selectAll"]("#timeFrame span").on("click", function () {
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
      d3_selection__WEBPACK_IMPORTED_MODULE_9__["select"]("#timeScale").remove();
      d3_selection__WEBPACK_IMPORTED_MODULE_9__["selectAll"](".pointRow").remove();
      d3_selection__WEBPACK_IMPORTED_MODULE_9__["select"]("#zoomBrush").selectAll("*").remove();
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
      var scale = d3_scale__WEBPACK_IMPORTED_MODULE_10__["scaleTime"]().domain([this.props.start, this.props.end]).range([0, this.props.width]);
      var axis = d3_axis__WEBPACK_IMPORTED_MODULE_8__["axisBottom"](scale);
      var diff = Math.abs(this.props.start.diff(this.props.end, "months"));

      if (diff <= 3) {
        diff = Math.abs(this.props.start.diff(this.props.end, "hours"));
        if (diff < 72) axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_12__["timeFormat"]("%I%p %b %f"));else axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_12__["timeFormat"]("%b %e"));
      } else axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_12__["timeFormat"]("%b %Y"));

      d3_selection__WEBPACK_IMPORTED_MODULE_9__["select"]("#timeBox").append("g").attr("transform", "translate(150,0)").attr("id", "timeScale").call(axis);
    }
  }, {
    key: "createZoom",
    value: function createZoom() {
      var scale = this.scale;
      var axis = d3_axis__WEBPACK_IMPORTED_MODULE_8__["axisTop"](scale);
      axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_12__["timeFormat"]("%b %Y"));
      var brush = this.brush;
      d3_selection__WEBPACK_IMPORTED_MODULE_9__["select"]("#timeBox").append("g").attr("id", "zoomBox").attr("transform", "translate(20,30)");
      d3_selection__WEBPACK_IMPORTED_MODULE_9__["select"]("#timeBox").append("g").attr("transform", "translate(25,140)").call(axis);
      var zoomBrush = d3_selection__WEBPACK_IMPORTED_MODULE_9__["select"]("#zoomBox");
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
      var yScale = d3_scale__WEBPACK_IMPORTED_MODULE_10__["scaleLinear"]().domain([0, profData.length]).range([0, 100]);
      d3_selection__WEBPACK_IMPORTED_MODULE_9__["select"]("#zoomBox").selectAll("g [class=pointRow]").data(profData).enter().append('g').classed("pointRow", true).attr('y', function (d, i) {
        return yScale(i);
      });
      d3_selection__WEBPACK_IMPORTED_MODULE_9__["selectAll"]('.pointRow').selectAll('circle [class=scalePoint]').data(function (d) {
        return d.filter(function (ele) {
          return ele.date !== null;
        });
      }).enter().append('circle').classed('scalePoint', true).attr("cx", function (d) {
        return scale(moment__WEBPACK_IMPORTED_MODULE_13___default()(d.date));
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
          lineNumber: 166
        },
        __self: this
      }, "\n            .scalePoint{\n                r:3;\n            }\n          \n            #timeFrame span{\n                text-decoration:underline;\n                color:blue;\n                cursor:pointer;\n            }\n\n            .row .border{\n                fill:none;\n                stroke:black;\n              }\n\n              #zoomBox .selection{\n                stroke:#EAE7DC;\n              }\n          ");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, style, __jsx("svg", {
        id: "timeBox",
        width: 1100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), __jsx("div", {
        className: "datePicker",
        id: "startDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Start Date:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
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
          lineNumber: 192
        },
        __self: this
      })), __jsx("div", {
        className: "datePicker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "End Date:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
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
          lineNumber: 193
        },
        __self: this
      })), __jsx("div", {
        id: "timeFrame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "1 day"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "1 week"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "1 month"), " |", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Fall Semester"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Spring Semester"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "All")));
    }
  }]);

  return Timeframe;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Timeframe);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/create-react-context/lib/implementation.js":
false,

/***/ "./node_modules/create-react-context/lib/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCISODay/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/setUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
false,

/***/ "./node_modules/date-fns/esm/addDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/addHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/addYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/format/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDate/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/getDaysInMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/getHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/getMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/getQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/getSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/getTime/index.js":
false,

/***/ "./node_modules/date-fns/esm/getYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
false,

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
false,

/***/ "./node_modules/date-fns/esm/isDate/index.js":
false,

/***/ "./node_modules/date-fns/esm/isEqual/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/isSameYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/isValid/index.js":
false,

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
false,

/***/ "./node_modules/date-fns/esm/max/index.js":
false,

/***/ "./node_modules/date-fns/esm/min/index.js":
false,

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/index.js":
false,

/***/ "./node_modules/date-fns/esm/parse/index.js":
false,

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
false,

/***/ "./node_modules/date-fns/esm/setHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/setMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/setMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/setQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/setSeconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/setYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfMonth/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfQuarter/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
false,

/***/ "./node_modules/date-fns/esm/startOfYear/index.js":
false,

/***/ "./node_modules/date-fns/esm/subDays/index.js":
false,

/***/ "./node_modules/date-fns/esm/subHours/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMinutes/index.js":
false,

/***/ "./node_modules/date-fns/esm/subMonths/index.js":
false,

/***/ "./node_modules/date-fns/esm/subWeeks/index.js":
false,

/***/ "./node_modules/date-fns/esm/subYears/index.js":
false,

/***/ "./node_modules/date-fns/esm/toDate/index.js":
false,

/***/ "./node_modules/gud/index.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false,

/***/ "./node_modules/react-datepicker/dist/react-datepicker.min.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
false,

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
false,

/***/ "./node_modules/react-popper/lib/esm/index.js":
false,

/***/ "./node_modules/react-popper/lib/esm/utils.js":
false,

/***/ "./node_modules/warning/warning.js":
false

})
//# sourceMappingURL=101Timeline.js.b83ea3dcbe33a1ec291f.hot-update.js.map