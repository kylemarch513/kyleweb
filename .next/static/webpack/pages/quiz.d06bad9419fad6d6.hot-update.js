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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var decodeHtml = function decodeHtml(html) {\n        var txt = document.createElement(\"textarea\");\n        txt.innerHTML = html;\n        return txt.value;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), quizData = ref[0], setQuizData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), answerKey = ref1[0], setAnswerKey = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), questionNum = ref2[0], setQuestionNum = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        fetch(\"https://opentdb.com/api.php?amount=5\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setQuizData(data.results);\n        });\n    }, []);\n    if (quizData.length !== 0) {\n        console.log(quizData[questionNum].question);\n        var wrongAnswers = quizData[questionNum].incorrect_answers.split(\",\");\n    }\n}; // each question as own compenent\n //buttons within\n_s(Quiz, \"D6ciApwllrWDsKN5R4l1XRJ4a4g=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0Qzs7QUFFN0IsU0FBU0UsSUFBSSxHQUFHO1FBV2xCQyxVQUFVLEdBQW5CLFNBQVNBLFVBQVUsQ0FBQ0MsSUFBSSxFQUFFO1FBQ3RCLElBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQzVDRixHQUFHLENBQUNHLFNBQVMsR0FBR0osSUFBSSxDQUFDO1FBQ3JCLE9BQU9DLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDO0tBQ3BCOztJQWRELElBQWdDUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBSGhELFFBR21CLEdBQWlCQSxHQUFZLEdBQTdCLEVBSG5CLFdBR2dDLEdBQUlBLEdBQVksR0FBaEI7SUFDNUIsSUFBa0NBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUpoRCxTQUlvQixHQUFrQkEsSUFBVSxHQUE1QixFQUpwQixZQUlrQyxHQUFJQSxJQUFVLEdBQWQ7SUFDOUIsSUFBc0NBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFMckQsV0FLc0IsR0FBb0JBLElBQVcsR0FBL0IsRUFMdEIsY0FLc0MsR0FBSUEsSUFBVyxHQUFmO0lBRWxDRCxnREFBUyxDQUFDLFdBQUk7UUFDVmdCLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUM1Q0MsSUFBSSxDQUFDQyxTQUFBQSxHQUFHO21CQUFFQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDckJGLElBQUksQ0FBQ0csU0FBQUEsSUFBSTttQkFBSVQsV0FBVyxDQUFDUyxJQUFJLENBQUNDLE9BQU8sQ0FBQztTQUFBLENBQUM7S0FDM0MsRUFBQyxFQUFFLENBQUM7SUFRTCxJQUFHWCxRQUFRLENBQUNZLE1BQU0sS0FBSyxDQUFDLEVBQUM7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxRQUFRLENBQUNJLFdBQVcsQ0FBQyxDQUFDVyxRQUFRLENBQUM7UUFDM0MsSUFBTUMsWUFBWSxHQUFHaEIsUUFBUSxDQUFDSSxXQUFXLENBQUMsQ0FBQ2EsaUJBQWlCLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7S0FDMUU7Q0FFSixFQUNELGlDQUFpQztDQUNqQyxnQkFBZ0I7R0F4QlExQixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei5qcz82ZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeiAoKXtcbiAgICBjb25zdCBbcXVpekRhdGEsIHNldFF1aXpEYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFthbnN3ZXJLZXksIHNldEFuc3dlcktleV0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgW3F1ZXN0aW9uTnVtLCBzZXRRdWVzdGlvbk51bV0gPSB1c2VTdGF0ZSgwKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vb3BlbnRkYi5jb20vYXBpLnBocD9hbW91bnQ9NVwiKVxuICAgICAgICAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gc2V0UXVpekRhdGEoZGF0YS5yZXN1bHRzKSlcbiAgICB9LFtdKVxuICAgIFxuICAgIGZ1bmN0aW9uIGRlY29kZUh0bWwoaHRtbCkge1xuICAgICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0eHQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIHR4dC52YWx1ZTtcbiAgICB9XG5cbiAgICBpZihxdWl6RGF0YS5sZW5ndGggIT09IDApe1xuICAgICAgICBjb25zb2xlLmxvZyhxdWl6RGF0YVtxdWVzdGlvbk51bV0ucXVlc3Rpb24pXG4gICAgICAgIGNvbnN0IHdyb25nQW5zd2VycyA9IHF1aXpEYXRhW3F1ZXN0aW9uTnVtXS5pbmNvcnJlY3RfYW5zd2Vycy5zcGxpdChcIixcIilcbiAgICB9XG5cbn1cbi8vIGVhY2ggcXVlc3Rpb24gYXMgb3duIGNvbXBlbmVudFxuLy9idXR0b25zIHdpdGhpbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlF1aXoiLCJkZWNvZGVIdG1sIiwiaHRtbCIsInR4dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInZhbHVlIiwicXVpekRhdGEiLCJzZXRRdWl6RGF0YSIsImFuc3dlcktleSIsInNldEFuc3dlcktleSIsInF1ZXN0aW9uTnVtIiwic2V0UXVlc3Rpb25OdW0iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInJlc3VsdHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwicXVlc3Rpb24iLCJ3cm9uZ0Fuc3dlcnMiLCJpbmNvcnJlY3RfYW5zd2VycyIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz.js\n");

/***/ })

});