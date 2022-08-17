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

/***/ "./components/Question.js":
/*!********************************!*\
  !*** ./components/Question.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Question; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QuizButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizButton */ \"./components/QuizButton.js\");\n\n\n\nfunction Question(props) {\n    var shuffle = function shuffle(array) {\n        var currentIndex = array.length, randomIndex;\n        // While there remain elements to shuffle.\n        while(currentIndex != 0){\n            // Pick a remaining element.\n            randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex--;\n            var ref;\n            ref = [\n                array[randomIndex],\n                array[currentIndex]\n            ], array[currentIndex] = ref[0], array[randomIndex] = ref[1], ref;\n        }\n        return array;\n    };\n    //const answer = props.right\n    //const id = props.question\n    //const notAnswer = props.wrong.map(x => x)\n    var wrongAnswers = props.wrong.split(\",\");\n    var answers = [\n        {\n            submition: props.right,\n            correct: true\n        },\n        {\n            submition: wrongAnswers[0],\n            correct: false\n        },\n        {\n            submition: wrongAnswers[1],\n            correct: false\n        },\n        {\n            submition: wrongAnswers[2],\n            correct: false\n        }, \n    ];\n    var handleClick = function(e) {\n        console.log(e.target.value);\n    };\n    console.log(answers[0]);\n    var ranAnswers = shuffle(answers);\n    console.log(ranAnswers[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: props.question\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/components/Question.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuizButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    func: handleClick,\n                    value: ranAnswers[0].correct,\n                    text: ranAnswers[0].submition\n                }, void 0, false, {\n                    fileName: \"/Users/kylemarch/dev/kyleweb/components/Question.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/components/Question.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kylemarch/dev/kyleweb/components/Question.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}; //prop is true? passed thru handleclick in quizjs\n_c = Question;\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1ZXN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXFDO0FBQ0E7QUFFdEIsU0FBU0csUUFBUSxDQUFFQyxLQUFLLEVBQUU7UUFnQjVCQyxPQUFPLEdBQWhCLFNBQVNBLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO1FBQ3BCLElBQUlDLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxNQUFNLEVBQUdDLFdBQVc7UUFFN0MsMENBQTBDO1FBQzFDLE1BQU9GLFlBQVksSUFBSSxDQUFDLENBQUU7WUFFdEIsNEJBQTRCO1lBQzVCRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHTCxZQUFZLENBQUMsQ0FBQztZQUN2REEsWUFBWSxFQUFFLENBQUM7O2tCQUc2QjtnQkFDNUNELEtBQUssQ0FBQ0csV0FBVyxDQUFDO2dCQUFFSCxLQUFLLENBQUNDLFlBQVksQ0FBQzthQUFDLEVBRHZDRCxLQUFLLENBQUNDLFlBQVksQ0FBQyxXQUFFRCxLQUFLLENBQUNHLFdBQVcsQ0FBQyxjQTlCcEQsQ0ErQnFEO1NBQzVDO1FBRUwsT0FBT0gsS0FBSyxDQUFDO0tBQ1o7SUEvQkYsNEJBQTRCO0lBQzNCLDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDM0MsSUFBTU8sWUFBWSxHQUFHVCxLQUFLLENBQUNVLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUUzQyxJQUFNQyxPQUFPLEdBQUc7UUFDWjtZQUFDQyxTQUFTLEVBQUNiLEtBQUssQ0FBQ2MsS0FBSztZQUFFQyxPQUFPLEVBQUMsSUFBSTtTQUFFO1FBQ3RDO1lBQUNGLFNBQVMsRUFBQ0osWUFBWSxDQUFDLENBQUMsQ0FBQztZQUFFTSxPQUFPLEVBQUMsS0FBSztTQUFDO1FBQzFDO1lBQUNGLFNBQVMsRUFBQ0osWUFBWSxDQUFDLENBQUMsQ0FBQztZQUFFTSxPQUFPLEVBQUMsS0FBSztTQUFDO1FBQzFDO1lBQUNGLFNBQVMsRUFBQ0osWUFBWSxDQUFDLENBQUMsQ0FBQztZQUFFTSxPQUFPLEVBQUMsS0FBSztTQUFDO0tBQzdDO0lBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUM7S0FDOUI7SUFtQkRILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkIsSUFBTVUsVUFBVSxHQUFHckIsT0FBTyxDQUFDVyxPQUFPLENBQUM7SUFFbkNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHMUIscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFFeEIsS0FBSyxDQUFDeUIsUUFBUTs7Ozs7b0JBQU07MEJBQ3pCLDhEQUFDRixLQUFHOzBCQUNBLDRFQUFDekIsbURBQVU7b0JBQUM0QixJQUFJLEVBQUVWLFdBQVc7b0JBQUVLLEtBQUssRUFBRUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDUCxPQUFPO29CQUFFWSxJQUFJLEVBQUVMLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ1QsU0FBUzs7Ozs7d0JBQUc7Ozs7O29CQUszRjs7Ozs7O1lBQ0osQ0FDVDtDQUNKLEVBRUQsaURBQWlEO0FBdkR6QmQsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1ZXN0aW9uLmpzPzRjMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUXVpekJ1dHRvbiBmcm9tIFwiLi9RdWl6QnV0dG9uXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlc3Rpb24gKHByb3BzKSB7XG4gICAvL2NvbnN0IGFuc3dlciA9IHByb3BzLnJpZ2h0XG4gICAgLy9jb25zdCBpZCA9IHByb3BzLnF1ZXN0aW9uXG4gICAgLy9jb25zdCBub3RBbnN3ZXIgPSBwcm9wcy53cm9uZy5tYXAoeCA9PiB4KVxuICAgIGNvbnN0IHdyb25nQW5zd2VycyA9IHByb3BzLndyb25nLnNwbGl0KFwiLFwiKVxuXG4gICAgY29uc3QgYW5zd2VycyA9IFtcbiAgICAgICAge3N1Ym1pdGlvbjpwcm9wcy5yaWdodCwgY29ycmVjdDp0cnVlLH0sXG4gICAgICAgIHtzdWJtaXRpb246d3JvbmdBbnN3ZXJzWzBdLCBjb3JyZWN0OmZhbHNlfSxcbiAgICAgICAge3N1Ym1pdGlvbjp3cm9uZ0Fuc3dlcnNbMV0sIGNvcnJlY3Q6ZmFsc2V9LFxuICAgICAgICB7c3VibWl0aW9uOndyb25nQW5zd2Vyc1syXSwgY29ycmVjdDpmYWxzZX0sXG4gICAgXVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgICB9XG4gICAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCAgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuXG4gICAgICAgIHdoaWxlIChjdXJyZW50SW5kZXggIT0gMCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgtLTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgW2FycmF5W2N1cnJlbnRJbmRleF0sIGFycmF5W3JhbmRvbUluZGV4XV0gPSBbXG4gICAgICAgICAgICBhcnJheVtyYW5kb21JbmRleF0sIGFycmF5W2N1cnJlbnRJbmRleF1dO1xuICAgICAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKGFuc3dlcnNbMF0pXG4gICAgXG4gICAgY29uc3QgcmFuQW5zd2VycyA9IHNodWZmbGUoYW5zd2VycylcblxuICAgIGNvbnNvbGUubG9nKHJhbkFuc3dlcnNbMF0pXG5cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0Pntwcm9wcy5xdWVzdGlvbn08L2g0PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UXVpekJ1dHRvbiBmdW5jPXtoYW5kbGVDbGlja30gdmFsdWU9e3JhbkFuc3dlcnNbMF0uY29ycmVjdH0gdGV4dD17cmFuQW5zd2Vyc1swXS5zdWJtaXRpb259Lz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy9wcm9wIGlzIHRydWU/IHBhc3NlZCB0aHJ1IGhhbmRsZWNsaWNrIGluIHF1aXpqcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUXVpekJ1dHRvbiIsIlF1ZXN0aW9uIiwicHJvcHMiLCJzaHVmZmxlIiwiYXJyYXkiLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIndyb25nQW5zd2VycyIsIndyb25nIiwic3BsaXQiLCJhbnN3ZXJzIiwic3VibWl0aW9uIiwicmlnaHQiLCJjb3JyZWN0IiwiaGFuZGxlQ2xpY2siLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwicmFuQW5zd2VycyIsImRpdiIsImg0IiwicXVlc3Rpb24iLCJmdW5jIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Question.js\n");

