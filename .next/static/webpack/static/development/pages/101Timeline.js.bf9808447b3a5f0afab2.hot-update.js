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

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, style, __jsx("svg", {
        id: "timeBox",
        width: 1100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), __jsx("div", {
        className: "datePicker",
        id: "startDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Start Date:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
        selected: this.props.start.toDate(),
        onChange: function onChange(date) {
          return _this3.updateStart(date);
        },
        minDate: new Date('2018-09-01'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })), __jsx("div", {
        className: "datePicker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "End Date:", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_7___default.a, {
        selected: this.props.end.toDate(),
        onChange: function onChange(date) {
          return _this3.updateEnd(date);
        },
        maxDate: new Date('2019-05-20'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      })), __jsx("div", {
        id: "timeFrame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "1 day"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "1 week"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "1 month"), " |", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Fall Semester"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Spring Semester"), " |  ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "All")));
    }
  }]);

  return Timeframe;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Timeframe);

/***/ }),

/***/ "./components/Usecase.js":
/*!*******************************!*\
  !*** ./components/Usecase.js ***!
  \*******************************/
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
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\Usecase.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
 // import './App.css';





var UseCaseRow =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UseCaseRow, _React$Component);

  function UseCaseRow(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UseCaseRow);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UseCaseRow).call(this, props));
    _this.rowName = _this.props.name;
    _this.createItems = _this.createItems.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.removeItems = _this.removeItems.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.createInfo = _this.createInfo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UseCaseRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createItems();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.removeItems();
      this.createItems();
    }
  }, {
    key: "removeItems",
    value: function removeItems() {
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#".concat(this.rowName)).selectAll("*").remove();
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#".concat(this.rowName)).append("rect").classed("border", true).attr("width", this.props.width + 150).attr("height", 140);
    }
  }, {
    key: "createItems",
    value: function createItems() {
      var _this2 = this;

      var data = this.props.data.filter(function (ele) {
        return moment__WEBPACK_IMPORTED_MODULE_9___default()(ele.date).isBetween(_this2.props.start, _this2.props.end);
      });
      var scale = d3_scale__WEBPACK_IMPORTED_MODULE_7__["scaleTime"]().domain([this.props.start, this.props.end]).range([135, this.props.width + 135]);
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#".concat(this.rowName)).selectAll("rect[class = rowImg]").data(data).enter().append('text').classed("fas", true).text(function (d) {
        if (d.tutor.includes("Jeff")) return "\uF6D5"; //dragon
        else if (d.tutor.includes("Julia")) return "\uF6BE"; //cat
          else if (d.tutor.includes("ella")) return "\uF094"; // lemon
            else if (d.tutor.includes("Alex")) return "\uF6D3"; // dog
              else if (d.tutor.includes("Alan")) return "\uF4BA"; //bird
                else if (d.tutor.includes("Hari")) return "\uF7EF"; //cheese
                  else if (d.tutor.includes("Ilias")) return "\uF6ED"; //hippo
                    else if (d.tutor.includes("Aashish")) return "\uF6F0"; //horse
                      else if (d.tutor.includes("Gilad")) return "\uF700"; //frog
                        else if (d.tutor.includes("Cindy")) return "\uF717"; //spider
                          else if (d.tutor.includes("Jonathan")) return "\uF5D1"; //apple
                            else if (d.tutor.includes("Santiago")) return "\uF7EC"; //toast
                              else if (d.tutor.includes("Rahul")) return "\uF578"; //fish
                                else return "\uF563"; //cookie
      }).attr("x", function (d) {
        return scale(moment__WEBPACK_IMPORTED_MODULE_9___default()(d.date));
      }).attr('y', function (d, i) {
        return 15 + 30 * i % 150;
      }).attr('width', 40).attr('height', 40).attr("fill", function (d) {
        if (d.resolve === undefined) d.resolve = 'Unresolved';
        d.resolve = d.resolve.trim();
        if (d.resolve === 'Resolved: they get it!' || d.resolve === 'Resolved - they get it!') return '#33A532';else if (d.resolve === "Resolved - they're still shaky" || d.resolve === "Resolved: they're still shaky") return '#FAD201';else if (d.resolve.includes('Unresolved')) return '#CF142B';else return '#FAD201';
      }).on("click", function (d) {
        return _this2.createInfo(d);
      }).append('title').attr('text', function (d) {
        return d.tutor;
      });
      d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#".concat(this.rowName)).classed("ucRow", true).append("text").attr("x", 5).attr("y", 75).classed("ucName", true).text(this.props.lastName).append("title").text(this.rowName + " " + this.props.lastName);
    }
  }, {
    key: "createInfo",
    value: function createInfo(d) {
      var info = d3_selection__WEBPACK_IMPORTED_MODULE_8__["select"]("#info");
      info.classed('hideInfo', false);
      info.selectAll("*").remove();

      for (var attr in d) {
        if (attr === 'date') info.append('p').text("Date: " + moment__WEBPACK_IMPORTED_MODULE_9___default()(d[attr]).format("dddd, MMMM Do YYYY, h:mm:ss a"));else if (attr === 'resolve') info.append('p').text(d[attr]);else {
          var attrTitle = attr[0].toUpperCase() + attr.substring(1);
          info.append("p").text(attrTitle + ":" + d[attr]);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var iconStyle = __jsx("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, this.props.styling);

      var style = __jsx("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "          \n        .ucRow text{\n            cursor:pointer;\n        }\n\n        #ucContainer{\n            overflow-y:auto;\n            height:350px;\n          }\n        \n        .ucRow rect{\n            stroke:#8E8D8A;\n        }");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, iconStyle, __jsx("styles", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, style), __jsx("svg", {
        id: this.rowName,
        className: "row",
        width: this.props.width + 150,
        height: 140,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("rect", {
        className: "border",
        width: this.props.width + 150,
        height: 140,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      })));
    }
  }]);

  return UseCaseRow;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UseCaseRow);

