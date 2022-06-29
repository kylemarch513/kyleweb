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
exports.id = "pages/api/checkout_sessions/checkout_sessions";
exports.ids = ["pages/api/checkout_sessions/checkout_sessions"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions/checkout_sessions.js":
/*!**********************************************************!*\
  !*** ./pages/api/checkout_sessions/checkout_sessions.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(`${process.env.STRIPE_SECRET_KEY}`);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    {\n                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell\n                        price: \"price_1LFSRIABSC1hABgHEVcfA32I\",\n                        quantity: 1\n                    }, \n                ],\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/?success=true`,\n                cancel_url: `${req.headers.origin}/?canceled=true`\n            });\n            res.redirect(303, session.url);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMvY2hlY2tvdXRfc2Vzc2lvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBRXJELGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLElBQUk7WUFDRiw2Q0FBNkM7WUFDN0MsTUFBTUMsT0FBTyxHQUFHLE1BQU1ULE1BQU0sQ0FBQ1UsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztnQkFDcERDLFVBQVUsRUFBRTtvQkFDVjt3QkFDRSxvRkFBb0Y7d0JBQ3BGQyxLQUFLLEVBQUUsZ0NBQWdDO3dCQUN2Q0MsUUFBUSxFQUFFLENBQUM7cUJBQ1o7aUJBQ0Y7Z0JBQ0RDLElBQUksRUFBRSxTQUFTO2dCQUNmQyxXQUFXLEVBQUUsQ0FBQyxFQUFFWCxHQUFHLENBQUNZLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQztnQkFDbERDLFVBQVUsRUFBRSxDQUFDLEVBQUVkLEdBQUcsQ0FBQ1ksT0FBTyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO2FBQ25ELENBQUM7WUFDRlosR0FBRyxDQUFDYyxRQUFRLENBQUMsR0FBRyxFQUFFWixPQUFPLENBQUNhLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDLENBQUMsT0FBT0MsR0FBRyxFQUFFO1lBQ1poQixHQUFHLENBQUNpQixNQUFNLENBQUNELEdBQUcsQ0FBQ0UsVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLENBQUM7U0FDckQ7S0FDRixNQUFNO1FBQ0xwQixHQUFHLENBQUNxQixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CckIsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUMzQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL2NoZWNrb3V0X3Nlc3Npb25zL2NoZWNrb3V0X3Nlc3Npb25zLmpzPzI2NzYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykoYCR7cHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVl9YCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIHRyeSB7XG4gICAgICAvLyBDcmVhdGUgQ2hlY2tvdXQgU2Vzc2lvbnMgZnJvbSBib2R5IHBhcmFtcy5cbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIFByb3ZpZGUgdGhlIGV4YWN0IFByaWNlIElEIChmb3IgZXhhbXBsZSwgcHJfMTIzNCkgb2YgdGhlIHByb2R1Y3QgeW91IHdhbnQgdG8gc2VsbFxuICAgICAgICAgICAgcHJpY2U6ICdwcmljZV8xTEZTUklBQlNDMWhBQmdIRVZjZkEzMkknLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS8/c3VjY2Vzcz10cnVlYCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS8/Y2FuY2VsZWQ9dHJ1ZWAsXG4gICAgICB9KTtcbiAgICAgIHJlcy5yZWRpcmVjdCgzMDMsIHNlc3Npb24udXJsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBOb3QgQWxsb3dlZCcpO1xuICB9XG59Il0sIm5hbWVzIjpbInN0cmlwZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsIm1vZGUiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwicmVkaXJlY3QiLCJ1cmwiLCJlcnIiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwianNvbiIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions/checkout_sessions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions/checkout_sessions.js"));
module.exports = __webpack_exports__;

})();