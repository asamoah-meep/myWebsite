module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Timeframe.js":
/*!*********************************!*\
  !*** ./components/Timeframe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-axis */ "d3-axis");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_axis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-brush */ "d3-brush");
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_brush__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time-format */ "d3-time-format");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_time_format__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\Timeframe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Timeframe extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.format = "YYYY-MM-DD";
    this.createScale = this.createScale.bind(this);
    this.updateEnd = this.updateEnd.bind(this);
    this.updateStart = this.updateStart.bind(this);
    this.removeScaleAndZoom = this.removeScaleAndZoom.bind(this);
    this.updatePoints = this.updatePoints.bind(this);
    this.createZoom = this.createZoom.bind(this);
    this.scale = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleTime"]().domain([moment__WEBPACK_IMPORTED_MODULE_6___default()("2018-09-01"), moment__WEBPACK_IMPORTED_MODULE_6___default()('2019-05-20')]).range([0, this.props.width + 150]);

    this.f = function () {
      d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#zoomBox").call(this.brush.move, [this.props.start, this.props.end].map(ele => this.scale(ele)));
    };

    this.brush = d3_brush__WEBPACK_IMPORTED_MODULE_4__["brushX"]().extent([[5, 0], [this.props.width + 155, 110]]).on("end", () => this.props.updateZoom(this.scale, this.f.bind(this)));
  }

  componentDidMount() {
    this.createScale();
    this.createZoom();
    const that = this;
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["selectAll"]("#timeFrame span").on("click", function () {
      that.props.setFrame(this.innerHTML, that.f.bind(that));
    });
  }

  componentDidUpdate() {
    this.removeScaleAndZoom();
    this.createScale();
    this.updatePoints();
  }

  removeScaleAndZoom() {
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#timeScale").remove();
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".pointRow").remove();
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#zoomBrush").selectAll("*").remove();
  }

  updateStart(date) {
    this.props.updateStart(date, this.f.bind(this));
  }

  updateEnd(date) {
    this.props.updateEnd(date, this.f.bind(this));
  }

  createScale() {
    const scale = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleTime"]().domain([this.props.start, this.props.end]).range([0, this.props.width]);
    const axis = d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](scale);
    let diff = Math.abs(this.props.start.diff(this.props.end, "months"));

    if (diff <= 3) {
      diff = Math.abs(this.props.start.diff(this.props.end, "hours"));
      if (diff < 72) axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_5__["timeFormat"]("%I%p %b %f"));else axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_5__["timeFormat"]("%b %e"));
    } else axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_5__["timeFormat"]("%b %Y"));

    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#timeBox").append("g").attr("transform", "translate(150,0)").attr("id", "timeScale").call(axis);
  }

  createZoom() {
    const scale = this.scale;
    const axis = d3_axis__WEBPACK_IMPORTED_MODULE_1__["axisTop"](scale);
    axis.tickFormat(d3_time_format__WEBPACK_IMPORTED_MODULE_5__["timeFormat"]("%b %Y"));
    const brush = this.brush;
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#timeBox").append("g").attr("id", "zoomBox").attr("transform", "translate(20,30)");
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#timeBox").append("g").attr("transform", "translate(25,140)").call(axis);
    const zoomBrush = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#zoomBox");
    zoomBrush.call(brush).call(brush.move, [this.props.start, this.props.end].map(ele => scale(ele)));
  }

  updatePoints() {
    const profData = [];

    for (let prof in this.props.data) profData.push(this.props.data[prof]);

    const scale = this.scale;
    const yScale = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().domain([0, profData.length]).range([0, 100]);
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#zoomBox").selectAll("g [class=pointRow]").data(profData).enter().append('g').classed("pointRow", true).attr('y', (d, i) => yScale(i));
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["selectAll"]('.pointRow').selectAll('circle [class=scalePoint]').data(d => d.filter(ele => ele.date !== null)).enter().append('circle').classed('scalePoint', true).attr("cx", d => scale(moment__WEBPACK_IMPORTED_MODULE_6___default()(d.date))).attr("cy", function (d) {
      return +this.parentNode.getAttribute('y') + 10;
    }).attr("fill", d => {
      if (d.resolve === undefined) d.resolve = 'Unresolved';
      d.resolve = d.resolve.trim();
      if (d.resolve === 'Resolved: they get it!' || d.resolve === 'Resolved - they get it!') return '#33A532';else if (d.resolve === "Resolved - they're still shaky" || d.resolve === "Resolved: they're still shaky") return '#FAD201';else if (d.resolve.includes('Unresolved')) return '#CF142B';else return '#FAD201';
    });
  }

  render() {
    const style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, `
            .scalePoint{
                r:3;
            }
          
            #timeFrame span{
                text-decoration:underline;
                color: #D1E8E2;
                cursor:pointer;
            }

            #timeframe span:hover{
                color: #DA7B93;
            }

            .row .border{
                fill:none;
                stroke:black;
            }

            #zoomBox .selection{
            stroke:#EAE7DC;
            }
          `);

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, style, __jsx("svg", {
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
      onChange: date => this.updateStart(date),
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
      onChange: date => this.updateEnd(date),
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

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\Usecase.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class UseCaseRow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.rowName = this.props.name;
    this.createItems = this.createItems.bind(this);
    this.removeItems = this.removeItems.bind(this);
    this.createInfo = this.createInfo.bind(this);
  }

  componentDidMount() {
    this.createItems();
  }

  componentDidUpdate() {
    this.removeItems();
    this.createItems();
  }

  removeItems() {
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"](`#${this.rowName}`).selectAll("*").remove();
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"](`#${this.rowName}`).append("rect").classed("border", true).attr("width", this.props.width + 150).attr("height", 140);
  }

  createItems() {
    const data = this.props.data.filter(ele => moment__WEBPACK_IMPORTED_MODULE_3___default()(ele.date).isBetween(this.props.start, this.props.end));
    const scale = d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]().domain([this.props.start, this.props.end]).range([135, this.props.width + 135]);
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"](`#${this.rowName}`).selectAll("rect[class = rowImg]").data(data).enter().append('text').classed("fas", true).text(d => {
      if (d.tutor.includes("Jeff")) return '\uf6d5'; //dragon
      else if (d.tutor.includes("Julia")) return '\uf6be'; //cat
        else if (d.tutor.includes("ella")) return '\uf094'; // lemon
          else if (d.tutor.includes("Alex")) return '\uf6d3'; // dog
            else if (d.tutor.includes("Alan")) return '\uf4ba'; //bird
              else if (d.tutor.includes("Hari")) return '\uf7ef'; //cheese
                else if (d.tutor.includes("Ilias")) return '\uf6ed'; //hippo
                  else if (d.tutor.includes("Aashish")) return '\uf6f0'; //horse
                    else if (d.tutor.includes("Gilad")) return '\uf700'; //frog
                      else if (d.tutor.includes("Cindy")) return '\uf717'; //spider
                        else if (d.tutor.includes("Jonathan")) return '\uf5d1'; //apple
                          else if (d.tutor.includes("Santiago")) return '\uf7ec'; //toast
                            else if (d.tutor.includes("Rahul")) return '\uf578'; //fish
                              else return '\uf563'; //cookie
    }).attr("x", d => scale(moment__WEBPACK_IMPORTED_MODULE_3___default()(d.date))).attr('y', (d, i) => 15 + 30 * i % 150).attr('width', 40).attr('height', 40).attr("fill", d => {
      if (d.resolve === undefined) d.resolve = 'Unresolved';
      d.resolve = d.resolve.trim();
      if (d.resolve === 'Resolved: they get it!' || d.resolve === 'Resolved - they get it!') return '#33A532';else if (d.resolve === "Resolved - they're still shaky" || d.resolve === "Resolved: they're still shaky") return '#FAD201';else if (d.resolve.includes('Unresolved')) return '#CF142B';else return '#FAD201';
    }).on("click", d => this.createInfo(d)).append('title').attr('text', d => d.tutor);
    d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"](`#${this.rowName}`).classed("ucRow", true).append("text").attr("x", 5).attr("y", 75).classed("ucName", true).text(this.props.lastName);
  }

  createInfo(d) {
    console.log("!!!!");
    const info = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]("#info");
    info.classed('hideInfo', false);
    info.selectAll("*").remove();

    for (let attr in d) {
      if (attr === 'date') info.append('p').text("Date: " + moment__WEBPACK_IMPORTED_MODULE_3___default()(d[attr]).format("dddd, MMMM Do YYYY, h:mm:ss a"));else if (attr === 'resolve') info.append('p').text(d[attr]);else {
        const attrTitle = attr[0].toUpperCase() + attr.substring(1);
        info.append("p").text(attrTitle + ":" + d[attr]);
      }
    }
  }

  render() {
    const iconStyle = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, this.props.styling);

    const style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, `          
        .ucRow text{
            cursor:pointer;
        }
        
        .ucRow rect{
            stroke:#8E8D8A;
        }`);

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, iconStyle, __jsx("styles", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, style), __jsx("svg", {
      id: this.rowName,
      className: "row",
      width: this.props.width + 150,
      height: 140,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("rect", {
      className: "border",
      width: this.props.width + 150,
      height: 140,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UseCaseRow);

/***/ }),

/***/ "./components/dropdown.js":
/*!********************************!*\
  !*** ./components/dropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\dropdown.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Dropdown extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.expand = this.expand.bind(this);
    this.state = {
      show: this.props.openOnStart
    };
  }

  expand() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const arrow = this.state.show ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCaretSquareUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCaretSquareDown"];

    const style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, `
            .myFAIcon{
                position:relative;
                color: #D9B08C;
                left:10px;
            }
            h3{
                display:inline-block;
            }
        `);

    const eleStyle = this.props.barDropdown ? "barDropdown" : "drop";
    return __jsx("div", {
      className: eleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, style, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.props.title), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      className: "myFAIcon",
      icon: arrow,
      onClick: this.expand,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), this.state.show && this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Layout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, `
            #content{
                display:inline-block;
                margin-top:5px;
                position:relative;
                left: 30px;
                width:80%;
                padding-left: 15px;
                border-left: solid 2px #D9B08C;
            }
        `);

    const layout = __jsx("div", {
      id: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, this.props.children);

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, style, layout);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/stickyBar.js":
/*!*********************************!*\
  !*** ./components/stickyBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/dropdown.js */ "./components/dropdown.js");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three-gltf-loader */ "three-gltf-loader");
/* harmony import */ var three_gltf_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(three_gltf_loader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\components\\stickyBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class StickyBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    const scene = new three__WEBPACK_IMPORTED_MODULE_3__["Scene"]();
    const camera = new three__WEBPACK_IMPORTED_MODULE_3__["PerspectiveCamera"](75, window.innerHeight / window.innerHeight, .1, 1000);
    camera.position.z = 5;
    camera.position.x = -1;
    const renderer = new three__WEBPACK_IMPORTED_MODULE_3__["WebGLRenderer"]({
      antialias: true,
      alpha: true
    });
    renderer.setSize(100, 100);
    renderer.setClearColor(0xffffff, 0);
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;
    this.mount.appendChild(renderer.domElement);
    const loader = new three_gltf_loader__WEBPACK_IMPORTED_MODULE_5___default.a();
    let logo = undefined;

    const animate = function () {
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

  render() {
    const contact = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
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

    const projects = __jsx("ul", {
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

    const bar = __jsx("div", {
      id: "stickyBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      id: "logoMount",
      ref: ref => this.mount = ref,
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
    }, "Asamoah"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      className: "barIcon",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHome"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), " Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      className: "barIcon",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faAddressCard"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), " About")), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      className: "barIcon",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTasks"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      className: "barIcon",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), " ", __jsx(components_dropdown_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Contact and Media",
      barDropdown: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, contact));

    const style = __jsx("style", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, `

            #logoMount{
                height:75px;
            }

            .barIcon{
                color: #D9B08C;
                display:inline-block;
                position:relative;
                right:5px;
            }

            .barDropdown{
                display:inline-block;
            }

            #stickyBar{
                vertical-align:top;
                position: relative;
                display:inline-block;
                left:20px;
                width:250px;
                margin-right: 5px;
                margin-top:5px;
            }
            .subHeading{
                font-family: NunitoItalic;
                color: #D9B08C;
                display: block;
                font-size: 1.5rem;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-weight: bold;
            }
        `);

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, style, bar);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StickyBar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/101Timeline.js":
/*!******************************!*\
  !*** ./pages/101Timeline.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles.css */ "./styles.css");
/* harmony import */ var styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/Data/Fall2018.json */ "./public/Data/Fall2018.json");
var public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! public/Data/Fall2018.json */ "./public/Data/Fall2018.json", 1);
/* harmony import */ var public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! public/Data/Spring2019.json */ "./public/Data/Spring2019.json");
var public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! public/Data/Spring2019.json */ "./public/Data/Spring2019.json", 1);
/* harmony import */ var components_stickyBar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/stickyBar.js */ "./components/stickyBar.js");
/* harmony import */ var components_layout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout.js */ "./components/layout.js");
/* harmony import */ var components_Timeframe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Timeframe.js */ "./components/Timeframe.js");
/* harmony import */ var components_Usecase_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Usecase.js */ "./components/Usecase.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\pages\\101Timeline.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














