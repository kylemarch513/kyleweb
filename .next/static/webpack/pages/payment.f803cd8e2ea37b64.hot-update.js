"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/payment",{

/***/ "./components/nft.js":
/*!***************************!*\
  !*** ./components/nft.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Nft(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"review\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: props.name\n            }, void 0, false, {\n                fileName: \"/home/kyle/kyleweb/components/nft.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: props.description\n            }, void 0, false, {\n                fileName: \"/home/kyle/kyleweb/components/nft.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: props.image,\n                width: \"200\",\n                height: \"200\"\n            }, void 0, false, {\n                fileName: \"/home/kyle/kyleweb/components/nft.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: \",\n                    props.price\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kyle/kyleweb/components/nft.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: props.link,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Purchase !!\"\n                }, void 0, false, {\n                    fileName: \"/home/kyle/kyleweb/components/nft.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kyle/kyleweb/components/nft.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kyle/kyleweb/components/nft.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_c = Nft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nft);\nvar _c;\n$RefreshReg$(_c, \"Nft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25mdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEI7QUFDSztBQUUvQixTQUFTRSxHQUFHLENBQUVDLEtBQUssRUFBRTtJQUVqQixxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsUUFBUTs7MEJBQ25CLDhEQUFDQyxJQUFFOzBCQUFFSCxLQUFLLENBQUNJLElBQUk7Ozs7O29CQUFNOzBCQUNyQiw4REFBQ0MsR0FBQzswQkFBRUwsS0FBSyxDQUFDTSxXQUFXOzs7OztvQkFBSzswQkFDMUIsOERBQUNSLG1EQUFLO2dCQUFDUyxHQUFHLEVBQUlQLEtBQUssQ0FBQ1EsS0FBSztnQkFBRUMsS0FBSyxFQUFHLEtBQUs7Z0JBQUNDLE1BQU0sRUFBRyxLQUFLOzs7OztvQkFBRzswQkFDMUQsOERBQUNMLEdBQUM7O29CQUFDLFNBQU87b0JBQUNMLEtBQUssQ0FBQ1csS0FBSzs7Ozs7O29CQUFLOzBCQUMzQiw4REFBQ0MsR0FBQztnQkFBQ0MsSUFBSSxFQUFHYixLQUFLLENBQUNjLElBQUk7MEJBQ3BCLDRFQUFDQyxRQUFNOzhCQUFDLGFBQVc7Ozs7O3dCQUFTOzs7OztvQkFDeEI7Ozs7OztZQUNGLENBQ1Q7Q0FDSjtBQWJRaEIsS0FBQUEsR0FBRztBQWVaLCtEQUFlQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmZ0LmpzP2ZmNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmZ1bmN0aW9uIE5mdCAocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3XCI+XG4gICAgICAgICAgICA8aDM+e3Byb3BzLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjID0ge3Byb3BzLmltYWdlfSB3aWR0aCA9ICcyMDAnIGhlaWdodCA9ICcyMDAnIC8+XG4gICAgICAgICAgICA8cD5QcmljZToge3Byb3BzLnByaWNlfTwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9IHtwcm9wcy5saW5rfT5cbiAgICAgICAgICAgIDxidXR0b24+UHVyY2hhc2UgISE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZnQiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIk5mdCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInByaWNlIiwiYSIsImhyZWYiLCJsaW5rIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nft.js\n");

/***/ })

});