webpackHotUpdate("static\\development\\pages\\pvh.js",{

/***/ "./pages/pvh.js":
/*!**********************!*\
  !*** ./pages/pvh.js ***!
  \**********************/
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





var _jsxFileName = "C:\\Users\\User\\Documents\\myWebsite\\pages\\pvh.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var PVH =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PVH, _React$Component);

  function PVH() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PVH);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PVH).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PVH, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var images = this.mediaContainer.querySelectorAll("img");

      images[0].onclick = function () {
        return window.open("https://twitter.com/CalvinKlein?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", "_blank");
      };

      images[1].onclick = function () {
        return window.open("https://www.facebook.com/CalvinKlein/", "_blank");
      };

      images[2].onclick = function () {
        return window.open("https://www.instagram.com/calvinklein/?hl=en", "_blank");
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var style = __jsx("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "\n    \n    body, #content{\n        text-align: center;\n        justify-content: center;\n        background: #FFFFFF;\n    }\n\n    a{\n        text-decoration: none\n        font-family: Klein-Bold;\n    }\n\n    a:hover{\n        opacity: .5;\n    }\n\n    h2{\n        font-family: Klein-Medium;\n        margin-block-start: .5em;\n        margin-block-end: .5em;\n        color: #000000;\n    }\n\n    h4{\n        font-family: Klein-Light;\n        margin-block-start: .4em;\n        margin-block-end: .4em;\n        color: #000000;\n    }\n\n    p{\n        font-family: Klein-Regular;\n        color: #000000;\n        margin-left:10%;\n        margin-right:10%;\n    }\n\n    section{\n        border:none;\n        display:inline;\n    }\n\n    #contents h4{\n        text-align: left;\n    }\n\n    .mediaButton{\n        width: 100%;\n        height: auto;\n        cursor: pointer;\n    }\n\n    #mediaPics{\n        display: grid;\n        grid-template-rows: auto;\n        grid-template-columns: repeat(3,30%);\n        grid-gap: 10px;\n        justify-content:center;\n    }\n\n    .model{\n        width: 100%;\n        height: auto;\n    }\n\n    #modelContainer{\n        display: grid;\n        grid-template-rows: auto;\n        grid-template-columns: repeat(3,30%);\n        grid-gap: 5px;\n        justify-content: center;\n    }\n\n    @font-face{\n        font-family: Klein-Regular;\n        src: url(Klein/Fonts/Klein_Regular.otf);\n    }\n\n    @font-face{\n        font-family: Klein-Bold;\n        src: url(Klein/Fonts/Klein_Bold.otf);\n    }\n\n    @font-face{\n        font-family: Klein-Medium;\n        src: url(Klein/Fonts/Klein_Regular.otf);\n    }\n\n\n    @font-face{\n        font-family: Klein-Light;\n        src: url(Klein/Fonts/Klein_Light.otf);\n    }\n\n    @media screen and (max-width: 599px){\n        h2{\n            font-size: 2rem;\n        }\n        h4{\n            font-size: 1.3rem;\n\n        }\n        #goals h4{\n            font-size: 1.3rem;\n        }\n        p{\n            font-size: .8rem;\n        }\n        a{\n            font-size: 1.1em;\n        }\n\n    }\n\n    @media screen and (min-width: 600px) {\n        h2 {\n            font-size: 4rem;\n        }\n        h4{\n            font-size: 2.5rem;\n            padding-left: 5%;\n            padding-right: 5%;\n        }\n        #goals h4{\n            font-size:2.5rem;\n        }\n        a{\n            font-size: 2rem;\n        }\n        p{\n            font-size: 1.8rem;\n        }\n    }    \n    ");

      var html = __jsx("div", {
        id: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("section", {
        id: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx("img", {
        src: "Klein/logo.png",
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), __jsx("div", {
        id: "modelContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("img", {
        src: "Klein/brief.jpg",
        className: "model",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), __jsx("img", {
        src: "Klein/panties.jpg",
        className: "model",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), __jsx("img", {
        src: "Klein/bra.jpg",
        className: "model",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }))), __jsx("section", {
        id: "custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "#MYCALVINS CUSTOM"), __jsx("img", {
        src: "Klein/map.png",
        width: "90%",
        height: "auto",
        margin: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Sourced, manufactured, and customized locally in Sri Lanka to optimize a small carbon footprint of XXXX")), __jsx("section", {
        id: "contents",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "CONTENTS"), __jsx("img", {
        src: "Klein/contents.png",
        style: {
          width: "90%",
          height: "auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "All Calvin Klein products are made with", __jsx("a", {
        href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__www.oeko-2Dtex.com_en_our-2Dstandards_standard-2D100-2Dby-2Doeko-2Dtex&d=DwMFAg&c=slrrB7dE8n7gBJbeO0g-IQ&r=EAdyeCaJvdjIn1KIyQGo1g&m=kN_7bXUCmItBePdIVDp1Cj4Mum7FO3WOWNRRfum9Zn4&s=1IUyBTSQ5FgxWSqJwH047h0w25BCWFOxUzmOs0xjMNI&e=",
        target: "_blank",
        style: {
          color: "rgb(214, 19, 19)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, " Oeko-tex"), " certified fabrics and trims")), __jsx("section", {
        id: "suppliers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "SUPPLIERS"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Modern Cotton Fabric: Teejy, Sri Lanka"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "CK Waistband: Strechline, Sri Lanka"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, " Manufacturing: MAS, Sri Lanka")), __jsx("section", {
        id: "video",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "WATCH IT HAPPEN"), __jsx("iframe", {
        width: "320",
        height: "180",
        src: "https://www.youtube.com/embed/GKcLvNCl1Zk",
        frameBorder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      })), __jsx("section", {
        id: "goals",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "#GOALS"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Interested in supporting ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), " brands that care?"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Click ", __jsx("a", {
        href: "https://urldefense.proofpoint.com/v2/url?u=https-3A__responsibility.pvh.com_&d=DwMFAg&c=slrrB7dE8n7gBJbeO0g-IQ&r=EAdyeCaJvdjIn1KIyQGo1g&m=kN_7bXUCmItBePdIVDp1Cj4Mum7FO3WOWNRRfum9Zn4&s=B4ZCIUX8yPqT4XorTfzC-gKc0tTaEMG3gGBCwFVwhZw&e=",
        target: "_blank",
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "HERE"), " to learn more about", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), "PVH's sustainability goals")), __jsx("section", {
        id: "socialMedia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "FOLLOW US"), __jsx("div", {
        id: "mediaPics",
        ref: function ref(_ref) {
          return _this.mediaContainer = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("img", {
        src: "Klein/instagram.png",
        id: "instagram",
        className: "mediaButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), __jsx("img", {
        src: "Klein/twitter.png",
        id: "twitter",
        className: "mediaButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), __jsx("img", {
        src: "Klein/facebook.png",
        id: "facebook",
        className: "mediaButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }))));

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, style, html);
    }
  }]);

  return PVH;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PVH);

/***/ })

})
//# sourceMappingURL=pvh.js.e7bfc9c9fc55d2653cd0.hot-update.js.map