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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Amongus(props) {\n    var showImposter = function showImposter() {\n        setImposter(!isImposter);\n        randomName();\n    };\n    var randomName = function randomName() {\n        if (isImposter) {\n            window.open(\"https://www.youtube.com/watch?v=9WX97X4MN6s\");\n        } else {\n            console.log(\"false\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isImposter = ref[0], setImposter = ref[1];\n    var handleClick = function() {\n        return showImposter();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: props.text\n            }, void 0, false, {\n                fileName: \"/home/kyle/webapp/kyleweb/components/imposter.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                children: [\n                    \"Sus Satus \",\n                    isImposter\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kyle/webapp/kyleweb/components/imposter.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kyle/webapp/kyleweb/components/imposter.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Amongus, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = Amongus;\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Amongus);\nvar _c;\n$RefreshReg$(_c, \"Amongus\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ltcG9zdGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBc0M7O0FBS3RDLFNBQVNFLE9BQU8sQ0FBRUMsS0FBSyxFQUFFO1FBSVpDLFlBQVksR0FBckIsU0FBU0EsWUFBWSxHQUFJO1FBQ3JCQyxXQUFXLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7UUFDekJDLFVBQVUsRUFBRyxDQUFDO0tBRWpCO1FBQ1FBLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxHQUFJO1FBQ25CLElBQUlELFVBQVUsRUFBRTtZQUNaRSxNQUFNLENBQUNDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQzlELE1BQU07WUFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7S0FDSjs7SUFkRCxJQUFrQ1YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFFLElBQUksQ0FBQyxFQU5yRCxVQU1xQixHQUFpQkEsR0FBZSxHQUFoQyxFQU5yQixXQU1rQyxHQUFJQSxHQUFlLEdBQW5CO0lBQzlCLElBQU1XLFdBQVcsR0FBRztlQUFNUixZQUFZLEVBQUc7S0FBQTtJQWV6QyxxQkFDSSw4REFBQ1MsS0FBRzs7MEJBQ0EsOERBQUNDLFFBQU07Z0JBQ1BDLE9BQU8sRUFBRUgsV0FBVzswQkFDZlQsS0FBSyxDQUFDYSxJQUFJOzs7OztvQkFDTjswQkFDVCw4REFBQ0MsSUFBRTs7b0JBQUMsWUFDVTtvQkFBQ1gsVUFBVTs7Ozs7O29CQUNwQjs7Ozs7O1lBQ0gsQ0FDVDtDQUNKO0dBNUJRSixPQUFPO0FBQVBBLEtBQUFBLE9BQU87O0FBZ0NoQiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ltcG9zdGVyLmpzP2FjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuXG5mdW5jdGlvbiBBbW9uZ3VzIChwcm9wcykge1xuICAgIGNvbnN0IFtpc0ltcG9zdGVyLCBzZXRJbXBvc3Rlcl0gPSB1c2VTdGF0ZSAodHJ1ZSlcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHNob3dJbXBvc3RlciAoKVxuXG4gICAgZnVuY3Rpb24gc2hvd0ltcG9zdGVyICgpIHtcbiAgICAgICAgc2V0SW1wb3N0ZXIoIWlzSW1wb3N0ZXIpO1xuICAgICAgICByYW5kb21OYW1lICgpO1xuICAgICAgICBcbiAgICB9XG4gICAgZnVuY3Rpb24gcmFuZG9tTmFtZSAoKSB7XG4gICAgICAgIGlmIChpc0ltcG9zdGVyKSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OVdYOTdYNE1ONnNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgIH0gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgU3VzIFNhdHVzIHtpc0ltcG9zdGVyfVxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEFtb25ndXMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFtb25ndXMiLCJwcm9wcyIsInNob3dJbXBvc3RlciIsInNldEltcG9zdGVyIiwiaXNJbXBvc3RlciIsInJhbmRvbU5hbWUiLCJ3aW5kb3ciLCJvcGVuIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInRleHQiLCJoNiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/imposter.js\n");

/***/ })

});