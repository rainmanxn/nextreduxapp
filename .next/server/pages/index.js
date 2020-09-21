module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/counterActions */ \"./redux/actions/counterActions.js\");\nvar _jsxFileName = \"/Users/user/Documents/developing/workPreparing/mynextredux/pages/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst App = props => {\n  const {\n    counter,\n    incrementCounter,\n    decrementCounter\n  } = props;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"button\", {\n    onClick: incrementCounter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, \"inc\"), __jsx(\"button\", {\n    onClick: decrementCounter,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"dec\"), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, counter));\n};\n\nconst mapStateToProps = state => ({\n  counter: state.counter.value\n});\n\nconst mapDispatchToProps = {\n  decrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__[\"decrementCounter\"],\n  incrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__[\"incrementCounter\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImNvdW50ZXIiLCJpbmNyZW1lbnRDb3VudGVyIiwiZGVjcmVtZW50Q291bnRlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidmFsdWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUlDLEtBQUQsSUFBVztBQUNyQixRQUFNO0FBQUVDLFdBQUY7QUFBV0Msb0JBQVg7QUFBNkJDO0FBQTdCLE1BQWtESCxLQUF4RDtBQUVBLFNBQ0UsbUVBQ0U7QUFBUSxXQUFPLEVBQUVFLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFFRTtBQUFRLFdBQU8sRUFBRUMsZ0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0YsT0FBTCxDQUhGLENBREY7QUFPRCxDQVZEOztBQVlBLE1BQU1HLGVBQWUsR0FBR0MsS0FBSyxLQUFLO0FBQ2hDSixTQUFPLEVBQUVJLEtBQUssQ0FBQ0osT0FBTixDQUFjSztBQURTLENBQUwsQ0FBN0I7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUc7QUFDekJKLGtHQUR5QjtBQUV6QkQsa0dBQWdCQTtBQUZTLENBQTNCO0FBSWVNLDBIQUFPLENBQUNKLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDUixHQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtkZWNyZW1lbnRDb3VudGVyLCBpbmNyZW1lbnRDb3VudGVyfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zJztcblxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY291bnRlciwgaW5jcmVtZW50Q291bnRlciwgZGVjcmVtZW50Q291bnRlciB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlbWVudENvdW50ZXJ9PmluYzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWNyZW1lbnRDb3VudGVyfT5kZWM8L2J1dHRvbj5cbiAgICAgIDxoMT57Y291bnRlcn08L2gxPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXIudmFsdWVcbn0pXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZGVjcmVtZW50Q291bnRlcixcbiAgaW5jcmVtZW50Q291bnRlclxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, incrementCounter, decrementCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCREMENT_COUNTER\", function() { return INCREMENT_COUNTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DECREMENT_COUNTER\", function() { return DECREMENT_COUNTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementCounter\", function() { return incrementCounter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decrementCounter\", function() { return decrementCounter; });\n//Action Types\nconst INCREMENT_COUNTER = \"INCREMENT_COUNTER\";\nconst DECREMENT_COUNTER = \"DECREMENT_COUNTER\"; //Action Creator\n\nconst incrementCounter = () => ({\n  type: INCREMENT_COUNTER\n});\nconst decrementCounter = () => ({\n  type: DECREMENT_COUNTER\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zLmpzPzkzMmMiXSwibmFtZXMiOlsiSU5DUkVNRU5UX0NPVU5URVIiLCJERUNSRU1FTlRfQ09VTlRFUiIsImluY3JlbWVudENvdW50ZXIiLCJ0eXBlIiwiZGVjcmVtZW50Q291bnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUEsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCLEMsQ0FHUDs7QUFDTyxNQUFNQyxnQkFBZ0IsR0FBRyxPQUFPO0FBQ3BDQyxNQUFJLEVBQUVIO0FBRDhCLENBQVAsQ0FBekI7QUFJQSxNQUFNSSxnQkFBZ0IsR0FBRyxPQUFPO0FBQ25DRCxNQUFJLEVBQUVGO0FBRDZCLENBQVAsQ0FBekIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJBY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9BY3Rpb24gVHlwZXNcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfQ09VTlRFUiA9IFwiSU5DUkVNRU5UX0NPVU5URVJcIjtcbmV4cG9ydCBjb25zdCBERUNSRU1FTlRfQ09VTlRFUiA9IFwiREVDUkVNRU5UX0NPVU5URVJcIjtcblxuXG4vL0FjdGlvbiBDcmVhdG9yXG5leHBvcnQgY29uc3QgaW5jcmVtZW50Q291bnRlciA9ICgpID0+ICh7XG4gICB0eXBlOiBJTkNSRU1FTlRfQ09VTlRFUlxufSk7XG5cbmV4cG9ydCBjb25zdCBkZWNyZW1lbnRDb3VudGVyID0gKCkgPT4gKHtcbiAgICB0eXBlOiBERUNSRU1FTlRfQ09VTlRFUlxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/counterActions.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ })

/******/ });