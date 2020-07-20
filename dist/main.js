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

/***/ "./src/avatar.js":
/*!***********************!*\
  !*** ./src/avatar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CONSTANTS = {\n    DIM_X: 800,\n    DIM_Y: 650,\n    MAX_VELOCITY: 5,\n    MAX_HEIGHT: 50\n};\n\nclass Avatar {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.x = CONSTANTS.DIM_X / 2;\n        this.y = CONSTANTS.DIM_Y / 2;\n\n        this.width = 45;\n        this.height = 15;\n\n        this.velX = 0;\n        this.velY = 0;\n\n        this.dir = \"right\";\n    }\n\n    animate() {\n        if (this.x + this.velX > 0 && this.x + this.velX + this.width< CONSTANTS.DIM_X) {\n            this.x += this.velX;\n        } else {\n            this.VelX = 0;\n        }\n\n        if (this.y + this.velY > 0 && this.y + this.velY + this.height < CONSTANTS.DIM_Y) {\n            this.y += this.velY;\n        } else {\n            this.velY = 0;\n        }\n        \n        this.draw();\n    }\n\n    draw() {\n        this.ctx.fillStyle = \"red\";\n        this.ctx.fillRect(this.x, this.y, this.width, this.height);\n\n        const eye = this.height / 10;\n        this.ctx.fillStyle = \"black\";\n\n        if (this.dir === \"left\") {\n            this.ctx.fillRect(this.x + this.width / 9, this.y + this.height / 3, eye, eye);\n        } else {\n            this.ctx.fillRect(this.x + this.width - this.width / 9, this.y + this.height / 3, eye, eye)\n        }\n    }\n\n    keys() {\n        key(\"a\", () => {\n            this.move(\"left\");\n        });\n        key(\"d\", () => {\n            this.move(\"right\");\n        });\n        key(\"w\", () => {\n            this.move(\"top\");\n        });\n        key(\"s\", () => {\n            this.move(\"bottom\");\n        });\n    }\n\n    move(dir) {\n        switch(dir) {\n            case \"left\":\n                if (this.velX > - 10) {\n                    this.velX -= 1;\n                    if (this.dir === \"right\") this.dir = \"left\";\n                }\n                break;\n            case \"right\":\n                if (this.velX < 10) {\n                    this.velX += 1;\n                    if (this.dir === \"left\") this.dir = \"right\";\n                }\n                break;\n            case \"top\":\n                if (this.velY > - 10) {\n                    this.velY -= 1;\n                }\n                break;\n            case \"bottom\":\n                if (this.velY < 10) {\n                    this.velY += 1;\n                }\n                break;\n        }\n    }\n\n    eat(fish) {\n        this.width += (fish.width * .25);\n        this.height += (fish.height * .25);\n    } \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\n\n//# sourceURL=webpack:///./src/avatar.js?");

/***/ }),

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst CONSTANTS = {\n    DIM_X: 800,\n    DIM_Y: 650,\n    MAX_VELOCITY: 10,\n    MAX_HEIGHT: 50,\n    COLORS: [\"#00ff00\", \"#00ffff\", \"#ff00ff\", \"#ff0080\"]\n};\n\nclass Fish {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.height = Math.floor(Math.random() * CONSTANTS.MAX_HEIGHT + 1);\n        this.width = this.height * 3;\n        this.vel = Math.floor(Math.random() * CONSTANTS.MAX_VELOCITY + 1);\n\n        this.y;\n        this.x;\n        this.dir;\n        \n        this.color = CONSTANTS.COLORS[Math.floor(Math.random() * CONSTANTS.COLORS.length)];\n\n        this.birthFish();\n    }\n\n\n    birthFish() {\n        this.y = Math.floor(Math.random() * (CONSTANTS.DIM_Y - this.height));\n        \n        const side = Math.floor(Math.random() * 2);\n        if (side === 0) {\n            this.x = 0 - this.width;\n            this.dir = \"right\";\n        } else {\n            this.x = CONSTANTS.DIM_X;\n            this.dir = \"left\"\n        }\n    }\n\n    animate() {\n        this.draw();\n        this.move();\n    }\n\n    draw() {\n        this.ctx.fillStyle = this.color;\n        this.ctx.fillRect(this.x, this.y, this.width, this.height);\n        this.ctx.save();\n\n        \n        // this.ctx.beginPath();\n        // this.ctx.moveTo(this.x + this.width, this.y);\n        // this.ctx.lineTo(this.x + this.width, this.y + this.height);\n        // this.ctx.lineTo(this.x + this.width + this.height, this.y + this.height);\n        // this.ctx.closePath();\n        // this.ctx.fill();\n        // this.ctx.restore();\n\n        const eye = this.height / 10;\n        this.ctx.fillStyle = \"black\";\n\n        if (this.dir === \"left\") {\n            this.ctx.fillRect(this.x + this.width / 9, this.y + this.height / 3, eye, eye);\n        } else {\n            this.ctx.fillRect(this.x + this.width - this.width / 9, this.y + this.height / 3, eye, eye)\n        }\n\n    }\n\n    move() {\n        if (this.dir === \"right\") {\n            this.x += this.vel;\n        } else {\n            this.x -= this.vel;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fish);\n\n//# sourceURL=webpack:///./src/fish.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fish.js */ \"./src/fish.js\");\n/* harmony import */ var _avatar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.js */ \"./src/avatar.js\");\n\n\n\nconst CONSTANTS = {\n    BG_COLOR: '#57d8ff',\n    DIM_X: 800,\n    DIM_Y: 650\n}\n\nclass Game {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.avatar = new _avatar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n        this.fish = [];\n        this.score = 0;\n\n        this.running = true;\n    }\n\n    play() {\n        this.avatar.keys();\n        this.reset();\n        this.animate();\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n        this.ctx.fillStyle = CONSTANTS.BG_COLOR;\n        this.ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    }\n\n    animate() {\n\n        if(this.running) {\n            this.draw();\n\n            this.avatar.animate();\n            this.fish.forEach(f => {\n                f.animate();\n            });\n\n            if (this.fish.length < 5) {\n                this.fish.push(new _fish_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx))\n            }\n\n            this.removeSideFish();\n            this.checkCollisions();\n        }\n\n        requestAnimationFrame(this.animate.bind(this));\n    }\n\n    removeSideFish() {\n        let newFish = [];\n\n        this.fish.forEach(f => {\n            if (f.x < CONSTANTS.DIM_X + 200 && f.x > - 200) {\n                newFish.push(f);\n            }\n        });\n\n        this.fish = newFish;\n    }\n\n    checkCollisions() {\n        this.fish.forEach((f, idx) => {\n            if (this.isCollided(f)) {\n                this.collisionResult(f, idx);\n            }\n        })\n    }\n\n    isCollided(fish) {\n        const avatarCenX = this.avatar.x + this.avatar.width * .5;\n        const avatarCenY = this.avatar.y + this.avatar.height * .5;\n\n        const fCenX = fish.x + fish.width * .5;\n        const fCenY = fish.y + fish.height * .5;\n\n        const dx = avatarCenX - fCenX;\n        const dy = avatarCenY - fCenY;\n\n        const aveW = (this.avatar.width + fish.width) * .5;\n        const aveH = (this.avatar.height + fish.height) * .5;\n\n        if (Math.abs(dx) > aveW || Math.abs(dy) > aveH) return false;\n        return true;\n    }\n\n    collisionResult(f, idx) {\n        if (this.avatar.width > f.width) {\n            this.avatar.eat(f);\n            this.fish.splice(idx, 1);\n            this.score++;\n        } else {\n            this.gameOver();\n        }\n    }\n\n    gameOver() {\n        this.running = false;\n        this.ctx.font = \"30px Arial\";\n        this.ctx.fillText(`Game Over. Fish Eaten: ${this.score}`, 10, 50);\n    }\n\n    reset() {\n        key(\"r\", () => {\n            this.fish = [];\n            this.score = 0;\n            this.running = true;\n            this.avatar.x = CONSTANTS.DIM_X / 2;\n            this.avatar.y = CONSTANTS.DIM_Y / 2;\n            this.avatar.width = 45;\n            this.avatar.height = 15;\n            this.avatar.velX = 0;\n            this.avatar.velY = 0;\n\n        })\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const canvas = document.getElementById('my-canvas');\n    canvas.width = 800;\n    canvas.height = 650;\n    const ctx = canvas.getContext('2d');\n\n    const g = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    g.play();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });