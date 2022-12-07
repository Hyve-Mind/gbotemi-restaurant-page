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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/background.jpeg */ "./assets/background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.header {\r\n    height: 60px;\r\n    width: 100vw;\r\n    display: flex;\r\n    background-color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.header>button {\r\n    height: 50px;\r\n    width: 100px;\r\n}\r\n\r\n.home {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    background-color: rgb(11, 11, 11, 0.7);\r\n    height: fit-content;\r\n    margin-top: 20px;\r\n    gap: 15px;\r\n    color: rgb(8, 7, 7);\r\n    gap: 30px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home > img{\r\n    width: 350px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.about {\r\n    display: flex;\r\n    border: 4px solid green;\r\n    border-radius: 5px;\r\n    width: 35%;\r\n    height: 150px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    background-color: gold;\r\n}\r\n\r\n.about>div {\r\n    width: 90%;\r\n    margin: auto;\r\n    font-size: 20px;\r\n}\r\n\r\n.about>div:nth-child(2) {\r\n    margin-left: 40px;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.openingHoursContainer {\r\n    width: 35%;\r\n    height: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border: 4px solid green;\r\n    background-color: gold;\r\n}\r\n\r\n.openingHours {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.openingHoursContainer>div:first-child {\r\n    margin-left: 10px;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.location {\r\n    width: 35%;\r\n    height: 130px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    border: 4px solid green;\r\n    background-color: gold;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.location>div:nth-child(1) {\r\n    margin-left: 10px;\r\n    width: 90%;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.location>div:nth-child(2) {\r\n    margin-left: 20px;\r\n    font-size: 20px;\r\n    width: 95%;\r\n}\r\n\r\n.footer {\r\n    height: 60px;\r\n    width: 100vw;\r\n    display: flex;\r\n    background-color: yellow;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    background-color: rgb(11, 11, 11, 0.7);\r\n    height: fit-content;\r\n    margin-top: 20px;\r\n    color: rgb(8, 7, 7);\r\n    gap: 30px;\r\n}\r\n\r\n.menu>div:first-child {\r\n    width: 80%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 45px;\r\n    margin-top: 10px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menuSection {\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n}\r\n\r\n.menuList {\r\n    display: flex;\r\n    border: 15px solid green;\r\n    border-radius: 25px;\r\n    width: 80%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    background-color: gold;\r\n    margin-bottom: 10px;\r\n    margin-top: 45px;\r\n}\r\n\r\n.menuList>div {\r\n    width: 90%;\r\n    margin-left: 10px;\r\n}\r\n\r\n.menuList>div:first-child {\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.menuList>div:nth-child(2) {\r\n    width: 90%;\r\n    align-self: center;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.menuList>div:nth-child(3) {\r\n    width: 90%;\r\n    align-self: center;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.menuList>img:nth-child(4) {\r\n    align-self: flex-end;\r\n    width: 200px;\r\n    border: 1px solid orange;\r\n    margin-right: 10px;\r\n}\r\n\r\n.contactUs {\r\n    width: 70%;\r\n    height: fit-content;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.contacts {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.contacts>div>div {\r\n    margin-left: 15px;\r\n}\r\n\r\n.contactUs>div:first-child {\r\n    width: 65%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.contacts>div>div:first-child {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    margin-top: 10px;\r\n    position: relative;\r\n    top: 15px;\r\n}\r\n\r\n.contacts>div>div>img {\r\n    width: 120px;\r\n}\r\n\r\n.contacts>div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    height: fit-content;\r\n    background-color: gold;\r\n    height: 180px;\r\n    justify-content: space-around;\r\n    border: 10px solid green;\r\n    border-radius: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.contacts>div>div:first-child>div:first-child {\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n}\r\n\r\n.contacts>div>div:nth-child(2) {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    position: relative;\r\n    bottom: 20px;\r\n    left: 35px;\r\n}\r\n.contacts>div:nth-child(2)>div:first-child>img {\r\n    width: 90px;\r\n}\r\n\r\n@media(min-width: 800px) and (max-width:1200px) {\r\n    .about {\r\n        width: 55%;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 55%;\r\n    }\r\n\r\n    .location {\r\n        width: 55%;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media(min-width: 500px) and (max-width:800px) {\r\n    .about {\r\n        width: 80%;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 80%;\r\n    }\r\n\r\n    .location {\r\n        width: 80%;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n@media(max-width:500px) {\r\n    .about {\r\n        width: 100%;\r\n        height: 180px;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 100%;\r\n        height: 300px;\r\n    }\r\n\r\n    .location {\r\n        width: 100%;\r\n        height: 160px;\r\n    }\r\n\r\n    .home {\r\n        width: 90vw;\r\n    }\r\n\r\n    .pic {\r\n        width: 250px;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 90%;\r\n    }\r\n\r\n    .contacts>div>div:first-child {\r\n        width: 100%;\r\n        position: relative;\r\n        top: 5px;\r\n    }\r\n\r\n    .contacts>div>div:nth-child(2) {\r\n        bottom: 9px;\r\n        left: 5px;\r\n    }\r\n\r\n    .contacts>div>div>img {\r\n        width: 100px;\r\n        position: relative;\r\n        right: 20px;\r\n    }\r\n\r\n    .contacts>div>div:first-child>div:first-child {\r\n        font-size: 20px;\r\n        font-weight: 800;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    background: url(\"/assets/background.jpeg\");\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.header {\r\n    height: 60px;\r\n    width: 100vw;\r\n    display: flex;\r\n    background-color: yellow;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.header>button {\r\n    height: 50px;\r\n    width: 100px;\r\n}\r\n\r\n.home {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    background-color: rgb(11, 11, 11, 0.7);\r\n    height: fit-content;\r\n    margin-top: 20px;\r\n    gap: 15px;\r\n    color: rgb(8, 7, 7);\r\n    gap: 30px;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home > img{\r\n    width: 350px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.about {\r\n    display: flex;\r\n    border: 4px solid green;\r\n    border-radius: 5px;\r\n    width: 35%;\r\n    height: 150px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    background-color: gold;\r\n}\r\n\r\n.about>div {\r\n    width: 90%;\r\n    margin: auto;\r\n    font-size: 20px;\r\n}\r\n\r\n.about>div:nth-child(2) {\r\n    margin-left: 40px;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.openingHoursContainer {\r\n    width: 35%;\r\n    height: 250px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    border: 4px solid green;\r\n    background-color: gold;\r\n}\r\n\r\n.openingHours {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.openingHoursContainer>div:first-child {\r\n    margin-left: 10px;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.location {\r\n    width: 35%;\r\n    height: 130px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    border: 4px solid green;\r\n    background-color: gold;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.location>div:nth-child(1) {\r\n    margin-left: 10px;\r\n    width: 90%;\r\n    font-weight: 800;\r\n    font-size: 25px;\r\n}\r\n\r\n.location>div:nth-child(2) {\r\n    margin-left: 20px;\r\n    font-size: 20px;\r\n    width: 95%;\r\n}\r\n\r\n.footer {\r\n    height: 60px;\r\n    width: 100vw;\r\n    display: flex;\r\n    background-color: yellow;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 70vw;\r\n    background-color: rgb(11, 11, 11, 0.7);\r\n    height: fit-content;\r\n    margin-top: 20px;\r\n    color: rgb(8, 7, 7);\r\n    gap: 30px;\r\n}\r\n\r\n.menu>div:first-child {\r\n    width: 80%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 45px;\r\n    margin-top: 10px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menuSection {\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n}\r\n\r\n.menuList {\r\n    display: flex;\r\n    border: 15px solid green;\r\n    border-radius: 25px;\r\n    width: 80%;\r\n    height: 500px;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    background-color: gold;\r\n    margin-bottom: 10px;\r\n    margin-top: 45px;\r\n}\r\n\r\n.menuList>div {\r\n    width: 90%;\r\n    margin-left: 10px;\r\n}\r\n\r\n.menuList>div:first-child {\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.menuList>div:nth-child(2) {\r\n    width: 90%;\r\n    align-self: center;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n}\r\n\r\n.menuList>div:nth-child(3) {\r\n    width: 90%;\r\n    align-self: center;\r\n    font-weight: 800;\r\n    font-size: 30px;\r\n}\r\n\r\n.menuList>img:nth-child(4) {\r\n    align-self: flex-end;\r\n    width: 200px;\r\n    border: 1px solid orange;\r\n    margin-right: 10px;\r\n}\r\n\r\n.contactUs {\r\n    width: 70%;\r\n    height: fit-content;\r\n    background-color: rgb(0, 0, 0, 0.7);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 15px;\r\n}\r\n\r\n.contacts {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.contacts>div>div {\r\n    margin-left: 15px;\r\n}\r\n\r\n.contactUs>div:first-child {\r\n    width: 65%;\r\n    height: 50px;\r\n    background-color: yellow;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    margin-top: 15px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.contacts>div>div:first-child {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 90%;\r\n    margin-top: 10px;\r\n    position: relative;\r\n    top: 15px;\r\n}\r\n\r\n.contacts>div>div>img {\r\n    width: 120px;\r\n}\r\n\r\n.contacts>div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    height: fit-content;\r\n    background-color: gold;\r\n    height: 180px;\r\n    justify-content: space-around;\r\n    border: 10px solid green;\r\n    border-radius: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.contacts>div>div:first-child>div:first-child {\r\n    font-size: 26px;\r\n    font-weight: 800;\r\n}\r\n\r\n.contacts>div>div:nth-child(2) {\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    position: relative;\r\n    bottom: 20px;\r\n    left: 35px;\r\n}\r\n.contacts>div:nth-child(2)>div:first-child>img {\r\n    width: 90px;\r\n}\r\n\r\n@media(min-width: 800px) and (max-width:1200px) {\r\n    .about {\r\n        width: 55%;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 55%;\r\n    }\r\n\r\n    .location {\r\n        width: 55%;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media(min-width: 500px) and (max-width:800px) {\r\n    .about {\r\n        width: 80%;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 80%;\r\n    }\r\n\r\n    .location {\r\n        width: 80%;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 75%;\r\n    }\r\n}\r\n\r\n@media(max-width:500px) {\r\n    .about {\r\n        width: 100%;\r\n        height: 180px;\r\n    }\r\n\r\n    .openingHoursContainer {\r\n        width: 100%;\r\n        height: 300px;\r\n    }\r\n\r\n    .location {\r\n        width: 100%;\r\n        height: 160px;\r\n    }\r\n\r\n    .home {\r\n        width: 90vw;\r\n    }\r\n\r\n    .pic {\r\n        width: 250px;\r\n    }\r\n\r\n    .contacts>div {\r\n        width: 90%;\r\n    }\r\n\r\n    .contacts>div>div:first-child {\r\n        width: 100%;\r\n        position: relative;\r\n        top: 5px;\r\n    }\r\n\r\n    .contacts>div>div:nth-child(2) {\r\n        bottom: 9px;\r\n        left: 5px;\r\n    }\r\n\r\n    .contacts>div>div>img {\r\n        width: 100px;\r\n        position: relative;\r\n        right: 20px;\r\n    }\r\n\r\n    .contacts>div>div:first-child>div:first-child {\r\n        font-size: 20px;\r\n        font-weight: 800;\r\n    }\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _assets_spongeBob_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/spongeBob.jpeg */ "./assets/spongeBob.jpeg");
/* harmony import */ var _assets_Patrick_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/Patrick.jpeg */ "./assets/Patrick.jpeg");
/* harmony import */ var _assets_mrKrabs_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/mrKrabs.png */ "./assets/mrKrabs.png");





