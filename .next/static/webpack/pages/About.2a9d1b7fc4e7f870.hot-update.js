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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_info_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/info.module.css */ \"./styles/info.module.css\");\n/* harmony import */ var _styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _data_employee_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/employee.json */ \"./data/employee.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_CardEmployee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardEmployee */ \"./components/CardEmployee/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction About() {\n    _s();\n    const [information, setInformation] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([\n        ..._data_employee_json__WEBPACK_IMPORTED_MODULE_3__\n    ]);\n    console.log(_data_employee_json__WEBPACK_IMPORTED_MODULE_3__);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default().background),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        className: (_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default().code)\n                    }, void 0, false, {\n                        fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \" Employee One \"\n                            }, void 0, false, {\n                                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this),\n                            information && information.map((info, index)=>{\n                                if (info.position === \"manager\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardEmployee__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            employeeName: info.name,\n                                            colour: \"lightPink\",\n                                            font: \"20px\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 25\n                                    }, this);\n                                }\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \" Employee Two:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            information && information.map((info, index)=>{\n                                if (info.position === \"ceo\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardEmployee__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            employeeName: info.name,\n                                            colour: \"purple\",\n                                            font: \"20px\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 25\n                                    }, this);\n                                }\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default().images),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/assets/woman5.svg\",\n                                alt: \"logo\",\n                                height: 200,\n                                width: 200\n                            }, void 0, false, {\n                                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/assets/woman2.svg\",\n                                alt: \"pic\",\n                                height: 200,\n                                width: 200\n                            }, void 0, false, {\n                                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                                lineNumber: 48,\n                                columnNumber: 10\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                        children: \" Woman of the office\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_info_module_css__WEBPACK_IMPORTED_MODULE_7___default().graphic),\n                src: \"/assets/office.png\",\n                alt: \"office\",\n                height: 400,\n                width: 750\n            }, void 0, false, {\n                fileName: \"/Users/bri-lynnguemos/Desktop/week3example/pages/About.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(About, \"axublSqsaFVApoANZsutMY3Ki9o=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDRTtBQUVlO0FBQ0w7QUFDUjtBQUNxQjtBQUN6QjtBQUdiLFNBQVNPLFFBQVE7O0lBQzVCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztXQUFJRCxnREFBSUE7S0FBQztJQUN2RE8sUUFBUUMsR0FBRyxDQUFDUixnREFBSUE7SUFDbkIscUJBQ0U7OzBCQUVJLDhEQUFDUztnQkFBS0MsV0FBV1gsMkVBQWlCOztrQ0FDbEMsOERBQUNhO3dCQUFLRixXQUFXWCxxRUFBVzs7Ozs7O2tDQUU1Qiw4REFBQ2M7d0JBQUlILFdBQVdYLHFFQUFXOzswQ0FDdkIsOERBQUNnQjswQ0FBRTs7Ozs7OzRCQUNFVixlQUFlQSxZQUFZVyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsUUFBVTtnQ0FDakQsSUFBSUQsS0FBS0UsUUFBUSxLQUFLLFdBQVc7b0NBQzdCLHFCQUNJLDhEQUFDTjtrREFDRyw0RUFBQ1gsZ0VBQVlBOzRDQUFDa0IsY0FBY0gsS0FBS0ksSUFBSTs0Q0FBRUMsUUFBTzs0Q0FBWUMsTUFBSzs7Ozs7O3VDQUR6REw7Ozs7O2dDQUdiLENBQUM7NEJBQ047MENBQ0osOERBQUNIOzBDQUFFOzs7Ozs7NEJBQ0VWLGVBQWVBLFlBQVlXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO2dDQUNqRCxJQUFJRCxLQUFLRSxRQUFRLEtBQUssT0FBTztvQ0FDekIscUJBQ0ksOERBQUNOO2tEQUNHLDRFQUFDWCxnRUFBWUE7NENBQUNrQixjQUFjSCxLQUFLSSxJQUFJOzRDQUFFQyxRQUFPOzRDQUFTQyxNQUFLOzs7Ozs7dUNBRHRETDs7Ozs7Z0NBR2IsQ0FBQzs0QkFDTjs7Ozs7OztrQ0FFUiw4REFBQ0w7d0JBQUlILFdBQVdYLHVFQUFhOzswQ0FDekIsOERBQUMwQjtnQ0FDREMsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsUUFBUTtnQ0FDUkMsT0FBTzs7Ozs7OzBDQUdWLDhEQUFDSjtnQ0FDREMsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsUUFBUTtnQ0FDUkMsT0FBTzs7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDQzt3QkFBR3BCLFdBQVdYLHVFQUFhO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRzlCLDhEQUFDMEI7Z0JBQUlmLFdBQVdYLHdFQUFjO2dCQUM5QjJCLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0pDLFFBQVE7Z0JBQ1JDLE9BQU87Ozs7Ozs7O0FBS2YsQ0FBQztHQXhEdUJ6QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BYm91dC5qcz8zOWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvaW5mby5tb2R1bGUuY3NzJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9lbXBsb3llZS5qc29uJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkRW1wbG95ZWUgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkRW1wbG95ZWUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gICAgY29uc3QgW2luZm9ybWF0aW9uLCBzZXRJbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShbLi4uZGF0YV0pXG4gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XG4gICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PjwvY29kZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAgPGI+IEVtcGxveWVlIE9uZSA8L2I+XG4gICAgICAgICAgICAgICAge2luZm9ybWF0aW9uICYmIGluZm9ybWF0aW9uLm1hcCgoaW5mbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5mby5wb3NpdGlvbiA9PT0gXCJtYW5hZ2VyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRFbXBsb3llZSBlbXBsb3llZU5hbWU9e2luZm8ubmFtZX0gY29sb3VyPVwibGlnaHRQaW5rXCIgZm9udD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8Yj4gRW1wbG95ZWUgVHdvOjwvYj5cbiAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb24gJiYgaW5mb3JtYXRpb24ubWFwKChpbmZvLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmZvLnBvc2l0aW9uID09PSBcImNlb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkRW1wbG95ZWUgZW1wbG95ZWVOYW1lPXtpbmZvLm5hbWV9IGNvbG91cj1cInB1cnBsZVwiIGZvbnQ9XCIyMHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZXN9PlxuICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvd29tYW41LnN2Z1wiIFxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICBcbiAgICAgICAgIC8+XG4gICAgICAgICA8aW1nIFxuICAgICAgICAgc3JjPVwiL2Fzc2V0cy93b21hbjIuc3ZnXCJcbiAgICAgICAgIGFsdD1cInBpY1wiXG4gICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT4gV29tYW4gb2YgdGhlIG9mZmljZTwvaDE+XG4gICAgICAgXG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5ncmFwaGljfVxuICAgICAgICBzcmM9XCIvYXNzZXRzL29mZmljZS5wbmdcIlxuICAgICAgICBhbHQ9XCJvZmZpY2VcIlxuICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgd2lkdGg9ezc1MH1cbiAgICAgICAgXG4gICAgICAgIC8+XG4gICAgPC8+XG4gIClcbn0gIFxuICAgICAgICBcblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJkYXRhIiwidXNlU3RhdGUiLCJDYXJkRW1wbG95ZWUiLCJMaW5rIiwiQWJvdXQiLCJpbmZvcm1hdGlvbiIsInNldEluZm9ybWF0aW9uIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJiYWNrZ3JvdW5kIiwiY29kZSIsImRpdiIsImdyaWQiLCJiIiwibWFwIiwiaW5mbyIsImluZGV4IiwicG9zaXRpb24iLCJlbXBsb3llZU5hbWUiLCJuYW1lIiwiY29sb3VyIiwiZm9udCIsImltYWdlcyIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwiaDEiLCJoZWFkZXIiLCJncmFwaGljIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/About.js\n"));

/***/ })

});