class Timeline extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const scale = d3_scale__WEBPACK_IMPORTED_MODULE_11__["scaleTime"]().domain([moment__WEBPACK_IMPORTED_MODULE_9___default()("2018-09-02"), moment__WEBPACK_IMPORTED_MODULE_9___default()("2019-05-21")]).range([0, 1150]);
    this.updateZoom = this.updateZoom.bind(this);
    this.updateStart = this.updateStart.bind(this);
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
    const fData = this.parseData(public_Data_Fall2018_json__WEBPACK_IMPORTED_MODULE_2__);
    const sData = this.parseData(public_Data_Spring2019_json__WEBPACK_IMPORTED_MODULE_3__);
    const allData = this.mergeData(fData, sData);
    this.state = {
      start: moment__WEBPACK_IMPORTED_MODULE_9___default()("2018-09-02"),
      end: moment__WEBPACK_IMPORTED_MODULE_9___default()("2019-05-21"),
      scale: scale,
      filteredData: allData,
      initData: allData,
      queryStudent: "",
      queryTutor: ""
    };
    this.style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, `

          .datePicker{
            display:inline-block;
            position:relative;
            left:15px;
          }
          
          #filter{
            padding-right:10px;
            padding-bottom:10px;
            display:inline-block;
            width:467.5px;
            vertical-align:bottom;
            border-right: 2px solid #FFCB9A;
            border-bottom: 2px solid #FFCB9A;
            margin-bottom:20px;

          }
          
          .hideInfo{
            visibility: hidden;
          }
          
          #legend{
            vertical-align:top;
            display: inline-block;
            border:2px solid #FFCB9A;
            padding:10px;
            margin-left:20px;
            position:relative;
            width:500px;
            padding:2px;
            margin-bottom:20px;
          }
                    
          #info{
            text-align:left;
            display:inline-block;
            padding:5px;
            margin:3px;
            border:2px solid #FFCB9A;
            overflow-x:auto;
            position:relative;
            bottom:60px;
            left:710px;
            width:300px;
          }
          
          #info p{
            font-size:.8em;
            margin-block-start:.5em;
            margin-block-end:.5em;
          
          }
          
          input{
            background-color:#D8C3A5;
          }

          #studentForm{
              position:relative;
              left:8px;
          }

          #tutorForm{
              position:relative;
              left:27px;
          }

          #ucContainer{
            overflow-y:auto;
            height:350px;
            width:1030px;
            display:inline-block;
          }
          
        `);
  }

  resetZoom(f) {
    if (d3_selection__WEBPACK_IMPORTED_MODULE_10__["event"].selection === null) {
      this.setState({
        start: moment__WEBPACK_IMPORTED_MODULE_9___default()("2018-09-02"),
        end: moment__WEBPACK_IMPORTED_MODULE_9___default()('2019-05-21')
      }, f);
    }
  }

  parseData(semesterData) {
    const profData = [];

    for (let student of semesterData) {
      if (profData[student.professor] === undefined) profData[student.professor] = [];
      profData[student.professor].push(student);
    }

    return profData;
  }

  mergeData(fData, sData) {
    const allData = {};

    for (let f in fData) allData[f] = fData[f];

    for (let s in sData) {
      if (s in allData) allData[s] = allData[s].concat(sData[s]);else allData[s] = sData[s];
    }

    return allData;
  }

  updateZoom(scale, f) {
    let s = null,
        e = null;

    if (d3_selection__WEBPACK_IMPORTED_MODULE_10__["event"].selection === null) {
      this.resetZoom(f);
      return;
    }

    [s, e] = d3_selection__WEBPACK_IMPORTED_MODULE_10__["event"].selection.map(ele => scale.invert(ele));
    s = moment__WEBPACK_IMPORTED_MODULE_9___default()(s);
    e = moment__WEBPACK_IMPORTED_MODULE_9___default()(e);
    this.setState({
      start: s,
      end: e
    });
  }

  updateStart(date, f) {
    this.setState({
      start: moment__WEBPACK_IMPORTED_MODULE_9___default()(date)
    }, f);
  }

  updateEnd(date, f) {
    this.setState({
      end: moment__WEBPACK_IMPORTED_MODULE_9___default()(date)
    }, f);
  }

  updateFrame(frame, f) {
    let start = this.state.start;
    let end = this.state.end;

    switch (frame) {
      case "1 day":
        end = moment__WEBPACK_IMPORTED_MODULE_9___default()(start).add(1, "day").isBefore(moment__WEBPACK_IMPORTED_MODULE_9___default()()) ? moment__WEBPACK_IMPORTED_MODULE_9___default()(start).add(1, "day") : end;
        this.setState({
          end: end
        }, f);
        break;

      case "1 week":
        end = moment__WEBPACK_IMPORTED_MODULE_9___default()(start).add(1, "week").isBefore(moment__WEBPACK_IMPORTED_MODULE_9___default()()) ? moment__WEBPACK_IMPORTED_MODULE_9___default()(start).add(1, "week") : end;
        this.setState({
          end: end
        }, f);
        break;

      case "1 month":
        end = moment__WEBPACK_IMPORTED_MODULE_9___default()(start).add(1, "month").isBefore(moment__WEBPACK_IMPORTED_MODULE_9___default()()) ? moment__WEBPACK_IMPORTED_MODULE_9___default()(start).add(1, "month") : end;
        this.setState({
          end: end
        }, f);
        break;

      case "Fall Semester":
        start = moment__WEBPACK_IMPORTED_MODULE_9___default()('2018-09-02');
        end = moment__WEBPACK_IMPORTED_MODULE_9___default()('2018-12-15');
        this.setState({
          start: start,
          end: end
        }, f);
        break;

      case "Spring Semester":
        start = moment__WEBPACK_IMPORTED_MODULE_9___default()('2019-01-25');
        end = moment__WEBPACK_IMPORTED_MODULE_9___default()('2019-05-21');
        this.setState({
          start: start,
          end: end
        }, f);
        break;

      case "All":
      default:
        this.setState({
          start: moment__WEBPACK_IMPORTED_MODULE_9___default()("2018-09-02"),
          end: moment__WEBPACK_IMPORTED_MODULE_9___default()("2019-05-21")
        }, f);
        break;
    }
  }

  filterStudent(event) {
    event.preventDefault();
    const query = this.state.queryStudent;
    if (query === "" || query === null || query === undefined) return this.state.initData;
    const filteredData = {};

    for (let prof in this.state.filteredData) {
      filteredData[prof] = [];
    }

    for (let prof in this.state.initData) {
      for (let student of this.state.initData[prof]) {
        if (student.name.toLowerCase().includes(query.toLowerCase())) filteredData[prof].push(student);
      }
    }

    this.setState({
      filteredData: filteredData,
      queryTutor: ""
    });
  }

  filterTutor(event) {
    event.preventDefault();
    const query = this.state.queryTutor;
    if (query === "" || query === null || query === undefined) return this.state.initData;
    const filteredData = {};

    for (let prof in this.state.filteredData) {
      filteredData[prof] = [];
    }

    for (let prof in this.state.initData) {
      for (let student of this.state.initData[prof]) {
        if (student.tutor.toLowerCase().includes(query.toLowerCase())) filteredData[prof].push(student);
      }
    }

    this.setState({
      filteredData: filteredData,
      queryStudent: ""
    });
  }

  resetFilter(evt) {
    evt.preventDefault();
    d3_selection__WEBPACK_IMPORTED_MODULE_10__["select"]("#info").classed('hideInfo', true);
    this.setState({
      filteredData: this.state.initData,
      queryStudent: "",
      queryTutor: ""
    });
  }

  enterStudent(evt) {
    this.setState({
      queryStudent: evt.target.value
    });
  }

  enterTutor(evt) {
    this.setState({
      queryTutor: evt.target.value
    });
  }

  render() {
    const profData = [];
    let numProfs = 0;
    const fontStyles = `     
        .fa,
        .fas {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            line-height: 1;
            font-family: 'Font Awesome 5 Free';
            font-weight: 900; }
            
        @font-face {
            font-family: 'Font Awesome 5 Free';
            font-style: normal;
            font-weight: 400;
            font-display: auto;
            src: url("/FontAwesome/fa-regular-400.eot");
            src: url("/FontAwesome/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("/FontAwesome/fa-regular-400.woff2") format("woff2"), url("/FontAwesome/fa-regular-400.woff") format("woff"), url("/FontAwesome/fa-regular-400.ttf") format("truetype"), url("/FontAwesome/fa-regular-400.svg#fontawesome") format("svg"); 
        }
        @font-face {
            font-family: 'Font Awesome 5 Free';
            font-style: normal;
            font-weight: 900;
            font-display: auto;
            src: url("/FontAwesome/fa-solid-900.eot");
            src: url("/FontAwesome/fa-solid-900.eot?#iefix") format("embedded-opentype"), url("/FontAwesome/fa-solid-900.woff2") format("woff2"), url("/FontAwesome/fa-solid-900.woff") format("woff"), url("/FontAwesome/fa-solid-900.ttf") format("truetype"), url("/FontAwesome/fa-solid-900.svg#fontawesome") format("svg"); 
        }  
            
            `;

    for (let ele in this.state.filteredData) {
      const prof = this.state.filteredData[ele];
      const profInfo = ele.split(" ");

      const uc = __jsx(components_Usecase_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
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

    const ucContainer = __jsx("div", {
      id: "ucContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, profData);

    const info = __jsx("div", {
      id: "info",
      className: "hideInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    });

    const timeLine = __jsx(components_Timeframe_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

    const filter = __jsx("div", {
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

    const legend = __jsx("div", {
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
    }, "Jeff: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faDragon"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }), "  Julia: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCat"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }), " Bella: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faLemon"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }), "Alex: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faDog"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }), " Alan: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCrow"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }), " Hari: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faCheese"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }), "Ilias: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faHippo"],
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
    }, " Aashish: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faHorse"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }), "Gilad: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faFrog"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }), "Cindy: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faSpider"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }), " Santiago: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faBreadSlice"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }), "Rahul: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faFish"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }), " Jonathan: ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faAppleAlt"],
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

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_stickyBar_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }), __jsx(components_layout_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    }, this.style, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a, {
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

}

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./public/Data/Fall2018.json":
/*!***********************************!*\
  !*** ./public/Data/Fall2018.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"date\":\"2018-09-06T11:00:00.000Z\",\"name\":\"Audrey Li\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Install JDK\",\"resolve\":\" test in terminal\"},{\"date\":\"2018-09-07T02:00:00.000Z\",\"name\":\"Michael Nakamura\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Installed JDK\",\"resolve\":\" tested it in terminal\\\"\"},{\"date\":\"2018-09-07T02:15:00.000Z\",\"name\":\"Haohao Zhang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Installed JDK\",\"resolve\":\" tested it in terminal\\\"\"},{\"date\":\"2018-09-07T03:00:00.000Z\",\"name\":\"Janice Zhou\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Installed Sublime\",\"resolve\":\" ran Hello World in terminal\\\"\"},{\"date\":\"2018-09-07T03:00:00.000Z\",\"name\":\"Margaret Sohn\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Candido Cabo\",\"info\":\"\\\"Installed JDK\",\"resolve\":\" tested it in terminal\\\"\"},{\"date\":\"2018-09-07T03:30:00.000Z\",\"name\":\"Ziyuan Li\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Installed JDK\",\"resolve\":\" tested it in terminal\\\"\"},{\"date\":\"2018-09-09T12:45:00.000Z\",\"name\":\"Jackson Lu\",\"tutor\":\"Alexander Nguyen\",\"professor\":\"Nader Nassar\",\"info\":\"\\\"Installed JDK\",\"resolve\":\" tested it in terminal\\\"\"},{\"date\":\"2018-09-10T02:00:00.000Z\",\"name\":\"Hari Mohandas\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Set Java Path\",\"resolve\":\" helped with Homework 1\\\"\"},{\"date\":\"2018-09-10T02:30:00.000Z\",\"name\":\"Sattwik Tripathy\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Installed Eclipse\",\"resolve\":\" ran Hello World in terminal\\\"\"},{\"date\":\"2018-09-10T03:30:00.000Z\",\"name\":\"Esin Onal\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\" Terminal Commands\\\"\",\"resolve\":\"Helping with Terminal Commands\"},{\"date\":\"2018-09-10T04:30:00.000Z\",\"name\":\"Nomuntuya Luehr\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\" Terminal Commands\\\"\",\"resolve\":\"\\\"Installed JDK\"},{\"date\":\"2018-09-10T06:00:00.000Z\",\"name\":\"Michelle Luo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\" Install Java\",\"resolve\":\" PATH\\\"\"},{\"date\":\"2018-09-10T08:00:00.000Z\",\"name\":\"Elisha Ishaal\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\" Install Java\",\"resolve\":\" PATH\\\"\"},{\"date\":\"2018-09-11T11:15:00.000Z\",\"name\":\"Janet Zhu\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Candido Cabo\",\"info\":\" Terminal\\\"\",\"resolve\":\"Using terminal for compiling and running programs\"},{\"date\":\"2018-09-11T01:45:00.000Z\",\"name\":\"Meetali Gupta\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Installing java and intro to terminal commands\",\"resolve\":\" running programs\\\"\"},{\"date\":\"2018-09-11T02:00:00.000Z\",\"name\":\"Tehzeeb Kajani \",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Installing java\",\"resolve\":\" intro to terminal\"},{\"date\":\"2018-09-11T02:15:00.000Z\",\"name\":\"Junhan Xu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Installing java\",\"resolve\":\" intro to terminal\"},{\"date\":\"2018-09-12T11:00:00.000Z\",\"name\":\"hubert  yang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"How to format monetary values by casting from float to int to float\",\"resolve\":\" how to zip a file\\\"\"},{\"date\":\"2018-09-12T07:15:00.000Z\",\"name\":\"Eileen Lee\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Screenshots for Ex0\",\"resolve\":\" terminal commands\\\"\"},{\"date\":\"2018-09-13T11:30:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Basic Java Qs (i.e. Scanner\",\"resolve\":\" types\"},{\"date\":\"2018-09-16T03:30:00.000Z\",\"name\":\"Ellie Dempsey\",\"tutor\":\"Isabella Steains\",\"professor\":\"Amos Bloomberg\",\"info\":\"Problems running eclipse (keeps crashing) - Unresolved because we couldn't figure out why it was crashing. We tried reinstalling eclipse and looked at the version of JDK installed. Nothing worked\",\"resolve\":\"Other - please explain\"},{\"date\":\"2018-09-16T03:30:00.000Z\",\"name\":\"Nikhil Patel\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Compressing the files (which files to compress and if it should contain the package directories) and submitting it (what to name the zip file)\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-17T11:30:00.000Z\",\"name\":\"Byunghoon Jun\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"For loops\",\"resolve\":\" Scanner\\\"\"},{\"date\":\"2018-09-17T12:00:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Setting up Eclipse\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-17T02:15:00.000Z\",\"name\":\"Parthvi Bhutani\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Comparing Strings\",\"resolve\":\" Scanner\\\"\"},{\"date\":\"2018-09-17T02:45:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Scanner\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-17T03:00:00.000Z\",\"name\":\"Madison Sievers\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"Scanner\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-17T03:45:00.000Z\",\"name\":\"Brendan Metz\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Using Terminal\",\"resolve\":\" command line args\\\"\"},{\"date\":\"2018-09-17T04:00:00.000Z\",\"name\":\"Jackson Lu\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Nader Nassar\",\"info\":\"Fixing syntax errors\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-17T04:15:00.000Z\",\"name\":\"Paolla Bruno Dutra\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Scanner\",\"resolve\":\" printf\\\"\"},{\"date\":\"2018-09-17T05:00:00.000Z\",\"name\":\"Ashfaque Sakib\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Explaining main method\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-18T01:00:00.000Z\",\"name\":\"Michele Luo\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Put \\\"\\\"double\\\"\\\" in front of every variable name throughout the program\\\"\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-18T02:00:00.000Z\",\"name\":\"Meetali Gupta\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Understanding switch statements & ambiguous else statements\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-18T02:15:00.000Z\",\"name\":\"Tehzeeb Kajani \",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"Syntax errors such as println vs printIn\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-18T02:30:00.000Z\",\"name\":\"Emma Sargent\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Syntax errors\",\"resolve\":\" using wrong variable names\\\"\"},{\"date\":\"2018-09-19T11:15:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"How to use command line and logical conditions precedence\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-19T11:45:00.000Z\",\"name\":\"Junhan XU\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Understanding switch statements\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-19T12:30:00.000Z\",\"name\":\"Tracy Chen\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Loops\",\"resolve\":\" Terminal\"},{\"date\":\"2018-09-19T06:30:00.000Z\",\"name\":\"Hari Mohandas\",\"tutor\":\"Isabella Steains\",\"professor\":\"Anasse Bari\",\"info\":\"Using the decimal format function and explicit casting\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-19T08:00:00.000Z\",\"name\":\"Yingxuan(Lynn) Lin\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Downloading\",\"resolve\":\" learning how to run programs \\\"\"},{\"date\":\"2018-09-19T07:45:00.000Z\",\"name\":\"Mayu Ranganathan\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Properly calculating pi\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-20T12:00:00.000Z\",\"name\":\"Karishna Mlham\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Using Math.random\",\"resolve\":\" comparing 2 strings\"},{\"date\":\"2018-09-20T12:15:00.000Z\",\"name\":\"Daniel Kaufman\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Using conditional statements\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-20T12:30:00.000Z\",\"name\":\"Tochi Agbo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Syntax errors float vs double\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-21T02:00:00.000Z\",\"name\":\"Emma Saros\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Formatting Strings\",\"resolve\":\" understanding Blackjack logic\\\"\"},{\"date\":\"2018-09-21T02:15:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Explaining boolean logic\",\"resolve\":\" == vs. .equals()\\\"\"},{\"date\":\"2018-09-21T02:30:00.000Z\",\"name\":\"Jasmine Sun\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Commenting\",\"resolve\":\" understanding Sublime\\\"\"},{\"date\":\"2018-09-21T02:30:00.000Z\",\"name\":\"Haohao Zhang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"print vs. println()\",\"resolve\":\" Math.pow()\\\"\"},{\"date\":\"2018-09-21T03:00:00.000Z\",\"name\":\"Karishna Mohan\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Understanding blackjack\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-21T07:45:00.000Z\",\"name\":\"Marissa Posner\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Understanding scanner\",\"resolve\":\" using the .nextInt\"},{\"date\":\"2018-09-22T04:30:00.000Z\",\"name\":\"Gabriel Haberberg\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Implementing the card game logic using loops\",\"resolve\":\" declaring and using arrays\"},{\"date\":\"2018-09-22T04:45:00.000Z\",\"name\":\"Ashmitha Mathukumar\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Understanding Scanner\",\"resolve\":\" booleans\\\"\"},{\"date\":\"2018-09-22T05:15:00.000Z\",\"name\":\"Marissa Posner\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"Helping with homework 2\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-22T06:15:00.000Z\",\"name\":\"Melinda Cardenez\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"Wanted help with Data Structures HW1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-23T03:15:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"finding primes\",\"resolve\":\" string concat\\\"\"},{\"date\":\"2018-09-23T03:30:00.000Z\",\"name\":\"liyue Wang\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Handeling the player and the dealer loops\",\"resolve\":\" storing all the cards drawn as a string and just using a variable storing the total for game logic\\\"\"},{\"date\":\"2018-09-23T04:15:00.000Z\",\"name\":\"Tracy Chen\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"using ascii art for rps\",\"resolve\":\" math.random\\\"\"},{\"date\":\"2018-09-23T04:15:00.000Z\",\"name\":\"yufei Fu\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Amos Bloomberg\",\"info\":\"win conditions\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-09-23T07:30:00.000Z\",\"name\":\"Tyler Reede\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Nader Nassar\",\"info\":\"\\\"string functions\",\"resolve\":\" upper\"},{\"date\":\"2018-09-24T11:45:00.000Z\",\"name\":\"Myles Agudelo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Using package in a java class\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-24T11:45:00.000Z\",\"name\":\"Jasmine Sun\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Logic of the game and variable types\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-24T11:45:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Logic of the game\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-24T02:00:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Blackjack Logic\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-24T02:00:00.000Z\",\"name\":\"Emma Sargent\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Integer Division\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-24T03:30:00.000Z\",\"name\":\"Yijia Chen\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Swing extra credit - never learned Swing in my 101 class\",\"resolve\":\" but I sent him a tutorial\\\"\"},{\"date\":\"2018-09-24T04:45:00.000Z\",\"name\":\"Paolla Bruno Dutra\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\".equals() vs. ==\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-24T05:00:00.000Z\",\"name\":\"Matthew Eng\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"INTEGER.MAX_VALUE\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-24T05:00:00.000Z\",\"name\":\"Ashfaque Sakib\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Integer Division\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-25T11:00:00.000Z\",\"name\":\"Emms Sargent\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Break case of do while loop\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-25T11:30:00.000Z\",\"name\":\"Byunghoon Jun\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Teseo Schneider\",\"info\":\"Calling methods from the main method\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-25T12:00:00.000Z\",\"name\":\"Michelle Luo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Integer.MAX_VALUE as the initial value\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-25T12:15:00.000Z\",\"name\":\"Joy Deng\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Integer.MAX_VALUE as the initial value\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-25T12:45:00.000Z\",\"name\":\"Almazhan Abdukhat\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Most efficient way to check input conditions\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-25T01:00:00.000Z\",\"name\":\"Tess Koo\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi looping - confusion with int trucation\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-25T01:45:00.000Z\",\"name\":\"Brandon Borden\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Blackjack Logic - breaks don't exist for if statements\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-25T02:30:00.000Z\",\"name\":\"Junhan XU\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi Looping - result was slightly off because she ended her for loop in a different spot\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-26T09:00:00.000Z\",\"name\":\"Ellie Dempsey\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Didn't know method to compare strings\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-26T11:00:00.000Z\",\"name\":\"esin onal\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Rock paper scissors hw\",\"resolve\":\" understanding scope\\\"\"},{\"date\":\"2018-09-26T12:30:00.000Z\",\"name\":\"Brendan Metz\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Rock paper scissors hw\",\"resolve\":\" Arrays\"},{\"date\":\"2018-09-26T06:15:00.000Z\",\"name\":\"Carmen Liu\",\"tutor\":\"Isabella Steains\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Just wanted the printf function and hexadecimal notation to be explained\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-26T06:15:00.000Z\",\"name\":\"janet lee\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"storing data from a for loop\",\"resolve\":\" using scanner for read data\\\"\"},{\"date\":\"2018-09-26T08:00:00.000Z\",\"name\":\"Tehzeeb Kajani \",\"tutor\":\"Isabella Steains\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Rock paper scissors hw\",\"resolve\":\" understanding scope\\\"\"},{\"date\":\"2018-09-26T08:00:00.000Z\",\"name\":\"Olivia Huang\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Anasse Bari\",\"info\":\"practice 2\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-28T02:15:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment - this student is still struggling with basic concepts\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-09-28T02:45:00.000Z\",\"name\":\"Ashfaque Sakib\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Explaining do while loops\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-28T03:00:00.000Z\",\"name\":\"Lawrence Liu\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Wrote if (int == 1) instead of if (num == 1)\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-28T03:15:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-28T03:15:00.000Z\",\"name\":\"David Iosilevich\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Candido Cabo\",\"info\":\"\\\"Calculating PI\",\"resolve\":\" print vs. println\\\"\"},{\"date\":\"2018-09-28T11:45:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Alexander Nguyen\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-28T02:45:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-28T02:45:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-28T03:30:00.000Z\",\"name\":\"Emma Saros\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-09-29T03:15:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Text Analysis Assignment - how to split the analasys logic between different functions\",\"resolve\":\" how to use arrays (wasn't fully familiar with syntax and concepts)\"},{\"date\":\"2018-09-29T04:45:00.000Z\",\"name\":\"Yingxuan(Lynn) Lin\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Black Jack Assignment - how to structure the gameplay loops\",\"resolve\":\" how to store card information\"},{\"date\":\"2018-10-01T03:00:00.000Z\",\"name\":\"Ariff Ahmed\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"min\",\"resolve\":\" max\"},{\"date\":\"2018-10-02T03:30:00.000Z\",\"name\":\"Eirc He\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Text Analysis Assignment - How to read a file from a path the user entered. Using different scanners that read from different input streams. How to split the file analasys between methods\",\"resolve\":\" passing information between methods (pass value vs reference)\"},{\"date\":\"2018-10-01T11:00:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-01T12:00:00.000Z\",\"name\":\"Duncan Lamont\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-01T02:00:00.000Z\",\"name\":\"Gabriel Haberberg\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-01T03:15:00.000Z\",\"name\":\"Julien Werzowa\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-01T03:30:00.000Z\",\"name\":\"Phoebe Fu\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-01T03:45:00.000Z\",\"name\":\"Jennifer Zhuang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-01T04:15:00.000Z\",\"name\":\"Aojie Yu\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-01T05:00:00.000Z\",\"name\":\"Tej Chilukuri\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-01T05:00:00.000Z\",\"name\":\"John Barron\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T12:00:00.000Z\",\"name\":\"Tariq Abubakr\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignement\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-10-02T12:15:00.000Z\",\"name\":\"Jackson Lu\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Nader Nassar\",\"info\":\"Passing in arguments to methods\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T01:00:00.000Z\",\"name\":\"Ziqin Xu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"How to remove duplicates from an array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T01:15:00.000Z\",\"name\":\"Steven Hu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"using .split() and parsing strings\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T01:30:00.000Z\",\"name\":\"Ari Mayhew\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"using scanners and closing them properly\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T01:45:00.000Z\",\"name\":\"Jennifer Zhuang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"using system.out.printf\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T02:00:00.000Z\",\"name\":\"Jenny Jiang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"parsing strings\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T02:15:00.000Z\",\"name\":\"Camilla Zang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"break statements and switch statements\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T02:30:00.000Z\",\"name\":\"Junheen Xe\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"break statements and using different .java files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T02:45:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"splitting strings and reading files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-02T02:45:00.000Z\",\"name\":\"Yingxuan Lin\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Arrays of strings\",\"resolve\":\" .split()\"},{\"date\":\"2018-10-03T09:30:00.000Z\",\"name\":\"Ari Mayhew\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Arrays\",\"resolve\":\" how to make arrays of strings\"},{\"date\":\"2018-10-03T10:00:00.000Z\",\"name\":\"Matthew Michelson\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Understanding Character methods & string methods\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-03T12:45:00.000Z\",\"name\":\"Zibin Zhen\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Comparing strings: .equals vs ==\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-03T06:15:00.000Z\",\"name\":\"Julia Zhang\",\"tutor\":\"Isabella Steains\",\"professor\":\"Anasse Bari\",\"info\":\"Describing exercise 3\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-03T06:15:00.000Z\",\"name\":\"Brandon Borden\",\"tutor\":\"Isabella Steains\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignement\",\"resolve\":\"Other - please explain\"},{\"date\":\"2018-10-03T07:00:00.000Z\",\"name\":\"Ashfaque Sakib\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Understanding methods and functions\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-03T07:45:00.000Z\",\"name\":\"Ziying Cao\",\"tutor\":\"Isabella Steains\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Data types\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-03T07:15:00.000Z\",\"name\":\"Sophia Shi\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Teseo Schneider\",\"info\":\"Exercise 4 and 5\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-03T08:15:00.000Z\",\"name\":\"Yingxuan Lin\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignement\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-04T11:00:00.000Z\",\"name\":\"Mayu Ranganathan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Debugging and indexing into arrays\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-04T11:15:00.000Z\",\"name\":\"Madison Sievers\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Teseo Schneider\",\"info\":\"Printing the O's and for loops\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-05T02:00:00.000Z\",\"name\":\"Ashfaque Sakib\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Understanding Methods\",\"resolve\":\" char vs String\\\"\"},{\"date\":\"2018-10-05T02:30:00.000Z\",\"name\":\"Bella Demurguia\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"touch\",\"resolve\":\" mkdir\"},{\"date\":\"2018-10-05T03:15:00.000Z\",\"name\":\"Ethan Reznikoff\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Hexadecimal\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-05T03:30:00.000Z\",\"name\":\"David Iosilevich\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Candido Cabo\",\"info\":\"Understanding Methods\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-05T03:45:00.000Z\",\"name\":\"Mishaal Kirpalani\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading numbers on the same line\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-07T03:00:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Isabella Steains\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Binary code/hexadecimal - converting to and from decimal\",\"resolve\":\" how to use the terminal to navigate directories and compile+run java programs (how to run classes that are in a package from the command prompt)\\\"\"},{\"date\":\"2018-10-07T04:00:00.000Z\",\"name\":\"Marissa Posner\",\"tutor\":\"Isabella Steains\",\"professor\":\"Anasse Bari\",\"info\":\"Char/int - formatting the printed output for chars in a range\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-09T02:00:00.000Z\",\"name\":\"Ellie Dempsey\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Text Analysis Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-09T02:00:00.000Z\",\"name\":\"Mayu Ranganathan\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pass by value vs pass by reference\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-09T02:00:00.000Z\",\"name\":\"Nomuntuya Luehr\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"Handling index out of bounds errors\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-09T02:15:00.000Z\",\"name\":\"Jia Ju\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Converting hexadecimal to decimal\",\"resolve\":\"Unresolved - ran out of time\"},{\"date\":\"2018-10-09T02:30:00.000Z\",\"name\":\"Jennifer Zhuang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\".indexOf()\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-09T03:30:00.000Z\",\"name\":\"David Iosilevich\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Loops\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-09T03:45:00.000Z\",\"name\":\"Ashley Sidoryk\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Do while loops\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-09T05:00:00.000Z\",\"name\":\"Matthew Michelson\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Hexadecimal to binary\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-09T05:00:00.000Z\",\"name\":\"Wangrui Hou\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Stack\",\"resolve\":\" heap problems\\\"\"},{\"date\":\"2018-10-09T05:15:00.000Z\",\"name\":\"Phionna Teo\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Constants\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T09:30:00.000Z\",\"name\":\"Matt Michelson\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Practice Exam 1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T10:00:00.000Z\",\"name\":\"Jong Heon Han\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Practice Exam 1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T10:45:00.000Z\",\"name\":\"Almazahm Abtukhab\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Practice Exam 1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T10:30:00.000Z\",\"name\":\"Eileen Lee\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"for loops and printing characters\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T10:45:00.000Z\",\"name\":\"Ezra Cohen\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Practice Exam 1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T10:00:00.000Z\",\"name\":\"Ashfaque Sakib \",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Practice Exam 1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T11:45:00.000Z\",\"name\":\"Liyue Wang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Practice Exam Questions\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T11:30:00.000Z\",\"name\":\"Jia Gu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Practice Exam 1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T12:15:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Command line: making files\",\"resolve\":\" compiling code\"},{\"date\":\"2018-10-10T12:45:00.000Z\",\"name\":\"Jane Kim\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Practice Exam 1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T12:30:00.000Z\",\"name\":\"Jong Heon Han\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Practice Exam 1\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T06:15:00.000Z\",\"name\":\"Soho Hong\",\"tutor\":\"Isabella Steains\",\"professor\":\"Anasse Bari\",\"info\":\"Help with the powers question\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-10T06:15:00.000Z\",\"name\":\"Hubert Yang\",\"tutor\":\"Isabella Steains\",\"professor\":\"Amos Bloomberg\",\"info\":\"Help with data types\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-12T02:15:00.000Z\",\"name\":\"Jia Ju\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\".equals vs ==\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-15T11:30:00.000Z\",\"name\":\"Soho Hong\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"prime numbers\",\"resolve\":\" methods\\\"\"},{\"date\":\"2018-10-15T02:00:00.000Z\",\"name\":\"Holden Sinnard\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Methods\",\"resolve\":\" scope\\\"\"},{\"date\":\"2018-10-17T12:15:00.000Z\",\"name\":\"Valeria Samame\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Methods\",\"resolve\":\" scope\\\"\"},{\"date\":\"2018-10-17T12:30:00.000Z\",\"name\":\"Gabriel Haberberg\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Viewing csv in text file and how to import to 2-D array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-18T12:15:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading in csv file to program and saving in 2-D array\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-10-18T12:15:00.000Z\",\"name\":\"Hari Mohandas\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Handling variables and tranferring between multiple methods\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-18T12:30:00.000Z\",\"name\":\"Ilias Boujlil\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Global variables\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-18T12:15:00.000Z\",\"name\":\"Gabriel Haberberg\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading in csv file into 2-D array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-18T12:15:00.000Z\",\"name\":\"Myles Agudelo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading in csv file into 2-D array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-18T12:30:00.000Z\",\"name\":\"Tochukwu Agbo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Methods\",\"resolve\":\" scope\\\"\"},{\"date\":\"2018-10-18T12:30:00.000Z\",\"name\":\"Jennifer Zhuang\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading in csv file into 2-D array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-19T02:00:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading in csv file into 2-D array\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-10-19T02:00:00.000Z\",\"name\":\"Revital Chavel\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading in csv file into 2-D array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-19T07:00:00.000Z\",\"name\":\"Ellie Dempsey\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Parsing CSV file\",\"resolve\":\" iterating through\\\"\"},{\"date\":\"2018-10-19T07:00:00.000Z\",\"name\":\"Marissa Posner \",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Anasse Bari\",\"info\":\"Methods and how to call them from the main \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-20T03:00:00.000Z\",\"name\":\"hubert yang\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading the csv and storing it into the array. Using printf and printing out the result 10 at a time\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-20T03:30:00.000Z\",\"name\":\"Ruishan Lin\",\"tutor\":\"Seunggun Lee\",\"professor\":\"Amos Bloomberg\",\"info\":\"Tutor: Seunggun Lee; Question about String concatenation / Decimal Format\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-20T03:30:00.000Z\",\"name\":\"Eric He\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Storing the data into an array and printing them out 10 at a time. Printf syntax\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-21T02:00:00.000Z\",\"name\":\"Carmen Liu\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"elipse error\",\"resolve\":\" unable to fix\\\"\"},{\"date\":\"2018-10-21T02:30:00.000Z\",\"name\":\"Ravital Chavel\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading csv file into 2D array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-21T02:00:00.000Z\",\"name\":\"Marissa Posner \",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Prime number counter \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-21T05:00:00.000Z\",\"name\":\"Marissa Posner \",\"tutor\":\"Rahul Joshi\",\"professor\":\"Anasse Bari\",\"info\":\"frequency of each character in an array. Treating chars as ints\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-21T11:45:00.000Z\",\"name\":\"Katie Musial\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading csv file into 2D array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-21T12:00:00.000Z\",\"name\":\"David Iosilevich\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Candido Cabo\",\"info\":\"Splitting string into array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T02:00:00.000Z\",\"name\":\"Jia Ju\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Summing 2D array by columns\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-10-22T02:15:00.000Z\",\"name\":\"Sarah White\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Balancing Brackets\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T02:15:00.000Z\",\"name\":\"Jane Kim\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"2D Array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T02:30:00.000Z\",\"name\":\"Sophia Shi\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"Object Oriented Programming\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T03:00:00.000Z\",\"name\":\"Maria\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"Object Oriented Programming\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-10-22T03:30:00.000Z\",\"name\":\"David Iosilevich\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Candido Cabo\",\"info\":\"Flushing Scanner\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T03:45:00.000Z\",\"name\":\"Yijia Chen\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"2D Array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T04:00:00.000Z\",\"name\":\"Prianka Saha\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"Password Validation\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T04:00:00.000Z\",\"name\":\"Marissa Posner \",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"Arrays\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T04:30:00.000Z\",\"name\":\"Katie Musial\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Strange error with file formatting and indexing\",\"resolve\":\"Unresolved - they didn't get it\"},{\"date\":\"2018-10-22T01:00:00.000Z\",\"name\":\"Matt Michelson\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Matrices\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T01:30:00.000Z\",\"name\":\"Ziqin Xu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"InfinitArray class\",\"resolve\":\" separate file\\\"\"},{\"date\":\"2018-10-22T02:00:00.000Z\",\"name\":\"Yifan Jiang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Splitting strings and putting it into a matrix\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T02:00:00.000Z\",\"name\":\"Camilla Zhang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Matrices\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T02:30:00.000Z\",\"name\":\"John Barron\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"finding out number of lines in file\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T02:30:00.000Z\",\"name\":\"Tess Koo\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Matrices and how to manipulate columns/rows\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-22T02:30:00.000Z\",\"name\":\"Brendan Metz\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"InfinitArray class\",\"resolve\":\"Resolved - they get it!\"},{\"date\":null,\"name\":\"Matthew Michelson\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"matrices and row reversals\",\"resolve\":\"Resolved - they get it!\"},{\"date\":null,\"name\":\"Ari Mayhen\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"massaging data and handling corner cases\",\"resolve\":\"Resolved - they get it!\"},{\"date\":null,\"name\":\"Nicholas Kong\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading CSV file into a matrix\",\"resolve\":\"Resolved - they get it!\"},{\"date\":null,\"name\":\"Esin Onal\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"static vs instance in classes\",\"resolve\":\"Resolved - they get it!\"},{\"date\":null,\"name\":\"Elisha Ishaal\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"manipulating matrices\",\"resolve\":\"Resolved - they get it!\"},{\"date\":null,\"name\":\"Happy Chen\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Massaging data\",\"resolve\":\" splitting strings\\\"\"},{\"date\":\"2018-10-23T11:30:00.000Z\",\"name\":\"Liyue Wang\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Pagination\",\"resolve\":\" and having multiple scanners\\\"\"},{\"date\":\"2018-10-28T01:00:00.000Z\",\"name\":\"Julia Skubisz\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Reading csv into 2D array\",\"resolve\":\" how to make classes and objects\\\"\"},{\"date\":\"2018-10-28T03:15:00.000Z\",\"name\":\"Julia Skubisz\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"How to structure the input reading in a while loop to keep asking questions until the user parks. Implementing the auto drive. Printing fuel level without lots of decimals due to floating point imprecession\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-28T04:30:00.000Z\",\"name\":\"Jennifer Zhuang\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Structuring the code between two classes. creating a moped object using a cunstroctor\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T11:45:00.000Z\",\"name\":\"Julia Skubisz\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Direct travel to petite abeille logic\",\"resolve\":\" when gas runs out\\\"\"},{\"date\":\"2018-10-29T11:30:00.000Z\",\"name\":\"Myles Agudelo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"How to tell the moped how to travel to petite abeille\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-10-29T11:15:00.000Z\",\"name\":\"Shinyoung Park\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Object oriented\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T02:00:00.000Z\",\"name\":\"Jia Ju\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Constructors\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T08:00:00.000Z\",\"name\":\"brandon borden\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Amos Bloomberg\",\"info\":\"multidimensional array\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T08:00:00.000Z\",\"name\":\"Julien WErzowa\",\"tutor\":\"Isabella Steains\",\"professor\":\"Amos Bloomberg\",\"info\":\"multidimensional array\",\"resolve\":\"sort of\"},{\"date\":\"2018-10-29T08:00:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Isabella Steains\",\"professor\":\"Amos Bloomberg\",\"info\":\"object oriented \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T11:30:00.000Z\",\"name\":\"Carmen Liu\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T01:15:00.000Z\",\"name\":\"Jenny Shaojun Jiang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Reading files\",\"resolve\":\" eclipse workspace problems\\\"\"},{\"date\":\"2018-10-29T01:30:00.000Z\",\"name\":\"Ellie Park\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Reading files\",\"resolve\":\" counting lines\"},{\"date\":\"2018-10-29T01:45:00.000Z\",\"name\":\"Jennifer Zhuang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Moped printing and order of methods\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T02:00:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Moped understanding orientation\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T02:15:00.000Z\",\"name\":\"Melody Lam\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Matrices and dot operators\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T02:30:00.000Z\",\"name\":\"Brendan Metz\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"sleep timer methods and separating files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-29T02:45:00.000Z\",\"name\":\"Bryan Aman\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Creating different class for Matrix\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-31T09:00:00.000Z\",\"name\":\"Meetali Gupta\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Structure of classes and main\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-31T09:15:00.000Z\",\"name\":\"Ethan Renzihoff\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Debugging OOP Matrix\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-31T09:30:00.000Z\",\"name\":\"Matt Michelson\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Matrices\",\"resolve\":\" dot operators\"},{\"date\":\"2018-10-31T09:45:00.000Z\",\"name\":\"Ellie Park\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"debugging pagenation\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-10-31T10:15:00.000Z\",\"name\":\"Katie Colleran\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Matrices\",\"resolve\":\" understanding OOP\"},{\"date\":\"2018-10-31T11:00:00.000Z\",\"name\":\"Esin Onal\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"java.util.date and instantiating it\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-01T12:00:00.000Z\",\"name\":\"Tochukwu Agbo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"eclipse installation and learning how to use it\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-01T12:30:00.000Z\",\"name\":\"Daniel Sing\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Logic of counting appearances of a number in a list\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-02T02:00:00.000Z\",\"name\":\"Parthvi Bhutani\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Counting appearances of a number in a list\",\"resolve\":\" downloading Eclipse\\\"\"},{\"date\":\"2018-11-02T02:15:00.000Z\",\"name\":\"Ashfaque Sakib\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Explanation of static\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-02T03:00:00.000Z\",\"name\":\"Emma Saros\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Tried downgrading the JDK\",\"resolve\":\" reinstalling jar\"},{\"date\":\"2018-11-03T03:30:00.000Z\",\"name\":\"Mayu Ranganathan\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Understanding Static vs Instance methods and vairables\",\"resolve\":\" pass by reference vs pass by value\"},{\"date\":\"2018-11-03T04:00:00.000Z\",\"name\":\"Maria Hatzioanidis\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Candido Cabo\",\"info\":\"Finding the coordinate that's most at center. There were some small bugs with the loop conditionals that led to the wrong result. Finding the largest sub-matrix. Helped with how to break down the problem by starting with a method that solves the smallest sub-problem.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-04T01:00:00.000Z\",\"name\":\"Tariq Abubakr\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Moped edge cases\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-04T02:30:00.000Z\",\"name\":\"Aaliyah Jackson\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"compile errors\",\"resolve\":\"Unresolved - ran out of time\"},{\"date\":\"2018-11-04T02:00:00.000Z\",\"name\":\"Julia Skubisz\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"overloaded constructors\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-04T03:00:00.000Z\",\"name\":\"Marissa Posner\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Debugging \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-04T02:45:00.000Z\",\"name\":\"Carla Salguero\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Nader Nassar\",\"info\":\"review of arrays \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-04T03:00:00.000Z\",\"name\":\"Mishaal Kirpalani\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Fixing some bugs related to printing statements\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-05T03:15:00.000Z\",\"name\":\"Julia Skubisz\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Eclipse troubles with importing and setting up the processing core. Had to give her an old project of mine where I had Processing3 all set up and working.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-06T03:30:00.000Z\",\"name\":\"Marissa Posner\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Anasse Bari\",\"info\":\"Eclipse troubles. It looks like it wantes to create a module by default which then causes problems. Counting frequency of entered numbers problem. Showed the approach of not storing user input and just storing freqency\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-07T03:30:00.000Z\",\"name\":\"Carla Salguero\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Nader Nassar\",\"info\":\"How to make and use PhoneBookEntry objects in another class\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-08T03:45:00.000Z\",\"name\":\"Soho Hong\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Anasse Bari\",\"info\":\"The problem where the user inputs numbers from 1-100 and they need to count the frequency. Storing frequency in an array rather than user input\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-09T04:00:00.000Z\",\"name\":\"Emma Saros\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Fixing bugs with the collision code. Processing's inverted Y axis was causing problems.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-11T04:30:00.000Z\",\"name\":\"Sophia Shi\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Teseo Schneider\",\"info\":\"Association: Implementing the UML diagram with Students Classes and Professors\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-12T04:30:00.000Z\",\"name\":\"Paolla Bruno Dutra\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Teseo Schneider\",\"info\":\"Association: Implementing the UML diagram with Students Classes and Professors\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-05T11:30:00.000Z\",\"name\":\"David Losilevich\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Candido Cabo\",\"info\":\"Modifying static global variables and accessing in main\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-05T11:45:00.000Z\",\"name\":\"Julia Skubisz\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Processing not working with Eclipse\",\"resolve\":\" JDK not showing up after download\\\"\"},{\"date\":\"2018-11-05T02:00:00.000Z\",\"name\":\"Yu Xu\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\" Objects\\\"\",\"resolve\":\"yx1228@nyu.edu\"},{\"date\":\"2018-11-05T02:30:00.000Z\",\"name\":\"Paolla Bruno Dutra\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Explaining toString()\",\"resolve\":\" datafields\\\"\"},{\"date\":\"2018-11-05T02:30:00.000Z\",\"name\":\"Sophia Shi\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Explaining toString()\",\"resolve\":\" datafields\\\"\"},{\"date\":\"2018-11-05T02:45:00.000Z\",\"name\":\"Carla Salguero\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Nader Nassar\",\"info\":\"Explaining object-oriented programming\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-06T01:00:00.000Z\",\"name\":\"Madison Sievers\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"Structuring the classes & interpreting UML Diagrams\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-06T01:15:00.000Z\",\"name\":\"Yiyne Lin\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Needed to install/use JDK 8 instead of JDK 10 for processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-06T01:30:00.000Z\",\"name\":\"Ellie Park\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Moped\",\"resolve\":\" running it \\\"\"},{\"date\":\"2018-11-06T01:45:00.000Z\",\"name\":\"Jong Heon Hau\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"static vs instance\",\"resolve\":\" pass by reference vs pass by value\\\"\"},{\"date\":\"2018-11-06T02:00:00.000Z\",\"name\":\"Sarah Zhao\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"static vs instance\",\"resolve\":\" pass by reference vs pass by value\\\"\"},{\"date\":\"2018-11-06T02:15:00.000Z\",\"name\":\"Jiu Gu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"static vs instance\",\"resolve\":\" pass by reference vs pass by value\\\"\"},{\"date\":\"2018-11-06T02:30:00.000Z\",\"name\":\"Mayu Ronganathan\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"static vs instance\",\"resolve\":\" pass by reference vs pass by value\\\"\"},{\"date\":\"2018-11-06T02:45:00.000Z\",\"name\":\"Brendan Metz\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"Structuring the classes & interpreting UML Diagrams\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-07T09:30:00.000Z\",\"name\":\"Janice Zhou\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"static vs instance\",\"resolve\":\" visibility modifiers\\\"\"},{\"date\":\"2018-11-07T10:00:00.000Z\",\"name\":\"Katie Colleran\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"static vs. instance\",\"resolve\":\" visibility modifiers \\\"\"},{\"date\":\"2018-11-07T10:15:00.000Z\",\"name\":\"Ezra Cohen\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"static vs. instance\",\"resolve\":\" visibility modifiers \\\"\"},{\"date\":\"2018-11-07T10:30:00.000Z\",\"name\":\"Revital Chavel\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Getting Processing to work w/ JDK 8 \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-07T10:45:00.000Z\",\"name\":\"Ashfaque Sakib\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"static vs instance\",\"resolve\":\" heap vs stack\"},{\"date\":\"2018-11-07T11:00:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Making processing installation\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-07T12:15:00.000Z\",\"name\":\"Daniel Sing\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Implementing a stack\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-08T11:30:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Getting started\",\"resolve\":\" understanding how it works\\\"\"},{\"date\":\"2018-11-08T01:00:00.000Z\",\"name\":\"Madison Sievers\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Teseo Schneider\",\"info\":\"Initializing arrays\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-10T03:15:00.000Z\",\"name\":\"Ellie Park\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Creating a snake game. Using multiple classes and objects to make things easier. Using inheritance (calling the super constructor\",\"resolve\":\" overwriting parent methods).\\\"\"},{\"date\":\"2018-11-10T03:00:00.000Z\",\"name\":\"Eric He\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Pac Man Game. How to do colissions\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-11T03:15:00.000Z\",\"name\":\"Ellie Park\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Implementing snake movement by moving the square at the tail of the snake to the front\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-11T04:30:00.000Z\",\"name\":\"Myles Agudelo\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Colission code bugs. How to check against bounds to detect colission\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-11T03:00:00.000Z\",\"name\":\"Eric He\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Bugs with moving enemies. Have to move enemies back if they cross a threshold\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-11T04:30:00.000Z\",\"name\":\"Shaojun Jiang\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"How the update loop works and how to resize drawn images\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-12T11:15:00.000Z\",\"name\":\"Valeria Samame\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Dealing with searching through null array values\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-12T11:30:00.000Z\",\"name\":\"Revital Chavel\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Null pointer exception handling with custom objects\",\"resolve\":\"Unresolved - ran out of time\"},{\"date\":\"2018-11-13T11:00:00.000Z\",\"name\":\"Carla Salguero\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Nader Nassar\",\"info\":\"understanding super and subclasses\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-13T12:30:00.000Z\",\"name\":\"Mishaal Kirpalani\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Understanding how different processing classes interact\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-11-13T01:00:00.000Z\",\"name\":\"Emma Saros\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"inheritance\",\"resolve\":\" terminal commands\"},{\"date\":\"2018-11-13T01:30:00.000Z\",\"name\":\"Ellie Park\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"inheritance\",\"resolve\":\" terminal commands\"},{\"date\":\"2018-11-13T02:00:00.000Z\",\"name\":\"Gabriel Haberberg\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"inheritance\",\"resolve\":\" terminal commands\"},{\"date\":\"2018-11-13T02:30:00.000Z\",\"name\":\"Marshall Kerpalni\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"inheritance\",\"resolve\":\" terminal commands\"},{\"date\":\"2018-11-14T09:30:00.000Z\",\"name\":\"Eileen Lee\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"How to print an object\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-14T11:30:00.000Z\",\"name\":\"Aojie Yu\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Polymorphism\",\"resolve\":\"Resolved - they get it!\"},{\"date\":null,\"name\":\"Olivia Huang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"practice\",\"resolve\":\"Resolved - they get it!\"},{\"date\":null,\"name\":\"Margaret Sohn\",\"tutor\":\"Cindy Bui\",\"professor\":\"Candido Cabo\",\"info\":\"\\\"UML diagrams\",\"resolve\":\" classes\"},{\"date\":\"2018-11-14T12:00:00.000Z\",\"name\":\"Sattwik Tripathy\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Polymorphism\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-15T12:00:00.000Z\",\"name\":\"prianka saha \",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Pass by reference vs value\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-15T11:30:00.000Z\",\"name\":\"nikhil massand\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Pass by reference vs value\",\"resolve\":\" static vs non-static\\\"\"},{\"date\":\"2018-11-15T12:00:00.000Z\",\"name\":\"jessica xu\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Pass by reference vs value\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-18T01:30:00.000Z\",\"name\":\"Zi Ying Cao \",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Multiple classes and using Eclipse\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-19T11:15:00.000Z\",\"name\":\"Andy Huang\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Deep copying vectors\",\"resolve\":\" why use static methods\"},{\"date\":\"2018-11-19T02:00:00.000Z\",\"name\":\"Jia Gu\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Explaining stacks\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-19T02:15:00.000Z\",\"name\":\"Ashmitha Mathukumar\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"Understanding how to use interface \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-19T02:15:00.000Z\",\"name\":\"Carla Salguero\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Nader Nassar\",\"info\":\"ArrayLists\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-19T02:30:00.000Z\",\"name\":\"Byunghoon Jun\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Setting up processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-19T02:30:00.000Z\",\"name\":\"Christopher Khoo\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Linking main and classes\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-19T03:30:00.000Z\",\"name\":\"David Losilevich\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Using BigDecimal\",\"resolve\":\" explaining ArrayLists\\\"\"},{\"date\":\"2018-11-19T03:45:00.000Z\",\"name\":\"Sarah White\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Checking boundaries\",\"resolve\":\" using mouseX and mouseY\\\"\"},{\"date\":\"2018-11-19T03:45:00.000Z\",\"name\":\"John Barron\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Checking boundaries\",\"resolve\":\" using mouseX and mouseY\\\"\"},{\"date\":\"2018-11-20T01:30:00.000Z\",\"name\":\"Ziqin Xu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"setting up main with packageName.className & settings()\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-20T01:45:00.000Z\",\"name\":\"Brendan Metz\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"setting up main with packageName.className & settings()\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-26T02:00:00.000Z\",\"name\":\"Xiaoxu Deng\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Setting up Processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-26T02:15:00.000Z\",\"name\":\"Jessica Xu\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"Explaining Interfaces\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T11:15:00.000Z\",\"name\":\"Katie Colleran\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Getting Processing to work in Eclipse\",\"resolve\":\"Other - please explain\"},{\"date\":\"2018-11-27T11:45:00.000Z\",\"name\":\"Ashmitha Mathukumar\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Invoking different super-constructors based on type of parameters\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T11:45:00.000Z\",\"name\":\"Bryan Aman\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Getting Processing to work in Eclipse\",\"resolve\":\"Other - please explain\"},{\"date\":\"2018-11-27T11:00:00.000Z\",\"name\":\"Zi Ying Cao \",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Getting Processing to work in Eclipse\",\"resolve\":\"Unresolved - ran out of time\"},{\"date\":\"2018-11-27T11:45:00.000Z\",\"name\":\"Cristina Llacer\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Getting Processing to work in Eclipse\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T01:00:00.000Z\",\"name\":\"Zi Ying Cao \",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Installing JDK 8\",\"resolve\":\" setting it up\\\"\"},{\"date\":\"2018-11-27T01:15:00.000Z\",\"name\":\"Jessica Xu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"Reading files and creating objects from lines in csv\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T01:30:00.000Z\",\"name\":\"Nikhil massand\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"Debugging syntax errors\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T01:45:00.000Z\",\"name\":\"Soho Hong\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"Reading csv files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T02:00:00.000Z\",\"name\":\"Carmen Liu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Installing JDK 8\",\"resolve\":\" setting it up\\\"\"},{\"date\":\"2018-11-27T02:15:00.000Z\",\"name\":\"Brendan Yap\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Installing JDK 8\",\"resolve\":\" setting it up\\\"\"},{\"date\":\"2018-11-27T02:30:00.000Z\",\"name\":\"Mayu Ranganathan\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Installing JDK 8\",\"resolve\":\" setting it up\\\"\"},{\"date\":\"2018-11-27T10:30:00.000Z\",\"name\":\"Olivia Huang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"i/o reading txt files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T11:00:00.000Z\",\"name\":\"Parthvi Bhutani\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"Comparable Interface\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T11:15:00.000Z\",\"name\":\"Ryan Schwarz\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"i/o reading txt files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T11:30:00.000Z\",\"name\":\"Nonso Nwaokorie\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"i/o reading txt files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-27T11:30:00.000Z\",\"name\":\"Yixin Gu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"i/o reading txt files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-28T12:15:00.000Z\",\"name\":\"Jessica Xu\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"i/o reading txt files\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-28T12:30:00.000Z\",\"name\":\"Eileen Lee\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Comparable Interface\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-29T11:00:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Extending and implementing and issues with ArrayList of different types\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-11-29T12:00:00.000Z\",\"name\":\"Gabriel Haberberg\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Extending and implementing and issues with ArrayList of different types\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-30T03:00:00.000Z\",\"name\":\"Olivia Huang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Anasse Bari\",\"info\":\"comparable interface\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-11-30T03:00:00.000Z\",\"name\":\"Revital Chavel\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Sentence Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-30T03:00:00.000Z\",\"name\":\"Andy Huang\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Sentence Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-30T03:30:00.000Z\",\"name\":\"Matt Eng\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing with OOP\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-30T03:30:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Sentence Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-11-30T03:45:00.000Z\",\"name\":\"Gabriel Haberberg\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Sentence Assignment\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-01T01:00:00.000Z\",\"name\":\"Myles Agudelo\",\"tutor\":\"Alexander Nguyen\",\"professor\":\"Amos Bloomberg\",\"info\":\"Sentence Assignment. Implementing Sentense constructor. Implementing a toString method for the word class. Understanding how the toString method in the word class will be called in the main method even when the word object is sent as an OrderedThing class.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-02T01:00:00.000Z\",\"name\":\"Kathie Guo\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Eclipse processing errors\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-12-02T01:45:00.000Z\",\"name\":\"Yijia Chen\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Index out of bounds due to managing multiple classes\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-02T03:00:00.000Z\",\"name\":\"Zi Ying Cao \",\"tutor\":\"Rahul Joshi\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Converting the game with multiple disks back into a game with a single disk. Had some small bugs when converting back.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-02T03:30:00.000Z\",\"name\":\"rahul das\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Using toString and how polimorphism handles calling the correct toString function when you call it on a OrderedThing object. How to implement the constructors to initialize an arrayList of words or characters rather than String\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-02T03:15:00.000Z\",\"name\":\"Jingyi Liang\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Difference between an interface and abstract class and their purpose. Implementing the class constructors to initialize an arraylist based on an input string.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-03T11:30:00.000Z\",\"name\":\"Jenny Jieng\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Understanding multiple classes\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-03T11:45:00.000Z\",\"name\":\"Ari Mayhew\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Matching ArrayList types to return types and toString methods for use in TestSequence class\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-03T11:30:00.000Z\",\"name\":\"David Iosilevich\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Candido Cabo\",\"info\":\"\\\"ArrayLists (looping\",\"resolve\":\" etc)\\\"\"},{\"date\":\"2018-12-03T11:15:00.000Z\",\"name\":\"Shinyoung Park\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Learning processing\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-12-03T02:00:00.000Z\",\"name\":\"Shinyoung Park\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Learning processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-03T02:30:00.000Z\",\"name\":\"jpw382@nyu.edu\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Polymorphism\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-04T01:00:00.000Z\",\"name\":\"Shinyoung Park\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\\\"\"},{\"date\":\"2018-12-04T01:15:00.000Z\",\"name\":\"Jong Heon Han\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\\\"\"},{\"date\":\"2018-12-04T01:30:00.000Z\",\"name\":\"Matt michelson\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\\\"\"},{\"date\":\"2018-12-04T01:45:00.000Z\",\"name\":\"Zibin Zhen\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\\\"\"},{\"date\":\"2018-12-04T02:00:00.000Z\",\"name\":\"Ezra Cohen\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\\\"\"},{\"date\":\"2018-12-04T02:15:00.000Z\",\"name\":\"Mayu Ranganathan\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\\\"\"},{\"date\":\"2018-12-04T02:30:00.000Z\",\"name\":\"Meetali Gupta\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\\\"\"},{\"date\":\"2018-12-04T02:45:00.000Z\",\"name\":\"Janice Zhou\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\\\"\"},{\"date\":\"2018-12-05T09:00:00.000Z\",\"name\":\"Mikhil Massond\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"\\\"Processing\",\"resolve\":\" how to get started\\\"\"},{\"date\":\"2018-12-05T09:30:00.000Z\",\"name\":\"Katie Colleran\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" installing JDK 8\\\"\"},{\"date\":\"2018-12-05T10:00:00.000Z\",\"name\":\"Esin Onal\",\"tutor\":\"Cindy Bui\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Processing\",\"resolve\":\" how to use separate files\\\"\"},{\"date\":\"2018-12-05T11:00:00.000Z\",\"name\":\"Priya Onaganti\",\"tutor\":\"Cindy Bui\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Procesing\",\"resolve\":\" millis()\"},{\"date\":\"2018-12-05T11:30:00.000Z\",\"name\":\"Mayu Ranganathan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Processing\",\"resolve\":\" millis()\"},{\"date\":\"2018-12-05T12:15:00.000Z\",\"name\":\"Anshula Srivastava\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Getting processing to work with Eclipse\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-05T12:15:00.000Z\",\"name\":\"Xiaoxu Deng\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Using processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-05T12:00:00.000Z\",\"name\":\"Eric He\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Interface\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-06T11:00:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Figuring out what the code means\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-12-06T12:30:00.000Z\",\"name\":\"Hari Mohandas\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Merging two sorted arrays\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-07T02:00:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Amos Bloomberg\",\"info\":\"Explaining Recursion\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-12-07T02:30:00.000Z\",\"name\":\"Emma Sargent\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Explaining relative path/absolute path\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-07T15:00:00.000Z\",\"name\":\"Ashmitha Mathukumar\",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Anasse Bari\",\"info\":\"Explaining how to use methods and classes in processing \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-07T08:00:00.000Z\",\"name\":\"Anshika Kapoor \",\"tutor\":\"Jeffrey Asamoah\",\"professor\":\"Anasse Bari\",\"info\":\"helping in hw \",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-08T03:00:00.000Z\",\"name\":\"Eileen Lee\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Anasse Bari\",\"info\":\"Using a PApplet object to access Processing methods in another class. Setting up javadocs\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-08T03:30:00.000Z\",\"name\":\"Myles Agudelo\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Conventions for where javadocs comments are used and what things they usually include. Understanding how the fractal recursion works.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-08T04:30:00.000Z\",\"name\":\"Eric He\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Amos Bloomberg\",\"info\":\"Understanding how the recursive method works\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-09T12:30:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Commenting requirements\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-09T01:00:00.000Z\",\"name\":\"Revital Chavel\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Figuring out how the different values determine the fractal proportions\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-09T02:45:00.000Z\",\"name\":\"Shrina Parikh\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Setting up processing in eclipse\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-09T04:15:00.000Z\",\"name\":\"olivia huang \",\"tutor\":\"Rahul Joshi\",\"professor\":\"Anasse Bari\",\"info\":\"Problems with packages. How to get rid of them.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-09T04:45:00.000Z\",\"name\":\"Nomuntuya Luehr\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Teseo Schneider\",\"info\":\"Problems setting up java 8 in eclipse.\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-09T04:45:00.000Z\",\"name\":\"Soho Hong\",\"tutor\":\"Rahul Joshi\",\"professor\":\"Anasse Bari\",\"info\":\"Where to download processing and how to set it up\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-10T11:00:00.000Z\",\"name\":\"Esin Onal\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"Some debuger and \\\"\\\"hot code\\\"\\\" warning\\\"\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-10T11:15:00.000Z\",\"name\":\"Jessica Xu\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Multiple classes with processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-10T15:00:00.000Z\",\"name\":\"Prianka Saha\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Using the processing video library\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-10T03:00:00.000Z\",\"name\":\"Jane Kim\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Explaining processing\",\"resolve\":\"Resolved - they're still shaky\"},{\"date\":\"2018-12-10T03:30:00.000Z\",\"name\":\"Brendan Metz\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Teseo Schneider\",\"info\":\"Explaining processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-10T04:15:00.000Z\",\"name\":\"David Iosilevich\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Candido Cabo\",\"info\":\"Throwing exceptions\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-10T04:30:00.000Z\",\"name\":\"Wangrui Hou\",\"tutor\":\"Jonathan Wang\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Designing classes in Processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-11T12:00:00.000Z\",\"name\":\"Shaojun Jieng\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Understanding the system for keeping the angles and pattern constant\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-11T15:00:00.000Z\",\"name\":\"Olivia Huang\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Anasse Bari\",\"info\":\"Multiple classes with processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-11T15:00:00.000Z\",\"name\":\"Ziqin Xu\",\"tutor\":\"Cindy Bui\",\"professor\":\"Anasse Bari\",\"info\":\"Multiple classes with processing\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-11T01:00:00.000Z\",\"name\":\"Ellie Park\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Tracing through a program with recursion\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-11T02:00:00.000Z\",\"name\":\"Shaojun Jiang\",\"tutor\":\"Cindy Bui\",\"professor\":\"Amos Bloomberg\",\"info\":\"Tracing through the fractal\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-12T12:00:00.000Z\",\"name\":\"Gabriel Haberberg\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Amos Bloomberg\",\"info\":\"Recursive class\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-13T11:15:00.000Z\",\"name\":\"Katie Colleran\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Using attributes with different values for each disk\",\"resolve\":\"Resolved - they get it!\"},{\"date\":\"2018-12-13T11:45:00.000Z\",\"name\":\"Alma Zhan\",\"tutor\":\"Gilad Waldman\",\"professor\":\"Suzanne McIntosh\",\"info\":\"IndexOutOfBounds when dealing with array of disks\",\"resolve\":\"Resolved - they get it!\"}]");

/***/ }),