const SpongeBob = (function (contactCardContainer, contactCard, ContactName,contactImage ,contactInfo, contactProfession, contactPhoneNumber, contactEmail) {
    contactCardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactCard = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    ContactName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'SpongeBob');
    contactImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_spongeBob_jpeg__WEBPACK_IMPORTED_MODULE_1__ , 'a pic of spongeBob');
    contactInfo = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactProfession = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Chef');
    contactPhoneNumber = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '+73-456-01');
    contactEmail = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'SpongeBob@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName,contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const patrick = (function (contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail){
    contactCardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactCard = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    ContactName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Patrick');
    contactImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_Patrick_jpeg__WEBPACK_IMPORTED_MODULE_2__, 'a pic of patrick star');
    contactInfo = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactProfession = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'customer');
    contactPhoneNumber = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '+73-472-22');
    contactEmail = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'patrickstar@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const mrKrabs = (function (contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail) {
    contactCardContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactCard = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    ContactName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Mr Krabs');
    contactImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_mrKrabs_png__WEBPACK_IMPORTED_MODULE_3__, 'a pic of mr Krabs');
    contactInfo = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('');
    contactProfession = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'CEO');
    contactPhoneNumber = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '+73-271-83');
    contactEmail = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'krabbyMula@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const contact = (function(){
    let contactUs = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('contactUs');
    let ContactUsText = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Contact Us');
    let contactsContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('contacts');
    contactUs.appendChild(ContactUsText);
    contactUs.appendChild(contactsContainer);
    contactsContainer.appendChild(SpongeBob);
    contactsContainer.appendChild(patrick)
    contactsContainer.appendChild(mrKrabs)
    return contactUs
})()

