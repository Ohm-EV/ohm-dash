"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"(app-pages-browser)/../../../../node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var _users_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../users.json */ \"(app-pages-browser)/./users.json\");\n/* __next_internal_client_entry_do_not_use__  auto */ \n\n\n// Supabase client setup\nconst supabaseUrl = \"https://your-supabase-url.supabase.co\";\nconst supabaseKey = \"your-supabase-key\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(supabaseUrl, supabaseKey);\nasync function verifyCredentials(username, password) {\n    if (!username || !password) return false;\n    // Convert the password string to a Uint8Array\n    const encoder = new TextEncoder();\n    const data = encoder.encode(password);\n    // Hash the password using SHA-512\n    const hashBuffer = await crypto.subtle.digest(\"SHA-512\", data);\n    // Convert the ArrayBuffer to a hex string\n    const hashArray = Array.from(new Uint8Array(hashBuffer));\n    const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, \"0\")).join(\"\");\n    // Compare the generated hash with the stored hash\n    return _users_json__WEBPACK_IMPORTED_MODULE_1__.some((user)=>user.username === username && user.passwordHash === hashHex);\n}\n(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n    if (!router.isReady) return;\n    const fetchInspections = async ()=>{\n        const { data: inspections, error } = await supabase.from(\"inspections\").select(\"*\");\n        if (error) console.error(\"Error fetching inspections:\", error);\n        else setInspections(inspections);\n    };\n    async function checkAuth() {\n        const storedUsername = localStorage.getItem(\"username\");\n        const storedPassword = localStorage.getItem(\"password\");\n        const isAuthenticated = await verifyCredentials(storedUsername, storedPassword);\n        if (!isAuthenticated) {\n            router.push(\"/login\");\n        } else {\n            fetchInspections();\n        }\n    }\n    checkAuth();\n}, [\n    router.isReady\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7c0RBRTRDO0FBRVM7QUFDckI7QUFFaEMsd0JBQXdCO0FBQ3hCLE1BQU1HLGNBQWM7QUFDcEIsTUFBTUMsY0FBYztBQUNwQixNQUFNQyxXQUFXSixtRUFBWUEsQ0FBQ0UsYUFBYUM7QUFZM0MsZUFBZUUsa0JBQWtCQyxRQUF1QixFQUFFQyxRQUF1QjtJQUMvRSxJQUFJLENBQUNELFlBQVksQ0FBQ0MsVUFBVSxPQUFPO0lBRW5DLDhDQUE4QztJQUM5QyxNQUFNQyxVQUFVLElBQUlDO0lBQ3BCLE1BQU1DLE9BQU9GLFFBQVFHLE1BQU0sQ0FBQ0o7SUFFNUIsa0NBQWtDO0lBQ2xDLE1BQU1LLGFBQWEsTUFBTUMsT0FBT0MsTUFBTSxDQUFDQyxNQUFNLENBQUMsV0FBV0w7SUFFekQsMENBQTBDO0lBQzFDLE1BQU1NLFlBQVlDLE1BQU1DLElBQUksQ0FBQyxJQUFJQyxXQUFXUDtJQUM1QyxNQUFNUSxVQUFVSixVQUFVSyxHQUFHLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLFFBQVEsQ0FBQyxJQUFJQyxRQUFRLENBQUMsR0FBRyxNQUFNQyxJQUFJLENBQUM7SUFFekUsa0RBQWtEO0lBQ2xELE9BQU94Qix3Q0FBS0EsQ0FBQ3lCLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS3JCLFFBQVEsS0FBS0EsWUFBWXFCLEtBQUtDLFlBQVksS0FBS1I7QUFDaEY7QUFFQXJCLGdEQUFTQSxDQUFDO0lBQ1IsSUFBSSxDQUFDOEIsT0FBT0MsT0FBTyxFQUFFO0lBQ3JCLE1BQU1DLG1CQUFtQjtRQUN2QixNQUFNLEVBQUVyQixNQUFNc0IsV0FBVyxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNN0IsU0FBU2MsSUFBSSxDQUFDLGVBQWVnQixNQUFNLENBQUM7UUFDL0UsSUFBSUQsT0FBT0UsUUFBUUYsS0FBSyxDQUFDLCtCQUErQkE7YUFDbkRHLGVBQWVKO0lBQ3RCO0lBRUEsZUFBZUs7UUFDYixNQUFNQyxpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQztRQUM1QyxNQUFNQyxpQkFBaUJGLGFBQWFDLE9BQU8sQ0FBQztRQUU1QyxNQUFNRSxrQkFBa0IsTUFBTXJDLGtCQUFrQmlDLGdCQUFnQkc7UUFFaEUsSUFBSSxDQUFDQyxpQkFBaUI7WUFDcEJiLE9BQU9jLElBQUksQ0FBQztRQUNkLE9BQU87WUFDTFo7UUFDRjtJQUNGO0lBQ0FNO0FBQ0YsR0FBRztJQUFDUixPQUFPQyxPQUFPO0NBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5pbXBvcnQgdXNlcnMgZnJvbSAnL3VzZXJzLmpzb24nOyBcblxuLy8gU3VwYWJhc2UgY2xpZW50IHNldHVwXG5jb25zdCBzdXBhYmFzZVVybCA9ICdodHRwczovL3lvdXItc3VwYWJhc2UtdXJsLnN1cGFiYXNlLmNvJztcbmNvbnN0IHN1cGFiYXNlS2V5ID0gJ3lvdXItc3VwYWJhc2Uta2V5JztcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUtleSk7XG5cbnR5cGUgSW5zcGVjdGlvbiA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgc2l0ZTogc3RyaW5nO1xuICBjaGFyZ2VyOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIGlzc3VlOiBzdHJpbmc7XG4gIHJlc29sdmVkOiBib29sZWFuO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Q3JlZGVudGlhbHModXNlcm5hbWU6IHN0cmluZyB8IG51bGwsIHBhc3N3b3JkOiBzdHJpbmcgfCBudWxsKSB7XG4gIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gQ29udmVydCB0aGUgcGFzc3dvcmQgc3RyaW5nIHRvIGEgVWludDhBcnJheVxuICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gIGNvbnN0IGRhdGEgPSBlbmNvZGVyLmVuY29kZShwYXNzd29yZCk7XG5cbiAgLy8gSGFzaCB0aGUgcGFzc3dvcmQgdXNpbmcgU0hBLTUxMlxuICBjb25zdCBoYXNoQnVmZmVyID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS01MTInLCBkYXRhKTtcblxuICAvLyBDb252ZXJ0IHRoZSBBcnJheUJ1ZmZlciB0byBhIGhleCBzdHJpbmdcbiAgY29uc3QgaGFzaEFycmF5ID0gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShoYXNoQnVmZmVyKSk7XG4gIGNvbnN0IGhhc2hIZXggPSBoYXNoQXJyYXkubWFwKGIgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG5cbiAgLy8gQ29tcGFyZSB0aGUgZ2VuZXJhdGVkIGhhc2ggd2l0aCB0aGUgc3RvcmVkIGhhc2hcbiAgcmV0dXJuIHVzZXJzLnNvbWUodXNlciA9PiB1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiB1c2VyLnBhc3N3b3JkSGFzaCA9PT0gaGFzaEhleCk7XG59XG5cbnVzZUVmZmVjdCgoKSA9PiB7XG4gIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcbiAgY29uc3QgZmV0Y2hJbnNwZWN0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IGluc3BlY3Rpb25zLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnaW5zcGVjdGlvbnMnKS5zZWxlY3QoJyonKTtcbiAgICBpZiAoZXJyb3IpIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGluc3BlY3Rpb25zOicsIGVycm9yKTtcbiAgICBlbHNlIHNldEluc3BlY3Rpb25zKGluc3BlY3Rpb25zIGFzIEluc3BlY3Rpb25bXSk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2hlY2tBdXRoKCkge1xuICAgIGNvbnN0IHN0b3JlZFVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyk7XG4gICAgY29uc3Qgc3RvcmVkUGFzc3dvcmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKTtcblxuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IGF3YWl0IHZlcmlmeUNyZWRlbnRpYWxzKHN0b3JlZFVzZXJuYW1lLCBzdG9yZWRQYXNzd29yZCk7XG4gICAgXG4gICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hJbnNwZWN0aW9ucygpO1xuICAgIH1cbiAgfVxuICBjaGVja0F1dGgoKTtcbn0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImNyZWF0ZUNsaWVudCIsInVzZXJzIiwic3VwYWJhc2VVcmwiLCJzdXBhYmFzZUtleSIsInN1cGFiYXNlIiwidmVyaWZ5Q3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGF0YSIsImVuY29kZSIsImhhc2hCdWZmZXIiLCJjcnlwdG8iLCJzdWJ0bGUiLCJkaWdlc3QiLCJoYXNoQXJyYXkiLCJBcnJheSIsImZyb20iLCJVaW50OEFycmF5IiwiaGFzaEhleCIsIm1hcCIsImIiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInNvbWUiLCJ1c2VyIiwicGFzc3dvcmRIYXNoIiwicm91dGVyIiwiaXNSZWFkeSIsImZldGNoSW5zcGVjdGlvbnMiLCJpbnNwZWN0aW9ucyIsImVycm9yIiwic2VsZWN0IiwiY29uc29sZSIsInNldEluc3BlY3Rpb25zIiwiY2hlY2tBdXRoIiwic3RvcmVkVXNlcm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkUGFzc3dvcmQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});