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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Question */ \"./components/Question.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n//import QuestionSheet from \"../components/questionSheet\";\nfunction Quiz() {\n    var _this = this;\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), quizData = ref[0], setQuizData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), pressed = ref1[0], isPressed = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=5\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, []);\n    var quizArr = quizData.map(function(obj) {\n        return obj;\n    });\n    var questionElements = quizData.map(function(param) {\n        var incorrect_answers = param.incorrect_answers, question = param.question, type = param.type, correct_answer = param.correct_answer, i = param.i;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            question: decodeHtml(question),\n            type: type,\n            wrong: decodeHtml(incorrect_answers),\n            right: decodeHtml(correct_answer)\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: questionElements\n    }, void 0, false, {\n        fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ0U7QUFDRzs7QUFDakQsMERBQTBEO0FBRTNDLFNBQVNJLElBQUksR0FBRzs7UUFVbEJDLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxDQUFDQyxJQUFJLEVBQUU7UUFDdEIsSUFBSUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDNUNGLEdBQUcsQ0FBQ0csU0FBUyxHQUFHSixJQUFJLENBQUM7UUFDckIsT0FBT0MsR0FBRyxDQUFDSSxLQUFLLENBQUM7S0FDcEI7O0lBYkQsSUFBZ0NWLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFOaEQsUUFNbUIsR0FBaUJBLEdBQVksR0FBN0IsRUFObkIsV0FNZ0MsR0FBSUEsR0FBWSxHQUFoQjtJQUM1QixJQUE2QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVBoRCxPQU9rQixHQUFlQSxJQUFlLEdBQTlCLEVBUGxCLFNBTzZCLEdBQUlBLElBQWUsR0FBbkI7SUFFekJELGdEQUFTLENBQUMsV0FBSTtRQUNWZ0IsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQzVDQyxJQUFJLENBQUNDLFNBQUFBLEdBQUc7bUJBQUVBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUNyQkYsSUFBSSxDQUFDRyxTQUFBQSxJQUFJO21CQUFJUCxXQUFXLENBQUNPLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1NBQUEsQ0FBQztLQUMzQyxFQUFDLEVBQUUsQ0FBQztJQVNMLElBQU1DLE9BQU8sR0FBR1YsUUFBUSxDQUFDVyxHQUFHLENBQUNDLFNBQUFBLEdBQUc7ZUFBSUEsR0FBRztLQUFBLENBQUM7SUFFeEMsSUFBTUMsZ0JBQWdCLEdBQUdiLFFBQVEsQ0FBQ1csR0FBRyxDQUFDO1lBQUVHLGlCQUFpQixTQUFqQkEsaUJBQWlCLEVBQUVDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsY0FBYyxTQUFkQSxjQUFjLEVBQUVDLENBQUMsU0FBREEsQ0FBQzs2QkFDeEYsOERBQUM1Qiw0REFBUTtZQUFDeUIsUUFBUSxFQUFFdEIsVUFBVSxDQUFDc0IsUUFBUSxDQUFDO1lBQ3hDQyxJQUFJLEVBQUVBLElBQUk7WUFDVkcsS0FBSyxFQUFFMUIsVUFBVSxDQUFDcUIsaUJBQWlCLENBQUM7WUFDcENNLEtBQUssRUFBRTNCLFVBQVUsQ0FBQ3dCLGNBQWMsQ0FBQzs7Ozs7aUJBQy9CO0tBQUEsQ0FBQztJQUVQLHFCQUNJLDhEQUFDSSxLQUFHO2tCQUNDUixnQkFBZ0I7Ozs7O1lBQ2YsQ0FDVDtDQUNKLEVBQ0QsaUNBQWlDO0NBQ2pDLGdCQUFnQjtHQWpDUXJCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzPzZmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1ZXN0aW9uXCI7XG5pbXBvcnQgQW5zd2VyU2hlZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbi8vaW1wb3J0IFF1ZXN0aW9uU2hlZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcXVlc3Rpb25TaGVldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6ICgpe1xuICAgIGNvbnN0IFtxdWl6RGF0YSwgc2V0UXVpekRhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3ByZXNzZWQsIGlzUHJlc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZmV0Y2goXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTVcIilcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHNldFF1aXpEYXRhKGRhdGEucmVzdWx0cykpXG4gICAgfSxbXSlcbiAgICBcbiAgICBmdW5jdGlvbiBkZWNvZGVIdG1sKGh0bWwpIHtcbiAgICAgICAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdHh0LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiB0eHQudmFsdWU7XG4gICAgfVxuXG5cbiAgICBjb25zdCBxdWl6QXJyID0gcXVpekRhdGEubWFwKG9iaiA9PiBvYmopXG4gXG4gICAgY29uc3QgcXVlc3Rpb25FbGVtZW50cyA9IHF1aXpEYXRhLm1hcCgoe2luY29ycmVjdF9hbnN3ZXJzLCBxdWVzdGlvbiwgdHlwZSwgY29ycmVjdF9hbnN3ZXIsIGl9KSA9PiBcbiAgICAgICAgPFF1ZXN0aW9uIHF1ZXN0aW9uPXtkZWNvZGVIdG1sKHF1ZXN0aW9uKX1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgd3Jvbmc9e2RlY29kZUh0bWwoaW5jb3JyZWN0X2Fuc3dlcnMpfVxuICAgICAgICByaWdodD17ZGVjb2RlSHRtbChjb3JyZWN0X2Fuc3dlcil9XG4gICAgICAgIC8+KVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3F1ZXN0aW9uRWxlbWVudHN9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbi8vIGVhY2ggcXVlc3Rpb24gYXMgb3duIGNvbXBlbmVudFxuLy9idXR0b25zIHdpdGhpbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlF1ZXN0aW9uIiwiQW5zd2VyU2hlZXQiLCJRdWl6IiwiZGVjb2RlSHRtbCIsImh0bWwiLCJ0eHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsInF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJwcmVzc2VkIiwiaXNQcmVzc2VkIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwicXVpekFyciIsIm1hcCIsIm9iaiIsInF1ZXN0aW9uRWxlbWVudHMiLCJpbmNvcnJlY3RfYW5zd2VycyIsInF1ZXN0aW9uIiwidHlwZSIsImNvcnJlY3RfYW5zd2VyIiwiaSIsIndyb25nIiwicmlnaHQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});