/***/ }),

/***/ "./components/QuizButton.js":
/*!**********************************!*\
  !*** ./components/QuizButton.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction QuizButton(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            value: props.value,\n            onClick: props.func,\n            children: props.text\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/components/QuizButton.js\",\n            lineNumber: 5,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kylemarch/dev/kyleweb/components/QuizButton.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, this);\n};\n_c = QuizButton;\nvar _c;\n$RefreshReg$(_c, \"QuizButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1aXpCdXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxVQUFVLENBQUVDLEtBQUssRUFBRTtJQUV2QyxxQkFDSSw4REFBQ0MsS0FBRztrQkFDQSw0RUFBQ0MsUUFBTTtZQUFDQyxLQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBSztZQUFFQyxPQUFPLEVBQUVKLEtBQUssQ0FBQ0ssSUFBSTtzQkFBR0wsS0FBSyxDQUFDTSxJQUFJOzs7OztnQkFBVTs7Ozs7WUFDcEUsQ0FDVDtDQUVKO0FBUnVCUCxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUXVpekJ1dHRvbi5qcz83NGM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpCdXR0b24gKHByb3BzKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17cHJvcHMudmFsdWV9IG9uQ2xpY2s9e3Byb3BzLmZ1bmN9Pntwcm9wcy50ZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn0iXSwibmFtZXMiOlsiUXVpekJ1dHRvbiIsInByb3BzIiwiZGl2IiwiYnV0dG9uIiwidmFsdWUiLCJvbkNsaWNrIiwiZnVuYyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QuizButton.js\n");

/***/ }),

