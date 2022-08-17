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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Question; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizButton */ \"./components/QuizButton.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Question(props) {\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    _s();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), quizData = ref2[0], setQuizData = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), pressed = ref1[0], isPressed = ref1[1];\n    console.log(quizData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=5\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, []);\n    if (quizData != []) {\n        var _this = this;\n        var shuffle = function shuffle(array) {\n            var currentIndex = array.length, randomIndex;\n            // While there remain elements to shuffle.\n            while(currentIndex != 0){\n                // Pick a remaining element.\n                randomIndex = Math.floor(Math.random() * currentIndex);\n                currentIndex--;\n                var ref;\n                ref = [\n                    array[randomIndex],\n                    array[currentIndex]\n                ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n            }\n            return array;\n        };\n        var wrongAnswers = quizData[0].incorrect_answers.split(\",\");\n        var answers = [\n            {\n                submition: quizData[0].correct_answer,\n                correct: true\n            },\n            {\n                submition: wrongAnswers[0],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[1],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[2],\n                correct: false\n            }, \n        ];\n        var handleClick = function(e) {\n            console.log(e.target.value);\n        };\n        var ranAnswers = shuffle(answers).filter(function(obj) {\n            return obj.submition;\n        });\n        var _$buttonElements = ranAnswers.map(function(param) {\n            var correct = param.correct, submition = param.submition;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                func: handleClick,\n                value: correct,\n                text: submition\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 54,\n                columnNumber: 68\n            }, _this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: quizData[0].question\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: buttonElements\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 61,\n                    columnNumber: 18\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n};\n_s(Question, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = Question;\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFHO21CQUFJQSxHQUFHLENBQUNSLFNBQVM7U0FBQSxDQUFDO1FBRWhFLElBQU1TLGdCQUFjLEdBQUdILFVBQVUsQ0FBQ0ksR0FBRyxDQUFDO2dCQUFFUixPQUFPLFNBQVBBLE9BQU8sRUFBRUYsU0FBUyxTQUFUQSxTQUFTO2lDQUFLLDhEQUFDbEMsOERBQVU7Z0JBQUM2QyxJQUFJLEVBQUVSLFdBQVc7Z0JBQUU1QixLQUFLLEVBQUUyQixPQUFPO2dCQUFFVSxJQUFJLEVBQUVaLFNBQVM7Ozs7O3FCQUFHO1NBQUEsQ0FBQztLQUNwSTtJQUVHLHFCQUNJLDhEQUFDYSxLQUFHO2tCQUNBLDRFQUFDQSxLQUFHOzs4QkFDQSw4REFBQ0MsSUFBRTs4QkFBRXRDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3VDLFFBQVE7Ozs7O3dCQUFNOzhCQUM5Qiw4REFBQ0YsS0FBRzs4QkFDQUosY0FBYzs7Ozs7d0JBQ2I7Ozs7OztnQkFDSjs7Ozs7WUFDSixDQUNUO0NBQ0o7R0EvRHVCMUMsUUFBUTtBQUFSQSxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXouanM/NmYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFF1aXpCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVpekJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWVzdGlvbiAocHJvcHMpIHtcbiAgICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtwcmVzc2VkLCBpc1ByZXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICAgZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gICAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhxdWl6RGF0YSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZmV0Y2goXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTVcIilcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHNldFF1aXpEYXRhKGRhdGEucmVzdWx0cykpXG4gICAgfSxbXSlcbmlmKHF1aXpEYXRhICE9IFtdKVxueyAgICBjb25zdCB3cm9uZ0Fuc3dlcnMgPSBxdWl6RGF0YVswXS5pbmNvcnJlY3RfYW5zd2Vycy5zcGxpdChcIixcIilcblxuICAgIGNvbnN0IGFuc3dlcnMgPSBbXG4gICAgICAgIHtzdWJtaXRpb246cXVpekRhdGFbMF0uY29ycmVjdF9hbnN3ZXIsIGNvcnJlY3Q6dHJ1ZSx9LFxuICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1swXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzFdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAge3N1Ym1pdGlvbjp3cm9uZ0Fuc3dlcnNbMl0sIGNvcnJlY3Q6ZmFsc2V9LFxuICAgIF1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCAgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT0gMCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgtLTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgW2FycmF5W2N1cnJlbnRJbmRleF0sIGFycmF5W3JhbmRvbUluZGV4XV0gPSBbXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0sIGFycmF5W2N1cnJlbnRJbmRleF1dO1xuICAgICAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJhbkFuc3dlcnMgPSBzaHVmZmxlKGFuc3dlcnMpLmZpbHRlcihvYmogPT4gb2JqLnN1Ym1pdGlvbilcblxuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnRzID0gcmFuQW5zd2Vycy5tYXAoKHtjb3JyZWN0LCBzdWJtaXRpb259KT0+IDxRdWl6QnV0dG9uIGZ1bmM9e2hhbmRsZUNsaWNrfSB2YWx1ZT17Y29ycmVjdH0gdGV4dD17c3VibWl0aW9ufS8+KVxufVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoND57cXVpekRhdGFbMF0ucXVlc3Rpb259PC9oND5cbiAgICAgICAgICAgICAgICB7PGRpdj5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvbkVsZW1lbnRzfVxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUXVpekJ1dHRvbiIsIlF1ZXN0aW9uIiwicHJvcHMiLCJkZWNvZGVIdG1sIiwiaHRtbCIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZhbHVlIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsInByZXNzZWQiLCJpc1ByZXNzZWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwic2h1ZmZsZSIsImFycmF5IiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ3cm9uZ0Fuc3dlcnMiLCJpbmNvcnJlY3RfYW5zd2VycyIsInNwbGl0IiwiYW5zd2VycyIsInN1Ym1pdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiY29ycmVjdCIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsInJhbkFuc3dlcnMiLCJmaWx0ZXIiLCJvYmoiLCJidXR0b25FbGVtZW50cyIsIm1hcCIsImZ1bmMiLCJ0ZXh0IiwiZGl2IiwiaDQiLCJxdWVzdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});