webpackHotUpdate("static\\development\\pages\\101Timeline.js",{

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
      }, "          \n            .ucRow text{\n            cursor:pointer;\n        }\n        \n        .ucRow rect{\n            stroke:#8E8D8A;\n        }");

      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, iconStyle, __jsx("styles", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, style), __jsx("svg", {
        id: this.rowName,
        className: "row",
        width: this.props.width + 150,
        height: 140,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("rect", {
        className: "border",
        width: this.props.width + 150,
        height: 140,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
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
//# sourceMappingURL=101Timeline.js.6b38f90b932362c83520.hot-update.js.map