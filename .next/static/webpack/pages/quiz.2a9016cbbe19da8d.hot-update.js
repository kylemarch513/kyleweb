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

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Question */ \"./components/Question.js\");\n/* harmony import */ var _components_questionSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/questionSheet */ \"./components/questionSheet.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), quizData = ref[0], setQuizData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), answerKey = ref1[0], setAnswerKey = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=5\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, []);\n    var quizArr = quizData.map(function(obj) {\n        return obj;\n    });\n    var questionElements = quizArr.map(function(param) {\n        var incorrect_answers = param.incorrect_answers, question = param.question, type = param.type, correct_answer = param.correct_answer;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            question: decodeHtml(question),\n            type: type,\n            wrong: decodeHtml(incorrect_answers),\n            right: decodeHtml(correct_answer)\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"SBvu1kn8rK+55ooIgRl0pdUFR2U=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNFO0FBQ0c7QUFDTzs7QUFFekMsU0FBU0ssSUFBSSxHQUFHOztRQVVsQkMsVUFBVSxHQUFuQixTQUFTQSxVQUFVLENBQUNDLElBQUksRUFBRTtRQUN0QixJQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUM1Q0YsR0FBRyxDQUFDRyxTQUFTLEdBQUdKLElBQUksQ0FBQztRQUNyQixPQUFPQyxHQUFHLENBQUNJLEtBQUssQ0FBQztLQUNwQjs7SUFiRCxJQUFnQ1gsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU5oRCxRQU1tQixHQUFpQkEsR0FBWSxHQUE3QixFQU5uQixXQU1nQyxHQUFJQSxHQUFZLEdBQWhCO0lBQzVCLElBQWtDQSxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFQaEQsU0FPb0IsR0FBa0JBLElBQVUsR0FBNUIsRUFQcEIsWUFPa0MsR0FBSUEsSUFBVSxHQUFkO0lBRTlCRCxnREFBUyxDQUFDLFdBQUk7UUFDVmlCLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUM1Q0MsSUFBSSxDQUFDQyxTQUFBQSxHQUFHO21CQUFFQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDckJGLElBQUksQ0FBQ0csU0FBQUEsSUFBSTttQkFBSVAsV0FBVyxDQUFDTyxJQUFJLENBQUNDLE9BQU8sQ0FBQztTQUFBLENBQUM7S0FDM0MsRUFBQyxFQUFFLENBQUM7SUFRTCxJQUFNQyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ1csR0FBRyxDQUFDQyxTQUFBQSxHQUFHO2VBQUlBLEdBQUc7S0FBQSxDQUFDO0lBRXhDLElBQU1DLGdCQUFnQixHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQztZQUFFRyxpQkFBaUIsU0FBakJBLGlCQUFpQixFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLGNBQWMsU0FBZEEsY0FBYzs2QkFDcEYsOERBQUM1Qiw0REFBUTtZQUFDMEIsUUFBUSxFQUFFdEIsVUFBVSxDQUFDc0IsUUFBUSxDQUFDO1lBQ3hDQyxJQUFJLEVBQUVBLElBQUk7WUFDVkUsS0FBSyxFQUFFekIsVUFBVSxDQUFDcUIsaUJBQWlCLENBQUM7WUFDcENLLEtBQUssRUFBRTFCLFVBQVUsQ0FBQ3dCLGNBQWMsQ0FBQzs7Ozs7aUJBQy9CO0tBQUEsQ0FBQztJQUVQLHFCQUNJLDhEQUFDRyxLQUFHOzs7O1lBRUUsQ0FDVDtDQUNKLEVBQ0QsaUNBQWlDO0NBQ2pDLGdCQUFnQjtHQWhDUTVCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzPzZmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1ZXN0aW9uXCI7XG5pbXBvcnQgQW5zd2VyU2hlZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBRdWVzdGlvblNoZWV0IGZyb20gXCIuLi9jb21wb25lbnRzL3F1ZXN0aW9uU2hlZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeiAoKXtcbiAgICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFthbnN3ZXJLZXksIHNldEFuc3dlcktleV0gPSB1c2VTdGF0ZSgpXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD01XCIpXG4gICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRRdWl6RGF0YShkYXRhLnJlc3VsdHMpKVxuICAgIH0sW10pXG4gICAgXG4gICAgZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gICAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHF1aXpBcnIgPSBxdWl6RGF0YS5tYXAob2JqID0+IG9iailcbiBcbiAgICBjb25zdCBxdWVzdGlvbkVsZW1lbnRzID0gcXVpekFyci5tYXAoKHtpbmNvcnJlY3RfYW5zd2VycywgcXVlc3Rpb24sIHR5cGUsIGNvcnJlY3RfYW5zd2VyLCB9KSA9PiBcbiAgICAgICAgPFF1ZXN0aW9uIHF1ZXN0aW9uPXtkZWNvZGVIdG1sKHF1ZXN0aW9uKX1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgd3Jvbmc9e2RlY29kZUh0bWwoaW5jb3JyZWN0X2Fuc3dlcnMpfVxuICAgICAgICByaWdodD17ZGVjb2RlSHRtbChjb3JyZWN0X2Fuc3dlcil9XG4gICAgICAgIC8+KVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbi8vIGVhY2ggcXVlc3Rpb24gYXMgb3duIGNvbXBlbmVudFxuLy9idXR0b25zIHdpdGhpbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlF1ZXN0aW9uIiwiQW5zd2VyU2hlZXQiLCJRdWVzdGlvblNoZWV0IiwiUXVpeiIsImRlY29kZUh0bWwiLCJodG1sIiwidHh0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidmFsdWUiLCJxdWl6RGF0YSIsInNldFF1aXpEYXRhIiwiYW5zd2VyS2V5Iiwic2V0QW5zd2VyS2V5IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwicXVpekFyciIsIm1hcCIsIm9iaiIsInF1ZXN0aW9uRWxlbWVudHMiLCJpbmNvcnJlY3RfYW5zd2VycyIsInF1ZXN0aW9uIiwidHlwZSIsImNvcnJlY3RfYW5zd2VyIiwid3JvbmciLCJyaWdodCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});