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
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/rate_page.js":
/*!****************************!*\
  !*** ./pages/rate_page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post */ \"./components/post.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_imposter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/imposter */ \"./components/imposter.js\");\n/* harmony import */ var _components_imposter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_imposter__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Rating() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Messages from Tinder\"\n                }, void 0, false, {\n                    fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Kyle March\"\n                            }, void 0, false, {\n                                fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                                lineNumber: 17,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"A: 6'4, half Chinese, half American, born and raised in Amsterdam, and in the top 1.2% of ARAM players in EUW. I am a up and coming developer to be (hopefully), if my crippling League of Legends and GuildWars2 addiction don't get the better of me.\"\n                            }, void 0, false, {\n                                fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"Maike\",\n                        message: \"'Hey. Je bent echt kaulo sexy'\",\n                        stars: \"\\u2605\\u2605\\u2605\\u2605\\u2606\"\n                    }, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"Tilde\",\n                        message: \"'regret not giving you my superlike damn, you're so cute i'm taken aback'\",\n                        stars: \"\\u2605\\u2605\\u2605\\u2605\\u2605\"\n                    }, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"(also) Tilde\",\n                        message: \"'have you ever been touched by a girl? .... because you kind of seem like you haven't'\"\n                    }, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_imposter__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Rating;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rating);\nvar _c;\n$RefreshReg$(_c, \"Rating\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yYXRlX3BhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNjO0FBQ0U7QUFDYjtBQUNzQjtBQUluRCxTQUFTSyxNQUFNLEdBQUk7SUFDZixxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNILGtEQUFJOzBCQUNELDRFQUFDSSxPQUFLOzhCQUFDLHNCQUFvQjs7Ozs7d0JBQVE7Ozs7O29CQUNoQzswQkFDUCw4REFBQ0wsMERBQU07O2tDQUNILDhEQUFDSSxLQUFHOzswQ0FDQSw4REFBQ0UsSUFBRTswQ0FBQyxZQUFVOzs7OztvQ0FBSzswQ0FDbkIsOERBQUNDLEdBQUM7MENBQUMseVBBQXVQOzs7OztvQ0FBSTs7Ozs7OzRCQUM1UDtrQ0FDTiw4REFBQ1Isd0RBQU07d0JBQUNTLElBQUksRUFBQyxPQUFPO3dCQUFDQyxPQUFPLEVBQUMsZ0NBQWdDO3dCQUFDQyxLQUFLLEVBQUMsZ0NBQU87Ozs7OzRCQUFZO2tDQUM3RSw4REFBVFgsd0RBQU07d0JBQUNTLElBQUksRUFBQyxPQUFPO3dCQUFDQyxPQUFPLEVBQUMsMkVBQTJFO3dCQUFDQyxLQUFLLEVBQUMsZ0NBQU87Ozs7OzRCQUFFO2tDQUN4SCw4REFBQ1gsd0RBQU07d0JBQUNTLElBQUksRUFBQyxjQUFjO3dCQUFDQyxPQUFPLEVBQUMsd0ZBQXdGOzs7Ozs0QkFBRTtrQ0FDOUgsOERBQUNQLDZEQUFjOzs7OzRCQUFHOzs7Ozs7b0JBR2I7Ozs7OztZQUNQLENBRVg7Q0FDRjtBQXJCUUMsS0FBQUEsTUFBTTtBQXNCZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yYXRlX3BhZ2UuanM/NzI0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmV2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL3Bvc3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1wb3N0ZXJCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW1wb3N0ZXJcIlxuXG5cblxuZnVuY3Rpb24gUmF0aW5nICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPk1lc3NhZ2VzIGZyb20gVGluZGVyPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkt5bGUgTWFyY2g8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD5BOiA2JzQsIGhhbGYgQ2hpbmVzZSwgaGFsZiBBbWVyaWNhbiwgYm9ybiBhbmQgcmFpc2VkIGluIEFtc3RlcmRhbSwgYW5kIGluIHRoZSB0b3AgMS4yJSBvZiBBUkFNIHBsYXllcnMgaW4gRVVXLiBJIGFtIGEgdXAgYW5kIGNvbWluZyBkZXZlbG9wZXIgdG8gYmUgKGhvcGVmdWxseSksIGlmIG15IGNyaXBwbGluZyBMZWFndWUgb2YgTGVnZW5kcyBhbmQgR3VpbGRXYXJzMiBhZGRpY3Rpb24gZG9uJ3QgZ2V0IHRoZSBiZXR0ZXIgb2YgbWUuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxSZXZpZXcgbmFtZT1cIk1haWtlXCIgbWVzc2FnZT1cIidIZXkuIEplIGJlbnQgZWNodCBrYXVsbyBzZXh5J1wiIHN0YXJzPVwi4piF4piF4piF4piF4piGXCIvPlxuICAgICAgICAgICAgICAgIDxSZXZpZXcgbmFtZT1cIlRpbGRlXCIgbWVzc2FnZT1cIidyZWdyZXQgbm90IGdpdmluZyB5b3UgbXkgc3VwZXJsaWtlIGRhbW4sIHlvdSdyZSBzbyBjdXRlIGknbSB0YWtlbiBhYmFjaydcIiBzdGFycz1cIuKYheKYheKYheKYheKYhVwiLz5cbiAgICAgICAgICAgICAgICA8UmV2aWV3IG5hbWU9XCIoYWxzbykgVGlsZGVcIiBtZXNzYWdlPVwiJ2hhdmUgeW91IGV2ZXIgYmVlbiB0b3VjaGVkIGJ5IGEgZ2lybD8gLi4uLiBiZWNhdXNlIHlvdSBraW5kIG9mIHNlZW0gbGlrZSB5b3UgaGF2ZW4ndCdcIi8+XG4gICAgICAgICAgICAgICAgPEltcG9zdGVyQnV0dG9uIC8+XG5cblxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvZGl2PlxuXG4gKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJhdGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJldmlldyIsIkxheW91dCIsIkhlYWQiLCJJbXBvc3RlckJ1dHRvbiIsIlJhdGluZyIsImRpdiIsInRpdGxlIiwiaDIiLCJwIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/rate_page.js\n");

/***/ })

});