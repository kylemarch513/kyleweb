"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz",{

/***/ "./components/questionSheet.js":
/*!*************************************!*\
  !*** ./components/questionSheet.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuestionSheet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction QuestionSheet(props) {\n    var _this = this;\n    var decodeHtml = // const style = {\n    //     backgrounColor: isPressed? \"blue\" : \"white\"\n    // }\n    function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    var arr = props.wrongAnswer;\n    var randomNum = Math.floor(Math.random() * arr.length);\n    var x = props.answer;\n    arr.splice(randomNum, 0, x);\n    console.log(arr);\n    console.log(arr);\n    var handleClick = function() {\n        console.log(function(e) {\n            return e.target.id;\n        });\n        console.log(\"logged\");\n    };\n    var buttons = arr.map(function(answers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            id: answers,\n            handleClick: handleClick,\n            children: decodeHtml(answers)\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/components/questionSheet.js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: decodeHtml(props.question)\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/components/questionSheet.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            buttons\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kylemarch/dev/kyleweb/components/questionSheet.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}; // question\n // buttons with answers\n // readable variable that is equal to selected button\n_c = QuestionSheet;\nvar _c;\n$RefreshReg$(_c, \"QuestionSheet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3F1ZXN0aW9uU2hlZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxhQUFhLENBQUVDLEtBQUssRUFBRTs7UUFNakNDLFVBQVUsR0FKbkIsa0JBQWtCO0lBQ2xCLGtEQUFrRDtJQUNsRCxJQUFJO0lBRUosU0FBU0EsVUFBVSxDQUFDQyxJQUFJLEVBQUU7UUFDdEIsSUFBSUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDNUNGLEdBQUcsQ0FBQ0csU0FBUyxHQUFHSixJQUFJLENBQUM7UUFDckIsT0FBT0MsR0FBRyxDQUFDSSxLQUFLLENBQUM7S0FDcEI7SUFDRCxJQUFNQyxHQUFHLEdBQUlSLEtBQUssQ0FBQ1MsV0FBVztJQUM5QixJQUFNQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFDTCxHQUFHLENBQUNNLE1BQU0sQ0FBQztJQUN0RCxJQUFNQyxDQUFDLEdBQUdmLEtBQUssQ0FBQ2dCLE1BQU07SUFDdEJSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDUCxTQUFTLEVBQUUsQ0FBQyxFQUFFSyxDQUFDLENBQUM7SUFDM0JHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxHQUFHLENBQUM7SUFFaEJVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxHQUFHLENBQUM7SUFDaEIsSUFBTVksV0FBVyxHQUFHLFdBQU07UUFDdEJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQUNFLENBQUM7bUJBQUdBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFO1NBQUEsQ0FBQztRQUM3QkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0tBQ3hCO0lBR0QsSUFBTUssT0FBTyxHQUFHaEIsR0FBRyxDQUFDaUIsR0FBRyxDQUFDQyxTQUFBQSxPQUFPOzZCQUMzQiw4REFBQ0MsUUFBTTtZQUFDSixFQUFFLEVBQUVHLE9BQU87WUFBRU4sV0FBVyxFQUFFQSxXQUFXO3NCQUFHbkIsVUFBVSxDQUFDeUIsT0FBTyxDQUFDOzs7OztpQkFBVTtLQUNoRixDQUFDO0lBR0YscUJBQ0ksOERBQUNFLEtBQUc7OzBCQUNKLDhEQUFDQyxJQUFFOzBCQUFFNUIsVUFBVSxDQUFDRCxLQUFLLENBQUM4QixRQUFRLENBQUM7Ozs7O29CQUFNO1lBQ3BDTixPQUFPOzs7Ozs7WUFDRixDQUNUO0NBRUosRUFFRCxXQUFXO0NBQ1gsdUJBQXVCO0NBQ3ZCLHFEQUFxRDtBQXhDN0J6QixLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcXVlc3Rpb25TaGVldC5qcz8wOTU3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1ZXN0aW9uU2hlZXQgKHByb3BzKSB7XG5cbiAgICAvLyBjb25zdCBzdHlsZSA9IHtcbiAgICAvLyAgICAgYmFja2dyb3VuQ29sb3I6IGlzUHJlc3NlZD8gXCJibHVlXCIgOiBcIndoaXRlXCJcbiAgICAvLyB9XG4gICAgXG4gICAgZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gICAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBhcnIgPSAocHJvcHMud3JvbmdBbnN3ZXIpXG4gICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmFyci5sZW5ndGgpXG4gICAgY29uc3QgeCA9IHByb3BzLmFuc3dlclxuICAgIGFyci5zcGxpY2UocmFuZG9tTnVtLCAwLCB4KVxuICAgIGNvbnNvbGUubG9nKGFycilcblxuICAgIGNvbnNvbGUubG9nKGFycilcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coKGUpPT5lLnRhcmdldC5pZClcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dnZWRcIilcbiAgICB9XG5cblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBhcnIubWFwKGFuc3dlcnMgPT4gKFxuICAgICAgICA8YnV0dG9uIGlkPXthbnN3ZXJzfSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9PntkZWNvZGVIdG1sKGFuc3dlcnMpfTwvYnV0dG9uPlxuICAgICkpXG4gICAgICAgIFxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGg0PntkZWNvZGVIdG1sKHByb3BzLnF1ZXN0aW9uKX08L2g0PlxuICAgICAgICB7YnV0dG9uc31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cbi8vIHF1ZXN0aW9uXG4vLyBidXR0b25zIHdpdGggYW5zd2Vyc1xuLy8gcmVhZGFibGUgdmFyaWFibGUgdGhhdCBpcyBlcXVhbCB0byBzZWxlY3RlZCBidXR0b25cbiJdLCJuYW1lcyI6WyJRdWVzdGlvblNoZWV0IiwicHJvcHMiLCJkZWNvZGVIdG1sIiwiaHRtbCIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZhbHVlIiwiYXJyIiwid3JvbmdBbnN3ZXIiLCJyYW5kb21OdW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJ4IiwiYW5zd2VyIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsImlkIiwiYnV0dG9ucyIsIm1hcCIsImFuc3dlcnMiLCJidXR0b24iLCJkaXYiLCJoNCIsInF1ZXN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/questionSheet.js\n");

/***/ })

});