/***/ "./public/Data/Spring2019.json":
/*!*************************************!*\
  !*** ./public/Data/Spring2019.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"date\":\"2019-01-30T02:10:00.000Z\",\"name\":\"Karen \",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"\\\"\\\"Javac is not recognized\\\"\\\" error appeared\\\"\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-01-30T02:38:00.000Z\",\"name\":\"Yue Yin\",\"tutor\":\"Julia\",\"professor\":\"Douglas Moody\",\"info\":\"\\\"3 errors occur when compiling java file\",\"resolve\":\" and \\\"\\\"A JNI error\\\"\\\" also occurs but I'm not sure how to solve that. I suggest her to email her prof.\\\"\"},{\"date\":\"2019-01-30T03:36:00.000Z\",\"name\":\"Carol Long\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Compiling and Running her code in Sublime?\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-01-30T03:45:00.000Z\",\"name\":\"Seunghyeon\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Don't understand command line and how to use terminal\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-01-30T05:52:00.000Z\",\"name\":\"JC\",\"tutor\":\"Santiago\",\"professor\":\"Teseo Schneider\",\"info\":\"Compiling and running code on terminal\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-01T12:56:00.000Z\",\"name\":\"Ron Ge\",\"tutor\":\"Santiago\",\"professor\":\"Amos Bloomberg\",\"info\":\"How to make the zip file to get zipped\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-02T11:55:00.000Z\",\"name\":\"Anika Hussen\",\"tutor\":\"Hari\",\"professor\":\"Suzanne McIntosh\",\"info\":\"How to use Scanner\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-03T12:24:00.000Z\",\"name\":\"Karishma\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Compiling and running code on terminal\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-03T03:30:00.000Z\",\"name\":\"Amr\",\"tutor\":\"Jeff\",\"professor\":\"Candido Cabo\",\"info\":\"Compiling and running code on terminal\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-03T03:00:00.000Z\",\"name\":\"susan liu\",\"tutor\":\"Jeff\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Compiling and running code on terminal\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-03T07:00:00.000Z\",\"name\":\"Jenna Han\",\"tutor\":\"Jeff\",\"professor\":\"Suzanne McIntosh\",\"info\":\" HW1\\\"\",\"resolve\":\"Compiling and running code on terminal\"},{\"date\":\"2019-02-04T01:56:00.000Z\",\"name\":\"Jc\",\"tutor\":\"Julia\",\"professor\":\"Teseo Schneider\",\"info\":\"Declaring variables & Syntax & Homework in general\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-04T01:30:00.000Z\",\"name\":\"Shawn Yoon\",\"tutor\":\"Julia\",\"professor\":\"Douglas Moody\",\"info\":\"Converting Data Type\",\"resolve\":\"Unresolved: They stormed out\\r\"},{\"date\":\"2019-02-04T02:30:00.000Z\",\"name\":\"Seunghyeon\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Understanding Scanner and how to use it \",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-04T03:00:00.000Z\",\"name\":\"Natalie Gorr\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Installing Java and Using Terminal to compile and run code\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-04T03:15:00.000Z\",\"name\":\"Arif Howlader\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Compiling and running code on terminal\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-04T03:41:00.000Z\",\"name\":\"Tommy Wong\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Compiling and running code on terminal\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-04T03:45:00.000Z\",\"name\":\"Alyssa White\",\"tutor\":\"Jeff\",\"professor\":\"Amos Bloomberg\",\"info\":\"\\\"Installing Java\",\"resolve\":\" Eclipse\"},{\"date\":\"2019-02-05T11:30:00.000Z\",\"name\":\"Maxwel Guy\",\"tutor\":\"Ilias\",\"professor\":\"Teseo Schneider\",\"info\":\"Directional questions along with understanding scanner and how to use it.\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-05T11:52:00.000Z\",\"name\":\"Alexandra Espinoza\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Bash not recognizing the command javac\",\"resolve\":\"Unresolved: Recommended emailing professor ASAP and coming back to tutoring later in the day\\r\"},{\"date\":\"2019-02-05T12:32:00.000Z\",\"name\":\"Mudit Gupta\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Complilation error due to not saved file\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-05T04:30:00.000Z\",\"name\":\"Mudit Gupta\",\"tutor\":\"Alexander\",\"professor\":\"Suzanne McIntosh\",\"info\":\" Java\",\"resolve\":\" Floats\"},{\"date\":\"2019-02-05T04:30:00.000Z\",\"name\":\"Jordan Brammer\",\"tutor\":\"Alexander\",\"professor\":\"Douglas Moody\",\"info\":\" Java\",\"resolve\":\" Floats\"},{\"date\":\"2019-02-05T01:30:00.000Z\",\"name\":\"Dena Samad\",\"tutor\":\"Ilias\",\"professor\":\"Anasse Bari\",\"info\":\"Downloading Java\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-06T02:02:00.000Z\",\"name\":\"Aila Aamir\",\"tutor\":\"Julia\",\"professor\":\"Douglas Moody\",\"info\":\"Random Questions\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-09T11:12:00.000Z\",\"name\":\"Karishma\",\"tutor\":\"Santiago\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Compiling and running code on terminal\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-09T11:13:00.000Z\",\"name\":\"Wenyu Jiao\",\"tutor\":\"Hari\",\"professor\":\"Nader Nassar\",\"info\":\"Explained random questions\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T02:00:00.000Z\",\"name\":\"Alexander  Bobb\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"How to make zip file\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T02:16:00.000Z\",\"name\":\"Carlos Flores\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"if-else statement\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T02:13:00.000Z\",\"name\":\"Seunghyeon\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi approximation\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T02:28:00.000Z\",\"name\":\"Haiyun Chen\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi approximation\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T03:11:00.000Z\",\"name\":\" Efrain Escamilla\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Conversion of int\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T03:20:00.000Z\",\"name\":\"Andrew Peterson\",\"tutor\":\"Jeff\",\"professor\":\"Nader Nassar\",\"info\":\"Debugging codes\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T03:42:00.000Z\",\"name\":\"Alyssa Ahite\",\"tutor\":\"Julia\",\"professor\":\"Amos Bloomberg\",\"info\":\"Debugging codes\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T03:34:00.000Z\",\"name\":\"Meena Jain\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi approximation - logics & where to start\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T03:46:00.000Z\",\"name\":\" Efrain Escamilla\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi approximation \",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-11T05:00:00.000Z\",\"name\":\"Claire Zhu\",\"tutor\":\"Julia\",\"professor\":\"Amos Bloomberg\",\"info\":\"Command Line\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-12T11:30:00.000Z\",\"name\":\"Mariah Harihall\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi Approximation and logic of where to start\",\"resolve\":\"Unresolved: they didn't get it Unresolved: out of time\\r\"},{\"date\":\"2019-02-12T11:30:00.000Z\",\"name\":\"Ee Ning Foo\",\"tutor\":\"Ilias\",\"professor\":\"Amos Bloomberg\",\"info\":\"Generating a Javadoc\",\"resolve\":\"Unresolved: they didn't get it Unresolved: out of time\\r\"},{\"date\":\"2019-02-12T11:56:00.000Z\",\"name\":\"Maxwel Guy\",\"tutor\":\"Ilias\",\"professor\":\"Teseo Schneider\",\"info\":\"\\\"More efficient way\",\"resolve\":\" potential use of array instead\\\"\"},{\"date\":\"2019-02-12T12:26:00.000Z\",\"name\":\"Corrina Zhang \",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi Approximation and logic of where to start\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-12T12:20:00.000Z\",\"name\":\"Brogan Hannon\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi Approximation and logic of where to start\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-12T01:05:00.000Z\",\"name\":\"emily herschmann\",\"tutor\":\"Ilias\",\"professor\":\"Amos Bloomberg\",\"info\":\"Blackjack and how to get started\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-12T01:10:00.000Z\",\"name\":\"Chantelle Tani\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi Approximation\",\"resolve\":\"Unresolved: they didn't get it Unresolved: out of time\\r\"},{\"date\":\"2019-02-13T02:00:00.000Z\",\"name\":\"Carlos Flores\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Logic Problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":null,\"name\":\"Christina Luongo\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Logic Problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-13T02:00:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Debugging Codes\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-13T02:00:00.000Z\",\"name\":\"Karen cruz\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Logic Problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-13T04:53:00.000Z\",\"name\":\"Vaish Gajaraj\",\"tutor\":\"Santiago\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Logic Problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-13T04:53:00.000Z\",\"name\":\"Aila Aamir\",\"tutor\":\"Julia\",\"professor\":\"Douglas Moody\",\"info\":\"Debugging  codes\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-13T05:00:00.000Z\",\"name\":\"Yue Yin\",\"tutor\":\"Santiago\",\"professor\":\"Douglas Moody\",\"info\":\"Casting\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-14T05:00:00.000Z\",\"name\":\"Aila Aamir\",\"tutor\":\"Alexander\",\"professor\":\"Douglas Moody\",\"info\":\"Rates Problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-15T10:00:00.000Z\",\"name\":\"Karishma\",\"tutor\":\"Santiago\",\"professor\":\"Suzanne McIntosh\",\"info\":\"do while problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-07T15:00:00.000Z\",\"name\":\"Anika Hussen\",\"tutor\":\"Jeff\",\"professor\":\"Suzanne McIntosh\",\"info\":\"do while problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-19T11:00:00.000Z\",\"name\":\"Nick latchana\",\"tutor\":\"Ilias\",\"professor\":\"Nader Nassar\",\"info\":\"char problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-19T11:00:00.000Z\",\"name\":\"Neelam Pandya\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"max/min problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-19T11:30:00.000Z\",\"name\":\"Jenny Qiu\",\"tutor\":\"Ilias\",\"professor\":\"Teseo Schneider\",\"info\":\"Escape Character Issues and Math.random issue\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-19T12:00:00.000Z\",\"name\":\"Brogan Hannon\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Max/min problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-19T01:00:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Ilias\",\"professor\":\"Nader Nassar\",\"info\":\"char problem\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-19T12:30:00.000Z\",\"name\":\"Maxwel Guy\",\"tutor\":\"Ilias\",\"professor\":\"Teseo Schneider\",\"info\":\"Word Problems\",\"resolve\":\"\\r\"},{\"date\":\"2019-02-19T12:15:00.000Z\",\"name\":\"Rafael Gell\",\"tutor\":\"Ilias\",\"professor\":\"Teseo Schneider\",\"info\":\"Word Problems\",\"resolve\":\"\\r\"},{\"date\":\"2019-02-19T04:00:00.000Z\",\"name\":\"Mariah Harihall\",\"tutor\":\"Alexander\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Min Max\",\"resolve\":\"\\r\"},{\"date\":\"2019-02-20T02:20:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Logic & Debugging\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-20T04:00:00.000Z\",\"name\":\"Emma Alpert\",\"tutor\":\"Julia\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading from a file\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-02-20T04:00:00.000Z\",\"name\":\"Emily herschmann\",\"tutor\":\"Julia\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading from a file\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-02-20T03:30:00.000Z\",\"name\":\"Dennis Kwon\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Pi approximation\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-21T03:00:00.000Z\",\"name\":\"Jordan Brammer\",\"tutor\":\"Alexander\",\"professor\":\"Douglas Moody\",\"info\":\"Random\",\"resolve\":\"\\r\"},{\"date\":\"2019-02-23T11:54:00.000Z\",\"name\":\"Claire Zhu\",\"tutor\":\"Hari\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading from a file using Scanner + Splitting a string by comma\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-24T02:15:00.000Z\",\"name\":\"Sarai Daniels\",\"tutor\":\"Julia\",\"professor\":\"Candido Cabo\",\"info\":\"Wrong place to put the braces\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-24T02:40:00.000Z\",\"name\":\"Chantelle Tani\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Understanding how to switch statement & methods\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-24T03:17:00.000Z\",\"name\":\"Aaron Wang\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Understanding the assignment\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-02-24T03:20:00.000Z\",\"name\":\"Yunchang Zhang\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Array\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-02-24T04:30:00.000Z\",\"name\":\"Hanyi Jiang \",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Logics & Debugging & Understanding Assignment\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-24T04:00:00.000Z\",\"name\":\"Haiyun \",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Logics & Debugging & Understanding Assignment\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-24T04:20:00.000Z\",\"name\":\"Sarai Daniels\",\"tutor\":\"Julia\",\"professor\":\"Candido Cabo\",\"info\":\"Pi approxiamation\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-24T05:00:00.000Z\",\"name\":\"Efrain Escamilla\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"General questions \",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-24T05:00:00.000Z\",\"name\":\"Michelle Carchi\",\"tutor\":\"Julia\",\"professor\":\"Amos Bloomberg\",\"info\":\"Reading from a file\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-24T05:00:00.000Z\",\"name\":\"Daeoh kim\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Methods for char\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-26T02:15:00.000Z\",\"name\":\"Vaish Gajaraj\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"HexUtility\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-27T03:30:00.000Z\",\"name\":\"Junyi Sim\",\"tutor\":\"Santiago\",\"professor\":\"Amos Bloomberg\",\"info\":\"Structure Fixing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-27T05:10:00.000Z\",\"name\":\"Vaish Gajaraj\",\"tutor\":\"Santiago\",\"professor\":\"Suzanne McIntosh\",\"info\":\"HexUtility\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-02-27T07:51:00.000Z\",\"name\":\"Michelle Carchi\",\"tutor\":\"Bella\",\"professor\":\"Amos Bloomberg\",\"info\":\"user input issues\",\"resolve\":\"\\r\"},{\"date\":\"2019-02-28T06:00:00.000Z\",\"name\":\"Seunghyeon Shin\",\"tutor\":\"Bella\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Returning boolean values\",\"resolve\":\"\\r\"},{\"date\":\"2019-03-01T11:00:00.000Z\",\"name\":\"Rachel Kellner\",\"tutor\":\"Ilias\",\"professor\":\"Douglas Moody\",\"info\":\"Arrays and Return values\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-01T11:00:00.000Z\",\"name\":\"Anika Hussen\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"HexDec Hex2Bin\",\"resolve\":\"\\r\"},{\"date\":\"2019-03-01T11:00:00.000Z\",\"name\":\"Karishma\",\"tutor\":\"Santiago\",\"professor\":\"Suzanne McIntosh\",\"info\":\"HexDec Hex2Bin\",\"resolve\":\"\\r\"},{\"date\":\"2019-03-02T09:40:00.000Z\",\"name\":\"Yue Yin \",\"tutor\":\"Julia\",\"professor\":\"Douglas Moody\",\"info\":\"Arrays & Return Values\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-02T01:00:00.000Z\",\"name\":\"Chole Qian\",\"tutor\":\"Julia\",\"professor\":\"Amos Bloomberg\",\"info\":\"Go over the practice exam\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-05T12:15:00.000Z\",\"name\":\"Alexandra Espinoza\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Missing syntax\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-11T02:00:00.000Z\",\"name\":\"James Coffey\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Debugging\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-11T02:40:00.000Z\",\"name\":\"Jenny Qiu\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"OOP\",\"resolve\":\"Unresolved: they didn't get it Unresolved: out of time\\r\"},{\"date\":\"2019-03-13T06:30:00.000Z\",\"name\":\"Mariah Harilall\",\"tutor\":\"Bella\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Fixing conditionals in a while loop\",\"resolve\":\"\\r\"},{\"date\":\"2019-03-13T06:45:00.000Z\",\"name\":\"Alexandra Espinoza\",\"tutor\":\"Bella\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Transposing an array\",\"resolve\":\"\\r\"},{\"date\":\"2019-03-25T03:17:00.000Z\",\"name\":\"Yue Yin\",\"tutor\":\"Julia\",\"professor\":\"Douglas Moody\",\"info\":\"               \",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-25T05:00:00.000Z\",\"name\":\"Songmao Li\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Debugging\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-25T06:00:00.000Z\",\"name\":\"Stefan Mrakovcic\",\"tutor\":\"Julia\",\"professor\":\"Candido Cabo\",\"info\":\"Logic & Syntax\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-26T11:00:00.000Z\",\"name\":\"Jordan Brammer\",\"tutor\":\"Ilias\",\"professor\":\"Douglas Moody\",\"info\":\"Debugging\",\"resolve\":\"\\r\"},{\"date\":\"2019-03-26T12:30:00.000Z\",\"name\":\"Vaisnav Gajaraj\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Debugging\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-26T12:00:00.000Z\",\"name\":\"Stefan Mrakovcic\",\"tutor\":\"Ilias\",\"professor\":\"Candido Cabo\",\"info\":\"Logic & Syntax\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-27T02:55:00.000Z\",\"name\":\"Igor Dobroserdov\",\"tutor\":\"Julia\",\"professor\":\"Teseo Schneider\",\"info\":\"Having Different classes \",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-27T02:00:00.000Z\",\"name\":\"seunghyeon shin\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Reversing Rows\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-03-28T06:30:00.000Z\",\"name\":\"Julia Chang\",\"tutor\":\"Bella\",\"professor\":\"Amos Bloomberg\",\"info\":\"Open Data Assignment\",\"resolve\":\"\\r\"},{\"date\":\"2019-03-28T06:15:00.000Z\",\"name\":\"Alyssa White\",\"tutor\":\"Bella\",\"professor\":\"Amos Bloomberg\",\"info\":\"Moped Assignment\",\"resolve\":\"\\r\"},{\"date\":\"2019-03-30T01:45:00.000Z\",\"name\":\"Alexandra Espinoza\",\"tutor\":\"Hari\",\"professor\":\"Suzanne McIntosh\",\"info\":\" main class loading errors\\\"\",\"resolve\":\" was not able to solve\"},{\"date\":\"2019-03-31T01:00:00.000Z\",\"name\":\"Andrew Sachs\",\"tutor\":\"Jeff\",\"professor\":\"Amos Bloomberg\",\"info\":\"public/private classes\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-05T09:20:00.000Z\",\"name\":\"Heewon Kim\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Debugging Homework\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-07T12:00:00.000Z\",\"name\":\"ran chen\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T02:10:00.000Z\",\"name\":\"Karen Cruz\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Debugging\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T03:05:00.000Z\",\"name\":\"arif howlader\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Definitions\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T02:00:00.000Z\",\"name\":\"Afua Anochi\",\"tutor\":\"Julia\",\"professor\":\"Gene Locklear\",\"info\":\"TieFighter\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T02:40:00.000Z\",\"name\":\"Anastasiya Bolgova\",\"tutor\":\"Julia\",\"professor\":\"Gene Locklear\",\"info\":\"TieFighter\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T02:40:00.000Z\",\"name\":\"Anonymous\",\"tutor\":\"Julia\",\"professor\":\"Gene Locklear\",\"info\":\"TieFighter\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T03:00:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Array\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T02:00:00.000Z\",\"name\":\"Efrain Escamilla\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Scanner ussue\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T04:52:00.000Z\",\"name\":\"Keyanee Alexandre\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T05:00:00.000Z\",\"name\":\"Cathy Ma \",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T04:00:00.000Z\",\"name\":\"Sarai Daniels\",\"tutor\":\"Julia\",\"professor\":\"Candido Cabo\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T05:00:00.000Z\",\"name\":\"Neelam Pandya\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T04:10:00.000Z\",\"name\":\"Sarah Morgan\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-08T04:00:00.000Z\",\"name\":\"Amr Al Kozbari\",\"tutor\":\"Jeff\",\"professor\":\"Candido Cabo\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-09T11:30:00.000Z\",\"name\":\"Emma Alpert\",\"tutor\":\"Ilias\",\"professor\":\"Amos Bloomberg\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-09T12:10:00.000Z\",\"name\":\"Brogan Hannon\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-09T15:00:00.000Z\",\"name\":\"Alexandra Espinoza\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-10T02:00:00.000Z\",\"name\":\"Sarai Daniels\",\"tutor\":\"Julia\",\"professor\":\"Candido Cabo\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-10T03:00:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Santiago\",\"professor\":\"Nader Nassar\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-11T06:00:00.000Z\",\"name\":\"Casey Chen\",\"tutor\":\"Bella\",\"professor\":\"Gene Locklear\",\"info\":\"OOP\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-11T06:00:00.000Z\",\"name\":\"Alexander Bobb\",\"tutor\":\"Bella\",\"professor\":\"Nader Nassar\",\"info\":\"OOP\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-13T09:35:00.000Z\",\"name\":\"Alexander Bobb\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"OOP: Understanding How to Create an Array of PhoneBookEntries & Sorting Array of Objects\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-13T10:45:00.000Z\",\"name\":\"Sophie Huang\",\"tutor\":\"Hari\",\"professor\":\"Gene Locklear\",\"info\":\"TieFighter Project\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-15T02:00:00.000Z\",\"name\":\"Neelam Pandya\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Merging Two Sorted Arrays\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-15T03:00:00.000Z\",\"name\":\"Yuzhi Zhang\",\"tutor\":\"Julia\",\"professor\":\"Amos Bloomberg\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-15T02:30:00.000Z\",\"name\":\"Seunghyeon Shin\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"General Questions\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-15T05:30:00.000Z\",\"name\":\"Maxwel Guy\",\"tutor\":\"Alan\",\"professor\":\"Teseo Schneider\",\"info\":\"Constructor Overloading\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-15T05:30:00.000Z\",\"name\":\"Corrina Zhang\",\"tutor\":\"Alan\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Compilation and Method Bug Fixes\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-15T02:30:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-17T12:00:00.000Z\",\"name\":\"Meena Jain\",\"tutor\":\"Alan\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-17T02:00:00.000Z\",\"name\":\"carlos flores\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-17T02:00:00.000Z\",\"name\":\"Christina Luongo\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-17T02:00:00.000Z\",\"name\":\"Susan Pinchiaroli\",\"tutor\":\"Julia\",\"professor\":\"Douglas Moody\",\"info\":\"OOP taking in objects as parameters. \",\"resolve\":\"\\r\"},{\"date\":\"2019-04-17T03:00:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Stack\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-17T03:30:00.000Z\",\"name\":\"Yue Yin\",\"tutor\":\"Julia\",\"professor\":\"Douglas Moody\",\"info\":\"Inheritance\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-18T01:00:00.000Z\",\"name\":\"Lee Boodoo\",\"tutor\":\"Alan\",\"professor\":\"Douglas Moody\",\"info\":\"Inheritance\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-18T04:00:00.000Z\",\"name\":\"Anh Nguyen\",\"tutor\":\"Alan\",\"professor\":\"Douglas Moody\",\"info\":\"Inheritance\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-19T10:00:00.000Z\",\"name\":\"Alexander Bobb\",\"tutor\":\"Aashish\",\"professor\":\"Nader Nassar\",\"info\":\"Constructors\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-04-24T06:43:00.000Z\",\"name\":\"Gabby Clavell\",\"tutor\":\"Bella\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Installing Processing\",\"resolve\":\"\\r\"},{\"date\":\"2019-04-29T02:00:00.000Z\",\"name\":\"karen cruz\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-29T02:00:00.000Z\",\"name\":\"Neelam Pandya\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-04-29T02:00:00.000Z\",\"name\":\"Anika Hussen\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-04-29T02:00:00.000Z\",\"name\":\"Sarai Daniels\",\"tutor\":\"Julia\",\"professor\":\"Candido Cabo\",\"info\":\"ArrayList\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-29T04:00:00.000Z\",\"name\":\"Mudit Gupta\",\"tutor\":\"Alan\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-30T11:30:00.000Z\",\"name\":\"Ee Ning Foo\",\"tutor\":\"Ilias\",\"professor\":\"Amos Bloomberg\",\"info\":\"ArrayList\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-04-30T12:30:00.000Z\",\"name\":\"jane zhang\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Installing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-30T12:30:00.000Z\",\"name\":\"Sarah Morgan\",\"tutor\":\"Ilias\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Installing and HW\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-04-30T12:40:00.000Z\",\"name\":\"sylvie chen\",\"tutor\":\"Ilias\",\"professor\":\"Teseo Schneider\",\"info\":\"Inheritiance/polymorphism\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-01T12:30:00.000Z\",\"name\":\"Chloe Qian\",\"tutor\":\"Alan\",\"professor\":\"Amos Bloomberg\",\"info\":\"toString\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-01T01:30:00.000Z\",\"name\":\"Arif Howlader\",\"tutor\":\"Alan\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-01T01:30:00.000Z\",\"name\":\"Meena Jain\",\"tutor\":\"Alan\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-05-01T01:30:00.000Z\",\"name\":\"Ee Ning Foo\",\"tutor\":\"Alan\",\"professor\":\"Amos Bloomberg\",\"info\":\"object and arraylist to string\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-01T01:30:00.000Z\",\"name\":\"Alyssa White\",\"tutor\":\"Alan\",\"professor\":\"Amos Bloomberg\",\"info\":\"Method definitions\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-05-01T02:00:00.000Z\",\"name\":\"Zeba Pirani\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-01T02:30:00.000Z\",\"name\":\"Susan pinchiaroli\",\"tutor\":\"Alan\",\"professor\":\"Douglas Moody\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-01T02:30:00.000Z\",\"name\":\"Daeoh Kim\",\"tutor\":\"Alan\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-01T02:30:00.000Z\",\"name\":\"Yue Yin\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Exception\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-01T04:30:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Julia\",\"professor\":\"Nader Nassar\",\"info\":\"Reading from a File\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-05-01T07:00:00.000Z\",\"name\":\"Sattwik\",\"tutor\":\"Hari\",\"professor\":\"Suzanne McIntosh\",\"info\":\"installing jdk/ importing processing\",\"resolve\":\"Unresolved: they didn't get it Unresolved: out of time\\r\"},{\"date\":\"2019-05-02T03:30:00.000Z\",\"name\":\"Suman Modak\",\"tutor\":\"Alan\",\"professor\":\"Suzanne McIntosh\",\"info\":\"this.x should be this.y\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-02T02:30:00.000Z\",\"name\":\"lee boodoo\",\"tutor\":\"Alan\",\"professor\":\"Douglas Moody\",\"info\":\"Exception \",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-02T03:30:00.000Z\",\"name\":\"Claire Zhu\",\"tutor\":\"Bella\",\"professor\":\"Amos Bloomberg\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-02T05:00:00.000Z\",\"name\":\"Junyi Sim\",\"tutor\":\"Alan\",\"professor\":\"Amos Bloomberg\",\"info\":\"OOP\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-02T06:00:00.000Z\",\"name\":\"Muhammad A Saeed\",\"tutor\":\"Bella\",\"professor\":\"Suzanne McIntosh\",\"info\":\"installation\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-03T09:30:00.000Z\",\"name\":\"Alexander Bobb\",\"tutor\":\"Aashish\",\"professor\":\"Nader Nassar\",\"info\":\"Modularization of Code\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-05-03T09:45:00.000Z\",\"name\":\"Chloe Qian\",\"tutor\":\"Aashish\",\"professor\":\"Amos Bloomberg\",\"info\":\"Understanding Code: have not been taught Recursion yet?\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-05-03T10:35:00.000Z\",\"name\":\"Meena Jain\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing not properly installed\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-03T11:15:00.000Z\",\"name\":\"Mayue Ma\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing not properly installed: asked her to post on Forum\",\"resolve\":\"Unresolved: they didn't get it Unresolved: out of time\\r\"},{\"date\":\"2019-05-03T11:15:00.000Z\",\"name\":\"Karen Cruz\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing and ArrayLists\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-03T11:35:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing and ArrayLists\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-03T11:40:00.000Z\",\"name\":\"Carlos Flores\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-03T11:55:00.000Z\",\"name\":\"Christina Luongo\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-03T01:00:00.000Z\",\"name\":\"lee boodoo\",\"tutor\":\"Aashish\",\"professor\":\"Douglas Moody\",\"info\":\"OOP confusion as well\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-05-03T02:15:00.000Z\",\"name\":\"Sterling Grube\",\"tutor\":\"Aashish\",\"professor\":\"Douglas Moody\",\"info\":\"\\\"Same as Lee\",\"resolve\":\" but ran out of time\\\"\"},{\"date\":\"2019-05-04T12:15:00.000Z\",\"name\":\"Alexander\",\"tutor\":\"Hari\",\"professor\":\"Nader Nassar\",\"info\":\"Showed how to define an exception and implement\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-04T01:47:00.000Z\",\"name\":\"Seunghyeon Shin\",\"tutor\":\"Hari\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Processing\",\"resolve\":\"\\r\"},{\"date\":\"2019-05-05T12:15:00.000Z\",\"name\":\"Merel Huisman\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Installing Processing\",\"resolve\":\" locating core.jar\\\"\"},{\"date\":\"2019-05-05T12:20:00.000Z\",\"name\":\"Mayue Ma\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Helped develop a timer system\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-06T03:00:00.000Z\",\"name\":\"An Yi\",\"tutor\":\"Julia\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Mouse Pressed\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-06T12:30:00.000Z\",\"name\":\"Anastasiya Bolgova\",\"tutor\":\"Julia\",\"professor\":\"Gene Locklear\",\"info\":\"Starwars\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-06T03:30:00.000Z\",\"name\":\"Junyi Sim\",\"tutor\":\"Alan\",\"professor\":\"Amos Bloomberg\",\"info\":\"Printing out word class\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-06T03:35:00.000Z\",\"name\":\"Shijia Ma\",\"tutor\":\"Julia\",\"professor\":\"Amos Bloomberg\",\"info\":\"printing out object\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-07T11:30:00.000Z\",\"name\":\"William Yoo\",\"tutor\":\"Ilias\",\"professor\":\"Amos Bloomberg\",\"info\":\"Recursion Explanation\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-07T11:30:00.000Z\",\"name\":\"Matthew Harnick\",\"tutor\":\"Ilias\",\"professor\":\"Nader Nassar\",\"info\":\"OOP Debugging\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-07T11:30:00.000Z\",\"name\":\"Claire Zhu\",\"tutor\":\"Ilias\",\"professor\":\"Amos Bloomberg\",\"info\":\"Recursion Explanation\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-07T11:00:00.000Z\",\"name\":\"Akiva Rockland\",\"tutor\":\"Ilias\",\"professor\":\"Gene Locklear\",\"info\":\"ArrayList Logic Errors\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-07T12:00:00.000Z\",\"name\":\"Brian Rios\",\"tutor\":\"Ilias\",\"professor\":\"Gene Locklear\",\"info\":\"ArrayList Logic Errors\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-07T12:00:00.000Z\",\"name\":\"Anastasiya Bolgova\",\"tutor\":\"Ilias\",\"professor\":\"Gene Locklear\",\"info\":\"ArrayList Logic Errors\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-07T01:00:00.000Z\",\"name\":\"Lianne Yaacoby\",\"tutor\":\"Ilias\",\"professor\":\"Amos Bloomberg\",\"info\":\"Code Explanation\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-08T01:00:00.000Z\",\"name\":\"Raj Bharaj\",\"tutor\":\"Alan\",\"professor\":\"Amos Bloomberg\",\"info\":\"Recursion\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-08T02:00:00.000Z\",\"name\":\"susan pinchiaroli\",\"tutor\":\"Alan\",\"professor\":\"Douglas Moody\",\"info\":\"\\\"\"},{\"date\":\"2019-05-08T15:00:00.000Z\",\"name\":\"Neelam Pandya\",\"tutor\":\"Hari\",\"professor\":\"Suzanne McIntosh\",\"info\":\"access to papplet\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-08T15:00:00.000Z\",\"name\":\"Mariah Harilall\",\"tutor\":\"Hari\",\"professor\":\"Suzanne McIntosh\",\"info\":\"access to papplet\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2018-05-09T01:30:00.000Z\",\"name\":\"Islambek Abrayev\",\"tutor\":\"Alan\",\"professor\":\"Gene Locklear\",\"info\":\"File access\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-10T10:35:00.000Z\",\"name\":\"Nick Latchana\",\"tutor\":\"Aashish\",\"professor\":\"Nader Nassar\",\"info\":\"Some methods were static for no reason\",\"resolve\":\"Resolved: they're still shaky\\r\"},{\"date\":\"2019-05-10T11:55:00.000Z\",\"name\":\"Anika Hussen\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"Nothing specific\",\"resolve\":\"Resolved: they get it!\\r\"},{\"date\":\"2019-05-10T12:00:00.000Z\",\"name\":\"Karishma Mohan\",\"tutor\":\"Aashish\",\"professor\":\"Suzanne McIntosh\",\"info\":\"\\\"Abstract Classes\",\"resolve\":\" Polymorphism\\\"\"},{\"date\":\"2019-05-13T02:00:00.000Z\",\"name\":\"Igor Dobroserdov\",\"tutor\":\"Julia\",\"professor\":\"Teseo Schneider\",\"info\":\"Bonus Questions\",\"resolve\":\"Resolved: they get it!\\r\"}]");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/101Timeline.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\myWebsite\pages\101Timeline.js */"./pages/101Timeline.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "d3-axis":
/*!**************************!*\
  !*** external "d3-axis" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-axis");

/***/ }),

/***/ "d3-brush":
/*!***************************!*\
  !*** external "d3-brush" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-brush");

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),

/***/ "d3-selection":
/*!*******************************!*\
  !*** external "d3-selection" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-selection");

/***/ }),

/***/ "d3-time-format":
/*!*********************************!*\
  !*** external "d3-time-format" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-time-format");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "three-gltf-loader":
/*!************************************!*\
  !*** external "three-gltf-loader" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three-gltf-loader");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=101Timeline.js.map