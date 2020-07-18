/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CONSTANTS = {\n    DIM_X: 1000,\n    DIM_Y: 650,\n    MAX_VELOCITY: 10,\n    MAX_HEIGHT: 50\n};\n\nclass Fish {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.height = Math.floor(Math.random() * CONSTANTS.MAX_HEIGHT + 1);\n        this.width = this.height * 3;\n        this.vel = Math.floor(Math.random() * CONSTANTS.MAX_VELOCITY + 1);\n\n        this.y;\n        this.x;\n        this.dir;\n\n        this.birthFish();\n    }\n\n\n    birthFish() {\n        this.y = Math.floor(Math.random() * (CONSTANTS.DIM_Y - this.height));\n        \n        const side = Math.floor(Math.random() * 2);\n        if (side === 0) {\n            this.x = 0 - this.width;\n            this.dir = \"right\";\n        } else {\n            this.x = CONSTANTS.DIM_X;\n            this.dir = \"left\"\n        }\n    }\n\n    animate() {\n        this.draw();\n        this.move();\n    }\n\n    draw() {\n        this.ctx.fillStyle = \"black\";\n        this.ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n\n    move() {\n        if (this.dir === \"right\") {\n            this.x += this.vel;\n        } else {\n            this.x -= this.vel;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fish);\n\n//# sourceURL=webpack:///./src/fish.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish.js */ \"./src/fish.js\");\n\n\nconst CONSTANTS = {\n    BG_COLOR: 'blue',\n    DIM_X: 1000,\n    DIM_Y: 650\n}\n\nclass Game {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.fish = [];\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n        this.ctx.fillStyle = CONSTANTS.BG_COLOR;\n        this.ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    }\n\n    animate() {\n        this.draw();\n\n        this.fish.forEach(f => {\n            f.animate();\n        });\n\n        if (this.fish.length < 5) {\n            this.fish.push(new _fish_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx))\n        }\n\n        this.removeFish();\n\n        requestAnimationFrame(this.animate.bind(this));\n    }\n\n    removeFish() {\n        let newFish = [];\n\n        this.fish.forEach(f => {\n            if (f.x < CONSTANTS.DIM_X + 200 && f.x > - 200) {\n                newFish.push(f);\n            }\n        });\n\n        this.fish = newFish;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const canvas = document.getElementById('my-canvas');\n    canvas.width = 1000;\n    canvas.height = 650;\n    const ctx = canvas.getContext('2d');\n\n    const g = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    g.animate();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });