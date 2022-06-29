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
exports.id = "pages/api/checkout_sessions/nft2";
exports.ids = ["pages/api/checkout_sessions/nft2"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions/nft2.js":
/*!*********************************************!*\
  !*** ./pages/api/checkout_sessions/nft2.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(`${process.env.STRIPE_SECRET_KEY}`);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    {\n                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell\n                        price: \"price_1LFSUWABSC1hABgHJ8pulWwM\",\n                        quantity: 1\n                    }, \n                ],\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/?success=true`,\n                cancel_url: `${req.headers.origin}/?canceled=true`\n            });\n            res.redirect(303, session.url);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMvbmZ0Mi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFFckQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLDZDQUE2QztZQUM3QyxNQUFNQyxPQUFPLEdBQUcsTUFBTVQsTUFBTSxDQUFDVSxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNwREMsVUFBVSxFQUFFO29CQUNWO3dCQUNFLG9GQUFvRjt3QkFDcEZDLEtBQUssRUFBRSxnQ0FBZ0M7d0JBQ3ZDQyxRQUFRLEVBQUUsQ0FBQztxQkFDWjtpQkFDRjtnQkFDREMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZDLFdBQVcsRUFBRSxDQUFDLEVBQUVYLEdBQUcsQ0FBQ1ksT0FBTyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDO2dCQUNsREMsVUFBVSxFQUFFLENBQUMsRUFBRWQsR0FBRyxDQUFDWSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUM7YUFDbkQsQ0FBQztZQUNGWixHQUFHLENBQUNjLFFBQVEsQ0FBQyxHQUFHLEVBQUVaLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7WUFDWmhCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRSxVQUFVLElBQUksR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxPQUFPLENBQUMsQ0FBQztTQUNyRDtLQUNGLE1BQU07UUFDTHBCLEdBQUcsQ0FBQ3FCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0JyQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBQzNDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMvbmZ0Mi5qcz82MTYyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKGAke3Byb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZfWApO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICAgIGxpbmVfaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBQcm92aWRlIHRoZSBleGFjdCBQcmljZSBJRCAoZm9yIGV4YW1wbGUsIHByXzEyMzQpIG9mIHRoZSBwcm9kdWN0IHlvdSB3YW50IHRvIHNlbGxcbiAgICAgICAgICAgIHByaWNlOiAncHJpY2VfMUxGU1VXQUJTQzFoQUJnSEo4cHVsV3dNJyxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vP3N1Y2Nlc3M9dHJ1ZWAsXG4gICAgICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vP2NhbmNlbGVkPXRydWVgLFxuICAgICAgfSk7XG4gICAgICByZXMucmVkaXJlY3QoMzAzLCBzZXNzaW9uLnVybCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbihlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJzdHJpcGUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInJlZGlyZWN0IiwidXJsIiwiZXJyIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImpzb24iLCJtZXNzYWdlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions/nft2.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions/nft2.js"));
module.exports = __webpack_exports__;

})();