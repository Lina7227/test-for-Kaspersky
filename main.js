/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n // прокрутка страницы и привязка header\n\nvar header = document.querySelector('.header');\n\nfunction scrollMonitoring(event) {\n  if (event.deltaY < 0) {\n    header.classList.add('header_sticky');\n  } else {\n    header.classList.remove('header_sticky');\n  }\n}\n\ndocument.onwheel = scrollMonitoring;\nwindow.addEventListener('wheel', scrollMonitoring); // появление блока покупок\n\nvar products = document.querySelector('.products');\nvar buyBlock = document.querySelector('.buy-tablo');\nvar buyLink = buyBlock.querySelector('.link_buy');\n\nfunction scrollBuy(event) {\n  if (event.deltaY > 0) {\n    buyBlock.classList.add('buy-tablo_sticky');\n  } else {\n    buyBlock.classList.remove('buy-tablo_sticky');\n  }\n}\n\ndocument.onwheel = scrollBuy;\nproducts.addEventListener('wheel', scrollBuy);\n\nfunction clickBuyButton() {\n  buyBlock.classList.remove('buy-tablo_sticky');\n}\n\nbuyLink.addEventListener('click', clickBuyButton); // пролистывание слайдера\n\nvar block = document.querySelectorAll('.carousel__cell');\nvar text = document.querySelectorAll('.carousel__table-cell');\nvar button = document.querySelectorAll('.carousel__button');\nblock.forEach(function (item, index) {\n  item.dataset.index = index;\n\n  if (index === 0) {\n    item.classList.add('carousel__cell_active');\n  }\n});\ntext.forEach(function (item, index) {\n  item.dataset.index = index;\n\n  if (index === 0) {\n    item.classList.add('carousel__table-cell_active');\n  }\n});\nbutton.forEach(function (item, index) {\n  item.dataset.index = index;\n\n  if (index === 0) {\n    item.classList.add('carousel__button_active');\n  }\n});\n\nvar toggleActivity = function toggleActivity(index) {\n  for (var i = 0; i < block.length; i++) {\n    if (i === Number(index)) {\n      block[i].classList.add('carousel__cell_active');\n      text[i].classList.add('carousel__table-cell_active');\n      button[i].classList.add('carousel__button_active');\n    } else {\n      block[i].classList.remove('carousel__cell_active');\n      text[i].classList.remove('carousel__table-cell_active');\n      button[i].classList.remove('carousel__button_active');\n    }\n  }\n};\n\ndocument.querySelector('.carousel__nav').addEventListener('mouseover', function (event) {\n  if (event.target.classList.contains('carousel__button')) {\n    toggleActivity(event.target.dataset.index);\n  }\n}); // передача стоимости товара\n\nif (document.querySelector('input[name=\"a\"]')) {\n  document.querySelectorAll('input[name=\"a\"]').forEach(function (elem) {\n    elem.addEventListener(\"change\", function (event) {\n      var item = event.target.value;\n      document.querySelectorAll('p[name=\"a\"]').forEach(function (el) {\n        if (el.classList.contains('block__text_type_value')) {\n          el.textContent = item * 2;\n        } else {\n          el.textContent = item;\n        }\n      });\n    });\n  });\n}\n\nif (document.querySelector('input[name=\"b\"]')) {\n  document.querySelectorAll('input[name=\"b\"]').forEach(function (elem) {\n    elem.addEventListener(\"change\", function (event) {\n      var item = event.target.value;\n      document.querySelectorAll('p[name=\"b\"]').forEach(function (el) {\n        if (el.classList.contains('block__text_type_value')) {\n          el.textContent = item * 2;\n        } else {\n          el.textContent = item;\n        }\n      });\n    });\n  });\n}\n\nif (document.querySelector('input[name=\"c\"]')) {\n  document.querySelectorAll('input[name=\"c\"]').forEach(function (elem) {\n    elem.addEventListener(\"change\", function (event) {\n      var item = event.target.value;\n      document.querySelectorAll('p[name=\"c\"]').forEach(function (el) {\n        if (el.classList.contains('block__text_type_value')) {\n          el.textContent = item * 2;\n        } else {\n          el.textContent = item;\n        }\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://test/./src/pages/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test/./src/pages/index.css?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;