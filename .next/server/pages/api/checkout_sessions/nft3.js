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
exports.id = "pages/api/checkout_sessions/nft3";
exports.ids = ["pages/api/checkout_sessions/nft3"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions/nft3.js":
/*!*********************************************!*\
  !*** ./pages/api/checkout_sessions/nft3.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(`${process.env.STRIPE_SECRET_KEY}`);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    {\n                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell\n                        price: \"price_1LFSWlABSC1hABgHCNpJo001\",\n                        quantity: 1\n                    }, \n                ],\n                mode: \"subscription\",\n                payment_method_types: [\n                    \"paypal\",\n                    \"card\"\n                ],\n                success_url: `${req.headers.origin}/?success=true`,\n                cancel_url: `${req.headers.origin}/?canceled=true`\n            });\n            res.redirect(303, session.url);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMvbmZ0My5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFFckQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLDZDQUE2QztZQUM3QyxNQUFNQyxPQUFPLEdBQUcsTUFBTVQsTUFBTSxDQUFDVSxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNwREMsVUFBVSxFQUFFO29CQUNWO3dCQUNFLG9GQUFvRjt3QkFDcEZDLEtBQUssRUFBRSxnQ0FBZ0M7d0JBQ3ZDQyxRQUFRLEVBQUUsQ0FBQztxQkFDWjtpQkFDRjtnQkFDREMsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCQyxvQkFBb0IsRUFBRTtvQkFBQyxRQUFRO29CQUFFLE1BQU07aUJBQUM7Z0JBQ3hDQyxXQUFXLEVBQUUsQ0FBQyxFQUFFWixHQUFHLENBQUNhLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQztnQkFDbERDLFVBQVUsRUFBRSxDQUFDLEVBQUVmLEdBQUcsQ0FBQ2EsT0FBTyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO2FBQ25ELENBQUM7WUFDRmIsR0FBRyxDQUFDZSxRQUFRLENBQUMsR0FBRyxFQUFFYixPQUFPLENBQUNjLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDLENBQUMsT0FBT0MsR0FBRyxFQUFFO1lBQ1pqQixHQUFHLENBQUNrQixNQUFNLENBQUNELEdBQUcsQ0FBQ0UsVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7U0FDckQ7S0FDRixNQUFNO1FBQ0xyQixHQUFHLENBQUNzQixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CdEIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUMzQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2NoZWNrb3V0X3Nlc3Npb25zL25mdDMuanM/NzUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdHJpcGUgPSByZXF1aXJlKCdzdHJpcGUnKShgJHtwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWX1gKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIENyZWF0ZSBDaGVja291dCBTZXNzaW9ucyBmcm9tIGJvZHkgcGFyYW1zLlxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgICBsaW5lX2l0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gUHJvdmlkZSB0aGUgZXhhY3QgUHJpY2UgSUQgKGZvciBleGFtcGxlLCBwcl8xMjM0KSBvZiB0aGUgcHJvZHVjdCB5b3Ugd2FudCB0byBzZWxsXG4gICAgICAgICAgICBwcmljZTogJ3ByaWNlXzFMRlNXbEFCU0MxaEFCZ0hDTnBKbzAwMScsXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlOiAnc3Vic2NyaXB0aW9uJyxcbiAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsncGF5cGFsJywgJ2NhcmQnXSxcbiAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vP3N1Y2Nlc3M9dHJ1ZWAsXG4gICAgICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vP2NhbmNlbGVkPXRydWVgLFxuICAgICAgfSk7XG4gICAgICByZXMucmVkaXJlY3QoMzAzLCBzZXNzaW9uLnVybCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlIHx8IDUwMCkuanNvbihlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJzdHJpcGUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwicmVkaXJlY3QiLCJ1cmwiLCJlcnIiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwianNvbiIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions/nft3.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions/nft3.js"));
module.exports = __webpack_exports__;

})();