"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/search";
exports.ids = ["pages/search"];
exports.modules = {

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Search() {\n    const { 0: girlUrl , 1: setGirlUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"https://api.waifu.im/random/\");\n    const { 0: tag , 1: setTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function handleClick() {\n        setTag(\"?selected_tags=maid\");\n        console.log(url);\n    }\n    ;\n    let url = \"https://api.waifu.im/random/\" + tag;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getGirl();\n    }, []);\n    let getGirl = ()=>{\n        console.log(\"hello\");\n        fetch(url).then((res)=>res.json()\n        ).then((girls)=>{\n            console.log(\"girls: \", girls);\n            const girl = girls[\"images\"][0][\"url\"];\n            console.log(girl);\n            setGirlUrl(girlUrl = girl);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: girlUrl,\n                height: \"500\",\n                width: \"500\"\n            }, void 0, false, {\n                fileName: \"/home/kyle/webapp/kyleweb/pages/search.js\",\n                lineNumber: 31,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getGirl,\n                children: \"BIG BUTTON\"\n            }, void 0, false, {\n                fileName: \"/home/kyle/webapp/kyleweb/pages/search.js\",\n                lineNumber: 36,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"button\"\n            }, void 0, false, {\n                fileName: \"/home/kyle/webapp/kyleweb/pages/search.js\",\n                lineNumber: 39,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kyle/webapp/kyleweb/pages/search.js\",\n        lineNumber: 30,\n        columnNumber: 8\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUVqRCxTQUFTRyxNQUFNLEdBQUc7SUFDZixNQUFNLEVBSFQsR0FHVUMsT0FBTyxHQUhqQixHQUdtQkMsVUFBVSxNQUFJSCwrQ0FBUSxDQUFFLDhCQUE4QixDQUFDO0lBQ3ZFLE1BQU0sRUFKVCxHQUlVSSxHQUFHLEdBSmIsR0FJZUMsTUFBTSxNQUFJTCwrQ0FBUSxDQUFFLEVBQUUsQ0FBQztJQUNuQyxTQUFTTSxXQUFXLEdBQUU7UUFDbEJELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO0tBQ25COztJQUNELElBQUlBLEdBQUcsR0FBRyw4QkFBOEIsR0FBR0wsR0FBRztJQUU5Q0wsZ0RBQVMsQ0FBQyxJQUFJO1FBQ1ZXLE9BQU8sRUFBRSxDQUFDO0tBQ2IsRUFBQyxFQUFFLENBQUM7SUFFTCxJQUFJQSxPQUFPLEdBQUcsSUFBTTtRQUNoQkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRXBCRyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUNURyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtRQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDRyxLQUFLLEdBQUs7WUFDYlIsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFTyxLQUFLLENBQUMsQ0FBQztZQUM5QixNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdENSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUSxJQUFJLENBQUM7WUFDakJiLFVBQVUsQ0FBQ0QsT0FBTyxHQUFDYyxJQUFJLENBQUM7U0FDM0IsQ0FBQztLQUNMO0lBRUQscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDQyxLQUFHO2dCQUNIQyxHQUFHLEVBQUVqQixPQUFPO2dCQUNaa0IsTUFBTSxFQUFDLEtBQUs7Z0JBQ1pDLEtBQUssRUFBQyxLQUFLOzs7OztvQkFDVjswQkFDRiw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFYixPQUFPOzBCQUFFLFlBRTFCOzs7OztvQkFBUzswQkFDVCw4REFBQ1ksUUFBTTtnQkFBQ0MsT0FBTyxFQUFFakIsV0FBVzswQkFBRSxRQUU5Qjs7Ozs7b0JBQVM7Ozs7OztZQUNQLENBQ1Q7Q0FFSDtBQUNELGlFQUFlTCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvc2VhcmNoLmpzPzkyMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBTZWFyY2ggKCl7XG4gICBjb25zdCBbZ2lybFVybCwgc2V0R2lybFVybF0gPSB1c2VTdGF0ZSAoJ2h0dHBzOi8vYXBpLndhaWZ1LmltL3JhbmRvbS8nKTtcbiAgIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZSAoJycpXG4gICBmdW5jdGlvbiBoYW5kbGVDbGljaygpe1xuICAgICAgIHNldFRhZygnP3NlbGVjdGVkX3RhZ3M9bWFpZCcpO1xuICAgICAgIGNvbnNvbGUubG9nKHVybClcbiAgIH07XG4gICBsZXQgdXJsID0gJ2h0dHBzOi8vYXBpLndhaWZ1LmltL3JhbmRvbS8nICsgdGFnXG5cbiAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgIGdldEdpcmwoKTtcbiAgIH0sW10pXG5cbiAgIGxldCBnZXRHaXJsID0gKCkgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG5cbiAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAudGhlbigoZ2lybHMpID0+IHtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2dpcmxzOiAnLCBnaXJscyk7XG4gICAgICAgICAgIGNvbnN0IGdpcmwgPSBnaXJsc1snaW1hZ2VzJ11bMF1bJ3VybCddXG4gICAgICAgICAgIGNvbnNvbGUubG9nKGdpcmwpXG4gICAgICAgICAgIHNldEdpcmxVcmwoZ2lybFVybD1naXJsKVxuICAgICAgIH0pXG4gICB9XG5cbiAgIHJldHVybihcbiAgICAgICA8ZGl2PlxuICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2dpcmxVcmx9XG4gICAgICAgICAgICBoZWlnaHQ9JzUwMCdcbiAgICAgICAgICAgIHdpZHRoPSc1MDAnXG4gICAgICAgICAgIC8+XG4gICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0R2lybH0+XG4gICAgICAgICAgICAgICBCSUcgQlVUVE9OXG4gICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICA8L2Rpdj5cbiAgIClcblxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZWFyY2giLCJnaXJsVXJsIiwic2V0R2lybFVybCIsInRhZyIsInNldFRhZyIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsInVybCIsImdldEdpcmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2lybHMiLCJnaXJsIiwiZGl2IiwiaW1nIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/search.js"));
module.exports = __webpack_exports__;

})();