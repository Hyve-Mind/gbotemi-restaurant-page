/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./assets/Patrick.jpeg":
/*!*****************************!*\
  !*** ./assets/Patrick.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1749c9f2d1466fe84c4.jpeg";

/***/ }),

/***/ "./assets/mrKrabs.png":
/*!****************************!*\
  !*** ./assets/mrKrabs.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e8f14d65429193ed147.png";

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDRTtBQUNHO0FBQ0U7QUFDTjtBQUN4QztBQUNBLDJCQUEyQixvREFBVTtBQUNyQyxrQkFBa0Isb0RBQVU7QUFDNUIsa0JBQWtCLG9EQUFVO0FBQzVCLG1CQUFtQixzREFBWSxDQUFDLG1EQUFPO0FBQ3ZDLGtCQUFrQixvREFBVTtBQUM1Qix3QkFBd0Isb0RBQVU7QUFDbEMseUJBQXlCLG9EQUFVO0FBQ25DLG1CQUFtQixvREFBVTtBQUM3QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQVU7QUFDckMsa0JBQWtCLG9EQUFVO0FBQzVCLGtCQUFrQixvREFBVTtBQUM1QixtQkFBbUIsc0RBQVksQ0FBQyxpREFBVztBQUMzQyxrQkFBa0Isb0RBQVU7QUFDNUIsd0JBQXdCLG9EQUFVO0FBQ2xDLHlCQUF5QixvREFBVTtBQUNuQyxtQkFBbUIsb0RBQVU7QUFDN0I7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFVO0FBQ3JDLGtCQUFrQixvREFBVTtBQUM1QixrQkFBa0Isb0RBQVU7QUFDNUIsbUJBQW1CLHNEQUFZLENBQUMsZ0RBQU07QUFDdEMsa0JBQWtCLG9EQUFVO0FBQzVCLHdCQUF3QixvREFBVTtBQUNsQyx5QkFBeUIsb0RBQVU7QUFDbkMsbUJBQW1CLG9EQUFVO0FBQzdCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQLG9CQUFvQixvREFBVTtBQUM5Qix3QkFBd0Isb0RBQVU7QUFDbEMsNEJBQTRCLG9EQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYWwgZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVkIGhlcmVcclxuZnVuY3Rpb24gZmFjdG9yeURpdihjbGFzc05hbWUsIHRleHQpIHtcclxuICAgIGNvbnN0IGNyZWF0ZXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY3JlYXRldGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xyXG4gICAgY3JlYXRldGFnLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgcmV0dXJuIGNyZWF0ZXRhZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYWN0b3J5SW1hZ2Uoc3JjLCBhbHQpIHtcclxuICAgIGNvbnN0IGNyZWF0ZXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY3JlYXRldGFnLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKVxyXG4gICAgY3JlYXRldGFnLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KVxyXG4gICAgcmV0dXJuIGNyZWF0ZXRhZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYWN0b3J5QnRuKGNsYXNzTmFtZSx0ZXh0KXtcclxuICAgIGNvbnN0IGNyZWF0ZXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY3JlYXRldGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xyXG4gICAgY3JlYXRldGFnLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgcmV0dXJuIGNyZWF0ZXRhZ1xyXG59XHJcblxyXG5leHBvcnR7ZmFjdG9yeURpdixmYWN0b3J5SW1hZ2UsZmFjdG9yeUJ0bn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5SW1hZ2UgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcbmltcG9ydCBjaGVmSW1nIGZyb20gJy9hc3NldHMvc3BvbmdlQm9iLmpwZWcnXHJcbmltcG9ydCBjdXN0b21lckltZyBmcm9tICcvYXNzZXRzL1BhdHJpY2suanBlZydcclxuaW1wb3J0IENlb0ltZyBmcm9tICcvYXNzZXRzL21yS3JhYnMucG5nJ1xyXG5jb25zdCBTcG9uZ2VCb2IgPSAoZnVuY3Rpb24gKGNvbnRhY3RDYXJkQ29udGFpbmVyLCBjb250YWN0Q2FyZCwgQ29udGFjdE5hbWUsY29udGFjdEltYWdlICxjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKSB7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lciA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgY29udGFjdENhcmQgPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIENvbnRhY3ROYW1lID0gZmFjdG9yeURpdignJywgJ1Nwb25nZUJvYicpO1xyXG4gICAgY29udGFjdEltYWdlID0gZmFjdG9yeUltYWdlKGNoZWZJbWcgLCAnYSBwaWMgb2Ygc3BvbmdlQm9iJyk7XHJcbiAgICBjb250YWN0SW5mbyA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgY29udGFjdFByb2Zlc3Npb24gPSBmYWN0b3J5RGl2KCcnLCAnQ2hlZicpO1xyXG4gICAgY29udGFjdFBob25lTnVtYmVyID0gZmFjdG9yeURpdignJywgJys3My00NTYtMDEnKTtcclxuICAgIGNvbnRhY3RFbWFpbCA9IGZhY3RvcnlEaXYoJycsICdTcG9uZ2VCb2JAbWlsa3kuaW8nKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhY3RDYXJkQ29udGFpbmVyLCBjb250YWN0Q2FyZCwgQ29udGFjdE5hbWUsY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKTtcclxuICAgIHJldHVybiBjb250YWN0Q2FyZENvbnRhaW5lclxyXG59KSgpXHJcblxyXG5jb25zdCBwYXRyaWNrID0gKGZ1bmN0aW9uIChjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLCBjb250YWN0SW1hZ2UsIGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpe1xyXG4gICAgY29udGFjdENhcmRDb250YWluZXIgPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIGNvbnRhY3RDYXJkID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBDb250YWN0TmFtZSA9IGZhY3RvcnlEaXYoJycsICdQYXRyaWNrJyk7XHJcbiAgICBjb250YWN0SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoY3VzdG9tZXJJbWcsICdhIHBpYyBvZiBwYXRyaWNrIHN0YXInKTtcclxuICAgIGNvbnRhY3RJbmZvID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0UHJvZmVzc2lvbiA9IGZhY3RvcnlEaXYoJycsICdjdXN0b21lcicpO1xyXG4gICAgY29udGFjdFBob25lTnVtYmVyID0gZmFjdG9yeURpdignJywgJys3My00NzItMjInKTtcclxuICAgIGNvbnRhY3RFbWFpbCA9IGZhY3RvcnlEaXYoJycsICdwYXRyaWNrc3RhckBtaWxreS5pbycpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4oY29udGFjdENhcmRDb250YWluZXIsIGNvbnRhY3RDYXJkLCBDb250YWN0TmFtZSwgY29udGFjdEltYWdlLCBjb250YWN0SW5mbywgY29udGFjdFByb2Zlc3Npb24sIGNvbnRhY3RQaG9uZU51bWJlciwgY29udGFjdEVtYWlsKTtcclxuICAgIHJldHVybiBjb250YWN0Q2FyZENvbnRhaW5lclxyXG59KSgpXHJcblxyXG5jb25zdCBtcktyYWJzID0gKGZ1bmN0aW9uIChjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLCBjb250YWN0SW1hZ2UsIGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpIHtcclxuICAgIGNvbnRhY3RDYXJkQ29udGFpbmVyID0gZmFjdG9yeURpdignJyk7XHJcbiAgICBjb250YWN0Q2FyZCA9IGZhY3RvcnlEaXYoJycpO1xyXG4gICAgQ29udGFjdE5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnTXIgS3JhYnMnKTtcclxuICAgIGNvbnRhY3RJbWFnZSA9IGZhY3RvcnlJbWFnZShDZW9JbWcsICdhIHBpYyBvZiBtciBLcmFicycpO1xyXG4gICAgY29udGFjdEluZm8gPSBmYWN0b3J5RGl2KCcnKTtcclxuICAgIGNvbnRhY3RQcm9mZXNzaW9uID0gZmFjdG9yeURpdignJywgJ0NFTycpO1xyXG4gICAgY29udGFjdFBob25lTnVtYmVyID0gZmFjdG9yeURpdignJywgJys3My0yNzEtODMnKTtcclxuICAgIGNvbnRhY3RFbWFpbCA9IGZhY3RvcnlEaXYoJycsICdrcmFiYnlNdWxhQG1pbGt5LmlvJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihjb250YWN0Q2FyZENvbnRhaW5lciwgY29udGFjdENhcmQsIENvbnRhY3ROYW1lLCBjb250YWN0SW1hZ2UsIGNvbnRhY3RJbmZvLCBjb250YWN0UHJvZmVzc2lvbiwgY29udGFjdFBob25lTnVtYmVyLCBjb250YWN0RW1haWwpO1xyXG4gICAgcmV0dXJuIGNvbnRhY3RDYXJkQ29udGFpbmVyXHJcbn0pKClcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWN0ID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY29udGFjdFVzID0gZmFjdG9yeURpdignY29udGFjdFVzJyk7XHJcbiAgICBsZXQgQ29udGFjdFVzVGV4dCA9IGZhY3RvcnlEaXYoJycsJ0NvbnRhY3QgVXMnKTtcclxuICAgIGxldCBjb250YWN0c0NvbnRhaW5lciA9IGZhY3RvcnlEaXYoJ2NvbnRhY3RzJyk7XHJcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoQ29udGFjdFVzVGV4dCk7XHJcbiAgICBjb250YWN0VXMuYXBwZW5kQ2hpbGQoY29udGFjdHNDb250YWluZXIpO1xyXG4gICAgY29udGFjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoU3BvbmdlQm9iKTtcclxuICAgIGNvbnRhY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhdHJpY2spXHJcbiAgICBjb250YWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChtcktyYWJzKVxyXG4gICAgcmV0dXJuIGNvbnRhY3RVc1xyXG59KSgpXHJcblxyXG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihjb250YWN0Q2FyZENvbnRhaW5lcixjb250YWN0Q2FyZCxDb250YWN0TmFtZSxjb250YWN0SW1hZ2UsY29udGFjdEluZm8sY29udGFjdFByb2Zlc3Npb24sY29udGFjdFBob25lTnVtYmVyLGNvbnRhY3RFbWFpbCl7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q2FyZCk7XHJcbiAgICBjb250YWN0Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XHJcbiAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChDb250YWN0TmFtZSk7XHJcbiAgICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0SW1hZ2UpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFByb2Zlc3Npb24pO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKTtcclxuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=