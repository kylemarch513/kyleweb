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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizButton */ \"./components/QuizButton.js\");\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    var shuffle = function shuffle(array) {\n        var currentIndex = array.length, randomIndex;\n        // While there remain elements to shuffle.\n        while(currentIndex != 0){\n            // Pick a remaining element.\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            var ref;\n            ref = [\n                array[randomIndex],\n                array[currentIndex]\n            ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n        }\n        return array;\n    };\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), quizData = ref3[0], setQuizData = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), questionNum = ref1[0], setQuestionNum = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0\n    ]), score = ref2[0], setScore = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=5\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, []);\n    var increase = function() {\n        setQuestionNum(questionNum + 1);\n    };\n    //target is always a string\n    var handleClick = function(e) {\n        console.log(\"here we go:\", e.target.value, _typeof(e.target.value));\n        if (e.target.value === \"true\") {\n            console.log(\"working\");\n            setScore(score + 1);\n            setQuestionNum(questionNum + 1);\n        } else {\n            console.log(\"notWorking\");\n        }\n    };\n    if (quizData.length !== 0) {\n        var _this = this;\n        console.log(quizData[questionNum]);\n        var wrongAnswers = quizData[questionNum].incorrect_answers;\n        var answers = [\n            {\n                submition: quizData[questionNum].correct_answer,\n                correct: true\n            },\n            {\n                submition: wrongAnswers[0],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[1],\n                correct: false\n            },\n            {\n                submition: wrongAnswers[2],\n                correct: false\n            }, \n        ];\n        var ranAnswers = shuffle(answers).filter(function(obj) {\n            return obj.submition;\n        });\n        var buttonElements = ranAnswers.map(function(param) {\n            var correct = param.correct, submition = param.submition;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                func: handleClick,\n                value: correct,\n                text: submition\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 63,\n                columnNumber: 72\n            }, _this);\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: quizData[questionNum].question\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                buttonElements,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: increase\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this),\n                score\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 66,\n            columnNumber: 13\n        }, this);\n    }\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"RKeSSlOj9zvKmSgeFSBfvWzPAR0=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FDSjtDQUdKLEVBQ0QsaUNBQWlDO0NBQ2pDLGdCQUFnQjtHQTFFUXBCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzPzZmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1aXpCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVpekJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6ICgpe1xuICAgIGNvbnN0IFtxdWl6RGF0YSwgc2V0UXVpekRhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3F1ZXN0aW9uTnVtLCBzZXRRdWVzdGlvbk51bV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUgKFswXSlcbiAgICBcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZmV0Y2goXCJodHRwczovL29wZW50ZGIuY29tL2FwaS5waHA/YW1vdW50PTVcIilcbiAgICAgICAgLnRoZW4ocmVzPT5yZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHNldFF1aXpEYXRhKGRhdGEucmVzdWx0cykpXG4gICAgfSxbXSlcbiAgICBcbiAgICBmdW5jdGlvbiBkZWNvZGVIdG1sKGh0bWwpIHtcbiAgICAgICAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdHh0LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJldHVybiB0eHQudmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGluY3JlYXNlID0gKCkgPT4ge1xuICAgICAgICBzZXRRdWVzdGlvbk51bShxdWVzdGlvbk51bSsxKVxuICAgIH1cbiAgICAvL3RhcmdldCBpcyBhbHdheXMgYSBzdHJpbmdcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIHdlIGdvOicsIGUudGFyZ2V0LnZhbHVlLCB0eXBlb2YgZS50YXJnZXQudmFsdWUpXG4gICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlID09PSAndHJ1ZScpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpXG4gICAgICAgICAgICBzZXRTY29yZShzY29yZSArIDEpXG4gICAgICAgICAgICBzZXRRdWVzdGlvbk51bShxdWVzdGlvbk51bSsxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3RXb3JraW5nXCIpXG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLlxuICAgICAgICB3aGlsZSAoY3VycmVudEluZGV4ICE9IDApIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50LlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4LS07XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIFthcnJheVtjdXJyZW50SW5kZXhdLCBhcnJheVtyYW5kb21JbmRleF1dID0gW1xuICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuXG4gICAgaWYocXVpekRhdGEubGVuZ3RoICE9PSAwKXtcbiAgICAgICAgY29uc29sZS5sb2cocXVpekRhdGFbcXVlc3Rpb25OdW1dKVxuICAgICAgICBjb25zdCB3cm9uZ0Fuc3dlcnMgPSBxdWl6RGF0YVtxdWVzdGlvbk51bV0uaW5jb3JyZWN0X2Fuc3dlcnNcbiAgICAgICAgY29uc3QgYW5zd2VycyA9IFtcbiAgICAgICAgICAgIHtzdWJtaXRpb246cXVpekRhdGFbcXVlc3Rpb25OdW1dLmNvcnJlY3RfYW5zd2VyLCBjb3JyZWN0OnRydWUsfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzBdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzFdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzJdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAgXVxuICAgICAgICBjb25zdCByYW5BbnN3ZXJzID0gc2h1ZmZsZShhbnN3ZXJzKS5maWx0ZXIob2JqID0+IG9iai5zdWJtaXRpb24pXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnRzID0gcmFuQW5zd2Vycy5tYXAoKHtjb3JyZWN0LCBzdWJtaXRpb259KT0+IDxRdWl6QnV0dG9uIGZ1bmM9e2hhbmRsZUNsaWNrfSB2YWx1ZT17Y29ycmVjdH0gdGV4dD17c3VibWl0aW9ufS8+KVxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg0PntxdWl6RGF0YVtxdWVzdGlvbk51bV0ucXVlc3Rpb259PC9oND5cbiAgICAgICAgICAgICAgICB7YnV0dG9uRWxlbWVudHN9XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZWFzZX0+PC9idXR0b24+XG4gICAgICAgICAgICAgICAge3Njb3JlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cblxufVxuLy8gZWFjaCBxdWVzdGlvbiBhcyBvd24gY29tcGVuZW50XG4vL2J1dHRvbnMgd2l0aGluIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUXVpekJ1dHRvbiIsIlF1aXoiLCJkZWNvZGVIdG1sIiwiaHRtbCIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZhbHVlIiwic2h1ZmZsZSIsImFycmF5IiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJxdWl6RGF0YSIsInNldFF1aXpEYXRhIiwicXVlc3Rpb25OdW0iLCJzZXRRdWVzdGlvbk51bSIsInNjb3JlIiwic2V0U2NvcmUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlc3VsdHMiLCJpbmNyZWFzZSIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ3cm9uZ0Fuc3dlcnMiLCJpbmNvcnJlY3RfYW5zd2VycyIsImFuc3dlcnMiLCJzdWJtaXRpb24iLCJjb3JyZWN0X2Fuc3dlciIsImNvcnJlY3QiLCJyYW5BbnN3ZXJzIiwiZmlsdGVyIiwib2JqIiwiYnV0dG9uRWxlbWVudHMiLCJtYXAiLCJmdW5jIiwidGV4dCIsImRpdiIsImg0IiwicXVlc3Rpb24iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});