"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/waifu",{

/***/ "./components/refetchapi.js":
/*!**********************************!*\
  !*** ./components/refetchapi.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//refetch\n\nvar _s = $RefreshSig$();\nfunction reFetch(url) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), data = ref1[0], setData = ref1[1];\n    var fetchApi = function() {\n        fetch(url).then(function(response) {\n            return response.json();\n        }).then(function(json) {\n            console.log(json);\n            setLoading(false);\n            setData(json);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetchApi();\n    }, []);\n    return {\n        loading: loading,\n        data: data\n    };\n}\n_s(reFetch, \"sLTXYAAYhGrQ2P9NR4RD88pmiWY=\");\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (reFetch);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZmV0Y2hhcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUztBQUN1Qzs7QUFFaEQsU0FBU0csT0FBTyxDQUFFQyxHQUFHLEVBQUU7O0lBQ25CLElBQThCSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBSmhELE9BSWtCLEdBQWdCQSxHQUFjLEdBQTlCLEVBSmxCLFVBSThCLEdBQUlBLEdBQWMsR0FBbEI7SUFDMUIsSUFBd0JBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFMMUMsSUFLZSxHQUFhQSxJQUFjLEdBQTNCLEVBTGYsT0FLd0IsR0FBSUEsSUFBYyxHQUFsQjtJQUVwQixJQUFNUSxRQUFRLEdBQUcsV0FBTTtRQUNuQkMsS0FBSyxDQUFDTixHQUFHLENBQUMsQ0FDVE8sSUFBSSxDQUFDQyxTQUFBQSxRQUFRLEVBQUk7WUFDZCxPQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtTQUN6QixDQUFDLENBQ0RGLElBQUksQ0FBQ0UsU0FBQUEsSUFBSSxFQUFJO1lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7WUFDakJQLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakJFLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDO1NBQ2hCLENBQUM7S0FDTDtJQUVEWCxnREFBUyxDQUFDLFdBQUs7UUFDWE8sUUFBUSxFQUFFLENBQUM7S0FDZCxFQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRU4sT0FBTztRQUFFSixPQUFPLEVBQVBBLE9BQU87UUFBRUUsSUFBSSxFQUFKQSxJQUFJO0tBQUU7Q0FDM0I7R0FyQlFKLE9BQU87O0FBdUJoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVmZXRjaGFwaS5qcz9lNzlhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vcmVmZXRjaFxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIHJlRmV0Y2ggKHVybCkge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGZldGNoQXBpID0gKCkgPT4ge1xuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIHNldERhdGEoanNvbilcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBmZXRjaEFwaSgpO1xuICAgIH0sW10pO1xuXG4gICAgcmV0dXJuIHsgbG9hZGluZywgZGF0YSB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZUZldGNoOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicmVGZXRjaCIsInVybCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaEFwaSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/refetchapi.js\n");

/***/ })

});