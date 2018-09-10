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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/cels4/Desktop/hrsf102-reviews-service/.babelrc: Error while parsing config - Unexpected EOF at line 6 column 5 of the JSON5 data. Still to read: \\\"\\\"\\n    at error (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/json5/lib/json5.js:56:25)\\n    at word (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/json5/lib/json5.js:393:13)\\n    at value (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/json5/lib/json5.js:493:56)\\n    at Object.parse (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/json5/lib/json5.js:508:18)\\n    at readConfigJSON5 (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/files/configuration.js:230:31)\\n    at /Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/files/utils.js:29:12\\n    at cachedFunction (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/caching.js:33:19)\\n    at readConfig (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/files/configuration.js:158:8)\\n    at config.reduce (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/files/configuration.js:87:24)\\n    at Array.reduce (<anonymous>)\\n    at findRelativeConfig (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/files/configuration.js:84:56)\\n    at buildRootChain (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/config-chain.js:111:39)\\n    at loadPrivatePartialConfig (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/partial.js:57:55)\\n    at Object.loadPartialConfig (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/@babel/core/lib/config/partial.js:82:18)\\n    at Object.<anonymous> (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/babel-loader/lib/index.js:105:26)\\n    at Generator.next (<anonymous>)\\n    at step (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/babel-loader/lib/index.js:3:221)\\n    at _next (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/babel-loader/lib/index.js:3:409)\\n    at /Users/cels4/Desktop/hrsf102-reviews-service/node_modules/babel-loader/lib/index.js:3:477\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/babel-loader/lib/index.js:3:97)\\n    at Object.loader (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/babel-loader/lib/index.js:50:18)\\n    at Object.<anonymous> (/Users/cels4/Desktop/hrsf102-reviews-service/node_modules/babel-loader/lib/index.js:45:12)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvaW5kZXguanN4LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/index.jsx\n");

/***/ })

/******/ });