/***/ "./pages/quiz.js":
/*!***********************!*\
  !*** ./pages/quiz.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Question */ \"./components/Question.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), quizData = ref[0], setQuizData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), pressed = ref1[0], isPressed = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=5\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, [\n        button\n    ]);\n    var quizArr = quizData.map(function(obj) {\n        return obj;\n    });\n    var questionElements = quizData.map(function(param) {\n        var incorrect_answers = param.incorrect_answers, question = param.question, type = param.type, correct_answer = param.correct_answer, i = param.i;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Question__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            question: decodeHtml(question),\n            type: type,\n            wrong: decodeHtml(incorrect_answers),\n            right: decodeHtml(correct_answer)\n        }, void 0, false, {\n            fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            questionElements,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kylemarch/dev/kyleweb/pages/quiz.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ0U7QUFDRzs7QUFFbEMsU0FBU0ksSUFBSSxHQUFHOztRQVVsQkMsVUFBVSxHQUFuQixTQUFTQSxVQUFVLENBQUNDLElBQUksRUFBRTtRQUN0QixJQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUM1Q0YsR0FBRyxDQUFDRyxTQUFTLEdBQUdKLElBQUksQ0FBQztRQUNyQixPQUFPQyxHQUFHLENBQUNJLEtBQUssQ0FBQztLQUNwQjs7SUFiRCxJQUFnQ1YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUxoRCxRQUttQixHQUFpQkEsR0FBWSxHQUE3QixFQUxuQixXQUtnQyxHQUFJQSxHQUFZLEdBQWhCO0lBQzVCLElBQTZCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBTmhELE9BTWtCLEdBQWVBLElBQWUsR0FBOUIsRUFObEIsU0FNNkIsR0FBSUEsSUFBZSxHQUFuQjtJQUV6QkQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZnQixLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FDNUNDLElBQUksQ0FBQ0MsU0FBQUEsR0FBRzttQkFBRUEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3JCRixJQUFJLENBQUNHLFNBQUFBLElBQUk7bUJBQUlQLFdBQVcsQ0FBQ08sSUFBSSxDQUFDQyxPQUFPLENBQUM7U0FBQSxDQUFDO0tBQzNDLEVBQUM7UUFBQ0MsTUFBTTtLQUFDLENBQUM7SUFTWCxJQUFNQyxPQUFPLEdBQUdYLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDQyxTQUFBQSxHQUFHO2VBQUlBLEdBQUc7S0FBQSxDQUFDO0lBRXhDLElBQU1DLGdCQUFnQixHQUFHZCxRQUFRLENBQUNZLEdBQUcsQ0FBQztZQUFFRyxpQkFBaUIsU0FBakJBLGlCQUFpQixFQUFFQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLGNBQWMsU0FBZEEsY0FBYyxFQUFFQyxDQUFDLFNBQURBLENBQUM7NkJBQ3hGLDhEQUFDN0IsNERBQVE7WUFBQzBCLFFBQVEsRUFBRXZCLFVBQVUsQ0FBQ3VCLFFBQVEsQ0FBQztZQUN4Q0MsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZHLEtBQUssRUFBRTNCLFVBQVUsQ0FBQ3NCLGlCQUFpQixDQUFDO1lBQ3BDTSxLQUFLLEVBQUU1QixVQUFVLENBQUN5QixjQUFjLENBQUM7Ozs7O2lCQUMvQjtLQUFBLENBQUM7SUFFUCxxQkFDSSw4REFBQ0ksS0FBRzs7WUFDQ1IsZ0JBQWdCOzBCQUNqQiw4REFBQ0osUUFBTTs7OztvQkFBVTs7Ozs7O1lBQ2YsQ0FDVDtDQUNKLEVBQ0QsaUNBQWlDO0NBQ2pDLGdCQUFnQjtHQWxDUWxCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9xdWl6LmpzPzZmMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1F1ZXN0aW9uXCI7XG5pbXBvcnQgQW5zd2VyU2hlZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeiAoKXtcbiAgICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtwcmVzc2VkLCBpc1ByZXNzZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9vcGVudGRiLmNvbS9hcGkucGhwP2Ftb3VudD01XCIpXG4gICAgICAgIC50aGVuKHJlcz0+cmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRRdWl6RGF0YShkYXRhLnJlc3VsdHMpKVxuICAgIH0sW2J1dHRvbl0pXG4gICAgXG4gICAgZnVuY3Rpb24gZGVjb2RlSHRtbChodG1sKSB7XG4gICAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHR4dC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdHh0LnZhbHVlO1xuICAgIH1cblxuXG4gICAgY29uc3QgcXVpekFyciA9IHF1aXpEYXRhLm1hcChvYmogPT4gb2JqKVxuIFxuICAgIGNvbnN0IHF1ZXN0aW9uRWxlbWVudHMgPSBxdWl6RGF0YS5tYXAoKHtpbmNvcnJlY3RfYW5zd2VycywgcXVlc3Rpb24sIHR5cGUsIGNvcnJlY3RfYW5zd2VyLCBpfSkgPT4gXG4gICAgICAgIDxRdWVzdGlvbiBxdWVzdGlvbj17ZGVjb2RlSHRtbChxdWVzdGlvbil9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIHdyb25nPXtkZWNvZGVIdG1sKGluY29ycmVjdF9hbnN3ZXJzKX1cbiAgICAgICAgcmlnaHQ9e2RlY29kZUh0bWwoY29ycmVjdF9hbnN3ZXIpfVxuICAgICAgICAvPilcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtxdWVzdGlvbkVsZW1lbnRzfVxuICAgICAgICAgICAgPGJ1dHRvbj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuLy8gZWFjaCBxdWVzdGlvbiBhcyBvd24gY29tcGVuZW50XG4vL2J1dHRvbnMgd2l0aGluIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUXVlc3Rpb24iLCJBbnN3ZXJTaGVldCIsIlF1aXoiLCJkZWNvZGVIdG1sIiwiaHRtbCIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZhbHVlIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsInByZXNzZWQiLCJpc1ByZXNzZWQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlc3VsdHMiLCJidXR0b24iLCJxdWl6QXJyIiwibWFwIiwib2JqIiwicXVlc3Rpb25FbGVtZW50cyIsImluY29ycmVjdF9hbnN3ZXJzIiwicXVlc3Rpb24iLCJ0eXBlIiwiY29ycmVjdF9hbnN3ZXIiLCJpIiwid3JvbmciLCJyaWdodCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});