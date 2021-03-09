webpackHotUpdate_N_E("pages/index",{

/***/ "./components/liveModeButton.tsx":
/*!***************************************!*\
  !*** ./components/liveModeButton.tsx ***!
  \***************************************/
/*! exports provided: LiveModeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveModeButton\", function() { return LiveModeButton; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ \"./components/styledComponents.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _workspaces_online__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workspaces/online */ \"./workspaces/online.ts\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ \"./config/config.ts\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/liveModeButton.tsx\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"];\n\n\n\n\n\n\n\nvar liveModeHandler = function liveModeHandler(liveModeRun, liveModeDataset) {\n  var parameters = {\n    run_number: liveModeRun,\n    dataset_name: liveModeDataset,\n    folder_path: 'Summary',\n    workspaces: _workspaces_online__WEBPACK_IMPORTED_MODULE_4__[\"workspaces\"][0].workspaces[0].label\n  };\n  var stringified = qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(parameters, {});\n  var url_which_is_visible = _config_config__WEBPACK_IMPORTED_MODULE_5__[\"root_url_\"] !== '/' ? \"\".concat(_config_config__WEBPACK_IMPORTED_MODULE_5__[\"root_url_\"], \"?\").concat(stringified) : undefined;\n  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n    pathname: '',\n    query: parameters\n  }, url_which_is_visible);\n};\n\nvar LiveModeButton = function LiveModeButton() {\n  var liveModeDataset = '/Global/Online/ALL';\n  var liveModeRun = '0';\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"LiveButton\"], {\n    onClick: function onClick() {\n      liveModeHandler(liveModeRun, liveModeDataset);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \"Live Mode\"));\n};\n_c = LiveModeButton;\n\nvar _c;\n\n$RefreshReg$(_c, \"LiveModeButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saXZlTW9kZUJ1dHRvbi50c3g/YWFjMyJdLCJuYW1lcyI6WyJsaXZlTW9kZUhhbmRsZXIiLCJsaXZlTW9kZVJ1biIsImxpdmVNb2RlRGF0YXNldCIsInBhcmFtZXRlcnMiLCJydW5fbnVtYmVyIiwiZGF0YXNldF9uYW1lIiwiZm9sZGVyX3BhdGgiLCJ3b3Jrc3BhY2VzIiwib25saW5lV29ya3NwYWNlIiwibGFiZWwiLCJzdHJpbmdpZmllZCIsInFzIiwic3RyaW5naWZ5IiwidXJsX3doaWNoX2lzX3Zpc2libGUiLCJyb290X3VybF8iLCJ1bmRlZmluZWQiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIkxpdmVNb2RlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxXQUFELEVBQXNCQyxlQUF0QixFQUFrRDtBQUN4RSxNQUFNQyxVQUFVLEdBQUc7QUFDakJDLGNBQVUsRUFBRUgsV0FESztBQUVqQkksZ0JBQVksRUFBRUgsZUFGRztBQUdqQkksZUFBVyxFQUFFLFNBSEk7QUFJakJDLGNBQVUsRUFBRUMsNkRBQWUsQ0FBQyxDQUFELENBQWYsQ0FBbUJELFVBQW5CLENBQThCLENBQTlCLEVBQWlDRTtBQUo1QixHQUFuQjtBQU1BLE1BQU1DLFdBQVcsR0FBR0MseUNBQUUsQ0FBQ0MsU0FBSCxDQUFhVCxVQUFiLEVBQXlCLEVBQXpCLENBQXBCO0FBQ0EsTUFBTVUsb0JBQW9CLEdBQUdDLHdEQUFTLEtBQUssR0FBZCxhQUF1QkEsd0RBQXZCLGNBQW9DSixXQUFwQyxJQUFvREssU0FBakY7QUFFQUMsb0RBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1ZDLFlBQVEsRUFBRSxFQURBO0FBRVZDLFNBQUssRUFBRWhCO0FBRkcsR0FBWixFQUlFVSxvQkFKRjtBQU1ELENBaEJEOztBQWtCTyxJQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDbEMsTUFBTWxCLGVBQWUsR0FBRyxvQkFBeEI7QUFDQSxNQUFNRCxXQUFXLEdBQUcsR0FBcEI7QUFFQSxTQUNFLE1BQUMsNERBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYkQscUJBQWUsQ0FBQ0MsV0FBRCxFQUFjQyxlQUFkLENBQWY7QUFDRCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLENBREY7QUFXRCxDQWZNO0tBQU1rQixjIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9saXZlTW9kZUJ1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcblxyXG5pbXBvcnQgeyBMaXZlQnV0dG9uIH0gZnJvbSAnLi9zdHlsZWRDb21wb25lbnRzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHdvcmtzcGFjZXMgYXMgb25saW5lV29ya3NwYWNlIH0gZnJvbSAnLi4vd29ya3NwYWNlcy9vbmxpbmUnO1xyXG5pbXBvcnQgeyByb290X3VybF8gfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcclxuXHJcbmNvbnN0IGxpdmVNb2RlSGFuZGxlciA9IChsaXZlTW9kZVJ1bjogc3RyaW5nLCBsaXZlTW9kZURhdGFzZXQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSB7XHJcbiAgICBydW5fbnVtYmVyOiBsaXZlTW9kZVJ1bixcclxuICAgIGRhdGFzZXRfbmFtZTogbGl2ZU1vZGVEYXRhc2V0LFxyXG4gICAgZm9sZGVyX3BhdGg6ICdTdW1tYXJ5JyxcclxuICAgIHdvcmtzcGFjZXM6IG9ubGluZVdvcmtzcGFjZVswXS53b3Jrc3BhY2VzWzBdLmxhYmVsLFxyXG4gIH1cclxuICBjb25zdCBzdHJpbmdpZmllZCA9IHFzLnN0cmluZ2lmeShwYXJhbWV0ZXJzLCB7fSk7XHJcbiAgY29uc3QgdXJsX3doaWNoX2lzX3Zpc2libGUgPSByb290X3VybF8gIT09ICcvJyA/IGAke3Jvb3RfdXJsX30/JHtzdHJpbmdpZmllZH1gIDogdW5kZWZpbmVkXHJcblxyXG4gIFJvdXRlci5wdXNoKHtcclxuICAgIHBhdGhuYW1lOiAnJyxcclxuICAgIHF1ZXJ5OiBwYXJhbWV0ZXJzLFxyXG4gIH0sXHJcbiAgICB1cmxfd2hpY2hfaXNfdmlzaWJsZVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTGl2ZU1vZGVCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgbGl2ZU1vZGVEYXRhc2V0ID0gJy9HbG9iYWwvT25saW5lL0FMTCc7XHJcbiAgY29uc3QgbGl2ZU1vZGVSdW4gPSAnMCc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGl2ZUJ1dHRvblxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgbGl2ZU1vZGVIYW5kbGVyKGxpdmVNb2RlUnVuLCBsaXZlTW9kZURhdGFzZXQpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8YT5cclxuICAgICAgICBMaXZlIE1vZGVcclxuICAgICAgPC9hPlxyXG4gICAgPC9MaXZlQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/liveModeButton.tsx\n");

/***/ })

})