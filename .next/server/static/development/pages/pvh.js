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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/pvh.js":
/*!**********************!*\
  !*** ./pages/pvh.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\pages\\pvh.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class PVH extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const style = __jsx("style", {
      jsx: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, `
    
    body{
        box-sizing: border-box;
        text-align: center;
    }

    h1{
        font-family: Klein-Medium;
        font-size: 4rem;
        margin-block-end: .5em;
    }

    a{
        text-decoration: none;
    }

    a:hover{
        opacity: .5;
    }

    h2{
        font-family: Klein-Bold;
        font-size: 4rem;
        margin-block-end: .5em;
    }

    h4{
        font-family: Klein-Light;
        font-size: 2.5rem;
        padding-left: 5%;
        padding-right: 5%;
        margin-block-start: .4em;
        margin-block-end: .5em;
    }

    p{
        font-family: Klein-Regular;
        font-size: 1.8rem;
        padding-left:23%;
        padding-right: 23%;
    }

    #contents h4{
        text-align: left;
    }

    .mediaButton{
        width: 100%;
        height: auto;
        cursor: pointer;
    }

    #mediaPics{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 10% 10% 10%;
        row-gap: 10px;
        justify-content: center;
        grid-gap: 20px;
    }

    .model{
        width: 100%;
        height: auto;
    }

    #modelContainer{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 25% 25% 25%;
        row-gap: 10px;
        justify-content: center;
        grid-gap: 20px;
    }

    #suppliers h4, #goals h4{
        margin-block-end : .15rem;
        margin-block-start: .15rem;
    }

    @font-face{
        font-family: Klein-Regular;
        src: url(Fonts/Klein_Regular.otf);
    }

    @font-face{
        font-family: Klein-Bold;
        src: url(Fonts/Klein_Bold.otf);
    }

    @font-face{
        font-family: Klein-Medium;
        src: url(Fonts/Klein_Regular.otf);
    }


    @font-face{
        font-family: Klein-Light;
        src: url(Fonts/Klein_Light.otf);
    }`);

    const html = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      id: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "CALVIN KLEIN"), __jsx("div", {
      id: "modelContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("img", {
      src: "Klein/brief.jpg",
      className: "model",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }), __jsx("img", {
      src: "Klein/panties.jpg",
      className: "model",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), __jsx("img", {
      src: "Klein/bra.jpg",
      className: "model",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }))), __jsx("section", {
      id: "custom",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "#MYCALVINS CUSTOM"), __jsx("img", {
      src: "Klein/map.png",
      width: "80%",
      height: "auto",
      margin: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Sourced, manufactured, and customized locally in Sri Lanka to optimize a small carbon footprint of XXXX")), __jsx("section", {
      id: "contents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "CONTENTS"), __jsx("img", {
      src: "Klein/contents.png",
      style: {
        width: "40%",
        height: "auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "All Calvin Klein products are made with", __jsx("a", {
      href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__www.oeko-2Dtex.com_en_our-2Dstandards_standard-2D100-2Dby-2Doeko-2Dtex&d=DwMFAg&c=slrrB7dE8n7gBJbeO0g-IQ&r=EAdyeCaJvdjIn1KIyQGo1g&m=kN_7bXUCmItBePdIVDp1Cj4Mum7FO3WOWNRRfum9Zn4&s=1IUyBTSQ5FgxWSqJwH047h0w25BCWFOxUzmOs0xjMNI&e=",
      target: "_blank",
      style: {
        color: "rgb(214, 19, 19)",
        fontFamily: "Klein-Bold"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "Oeko-tex"), " certified fabrics and trims")), __jsx("section", {
      id: "suppliers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "SUPPLIERS"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Modern Cotton Fabric: teejy, Sri Lanka"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "CK Waistband: strechline, Sri Lanka"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, " Manufacturing: MAS, Sri Lanka")), __jsx("section", {
      id: "video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "WATCH IT HAPPEN"), __jsx("iframe", {
      width: "1024",
      height: "576",
      src: "https://www.youtube.com/embed/GKcLvNCl1Zk",
      frameBorder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    })), __jsx("section", {
      id: "goals",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "#GOALS"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Interested in supporting brands that care?"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Click ", __jsx("a", {
      href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__responsibility.pvh.com_&d=DwMFAg&c=slrrB7dE8n7gBJbeO0g-IQ&r=EAdyeCaJvdjIn1KIyQGo1g&m=kN_7bXUCmItBePdIVDp1Cj4Mum7FO3WOWNRRfum9Zn4&s=B4ZCIUX8yPqT4XorTfzC-gKc0tTaEMG3gGBCwFVwhZw&e=",
      target: "_blank",
      style: {
        color: "red",
        fontFamily: "Klein-Bold"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "HERE"), " to learn more about", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), "PVH's sustainability goals")), __jsx("section", {
      id: "socialMedia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "FOLLOW US"), __jsx("div", {
      id: "mediaPics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("img", {
      src: "Klein/instagram.png",
      id: "instagram",
      className: "mediaButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }), __jsx("img", {
      src: "Klein/twitter.png",
      id: "twitter",
      className: "mediaButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), __jsx("img", {
      src: "Klein/facebook.png",
      id: "facebook",
      className: "mediaButton",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }))));

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, style, html);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PVH);

/***/ }),

/***/ 5:
/*!****************************!*\
  !*** multi ./pages/pvh.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\myWebsite\pages\pvh.js */"./pages/pvh.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=pvh.js.map