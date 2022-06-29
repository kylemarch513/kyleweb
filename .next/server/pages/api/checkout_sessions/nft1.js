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
exports.id = "pages/api/checkout_sessions/nft1";
exports.ids = ["pages/api/checkout_sessions/nft1"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions/nft1.js":
/*!*********************************************!*\
  !*** ./pages/api/checkout_sessions/nft1.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(`${process.env.STRIPE_SECRET_KEY}`);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create({\n                line_items: [\n                    {\n                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell\n                        price: \"price_1LFSRIABSC1hABgHEVcfA32I\",\n                        quantity: 1\n                    }, \n                ],\n                mode: \"payment\",\n                payment_method_types: [\n                    \"ideal\",\n                    \"card\"\n                ],\n                success_url: `${req.headers.origin}/?success=true`,\n                cancel_url: `${req.headers.origin}/payment`\n            });\n            res.redirect(303, session.url);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMvbmZ0MS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7QUFFckQsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLDZDQUE2QztZQUM3QyxNQUFNQyxPQUFPLEdBQUcsTUFBTVQsTUFBTSxDQUFDVSxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNwREMsVUFBVSxFQUFFO29CQUNWO3dCQUNFLG9GQUFvRjt3QkFDcEZDLEtBQUssRUFBRSxnQ0FBZ0M7d0JBQ3ZDQyxRQUFRLEVBQUUsQ0FBQztxQkFDWjtpQkFDRjtnQkFDREMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZDLG9CQUFvQixFQUFFO29CQUFDLE9BQU87b0JBQUUsTUFBTTtpQkFBQztnQkFDdkNDLFdBQVcsRUFBRSxDQUFDLEVBQUVaLEdBQUcsQ0FBQ2EsT0FBTyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDO2dCQUNsREMsVUFBVSxFQUFFLENBQUMsRUFBRWYsR0FBRyxDQUFDYSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7YUFDNUMsQ0FBQztZQUNGYixHQUFHLENBQUNlLFFBQVEsQ0FBQyxHQUFHLEVBQUViLE9BQU8sQ0FBQ2MsR0FBRyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7WUFDWmpCLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDRSxVQUFVLElBQUksR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxPQUFPLENBQUMsQ0FBQztTQUNyRDtLQUNGLE1BQU07UUFDTHJCLEdBQUcsQ0FBQ3NCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0J0QixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNLLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBQzNDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMvbmZ0MS5qcz85YTY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKGAke3Byb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZfWApO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICAgIGxpbmVfaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBQcm92aWRlIHRoZSBleGFjdCBQcmljZSBJRCAoZm9yIGV4YW1wbGUsIHByXzEyMzQpIG9mIHRoZSBwcm9kdWN0IHlvdSB3YW50IHRvIHNlbGxcbiAgICAgICAgICAgIHByaWNlOiAncHJpY2VfMUxGU1JJQUJTQzFoQUJnSEVWY2ZBMzJJJyxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcbiAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnaWRlYWwnLCAnY2FyZCddLFxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS8/c3VjY2Vzcz10cnVlYCxcbiAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9wYXltZW50YCxcbiAgICAgIH0pO1xuICAgICAgcmVzLnJlZGlyZWN0KDMwMywgc2Vzc2lvbi51cmwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIE5vdCBBbGxvd2VkJyk7XG4gIH1cbn0iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwic3VjY2Vzc191cmwiLCJoZWFkZXJzIiwib3JpZ2luIiwiY2FuY2VsX3VybCIsInJlZGlyZWN0IiwidXJsIiwiZXJyIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImpzb24iLCJtZXNzYWdlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions/nft1.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions/nft1.js"));
module.exports = __webpack_exports__;

})();