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
      }), __jsx("input", {
        type: "date",
        value: this.props.start.format('YYYY-MM-DD'),
        onChange: function onChange(date) {
          return _this3.updateStart(date);
        },
        min: "2018-09-01",
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
      }), __jsx("input", {
        type: "date",
        value: this.props.end.format('YYYY-MM-DD'),
        onChange: function onChange(date) {
          return _this3.updateEnd(date);
        },
        max: "2019-05-20",
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
      console.log("!!!!");
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
          lineNumber: 133
        },
        __self: this
      }, this.props.styling);

      var style = __jsx("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "          \n        .ucRow text{\n            cursor:pointer;\n        }\n        \n        .ucRow rect{\n            stroke:#8E8D8A;\n        }");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, iconStyle, __jsx("styles", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, style), __jsx("svg", {
        id: this.rowName,
        className: "row",
        width: this.props.width + 150,
        height: 140,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("rect", {
        className: "border",
        width: this.props.width + 150,
        height: 140,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })));
    }
  }]);

  return UseCaseRow;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (UseCaseRow);

/***/ })

})
//# sourceMappingURL=101Timeline.js.62ebc2e8fc19196a7e5a.hot-update.js.map