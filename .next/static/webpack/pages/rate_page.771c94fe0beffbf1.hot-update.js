"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rate_page",{

/***/ "./components/imposter.js":
/*!********************************!*\
  !*** ./components/imposter.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _suschecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suschecker */ \"./components/suschecker.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_theimposter_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/theimposter.jpg */ \"./components/theimposter.jpg\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Sus() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isSus = ref[0], setSus = ref[1];\n    var becomeSus = function() {\n        setSus(!isSus);\n        console.log(isSus);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bigButton\",\n                onClick: becomeSus,\n                children: \"Click if Sus\"\n            }, void 0, false, {\n                fileName: \"/home/kyle/webapp/kyleweb/components/imposter.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                controls: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"../components/reportingBody.mp4\"\n                }, void 0, false, {\n                    fileName: \"/home/kyle/webapp/kyleweb/components/imposter.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kyle/webapp/kyleweb/components/imposter.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kyle/webapp/kyleweb/components/imposter.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Sus, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Sus;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sus);\nvar _c;\n$RefreshReg$(_c, \"Sus\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ltcG9zdGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXNDO0FBQ0E7QUFDUjtBQUNpQjs7QUFHL0MsU0FBU0ssR0FBRyxHQUFJOztJQUNaLElBQXdCSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUDNDLEtBT2dCLEdBQVlBLEdBQWUsR0FBM0IsRUFQaEIsTUFPd0IsR0FBSUEsR0FBZSxHQUFuQjtJQUNwQixJQUFNTyxTQUFTLEdBQUcsV0FBTTtRQUNwQkQsTUFBTSxDQUFDLENBQUNELEtBQUssQ0FBQyxDQUFDO1FBQ2ZHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztLQUV0QjtJQUVELHFCQUNJLDhEQUFDSyxLQUFHOzswQkFDQSw4REFBQ0MsUUFBTTtnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7Z0JBQUNDLE9BQU8sRUFBRU4sU0FBUzswQkFBRSxjQUFZOzs7OztvQkFBUzswQkFDdkUsOERBQUNPLE9BQUs7Z0JBQUNDLFFBQVE7MEJBQ1gsNEVBQUNDLFFBQU07b0JBQUNDLEdBQUcsRUFBQyxpQ0FBaUM7Ozs7O3dCQUFHOzs7OztvQkFDNUM7Ozs7OztZQUNOLENBQ1Q7Q0FDSjtHQWhCUWIsR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBa0JaLCtEQUFnQkEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ltcG9zdGVyLmpzP2FjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHNlbGZSZXBvcnQgZnJvbSBcIi4vc3VzY2hlY2tlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBpbWcgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhlaW1wb3N0ZXIuanBnXCJcblxuXG5mdW5jdGlvbiBTdXMgKCkge1xuICAgIGNvbnN0IFtpc1N1cywgc2V0U3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBiZWNvbWVTdXMgPSAoKSA9PiB7XG4gICAgICAgIHNldFN1cyghaXNTdXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhpc1N1cyk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiaWdCdXR0b25cIiBvbkNsaWNrPXtiZWNvbWVTdXN9PkNsaWNrIGlmIFN1czwvYnV0dG9uPlxuICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzPlxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi4vY29tcG9uZW50cy9yZXBvcnRpbmdCb2R5Lm1wNFwiIC8+XG4gICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0ICBTdXNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic2VsZlJlcG9ydCIsIkltYWdlIiwiaW1nIiwiU3VzIiwiaXNTdXMiLCJzZXRTdXMiLCJiZWNvbWVTdXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImF1ZGlvIiwiY29udHJvbHMiLCJzb3VyY2UiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/imposter.js\n");

/***/ })

});