function appendChildren(contactCardContainer,contactCard,ContactName,contactImage,contactInfo,contactProfession,contactPhoneNumber,contactEmail){
    contactCardContainer.appendChild(contactCard);
    contactCardContainer.appendChild(contactInfo);
    contactCard.appendChild(ContactName);
    contactCard.appendChild(contactImage);
    contactInfo.appendChild(contactProfession);
    contactInfo.appendChild(contactPhoneNumber);
    contactInfo.appendChild(contactEmail);
}

/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "factoryBtn": () => (/* binding */ factoryBtn),
/* harmony export */   "factoryDiv": () => (/* binding */ factoryDiv),
/* harmony export */   "factoryImage": () => (/* binding */ factoryImage)
/* harmony export */ });
// general factory function created here
function factoryDiv(className, text) {
    const createtag = document.createElement('div');
    createtag.setAttribute('class', className);
    createtag.textContent = text
    return createtag
}

function factoryImage(src, alt) {
    const createtag = document.createElement('img');
    createtag.setAttribute('src', src)
    createtag.setAttribute('alt', alt)
    return createtag
}

function factoryBtn(className,text){
    const createtag = document.createElement('button');
    createtag.setAttribute('class', className);
    createtag.textContent = text
    return createtag
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


const footer = (function(){
  const footerContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('footer');
  const footer1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Hive mind');
  const footer2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'The odin project');
  const footer3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Hive Restaurant');
  footerContainer.appendChild(footer1);
  footerContainer.appendChild(footer2);
  footerContainer.appendChild(footer3);
  return footerContainer
})()

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");



let header = (function header() {
    const headerDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('header','');
    const button1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryBtn)('homeBtn', 'Home');
    const button2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryBtn)('menuBtn', 'Menu');
    const button3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryBtn)('contactBtn', 'Contact');
    headerDiv.appendChild(button1);
    headerDiv.appendChild(button2);
    headerDiv.appendChild(button3);
    return headerDiv
})()



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _assets_Therestaurant_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/Therestaurant.jpeg */ "./assets/Therestaurant.jpeg");



const homePage = (function(){
    const home = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('home');
    const restaurantImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_Therestaurant_jpeg__WEBPACK_IMPORTED_MODULE_1__,'image of a restaurant');
    const aboutDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('about');
    const remarks = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)("", "Hive's Restaurant is the best in the whole milky way,whenever you come visiting and you need a place to taste the best food, you know where to come!");
    const remarksAuthor = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Patrick Star');
    const openingHoursContainer = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)("openingHoursContainer");
    const hoursText = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Hours');
    const openingHours = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('openingHours');
    const openingHoursDiv1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Sunday: 8am - 8pm');
    const openingHoursDiv2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Monday: 6am - 6pm');
    const openingHoursDiv3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Tuesday: 6am - 6pm');
    const openingHoursDiv4 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Wednesday:6am - 6pm');
    const openingHoursDiv5 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Thursday:6am - 10pm');
    const openingHoursDiv6 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Friday: 6am - 10pm');
    const openingHoursDiv7 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Saturday: 8am - 10pm');
    const location = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('location');
    const locationDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Location');
    const address = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','edinburg,planet v13k,northern hemisphere,milky way.');
    // append the created elements to the parent element
    home.appendChild(restaurantImage);
    home.appendChild(aboutDiv);
    home.appendChild(openingHoursContainer);
    home.appendChild(location);
    aboutDiv.appendChild(remarks);
    aboutDiv.appendChild(remarksAuthor);
    openingHoursContainer.appendChild(hoursText);
    openingHoursContainer.appendChild(openingHours);
    openingHours.appendChild(openingHoursDiv1);
    openingHours.appendChild(openingHoursDiv2);
    openingHours.appendChild(openingHoursDiv3);
    openingHours.appendChild(openingHoursDiv4);
    openingHours.appendChild(openingHoursDiv5);
    openingHours.appendChild(openingHoursDiv6);
    openingHours.appendChild(openingHoursDiv7);
    location.appendChild(locationDiv);
    location.appendChild(address);
    return home;
})()




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuSection": () => (/* binding */ menuSection)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var _assets_cocacola_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/cocacola.jpeg */ "./assets/cocacola.jpeg");
/* harmony import */ var _assets_coffee_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/coffee.jpeg */ "./assets/coffee.jpeg");
/* harmony import */ var _assets_energyDrink_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/energyDrink.jpeg */ "./assets/energyDrink.jpeg");
/* harmony import */ var _assets_orangeDrink_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/orangeDrink.jpeg */ "./assets/orangeDrink.jpeg");
/* harmony import */ var _assets_iceCream_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/iceCream.jpeg */ "./assets/iceCream.jpeg");
/* harmony import */ var _assets_angryBurger_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/angryBurger.jpeg */ "./assets/angryBurger.jpeg");
/* harmony import */ var _assets_happyBurger_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/happyBurger.jpeg */ "./assets/happyBurger.jpeg");
/* harmony import */ var _assets_fries_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/fries.jpeg */ "./assets/fries.jpeg");
/* harmony import */ var _assets_fruit_salad_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/fruit salad.jpeg */ "./assets/fruit salad.jpeg");
/* harmony import */ var _assets_rice_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/rice.jpeg */ "./assets/rice.jpeg");
/* harmony import */ var _assets_spaghetti_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../assets/spaghetti.jpeg */ "./assets/spaghetti.jpeg");
/* harmony import */ var _assets_bread_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../assets/bread.jpeg */ "./assets/bread.jpeg");














const superCoke = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Super coke');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'A galactic drink with insane sugar rush!,A gulp is usually enough');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$1.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_cocacola_jpeg__WEBPACK_IMPORTED_MODULE_1__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage);
    return menuList
})()

const coffee = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Coffee');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Programmers favourites!, best taken early in the morning.');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$2.50');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_coffee_jpeg__WEBPACK_IMPORTED_MODULE_2__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()

