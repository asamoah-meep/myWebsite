webpackHotUpdate("static\\development\\pages\\101Timeline.js",{

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
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! public/Data/Fall2018.json */ "./public/Data/Fall2018.json");
var public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! public/Data/Fall2018.json */ "./public/Data/Fall2018.json", 1);
/* harmony import */ var public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! public/Data/Spring2019.json */ "./public/Data/Spring2019.json");
var public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! public/Data/Spring2019.json */ "./public/Data/Spring2019.json", 1);
/* harmony import */ var components_stickyBar_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/stickyBar.js */ "./components/stickyBar.js");
/* harmony import */ var components_layout_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/layout.js */ "./components/layout.js");
/* harmony import */ var components_Timeframe_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Timeframe.js */ "./components/Timeframe.js");
/* harmony import */ var components_Usecase_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Usecase.js */ "./components/Usecase.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








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
    var scale = d3_scale__WEBPACK_IMPORTED_MODULE_19__["scaleTime"]().domain([moment__WEBPACK_IMPORTED_MODULE_17___default()("2018-09-02"), moment__WEBPACK_IMPORTED_MODULE_17___default()("2019-05-21")]).range([0, 1150]);
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

    var fData = _this.parseData(public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_10__);

    var sData = _this.parseData(public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_11__);

    var allData = _this.mergeData(fData, sData);

    _this.state = {
      start: moment__WEBPACK_IMPORTED_MODULE_17___default()("2018-09-02"),
      end: moment__WEBPACK_IMPORTED_MODULE_17___default()("2019-05-21"),
      scale: scale,
      filteredData: allData,
      initData: allData,
      queryStudent: "",
      queryTutor: ""
    };
    _this.style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\n\n          .datePicker{\n            display:inline-block;\n            position:relative;\n            left:15px;\n          }\n          \n          #filter{\n            padding-right:10px;\n            padding-bottom:10px;\n            display:inline-block;\n            width:467.5px;\n            vertical-align:bottom;\n            border-right: 2px solid #FFCB9A;\n            border-bottom: 2px solid #FFCB9A;\n            margin-bottom:20px;\n\n          }\n          \n          .hideInfo{\n            visibility: hidden;\n          }\n          \n          #legend{\n            vertical-align:top;\n            display: inline-block;\n            border:2px solid #FFCB9A;\n            padding:10px;\n            margin-left:20px;\n            position:relative;\n            width:500px;\n            padding:2px;\n            margin-bottom:20px;\n          }\n                    \n          #info{\n            text-align:left;\n            display:inline-block;\n            padding:5px;\n            margin:3px;\n            border:2px solid #FFCB9A;\n            overflow-x:auto;\n            position:relative;\n            bottom:60px;\n            left:710px;\n            width:300px;\n          }\n          \n          #info p{\n            font-size:.8em;\n            margin-block-start:.5em;\n            margin-block-end:.5em;\n          \n          }\n          \n          input{\n            background-color:#D8C3A5;\n          }\n\n          #studentForm{\n              position:relative;\n              left:8px;\n          }\n\n          #tutorForm{\n              position:relative;\n              left:27px;\n          }\n\n          #ucContainer{\n            overflow-y:auto;\n            height:350px;\n            width:1030px;\n            display:inline-block;\n          }\n          \n        ");
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Timeline, [{
    key: "resetZoom",
    value: function resetZoom(f) {
      if (d3_selection__WEBPACK_IMPORTED_MODULE_18__["event"].selection === null) {
        this.setState({
          start: moment__WEBPACK_IMPORTED_MODULE_17___default()("2018-09-02"),
          end: moment__WEBPACK_IMPORTED_MODULE_17___default()('2019-05-21')
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

      if (d3_selection__WEBPACK_IMPORTED_MODULE_18__["event"].selection === null) {
        this.resetZoom(f);
        return;
      }

      var _d3Selection$event$se = d3_selection__WEBPACK_IMPORTED_MODULE_18__["event"].selection.map(function (ele) {
        return scale.invert(ele);
      });

      var _d3Selection$event$se2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_d3Selection$event$se, 2);

      s = _d3Selection$event$se2[0];
      e = _d3Selection$event$se2[1];
      s = moment__WEBPACK_IMPORTED_MODULE_17___default()(s);
      e = moment__WEBPACK_IMPORTED_MODULE_17___default()(e);
      this.setState({
        start: s,
        end: e
      });
    }
  }, {
    key: "updateStart",
    value: function updateStart(date, f) {
      this.setState({
        start: moment__WEBPACK_IMPORTED_MODULE_17___default()(date)
      }, f);
    }
  }, {
    key: "updateEnd",
    value: function updateEnd(date, f) {
      this.setState({
        end: moment__WEBPACK_IMPORTED_MODULE_17___default()(date)
      }, f);
    }
  }, {
    key: "updateFrame",
    value: function updateFrame(frame, f) {
      var start = this.state.start;
      var end = this.state.end;

      switch (frame) {
        case "1 day":
          end = moment__WEBPACK_IMPORTED_MODULE_17___default()(start).add(1, "day").isBefore(moment__WEBPACK_IMPORTED_MODULE_17___default()()) ? moment__WEBPACK_IMPORTED_MODULE_17___default()(start).add(1, "day") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "1 week":
          end = moment__WEBPACK_IMPORTED_MODULE_17___default()(start).add(1, "week").isBefore(moment__WEBPACK_IMPORTED_MODULE_17___default()()) ? moment__WEBPACK_IMPORTED_MODULE_17___default()(start).add(1, "week") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "1 month":
          end = moment__WEBPACK_IMPORTED_MODULE_17___default()(start).add(1, "month").isBefore(moment__WEBPACK_IMPORTED_MODULE_17___default()()) ? moment__WEBPACK_IMPORTED_MODULE_17___default()(start).add(1, "month") : end;
          this.setState({
            end: end
          }, f);
          break;

        case "Fall Semester":
          start = moment__WEBPACK_IMPORTED_MODULE_17___default()('2018-09-02');
          end = moment__WEBPACK_IMPORTED_MODULE_17___default()('2018-12-15');
          this.setState({
            start: start,
            end: end
          }, f);
          break;

        case "Spring Semester":
          start = moment__WEBPACK_IMPORTED_MODULE_17___default()('2019-01-25');
          end = moment__WEBPACK_IMPORTED_MODULE_17___default()('2019-05-21');
          this.setState({
            start: start,
            end: end
          }, f);
          break;

        case "All":
        default:
          this.setState({
            start: moment__WEBPACK_IMPORTED_MODULE_17___default()("2018-09-02"),
            end: moment__WEBPACK_IMPORTED_MODULE_17___default()("2019-05-21")
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
      d3_selection__WEBPACK_IMPORTED_MODULE_18__["select"]("#info").classed('hideInfo', true);
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
      var fontStyles = "     \n        .fa,\n        .fas {\n            -moz-osx-font-smoothing: grayscale;\n            -webkit-font-smoothing: antialiased;\n            display: inline-block;\n            font-style: normal;\n            font-variant: normal;\n            text-rendering: auto;\n            line-height: 1;\n            font-family: 'Font Awesome 5 Free';\n            font-weight: 900; }\n            \n        @font-face {\n            font-family: 'Font Awesome 5 Free';\n            font-style: normal;\n            font-weight: 400;\n            font-display: auto;\n            src: url(\"/FontAwesome/fa-regular-400.eot\");\n            src: url(\"/FontAwesome/fa-regular-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"/FontAwesome/fa-regular-400.woff2\") format(\"woff2\"), url(\"/FontAwesome/fa-regular-400.woff\") format(\"woff\"), url(\"/FontAwesome/fa-regular-400.ttf\") format(\"truetype\"), url(\"/FontAwesome/fa-regular-400.svg#fontawesome\") format(\"svg\"); \n        }\n        @font-face {\n            font-family: 'Font Awesome 5 Free';\n            font-style: normal;\n            font-weight: 900;\n            font-display: auto;\n            src: url(\"/FontAwesome/fa-solid-900.eot\");\n            src: url(\"/FontAwesome/fa-solid-900.eot?#iefix\") format(\"embedded-opentype\"), url(\"/FontAwesome/fa-solid-900.woff2\") format(\"woff2\"), url(\"/FontAwesome/fa-solid-900.woff\") format(\"woff\"), url(\"/FontAwesome/fa-solid-900.ttf\") format(\"truetype\"), url(\"/FontAwesome/fa-solid-900.svg#fontawesome\") format(\"svg\"); \n        }  \n            \n            ";

      for (var ele in this.state.filteredData) {
        var prof = this.state.filteredData[ele];
        var profInfo = ele.split(" ");

        var uc = __jsx(components_Usecase_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          num: numProfs++,
          data: prof,
          name: profInfo[0],
          lastName: profInfo[1],
          key: ele,
          start: this.state.start,
          end: this.state.end,
          width: 850,
          styling: fontStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          },
          __self: this
        });

        profData.push(uc);
      }

      var ucContainer = __jsx("div", {
        id: "ucContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, profData);

      var info = __jsx("div", {
        id: "info",
        className: "hideInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      });

      var timeLine = __jsx(components_Timeframe_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        width: 850,
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
          lineNumber: 374
        },
        __self: this
      });

      var filter = __jsx("div", {
        id: "filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, " ", __jsx("form", {
        onSubmit: this.filterStudent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Enter the Student Name: ", __jsx("input", {
        type: "text",
        id: "studentForm",
        value: this.state.queryStudent,
        onChange: this.enterStudent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }), " "), __jsx("form", {
        onSubmit: this.filterTutor,
        onReset: this.resetFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }, "Enter the Tutor Name:  ", __jsx("input", {
        type: "text",
        id: "tutorForm",
        value: this.state.queryTutor,
        onChange: this.enterTutor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }), __jsx("input", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }), __jsx("input", {
        type: "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      })));

      var legend = __jsx("div", {
        id: "legend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, "LEGEND"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "Jeff: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faDragon"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }), "  Julia: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faCat"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }), " Bella: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faLemon"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }), "Alex: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faDog"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }), " Alan: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faCrow"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }), " Hari: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faCheese"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }), "Ilias: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faHippo"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }), " "), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, " Aashish: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faHorse"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }), "Gilad: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faFrog"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }), "Cindy: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faSpider"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }), " Santiago: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faBreadSlice"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }), "Rahul: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faFish"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }), " Jonathan: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_21__["faAppleAlt"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }), " "), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: '#CF142B'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Red"), ": Unresolved", __jsx("span", {
        style: {
          color: "#FAD201"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "     Yellow"), ": Partially Resolved", __jsx("span", {
        style: {
          color: "#33A532"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, "     Green"), ": Resolved"));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(components_stickyBar_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }), __jsx(components_layout_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, this.style, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, "Tutor Timeline")), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "2018-2019 CS101 Tutoring Timeline"), filter, legend, ucContainer, timeLine, info));
    }
  }]);

  return Timeline;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ })

})
//# sourceMappingURL=101Timeline.js.9812519929cfe4edb806.hot-update.js.map