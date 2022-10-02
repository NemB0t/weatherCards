/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n    --dark:#251B37;\r\n    --mid:#372948;\r\n    --lightPink:#FFCACA;\r\n    --light:#FFECEF;\r\n}\r\nhtml {\r\n    height: 100%;\r\n  }\r\nbody {\r\n    background-color: var(--light);\r\n    margin: 0;\r\n    min-height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 2fr 5fr 1fr;\r\n    grid-template-areas: \r\n    \"header\"\r\n    \"content\"\r\n    \"footer\";\r\n  }\r\n\r\n  .header{\r\n    margin-left: 8px;\r\n    margin-top: 8px;\r\n    padding-left: 80px;\r\n    padding-right: 80px;\r\n    grid-area: header;\r\n    background-color: var(--mid);\r\n    color: var(--lightPink);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: xx-large;\r\n    /* cursor: none; */\r\n  }\r\n.locationMenu{\r\n  display: none;\r\n  position: fixed;\r\n  left: 35%;\r\n  top: 40%;\r\n  height: 200px;\r\n  width: 300px;\r\n  background-color: var(--dark);\r\n  border: 2px solid var(--mid);\r\n  color: var(--lightPink);\r\n  border-radius: 5px;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 20px 0 0 20px;\r\n}\r\n\r\n.blur{\r\n  filter: blur(8px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n  .search{\r\n    width: 80px;\r\n    height: 20px;\r\n    margin: 8px 8px 0 0;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    border-bottom: 1px var(--lightPink);\r\n    outline: none;\r\n    transform: scale(1);\r\n    transition: transform 300ms;\r\n  }\r\n  .search:focus{\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  .content{\r\n    grid-area: content;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n  .card{\r\n    width: 300px;\r\n    height: 200px;\r\n    /* border: 1px solid var(--dark); */\r\n    background-color: var(--dark);\r\n    border-radius: 5px;\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"icon search search\"\r\n    \"icon climate climate\"\r\n    \". temp bin\";\r\n    grid-template-columns: repeat(3,1fr);\r\n    grid-template-rows: repeat(3,1fr);\r\n    color: var(--lightPink);\r\n  }\r\n  .locationName{\r\n    padding-right: 10px;\r\n    grid-area: search;\r\n    font-size: large;\r\n    align-self: center;\r\n    justify-self: flex-end;\r\n  }\r\n  \r\n  .weatherIcon{\r\n    padding-top: 30%;\r\n    grid-area: icon;\r\n    justify-self: center;\r\n    align-self: flex-start;\r\n  }\r\n  .climate{\r\n    grid-area: climate;\r\n    justify-self: flex-start;\r\n    align-self: flex-start;\r\n    padding-top: 10%;\r\n  }\r\n  .temp{\r\n    grid-area: temp;\r\n    font-size: x-large;\r\n    justify-self: flex-start;\r\n    align-self: flex-start;\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n  .temptype{\r\n    background-color: var(--light);\r\n    border: 0;\r\n    width: 27px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n  }\r\n  .temptype:hover{\r\n    background-color: var(--lightPink);\r\n  }\r\n  .deleteBtn{\r\n    grid-area: bin;\r\n    font-size: x-large;\r\n    justify-self: center;\r\n    align-self: flex-start;\r\n    cursor: pointer;\r\n    transform: scale(1);\r\n    transition: transform 300ms;\r\n  }\r\n  .deleteBtn:hover{\r\n    transform: scale(1.2);\r\n  }\r\n  .addCardBtn{\r\n    height: 40px;\r\n    width: 40px;\r\n    background-color: var(--light);\r\n    border: 1px var(--dark) solid;\r\n    font-size: xx-large;\r\n    transition: background-color 300ms;\r\n  }\r\n  .addCardBtn:hover{\r\n    background-color: var(--lightPink);\r\n    cursor: pointer;\r\n  }\r\n  .footer{\r\n    grid-area: footer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: larger;\r\n}\r\n  .footer a{\r\n    text-decoration: none;\r\n    color: var(--dark);\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,YAAY;EACd;AACF;IACI,8BAA8B;IAC9B,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,+BAA+B;IAC/B;;;YAGQ;EACV;;EAEA;IACE,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,4BAA4B;IAC5B,uBAAuB;IACvB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;EACpB;AACF;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,QAAQ;EACR,aAAa;EACb,YAAY;EACZ,6BAA6B;EAC7B,4BAA4B;EAC5B,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,iBAAiB;AACnB;;EAEE;IACE,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,aAAa;IACb,mBAAmB;IACnB,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;EACX;EACA;IACE,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb;;;gBAGY;IACZ,oCAAoC;IACpC,iCAAiC;IACjC,uBAAuB;EACzB;EACA;IACE,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,sBAAsB;EACxB;EACA;IACE,kBAAkB;IAClB,wBAAwB;IACxB,sBAAsB;IACtB,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,kBAAkB;IAClB,wBAAwB;IACxB,sBAAsB;IACtB,aAAa;IACb,SAAS;EACX;EACA;IACE,8BAA8B;IAC9B,SAAS;IACT,WAAW;IACX,eAAe;IACf,kBAAkB;EACpB;EACA;IACE,kCAAkC;EACpC;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,2BAA2B;EAC7B;EACA;IACE,qBAAqB;EACvB;EACA;IACE,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,6BAA6B;IAC7B,mBAAmB;IACnB,kCAAkC;EACpC;EACA;IACE,kCAAkC;IAClC,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;EACE;IACE,qBAAqB;IACrB,kBAAkB;EACpB","sourcesContent":[":root{\r\n    --dark:#251B37;\r\n    --mid:#372948;\r\n    --lightPink:#FFCACA;\r\n    --light:#FFECEF;\r\n}\r\nhtml {\r\n    height: 100%;\r\n  }\r\nbody {\r\n    background-color: var(--light);\r\n    margin: 0;\r\n    min-height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 2fr 5fr 1fr;\r\n    grid-template-areas: \r\n    \"header\"\r\n    \"content\"\r\n    \"footer\";\r\n  }\r\n\r\n  .header{\r\n    margin-left: 8px;\r\n    margin-top: 8px;\r\n    padding-left: 80px;\r\n    padding-right: 80px;\r\n    grid-area: header;\r\n    background-color: var(--mid);\r\n    color: var(--lightPink);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: xx-large;\r\n    /* cursor: none; */\r\n  }\r\n.locationMenu{\r\n  display: none;\r\n  position: fixed;\r\n  left: 35%;\r\n  top: 40%;\r\n  height: 200px;\r\n  width: 300px;\r\n  background-color: var(--dark);\r\n  border: 2px solid var(--mid);\r\n  color: var(--lightPink);\r\n  border-radius: 5px;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 20px 0 0 20px;\r\n}\r\n\r\n.blur{\r\n  filter: blur(8px);\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n  .search{\r\n    width: 80px;\r\n    height: 20px;\r\n    margin: 8px 8px 0 0;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n    border-bottom: 1px var(--lightPink);\r\n    outline: none;\r\n    transform: scale(1);\r\n    transition: transform 300ms;\r\n  }\r\n  .search:focus{\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  .content{\r\n    grid-area: content;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 10px;\r\n  }\r\n  .card{\r\n    width: 300px;\r\n    height: 200px;\r\n    /* border: 1px solid var(--dark); */\r\n    background-color: var(--dark);\r\n    border-radius: 5px;\r\n    display: grid;\r\n    grid-template-areas: \r\n    \"icon search search\"\r\n    \"icon climate climate\"\r\n    \". temp bin\";\r\n    grid-template-columns: repeat(3,1fr);\r\n    grid-template-rows: repeat(3,1fr);\r\n    color: var(--lightPink);\r\n  }\r\n  .locationName{\r\n    padding-right: 10px;\r\n    grid-area: search;\r\n    font-size: large;\r\n    align-self: center;\r\n    justify-self: flex-end;\r\n  }\r\n  \r\n  .weatherIcon{\r\n    padding-top: 30%;\r\n    grid-area: icon;\r\n    justify-self: center;\r\n    align-self: flex-start;\r\n  }\r\n  .climate{\r\n    grid-area: climate;\r\n    justify-self: flex-start;\r\n    align-self: flex-start;\r\n    padding-top: 10%;\r\n  }\r\n  .temp{\r\n    grid-area: temp;\r\n    font-size: x-large;\r\n    justify-self: flex-start;\r\n    align-self: flex-start;\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n  .temptype{\r\n    background-color: var(--light);\r\n    border: 0;\r\n    width: 27px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n  }\r\n  .temptype:hover{\r\n    background-color: var(--lightPink);\r\n  }\r\n  .deleteBtn{\r\n    grid-area: bin;\r\n    font-size: x-large;\r\n    justify-self: center;\r\n    align-self: flex-start;\r\n    cursor: pointer;\r\n    transform: scale(1);\r\n    transition: transform 300ms;\r\n  }\r\n  .deleteBtn:hover{\r\n    transform: scale(1.2);\r\n  }\r\n  .addCardBtn{\r\n    height: 40px;\r\n    width: 40px;\r\n    background-color: var(--light);\r\n    border: 1px var(--dark) solid;\r\n    font-size: xx-large;\r\n    transition: background-color 300ms;\r\n  }\r\n  .addCardBtn:hover{\r\n    background-color: var(--lightPink);\r\n    cursor: pointer;\r\n  }\r\n  .footer{\r\n    grid-area: footer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: larger;\r\n}\r\n  .footer a{\r\n    text-decoration: none;\r\n    color: var(--dark);\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const cardContainer = document.querySelector('.content');
const cardTemplate = document.querySelector('#weatherCardTemplate');
const addCardBtn = document.querySelector('.addCardBtn');
const search = document.querySelector('.search');