const energyDrink = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Energy Drink');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Are you feeling tired lately?,a medium sized cup increases your energy by 240%!');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$3.50');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_energyDrink_jpeg__WEBPACK_IMPORTED_MODULE_3__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const orangeDrink = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'orange Drink');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Designed to quench your thirst,100% natural also! ');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$3.00');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_orangeDrink_jpeg__WEBPACK_IMPORTED_MODULE_4__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const iceCream = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Ice cream');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Need to run an errand and distract your kids?Buy them Hives ice cream!');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$0.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_iceCream_jpeg__WEBPACK_IMPORTED_MODULE_5__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const angryBurger = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Angry Burger');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Super mean burger,every bite changes your mood');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$7.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_angryBurger_jpeg__WEBPACK_IMPORTED_MODULE_6__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const happyBurger = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Happy Burger');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Having a bad day?,This would make you happier just a little bit');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$7.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_happyBurger_jpeg__WEBPACK_IMPORTED_MODULE_7__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const fries = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Fries');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Craving for a crunchy meal,This is the perfect deal.');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$10.00');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_fries_jpeg__WEBPACK_IMPORTED_MODULE_8__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const fruitSalad = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Friut Salad');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'All natural,packed with enormous amount of vitamins.');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$9.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_fruit_salad_jpeg__WEBPACK_IMPORTED_MODULE_9__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const rice = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Rice');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Our most ordered food.Its no secret this would fill your tummy!');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$6.99');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_rice_jpeg__WEBPACK_IMPORTED_MODULE_10__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const spaghetti = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Spaghetti');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'A spicy meal,very yummy,very tasty.');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$8.00');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_spaghetti_jpeg__WEBPACK_IMPORTED_MODULE_11__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const bread = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuList');
    menuName = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'Bread');
    menuDescription = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', 'A loaf of bread,soft and tender,best taken with your favourite spread');
    menuPrice = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('', '$4.00');
    menuImage = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryImage)(_assets_bread_jpeg__WEBPACK_IMPORTED_MODULE_12__, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()

const menuSection = (function(){
    const menu = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menu');
    const menuDiv = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('','Menu');
    const food = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('beverages');
    const menuSection1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuSection','Beverages');
    menu.appendChild(menuDiv);
    menu.appendChild(food);
    food.appendChild(menuSection1);
    //append individual food section
    food.appendChild(superCoke);
    food.appendChild(coffee)
    food.appendChild(energyDrink)
    food.appendChild(orangeDrink)
    const menuSection2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuSection', 'Sides');
    food.appendChild(menuSection2)
    food.appendChild(iceCream)
    food.appendChild(angryBurger)
    food.appendChild(happyBurger)
    food.appendChild(fruitSalad)
    const menuSection3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryDiv)('menuSection', 'Main');
    food.appendChild(menuSection3)
    food.appendChild(fries)
    food.appendChild(rice)
    food.appendChild(spaghetti)
    food.appendChild(bread)

    return menu
})()
function appendChildren(menuList,menuName,menuDescription,menuPrice,menuImage){
    menuList.appendChild(menuName);
    menuList.appendChild(menuDescription);
    menuList.appendChild(menuPrice);
    menuList.appendChild(menuImage);
}


/***/ }),

/***/ "./assets/Patrick.jpeg":
/*!*****************************!*\
  !*** ./assets/Patrick.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1749c9f2d1466fe84c4.jpeg";

/***/ }),

/***/ "./assets/Therestaurant.jpeg":
/*!***********************************!*\
  !*** ./assets/Therestaurant.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc40294d1de81886912d.jpeg";

/***/ }),

/***/ "./assets/angryBurger.jpeg":
/*!*********************************!*\
  !*** ./assets/angryBurger.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd338125d220854e49bb.jpeg";

/***/ }),

/***/ "./assets/background.jpeg":
/*!********************************!*\
  !*** ./assets/background.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84ef8761e16be53321ed.jpeg";

/***/ }),

/***/ "./assets/bread.jpeg":
/*!***************************!*\
  !*** ./assets/bread.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "498c1f1bda029bab8f7b.jpeg";

/***/ }),

/***/ "./assets/cocacola.jpeg":
/*!******************************!*\
  !*** ./assets/cocacola.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb0bf317165b8afa5ce3.jpeg";

/***/ }),

/***/ "./assets/coffee.jpeg":
/*!****************************!*\
  !*** ./assets/coffee.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6018f8d0ba08e1c83fce.jpeg";

/***/ }),

/***/ "./assets/energyDrink.jpeg":
/*!*********************************!*\
  !*** ./assets/energyDrink.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ab128b3b2c1fe552d64.jpeg";

/***/ }),

/***/ "./assets/fries.jpeg":
/*!***************************!*\
  !*** ./assets/fries.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b02a347c3ba46fc571b6.jpeg";

/***/ }),

/***/ "./assets/fruit salad.jpeg":
/*!*********************************!*\
  !*** ./assets/fruit salad.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1db674b5597a9791a5d.jpeg";

/***/ }),

/***/ "./assets/happyBurger.jpeg":
/*!*********************************!*\
  !*** ./assets/happyBurger.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c77b94f58469891b62b5.jpeg";

/***/ }),

/***/ "./assets/iceCream.jpeg":
/*!******************************!*\
  !*** ./assets/iceCream.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b95c4195f3c5bf3730b.jpeg";

/***/ }),

/***/ "./assets/mrKrabs.png":
/*!****************************!*\
  !*** ./assets/mrKrabs.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e8f14d65429193ed147.png";

/***/ }),

/***/ "./assets/orangeDrink.jpeg":
/*!*********************************!*\
  !*** ./assets/orangeDrink.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0f55906463afad6cb05.jpeg";

/***/ }),

/***/ "./assets/rice.jpeg":
/*!**************************!*\
  !*** ./assets/rice.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c9d604dccb34d45a5af.jpeg";

/***/ }),

/***/ "./assets/spaghetti.jpeg":
/*!*******************************!*\
  !*** ./assets/spaghetti.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de434e31b03474880962.jpeg";

/***/ }),

