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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizButton */ \"./components/QuizButton.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/quizzy.module.css */ \"./components/quizzy.module.css\");\n/* harmony import */ var _components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    var shuffle = function shuffle(array) {\n        var currentIndex = array.length, randomIndex;\n        // While there remain elements to shuffle.\n        while(currentIndex != 0){\n            // Pick a remaining element.\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            var ref;\n            ref = [\n                array[randomIndex],\n                array[currentIndex]\n            ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n        }\n        return array;\n    };\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), quizData = ref5[0], setQuizData = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), questionNum = ref1[0], setQuestionNum = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), quizzy = ref3[0], setQuizzy = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(local_storage__WEBPACK_IMPORTED_MODULE_4___default().get(\"highscore\")), highScore = ref4[0], setHighScore = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=6\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n        if (!highScore) {\n            local_storage__WEBPACK_IMPORTED_MODULE_4___default().set(\"highscore\", 0);\n        }\n    }, [\n        quizzy\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (questionNum === 5) {\n            setQuizData(null);\n            //console.log(quizData)\n            setQuizzy(true);\n        }\n        if (score >= highScore) {\n            setHighScore(score);\n            local_storage__WEBPACK_IMPORTED_MODULE_4___default().set(\"highscore\", score);\n        }\n    }, [\n        questionNum\n    ]);\n    var resetGame = function() {\n        setScore(0);\n        setQuestionNum(0);\n        setQuizzy(false);\n    };\n    //target is always a string\n    var handleClick = function(e) {\n        //console.log('here we go:', e.target.value, typeof e.target.value)\n        if (e.target.value === \"true\") {\n            //console.log(\"working\")\n            setScore(score + 1);\n            setQuestionNum(questionNum + 1);\n        } else {\n            setQuestionNum(questionNum + 1);\n        }\n    };\n    if (quizData) {\n        var _this = this;\n        var wrongAnswers = quizData[questionNum].incorrect_answers;\n        var answers = [\n            {\n                submition: quizData[questionNum].correct_answer,\n                correct: true\n            },\n            {\n                submition: wrongAnswers[0],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[1],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[2],\n                correct: false\n            }, \n        ];\n        var ranAnswers = shuffle(answers).filter(function(obj) {\n            return obj.submition;\n        });\n        var buttonElements = ranAnswers.map(function(param) {\n            var correct = param.correct, submition = param.submition;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                func: handleClick,\n                value: correct,\n                text: submition\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 83,\n                columnNumber: 72\n            }, _this);\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: (_components_quizzy_module_css__WEBPACK_IMPORTED_MODULE_5___default()),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 87,\n                    columnNumber: 17\n                }, this),\n                !quizzy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: decodeHtml(quizData[questionNum].question)\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 88,\n                    columnNumber: 29\n                }, this),\n                !quizzy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"buttonsquizzy\",\n                    children: buttonElements\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 89,\n                    columnNumber: 28\n                }, this),\n                quizzy && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: resetGame,\n                            children: \"PLACEHOLDER\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Quiz Over\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 90,\n                    columnNumber: 28\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"CurrentScore: \",\n                        score,\n                        \"/5\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"HighScore: \",\n                        highScore\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 100,\n            columnNumber: 13\n        }, this);\n    }\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"jSWzWjlGUjtc6LEZXRA8n6g1WwU=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDTTtBQUNSO0FBQ1o7QUFDdUI7O0FBRXRDLFNBQVNNLElBQUksR0FBRztRQTJCbEJDLFVBQVUsR0FBbkIsU0FBU0EsVUFBVSxDQUFDQyxJQUFJLEVBQUU7UUFDdEIsSUFBSUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDNUNGLEdBQUcsQ0FBQ0csU0FBUyxHQUFHSixJQUFJLENBQUM7UUFDckIsT0FBT0MsR0FBRyxDQUFDSSxLQUFLLENBQUM7S0FDcEI7UUFrQlFDLE9BQU8sR0FBaEIsU0FBU0EsT0FBTyxDQUFDQyxLQUFLLEVBQUU7UUFDcEIsSUFBSUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLE1BQU0sRUFBR0MsV0FBVztRQUU3QywwQ0FBMEM7UUFDMUMsTUFBT0YsWUFBWSxJQUFJLENBQUMsQ0FBRTtZQUV0Qiw0QkFBNEI7WUFDNUJFLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdMLFlBQVksQ0FBQyxDQUFDO1lBQ3ZEQSxZQUFZLEVBQUUsQ0FBQzs7a0JBRzZCO2dCQUM1Q0QsS0FBSyxDQUFDRyxXQUFXLENBQUM7Z0JBQUVILEtBQUssQ0FBQ0MsWUFBWSxDQUFDO2FBQUMsRUFEdkNELEtBQUssQ0FBQ0MsWUFBWSxDQUFDLFdBQUVELEtBQUssQ0FBQ0csV0FBVyxDQUFDLGNBbEVwRCxDQW1FcUQ7U0FDNUM7UUFFRCxPQUFPSCxLQUFLLENBQUM7S0FDWjs7SUFoRUwsSUFBZ0NkLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFQbEQsUUFPbUIsR0FBaUJBLElBQWMsR0FBL0IsRUFQbkIsV0FPZ0MsR0FBSUEsSUFBYyxHQUFsQjtJQUM1QixJQUFzQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQVJyRCxXQVFzQixHQUFvQkEsSUFBVyxHQUEvQixFQVJ0QixjQVFzQyxHQUFJQSxJQUFXLEdBQWY7SUFDbEMsSUFBMEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBRSxDQUFDLENBQUMsRUFUMUMsS0FTZ0IsR0FBY0EsSUFBWSxHQUExQixFQVRoQixRQVMwQixHQUFJQSxJQUFZLEdBQWhCO0lBQ3RCLElBQTRCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBVi9DLE1BVWlCLEdBQWVBLElBQWUsR0FBOUIsRUFWakIsU0FVNEIsR0FBSUEsSUFBZSxHQUFuQjtJQUN4QixJQUFrQ0EsSUFBNkIsR0FBN0JBLCtDQUFRLENBQUNHLHdEQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFYbkUsU0FXb0IsR0FBa0JILElBQTZCLEdBQS9DLEVBWHBCLFlBV2tDLEdBQUlBLElBQTZCLEdBQWpDO0lBRTlCRCxnREFBUyxDQUFDLFdBQUk7UUFDVmlDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUM1Q0MsSUFBSSxDQUFDQyxTQUFBQSxHQUFHO21CQUFFQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDckJGLElBQUksQ0FBQ0csU0FBQUEsSUFBSTttQkFBSWQsV0FBVyxDQUFDYyxJQUFJLENBQUNDLE9BQU8sQ0FBQztTQUFBLENBQUM7UUFDeEMsSUFBRyxDQUFDUCxTQUFTLEVBQUM7WUFDVjNCLHdEQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztTQUN6QjtLQUNKLEVBQUM7UUFBQ3dCLE1BQU07S0FBQyxDQUFDO0lBQ1g1QixnREFBUyxDQUFDLFdBQUk7UUFDVixJQUFHd0IsV0FBVyxLQUFLLENBQUMsRUFDcEI7WUFDSUQsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNqQix1QkFBdUI7WUFDdkJNLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFHSCxLQUFLLElBQUlLLFNBQVMsRUFBQztZQUNsQkMsWUFBWSxDQUFDTixLQUFLLENBQUM7WUFDbkJ0Qix3REFBTSxDQUFDLFdBQVcsRUFBRXNCLEtBQUssQ0FBQztTQUM3QjtLQUNKLEVBQUM7UUFBQ0YsV0FBVztLQUFDLENBQUM7SUFNaEIsSUFBTWdCLFNBQVMsR0FBRyxXQUFNO1FBQ3BCYixRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ1hGLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDakJJLFNBQVMsQ0FBQyxLQUFLLENBQUM7S0FDbkI7SUFDRCwyQkFBMkI7SUFDM0IsSUFBTVksV0FBVyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN2QixtRUFBbUU7UUFDbkUsSUFBR0EsQ0FBQyxDQUFDQyxNQUFNLENBQUM5QixLQUFLLEtBQUssTUFBTSxFQUFDO1lBQ3pCLHdCQUF3QjtZQUN4QmMsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ25CRCxjQUFjLENBQUNELFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDbEMsTUFBTTtZQUNIQyxjQUFjLENBQUNELFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDbEM7S0FDQTtJQW9CTCxJQUFHRixRQUFRLEVBQUM7O1FBQ1IsSUFBTXNCLFlBQVksR0FBR3RCLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDLENBQUNxQixpQkFBaUI7UUFDNUQsSUFBTUMsT0FBTyxHQUFHO1lBQ1o7Z0JBQUNDLFNBQVMsRUFBQ3pCLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDLENBQUN3QixjQUFjO2dCQUFFQyxPQUFPLEVBQUMsSUFBSTthQUFFO1lBQy9EO2dCQUFDRixTQUFTLEVBQUNILFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQUVLLE9BQU8sRUFBQyxLQUFLO2FBQUM7WUFDMUM7Z0JBQUNGLFNBQVMsRUFBQ0gsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFBRUssT0FBTyxFQUFDLEtBQUs7YUFBQztZQUMxQztnQkFBQ0YsU0FBUyxFQUFDSCxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUFFSyxPQUFPLEVBQUMsS0FBSzthQUFDO1NBQzdDO1FBQ0QsSUFBTUMsVUFBVSxHQUFHcEMsT0FBTyxDQUFDZ0MsT0FBTyxDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsU0FBQUEsR0FBRzttQkFBSUEsR0FBRyxDQUFDTCxTQUFTO1NBQUEsQ0FBQztRQUNoRSxJQUFNTSxjQUFjLEdBQUdILFVBQVUsQ0FBQ0ksR0FBRyxDQUFDO2dCQUFFTCxPQUFPLFNBQVBBLE9BQU8sRUFBRUYsU0FBUyxTQUFUQSxTQUFTO2lDQUFLLDhEQUFDN0MsOERBQVU7Z0JBQUNxRCxJQUFJLEVBQUVkLFdBQVc7Z0JBQUU1QixLQUFLLEVBQUVvQyxPQUFPO2dCQUFFTyxJQUFJLEVBQUVULFNBQVM7Ozs7O3FCQUFHO1NBQUEsQ0FBQztRQUVqSSxxQkFDSSw4REFBQ1UsS0FBRztZQUFDQyxLQUFLLEVBQUVyRCxzRUFBTTs7OEJBQ2QsOERBQUNGLDBEQUFNOzs7O3dCQUFFO2dCQUNSLENBQUN5QixNQUFNLGtCQUFJLDhEQUFDK0IsSUFBRTs4QkFBRXBELFVBQVUsQ0FBQ2UsUUFBUSxDQUFDRSxXQUFXLENBQUMsQ0FBQ29DLFFBQVEsQ0FBQzs7Ozs7d0JBQU07Z0JBQ2hFLENBQUNoQyxNQUFNLGtCQUFHLDhEQUFDNkIsS0FBRztvQkFBQ0ksU0FBUyxFQUFDLGVBQWU7OEJBQUVSLGNBQWM7Ozs7O3dCQUFPO2dCQUMvRHpCLE1BQU0sa0JBQUksOERBQUM2QixLQUFHOztzQ0FDWCw4REFBQ0ssUUFBTTs0QkFBQ0MsT0FBTyxFQUFFdkIsU0FBUztzQ0FBRSxhQUFXOzs7OztnQ0FBUztzQ0FDaEQsOERBQUN3QixJQUFFO3NDQUFDLFdBQVM7Ozs7O2dDQUFLOzs7Ozs7d0JBQ1o7OEJBQ1YsOERBQUNDLEdBQUM7O3dCQUFDLGdCQUFjO3dCQUFDdkMsS0FBSzt3QkFBQyxJQUFFOzs7Ozs7d0JBQUk7OEJBQzlCLDhEQUFDdUMsR0FBQzs7d0JBQUMsYUFBVzt3QkFBQ2xDLFNBQVM7Ozs7Ozt3QkFBSzs7Ozs7O2dCQUMzQixDQUNUO0tBQ0osTUFBTTtRQUNILHFCQUNJLDhEQUFDMEIsS0FBRztzQkFDQSw0RUFBQ3RELDBEQUFNOzs7O29CQUFFOzs7OztnQkFDUCxDQUNUO0tBQ0o7Q0FHSixFQUNELGlDQUFpQztDQUNqQyxnQkFBZ0I7R0F0R1FHLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzPzZmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1aXpCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVpekJ1dHRvblwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBscyBmcm9tICdsb2NhbC1zdG9yYWdlJ1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9xdWl6enkubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6ICgpe1xuICAgIGNvbnN0IFtxdWl6RGF0YSwgc2V0UXVpekRhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbcXVlc3Rpb25OdW0sIHNldFF1ZXN0aW9uTnVtXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSAoMClcbiAgICBjb25zdCBbcXVpenp5LCBzZXRRdWl6enldID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2hpZ2hTY29yZSwgc2V0SGlnaFNjb3JlXSA9IHVzZVN0YXRlKGxzLmdldChcImhpZ2hzY29yZVwiKSlcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9NlwiKVxuICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gc2V0UXVpekRhdGEoZGF0YS5yZXN1bHRzKSlcbiAgICAgICAgaWYoIWhpZ2hTY29yZSl7XG4gICAgICAgICAgICBscy5zZXQoXCJoaWdoc2NvcmVcIiwgMClcbiAgICAgICAgfVxuICAgIH0sW3F1aXp6eV0pXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmKHF1ZXN0aW9uTnVtID09PSA1KVxuICAgICAgICB7XG4gICAgICAgICAgICBzZXRRdWl6RGF0YShudWxsKVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhxdWl6RGF0YSlcbiAgICAgICAgICAgIHNldFF1aXp6eSh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGlmKHNjb3JlID49IGhpZ2hTY29yZSl7XG4gICAgICAgICAgICBzZXRIaWdoU2NvcmUoc2NvcmUpXG4gICAgICAgICAgICBscy5zZXQoXCJoaWdoc2NvcmVcIiwgc2NvcmUpXG4gICAgICAgIH1cbiAgICB9LFtxdWVzdGlvbk51bV0pXG4gICAgZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gICAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xuICAgIH1cbiAgICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIHNldFNjb3JlKDApXG4gICAgICAgIHNldFF1ZXN0aW9uTnVtKDApXG4gICAgICAgIHNldFF1aXp6eShmYWxzZSlcbiAgICB9XG4gICAgLy90YXJnZXQgaXMgYWx3YXlzIGEgc3RyaW5nXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlIHdlIGdvOicsIGUudGFyZ2V0LnZhbHVlLCB0eXBlb2YgZS50YXJnZXQudmFsdWUpXG4gICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIndvcmtpbmdcIilcbiAgICAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSlcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uTnVtKHF1ZXN0aW9uTnVtICsgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uTnVtKHF1ZXN0aW9uTnVtICsgMSlcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCAgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT0gMCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgtLTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgW2FycmF5W2N1cnJlbnRJbmRleF0sIGFycmF5W3JhbmRvbUluZGV4XV0gPSBbXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0sIGFycmF5W2N1cnJlbnRJbmRleF1dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG5cbiAgICBpZihxdWl6RGF0YSl7XG4gICAgICAgIGNvbnN0IHdyb25nQW5zd2VycyA9IHF1aXpEYXRhW3F1ZXN0aW9uTnVtXS5pbmNvcnJlY3RfYW5zd2Vyc1xuICAgICAgICBjb25zdCBhbnN3ZXJzID0gW1xuICAgICAgICAgICAge3N1Ym1pdGlvbjpxdWl6RGF0YVtxdWVzdGlvbk51bV0uY29ycmVjdF9hbnN3ZXIsIGNvcnJlY3Q6dHJ1ZSx9LFxuICAgICAgICAgICAge3N1Ym1pdGlvbjp3cm9uZ0Fuc3dlcnNbMF0sIGNvcnJlY3Q6ZmFsc2V9LFxuICAgICAgICAgICAge3N1Ym1pdGlvbjp3cm9uZ0Fuc3dlcnNbMV0sIGNvcnJlY3Q6ZmFsc2V9LFxuICAgICAgICAgICAge3N1Ym1pdGlvbjp3cm9uZ0Fuc3dlcnNbMl0sIGNvcnJlY3Q6ZmFsc2V9LFxuICAgICAgICBdXG4gICAgICAgIGNvbnN0IHJhbkFuc3dlcnMgPSBzaHVmZmxlKGFuc3dlcnMpLmZpbHRlcihvYmogPT4gb2JqLnN1Ym1pdGlvbilcbiAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudHMgPSByYW5BbnN3ZXJzLm1hcCgoe2NvcnJlY3QsIHN1Ym1pdGlvbn0pPT4gPFF1aXpCdXR0b24gZnVuYz17aGFuZGxlQ2xpY2t9IHZhbHVlPXtjb3JyZWN0fSB0ZXh0PXtzdWJtaXRpb259Lz4pXG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzfT5cbiAgICAgICAgICAgICAgICA8TGF5b3V0Lz5cbiAgICAgICAgICAgICAgICB7IXF1aXp6eSAmJiA8aDQ+e2RlY29kZUh0bWwocXVpekRhdGFbcXVlc3Rpb25OdW1dLnF1ZXN0aW9uKX08L2g0Pn1cbiAgICAgICAgICAgICAgICB7IXF1aXp6eSAmJjxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc3F1aXp6eVwiPntidXR0b25FbGVtZW50c308L2Rpdj59XG4gICAgICAgICAgICAgICAge3F1aXp6eSAmJiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0R2FtZX0+UExBQ0VIT0xERVI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlF1aXogT3ZlcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8cD5DdXJyZW50U2NvcmU6IHtzY29yZX0vNTwvcD5cbiAgICAgICAgICAgICAgICA8cD5IaWdoU2NvcmU6IHtoaWdoU2NvcmV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQvPlxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG5cblxufVxuLy8gZWFjaCBxdWVzdGlvbiBhcyBvd24gY29tcGVuZW50XG4vL2J1dHRvbnMgd2l0aGluIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUXVpekJ1dHRvbiIsIkxheW91dCIsImxzIiwiU3R5bGVzIiwiUXVpeiIsImRlY29kZUh0bWwiLCJodG1sIiwidHh0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidmFsdWUiLCJzaHVmZmxlIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJxdWVzdGlvbk51bSIsInNldFF1ZXN0aW9uTnVtIiwic2NvcmUiLCJzZXRTY29yZSIsInF1aXp6eSIsInNldFF1aXp6eSIsImdldCIsImhpZ2hTY29yZSIsInNldEhpZ2hTY29yZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicmVzdWx0cyIsInNldCIsInJlc2V0R2FtZSIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsIndyb25nQW5zd2VycyIsImluY29ycmVjdF9hbnN3ZXJzIiwiYW5zd2VycyIsInN1Ym1pdGlvbiIsImNvcnJlY3RfYW5zd2VyIiwiY29ycmVjdCIsInJhbkFuc3dlcnMiLCJmaWx0ZXIiLCJvYmoiLCJidXR0b25FbGVtZW50cyIsIm1hcCIsImZ1bmMiLCJ0ZXh0IiwiZGl2Iiwic3R5bGUiLCJoNCIsInF1ZXN0aW9uIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});