/***/ }),

/***/ "./pages/101Timeline.js":
/*!******************************!*\
  !*** ./pages/101Timeline.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/Data/Fall2018.json */ "./public/Data/Fall2018.json");
var _public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/Data/Fall2018.json */ "./public/Data/Fall2018.json", 1);
/* harmony import */ var _public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/Data/Spring2019.json */ "./public/Data/Spring2019.json");
var _public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/Data/Spring2019.json */ "./public/Data/Spring2019.json", 1);
/* harmony import */ var _components_stickyBar_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/stickyBar.js */ "./components/stickyBar.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Timeframe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Timeframe.js */ "./components/Timeframe.js");
/* harmony import */ var _components_Usecase_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Usecase.js */ "./components/Usecase.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\pages\\101Timeline.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;















var Timeline =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Timeline, _React$Component);

  function Timeline(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Timeline);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Timeline).call(this, props));
    var scale = d3_scale__WEBPACK_IMPORTED_MODULE_20__["scaleTime"]().domain([moment__WEBPACK_IMPORTED_MODULE_18___default()("2018-09-01"), moment__WEBPACK_IMPORTED_MODULE_18___default()("2019-05-20")]).range([0, 1150]);
    _this.updateZoom = _this.updateZoom.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.updateStart = _this.updateStart.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.updateEnd = _this.updateEnd.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.updateFrame = _this.updateFrame.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.resetZoom = _this.resetZoom.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.resetFilter = _this.resetFilter.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.filterStudent = _this.filterStudent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.filterTutor = _this.filterTutor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.enterStudent = _this.enterStudent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.enterTutor = _this.enterTutor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.parseData = _this.parseData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.mergeData = _this.mergeData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));

    var fData = _this.parseData(_public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_11__);

    var sData = _this.parseData(_public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_12__);

    var allData = _this.mergeData(fData, sData);

    _this.state = {
      start: moment__WEBPACK_IMPORTED_MODULE_18___default()("2018-09-01"),
      end: moment__WEBPACK_IMPORTED_MODULE_18___default()("2019-05-20"),
      scale: scale,
      filteredData: allData,
      initData: allData,
      queryStudent: "",
      queryTutor: ""
    };

    var style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\n          .App {\n            text-align: center;\n          }\n          \n          .datePicker{\n            display:inline-block;\n            position:relative;\n            left:15px;\n          }\n          \n          #filter{\n            margin-bottom:3px;\n          }\n          \n          .hideInfo{\n            visibility: hidden;\n          }\n          \n          #legend{\n            position: relative;\n            bottom:70px;\n            float: right;\n            border:2px solid black;\n            padding:2px;\n          }\n                    \n          #info{\n            text-align:left;\n            display:inline-block;\n            padding:5px;\n            margin:3px;\n            border:2px solid black;\n            max-width:300px;\n            overflow-x:auto;\n          }\n          \n          #info p{\n            font-size:.8em;\n            margin-block-start:.5em;\n            margin-block-end:.5em;\n          \n          }\n          \n          input{\n            background-color:#D8C3A5;\n          }\n          \n        ");

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Timeline, [{
    key: "resetZoom",
    value: function resetZoom(scale, f) {
      if (d3_selection__WEBPACK_IMPORTED_MODULE_19__["event"].selection === null) {
        this.setState({
          start: moment__WEBPACK_IMPORTED_MODULE_18___default()("2018-09-01"),
          end: moment__WEBPACK_IMPORTED_MODULE_18___default()('2019-05-20')
        }, f);
      }
    }
  }, {
    key: "parseData",
    value: function parseData(semesterData) {
      var profData = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(semesterData), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var student = _step.value;
          if (profData[student.professor] === undefined) profData[student.professor] = [];
          profData[student.professor].push(student);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return profData;
    }
  }, {
    key: "mergeData",
    value: function mergeData(fData, sData) {
      var allData = {};

      for (var f in fData) {
        allData[f] = fData[f];
      }

      for (var s in sData) {
        if (s in allData) allData[s] = allData[s].concat(sData[s]);else allData[s] = sData[s];
      }

      return allData;
    }
  }, {
    key: "updateZoom",
    value: function updateZoom(scale, f) {
      var s = null,
          e = null;

      if (d3_selection__WEBPACK_IMPORTED_MODULE_19__["event"].selection === null) {
        this.resetZoom(scale, f);
        return;
      }

      var _d3Selection$event$se = d3_selection__WEBPACK_IMPORTED_MODULE_19__["event"].selection.map(function (ele) {
        return scale.invert(ele);
      });

      var _d3Selection$event$se2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_d3Selection$event$se, 2);

      s = _d3Selection$event$se2[0];
      e = _d3Selection$event$se2[1];
      s = moment__WEBPACK_IMPORTED_MODULE_18___default()(s);
      e = moment__WEBPACK_IMPORTED_MODULE_18___default()(e);
      this.setState({
        start: s,
        end: e
      });
    }
  }, {
    key: "updateStart",
    value: function updateStart(date, f) {
      this.setState({
        start: moment__WEBPACK_IMPORTED_MODULE_18___default()(date)
      }, f);
    }
  }, {
    key: "updateEnd",
    value: function updateEnd(date, f) {
      this.setState({
        end: moment__WEBPACK_IMPORTED_MODULE_18___default()(date)
      }, f);
    }
  }, {
    key: "updateFrame",
    value: function updateFrame(frame, f) {
      var start = this.state.start;
      var end = this.state.end;

      switch (frame) {
        case "1 day":
          end = moment__WEBPACK_IMPORTED_MODULE_18___default()(start).add(1, "day").isBefore(moment__WEBPACK_IMPORTED_MODULE_18___default()()) ? moment__WEBPACK_IMPORTED_MODULE_18___default()(start).add(1, "day") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "1 week":
          end = moment__WEBPACK_IMPORTED_MODULE_18___default()(start).add(1, "week").isBefore(moment__WEBPACK_IMPORTED_MODULE_18___default()()) ? moment__WEBPACK_IMPORTED_MODULE_18___default()(start).add(1, "week") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "1 month":
          end = moment__WEBPACK_IMPORTED_MODULE_18___default()(start).add(1, "month").isBefore(moment__WEBPACK_IMPORTED_MODULE_18___default()()) ? moment__WEBPACK_IMPORTED_MODULE_18___default()(start).add(1, "month") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "Fall Semester":
          start = moment__WEBPACK_IMPORTED_MODULE_18___default()('2018-09-01');
          end = moment__WEBPACK_IMPORTED_MODULE_18___default()('2018-12-15');
          this.setState({
            start: start,
            end: end
          }, f);
          break;

        case "Spring Semester":
          start = moment__WEBPACK_IMPORTED_MODULE_18___default()('2019-01-25');
          end = moment__WEBPACK_IMPORTED_MODULE_18___default()('2019-05-20');
          this.setState({
            start: start,
            end: end
          }, f);
          break;

        case "All":
        default:
          this.setState({
            start: moment__WEBPACK_IMPORTED_MODULE_18___default()("2018-09-01"),
            end: moment__WEBPACK_IMPORTED_MODULE_18___default()("2019-05-20")
          }, f);
          break;
      }
    }
  }, {
    key: "filterStudent",
    value: function filterStudent(event) {
      event.preventDefault();
      var query = this.state.queryStudent;
      if (query === "" || query === null || query === undefined) return this.state.initData;
      var filteredData = {};

      for (var prof in this.state.filteredData) {
        filteredData[prof] = [];
      }

      for (var _prof in this.state.initData) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(this.state.initData[_prof]), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var student = _step2.value;
            if (student.name.toLowerCase().includes(query.toLowerCase())) filteredData[_prof].push(student);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      this.setState({
        filteredData: filteredData,
        queryTutor: ""
      });
    }
  }, {
    key: "filterTutor",
    value: function filterTutor(event) {
      event.preventDefault();
      var query = this.state.queryTutor;
      if (query === "" || query === null || query === undefined) return this.state.initData;
      var filteredData = {};

      for (var prof in this.state.filteredData) {
        filteredData[prof] = [];
      }

      for (var _prof2 in this.state.initData) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(this.state.initData[_prof2]), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var student = _step3.value;
            if (student.tutor.toLowerCase().includes(query.toLowerCase())) filteredData[_prof2].push(student);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      this.setState({
        filteredData: filteredData,
        queryStudent: ""
      });
    }
  }, {
    key: "resetFilter",
    value: function resetFilter(evt) {
      evt.preventDefault();
      d3_selection__WEBPACK_IMPORTED_MODULE_19__["select"]("#info").classed('hideInfo', true);
      this.setState({
        filteredData: this.state.initData,
        queryStudent: "",
        queryTutor: ""
      });
    }
  }, {
    key: "enterStudent",
    value: function enterStudent(evt) {
      this.setState({
        queryStudent: evt.target.value
      });
    }
  }, {
    key: "enterTutor",
    value: function enterTutor(evt) {
      this.setState({
        queryTutor: evt.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var profData = [];
      var numProfs = 0;
      var fontStyles = "\n         @font-face {\n            font-family: 'Font Awesome 5 Free';\n            font-style: normal;\n            font-weight: 400;\n            font-display: auto;\n            src: url(\"/FontAwesome/fa-regular-400.ttf\");\n            \n        }\n        .fa,\n        .fas {\n            -moz-osx-font-smoothing: grayscale;\n            -webkit-font-smoothing: antialiased;\n            display: inline-block;\n            font-style: normal;\n            font-variant: normal;\n            text-rendering: auto;\n            line-height: 1;\n            font-family: 'Font Awesome 5 Free';\n            font-weight: 900; }";

      for (var ele in this.state.filteredData) {
        var prof = this.state.filteredData[ele];
        var profInfo = ele.split(" ");

        var uc = __jsx(_components_Usecase_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
          num: numProfs++,
          data: prof,
          name: profInfo[0],
          lastName: profInfo[1],
          key: ele,
          start: this.state.start,
          end: this.state.end,
          width: 900,
          styling: fontStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          },
          __self: this
        });

        profData.push(uc);
      }

      var ucContainer = __jsx("div", {
        id: "ucContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, profData);

      var timeLine = __jsx(_components_Timeframe_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        width: 900,
        start: this.state.start,
        end: this.state.end,
        updateZoom: this.updateZoom,
        updateEnd: this.updateEnd,
        updateStart: this.updateStart,
        setFrame: this.updateFrame,
        data: this.state.filteredData,
        key: "Timeline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      });

      var filter = __jsx("div", {
        id: "filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, " ", __jsx("form", {
        onSubmit: this.filterStudent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "Enter the Student Name: ", __jsx("input", {
        type: "text",
        value: this.state.queryStudent,
        onChange: this.enterStudent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }), " "), __jsx("form", {
        onSubmit: this.filterTutor,
        onReset: this.resetFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "Enter the Tutor Name:  ", __jsx("input", {
        type: "text",
        value: this.state.queryTutor,
        onChange: this.enterTutor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }), __jsx("input", {
        type: "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      })));

      var legend = __jsx("div", {
        id: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "LEGEND"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, "Jeff: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faDragon"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }), "  Julia: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faCat"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }), " Bella: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faLemon"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Alex: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faDog"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }), " Alan: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faCrow"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }), " Hari: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faCheese"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, "Ilias: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faHippo"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), "  Aashish: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faHorse"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), "Gilad: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faFrog"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "Cindy: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faSpider"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }), " Santiago: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faBreadSlice"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }), "  Rahul: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faFish"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      })), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Jonathan: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_21__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_22__["faAppleAlt"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }), " "), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: '#CF142B'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Red"), ": Unresolved"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: "#FAD201"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "Yellow"), ": Partially Resolved"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: "#33A532"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "Green"), ": Resolved"));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(_components_stickyBar_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }), __jsx(_components_Layout_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "Tutor Timeline")), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, "2018-2019 CS101 Tutoring Timeline"), filter, ucContainer, timeLine, legend));
    }
  }]);

  return Timeline;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Timeline);
