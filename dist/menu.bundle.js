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

/***/ "./assets/angryBurger.jpeg":
/*!*********************************!*\
  !*** ./assets/angryBurger.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd338125d220854e49bb.jpeg";

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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDRDtBQUNBLGVBQWUsb0RBQVU7QUFDekIsZUFBZSxvREFBVTtBQUN6QixzQkFBc0Isb0RBQVU7QUFDaEMsZ0JBQWdCLG9EQUFVO0FBQzFCLGdCQUFnQixzREFBWSxDQUFDLHFEQUFhO0FBQzFDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxlQUFlLG9EQUFVO0FBQ3pCLGVBQWUsb0RBQVU7QUFDekIsc0JBQXNCLG9EQUFVO0FBQ2hDLGdCQUFnQixvREFBVTtBQUMxQixnQkFBZ0Isc0RBQVksQ0FBQywrQ0FBTztBQUNwQztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsZUFBZSxvREFBVTtBQUN6QixlQUFlLG9EQUFVO0FBQ3pCLHNCQUFzQixvREFBVTtBQUNoQyxnQkFBZ0Isb0RBQVU7QUFDMUIsZ0JBQWdCLHNEQUFZLENBQUMsb0RBQVk7QUFDekM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGVBQWUsb0RBQVU7QUFDekIsZUFBZSxvREFBVTtBQUN6QixzQkFBc0Isb0RBQVU7QUFDaEMsZ0JBQWdCLG9EQUFVO0FBQzFCLGdCQUFnQixzREFBWSxDQUFDLGdEQUFRO0FBQ3JDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQLGlCQUFpQixvREFBVTtBQUMzQixvQkFBb0Isb0RBQVU7QUFDOUIsaUJBQWlCLG9EQUFVO0FBQzNCLHlCQUF5QixvREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGdlbmVyYWwgZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVkIGhlcmVcclxuZnVuY3Rpb24gZmFjdG9yeURpdihjbGFzc05hbWUsIHRleHQpIHtcclxuICAgIGNvbnN0IGNyZWF0ZXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY3JlYXRldGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xyXG4gICAgY3JlYXRldGFnLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgcmV0dXJuIGNyZWF0ZXRhZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYWN0b3J5SW1hZ2Uoc3JjLCBhbHQpIHtcclxuICAgIGNvbnN0IGNyZWF0ZXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY3JlYXRldGFnLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKVxyXG4gICAgY3JlYXRldGFnLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KVxyXG4gICAgcmV0dXJuIGNyZWF0ZXRhZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYWN0b3J5QnRuKGNsYXNzTmFtZSx0ZXh0KXtcclxuICAgIGNvbnN0IGNyZWF0ZXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY3JlYXRldGFnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xyXG4gICAgY3JlYXRldGFnLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgcmV0dXJuIGNyZWF0ZXRhZ1xyXG59XHJcblxyXG5leHBvcnR7ZmFjdG9yeURpdixmYWN0b3J5SW1hZ2UsZmFjdG9yeUJ0bn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBmYWN0b3J5RGl2IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBmYWN0b3J5SW1hZ2UgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XHJcbmltcG9ydCBjb2NhY29sYSBmcm9tICcvYXNzZXRzL2NvY2Fjb2xhLmpwZWcnO1xyXG5pbXBvcnQgY29mZmVlSW1nIGZyb20gJy9hc3NldHMvY29mZmVlLmpwZWcnO1xyXG5pbXBvcnQgZW5lcmd5RHJpbmtJbWcgZnJvbSAnL2Fzc2V0cy9lbmVyZ3lEcmluay5qcGVnJ1xyXG5pbXBvcnQgb3JhbmdlRHJpbmtJbWcgZnJvbSAnL2Fzc2V0cy9vcmFuZ2VEcmluay5qcGVnJ1xyXG5pbXBvcnQgaWNlQ3JlYW1JbWcgZnJvbSAnL2Fzc2V0cy9pY2VDcmVhbS5qcGVnJ1xyXG5pbXBvcnQgYW5ncnlCdXJnZXJJbWcgZnJvbSAnL2Fzc2V0cy9hbmdyeUJ1cmdlci5qcGVnJ1xyXG5pbXBvcnQgaGFwcHlCdXJnZXJJbWcgZnJvbSAnL2Fzc2V0cy9oYXBweUJ1cmdlci5qcGVnJ1xyXG5pbXBvcnQgZnJpZXNJbWcgZnJvbSAnL2Fzc2V0cy9mcmllcy5qcGVnJ1xyXG5pbXBvcnQgZnJ1aXRTYWxhZEltZyBmcm9tICcvYXNzZXRzL2ZydWl0IHNhbGFkLmpwZWcnXHJcbmltcG9ydCByaWNlSW1nIGZyb20gJy9hc3NldHMvcmljZS5qcGVnJ1xyXG5pbXBvcnQgc3BhZ2hldHRpSW1nIGZyb20gJy9hc3NldHMvc3BhZ2hldHRpLmpwZWcnXHJcbmltcG9ydCBicmVhZEltZyBmcm9tICcvYXNzZXRzL2JyZWFkLmpwZWcnXHJcbmNvbnN0IHN1cGVyQ29rZSA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdTdXBlciBjb2tlJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnQSBnYWxhY3RpYyBkcmluayB3aXRoIGluc2FuZSBzdWdhciBydXNoISxBIGd1bHAgaXMgdXN1YWxseSBlbm91Z2gnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMS45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKGNvY2Fjb2xhLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSk7XHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5cclxuY29uc3QgY29mZmVlID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0NvZmZlZScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ1Byb2dyYW1tZXJzIGZhdm91cml0ZXMhLCBiZXN0IHRha2VuIGVhcmx5IGluIHRoZSBtb3JuaW5nLicpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQyLjUwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoY29mZmVlSW1nLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcblxyXG5jb25zdCBlbmVyZ3lEcmluayA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdFbmVyZ3kgRHJpbmsnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdBcmUgeW91IGZlZWxpbmcgdGlyZWQgbGF0ZWx5PyxhIG1lZGl1bSBzaXplZCBjdXAgaW5jcmVhc2VzIHlvdXIgZW5lcmd5IGJ5IDI0MCUhJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDMuNTAnKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShlbmVyZ3lEcmlua0ltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBvcmFuZ2VEcmluayA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdvcmFuZ2UgRHJpbmsnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdEZXNpZ25lZCB0byBxdWVuY2ggeW91ciB0aGlyc3QsMTAwJSBuYXR1cmFsIGFsc28hICcpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQzLjAwJyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2Uob3JhbmdlRHJpbmtJbWcsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3QgaWNlQ3JlYW0gPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnSWNlIGNyZWFtJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnTmVlZCB0byBydW4gYW4gZXJyYW5kIGFuZCBkaXN0cmFjdCB5b3VyIGtpZHM/QnV5IHRoZW0gSGl2ZXMgaWNlIGNyZWFtIScpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQwLjk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoaWNlQ3JlYW1JbWcsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3QgYW5ncnlCdXJnZXIgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnQW5ncnkgQnVyZ2VyJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnU3VwZXIgbWVhbiBidXJnZXIsZXZlcnkgYml0ZSBjaGFuZ2VzIHlvdXIgbW9vZCcpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ3Ljk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoYW5ncnlCdXJnZXJJbWcsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3QgaGFwcHlCdXJnZXIgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnSGFwcHkgQnVyZ2VyJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnSGF2aW5nIGEgYmFkIGRheT8sVGhpcyB3b3VsZCBtYWtlIHlvdSBoYXBwaWVyIGp1c3QgYSBsaXR0bGUgYml0Jyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDcuOTknKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShoYXBweUJ1cmdlckltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBmcmllcyA9IChmdW5jdGlvbiAobWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKSB7XHJcbiAgICBtZW51TGlzdCA9IGZhY3RvcnlEaXYoJ21lbnVMaXN0Jyk7XHJcbiAgICBtZW51TmFtZSA9IGZhY3RvcnlEaXYoJycsICdGcmllcycpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0NyYXZpbmcgZm9yIGEgY3J1bmNoeSBtZWFsLFRoaXMgaXMgdGhlIHBlcmZlY3QgZGVhbC4nKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckMTAuMDAnKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShmcmllc0ltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCBmcnVpdFNhbGFkID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ0ZyaXV0IFNhbGFkJyk7XHJcbiAgICBtZW51RGVzY3JpcHRpb24gPSBmYWN0b3J5RGl2KCcnLCAnQWxsIG5hdHVyYWwscGFja2VkIHdpdGggZW5vcm1vdXMgYW1vdW50IG9mIHZpdGFtaW5zLicpO1xyXG4gICAgbWVudVByaWNlID0gZmFjdG9yeURpdignJywgJyQ5Ljk5Jyk7XHJcbiAgICBtZW51SW1hZ2UgPSBmYWN0b3J5SW1hZ2UoZnJ1aXRTYWxhZEltZywgJ2ltYWdlIG9mIGNvY2Fjb2xhJyk7XHJcbiAgICBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpXHJcbiAgICByZXR1cm4gbWVudUxpc3RcclxufSkoKVxyXG5jb25zdCByaWNlID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ1JpY2UnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdPdXIgbW9zdCBvcmRlcmVkIGZvb2QuSXRzIG5vIHNlY3JldCB0aGlzIHdvdWxkIGZpbGwgeW91ciB0dW1teSEnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckNi45OScpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKHJpY2VJbWcsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3Qgc3BhZ2hldHRpID0gKGZ1bmN0aW9uIChtZW51TGlzdCwgbWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlLCBtZW51SW1hZ2UpIHtcclxuICAgIG1lbnVMaXN0ID0gZmFjdG9yeURpdignbWVudUxpc3QnKTtcclxuICAgIG1lbnVOYW1lID0gZmFjdG9yeURpdignJywgJ1NwYWdoZXR0aScpO1xyXG4gICAgbWVudURlc2NyaXB0aW9uID0gZmFjdG9yeURpdignJywgJ0Egc3BpY3kgbWVhbCx2ZXJ5IHl1bW15LHZlcnkgdGFzdHkuJyk7XHJcbiAgICBtZW51UHJpY2UgPSBmYWN0b3J5RGl2KCcnLCAnJDguMDAnKTtcclxuICAgIG1lbnVJbWFnZSA9IGZhY3RvcnlJbWFnZShzcGFnaGV0dGlJbWcsICdpbWFnZSBvZiBjb2NhY29sYScpO1xyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWVudUxpc3QsIG1lbnVOYW1lLCBtZW51RGVzY3JpcHRpb24sIG1lbnVQcmljZSwgbWVudUltYWdlKVxyXG4gICAgcmV0dXJuIG1lbnVMaXN0XHJcbn0pKClcclxuY29uc3QgYnJlYWQgPSAoZnVuY3Rpb24gKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSkge1xyXG4gICAgbWVudUxpc3QgPSBmYWN0b3J5RGl2KCdtZW51TGlzdCcpO1xyXG4gICAgbWVudU5hbWUgPSBmYWN0b3J5RGl2KCcnLCAnQnJlYWQnKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbiA9IGZhY3RvcnlEaXYoJycsICdBIGxvYWYgb2YgYnJlYWQsc29mdCBhbmQgdGVuZGVyLGJlc3QgdGFrZW4gd2l0aCB5b3VyIGZhdm91cml0ZSBzcHJlYWQnKTtcclxuICAgIG1lbnVQcmljZSA9IGZhY3RvcnlEaXYoJycsICckNC4wMCcpO1xyXG4gICAgbWVudUltYWdlID0gZmFjdG9yeUltYWdlKGJyZWFkSW1nLCAnaW1hZ2Ugb2YgY29jYWNvbGEnKTtcclxuICAgIGFwcGVuZENoaWxkcmVuKG1lbnVMaXN0LCBtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UsIG1lbnVJbWFnZSlcclxuICAgIHJldHVybiBtZW51TGlzdFxyXG59KSgpXHJcblxyXG5leHBvcnQgY29uc3QgbWVudVNlY3Rpb24gPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1lbnUgPSBmYWN0b3J5RGl2KCdtZW51Jyk7XHJcbiAgICBjb25zdCBtZW51RGl2ID0gZmFjdG9yeURpdignJywnTWVudScpO1xyXG4gICAgY29uc3QgZm9vZCA9IGZhY3RvcnlEaXYoJ2JldmVyYWdlcycpO1xyXG4gICAgY29uc3QgbWVudVNlY3Rpb24xID0gZmFjdG9yeURpdignbWVudVNlY3Rpb24nLCdCZXZlcmFnZXMnKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGZvb2QpO1xyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbjEpO1xyXG4gICAgLy9hcHBlbmQgaW5kaXZpZHVhbCBmb29kIHNlY3Rpb25cclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoc3VwZXJDb2tlKTtcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoY29mZmVlKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChlbmVyZ3lEcmluaylcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQob3JhbmdlRHJpbmspXHJcbiAgICBjb25zdCBtZW51U2VjdGlvbjIgPSBmYWN0b3J5RGl2KCdtZW51U2VjdGlvbicsICdTaWRlcycpO1xyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbjIpXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGljZUNyZWFtKVxyXG4gICAgZm9vZC5hcHBlbmRDaGlsZChhbmdyeUJ1cmdlcilcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoaGFwcHlCdXJnZXIpXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKGZydWl0U2FsYWQpXHJcbiAgICBjb25zdCBtZW51U2VjdGlvbjMgPSBmYWN0b3J5RGl2KCdtZW51U2VjdGlvbicsICdNYWluJyk7XHJcbiAgICBmb29kLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uMylcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoZnJpZXMpXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKHJpY2UpXHJcbiAgICBmb29kLmFwcGVuZENoaWxkKHNwYWdoZXR0aSlcclxuICAgIGZvb2QuYXBwZW5kQ2hpbGQoYnJlYWQpXHJcblxyXG4gICAgcmV0dXJuIG1lbnVcclxufSkoKVxyXG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihtZW51TGlzdCxtZW51TmFtZSxtZW51RGVzY3JpcHRpb24sbWVudVByaWNlLG1lbnVJbWFnZSl7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51TmFtZSk7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xyXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudVByaWNlKTtcclxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9