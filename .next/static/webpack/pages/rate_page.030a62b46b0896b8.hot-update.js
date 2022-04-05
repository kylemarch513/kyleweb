/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rate_page",{

/***/ "./components/suschecker.js":
/*!**********************************!*\
  !*** ./components/suschecker.js ***!
  \**********************************/
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post */ \"./components/post.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_imposter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/imposter */ \"./components/imposter.js\");\n/* harmony import */ var _components_suschecker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/suschecker */ \"./components/suschecker.js\");\n/* harmony import */ var _components_suschecker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_suschecker__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction Rating() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Messages from Tinder\"\n                }, void 0, false, {\n                    fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Kyle March\"\n                            }, void 0, false, {\n                                fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"A: 6'4, half Chinese, half American, born and raised in Amsterdam, and in the top 1.2% of ARAM players in EUW. I am a up and coming developer to be (hopefully), if my crippling League of Legends and GuildWars2 addiction don't get the better of me.\"\n                            }, void 0, false, {\n                                fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"Maike\",\n                        message: \"'Hey. Je bent echt kaulo sexy'\",\n                        stars: \"\\u2605\\u2605\\u2605\\u2605\\u2606\"\n                    }, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"Tilde\",\n                        message: \"'regret not giving you my superlike damn, you're so cute i'm taken aback'\",\n                        stars: \"\\u2605\\u2605\\u2605\\u2605\\u2605\"\n                    }, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"(also) Tilde\",\n                        message: \"'have you ever been touched by a girl? .... because you kind of seem like you haven't'\"\n                    }, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_imposter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_suschecker__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kyle/webapp/kyleweb/pages/rate_page.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = Rating;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rating);\nvar _c;\n$RefreshReg$(_c, \"Rating\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yYXRlX3BhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDYztBQUNFO0FBQ2I7QUFDc0I7QUFDRjtBQUlqRCxTQUFTTSxNQUFNLEdBQUk7SUFDZixxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNKLGtEQUFJOzBCQUNELDRFQUFDSyxPQUFLOzhCQUFDLHNCQUFvQjs7Ozs7d0JBQVE7Ozs7O29CQUNoQzswQkFDUCw4REFBQ04sMERBQU07O2tDQUNILDhEQUFDSyxLQUFHOzswQ0FDQSw4REFBQ0UsSUFBRTswQ0FBQyxZQUFVOzs7OztvQ0FBSzswQ0FDbkIsOERBQUNDLEdBQUM7MENBQUMseVBBQXVQOzs7OztvQ0FBSTs7Ozs7OzRCQUM1UDtrQ0FDTiw4REFBQ1Qsd0RBQU07d0JBQUNVLElBQUksRUFBQyxPQUFPO3dCQUFDQyxPQUFPLEVBQUMsZ0NBQWdDO3dCQUFDQyxLQUFLLEVBQUMsZ0NBQU87Ozs7OzRCQUFZO2tDQUM3RSw4REFBVFosd0RBQU07d0JBQUNVLElBQUksRUFBQyxPQUFPO3dCQUFDQyxPQUFPLEVBQUMsMkVBQTJFO3dCQUFDQyxLQUFLLEVBQUMsZ0NBQU87Ozs7OzRCQUFFO2tDQUN4SCw4REFBQ1osd0RBQU07d0JBQUNVLElBQUksRUFBQyxjQUFjO3dCQUFDQyxPQUFPLEVBQUMsd0ZBQXdGOzs7Ozs0QkFBRTtrQ0FDOUgsOERBQUNSLDREQUFjOzs7OzRCQUFHO2tDQUNsQiw4REFBQ0MsK0RBQVU7Ozs7NEJBQUc7Ozs7OztvQkFHVDs7Ozs7O1lBQ1AsQ0FFWDtDQUNGO0FBdEJRQyxLQUFBQSxNQUFNO0FBdUJmLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JhdGVfcGFnZS5qcz83MjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZXZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9zdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbXBvc3RlckJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9pbXBvc3RlclwiXG5pbXBvcnQgU3VzY2hlY2tlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zdXNjaGVja2VyXCJcblxuXG5cbmZ1bmN0aW9uIFJhdGluZyAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NZXNzYWdlcyBmcm9tIFRpbmRlcjwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5LeWxlIE1hcmNoPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+QTogNic0LCBoYWxmIENoaW5lc2UsIGhhbGYgQW1lcmljYW4sIGJvcm4gYW5kIHJhaXNlZCBpbiBBbXN0ZXJkYW0sIGFuZCBpbiB0aGUgdG9wIDEuMiUgb2YgQVJBTSBwbGF5ZXJzIGluIEVVVy4gSSBhbSBhIHVwIGFuZCBjb21pbmcgZGV2ZWxvcGVyIHRvIGJlIChob3BlZnVsbHkpLCBpZiBteSBjcmlwcGxpbmcgTGVhZ3VlIG9mIExlZ2VuZHMgYW5kIEd1aWxkV2FyczIgYWRkaWN0aW9uIGRvbid0IGdldCB0aGUgYmV0dGVyIG9mIG1lLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UmV2aWV3IG5hbWU9XCJNYWlrZVwiIG1lc3NhZ2U9XCInSGV5LiBKZSBiZW50IGVjaHQga2F1bG8gc2V4eSdcIiBzdGFycz1cIuKYheKYheKYheKYheKYhlwiLz5cbiAgICAgICAgICAgICAgICA8UmV2aWV3IG5hbWU9XCJUaWxkZVwiIG1lc3NhZ2U9XCIncmVncmV0IG5vdCBnaXZpbmcgeW91IG15IHN1cGVybGlrZSBkYW1uLCB5b3UncmUgc28gY3V0ZSBpJ20gdGFrZW4gYWJhY2snXCIgc3RhcnM9XCLimIXimIXimIXimIXimIVcIi8+XG4gICAgICAgICAgICAgICAgPFJldmlldyBuYW1lPVwiKGFsc28pIFRpbGRlXCIgbWVzc2FnZT1cIidoYXZlIHlvdSBldmVyIGJlZW4gdG91Y2hlZCBieSBhIGdpcmw/IC4uLi4gYmVjYXVzZSB5b3Uga2luZCBvZiBzZWVtIGxpa2UgeW91IGhhdmVuJ3QnXCIvPlxuICAgICAgICAgICAgICAgIDxJbXBvc3RlckJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgIDxTdXNjaGVja2VyIC8+XG5cblxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvZGl2PlxuXG4gKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFJhdGluZyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJldmlldyIsIkxheW91dCIsIkhlYWQiLCJJbXBvc3RlckJ1dHRvbiIsIlN1c2NoZWNrZXIiLCJSYXRpbmciLCJkaXYiLCJ0aXRsZSIsImgyIiwicCIsIm5hbWUiLCJtZXNzYWdlIiwic3RhcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/rate_page.js\n");

/***/ })

});