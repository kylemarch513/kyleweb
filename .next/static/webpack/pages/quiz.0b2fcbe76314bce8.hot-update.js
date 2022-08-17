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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizButton */ \"./components/QuizButton.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    var shuffle = function shuffle(array) {\n        var currentIndex = array.length, randomIndex;\n        // While there remain elements to shuffle.\n        while(currentIndex != 0){\n            // Pick a remaining element.\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            var ref;\n            ref = [\n                array[randomIndex],\n                array[currentIndex]\n            ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n        }\n        return array;\n    };\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), quizData = ref3[0], setQuizData = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), questionNum = ref1[0], setQuestionNum = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=6\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (questionNum === 5) {\n            setQuizData(null);\n        //console.log(quizData)\n        }\n    }, [\n        questionNum\n    ]);\n    var increase = function() {\n        setQuestionNum(questionNum + 1);\n    };\n    var resetGame = function() {\n        console.log(quizData);\n        setScore(0);\n        setQuestionNum(0);\n        console.log(quizData, questionNum);\n    };\n    //target is always a string\n    var handleClick = function(e) {\n        //console.log('here we go:', e.target.value, typeof e.target.value)\n        if (e.target.value === \"true\") {\n            //console.log(\"working\")\n            setScore(score + 1);\n            setQuestionNum(questionNum + 1);\n        } else {\n        //console.log(\"notWorking\")\n        }\n    };\n    if (quizData) {\n        var _this = this;\n        console.log(quizData[questionNum]);\n        var wrongAnswers = quizData[questionNum].incorrect_answers;\n        var answers = [\n            {\n                submition: quizData[questionNum].correct_answer,\n                correct: true\n            },\n            {\n                submition: wrongAnswers[0],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[1],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[2],\n                correct: false\n            }, \n        ];\n        var ranAnswers = shuffle(answers).filter(function(obj) {\n            return obj.submition;\n        });\n        var buttonElements = ranAnswers.map(function(param) {\n            var correct = param.correct, submition = param.submition;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                func: handleClick,\n                value: correct,\n                text: submition\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 75,\n                columnNumber: 72\n            }, _this);\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: decodeHtml(quizData[questionNum].question)\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this),\n                buttonElements,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: increase\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this),\n                score\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 78,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: resetGame,\n                    children: \"PLACEHOLDER\"\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 88,\n                    columnNumber: 13\n                }, this),\n                score\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 87,\n            columnNumber: 13\n        }, this);\n    }\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"jMayX/SeW86ztsN0GGNHQG9vU3g=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQ2dDLFFBQVEsQ0FBQzs7Ozs7d0JBQU07Z0JBQ3BETixjQUFjOzhCQUNmLDhEQUFDTyxRQUFNO29CQUFDQyxPQUFPLEVBQUV4QixRQUFROzs7Ozt3QkFBVztnQkFDbkNSLEtBQUs7Ozs7OztnQkFDSixDQUNUO0tBQ0osTUFBTTtRQUNILHFCQUNJLDhEQUFDNEIsS0FBRzs7OEJBQ0osOERBQUNHLFFBQU07b0JBQUNDLE9BQU8sRUFBRXZCLFNBQVM7OEJBQUUsYUFBVzs7Ozs7d0JBQVM7Z0JBQy9DVCxLQUFLOzs7Ozs7Z0JBQ0EsQ0FDVDtLQUNKO0NBR0osRUFDRCxpQ0FBaUM7Q0FDakMsZ0JBQWdCO0dBN0ZRcEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXouanM/NmYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVpekJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWl6QnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXogKCl7XG4gICAgY29uc3QgW3F1aXpEYXRhLCBzZXRRdWl6RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtxdWVzdGlvbk51bSwgc2V0UXVlc3Rpb25OdW1dID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlICgwKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9NlwiKVxuICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gc2V0UXVpekRhdGEoZGF0YS5yZXN1bHRzKSlcbiAgICB9LFtdKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZihxdWVzdGlvbk51bSA9PT0gNSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2V0UXVpekRhdGEobnVsbClcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocXVpekRhdGEpXG4gICAgICAgIH1cbiAgICB9LFtxdWVzdGlvbk51bV0pXG4gICAgZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gICAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBpbmNyZWFzZSA9ICgpID0+IHtcbiAgICAgICAgc2V0UXVlc3Rpb25OdW0ocXVlc3Rpb25OdW0rMSlcbiAgICB9XG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhxdWl6RGF0YSlcbiAgICAgICAgc2V0U2NvcmUoMClcbiAgICAgICAgc2V0UXVlc3Rpb25OdW0oMClcbiAgICAgICAgY29uc29sZS5sb2cocXVpekRhdGEsIHF1ZXN0aW9uTnVtKVxuICAgIH1cbiAgICAvL3RhcmdldCBpcyBhbHdheXMgYSBzdHJpbmdcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmUgd2UgZ286JywgZS50YXJnZXQudmFsdWUsIHR5cGVvZiBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid29ya2luZ1wiKVxuICAgICAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKVxuICAgICAgICAgICAgc2V0UXVlc3Rpb25OdW0ocXVlc3Rpb25OdW0gKyAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5vdFdvcmtpbmdcIilcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCAgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT0gMCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgtLTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgW2FycmF5W2N1cnJlbnRJbmRleF0sIGFycmF5W3JhbmRvbUluZGV4XV0gPSBbXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0sIGFycmF5W2N1cnJlbnRJbmRleF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG5cbiAgICBpZihxdWl6RGF0YSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1aXpEYXRhW3F1ZXN0aW9uTnVtXSlcbiAgICAgICAgY29uc3Qgd3JvbmdBbnN3ZXJzID0gcXVpekRhdGFbcXVlc3Rpb25OdW1dLmluY29ycmVjdF9hbnN3ZXJzXG4gICAgICAgIGNvbnN0IGFuc3dlcnMgPSBbXG4gICAgICAgICAgICB7c3VibWl0aW9uOnF1aXpEYXRhW3F1ZXN0aW9uTnVtXS5jb3JyZWN0X2Fuc3dlciwgY29ycmVjdDp0cnVlLH0sXG4gICAgICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1swXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1sxXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1syXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgICAgIF1cbiAgICAgICAgY29uc3QgcmFuQW5zd2VycyA9IHNodWZmbGUoYW5zd2VycykuZmlsdGVyKG9iaiA9PiBvYmouc3VibWl0aW9uKVxuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50cyA9IHJhbkFuc3dlcnMubWFwKCh7Y29ycmVjdCwgc3VibWl0aW9ufSk9PiA8UXVpekJ1dHRvbiBmdW5jPXtoYW5kbGVDbGlja30gdmFsdWU9e2NvcnJlY3R9IHRleHQ9e3N1Ym1pdGlvbn0vPilcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoND57ZGVjb2RlSHRtbChxdWl6RGF0YVtxdWVzdGlvbk51bV0ucXVlc3Rpb24pfTwvaDQ+XG4gICAgICAgICAgICAgICAge2J1dHRvbkVsZW1lbnRzfVxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVhc2V9PjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtzY29yZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXRHYW1lfT5QTEFDRUhPTERFUjwvYnV0dG9uPlxuICAgICAgICAgICAge3Njb3JlfVxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG5cblxufVxuLy8gZWFjaCBxdWVzdGlvbiBhcyBvd24gY29tcGVuZW50XG4vL2J1dHRvbnMgd2l0aGluIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUXVpekJ1dHRvbiIsIlF1aXoiLCJkZWNvZGVIdG1sIiwiaHRtbCIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZhbHVlIiwic2h1ZmZsZSIsImFycmF5IiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJxdWl6RGF0YSIsInNldFF1aXpEYXRhIiwicXVlc3Rpb25OdW0iLCJzZXRRdWVzdGlvbk51bSIsInNjb3JlIiwic2V0U2NvcmUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlc3VsdHMiLCJpbmNyZWFzZSIsInJlc2V0R2FtZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGljayIsImUiLCJ0YXJnZXQiLCJ3cm9uZ0Fuc3dlcnMiLCJpbmNvcnJlY3RfYW5zd2VycyIsImFuc3dlcnMiLCJzdWJtaXRpb24iLCJjb3JyZWN0X2Fuc3dlciIsImNvcnJlY3QiLCJyYW5BbnN3ZXJzIiwiZmlsdGVyIiwib2JqIiwiYnV0dG9uRWxlbWVudHMiLCJtYXAiLCJmdW5jIiwidGV4dCIsImRpdiIsImg0IiwicXVlc3Rpb24iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});