/***/ "./assets/spongeBob.jpeg":
/*!*******************************!*\
  !*** ./assets/spongeBob.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30b8e264f2650a6e683c.jpeg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");







let renderPage = (function(){
  let content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);
  content.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header);
  content.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__.homePage);
  // homePage.remove();
  // content.appendChild(menuSection);
  // menuSection.remove();
  // content.appendChild(contact);
  content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_5__.footer);
})()

const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const contactBtn = document.querySelector('.contactBtn');
const content = document.querySelector('#content')
homeBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header)
  content.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__.homePage);
  content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_5__.footer);
})
menuBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header)
  content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_3__.menuSection);
  content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_5__.footer);
})
contactBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.header)
  content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact);
  content.appendChild(_footer__WEBPACK_IMPORTED_MODULE_5__.footer);
})

function resetDom(){
  _header__WEBPACK_IMPORTED_MODULE_1__.header.remove();
  _home__WEBPACK_IMPORTED_MODULE_2__.homePage.remove();
  _menu__WEBPACK_IMPORTED_MODULE_3__.menuSection.remove();
  _contact_js__WEBPACK_IMPORTED_MODULE_4__.contact.remove()
  _footer__WEBPACK_IMPORTED_MODULE_5__.footer.remove()
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxV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Qzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQjtBQUNhO0FBQ0Q7QUFDRztBQUNFO0FBQ1A7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQU07QUFDNUIsc0JBQXNCLDJDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFNO0FBQzVCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQ0FBTTtBQUM1QixzQkFBc0IsMkNBQVE7QUFDOUIsc0JBQXNCLDJDQUFNO0FBQzVCLENBQUM7QUFDRDtBQUNBO0FBQ0Esc0JBQXNCLDJDQUFNO0FBQzVCLHNCQUFzQiw4Q0FBVztBQUNqQyxzQkFBc0IsMkNBQU07QUFDNUIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQU07QUFDNUIsc0JBQXNCLGdEQUFPO0FBQzdCLHNCQUFzQiwyQ0FBTTtBQUM1QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsa0RBQWE7QUFDZixFQUFFLGtEQUFlO0FBQ2pCLEVBQUUscURBQWtCO0FBQ3BCLEVBQUUsdURBQWM7QUFDaEIsRUFBRSxrREFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvYXNzZXRzL2JhY2tncm91bmQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyPmJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNzB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxMSwgMTEsIDAuNyk7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgY29sb3I6IHJnYig4LCA3LCA3KTtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSA+IGltZ3tcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0PmRpdiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQ+ZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5vcGVuaW5nSG91cnNDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxufVxcclxcblxcclxcbi5vcGVuaW5nSG91cnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcGVuaW5nSG91cnNDb250YWluZXI+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgaGVpZ2h0OiAxMzBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbj5kaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uPmRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDcwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMSwgMTEsIDExLCAwLjcpO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDgsIDcsIDcpO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51PmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudVNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51TGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlcjogMTVweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51TGlzdD5kaXYge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmltZzpudGgtY2hpbGQoNCkge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RVcyB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHM+ZGl2PmRpdiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdFVzPmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHM+ZGl2PmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cz5kaXY+ZGl2PmltZyB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzPmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBib3JkZXI6IDEwcHggc29saWQgZ3JlZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cz5kaXY+ZGl2OmZpcnN0LWNoaWxkPmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzPmRpdj5kaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgbGVmdDogMzVweDtcXHJcXG59XFxyXFxuLmNvbnRhY3RzPmRpdjpudGgtY2hpbGQoMik+ZGl2OmZpcnN0LWNoaWxkPmltZyB7XFxyXFxuICAgIHdpZHRoOiA5MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6MTIwMHB4KSB7XFxyXFxuICAgIC5hYm91dCB7XFxyXFxuICAgICAgICB3aWR0aDogNTUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vcGVuaW5nSG91cnNDb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDU1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9jYXRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDU1JTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XFxyXFxuICAgIC5hYm91dCB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vcGVuaW5nSG91cnNDb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9jYXRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDo1MDBweCkge1xcclxcbiAgICAuYWJvdXQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vcGVuaW5nSG91cnNDb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2NhdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhvbWUge1xcclxcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBpYyB7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXY+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgdG9wOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdj5kaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIGJvdHRvbTogOXB4O1xcclxcbiAgICAgICAgbGVmdDogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXY+ZGl2PmltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICByaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2PmRpdjpmaXJzdC1jaGlsZD5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbURBQTBDO0lBQzFDLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lB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Q0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtJQUNaOztJQUVBO1FBQ0ksV0FBVztRQUNYLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi9hc3NldHMvYmFja2dyb3VuZC5qcGVnXFxcIik7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXI+YnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDExLCAxMSwgMC43KTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDgsIDcsIDcpO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ob21lID4gaW1ne1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQ+ZGl2IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dD5kaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5pbmdIb3Vyc0NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5pbmdIb3VycyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5pbmdIb3Vyc0NvbnRhaW5lcj5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24ge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uPmRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24+ZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNzB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCAxMSwgMTEsIDAuNyk7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoOCwgNywgNyk7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnU+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51U2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVMaXN0PmRpdiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpc3Q+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpc3Q+ZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpc3Q+ZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUxpc3Q+aW1nOm50aC1jaGlsZCg0KSB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdFVzIHtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cz5kaXY+ZGl2IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0VXM+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cz5kaXY+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzPmRpdj5kaXY+aW1nIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHM+ZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzPmRpdj5kaXY6Zmlyc3QtY2hpbGQ+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHM+ZGl2PmRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm90dG9tOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAzNXB4O1xcclxcbn1cXHJcXG4uY29udGFjdHM+ZGl2Om50aC1jaGlsZCgyKT5kaXY6Zmlyc3QtY2hpbGQ+aW1nIHtcXHJcXG4gICAgd2lkdGg6IDkwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDoxMjAwcHgpIHtcXHJcXG4gICAgLmFib3V0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9wZW5pbmdIb3Vyc0NvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogNTUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2NhdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogNTUlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcXHJcXG4gICAgLmFib3V0IHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9wZW5pbmdIb3Vyc0NvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2NhdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOjUwMHB4KSB7XFxyXFxuICAgIC5hYm91dCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm9wZW5pbmdIb3Vyc0NvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxvY2F0aW9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaG9tZSB7XFxyXFxuICAgICAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGljIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdj5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICB0b3A6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHM+ZGl2PmRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgYm90dG9tOiA5cHg7XFxyXFxuICAgICAgICBsZWZ0OiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzPmRpdj5kaXY+aW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cz5kaXY+ZGl2OmZpcnN0LWNoaWxkPmRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5SW1hZ2UgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcbmltcG9ydCBjaGVmSW1nIGZyb20gJy9hc3NldHMvc3BvbmdlQm9iLmpwZWcnXHJcbmltcG9ydCBjdXN0b21lckltZyBmcm9tICcvYXNzZXRzL1BhdHJpY2suanBlZydcclxuaW1wb3J0IENlb0ltZyBmcm9tICcvYXNzZXRzL21yS3JhYnMucG5nJ1xyXG5jb25zdCBTcG9uZ2VCb2IgPSAoZnVuY3Rpb24gKGNvbnRhY3RDYXJkQ29udGFpbmVyLCBjb250YWN0Q2FyZCwgQ29udGFjdE5hbWUsY29udGFjdEltYWdlICxjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKSB7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lciA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgY29udGFjdENhcmQgPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIENvbnRhY3ROYW1lID0gZmFjdG9yeURpdignJywgJ1Nwb25nZUJvYicpO1xyXG4gICAgY29udGFjdEltYWdlID0gZmFjdG9yeUltYWdlKGNoZWZJbWcgLCAnYSBwaWMgb2Ygc3BvbmdlQm9iJyk7XHJcbiAgICBjb250YWN0SW5mbyA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgY29udGFjdFByb2Zlc3Npb24gPSBmYWN0b3J5RGl2KCcnLCAnQ2hlZicpO1xyXG4gICAgY29udGFjdFBob25lTnVtYmVyID0gZmFjdG9yeURpdignJywgJys3My00NTYtMDEnKTtcclxuICAgIGNvbnRhY3RFbWFpbCA9IGZhY3RvcnlEaXYoJycsICdTcG9uZ2VCb2JAbWlsa3kuaW8nKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhY3RDYXJkQ29udGFpbmVyLCBjb250YWN0Q2FyZCwgQ29udGFjdE5hbWUsY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKTtcclxuICAgIHJldHVybiBjb250YWN0Q2FyZENvbnRhaW5lclxyXG59KSgpXHJcblxyXG5jb25zdCBwYXRyaWNrID0gKGZ1bmN0aW9uIChjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLCBjb250YWN0SW1hZ2UsIGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpe1xyXG4gICAgY29udGFjdENhcmRDb250YWluZXIgPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIGNvbnRhY3RDYXJkID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBDb250YWN0TmFtZSA9IGZhY3RvcnlEaXYoJycsICdQYXRyaWNrJyk7XHJcbiAgICBjb250YWN0SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoY3VzdG9tZXJJbWcsICdhIHBpYyBvZiBwYXRyaWNrIHN0YXInKTtcclxuICAgIGNvbnRhY3RJbmZvID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0UHJvZmVzc2lvbiA9IGZhY3RvcnlEaXYoJycsICdjdXN0b21lcicpO1xyXG4gICAgY29udGFjdFBob25lTnVtYmVyID0gZmFjdG9yeURpdignJywgJys3My00NzItMjInKTtcclxuICAgIGNvbnRhY3RFbWFpbCA9IGZhY3RvcnlEaXYoJycsICdwYXRyaWNrc3RhckBtaWxreS5pbycpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4oY29udGFjdENhcmRDb250YWluZXIsIGNvbnRhY3RDYXJkLCBDb250YWN0TmFtZSwgY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKTtcclxuICAgIHJldHVybiBjb250YWN0Q2FyZENvbnRhaW5lclxyXG59KSgpXHJcblxyXG5jb25zdCBtcktyYWJzID0gKGZ1bmN0aW9uIChjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLCBjb250YWN0SW1hZ2UsIGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpIHtcclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0Q2FyZCA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgQ29udGFjdE5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnTXIgS3JhYnMnKTtcclxuICAgIGNvbnRhY3RJbWFnZSA9IGZhY3RvcnlJbWFnZShDZW9JbWcsICdhIHBpYyBvZiBtciBLcmFicycpO1xyXG4gICAgY29udGFjdEluZm8gPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIGNvbnRhY3RQcm9mZXNzaW9uID0gZmFjdG9yeURpdignJywgJ0NFTycpO1xyXG4gICAgY29udGFjdFBob25lTnVtYmVyID0gZmFjdG9yeURpdignJywgJys3My0yNzEtODMnKTtcclxuICAgIGNvbnRhY3RFbWFpbCA9IGZhY3RvcnlEaXYoJycsICdrcmFiYnlNdWxhQG1pbGt5LmlvJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLCBjb250YWN0SW1hZ2UsIGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpO1xyXG4gICAgcmV0dXJuIGNvbnRhY3RDYXJkQ29udGFpbmVyXHJcbn0pKClcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY29udGFjdFVzID0gZmFjdG9yeURpdignY29udGFjdFVzJyk7XHJcbiAgICBsZXQgQ29udGFjdFVzVGV4dCA9IGZhY3RvcnlEaXYoJycsJ0NvbnRhY3QgVXMnKTtcclxuICAgIGxldCBjb250YWN0c0NvbnRhaW5lciA9IGZhY3RvcnlEaXYoJ2NvbnRhY3RzJyk7XHJcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoQ29udGFjdFVzVGV4dCk7XHJcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoY29udGFjdHNDb250YWluZXIpO1xyXG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoU3BvbmdlQm9iKTtcclxuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhdHJpY2spXHJcbiAgICBjb250YWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChtcktyYWJzKVxyXG4gICAgcmV0dXJuIGNvbnRhY3RVc1xyXG59KSgpXHJcblxyXG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihjb250YWN0Q2FyZENvbnRhaW5lcixjb250YWN0Q2FyZCxDb250YWN0TmFtZSxjb250YWN0SW1hZ2UsY29udGFjdEluZm8sY29udGFjdFByb2Zlc3Npb24sY29udGFjdFBob25lTnVtYmVyLGNvbnRhY3RFbWFpbCl7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q2FyZCk7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XHJcbiAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChDb250YWN0TmFtZSk7XHJcbiAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0SW1hZ2UpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFByb2Zlc3Npb24pO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKTtcclxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XHJcbn0iLCIvLyBnZW5lcmFsIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlZCBoZXJlXHJcbmZ1bmN0aW9uIGZhY3RvcnlEaXYoY2xhc3NOYW1lLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcclxuICAgIGNyZWF0ZXRhZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeUltYWdlKHNyYywgYWx0KSB7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYylcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdClcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZnVuY3Rpb24gZmFjdG9yeUJ0bihjbGFzc05hbWUsdGV4dCl7XHJcbiAgICBjb25zdCBjcmVhdGV0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNyZWF0ZXRhZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcclxuICAgIGNyZWF0ZXRhZy50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHJldHVybiBjcmVhdGV0YWdcclxufVxyXG5cclxuZXhwb3J0e2ZhY3RvcnlEaXYsZmFjdG9yeUltYWdlLGZhY3RvcnlCdG59IiwiaW1wb3J0IHsgZmFjdG9yeURpdiB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXIgPSAoZnVuY3Rpb24oKXtcclxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBmYWN0b3J5RGl2KCdmb290ZXInKTtcclxuICBjb25zdCBmb290ZXIxID0gZmFjdG9yeURpdignJywnSGl2ZSBtaW5kJyk7XHJcbiAgY29uc3QgZm9vdGVyMiA9IGZhY3RvcnlEaXYoJycsICdUaGUgb2RpbiBwcm9qZWN0Jyk7XHJcbiAgY29uc3QgZm9vdGVyMyA9IGZhY3RvcnlEaXYoJycsICdIaXZlIFJlc3RhdXJhbnQnKTtcclxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyMSk7XHJcbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlcjIpO1xyXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIzKTtcclxuICByZXR1cm4gZm9vdGVyQ29udGFpbmVyXHJcbn0pKCkiLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5QnRuIH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGxldCBoZWFkZXIgPSAoZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZmFjdG9yeURpdignaGVhZGVyJywnJyk7XHJcbiAgICBjb25zdCBidXR0b24xID0gZmFjdG9yeUJ0bignaG9tZUJ0bicsICdIb21lJyk7XHJcbiAgICBjb25zdCBidXR0b24yID0gZmFjdG9yeUJ0bignbWVudUJ0bicsICdNZW51Jyk7XHJcbiAgICBjb25zdCBidXR0b24zID0gZmFjdG9yeUJ0bignY29udGFjdEJ0bicsICdDb250YWN0Jyk7XHJcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMSk7XHJcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XHJcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XHJcbiAgICByZXR1cm4gaGVhZGVyRGl2XHJcbn0pKClcclxuXHJcbiIsImltcG9ydCB7IGZhY3RvcnlEaXYgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IGZhY3RvcnlJbWFnZSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcclxuaW1wb3J0IHRoZVJlc3RhdXJhbnQgZnJvbSBcIi9hc3NldHMvVGhlcmVzdGF1cmFudC5qcGVnXCJcclxuZXhwb3J0IGNvbnN0IGhvbWVQYWdlID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBob21lID0gZmFjdG9yeURpdignaG9tZScpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZmFjdG9yeUltYWdlKHRoZVJlc3RhdXJhbnQsJ2ltYWdlIG9mIGEgcmVzdGF1cmFudCcpO1xyXG4gICAgY29uc3QgYWJvdXREaXYgPSBmYWN0b3J5RGl2KCdhYm91dCcpO1xyXG4gICAgY29uc3QgcmVtYXJrcyA9IGZhY3RvcnlEaXYoXCJcIiwgXCJIaXZlJ3MgUmVzdGF1cmFudCBpcyB0aGUgYmVzdCBpbiB0aGUgd2hvbGUgbWlsa3kgd2F5LHdoZW5ldmVyIHlvdSBjb21lIHZpc2l0aW5nIGFuZCB5b3UgbmVlZCBhIHBsYWNlIHRvIHRhc3RlIHRoZSBiZXN0IGZvb2QsIHlvdSBrbm93IHdoZXJlIHRvIGNvbWUhXCIpO1xyXG4gICAgY29uc3QgcmVtYXJrc0F1dGhvciA9IGZhY3RvcnlEaXYoJycsJ1BhdHJpY2sgU3RhcicpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzQ29udGFpbmVyID0gZmFjdG9yeURpdihcIm9wZW5pbmdIb3Vyc0NvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGhvdXJzVGV4dCA9IGZhY3RvcnlEaXYoJycsJ0hvdXJzJyk7XHJcbiAgICBjb25zdCBvcGVuaW5nSG91cnMgPSBmYWN0b3J5RGl2KCdvcGVuaW5nSG91cnMnKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0RpdjEgPSBmYWN0b3J5RGl2KCcnLCdTdW5kYXk6IDhhbSAtIDhwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2MiA9IGZhY3RvcnlEaXYoJycsICdNb25kYXk6IDZhbSAtIDZwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2MyA9IGZhY3RvcnlEaXYoJycsICdUdWVzZGF5OiA2YW0gLSA2cG0nKTtcclxuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc0RpdjQgPSBmYWN0b3J5RGl2KCcnLCAnV2VkbmVzZGF5OjZhbSAtIDZwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2NSA9IGZhY3RvcnlEaXYoJycsICdUaHVyc2RheTo2YW0gLSAxMHBtJyk7XHJcbiAgICBjb25zdCBvcGVuaW5nSG91cnNEaXY2ID0gZmFjdG9yeURpdignJywgJ0ZyaWRheTogNmFtIC0gMTBwbScpO1xyXG4gICAgY29uc3Qgb3BlbmluZ0hvdXJzRGl2NyA9IGZhY3RvcnlEaXYoJycsICdTYXR1cmRheTogOGFtIC0gMTBwbScpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBmYWN0b3J5RGl2KCdsb2NhdGlvbicpO1xyXG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBmYWN0b3J5RGl2KCcnLCdMb2NhdGlvbicpO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGZhY3RvcnlEaXYoJycsJ2VkaW5idXJnLHBsYW5ldCB2MTNrLG5vcnRoZXJuIGhlbWlzcGhlcmUsbWlsa3kgd2F5LicpO1xyXG4gICAgLy8gYXBwZW5kIHRoZSBjcmVhdGVkIGVsZW1lbnRzIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChhYm91dERpdik7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0NvbnRhaW5lcik7XHJcbiAgICBob21lLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKHJlbWFya3MpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQocmVtYXJrc0F1dGhvcik7XHJcbiAgICBvcGVuaW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNUZXh0KTtcclxuICAgIG9wZW5pbmdIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnMpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjEpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjIpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjMpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjQpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjUpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjYpO1xyXG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vyc0RpdjcpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICByZXR1cm4gaG9tZTtcclxufSkoKVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGZhY3RvcnlEaXYgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IGZhY3RvcnlJbWFnZSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcclxuaW1wb3J0IGNvY2Fjb2xhIGZyb20gJy9hc3NldHMvY29jYWNvbGEuanBlZyc7XHJcbmltcG9ydCBjb2ZmZWVJbWcgZnJvbSAnL2Fzc2V0cy9jb2ZmZWUuanBlZyc7XHJcbmltcG9ydCBlbmVyZ3lEcmlua0ltZyBmcm9tICcvYXNzZXRzL2VuZXJneURyaW5rLmpwZWcnXHJcbmltcG9ydCBvcmFuZ2VEcmlua0ltZyBmcm9tICcvYXNzZXRzL29yYW5nZURyaW5rLmpwZWcnXHJcbmltcG9ydCBpY2VDcmVhbUltZyBmcm9tICcvYXNzZXRzL2ljZUNyZWFtLmpwZWcnXHJcbmltcG9ydCBhbmdyeUJ1cmdlckltZyBmcm9tICcvYXNzZXRzL2FuZ3J5QnVyZ2VyLmpwZWcnXHJcbmltcG9ydCBoYXBweUJ1cmdlckltZyBmcm9tICcvYXNzZXRzL2hhcHB5QnVyZ2VyLmpwZWcnXHJcbmltcG9ydCBmcmllc0ltZyBmcm9tICcvYXNzZXRzL2ZyaWVzLmpwZWcnXHJcbmltcG9ydCBmcnVpdFNhbGFkSW1nIGZyb20gJy9hc3NldHMvZnJ1aXQgc2FsYWQuanBlZydcclxuaW1wb3J0IHJpY2VJbWcgZnJvbSAnL2Fzc2V0cy9yaWNlLmpwZWcnXHJcbmltcG9ydCBzcGFnaGV0dGlJbWcgZnJvbSAnL2Fzc2V0cy9zcGFnaGV0dGkuanBlZydcclxuaW1wb3J0IGJyZWFkSW1nIGZyb20gJy9hc3NldHMvYnJlYWQuanBlZydcclxuY29uc3Qgc3VwZXJDb2tlID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ1N1cGVyIGNva2UnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdBIGdhbGFjdGljIGRyaW5rIHdpdGggaW5zYW5lIHN1Z2FyIHJ1c2ghLEEgZ3VscCBpcyB1c3VhbGx5IGVub3VnaCcpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQxLjk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoY29jYWNvbGEsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKTtcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcblxyXG5jb25zdCBjb2ZmZWUgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnQ29mZmVlJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnUHJvZ3JhbW1lcnMgZmF2b3VyaXRlcyEsIGJlc3QgdGFrZW4gZWFybHkgaW4gdGhlIG1vcm5pbmcuJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDIuNTAnKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShjb2ZmZWVJbWcsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuXHJcbmNvbnN0IGVuZXJneURyaW5rID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0VuZXJneSBEcmluaycpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0FyZSB5b3UgZmVlbGluZyB0aXJlZCBsYXRlbHk/LGEgbWVkaXVtIHNpemVkIGN1cCBpbmNyZWFzZXMgeW91ciBlbmVyZ3kgYnkgMjQwJSEnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMy41MCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKGVuZXJneURyaW5rSW1nLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IG9yYW5nZURyaW5rID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ29yYW5nZSBEcmluaycpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0Rlc2lnbmVkIHRvIHF1ZW5jaCB5b3VyIHRoaXJzdCwxMDAlIG5hdHVyYWwgYWxzbyEgJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDMuMDAnKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShvcmFuZ2VEcmlua0ltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBpY2VDcmVhbSA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdJY2UgY3JlYW0nKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdOZWVkIHRvIHJ1biBhbiBlcnJhbmQgYW5kIGRpc3RyYWN0IHlvdXIga2lkcz9CdXkgdGhlbSBIaXZlcyBpY2UgY3JlYW0hJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDAuOTknKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShpY2VDcmVhbUltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBhbmdyeUJ1cmdlciA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdBbmdyeSBCdXJnZXInKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdTdXBlciBtZWFuIGJ1cmdlcixldmVyeSBiaXRlIGNoYW5nZXMgeW91ciBtb29kJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDcuOTknKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShhbmdyeUJ1cmdlckltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBoYXBweUJ1cmdlciA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdIYXBweSBCdXJnZXInKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdIYXZpbmcgYSBiYWQgZGF5PyxUaGlzIHdvdWxkIG1ha2UgeW91IGhhcHBpZXIganVzdCBhIGxpdHRsZSBiaXQnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckNy45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKGhhcHB5QnVyZ2VySW1nLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IGZyaWVzID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0ZyaWVzJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnQ3JhdmluZyBmb3IgYSBjcnVuY2h5IG1lYWwsVGhpcyBpcyB0aGUgcGVyZmVjdCBkZWFsLicpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQxMC4wMCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKGZyaWVzSW1nLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IGZydWl0U2FsYWQgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnRnJpdXQgU2FsYWQnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdBbGwgbmF0dXJhbCxwYWNrZWQgd2l0aCBlbm9ybW91cyBhbW91bnQgb2Ygdml0YW1pbnMuJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDkuOTknKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShmcnVpdFNhbGFkSW1nLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcbmNvbnN0IHJpY2UgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnUmljZScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ091ciBtb3N0IG9yZGVyZWQgZm9vZC5JdHMgbm8gc2VjcmV0IHRoaXMgd291bGQgZmlsbCB5b3VyIHR1bW15IScpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ2Ljk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UocmljZUltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBzcGFnaGV0dGkgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnU3BhZ2hldHRpJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnQSBzcGljeSBtZWFsLHZlcnkgeXVtbXksdmVyeSB0YXN0eS4nKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckOC4wMCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKHNwYWdoZXR0aUltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBicmVhZCA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdCcmVhZCcpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0EgbG9hZiBvZiBicmVhZCxzb2Z0IGFuZCB0ZW5kZXIsYmVzdCB0YWtlbiB3aXRoIHlvdXIgZmF2b3VyaXRlIHNwcmVhZCcpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ0LjAwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoYnJlYWRJbWcsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuXHJcbmV4cG9ydCBjb25zdCBtZW51U2VjdGlvbiA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWVudSA9IGZhY3RvcnlEaXYoJ21lbnUnKTtcclxuICAgIGNvbnN0IG1lbnVEaXYgPSBmYWN0b3J5RGl2KCcnLCdNZW51Jyk7XHJcbiAgICBjb25zdCBmb29kID0gZmFjdG9yeURpdignYmV2ZXJhZ2VzJyk7XHJcbiAgICBjb25zdCBtZW51U2VjdGlvbjEgPSBmYWN0b3J5RGl2KCdtZW51U2VjdGlvbicsJ0JldmVyYWdlcycpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZm9vZCk7XHJcbiAgICBmb29kLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uMSk7XHJcbiAgICAvL2FwcGVuZCBpbmRpdmlkdWFsIGZvb2Qgc2VjdGlvblxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChzdXBlckNva2UpO1xyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChjb2ZmZWUpXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGVuZXJneURyaW5rKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChvcmFuZ2VEcmluaylcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uMiA9IGZhY3RvcnlEaXYoJ21lbnVTZWN0aW9uJywgJ1NpZGVzJyk7XHJcbiAgICBmb29kLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uMilcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoaWNlQ3JlYW0pXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGFuZ3J5QnVyZ2VyKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChoYXBweUJ1cmdlcilcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoZnJ1aXRTYWxhZClcclxuICAgIGNvbnN0IG1lbnVTZWN0aW9uMyA9IGZhY3RvcnlEaXYoJ21lbnVTZWN0aW9uJywgJ01haW4nKTtcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24zKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChmcmllcylcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQocmljZSlcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoc3BhZ2hldHRpKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChicmVhZClcclxuXHJcbiAgICByZXR1cm4gbWVudVxyXG59KSgpXHJcbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LG1lbnVOYW1lLG1lbnVEZXNjcmlwdGlvbixtZW51UHJpY2UsbWVudUltYWdlKXtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51UHJpY2UpO1xyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gJy4vaG9tZSdcclxuaW1wb3J0IHsgbWVudVNlY3Rpb24gfSBmcm9tICcuL21lbnUnXHJcbmltcG9ydCB7IGNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnXHJcbmltcG9ydCB7Zm9vdGVyfSBmcm9tICcuL2Zvb3RlcidcclxubGV0IHJlbmRlclBhZ2UgPSAoZnVuY3Rpb24oKXtcclxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lUGFnZSk7XHJcbiAgLy8gaG9tZVBhZ2UucmVtb3ZlKCk7XHJcbiAgLy8gY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcbiAgLy8gbWVudVNlY3Rpb24ucmVtb3ZlKCk7XHJcbiAgLy8gY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn0pKClcclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZUJ0bicpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKTtcclxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0QnRuJyk7XHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICByZXNldERvbSgpXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lUGFnZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59KVxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgcmVzZXREb20oKVxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufSlcclxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gIHJlc2V0RG9tKClcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIHJlc2V0RG9tKCl7XHJcbiAgaGVhZGVyLnJlbW92ZSgpO1xyXG4gIGhvbWVQYWdlLnJlbW92ZSgpO1xyXG4gIG1lbnVTZWN0aW9uLnJlbW92ZSgpO1xyXG4gIGNvbnRhY3QucmVtb3ZlKClcclxuICBmb290ZXIucmVtb3ZlKClcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=