//keys for local storage
const LOCAL_STORAGE_LIST_KEY = "card.list"

let cardList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

function createWeatherObject(loc){
    return {
    loc: loc,
    tempType: "°C"}
}

// function createWeatherObject(icon,loc,main,tempc,tempf){
//     return {icon: icon,
//     loc: loc,
//     main: main,
//     tempc: tempc,
//     tempf: tempf,
//     tempType: "°C"}
// }

search.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const wdata = getWeather(search.value)
        wdata.then((response)=>{
            // const wobj = createWeatherObject(response.icon,response.loc,response.main,response.tempc,response.tempf);
            const wobj = createWeatherObject(response.loc)
            cardList.push(wobj);
            saveAndRender(cardList);
            // render(cardList);
            console.log(search.value);
            search.value="";
            closeTheForm();
        })
    }
});

function save(cardList){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(cardList));
}

function saveAndRender(cardList){
    save(cardList);
    render(cardList);
}

function render(cardList){
    console.log(cardList)
    let count = 0;
    clearElements(cardContainer);
    cardList.forEach(card => {
        const wdata = getWeather(card.loc);
        wdata.then((res)=>{
            const template = document.importNode(cardTemplate.content,true)
            const icon =template.querySelector('.weatherIcon');
            const locationName = template.querySelector('.locationName');
            const climate = template.querySelector('.climate');
            const temp = template.querySelector('.temp');
            const deleteBtn = template.querySelector('.deleteBtn');
            // const search = template.querySelector('.search');
            const tempBtn = document.createElement('input');
            
            tempBtn.type="button";
            tempBtn.value="°F";
            tempBtn.classList.add('temptype');

            icon.src = res.icon;
            locationName.textContent = res.loc;
            climate.textContent = res.main;
            tempAssign(card,res,temp,tempBtn);

            // locationName.style.opacity="1";
            cardContainer.prepend(template)
            count+=1;
            // console.log(cardList.length+1,count);
            if(cardList.length == count && count<4){//its here so that the plus appears after the async stuff is done
                // console.log(count);
                const addCardBtn = document.createElement('button');
                addCardBtn.classList.add('addCardBtn');
                addCardBtn.textContent = "+";
                addCardBtn.addEventListener('click',()=>{
                    // console.log('here')
                    openTheForm();
                })
                cardContainer.append(addCardBtn);
            }
            deleteBtn.addEventListener('click',()=>{
                cardList= cardList.filter(cardT => cardT.loc!==card.loc);
                saveAndRender(cardList);
                // saveAndRender(cardList);
            })
        })
    });
    // console.log(count);
    if(cardList.length==0){
        // console.log(count);
        const addCardBtn = document.createElement('button');
        addCardBtn.classList.add('addCardBtn');
        addCardBtn.textContent = "+";
        addCardBtn.addEventListener('click',()=>{
            // console.log('here')
            openTheForm();
        })
        cardContainer.append(addCardBtn);
    }
    // console.log(cardList.length)
}

