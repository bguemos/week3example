"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/About",{

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_info_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/info.module.css */ \"./styles/info.module.css\");\n/* harmony import */ var _styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _data_employees_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/employees.json */ \"./data/employees.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Card_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card/About */ \"./components/Card/About.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction About() {\n    _s();\n    const [information, setInformation] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        ..._data_employees_json__WEBPACK_IMPORTED_MODULE_3__\n    ]);\n    console.log(_data_employees_json__WEBPACK_IMPORTED_MODULE_3__);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \" Employee One \"\n                    }, void 0, false, {\n                        fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                        lineNumber: 21,\n                        columnNumber: 1\n                    }, this),\n                    information && information.map((info, About)=>{\n                        if (info.employeePosition === \"manager\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_About__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                employeeName: info.employeeName,\n                                colour: \"lightPink\",\n                                font: \"20px\"\n                            }, About, false, {\n                                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                lineNumber: 25,\n                                columnNumber: 1\n                            }, this);\n                        }\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \" Employee Two:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                        lineNumber: 29,\n                        columnNumber: 1\n                    }, this),\n                    information && information.map((info, About)=>{\n                        if (info.employeePosition === \"ceo\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_About__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                employeeName: info.employeeName,\n                                colour: \"purple\",\n                                font: \"20px\"\n                            }, About, false, {\n                                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                lineNumber: 33,\n                                columnNumber: 5\n                            }, this);\n                        }\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                lineNumber: 20,\n                columnNumber: 1\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n            lineNumber: 17,\n            columnNumber: 1\n        }, this)\n    }, void 0, false);\n}\n_s(About, \"axublSqsaFVApoANZsutMY3Ki9o=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDRTtBQUVlO0FBQ0o7QUFDVDtBQUNXO0FBQ2Y7QUFHYixTQUFTTyxRQUFROztJQUM1QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7V0FBSUQsaURBQUlBO0tBQUM7SUFDdkRPLFFBQVFDLEdBQUcsQ0FBQ1IsaURBQUlBO0lBQ25CLHFCQUNEO2tCQUVELDRFQUFDUztZQUFLQyxXQUFXWCxxRUFBVztzQkFHNUIsNEVBQUNZO2dCQUFJRCxXQUFXWCxxRUFBVzs7a0NBQzNCLDhEQUFDYztrQ0FBRTs7Ozs7O29CQUNGUixlQUFlQSxZQUFZUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTVgsUUFBVTt3QkFDakQsSUFBSVcsS0FBS0MsZ0JBQWdCLEtBQUssV0FBVzs0QkFDekMscUJBQ0EsOERBQUNkLDhEQUFJQTtnQ0FBYWUsY0FBY0YsS0FBS0UsWUFBWTtnQ0FBRUMsUUFBTztnQ0FBWUMsTUFBSzsrQkFBaEVmOzs7Ozt3QkFFVixDQUFDO29CQUNGO2tDQUNBLDhEQUFDUztrQ0FBRTs7Ozs7O29CQUNGUixlQUFlQSxZQUFZUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTVgsUUFBVTt3QkFDakQsSUFBSVcsS0FBS0MsZ0JBQWdCLEtBQUssT0FBTzs0QkFDaEMscUJBQ0QsOERBQUNkLDhEQUFJQTtnQ0FBYWUsY0FBY0YsS0FBS0UsWUFBWTtnQ0FBRUMsUUFBTztnQ0FBU0MsTUFBSzsrQkFBN0RmOzs7Ozt3QkFFVixDQUFDO29CQUNEOzs7Ozs7Ozs7Ozs7O0FBTUQsQ0FBQztHQS9CbUJBO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0Fib3V0LmpzPzM5ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9pbmZvLm1vZHVsZS5jc3MnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2VtcGxveWVlcy5qc29uJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC9BYm91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgICBjb25zdCBbaW5mb3JtYXRpb24sIHNldEluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKFsuLi5kYXRhXSlcbiAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gPD5cblxuPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICBcbiAgICAgICAgICBcbjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG48Yj4gRW1wbG95ZWUgT25lIDwvYj5cbntpbmZvcm1hdGlvbiAmJiBpbmZvcm1hdGlvbi5tYXAoKGluZm8sIEFib3V0KSA9PiB7XG5pZiAoaW5mby5lbXBsb3llZVBvc2l0aW9uID09PSBcIm1hbmFnZXJcIikge1xucmV0dXJuIChcbjxDYXJkIGtleT17QWJvdXR9IGVtcGxveWVlTmFtZT17aW5mby5lbXBsb3llZU5hbWV9IGNvbG91cj1cImxpZ2h0UGlua1wiIGZvbnQ9XCIyMHB4XCIgLz5cbiApXG4gfVxufSl9XG48Yj4gRW1wbG95ZWUgVHdvOjwvYj5cbntpbmZvcm1hdGlvbiAmJiBpbmZvcm1hdGlvbi5tYXAoKGluZm8sIEFib3V0KSA9PiB7XG5pZiAoaW5mby5lbXBsb3llZVBvc2l0aW9uID09PSBcImNlb1wiKSB7XG4gICAgIHJldHVybiAoXG4gICAgPENhcmQga2V5PXtBYm91dH0gZW1wbG95ZWVOYW1lPXtpbmZvLmVtcGxveWVlTmFtZX0gY29sb3VyPVwicHVycGxlXCIgZm9udD1cIjIwcHhcIiAvPlxuICAgICApXG4gICAgIH1cbiAgICAgfSl9XG4gICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICAgXG48Lz5cbiAgKVxuICAgIH0gIFxuICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJkYXRhIiwidXNlU3RhdGUiLCJDYXJkIiwiTGluayIsIkFib3V0IiwiaW5mb3JtYXRpb24iLCJzZXRJbmZvcm1hdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiZ3JpZCIsImIiLCJtYXAiLCJpbmZvIiwiZW1wbG95ZWVQb3NpdGlvbiIsImVtcGxveWVlTmFtZSIsImNvbG91ciIsImZvbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/About.js\n"));

/***/ })

});