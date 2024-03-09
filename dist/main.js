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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadProjectCards */ \"./src/modules/loadProjectCards.js\");\n/* harmony import */ var _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/projectAssets/project-battleship.png */ \"./assets/projectAssets/project-battleship.png\");\n\n\n\nconst workContainer = document.querySelector('.projectCardsContainer')\nconst desc = 'A recreation of the classic Battleship game. Play against a computer on a randomized board.'\nconst bs = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  'Battleship',\n  desc,\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\n  'https://github.com/brendanjlee/battleship',\n  'https://brendanjlee.github.io/battleship/'\n)\n\nconst b2 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  'Battleship',\n  desc,\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\n  'https://github.com/brendanjlee/battleship',\n  'https://brendanjlee.github.io/battleship/'\n)\n\nconst b3 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  'Battleship',\n  desc,\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\n  'https://github.com/brendanjlee/battleship',\n  'https://brendanjlee.github.io/battleship/'\n)\n\nconst b4 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  'Battleship',\n  desc,\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\n  'https://github.com/brendanjlee/battleship',\n  'https://brendanjlee.github.io/battleship/'\n)\n\nconst b5 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  'Battleship',\n  desc,\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\n  'https://github.com/brendanjlee/battleship',\n  'https://brendanjlee.github.io/battleship/'\n)\n\nconst b6 = (0,_modules_loadProjectCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  'Battleship',\n  desc,\n  _assets_projectAssets_project_battleship_png__WEBPACK_IMPORTED_MODULE_1__,\n  'https://github.com/brendanjlee/battleship',\n  'https://brendanjlee.github.io/battleship/'\n)\n\nworkContainer.appendChild(bs)\nworkContainer.appendChild(b2)\nworkContainer.appendChild(b3)\nworkContainer.appendChild(b4)\nworkContainer.appendChild(b5)\nworkContainer.appendChild(b6)\n\n//# sourceURL=webpack://portoflio/./src/index.js?");

/***/ }),

/***/ "./src/modules/loadProjectCards.js":
/*!*****************************************!*\
  !*** ./src/modules/loadProjectCards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createProjectCardElem(\n  title,\n  desc,\n  imgSrc,\n  repoLink,  \n  demoLink\n) {\n  const projectCardElem = document.createElement('div');\n  projectCardElem.classList.add('projectCard');\n\n  // Project Photo\n  const projectPhoto = new Image();\n  projectPhoto.classList.add('projectPhoto')\n  projectPhoto.src = imgSrc;\n  projectCardElem.appendChild(projectPhoto);\n\n  // Project Info Div\n  const projectInfoContainer = document.createElement('div');\n  projectInfoContainer.classList.add('projectInfoContainer');\n  projectCardElem.appendChild(projectInfoContainer);\n\n  // title\n  const projectTitleContainer = document.createElement('div');\n  projectTitleContainer.classList.add('projectTitleContainer');\n  projectInfoContainer.appendChild(projectTitleContainer);\n\n  // Title & Demo link\n  const projectTitleLink = document.createElement('a');\n  projectTitleLink.href = demoLink;\n  projectTitleLink.innerHTML = title;\n  projectTitleContainer.appendChild(projectTitleLink);\n\n  // github link\n  const githubLink = document.createElement('a');\n  githubLink.href = repoLink;\n  githubLink.innerHTML = '<i class=\"devicon-github-original colored\"></i>';\n  projectTitleContainer.appendChild(githubLink);\n\n  // desc\n  const projectDesc = document.createElement('p');\n  projectDesc.innerHTML = desc;\n  projectInfoContainer.appendChild(projectDesc);\n\n  return projectCardElem;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectCardElem);\n\n//# sourceURL=webpack://portoflio/./src/modules/loadProjectCards.js?");

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