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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizButton */ \"./components/QuizButton.js\");\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    var shuffle = function shuffle(array) {\n        var currentIndex = array.length, randomIndex;\n        // While there remain elements to shuffle.\n        while(currentIndex != 0){\n            // Pick a remaining element.\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            var ref;\n            ref = [\n                array[randomIndex],\n                array[currentIndex]\n            ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n        }\n        return array;\n    };\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), quizData = ref3[0], setQuizData = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), questionNum = ref1[0], setQuestionNum = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), score = ref2[0], setScore = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=6\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, [\n        score\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (questionNum === 5) {\n            setQuizData(null);\n            console.log(quizData);\n        }\n    }, [\n        questionNum\n    ]);\n    var increase = function() {\n        setQuestionNum(questionNum + 1);\n    };\n    var resetGame = function() {\n        setScore(0);\n        setQuestionNum(0);\n    };\n    //target is always a string\n    var handleClick = function(e) {\n        console.log(\"here we go:\", e.target.value, _typeof(e.target.value));\n        if (e.target.value === \"true\") {\n            console.log(\"working\");\n            setScore(score + 1);\n            setQuestionNum(questionNum + 1);\n        } else {\n            console.log(\"notWorking\");\n        }\n    };\n    if (quizData) {\n        var _this = this;\n        console.log(quizData[questionNum]);\n        var wrongAnswers = quizData[questionNum].incorrect_answers;\n        var answers = [\n            {\n                submition: quizData[questionNum].correct_answer,\n                correct: true\n            },\n            {\n                submition: wrongAnswers[0],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[1],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[2],\n                correct: false\n            }, \n        ];\n        var ranAnswers = shuffle(answers).filter(function(obj) {\n            return obj.submition;\n        });\n        var buttonElements = ranAnswers.map(function(param) {\n            var correct = param.correct, submition = param.submition;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                func: handleClick,\n                value: correct,\n                text: submition\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 73,\n                columnNumber: 72\n            }, _this);\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: quizData[questionNum].question\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, this),\n                buttonElements,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: increase\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this),\n                score\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 76,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: resetGame,\n            children: \"PLACEHOLDER\"\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, this);\n    }\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"jMayX/SeW86ztsN0GGNHQG9vU3g=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztBQUE0QztBQUNNOztBQUVuQyxTQUFTRyxJQUFJLEdBQUc7UUFpQmxCQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsSUFBSSxFQUFFO1FBQ3RCLElBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQzVDRixHQUFHLENBQUNHLFNBQVMsR0FBR0osSUFBSSxDQUFDO1FBQ3JCLE9BQU9DLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDO0tBQ3BCO1FBb0JRQyxPQUFPLEdBQWhCLFNBQVNBLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO1FBQ3BCLElBQUlDLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxNQUFNLEVBQUdDLFdBQVc7UUFFN0MsMENBQTBDO1FBQzFDLE1BQU9GLFlBQVksSUFBSSxDQUFDLENBQUU7WUFFdEIsNEJBQTRCO1lBQzVCRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHTCxZQUFZLENBQUMsQ0FBQztZQUN2REEsWUFBWSxFQUFFLENBQUM7O2tCQUc2QjtnQkFDNUNELEtBQUssQ0FBQ0csV0FBVyxDQUFDO2dCQUFFSCxLQUFLLENBQUNDLFlBQVksQ0FBQzthQUFDLEVBRHZDRCxLQUFLLENBQUNDLFlBQVksQ0FBQyxXQUFFRCxLQUFLLENBQUNHLFdBQVcsQ0FBQyxjQXZEcEQsQ0F3RHFEO1NBQzVDO1FBRUQsT0FBT0gsS0FBSyxDQUFDO0tBQ1o7O0lBeERMLElBQWdDWCxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBSmxELFFBSW1CLEdBQWlCQSxJQUFjLEdBQS9CLEVBSm5CLFdBSWdDLEdBQUlBLElBQWMsR0FBbEI7SUFDNUIsSUFBc0NBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFMckQsV0FLc0IsR0FBb0JBLElBQVcsR0FBL0IsRUFMdEIsY0FLc0MsR0FBSUEsSUFBVyxHQUFmO0lBQ2xDLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUUsQ0FBQyxDQUFDLEVBTjFDLEtBTWdCLEdBQWNBLElBQVksR0FBMUIsRUFOaEIsUUFNMEIsR0FBSUEsSUFBWSxHQUFoQjtJQUV0QkQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1Z5QixLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FDNUNDLElBQUksQ0FBQ0MsU0FBQUEsR0FBRzttQkFBRUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3JCRixJQUFJLENBQUNHLFNBQUFBLElBQUk7bUJBQUlULFdBQVcsQ0FBQ1MsSUFBSSxDQUFDQyxPQUFPLENBQUM7U0FBQSxDQUFDO0tBQzNDLEVBQUM7UUFBQ1AsS0FBSztLQUFDLENBQUM7SUFDVnZCLGdEQUFTLENBQUMsV0FBSTtRQUNWLElBQUdxQixXQUFXLEtBQUssQ0FBQyxFQUNwQjtZQUNJRCxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2pCVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsUUFBUSxDQUFDO1NBQ3hCO0tBQ0osRUFBQztRQUFDRSxXQUFXO0tBQUMsQ0FBQztJQU1oQixJQUFNWSxRQUFRLEdBQUcsV0FBTTtRQUNuQlgsY0FBYyxDQUFDRCxXQUFXLEdBQUMsQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsSUFBTWEsU0FBUyxHQUFHLFdBQU07UUFDcEJWLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDWEYsY0FBYyxDQUFDLENBQUMsQ0FBQztLQUNwQjtJQUNELDJCQUEyQjtJQUMzQixJQUFNYSxXQUFXLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3ZCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDM0IsS0FBSyxFQUFFLE9BQXFCLENBQWQwQixDQUFDLENBQUNDLE1BQU0sQ0FBQzNCLEtBQUssRUFBQztRQUNqRSxJQUFHMEIsQ0FBQyxDQUFDQyxNQUFNLENBQUMzQixLQUFLLEtBQUssTUFBTSxFQUFDO1lBQ3pCcUIsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3RCUixRQUFRLENBQUNELEtBQUssR0FBRyxDQUFDLENBQUM7WUFDbkJELGNBQWMsQ0FBQ0QsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUNsQyxNQUFNO1lBQ0hVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztTQUM1QjtLQUNBO0lBb0JMLElBQUdiLFFBQVEsRUFBQzs7UUFDUlksT0FBTyxDQUFDQyxHQUFHLENBQUNiLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDLENBQUM7UUFDbEMsSUFBTWlCLFlBQVksR0FBR25CLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDLENBQUNrQixpQkFBaUI7UUFDNUQsSUFBTUMsT0FBTyxHQUFHO1lBQ1o7Z0JBQUNDLFNBQVMsRUFBQ3RCLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDLENBQUNxQixjQUFjO2dCQUFFQyxPQUFPLEVBQUMsSUFBSTthQUFFO1lBQy9EO2dCQUFDRixTQUFTLEVBQUNILFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQUVLLE9BQU8sRUFBQyxLQUFLO2FBQUM7WUFDMUM7Z0JBQUNGLFNBQVMsRUFBQ0gsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFBRUssT0FBTyxFQUFDLEtBQUs7YUFBQztZQUMxQztnQkFBQ0YsU0FBUyxFQUFDSCxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUFFSyxPQUFPLEVBQUMsS0FBSzthQUFDO1NBQzdDO1FBQ0QsSUFBTUMsVUFBVSxHQUFHakMsT0FBTyxDQUFDNkIsT0FBTyxDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsU0FBQUEsR0FBRzttQkFBSUEsR0FBRyxDQUFDTCxTQUFTO1NBQUEsQ0FBQztRQUNoRSxJQUFNTSxjQUFjLEdBQUdILFVBQVUsQ0FBQ0ksR0FBRyxDQUFDO2dCQUFFTCxPQUFPLFNBQVBBLE9BQU8sRUFBRUYsU0FBUyxTQUFUQSxTQUFTO2lDQUFLLDhEQUFDdkMsOERBQVU7Z0JBQUMrQyxJQUFJLEVBQUVkLFdBQVc7Z0JBQUV6QixLQUFLLEVBQUVpQyxPQUFPO2dCQUFFTyxJQUFJLEVBQUVULFNBQVM7Ozs7O3FCQUFHO1NBQUEsQ0FBQztRQUVqSSxxQkFDSSw4REFBQ1UsS0FBRzs7OEJBQ0EsOERBQUNDLElBQUU7OEJBQUVqQyxRQUFRLENBQUNFLFdBQVcsQ0FBQyxDQUFDZ0MsUUFBUTs7Ozs7d0JBQU07Z0JBQ3hDTixjQUFjOzhCQUNmLDhEQUFDTyxRQUFNO29CQUFDQyxPQUFPLEVBQUV0QixRQUFROzs7Ozt3QkFBVztnQkFDbkNWLEtBQUs7Ozs7OztnQkFDSixDQUNUO0tBQ0osTUFBTTtRQUNILHFCQUVJLDhEQUFDK0IsUUFBTTtZQUFDQyxPQUFPLEVBQUVyQixTQUFTO3NCQUFFLGFBQVc7Ozs7O2dCQUFTLENBQ25EO0tBQ0o7Q0FHSixFQUNELGlDQUFpQztDQUNqQyxnQkFBZ0I7R0F6RlEvQixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcz82ZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBRdWl6QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1aXpCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeiAoKXtcbiAgICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3F1ZXN0aW9uTnVtLCBzZXRRdWVzdGlvbk51bV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUgKDApXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD02XCIpXG4gICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRRdWl6RGF0YShkYXRhLnJlc3VsdHMpKVxuICAgIH0sW3Njb3JlXSlcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYocXVlc3Rpb25OdW0gPT09IDUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNldFF1aXpEYXRhKG51bGwpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWl6RGF0YSlcbiAgICAgICAgfVxuICAgIH0sW3F1ZXN0aW9uTnVtXSlcbiAgICBmdW5jdGlvbiBkZWNvZGVIdG1sKGh0bWwpIHtcbiAgICAgICAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdHh0LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiB0eHQudmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGluY3JlYXNlID0gKCkgPT4ge1xuICAgICAgICBzZXRRdWVzdGlvbk51bShxdWVzdGlvbk51bSsxKVxuICAgIH1cbiAgICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIHNldFNjb3JlKDApXG4gICAgICAgIHNldFF1ZXN0aW9uTnVtKDApXG4gICAgfVxuICAgIC8vdGFyZ2V0IGlzIGFsd2F5cyBhIHN0cmluZ1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUgd2UgZ286JywgZS50YXJnZXQudmFsdWUsIHR5cGVvZiBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgPT09ICd0cnVlJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcbiAgICAgICAgICAgIHNldFNjb3JlKHNjb3JlICsgMSlcbiAgICAgICAgICAgIHNldFF1ZXN0aW9uTnVtKHF1ZXN0aW9uTnVtICsgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90V29ya2luZ1wiKVxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsICByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPSAwKSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xuXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICBbYXJyYXlbY3VycmVudEluZGV4XSwgYXJyYXlbcmFuZG9tSW5kZXhdXSA9IFtcbiAgICAgICAgICAgIGFycmF5W3JhbmRvbUluZGV4XSwgYXJyYXlbY3VycmVudEluZGV4XV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICAgIH1cblxuICAgIGlmKHF1aXpEYXRhKXtcbiAgICAgICAgY29uc29sZS5sb2cocXVpekRhdGFbcXVlc3Rpb25OdW1dKVxuICAgICAgICBjb25zdCB3cm9uZ0Fuc3dlcnMgPSBxdWl6RGF0YVtxdWVzdGlvbk51bV0uaW5jb3JyZWN0X2Fuc3dlcnNcbiAgICAgICAgY29uc3QgYW5zd2VycyA9IFtcbiAgICAgICAgICAgIHtzdWJtaXRpb246cXVpekRhdGFbcXVlc3Rpb25OdW1dLmNvcnJlY3RfYW5zd2VyLCBjb3JyZWN0OnRydWUsfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzBdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzFdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzJdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgXVxuICAgICAgICBjb25zdCByYW5BbnN3ZXJzID0gc2h1ZmZsZShhbnN3ZXJzKS5maWx0ZXIob2JqID0+IG9iai5zdWJtaXRpb24pXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnRzID0gcmFuQW5zd2Vycy5tYXAoKHtjb3JyZWN0LCBzdWJtaXRpb259KT0+IDxRdWl6QnV0dG9uIGZ1bmM9e2hhbmRsZUNsaWNrfSB2YWx1ZT17Y29ycmVjdH0gdGV4dD17c3VibWl0aW9ufS8+KVxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg0PntxdWl6RGF0YVtxdWVzdGlvbk51bV0ucXVlc3Rpb259PC9oND5cbiAgICAgICAgICAgICAgICB7YnV0dG9uRWxlbWVudHN9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZWFzZX0+PC9idXR0b24+XG4gICAgICAgICAgICAgICAge3Njb3JlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4oXG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXRHYW1lfT5QTEFDRUhPTERFUjwvYnV0dG9uPlxuICAgICAgICApXG4gICAgfVxuXG5cbn1cbi8vIGVhY2ggcXVlc3Rpb24gYXMgb3duIGNvbXBlbmVudFxuLy9idXR0b25zIHdpdGhpbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlF1aXpCdXR0b24iLCJRdWl6IiwiZGVjb2RlSHRtbCIsImh0bWwiLCJ0eHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsInNodWZmbGUiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsInF1ZXN0aW9uTnVtIiwic2V0UXVlc3Rpb25OdW0iLCJzY29yZSIsInNldFNjb3JlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImluY3JlYXNlIiwicmVzZXRHYW1lIiwiaGFuZGxlQ2xpY2siLCJlIiwidGFyZ2V0Iiwid3JvbmdBbnN3ZXJzIiwiaW5jb3JyZWN0X2Fuc3dlcnMiLCJhbnN3ZXJzIiwic3VibWl0aW9uIiwiY29ycmVjdF9hbnN3ZXIiLCJjb3JyZWN0IiwicmFuQW5zd2VycyIsImZpbHRlciIsIm9iaiIsImJ1dHRvbkVsZW1lbnRzIiwibWFwIiwiZnVuYyIsInRleHQiLCJkaXYiLCJoNCIsInF1ZXN0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});