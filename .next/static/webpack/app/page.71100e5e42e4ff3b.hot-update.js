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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"(app-pages-browser)/../../../../node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var _users_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../users.json */ \"(app-pages-browser)/./users.json\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Supabase client setup\nconst supabaseUrl = \"https://your-supabase-url.supabase.co\";\nconst supabaseKey = \"your-supabase-key\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(supabaseUrl, supabaseKey);\nasync function verifyCredentials(username, password) {\n    if (!username || !password) return false;\n    // Convert the password string to a Uint8Array\n    const encoder = new TextEncoder();\n    const data = encoder.encode(password);\n    // Hash the password using SHA-512\n    const hashBuffer = await crypto.subtle.digest(\"SHA-512\", data);\n    // Convert the ArrayBuffer to a hex string\n    const hashArray = Array.from(new Uint8Array(hashBuffer));\n    const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, \"0\")).join(\"\");\n    // Compare the generated hash with the stored hash\n    return _users_json__WEBPACK_IMPORTED_MODULE_3__.some((user)=>user.username === username && user.passwordHash === hashHex);\n}\nfunction Home() {\n    _s();\n    const [inspections, setInspections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedSite, setSelectedSite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [selectedCharger, setSelectedCharger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!router.isReady) return;\n        const fetchInspections = async ()=>{\n            const { data: inspections, error } = await supabase.from(\"inspections\").select(\"*\");\n            if (error) console.error(\"Error fetching inspections:\", error);\n            else setInspections(inspections);\n        };\n        async function checkAuth() {\n            const storedUsername = localStorage.getItem(\"username\");\n            const storedPassword = localStorage.getItem(\"password\");\n            const isAuthenticated = await verifyCredentials(storedUsername, storedPassword);\n            if (!isAuthenticated) {\n                router.push(\"/login\"); // Redirect to login page if not authenticated\n            } else {\n                await fetchInspections();\n                setLoading(false); // Set loading to false after fetching data\n            }\n        }\n        checkAuth();\n    }, [\n        router.isReady\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n            lineNumber: 75,\n            columnNumber: 12\n        }, this); // Show a loading indicator while checking auth\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\"\n    }, void 0, false, {\n        fileName: \"/Users/alexyansouni/Desktop/Personal/OhmEV/ohmdash/src/app/page.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1ZHJqpiYnTTjr5Jo7YJbPaePWbk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ0E7QUFDUztBQUNyQjtBQUVoQyx3QkFBd0I7QUFDeEIsTUFBTUssY0FBYztBQUNwQixNQUFNQyxjQUFjO0FBQ3BCLE1BQU1DLFdBQVdKLG1FQUFZQSxDQUFDRSxhQUFhQztBQVkzQyxlQUFlRSxrQkFBa0JDLFFBQXVCLEVBQUVDLFFBQXVCO0lBQy9FLElBQUksQ0FBQ0QsWUFBWSxDQUFDQyxVQUFVLE9BQU87SUFFbkMsOENBQThDO0lBQzlDLE1BQU1DLFVBQVUsSUFBSUM7SUFDcEIsTUFBTUMsT0FBT0YsUUFBUUcsTUFBTSxDQUFDSjtJQUU1QixrQ0FBa0M7SUFDbEMsTUFBTUssYUFBYSxNQUFNQyxPQUFPQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxXQUFXTDtJQUV6RCwwQ0FBMEM7SUFDMUMsTUFBTU0sWUFBWUMsTUFBTUMsSUFBSSxDQUFDLElBQUlDLFdBQVdQO0lBQzVDLE1BQU1RLFVBQVVKLFVBQVVLLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsUUFBUSxDQUFDLElBQUlDLFFBQVEsQ0FBQyxHQUFHLE1BQU1DLElBQUksQ0FBQztJQUV6RSxrREFBa0Q7SUFDbEQsT0FBT3hCLHdDQUFLQSxDQUFDeUIsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLckIsUUFBUSxLQUFLQSxZQUFZcUIsS0FBS0MsWUFBWSxLQUFLUjtBQUNoRjtBQUVlLFNBQVNTOztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2xDLCtDQUFRQSxDQUFlLEVBQUU7SUFDL0QsTUFBTSxDQUFDbUMsY0FBY0MsZ0JBQWdCLEdBQUdwQywrQ0FBUUEsQ0FBZ0I7SUFDaEUsTUFBTSxDQUFDcUMsaUJBQWlCQyxtQkFBbUIsR0FBR3RDLCtDQUFRQSxDQUFnQjtJQUN0RSxNQUFNLENBQUN1QyxhQUFhQyxlQUFlLEdBQUd4QywrQ0FBUUEsQ0FBVTtJQUN4RCxNQUFNLENBQUN5QyxTQUFTQyxXQUFXLEdBQUcxQywrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNMkMsU0FBU3pDLDBEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUMwQyxPQUFPQyxPQUFPLEVBQUU7UUFFckIsTUFBTUMsbUJBQW1CO1lBQ3ZCLE1BQU0sRUFBRWhDLE1BQU1vQixXQUFXLEVBQUVhLEtBQUssRUFBRSxHQUFHLE1BQU12QyxTQUFTYyxJQUFJLENBQUMsZUFBZTBCLE1BQU0sQ0FBQztZQUMvRSxJQUFJRCxPQUFPRSxRQUFRRixLQUFLLENBQUMsK0JBQStCQTtpQkFDbkRaLGVBQWVEO1FBQ3RCO1FBRUEsZUFBZWdCO1lBQ2IsTUFBTUMsaUJBQWlCQyxhQUFhQyxPQUFPLENBQUM7WUFDNUMsTUFBTUMsaUJBQWlCRixhQUFhQyxPQUFPLENBQUM7WUFFNUMsTUFBTUUsa0JBQWtCLE1BQU05QyxrQkFBa0IwQyxnQkFBZ0JHO1lBRWhFLElBQUksQ0FBQ0MsaUJBQWlCO2dCQUNwQlgsT0FBT1ksSUFBSSxDQUFDLFdBQVcsOENBQThDO1lBQ3ZFLE9BQU87Z0JBQ0wsTUFBTVY7Z0JBQ05ILFdBQVcsUUFBUSwyQ0FBMkM7WUFDaEU7UUFDRjtRQUNBTztJQUNGLEdBQUc7UUFBQ04sT0FBT0MsT0FBTztLQUFDO0lBRW5CLElBQUlILFNBQVM7UUFDWCxxQkFBTyw4REFBQ2U7c0JBQUk7Ozs7O2tCQUFrQiwrQ0FBK0M7SUFDL0U7SUFFQSxxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTs7Ozs7O0FBSW5CO0dBMUN3QnpCOztRQU1QOUIsc0RBQVNBOzs7S0FORjhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuaW1wb3J0IHVzZXJzIGZyb20gJy91c2Vycy5qc29uJzsgXG5cbi8vIFN1cGFiYXNlIGNsaWVudCBzZXR1cFxuY29uc3Qgc3VwYWJhc2VVcmwgPSAnaHR0cHM6Ly95b3VyLXN1cGFiYXNlLXVybC5zdXBhYmFzZS5jbyc7XG5jb25zdCBzdXBhYmFzZUtleSA9ICd5b3VyLXN1cGFiYXNlLWtleSc7XG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VLZXkpO1xuXG50eXBlIEluc3BlY3Rpb24gPSB7XG4gIGlkOiBudW1iZXI7XG4gIHNpdGU6IHN0cmluZztcbiAgY2hhcmdlcjogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBpc3N1ZTogc3RyaW5nO1xuICByZXNvbHZlZDogYm9vbGVhbjtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUNyZWRlbnRpYWxzKHVzZXJuYW1lOiBzdHJpbmcgfCBudWxsLCBwYXNzd29yZDogc3RyaW5nIHwgbnVsbCkge1xuICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIENvbnZlcnQgdGhlIHBhc3N3b3JkIHN0cmluZyB0byBhIFVpbnQ4QXJyYXlcbiAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICBjb25zdCBkYXRhID0gZW5jb2Rlci5lbmNvZGUocGFzc3dvcmQpO1xuXG4gIC8vIEhhc2ggdGhlIHBhc3N3b3JkIHVzaW5nIFNIQS01MTJcbiAgY29uc3QgaGFzaEJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtNTEyJywgZGF0YSk7XG5cbiAgLy8gQ29udmVydCB0aGUgQXJyYXlCdWZmZXIgdG8gYSBoZXggc3RyaW5nXG4gIGNvbnN0IGhhc2hBcnJheSA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpO1xuICBjb25zdCBoYXNoSGV4ID0gaGFzaEFycmF5Lm1hcChiID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuXG4gIC8vIENvbXBhcmUgdGhlIGdlbmVyYXRlZCBoYXNoIHdpdGggdGhlIHN0b3JlZCBoYXNoXG4gIHJldHVybiB1c2Vycy5zb21lKHVzZXIgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgdXNlci5wYXNzd29yZEhhc2ggPT09IGhhc2hIZXgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaW5zcGVjdGlvbnMsIHNldEluc3BlY3Rpb25zXSA9IHVzZVN0YXRlPEluc3BlY3Rpb25bXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRTaXRlLCBzZXRTZWxlY3RlZFNpdGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZENoYXJnZXIsIHNldFNlbGVjdGVkQ2hhcmdlcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3NpZGViYXJPcGVuLCBzZXRTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcblxuICAgIGNvbnN0IGZldGNoSW5zcGVjdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGE6IGluc3BlY3Rpb25zLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnaW5zcGVjdGlvbnMnKS5zZWxlY3QoJyonKTtcbiAgICAgIGlmIChlcnJvcikgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5zcGVjdGlvbnM6JywgZXJyb3IpO1xuICAgICAgZWxzZSBzZXRJbnNwZWN0aW9ucyhpbnNwZWN0aW9ucyBhcyBJbnNwZWN0aW9uW10pO1xuICAgIH07XG5cbiAgICBhc3luYyBmdW5jdGlvbiBjaGVja0F1dGgoKSB7XG4gICAgICBjb25zdCBzdG9yZWRVc2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpO1xuICAgICAgY29uc3Qgc3RvcmVkUGFzc3dvcmQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKTtcblxuICAgICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gYXdhaXQgdmVyaWZ5Q3JlZGVudGlhbHMoc3RvcmVkVXNlcm5hbWUsIHN0b3JlZFBhc3N3b3JkKTtcblxuICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIG5vdCBhdXRoZW50aWNhdGVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBmZXRjaEluc3BlY3Rpb25zKCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTZXQgbG9hZGluZyB0byBmYWxzZSBhZnRlciBmZXRjaGluZyBkYXRhXG4gICAgICB9XG4gICAgfVxuICAgIGNoZWNrQXV0aCgpO1xuICB9LCBbcm91dGVyLmlzUmVhZHldKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47IC8vIFNob3cgYSBsb2FkaW5nIGluZGljYXRvciB3aGlsZSBjaGVja2luZyBhdXRoXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICB7LyogVGhlIHJlc3Qgb2YgeW91ciBjb21wb25lbnQgKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVDbGllbnQiLCJ1c2VycyIsInN1cGFiYXNlVXJsIiwic3VwYWJhc2VLZXkiLCJzdXBhYmFzZSIsInZlcmlmeUNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVuY29kZXIiLCJUZXh0RW5jb2RlciIsImRhdGEiLCJlbmNvZGUiLCJoYXNoQnVmZmVyIiwiY3J5cHRvIiwic3VidGxlIiwiZGlnZXN0IiwiaGFzaEFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsImhhc2hIZXgiLCJtYXAiLCJiIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJzb21lIiwidXNlciIsInBhc3N3b3JkSGFzaCIsIkhvbWUiLCJpbnNwZWN0aW9ucyIsInNldEluc3BlY3Rpb25zIiwic2VsZWN0ZWRTaXRlIiwic2V0U2VsZWN0ZWRTaXRlIiwic2VsZWN0ZWRDaGFyZ2VyIiwic2V0U2VsZWN0ZWRDaGFyZ2VyIiwic2lkZWJhck9wZW4iLCJzZXRTaWRlYmFyT3BlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiaXNSZWFkeSIsImZldGNoSW5zcGVjdGlvbnMiLCJlcnJvciIsInNlbGVjdCIsImNvbnNvbGUiLCJjaGVja0F1dGgiLCJzdG9yZWRVc2VybmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRQYXNzd29yZCIsImlzQXV0aGVudGljYXRlZCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});