/*
import React from 'react';
import './App.css';
import fallData from "./Data/Fall2018.json";
import springData from "./Data/Spring2018.json";
import Timeline from "./Timeline";
import UseCaseRow from "./UseCase";
import moment from "moment";
import * as d3Selection from "d3-selection";
import * as d3Scale from "d3-scale";
import {Helmet} from 'react-helmet';

class App extends React.Component{

  constructor(props){
    super(props);

    const scale = d3Scale.scaleTime()
      .domain([moment("2018-09-01"),moment("2019-05-20")])
      .range([0,1150]);

    this.updateZoom = this.updateZoom.bind(this);
    this.updateStart=this.updateStart.bind(this);
    this.updateEnd = this.updateEnd.bind(this);
    this.updateFrame = this.updateFrame.bind(this);
    this.resetZoom = this.resetZoom.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.filterStudent = this.filterStudent.bind(this);
    this.filterTutor = this.filterTutor.bind(this);
    this.enterStudent = this.enterStudent.bind(this);
    this.enterTutor = this.enterTutor.bind(this);
    this.parseData = this.parseData.bind(this);
    this.mergeData = this.mergeData.bind(this);
 
    const fData = this.parseData(fallData);
    const sData = this.parseData(springData);

    const allData = this.mergeData(fData,sData);

    this.state={
      start:moment("2018-09-01"),
      end: moment("2019-05-20"),   
      scale:scale,
      filteredData:allData,
      initData:allData,
      queryStudent:"",
      queryTutor:""
    }
  }


  parseData(semesterData){
    const profData = [];
    for(let student of semesterData){
      if(profData[student.professor] === undefined)
        profData[student.professor] = [];

      profData[student.professor].push(student); 
    }

    return profData;
  }

  mergeData(fData,sData){
    const allData = {};

    for(let f in fData)
      allData[f] = fData[f];
    
    for(let s in sData){
      if(s in allData)
        allData[s] = allData[s].concat(sData[s]);
      else
        allData[s] = sData[s];
    }

    return allData;
  }

  updateStart(date,f){
    this.setState({
      start:moment(date)
    },f);
  }
  
  updateEnd(date,f){
    this.setState({
      end:moment(date)
    },f);
  }

  updateFrame(frame,f){
    let start = this.state.start;
    let end = this.state.end;

    switch(frame){
      case "1 day":
        end = moment(start).add(1,"day").isBefore(moment()) ? moment(start).add(1,"day") : end;
        this.setState({
          end: end
        }, f);
        break;

      case "1 week":     
        end = moment(start).add(1,"week").isBefore(moment()) ? moment(start).add(1,"week") : end;
        this.setState({
          end:end
        },f);
        break;

      case "1 month":
        end = moment(start).add(1,"month").isBefore(moment()) ? moment(start).add(1,"month") : end;
        this.setState({
          end:end
        },f);
        break;

      case "Fall Semester":
        start = moment('2018-09-01');
        end = moment('2018-12-15');
        this.setState({
          start:start,
          end:end
        },f);
        break;

      case "Spring Semester":
        start = moment('2019-01-25');
        end = moment('2019-05-20');
        this.setState({
          start:start,
          end:end
        },f);
        break;

      case "All":
      default:
        this.setState({
          start:moment("2018-09-01"),
          end: moment("2019-05-20")
        },f);
        break;

    }
  }

  updateZoom(scale,f){
    let s = null, e = null;

    if(d3Selection.event.selection === null){
      this.resetZoom(scale,f);
      return;
    }

    [s,e] = d3Selection.event.selection.map(ele=>scale.invert(ele));
    s = moment(s);
    e = moment(e);
    

    this.setState({
      start:s,
      end:e
    });
  }

  resetZoom(scale,f){
    if(d3Selection.event.selection === null){
      this.setState({
          start:moment("2018-09-01"),
          end: moment('2019-05-20')
      },f);
    }
  }


  enterStudent(event){
    this.setState({queryStudent:event.target.value});
  }

  enterTutor(event){
    this.setState({queryTutor:event.target.value});
  }

  filterStudent(event){
    event.preventDefault();

    const query = this.state.queryStudent;
    if(query==="" || query===null || query===undefined)
      return this.state.initData;
      
    const filteredData = {};
    for(let prof in this.state.filteredData){
      filteredData[prof] = [];
    }
    

    for(let prof in this.state.initData){
      for(let student of this.state.initData[prof]){
        if(student.name.toLowerCase().includes(query.toLowerCase()))
          filteredData[prof].push(student);
      }
    }

    this.setState({
      filteredData:filteredData,
      queryTutor:""
    });
  }

  resetFilter(event){
    event.preventDefault();
    d3Selection.select("#info").classed('hideInfo',true);
    //d3Selection.select("#info").selectAll("*").remove();
    this.setState({
      filteredData:this.state.initData,
      queryStudent:"",
      queryTutor:""});
  }

  filterTutor(event){
    event.preventDefault();

    const query = this.state.queryTutor;
    if(query==="" || query===null || query===undefined)
      return this.state.initData;
      
    const filteredData = {};
    for(let prof in this.state.filteredData){
      filteredData[prof] = [];
    }
    
    for(let prof in this.state.initData){
      for(let student of this.state.initData[prof]){
        if(student.tutor.toLowerCase().includes(query.toLowerCase()))
          filteredData[prof].push(student);
      }
    }

    this.setState({
      filteredData:filteredData,
      queryStudent:""
    });
  }

  render(){
    const profData = [];

    let numProfs = 0;
    for(let ele in this.state.filteredData){
      const prof = this.state.filteredData[ele];
      const uc = <UseCaseRow num={numProfs++} data ={prof} name={ele.split(" ")[0]} lastName ={ele.split(" ")[1]} key={ele}
      start = {this.state.start} end = {this.state.end} width = {900}/>
      profData.push(uc);
    }

    const ucContainer = <div id="ucContainer">
      {profData}
    </div>

    const timeLine = <Timeline width={900}start={this.state.start} end = {this.state.end} 
    updateZoom = {this.updateZoom}updateEnd = {this.updateEnd} updateStart={this.updateStart} 
    setFrame={this.updateFrame} data={this.state.filteredData} key='Timeline'/>;

    let info = <div id="info" className='hideInfo'></div>    
 
    const legend = <div id='legend'>
        <h3>LEGEND</h3>
        <p>Jeff: <i className='fas fa-dragon'></i>  Julia: <i className='fas fa-cat'></i> Bella: <i className='fas fa-lemon'></i></p>
        <p>Alex: <i className='fas fa-dog'></i> Alan: <i className='fas fa-crow'></i>  Hari: <i className='fas fa-cheese'></i></p>
        <p>Ilias: <i className='fas fa-hippo'></i>  Aashish: <i className='fas fa-horse'></i> Gilad: <i className='fas fa-frog'></i></p>
        <p>Cindy: <i className='fas fa-spider'></i>Santiago: <i className='fas fa-bread-slice'></i>  Rahul: <i className='fas fa-fish'></i></p>
        <p>Jonathan: <i className='fas fa-apple-alt'></i></p>
        <br/>
        <p><span style={{color:'#CF142B'}}>Red</span>: Unresolved</p>
        <p><span style={{color:"#FAD201"}}>Yellow</span>: Partially Resolved</p>
        <p><span style={{color:"#33A532"}}>Green</span>: Resolved</p>
      </div>

    const filter = <div id='filter'> <form onSubmit={this.filterStudent}>
          Enter the Student Name: <input type="text" value={this.state.queryStudent} onChange={this.enterStudent}/>
          <input type='submit'/> </form>
        <form onSubmit={this.filterTutor} onReset = {this.resetFilter}>
          Enter the Tutor Name:  <input type="text" value={this.state.queryTutor} onChange={this.enterTutor}/>
          <input type='submit'/> <br/>
          <input type='reset'/>
        </form>
      </div>

    return <div>
      <Helmet>
        <title>Tutor Timeline</title>
      </Helmet>
      <h1>2018-2019 CS101 Tutoring Timeline</h1>
      {filter}
      {ucContainer}
      {timeLine}
      {legend}
      {info}
    </div>
  }
  
}
export default App;
*/

/***/ })

})
//# sourceMappingURL=101Timeline.js.bf9808447b3a5f0afab2.hot-update.js.map