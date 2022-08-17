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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizButton */ \"./components/QuizButton.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/quizzy.module.css */ \"./components/quizzy.module.css\");\n/* harmony import */ var _components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    var shuffle = function shuffle(array) {\n        var currentIndex = array.length, randomIndex;\n        // While there remain elements to shuffle.\n        while(currentIndex != 0){\n            // Pick a remaining element.\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            var ref;\n            ref = [\n                array[randomIndex],\n                array[currentIndex]\n            ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n        }\n        return array;\n    };\n    _s();\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), quizData = ref6[0], setQuizData = ref6[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), questionNum = ref1[0], setQuestionNum = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), quizzy = ref3[0], setQuizzy = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(local_storage__WEBPACK_IMPORTED_MODULE_4___default().get(\"highscore\")), highScore = ref4[0], setHighScore = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5), quizLength = ref5[0], setQuizlength = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=\" + (quizLength + 1)).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n        if (!highScore) {\n            local_storage__WEBPACK_IMPORTED_MODULE_4___default().set(\"highscore\", 0);\n        }\n    }, [\n        quizzy\n    ]);\n    console.log(quizLength);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (questionNum === quizLength) {\n            setQuizData(null);\n            //console.log(quizData)\n            setQuizzy(true);\n        }\n        if (score >= highScore) {\n            setHighScore(score);\n            local_storage__WEBPACK_IMPORTED_MODULE_4___default().set(\"highscore\", score);\n        }\n    }, [\n        questionNum\n    ]);\n    var resetGame = function() {\n        setScore(0);\n        setQuestionNum(0);\n        setQuizzy(false);\n    };\n    var setLength = function() {\n        setQuizlength(prompt(\"Enter a number\") + 1);\n    };\n    //target is always a string\n    var handleClick = function(e) {\n        //console.log('here we go:', e.target.value, typeof e.target.value)\n        if (e.target.value === \"true\") {\n            //console.log(\"working\")\n            setScore(score + 1);\n            setQuestionNum(questionNum + 1);\n        } else {\n            setQuestionNum(questionNum + 1);\n        }\n    };\n    if (quizData) {\n        var _this = this;\n        var wrongAnswers = quizData[questionNum].incorrect_answers;\n        var answers = [\n            {\n                submition: quizData[questionNum].correct_answer,\n                correct: true\n            },\n            {\n                submition: wrongAnswers[0],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[1],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[2],\n                correct: false\n            }, \n        ];\n        var ranAnswers = shuffle(answers).filter(function(obj) {\n            return obj.submition;\n        });\n        var buttonElements = ranAnswers.map(function(param) {\n            var correct = param.correct, submition = param.submition;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                func: handleClick,\n                value: correct,\n                text: decodeHtml(submition)\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 88,\n                columnNumber: 72\n            }, _this);\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: (_components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5___default()),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this),\n                !quizzy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: decodeHtml(quizData[questionNum].question)\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"buttonsquizzy\",\n                            children: buttonElements\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 93,\n                    columnNumber: 29\n                }, this),\n                quizzy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Quiz Over\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: resetGame,\n                            children: \"Try Again?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: setLength,\n                            children: \"Choose Quiz Length\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 97,\n                    columnNumber: 28\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"CurrentScore: \",\n                        score,\n                        \"/\",\n                        quizLength\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 102,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"HighScore: \",\n                        highScore\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 103,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 91,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 109,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 108,\n            columnNumber: 13\n        }, this);\n    }\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"la/WuLcVMRE/uaAXpF19KEAbihs=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NBQUUsWUFBVTs7Ozs7Z0NBQVM7c0NBQy9DLDhEQUFDeUIsUUFBTTs0QkFBQ0MsT0FBTyxFQUFFekIsU0FBUztzQ0FBRSxvQkFBa0I7Ozs7O2dDQUFTOzs7Ozs7d0JBQ2pEOzhCQUNWLDhEQUFDMEIsR0FBQzs7d0JBQUMsZ0JBQWM7d0JBQUM3QyxLQUFLO3dCQUFDLEdBQUM7d0JBQUNPLFVBQVU7Ozs7Ozt3QkFBSzs4QkFDekMsOERBQUNzQyxHQUFDOzt3QkFBQyxhQUFXO3dCQUFDeEMsU0FBUzs7Ozs7O3dCQUFLOzs7Ozs7Z0JBQzNCLENBQ1Q7S0FDSixNQUFNO1FBQ0gscUJBQ0ksOERBQUNnQyxLQUFHO3NCQUNBLDRFQUFDNUQsMERBQU07Ozs7b0JBQUU7Ozs7O2dCQUNQLENBQ1Q7S0FDSjtDQUdKLEVBQ0QsaUNBQWlDO0NBQ2pDLGdCQUFnQjtHQTlHUUcsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1aXouanM/NmYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVpekJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWl6QnV0dG9uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IGxzIGZyb20gJ2xvY2FsLXN0b3JhZ2UnXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi9jb21wb25lbnRzL3F1aXp6eS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXogKCl7XG4gICAgY29uc3QgW3F1aXpEYXRhLCBzZXRRdWl6RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtxdWVzdGlvbk51bSwgc2V0UXVlc3Rpb25OdW1dID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlICgwKVxuICAgIGNvbnN0IFtxdWl6enksIHNldFF1aXp6eV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbaGlnaFNjb3JlLCBzZXRIaWdoU2NvcmVdID0gdXNlU3RhdGUobHMuZ2V0KFwiaGlnaHNjb3JlXCIpKVxuICAgIGNvbnN0IFtxdWl6TGVuZ3RoLCBzZXRRdWl6bGVuZ3RoXSA9IHVzZVN0YXRlKDUpXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZmV0Y2goXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PVwiICsgKHF1aXpMZW5ndGgrMSkpXG4gICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRRdWl6RGF0YShkYXRhLnJlc3VsdHMpKVxuICAgICAgICBpZighaGlnaFNjb3JlKXtcbiAgICAgICAgICAgIGxzLnNldChcImhpZ2hzY29yZVwiLCAwKVxuICAgICAgICB9XG4gICAgfSxbcXVpenp5XSlcbiAgICBjb25zb2xlLmxvZyhxdWl6TGVuZ3RoKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZihxdWVzdGlvbk51bSA9PT0gcXVpekxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgc2V0UXVpekRhdGEobnVsbClcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocXVpekRhdGEpXG4gICAgICAgICAgICBzZXRRdWl6enkodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBpZihzY29yZSA+PSBoaWdoU2NvcmUpe1xuICAgICAgICAgICAgc2V0SGlnaFNjb3JlKHNjb3JlKVxuICAgICAgICAgICAgbHMuc2V0KFwiaGlnaHNjb3JlXCIsIHNjb3JlKVxuICAgICAgICB9XG4gICAgfSxbcXVlc3Rpb25OdW1dKVxuICAgIGZ1bmN0aW9uIGRlY29kZUh0bWwoaHRtbCkge1xuICAgICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0eHQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIHR4dC52YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgICAgICBzZXRTY29yZSgwKVxuICAgICAgICBzZXRRdWVzdGlvbk51bSgwKVxuICAgICAgICBzZXRRdWl6enkoZmFsc2UpXG4gICAgfVxuICAgIGNvbnN0IHNldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgc2V0UXVpemxlbmd0aChwcm9tcHQoXCJFbnRlciBhIG51bWJlclwiKSsxKVxuICAgIH1cbiAgICAvL3RhcmdldCBpcyBhbHdheXMgYSBzdHJpbmdcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmUgd2UgZ286JywgZS50YXJnZXQudmFsdWUsIHR5cGVvZiBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwid29ya2luZ1wiKVxuICAgICAgICAgICAgc2V0U2NvcmUoc2NvcmUgKyAxKVxuICAgICAgICAgICAgc2V0UXVlc3Rpb25OdW0ocXVlc3Rpb25OdW0gKyAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UXVlc3Rpb25OdW0ocXVlc3Rpb25OdW0gKyAxKVxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsICByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPSAwKSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xuXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICBbYXJyYXlbY3VycmVudEluZGV4XSwgYXJyYXlbcmFuZG9tSW5kZXhdXSA9IFtcbiAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSwgYXJyYXlbY3VycmVudEluZGV4XV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgIH1cblxuICAgIGlmKHF1aXpEYXRhKXtcbiAgICAgICAgY29uc3Qgd3JvbmdBbnN3ZXJzID0gcXVpekRhdGFbcXVlc3Rpb25OdW1dLmluY29ycmVjdF9hbnN3ZXJzXG4gICAgICAgIGNvbnN0IGFuc3dlcnMgPSBbXG4gICAgICAgICAgICB7c3VibWl0aW9uOnF1aXpEYXRhW3F1ZXN0aW9uTnVtXS5jb3JyZWN0X2Fuc3dlciwgY29ycmVjdDp0cnVlLH0sXG4gICAgICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1swXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1sxXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1syXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgICAgIF1cbiAgICAgICAgY29uc3QgcmFuQW5zd2VycyA9IHNodWZmbGUoYW5zd2VycykuZmlsdGVyKG9iaiA9PiBvYmouc3VibWl0aW9uKVxuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50cyA9IHJhbkFuc3dlcnMubWFwKCh7Y29ycmVjdCwgc3VibWl0aW9ufSk9PiA8UXVpekJ1dHRvbiBmdW5jPXtoYW5kbGVDbGlja30gdmFsdWU9e2NvcnJlY3R9IHRleHQ9e2RlY29kZUh0bWwoc3VibWl0aW9uKX0vPilcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXN9PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQvPlxuICAgICAgICAgICAgICAgIHshcXVpenp5ICYmIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoND57ZGVjb2RlSHRtbChxdWl6RGF0YVtxdWVzdGlvbk51bV0ucXVlc3Rpb24pfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc3F1aXp6eVwiPntidXR0b25FbGVtZW50c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAge3F1aXp6eSAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+UXVpeiBPdmVyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldEdhbWV9PlRyeSBBZ2Fpbj88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZXRMZW5ndGh9PkNob29zZSBRdWl6IExlbmd0aDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgPHA+Q3VycmVudFNjb3JlOiB7c2NvcmV9L3txdWl6TGVuZ3RofTwvcD5cbiAgICAgICAgICAgICAgICA8cD5IaWdoU2NvcmU6IHtoaWdoU2NvcmV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQvPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG5cblxufVxuLy8gZWFjaCBxdWVzdGlvbiBhcyBvd24gY29tcGVuZW50XG4vL2J1dHRvbnMgd2l0aGluIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUXVpekJ1dHRvbiIsIkxheW91dCIsImxzIiwiU3R5bGVzIiwiUXVpeiIsImRlY29kZUh0bWwiLCJodG1sIiwidHh0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidmFsdWUiLCJzaHVmZmxlIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJxdWVzdGlvbk51bSIsInNldFF1ZXN0aW9uTnVtIiwic2NvcmUiLCJzZXRTY29yZSIsInF1aXp6eSIsInNldFF1aXp6eSIsImdldCIsImhpZ2hTY29yZSIsInNldEhpZ2hTY29yZSIsInF1aXpMZW5ndGgiLCJzZXRRdWl6bGVuZ3RoIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwic2V0IiwiY29uc29sZSIsImxvZyIsInJlc2V0R2FtZSIsInNldExlbmd0aCIsInByb21wdCIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsIndyb25nQW5zd2VycyIsImluY29ycmVjdF9hbnN3ZXJzIiwiYW5zd2VycyIsInN1Ym1pdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiY29ycmVjdCIsInJhbkFuc3dlcnMiLCJmaWx0ZXIiLCJvYmoiLCJidXR0b25FbGVtZW50cyIsIm1hcCIsImZ1bmMiLCJ0ZXh0IiwiZGl2Iiwic3R5bGUiLCJoNCIsInF1ZXN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});