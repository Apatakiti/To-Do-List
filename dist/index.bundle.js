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


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/module1.js */ \"./src/modules/module1.js\");\n/* harmony import */ var _modules_module2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/module2.js */ \"./src/modules/module2.js\");\n/* eslint-disable */\r\n// import './style.css';\r\n\r\n\r\n\r\nclass TaskList {\r\n  constructor(doings = []) {\r\n    this.doings = doings;\r\n  }\r\n\r\n  listFormat() {\r\n    const todos = document.getElementsByClassName('to-dos');\r\n\r\n    if (todos) {\r\n      todos[0].innerHTML = '';\r\n    }\r\n\r\n    this.doings.forEach((lis) => {\r\n      const eachList = [];\r\n      const eachcheck = [];\r\n      const eachParag = [];\r\n      const eachbtn = [];\r\n      const checkNparagDiv = [];\r\n\r\n      // create editable List\r\n      eachList[lis.index] = document.createElement('li');\r\n      eachList[lis.index].contentEditable = true;\r\n      eachList[lis.index].setAttribute('id', lis.index);\r\n      eachList[lis.index].classList.add('indList');\r\n\r\n      // create check\r\n      eachcheck[lis.index] = document.createElement('input');\r\n      eachcheck[lis.index].setAttribute('type', 'checkbox');\r\n      eachcheck[lis.index].classList.add('checkbox');\r\n      eachcheck[lis.index].setAttribute('id', lis.index);\r\n\r\n      // create paragraph\r\n      eachParag[lis.index] = document.createElement('p');\r\n      eachParag[lis.index].textContent = lis.description;\r\n      eachParag[lis.index].setAttribute('id', lis.index);\r\n      eachParag[lis.index].classList.add('eachParag');\r\n\r\n      // create button\r\n      eachbtn[lis.index] = document.createElement('button');\r\n      eachbtn[lis.index].setAttribute('id', lis.index);\r\n      eachbtn[lis.index].innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\r\n\r\n      // Div\r\n      checkNparagDiv[lis.index] = document.createElement('div');\r\n      checkNparagDiv[lis.index].append(eachcheck[lis.index], eachParag[lis.index]);\r\n      eachParag[lis.index].classList.add('checkNparagDiv');\r\n\r\n      // appending check, paragraph and button\r\n      eachList[lis.index].append(eachcheck[lis.index], eachParag[lis.index], eachbtn[lis.index]);\r\n\r\n      // appending each list\r\n      todos[0].append(eachList[lis.index]);\r\n\r\n      // On editing paragraph\r\n      eachParag[lis.index].addEventListener('click', (e) => {\r\n        e.target.nextSibling.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\r\n        e.target.nextSibling.style.cursor = 'pointer';\r\n        eachList[lis.index].style.backgroundColor = '#a6bdbe';\r\n        e.target.nextSibling.addEventListener('click', () => {\r\n          this.delete(eachList[lis.index]);\r\n        });\r\n      });\r\n\r\n      eachbtn[lis.index].addEventListener('click', () => {\r\n        this.delete(eachList[lis.index]);\r\n      });\r\n\r\n      eachList[lis.index].addEventListener('mouseleave', (eve) => {\r\n        eachbtn[lis.index].innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\r\n        this.update(eve.target.id, eve.target.innerText);\r\n      });\r\n\r\n      // Listen for checking elements\r\n      eachcheck[lis.index].addEventListener('change', (e) => {\r\n        const status = new _modules_module2_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        if (e.target.checked === true) {\r\n          status.checked(this.doings[lis.index]);\r\n        } else {\r\n          status.unchecked(this.doings[lis.index]);\r\n        }\r\n        this.update(e.target.nextSibling.id, e.target.nextSibling.innerText);\r\n\r\n        localStorage.setItem('storedlist', JSON.stringify(taskList.doings));\r\n      });\r\n\r\n      // conditions after checking\r\n      if (this.doings[lis.index].completed === true) {\r\n        eachcheck[lis.index].setAttribute('checked', 'checked');\r\n        eachList[lis.index].classList.add('checked');\r\n      } else if (this.doings[lis.index].completed === false) {\r\n        eachcheck[lis.index].removeAttribute('checked');\r\n        eachList[lis.index].classList.remove('checked');\r\n      }\r\n    });\r\n  }\r\n\r\n  add(description, completed, index) {\r\n    const allTask = new _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description, completed, index);\r\n    this.doings.push(allTask);\r\n  }\r\n\r\n  delete(num) {\r\n    const key = num;\r\n    if (this.doings.length === 1) {\r\n      this.doings = [];\r\n    } else {\r\n      this.doings.splice(key, 1);\r\n    }\r\n    this.doings.forEach((lis, index) => {\r\n      lis.index = index;\r\n    });\r\n    this.listFormat();\r\n\r\n    localStorage.setItem('storedlist', JSON.stringify(taskList.doings)); \r\n  }\r\n\r\n  update(indexList, description) {\r\n    if (this.doings[indexList].index === Number(indexList)) {\r\n      this.doings[indexList].description = description;\r\n    }\r\n    this.doings.forEach((lis, index) => {\r\n      lis.index = index;\r\n    });\r\n    this.listFormat();\r\n  }\r\n\r\n  clearAllCompleted() {\r\n    this.doings = this.doings.filter((element) => element.completed === false);\r\n    localStorage.setItem('storedlist', JSON.stringify(this.doings));\r\n    window.location.reload();\r\n  }\r\n}\r\n\r\nlet index = 0;\r\nconst completed = false;\r\nconst taskList = new TaskList();\r\n\r\nconst clearAllComptd = document.querySelector('.clear');\r\nclearAllComptd.addEventListener('click', () => {\r\n  taskList.clearAllCompleted();\r\n});\r\n\r\nconst enterBtn = document.getElementById('enter');\r\nconst input = document.getElementById('theinput');\r\nenterBtn.addEventListener('click', () => {\r\n  if (!input.value.trim()) {\r\n    !input.value\r\n  } else {\r\n    taskList.add(input.value, completed, index);\r\n    taskList.listFormat();\r\n    input.value = '';\r\n    index += 1;\r\n  }\r\n  localStorage.setItem('storedlist', JSON.stringify(taskList.doings));\r\n});\r\n\r\n// keyboard Enter button support\r\nwindow.addEventListener('keydown', (e) => {\r\n  if (e.key === 'Enter') {\r\n    enterBtn.click();\r\n  }\r\n  localStorage.setItem('storedlist', JSON.stringify(taskList.doings));\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n  taskList.doings = JSON.parse(localStorage.getItem('storedlist'));\r\n  if (taskList.doings) {\r\n    taskList.listFormat();\r\n  } else {\r\n    taskList.doings = [];\r\n  }\r\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/module1.js */ \"./src/modules/module1.js\");\n/* harmony import */ var _modules_module2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/module2.js */ \"./src/modules/module2.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\nclass TaskList {\r\n  constructor(doings = []) {\r\n    this.doings = doings;\r\n  }\r\n\r\n  listFormat() {\r\n    const todos = document.getElementsByClassName('to-dos');\r\n\r\n    if (todos) {\r\n      todos[0].innerHTML = '';\r\n    }\r\n\r\n    this.doings.forEach((lis) => {\r\n      const eachList = [];\r\n      const eachcheck = [];\r\n      const eachParag = [];\r\n      const eachbtn = [];\r\n      const checkNparagDiv = [];\r\n\r\n      // create editable List\r\n      eachList[lis.index] = document.createElement('li');\r\n      eachList[lis.index].contentEditable = true;\r\n      eachList[lis.index].setAttribute('id', lis.index);\r\n      eachList[lis.index].classList.add('indList');\r\n\r\n      // create check\r\n      eachcheck[lis.index] = document.createElement('input');\r\n      eachcheck[lis.index].setAttribute('type', 'checkbox');\r\n      eachcheck[lis.index].classList.add('checkbox');\r\n      eachcheck[lis.index].setAttribute('id', lis.index);\r\n\r\n      // create paragraph\r\n      eachParag[lis.index] = document.createElement('p');\r\n      /// ///////////////////////////////\r\n      eachParag[lis.index].textContent = lis.description;\r\n      eachParag[lis.index].setAttribute('id', lis.index);\r\n      eachParag[lis.index].classList.add('eachParag');\r\n\r\n      // create button\r\n      eachbtn[lis.index] = document.createElement('button');\r\n      eachbtn[lis.index].setAttribute('id', lis.index);\r\n      eachbtn[lis.index].innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\r\n\r\n      // Div\r\n      checkNparagDiv[lis.index] = document.createElement('div');\r\n      checkNparagDiv[lis.index].append(eachcheck[lis.index], eachParag[lis.index]);\r\n      eachParag[lis.index].classList.add('checkNparagDiv');\r\n\r\n      // appending check, paragraph and button\r\n      eachList[lis.index].append(eachcheck[lis.index], eachParag[lis.index], eachbtn[lis.index]);\r\n\r\n      // appending each list\r\n      todos[0].append(eachList[lis.index]);\r\n\r\n      // On editing paragraph\r\n      eachParag[lis.index].addEventListener('click', (e) => {\r\n        e.target.nextSibling.innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\r\n        e.target.nextSibling.style.cursor = 'pointer';\r\n        eachList[lis.index].style.backgroundColor = '#a6bdbe';\r\n        e.target.nextSibling.addEventListener('click', () => {\r\n          this.delete(eachList[lis.index]);\r\n        });\r\n      });\r\n\r\n      eachbtn[lis.index].addEventListener('click', () => {\r\n        this.delete(eachList[lis.index]);\r\n      });\r\n\r\n      eachList[lis.index].addEventListener('mouseleave', (eve) => {\r\n        eachbtn[lis.index].innerHTML = '<i class=\"fa-solid fa-trash\"></i>';\r\n        this.update(eve.target.id, eve.target.innerText);\r\n      });\r\n\r\n      // Listen for checking elements\r\n      eachcheck[lis.index].addEventListener('change', (e) => {\r\n        const status = new _modules_module2_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        if (e.target.checked === true) {\r\n          status.checked(this.doings[lis.index]);\r\n        } else {\r\n          status.unchecked(this.doings[lis.index]);\r\n        }\r\n        this.update(e.target.nextSibling.id, e.target.nextSibling.innerText);\r\n\r\n        localStorage.setItem('storedlist', JSON.stringify(taskList.doings));\r\n      });\r\n\r\n      // conditions after checking\r\n      if (this.doings[lis.index].completed === true) {\r\n        eachcheck[lis.index].setAttribute('checked', 'checked');\r\n        eachList[lis.index].classList.add('checked');\r\n      } else if (this.doings[lis.index].completed === false) {\r\n        eachcheck[lis.index].removeAttribute('checked');\r\n        eachList[lis.index].classList.remove('checked');\r\n      }\r\n    });\r\n  }\r\n\r\n  add(description, completed, index) {\r\n    const allTask = new _modules_module1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description, completed, index);\r\n    this.doings.push(allTask);\r\n  }\r\n\r\n  delete(num) {\r\n    const key = num;\r\n    if (this.doings.length === 1) {\r\n      this.doings = [];\r\n    } else {\r\n      this.doings.splice(key, 1);\r\n    }\r\n    this.doings.forEach((lis, index) => {\r\n      lis.index = index;\r\n    });\r\n    this.listFormat();\r\n\r\n    localStorage.setItem('storedlist', JSON.stringify(taskList.doings)); \r\n  }\r\n\r\n  update(indexList, description) {\r\n    if (this.doings[indexList].index === Number(indexList)) {\r\n      this.doings[indexList].description = description;\r\n    }\r\n    this.doings.forEach((lis, index) => {\r\n      lis.index = index;\r\n    });\r\n    this.listFormat();\r\n  }\r\n\r\n  clearAllCompleted() {\r\n    this.doings = this.doings.filter((element) => element.completed === false);\r\n    localStorage.setItem('storedlist', JSON.stringify(this.doings));\r\n    window.location.reload();\r\n  }\r\n}\r\n\r\nlet index = 0;\r\nconst completed = false;\r\nconst taskList = new TaskList();\r\n\r\nconst clearAllComptd = document.querySelector('.clear');\r\nclearAllComptd.addEventListener('click', () => {\r\n  taskList.clearAllCompleted();\r\n});\r\n\r\nconst enterBtn = document.getElementById('enter');\r\nconst input = document.getElementById('theinput');\r\nenterBtn.addEventListener('click', () => {\r\n  if (!input.value.trim()) {\r\n    // !input.value\r\n  } else {\r\n    taskList.add(input.value, completed, index);\r\n    taskList.listFormat();\r\n    input.value = '';\r\n    index += 1;\r\n  }\r\n  localStorage.setItem('storedlist', JSON.stringify(taskList.doings));\r\n});\r\n\r\n// keyboard Enter button support\r\nwindow.addEventListener('keydown', (e) => {\r\n  if (e.key === 'Enter') {\r\n    enterBtn.click();\r\n  }\r\n  localStorage.setItem('storedlist', JSON.stringify(taskList.doings));\r\n});\r\n\r\nwindow.addEventListener('load', () => {\r\n  taskList.doings = JSON.parse(localStorage.getItem('storedlist'));\r\n  if (taskList.doings) {\r\n    taskList.listFormat();\r\n  } else {\r\n    taskList.doings = [];\r\n  }\r\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");


/***/ }),

/***/ "./src/modules/module1.js":
/*!********************************!*\
  !*** ./src/modules/module1.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Alltask)\n/* harmony export */ });\nclass Alltask {\r\n  constructor(description, completed = false, index) {\r\n    this.description = description;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/module1.js?");

/***/ }),

/***/ "./src/modules/module2.js":
/*!********************************!*\
  !*** ./src/modules/module2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Status)\n/* harmony export */ });\nclass Status {\r\n  constructor() {\r\n    this.completed = false;\r\n  }\r\n\r\n    checked = (element) => {\r\n      element.completed = true;\r\n    }\r\n\r\n    unchecked = (element) => {\r\n      element.completed = false;\r\n    }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/module2.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;