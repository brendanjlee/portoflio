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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadProjectCards */ \"./src/modules/loadProjectCards.js\");\n/* harmony import */ var _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/projectAssets/project-battleship.png */ \"./assets/projectAssets/project-battleship.png\");\n\r\n\r\n\r\nconst workContainer = document.querySelector('.projectCardsContainer')\r\nconst desc = 'A recreation of the classic Battleship game. Play against a computer on a randomized board.'\r\nconst bs = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n  'Battleship',\r\n  desc,\r\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  'https://github.com/brendanjlee/battleship',\r\n  'https://brendanjlee.github.io/battleship/'\r\n)\r\n\r\nconst b2 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n  'Battleship',\r\n  desc,\r\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  'https://github.com/brendanjlee/battleship',\r\n  'https://brendanjlee.github.io/battleship/'\r\n)\r\n\r\nconst b3 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n  'Battleship',\r\n  desc,\r\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  'https://github.com/brendanjlee/battleship',\r\n  'https://brendanjlee.github.io/battleship/'\r\n)\r\n\r\nconst b4 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n  'Battleship',\r\n  desc,\r\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  'https://github.com/brendanjlee/battleship',\r\n  'https://brendanjlee.github.io/battleship/'\r\n)\r\n\r\nconst b5 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n  'Battleship',\r\n  desc,\r\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  'https://github.com/brendanjlee/battleship',\r\n  'https://brendanjlee.github.io/battleship/'\r\n)\r\n\r\nconst b6 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n  'Battleship',\r\n  desc,\r\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\r\n  'https://github.com/brendanjlee/battleship',\r\n  'https://brendanjlee.github.io/battleship/'\r\n)\r\n\r\nworkContainer.appendChild(bs)\r\nworkContainer.appendChild(b2)\r\nworkContainer.appendChild(b3)\r\nworkContainer.appendChild(b4)\r\nworkContainer.appendChild(b5)\r\nworkContainer.appendChild(b6)\n\n//# sourceURL=webpack://portoflio/./src/index.js?");

/***/ }),

/***/ "./src/modules/loadProjectCards.js":
/*!*****************************************!*\
  !*** ./src/modules/loadProjectCards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createProjectCardElem(\r\n  title,\r\n  desc,\r\n  imgSrc,\r\n  repoLink,  \r\n  demoLink\r\n) {\r\n  const projectCardElem = document.createElement('div');\r\n  projectCardElem.classList.add('projectCard');\r\n\r\n  // Project Photo\r\n  const projectPhoto = new Image();\r\n  projectPhoto.classList.add('projectPhoto')\r\n  projectPhoto.src = imgSrc;\r\n  projectCardElem.appendChild(projectPhoto);\r\n\r\n  // Project Info Div\r\n  const projectInfoContainer = document.createElement('div');\r\n  projectInfoContainer.classList.add('projectInfoContainer');\r\n  projectCardElem.appendChild(projectInfoContainer);\r\n\r\n  // title\r\n  const projectTitleContainer = document.createElement('div');\r\n  projectTitleContainer.classList.add('projectTitleContainer');\r\n  projectInfoContainer.appendChild(projectTitleContainer);\r\n\r\n  // Title & Demo link\r\n  const projectTitleLink = document.createElement('a');\r\n  projectTitleLink.href = demoLink;\r\n  projectTitleLink.innerHTML = title;\r\n  projectTitleContainer.appendChild(projectTitleLink);\r\n\r\n  // github link\r\n  const githubLink = document.createElement('a');\r\n  githubLink.href = repoLink;\r\n  githubLink.innerHTML = '<i class=\"devicon-github-original colored\"></i>';\r\n  projectTitleContainer.appendChild(githubLink);\r\n\r\n  // desc\r\n  const projectDesc = document.createElement('p');\r\n  projectDesc.innerHTML = desc;\r\n  projectInfoContainer.appendChild(projectDesc);\r\n\r\n  return projectCardElem;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectCardElem);\n\n//# sourceURL=webpack://portoflio/./src/modules/loadProjectCards.js?");

/***/ }),

/***/ "./assets/projectAssets/project-battleship.png":
/*!*****************************************************!*\
  !*** ./assets/projectAssets/project-battleship.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71383cda298e160da23c.png\";\n\n//# sourceURL=webpack://portoflio/./assets/projectAssets/project-battleship.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;