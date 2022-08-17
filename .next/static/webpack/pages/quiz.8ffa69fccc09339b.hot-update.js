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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Question; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizButton */ \"./components/QuizButton.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Question(props) {\n    var _this = this;\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    var shuffle = function shuffle(array) {\n        var currentIndex = array.length, randomIndex;\n        // While there remain elements to shuffle.\n        while(currentIndex != 0){\n            // Pick a remaining element.\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            var ref;\n            ref = [\n                array[randomIndex],\n                array[currentIndex]\n            ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n        }\n        return array;\n    };\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), quizData = ref2[0], setQuizData = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), pressed = ref1[0], isPressed = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=5\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, []);\n    var wrongAnswers = quizData[0].incorrect.split(\",\");\n    var answers = [\n        {\n            submition: quizData[0].correct_answer,\n            correct: true\n        },\n        {\n            submition: wrongAnswers[0],\n            correct: false\n        },\n        {\n            submition: wrongAnswers[1],\n            correct: false\n        },\n        {\n            submition: wrongAnswers[2],\n            correct: false\n        }, \n    ];\n    var handleClick = function(e) {\n        console.log(e.target.value);\n    };\n    var ranAnswers = shuffle(answers).filter(function(obj) {\n        return obj.submition;\n    });\n    var buttonElements = ranAnswers.map(function(param) {\n        var correct = param.correct, submition = param.submition;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            func: handleClick,\n            value: correct,\n            text: submition\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 53,\n            columnNumber: 68\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: quizData[0].question\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: buttonElements\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 60,\n                    columnNumber: 18\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n};\n_s(Question, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = Question;\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLFNBQVBBLE9BQU8sRUFBRUYsU0FBUyxTQUFUQSxTQUFTOzZCQUFLLDhEQUFDaEMsOERBQVU7WUFBQzZDLElBQUksRUFBRVYsV0FBVztZQUFFMUIsS0FBSyxFQUFFeUIsT0FBTztZQUFFWSxJQUFJLEVBQUVkLFNBQVM7Ozs7O2lCQUFHO0tBQUEsQ0FBQztJQUdqSSxxQkFDSSw4REFBQ2UsS0FBRztrQkFDQSw0RUFBQ0EsS0FBRzs7OEJBQ0EsOERBQUNDLElBQUU7OEJBQUU5QixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMrQixRQUFROzs7Ozt3QkFBTTs4QkFDOUIsOERBQUNGLEtBQUc7OEJBQ0FKLGNBQWM7Ozs7O3dCQUNiOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0osQ0FDVDtDQUNKO0dBOUR1QjFDLFFBQVE7QUFBUkEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzPzZmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBRdWl6QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1aXpCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlc3Rpb24gKHByb3BzKSB7XG4gICAgY29uc3QgW3F1aXpEYXRhLCBzZXRRdWl6RGF0YV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbcHJlc3NlZCwgaXNQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgIGZ1bmN0aW9uIGRlY29kZUh0bWwoaHRtbCkge1xuICAgICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0eHQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIHR4dC52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD01XCIpXG4gICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRRdWl6RGF0YShkYXRhLnJlc3VsdHMpKVxuICAgIH0sW10pXG5cbiAgICBjb25zdCB3cm9uZ0Fuc3dlcnMgPSBxdWl6RGF0YVswXS5pbmNvcnJlY3Quc3BsaXQoXCIsXCIpXG5cbiAgICBjb25zdCBhbnN3ZXJzID0gW1xuICAgICAgICB7c3VibWl0aW9uOnF1aXpEYXRhWzBdLmNvcnJlY3RfYW5zd2VyLCBjb3JyZWN0OnRydWUsfSxcbiAgICAgICAge3N1Ym1pdGlvbjp3cm9uZ0Fuc3dlcnNbMF0sIGNvcnJlY3Q6ZmFsc2V9LFxuICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1sxXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzJdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICBdXG4gICAgXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLlxuICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9IDApIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50LlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4LS07XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIFthcnJheVtjdXJyZW50SW5kZXhdLCBhcnJheVtyYW5kb21JbmRleF1dID0gW1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXTtcbiAgICAgICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByYW5BbnN3ZXJzID0gc2h1ZmZsZShhbnN3ZXJzKS5maWx0ZXIob2JqID0+IG9iai5zdWJtaXRpb24pXG5cbiAgICBjb25zdCBidXR0b25FbGVtZW50cyA9IHJhbkFuc3dlcnMubWFwKCh7Y29ycmVjdCwgc3VibWl0aW9ufSk9PiA8UXVpekJ1dHRvbiBmdW5jPXtoYW5kbGVDbGlja30gdmFsdWU9e2NvcnJlY3R9IHRleHQ9e3N1Ym1pdGlvbn0vPilcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoND57cXVpekRhdGFbMF0ucXVlc3Rpb259PC9oND5cbiAgICAgICAgICAgICAgICB7PGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvbkVsZW1lbnRzfVxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUXVpekJ1dHRvbiIsIlF1ZXN0aW9uIiwicHJvcHMiLCJkZWNvZGVIdG1sIiwiaHRtbCIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZhbHVlIiwic2h1ZmZsZSIsImFycmF5IiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJxdWl6RGF0YSIsInNldFF1aXpEYXRhIiwicHJlc3NlZCIsImlzUHJlc3NlZCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzdWx0cyIsIndyb25nQW5zd2VycyIsImluY29ycmVjdCIsInNwbGl0IiwiYW5zd2VycyIsInN1Ym1pdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiY29ycmVjdCIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJyYW5BbnN3ZXJzIiwiZmlsdGVyIiwib2JqIiwiYnV0dG9uRWxlbWVudHMiLCJtYXAiLCJmdW5jIiwidGV4dCIsImRpdiIsImg0IiwicXVlc3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});