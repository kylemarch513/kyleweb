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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizButton */ \"./components/QuizButton.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/quizzy.module.css */ \"./components/quizzy.module.css\");\n/* harmony import */ var _components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    var shuffle = function shuffle(array) {\n        var currentIndex = array.length, randomIndex;\n        // While there remain elements to shuffle.\n        while(currentIndex != 0){\n            // Pick a remaining element.\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            var ref;\n            ref = [\n                array[randomIndex],\n                array[currentIndex]\n            ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n        }\n        return array;\n    };\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), quizData = ref5[0], setQuizData = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), questionNum = ref1[0], setQuestionNum = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), quizzy = ref3[0], setQuizzy = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(local_storage__WEBPACK_IMPORTED_MODULE_4___default().get(\"highscore\")), highScore = ref4[0], setHighScore = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=6\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n        if (!highScore) {\n            local_storage__WEBPACK_IMPORTED_MODULE_4___default().set(\"highscore\", 0);\n        }\n    }, [\n        quizzy\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (questionNum === 5) {\n            setQuizData(null);\n            //console.log(quizData)\n            setQuizzy(true);\n        }\n        if (score >= highScore) {\n            setHighScore(score);\n            local_storage__WEBPACK_IMPORTED_MODULE_4___default().set(\"highscore\", score);\n        }\n    }, [\n        questionNum\n    ]);\n    var resetGame = function() {\n        setScore(0);\n        setQuestionNum(0);\n        setQuizzy(false);\n    };\n    //target is always a string\n    var handleClick = function(e) {\n        //console.log('here we go:', e.target.value, typeof e.target.value)\n        if (e.target.value === \"true\") {\n            //console.log(\"working\")\n            setScore(score + 1);\n            setQuestionNum(questionNum + 1);\n        } else {\n            setQuestionNum(questionNum + 1);\n        }\n    };\n    if (quizData) {\n        var _this = this;\n        var wrongAnswers = quizData[questionNum].incorrect_answers;\n        var answers = [\n            {\n                submition: quizData[questionNum].correct_answer,\n                correct: true\n            },\n            {\n                submition: wrongAnswers[0],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[1],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[2],\n                correct: false\n            }, \n        ];\n        var ranAnswers = shuffle(answers).filter(function(obj) {\n            return obj.submition;\n        });\n        var buttonElements = ranAnswers.map(function(param) {\n            var correct = param.correct, submition = param.submition;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                func: handleClick,\n                value: correct,\n                text: decodeHtml(submition)\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 83,\n                columnNumber: 72\n            }, _this);\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: (_components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5___default()),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, this),\n                !quizzy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: decodeHtml(quizData[questionNum].question)\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 88,\n                    columnNumber: 29\n                }, this),\n                !quizzy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"buttonsquizzy\",\n                    children: buttonElements\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 89,\n                    columnNumber: 28\n                }, this),\n                quizzy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Quiz Over\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: resetGame,\n                            children: \"Try Again?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 90,\n                    columnNumber: 28\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"CurrentScore: \",\n                        score,\n                        \"/5\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"HighScore: \",\n                        highScore\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 100,\n            columnNumber: 13\n        }, this);\n    }\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"jSWzWjlGUjtc6LEZXRA8n6g1WwU=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akMsZ0JBQWdCO0dBdEdRRyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcz82ZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWl6QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1aXpCdXR0b25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgbHMgZnJvbSAnbG9jYWwtc3RvcmFnZSdcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcXVpenp5Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeiAoKXtcbiAgICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3F1ZXN0aW9uTnVtLCBzZXRRdWVzdGlvbk51bV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUgKDApXG4gICAgY29uc3QgW3F1aXp6eSwgc2V0UXVpenp5XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtoaWdoU2NvcmUsIHNldEhpZ2hTY29yZV0gPSB1c2VTdGF0ZShscy5nZXQoXCJoaWdoc2NvcmVcIikpXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZmV0Y2goXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTZcIilcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHNldFF1aXpEYXRhKGRhdGEucmVzdWx0cykpXG4gICAgICAgIGlmKCFoaWdoU2NvcmUpe1xuICAgICAgICAgICAgbHMuc2V0KFwiaGlnaHNjb3JlXCIsIDApXG4gICAgICAgIH1cbiAgICB9LFtxdWl6enldKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZihxdWVzdGlvbk51bSA9PT0gNSlcbiAgICAgICAge1xuICAgICAgICAgICAgc2V0UXVpekRhdGEobnVsbClcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocXVpekRhdGEpXG4gICAgICAgICAgICBzZXRRdWl6enkodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZihzY29yZSA+PSBoaWdoU2NvcmUpe1xuICAgICAgICAgICAgc2V0SGlnaFNjb3JlKHNjb3JlKVxuICAgICAgICAgICAgbHMuc2V0KFwiaGlnaHNjb3JlXCIsIHNjb3JlKVxuICAgICAgICB9XG4gICAgfSxbcXVlc3Rpb25OdW1dKVxuICAgIGZ1bmN0aW9uIGRlY29kZUh0bWwoaHRtbCkge1xuICAgICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0eHQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIHR4dC52YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgICAgICBzZXRTY29yZSgwKVxuICAgICAgICBzZXRRdWVzdGlvbk51bSgwKVxuICAgICAgICBzZXRRdWl6enkoZmFsc2UpXG4gICAgfVxuICAgIC8vdGFyZ2V0IGlzIGFsd2F5cyBhIHN0cmluZ1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZSB3ZSBnbzonLCBlLnRhcmdldC52YWx1ZSwgdHlwZW9mIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBpZihlLnRhcmdldC52YWx1ZSA9PT0gJ3RydWUnKXtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ3b3JraW5nXCIpXG4gICAgICAgICAgICBzZXRTY29yZShzY29yZSArIDEpXG4gICAgICAgICAgICBzZXRRdWVzdGlvbk51bShxdWVzdGlvbk51bSArIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRRdWVzdGlvbk51bShxdWVzdGlvbk51bSArIDEpXG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLlxuICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9IDApIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50LlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4LS07XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIFthcnJheVtjdXJyZW50SW5kZXhdLCBhcnJheVtyYW5kb21JbmRleF1dID0gW1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuXG4gICAgaWYocXVpekRhdGEpe1xuICAgICAgICBjb25zdCB3cm9uZ0Fuc3dlcnMgPSBxdWl6RGF0YVtxdWVzdGlvbk51bV0uaW5jb3JyZWN0X2Fuc3dlcnNcbiAgICAgICAgY29uc3QgYW5zd2VycyA9IFtcbiAgICAgICAgICAgIHtzdWJtaXRpb246cXVpekRhdGFbcXVlc3Rpb25OdW1dLmNvcnJlY3RfYW5zd2VyLCBjb3JyZWN0OnRydWUsfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzBdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzFdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzJdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgXVxuICAgICAgICBjb25zdCByYW5BbnN3ZXJzID0gc2h1ZmZsZShhbnN3ZXJzKS5maWx0ZXIob2JqID0+IG9iai5zdWJtaXRpb24pXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnRzID0gcmFuQW5zd2Vycy5tYXAoKHtjb3JyZWN0LCBzdWJtaXRpb259KT0+IDxRdWl6QnV0dG9uIGZ1bmM9e2hhbmRsZUNsaWNrfSB2YWx1ZT17Y29ycmVjdH0gdGV4dD17ZGVjb2RlSHRtbChzdWJtaXRpb24pfS8+KVxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlc30+XG4gICAgICAgICAgICAgICAgPExheW91dC8+XG4gICAgICAgICAgICAgICAgeyFxdWl6enkgJiYgPGg0PntkZWNvZGVIdG1sKHF1aXpEYXRhW3F1ZXN0aW9uTnVtXS5xdWVzdGlvbil9PC9oND59XG4gICAgICAgICAgICAgICAgeyFxdWl6enkgJiY8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNxdWl6enlcIj57YnV0dG9uRWxlbWVudHN9PC9kaXY+fVxuICAgICAgICAgICAgICAgIHtxdWl6enkgJiYgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlF1aXogT3ZlcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXRHYW1lfT5UcnkgQWdhaW4/PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8cD5DdXJyZW50U2NvcmU6IHtzY29yZX0vNTwvcD5cbiAgICAgICAgICAgICAgICA8cD5IaWdoU2NvcmU6IHtoaWdoU2NvcmV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQvPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG5cblxufVxuLy8gZWFjaCBxdWVzdGlvbiBhcyBvd24gY29tcGVuZW50XG4vL2J1dHRvbnMgd2l0aGluIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUXVpekJ1dHRvbiIsIkxheW91dCIsImxzIiwiU3R5bGVzIiwiUXVpeiIsImRlY29kZUh0bWwiLCJodG1sIiwidHh0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidmFsdWUiLCJzaHVmZmxlIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJxdWVzdGlvbk51bSIsInNldFF1ZXN0aW9uTnVtIiwic2NvcmUiLCJzZXRTY29yZSIsInF1aXp6eSIsInNldFF1aXp6eSIsImdldCIsImhpZ2hTY29yZSIsInNldEhpZ2hTY29yZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzdWx0cyIsInNldCIsInJlc2V0R2FtZSIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsIndyb25nQW5zd2VycyIsImluY29ycmVjdF9hbnN3ZXJzIiwiYW5zd2VycyIsInN1Ym1pdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiY29ycmVjdCIsInJhbkFuc3dlcnMiLCJmaWx0ZXIiLCJvYmoiLCJidXR0b25FbGVtZW50cyIsIm1hcCIsImZ1bmMiLCJ0ZXh0IiwiZGl2Iiwic3R5bGUiLCJoNCIsInF1ZXN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});