render(cardList);

function tempAssign(card,res,temp,tempBtn){
    if(card.tempType=="°F"){
        temp.textContent=res.tempf+" °F";
        tempBtn.value= "°C"
    }
    else{
        temp.textContent = res.tempc+" °C";
        tempBtn.value= "°F"
    }
    temp.append(tempBtn);
}

function clearElements(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

async function getWeather(location){
    try{
        const wpromise = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=71385b680d4404874d2a19193f0f5800',{mode: 'cors'});
        if (wpromise.status===400){
            console.log('connection error');
        }
        else{
            const wdata = await wpromise.json();
            const weatherName = wdata.weather[0].main;
            const iconName = 'https://openweathermap.org/img/wn/'+wdata.weather[0].icon+'@2x.png';
            const tempk = wdata.main.temp;
            const tempc = Math.round(tempk-273.15);
            const tempf = Math.round((tempc*(9/5))+32);
            const loc = wdata.name;
            // console.log(wdata.name);
            return {loc : loc,main: weatherName,icon : iconName,tempc:tempc,tempf:tempf}
        }
    }
    catch(error){
        // console.log(error);
    }
    
}


function openTheForm() {
    document.querySelector('.locationMenu').style.display = "flex";
    blurBg();
}
  
function closeTheForm() {
    document.querySelector('.locationMenu').style.display = "none";
    unBlurBg();
}

function blurBg(){
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');
    const footer = document.querySelector('.footer');
    header.classList.add('blur');
    content.classList.add('blur');
    footer.classList.add('blur');
}
function unBlurBg(){
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');
    const footer = document.querySelector('.footer');
    header.classList.remove('blur');
    content.classList.remove('blur');
    footer.classList.remove('blur');
}

//References
//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=71385b680d4404874d2a19193f0f5800 - weather data
//https://openweathermap.org/img/wn/03d@2x.png - icon
// https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
// https://openweathermap.org/weather-conditions

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOElBQThJLGFBQWE7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyY2FyZHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJjYXJkcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhcmRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhcmRzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJjYXJkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FyZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJjYXJkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyY2FyZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhcmRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhcmRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhcmRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJjYXJkcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyY2FyZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJjYXJkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJjYXJkcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJjYXJkcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmNhcmRzLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgICAtLWRhcms6IzI1MUIzNztcXHJcXG4gICAgLS1taWQ6IzM3Mjk0ODtcXHJcXG4gICAgLS1saWdodFBpbms6I0ZGQ0FDQTtcXHJcXG4gICAgLS1saWdodDojRkZFQ0VGO1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgNWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJoZWFkZXJcXFwiXFxyXFxuICAgIFxcXCJjb250ZW50XFxcIlxcclxcbiAgICBcXFwiZm9vdGVyXFxcIjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXJ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0UGluayk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgLyogY3Vyc29yOiBub25lOyAqL1xcclxcbiAgfVxcclxcbi5sb2NhdGlvbk1lbnV7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMzUlO1xcclxcbiAgdG9wOiA0MCU7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1taWQpO1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ2h0UGluayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ibHVye1xcclxcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4gIC5zZWFyY2h7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogOHB4IDhweCAwIDA7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS1saWdodFBpbmspO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XFxyXFxuICB9XFxyXFxuICAuc2VhcmNoOmZvY3Vze1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgLmNhcmR7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwiaWNvbiBzZWFyY2ggc2VhcmNoXFxcIlxcclxcbiAgICBcXFwiaWNvbiBjbGltYXRlIGNsaW1hdGVcXFwiXFxyXFxuICAgIFxcXCIuIHRlbXAgYmluXFxcIjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLDFmcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodFBpbmspO1xcclxcbiAgfVxcclxcbiAgLmxvY2F0aW9uTmFtZXtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzZWFyY2g7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLndlYXRoZXJJY29ue1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xcclxcbiAgICBncmlkLWFyZWE6IGljb247XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcbiAgLmNsaW1hdGV7XFxyXFxuICAgIGdyaWQtYXJlYTogY2xpbWF0ZTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xcclxcbiAgfVxcclxcbiAgLnRlbXB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGVtcDtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIC50ZW1wdHlwZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHdpZHRoOiAyN3B4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG4gIC50ZW1wdHlwZTpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRQaW5rKTtcXHJcXG4gIH1cXHJcXG4gIC5kZWxldGVCdG57XFxyXFxuICAgIGdyaWQtYXJlYTogYmluO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXHJcXG4gIH1cXHJcXG4gIC5kZWxldGVCdG46aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIH1cXHJcXG4gIC5hZGRDYXJkQnRue1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWRhcmspIHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xcclxcbiAgfVxcclxcbiAgLmFkZENhcmRCdG46aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UGluayk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5mb290ZXJ7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcbiAgLmZvb3RlciBhe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtFQUNkO0FBQ0Y7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9COzs7WUFHUTtFQUNWOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7QUFDRjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7RUFDWDtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2I7OztnQkFHWTtJQUNaLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsU0FBUztFQUNYO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usa0NBQWtDO0lBQ2xDLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7RUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAgIC0tZGFyazojMjUxQjM3O1xcclxcbiAgICAtLW1pZDojMzcyOTQ4O1xcclxcbiAgICAtLWxpZ2h0UGluazojRkZDQUNBO1xcclxcbiAgICAtLWxpZ2h0OiNGRkVDRUY7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA1ZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcImhlYWRlclxcXCJcXHJcXG4gICAgXFxcImNvbnRlbnRcXFwiXFxyXFxuICAgIFxcXCJmb290ZXJcXFwiO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlcntcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRQaW5rKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgICAvKiBjdXJzb3I6IG5vbmU7ICovXFxyXFxuICB9XFxyXFxuLmxvY2F0aW9uTWVudXtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAzNSU7XFxyXFxuICB0b3A6IDQwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1pZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlnaHRQaW5rKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXJ7XFxyXFxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiAgLnNlYXJjaHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgbWFyZ2luOiA4cHggOHB4IDAgMDtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLWxpZ2h0UGluayk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcXHJcXG4gIH1cXHJcXG4gIC5zZWFyY2g6Zm9jdXN7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50e1xcclxcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuICAuY2FyZHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrKTsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJpY29uIHNlYXJjaCBzZWFyY2hcXFwiXFxyXFxuICAgIFxcXCJpY29uIGNsaW1hdGUgY2xpbWF0ZVxcXCJcXHJcXG4gICAgXFxcIi4gdGVtcCBiaW5cXFwiO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsMWZyKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0UGluayk7XFxyXFxuICB9XFxyXFxuICAubG9jYXRpb25OYW1le1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBncmlkLWFyZWE6IHNlYXJjaDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAud2VhdGhlckljb257XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzMCU7XFxyXFxuICAgIGdyaWQtYXJlYTogaWNvbjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuICAuY2xpbWF0ZXtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjbGltYXRlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxyXFxuICB9XFxyXFxuICAudGVtcHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0ZW1wO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgLnRlbXB0eXBle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgd2lkdGg6IDI3cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcbiAgLnRlbXB0eXBlOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodFBpbmspO1xcclxcbiAgfVxcclxcbiAgLmRlbGV0ZUJ0bntcXHJcXG4gICAgZ3JpZC1hcmVhOiBiaW47XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xcclxcbiAgfVxcclxcbiAgLmRlbGV0ZUJ0bjpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgfVxcclxcbiAgLmFkZENhcmRCdG57XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZGFyaykgc29saWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XFxyXFxuICB9XFxyXFxuICAuYWRkQ2FyZEJ0bjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRQaW5rKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgLmZvb3RlcntcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuICAuZm9vdGVyIGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXJDYXJkVGVtcGxhdGUnKTtcclxuY29uc3QgYWRkQ2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRDYXJkQnRuJyk7XHJcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcclxuXHJcbi8va2V5cyBmb3IgbG9jYWwgc3RvcmFnZVxyXG5jb25zdCBMT0NBTF9TVE9SQUdFX0xJU1RfS0VZID0gXCJjYXJkLmxpc3RcIlxyXG5cclxubGV0IGNhcmRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZKSkgfHwgW107XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyT2JqZWN0KGxvYyl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgbG9jOiBsb2MsXHJcbiAgICB0ZW1wVHlwZTogXCLCsENcIn1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlV2VhdGhlck9iamVjdChpY29uLGxvYyxtYWluLHRlbXBjLHRlbXBmKXtcclxuLy8gICAgIHJldHVybiB7aWNvbjogaWNvbixcclxuLy8gICAgIGxvYzogbG9jLFxyXG4vLyAgICAgbWFpbjogbWFpbixcclxuLy8gICAgIHRlbXBjOiB0ZW1wYyxcclxuLy8gICAgIHRlbXBmOiB0ZW1wZixcclxuLy8gICAgIHRlbXBUeXBlOiBcIsKwQ1wifVxyXG4vLyB9XHJcblxyXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICBjb25zdCB3ZGF0YSA9IGdldFdlYXRoZXIoc2VhcmNoLnZhbHVlKVxyXG4gICAgICAgIHdkYXRhLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICAvLyBjb25zdCB3b2JqID0gY3JlYXRlV2VhdGhlck9iamVjdChyZXNwb25zZS5pY29uLHJlc3BvbnNlLmxvYyxyZXNwb25zZS5tYWluLHJlc3BvbnNlLnRlbXBjLHJlc3BvbnNlLnRlbXBmKTtcclxuICAgICAgICAgICAgY29uc3Qgd29iaiA9IGNyZWF0ZVdlYXRoZXJPYmplY3QocmVzcG9uc2UubG9jKVxyXG4gICAgICAgICAgICBjYXJkTGlzdC5wdXNoKHdvYmopO1xyXG4gICAgICAgICAgICBzYXZlQW5kUmVuZGVyKGNhcmRMaXN0KTtcclxuICAgICAgICAgICAgLy8gcmVuZGVyKGNhcmRMaXN0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VhcmNoLnZhbHVlKTtcclxuICAgICAgICAgICAgc2VhcmNoLnZhbHVlPVwiXCI7XHJcbiAgICAgICAgICAgIGNsb3NlVGhlRm9ybSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2F2ZShjYXJkTGlzdCl7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLEpTT04uc3RyaW5naWZ5KGNhcmRMaXN0KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVBbmRSZW5kZXIoY2FyZExpc3Qpe1xyXG4gICAgc2F2ZShjYXJkTGlzdCk7XHJcbiAgICByZW5kZXIoY2FyZExpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoY2FyZExpc3Qpe1xyXG4gICAgY29uc29sZS5sb2coY2FyZExpc3QpXHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY2xlYXJFbGVtZW50cyhjYXJkQ29udGFpbmVyKTtcclxuICAgIGNhcmRMaXN0LmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2RhdGEgPSBnZXRXZWF0aGVyKGNhcmQubG9jKTtcclxuICAgICAgICB3ZGF0YS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShjYXJkVGVtcGxhdGUuY29udGVudCx0cnVlKVxyXG4gICAgICAgICAgICBjb25zdCBpY29uID10ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCcud2VhdGhlckljb24nKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25OYW1lID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uTmFtZScpO1xyXG4gICAgICAgICAgICBjb25zdCBjbGltYXRlID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcignLmNsaW1hdGUnKTtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVCdG4nKTtcclxuICAgICAgICAgICAgLy8gY29uc3Qgc2VhcmNoID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRlbXBCdG4udHlwZT1cImJ1dHRvblwiO1xyXG4gICAgICAgICAgICB0ZW1wQnRuLnZhbHVlPVwiwrBGXCI7XHJcbiAgICAgICAgICAgIHRlbXBCdG4uY2xhc3NMaXN0LmFkZCgndGVtcHR5cGUnKTtcclxuXHJcbiAgICAgICAgICAgIGljb24uc3JjID0gcmVzLmljb247XHJcbiAgICAgICAgICAgIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IHJlcy5sb2M7XHJcbiAgICAgICAgICAgIGNsaW1hdGUudGV4dENvbnRlbnQgPSByZXMubWFpbjtcclxuICAgICAgICAgICAgdGVtcEFzc2lnbihjYXJkLHJlcyx0ZW1wLHRlbXBCdG4pO1xyXG5cclxuICAgICAgICAgICAgLy8gbG9jYXRpb25OYW1lLnN0eWxlLm9wYWNpdHk9XCIxXCI7XHJcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIucHJlcGVuZCh0ZW1wbGF0ZSlcclxuICAgICAgICAgICAgY291bnQrPTE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNhcmRMaXN0Lmxlbmd0aCsxLGNvdW50KTtcclxuICAgICAgICAgICAgaWYoY2FyZExpc3QubGVuZ3RoID09IGNvdW50ICYmIGNvdW50PDQpey8vaXRzIGhlcmUgc28gdGhhdCB0aGUgcGx1cyBhcHBlYXJzIGFmdGVyIHRoZSBhc3luYyBzdHVmZiBpcyBkb25lXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRDYXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBhZGRDYXJkQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZENhcmRCdG4nKTtcclxuICAgICAgICAgICAgICAgIGFkZENhcmRCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgICAgICAgICAgICAgIGFkZENhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hlcmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5UaGVGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmQoYWRkQ2FyZEJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2FyZExpc3Q9IGNhcmRMaXN0LmZpbHRlcihjYXJkVCA9PiBjYXJkVC5sb2MhPT1jYXJkLmxvYyk7XHJcbiAgICAgICAgICAgICAgICBzYXZlQW5kUmVuZGVyKGNhcmRMaXN0KTtcclxuICAgICAgICAgICAgICAgIC8vIHNhdmVBbmRSZW5kZXIoY2FyZExpc3QpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgIGlmKGNhcmRMaXN0Lmxlbmd0aD09MCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICAgIGNvbnN0IGFkZENhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBhZGRDYXJkQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZENhcmRCdG4nKTtcclxuICAgICAgICBhZGRDYXJkQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICAgICAgYWRkQ2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hlcmUnKVxyXG4gICAgICAgICAgICBvcGVuVGhlRm9ybSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY2FyZENvbnRhaW5lci5hcHBlbmQoYWRkQ2FyZEJ0bik7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjYXJkTGlzdC5sZW5ndGgpXHJcbn1cclxuXHJcbnJlbmRlcihjYXJkTGlzdCk7XHJcblxyXG5mdW5jdGlvbiB0ZW1wQXNzaWduKGNhcmQscmVzLHRlbXAsdGVtcEJ0bil7XHJcbiAgICBpZihjYXJkLnRlbXBUeXBlPT1cIsKwRlwiKXtcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50PXJlcy50ZW1wZitcIiDCsEZcIjtcclxuICAgICAgICB0ZW1wQnRuLnZhbHVlPSBcIsKwQ1wiXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSByZXMudGVtcGMrXCIgwrBDXCI7XHJcbiAgICAgICAgdGVtcEJ0bi52YWx1ZT0gXCLCsEZcIlxyXG4gICAgfVxyXG4gICAgdGVtcC5hcHBlbmQodGVtcEJ0bik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyRWxlbWVudHMoZWxlbWVudCl7XHJcbiAgICB3aGlsZShlbGVtZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB3cHJvbWlzZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPScrbG9jYXRpb24rJyZBUFBJRD03MTM4NWI2ODBkNDQwNDg3NGQyYTE5MTkzZjBmNTgwMCcse21vZGU6ICdjb3JzJ30pO1xyXG4gICAgICAgIGlmICh3cHJvbWlzZS5zdGF0dXM9PT00MDApe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGlvbiBlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCB3ZGF0YSA9IGF3YWl0IHdwcm9taXNlLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlck5hbWUgPSB3ZGF0YS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICAgICAgICAgIGNvbnN0IGljb25OYW1lID0gJ2h0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8nK3dkYXRhLndlYXRoZXJbMF0uaWNvbisnQDJ4LnBuZyc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBrID0gd2RhdGEubWFpbi50ZW1wO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wYyA9IE1hdGgucm91bmQodGVtcGstMjczLjE1KTtcclxuICAgICAgICAgICAgY29uc3QgdGVtcGYgPSBNYXRoLnJvdW5kKCh0ZW1wYyooOS81KSkrMzIpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2MgPSB3ZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtsb2MgOiBsb2MsbWFpbjogd2VhdGhlck5hbWUsaWNvbiA6IGljb25OYW1lLHRlbXBjOnRlbXBjLHRlbXBmOnRlbXBmfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW5UaGVGb3JtKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uTWVudScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGJsdXJCZygpO1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIGNsb3NlVGhlRm9ybSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbk1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB1bkJsdXJCZygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBibHVyQmcoKXtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcclxufVxyXG5mdW5jdGlvbiB1bkJsdXJCZygpe1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xyXG59XHJcblxyXG4vL1JlZmVyZW5jZXNcclxuLy9odHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9TG9uZG9uJkFQUElEPTcxMzg1YjY4MGQ0NDA0ODc0ZDJhMTkxOTNmMGY1ODAwIC0gd2VhdGhlciBkYXRhXHJcbi8vaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzAzZEAyeC5wbmcgLSBpY29uXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ0MTc3NDE3L2hvdy10by1kaXNwbGF5LW9wZW53ZWF0aGVybWFwLXdlYXRoZXItaWNvblxyXG4vLyBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy93ZWF0aGVyLWNvbmRpdGlvbnNcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9