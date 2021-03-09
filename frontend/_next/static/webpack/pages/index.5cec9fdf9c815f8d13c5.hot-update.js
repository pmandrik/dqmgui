webpackHotUpdate_N_E("pages/index",{

/***/ "./components/plots/plot/index.tsx":
/*!*****************************************!*\
  !*** ./components/plots/plot/index.tsx ***!
  \*****************************************/
/*! exports provided: LeftSidePlots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftSidePlots\", function() { return LeftSidePlots; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config */ \"./config/config.ts\");\n/* harmony import */ var _contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/leftSideContext */ \"./contexts/leftSideContext.tsx\");\n/* harmony import */ var _plotsWithLayouts_plotsWithLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plotsWithLayouts/plotsWithLayout */ \"./components/plots/plot/plotsWithLayouts/plotsWithLayout.tsx\");\n/* harmony import */ var _plotsWithoutLayouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plotsWithoutLayouts */ \"./components/plots/plot/plotsWithoutLayouts.tsx\");\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/components/plots/plot/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar LeftSidePlots = function LeftSidePlots(_ref) {\n  _s();\n\n  var plots = _ref.plots,\n      selected_plots = _ref.selected_plots,\n      plots_grouped_by_layouts = _ref.plots_grouped_by_layouts;\n  var plots_grouped_by_layouts_checked = plots_grouped_by_layouts ? plots_grouped_by_layouts : {};\n  var globalState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_leftSideContext__WEBPACK_IMPORTED_MODULE_3__[\"store\"]);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var query = router.query;\n  var imageRefScrollDown = globalState.imageRefScrollDown;\n\n  if (plots.length > 0) {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _config_config__WEBPACK_IMPORTED_MODULE_2__[\"functions_config\"].new_back_end.layouts && Object.keys(plots_grouped_by_layouts_checked).length !== 0 ? __jsx(_plotsWithLayouts_plotsWithLayout__WEBPACK_IMPORTED_MODULE_4__[\"PlotsWithLayout\"], {\n      plots_grouped_by_layouts: plots_grouped_by_layouts_checked,\n      selected_plots: selected_plots,\n      query: query,\n      imageRefScrollDown: imageRefScrollDown,\n      globalState: globalState,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    }) : __jsx(_plotsWithoutLayouts__WEBPACK_IMPORTED_MODULE_5__[\"PlotsWithoutLayouts\"], {\n      plots: plots,\n      selected_plots: selected_plots,\n      query: query,\n      imageRefScrollDown: imageRefScrollDown,\n      globalState: globalState,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }\n    }));\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);\n};\n\n_s(LeftSidePlots, \"wN/sXo1Q7JeaUZSy/IPQ1dGHSUo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = LeftSidePlots;\n\nvar _c;\n\n$RefreshReg$(_c, \"LeftSidePlots\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbG90cy9wbG90L2luZGV4LnRzeD8xZjQ1Il0sIm5hbWVzIjpbIkxlZnRTaWRlUGxvdHMiLCJwbG90cyIsInNlbGVjdGVkX3Bsb3RzIiwicGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzIiwicGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzX2NoZWNrZWQiLCJnbG9iYWxTdGF0ZSIsInVzZUNvbnRleHQiLCJzdG9yZSIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaW1hZ2VSZWZTY3JvbGxEb3duIiwibGVuZ3RoIiwiZnVuY3Rpb25zX2NvbmZpZyIsIm5ld19iYWNrX2VuZCIsImxheW91dHMiLCJPYmplY3QiLCJrZXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQU1BO0FBQ0E7QUFTTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BSUg7QUFBQTs7QUFBQSxNQUh4QkMsS0FHd0IsUUFIeEJBLEtBR3dCO0FBQUEsTUFGeEJDLGNBRXdCLFFBRnhCQSxjQUV3QjtBQUFBLE1BRHhCQyx3QkFDd0IsUUFEeEJBLHdCQUN3QjtBQUN4QixNQUFNQyxnQ0FBZ0MsR0FBR0Qsd0JBQXdCLEdBQzdEQSx3QkFENkQsR0FFN0QsRUFGSjtBQUdBLE1BQU1FLFdBQVcsR0FBR0Msd0RBQVUsQ0FBQ0MsK0RBQUQsQ0FBOUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsS0FBaUIsR0FBR0YsTUFBTSxDQUFDRSxLQUFqQztBQU53QixNQU9oQkMsa0JBUGdCLEdBT09OLFdBUFAsQ0FPaEJNLGtCQVBnQjs7QUFVeEIsTUFBSVYsS0FBSyxDQUFDVyxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEIsV0FDRSxtRUFDR0MsK0RBQWdCLENBQUNDLFlBQWpCLENBQThCQyxPQUE5QixJQUNBQyxNQUFNLENBQUNDLElBQVAsQ0FBWWIsZ0NBQVosRUFBOENRLE1BQTlDLEtBQXlELENBRHpELEdBRUMsTUFBQyxpRkFBRDtBQUNFLDhCQUF3QixFQUFFUixnQ0FENUI7QUFFRSxvQkFBYyxFQUFFRixjQUZsQjtBQUdFLFdBQUssRUFBRVEsS0FIVDtBQUlFLHdCQUFrQixFQUFFQyxrQkFKdEI7QUFLRSxpQkFBVyxFQUFFTixXQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRCxHQVVDLE1BQUMsd0VBQUQ7QUFDRSxXQUFLLEVBQUVKLEtBRFQ7QUFFRSxvQkFBYyxFQUFFQyxjQUZsQjtBQUdFLFdBQUssRUFBRVEsS0FIVDtBQUlFLHdCQUFrQixFQUFFQyxrQkFKdEI7QUFLRSxpQkFBVyxFQUFFTixXQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYSixDQURGO0FBc0JEOztBQUNELFNBQU8sa0VBQVA7QUFDRCxDQXZDTTs7R0FBTUwsYTtVQVNJUyxxRDs7O0tBVEpULGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bsb3RzL3Bsb3QvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcclxuXHJcbmltcG9ydCB7IGZ1bmN0aW9uc19jb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnJztcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0cy9sZWZ0U2lkZUNvbnRleHQnO1xyXG5pbXBvcnQge1xyXG4gIFF1ZXJ5UHJvcHMsXHJcbiAgUGxvdERhdGFQcm9wcyxcclxuICBQbG90c0dyb3VwZWRCeUxheW91dHNJbnRlcmZhY2UsXHJcbn0gZnJvbSAnLi4vLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBQbG90c1dpdGhMYXlvdXQgfSBmcm9tICcuL3Bsb3RzV2l0aExheW91dHMvcGxvdHNXaXRoTGF5b3V0JztcclxuaW1wb3J0IHsgUGxvdHNXaXRob3V0TGF5b3V0cyB9IGZyb20gJy4vcGxvdHNXaXRob3V0TGF5b3V0cyc7XHJcbmltcG9ydCB7IHNpemVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbmludGVyZmFjZSBMZWZ0U2lkZVBsb3RzUHJvcHMge1xyXG4gIHBsb3RzOiBQbG90RGF0YVByb3BzW107XHJcbiAgc2VsZWN0ZWRfcGxvdHM6IGFueTtcclxuICBwbG90c19ncm91cGVkX2J5X2xheW91dHM/OiBQbG90c0dyb3VwZWRCeUxheW91dHNJbnRlcmZhY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMZWZ0U2lkZVBsb3RzID0gKHtcclxuICBwbG90cyxcclxuICBzZWxlY3RlZF9wbG90cyxcclxuICBwbG90c19ncm91cGVkX2J5X2xheW91dHMsXHJcbn06IExlZnRTaWRlUGxvdHNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHBsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c19jaGVja2VkID0gcGxvdHNfZ3JvdXBlZF9ieV9sYXlvdXRzXHJcbiAgICA/IHBsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c1xyXG4gICAgOiB7fTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZUNvbnRleHQoc3RvcmUpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHF1ZXJ5OiBRdWVyeVByb3BzID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgaW1hZ2VSZWZTY3JvbGxEb3duIH0gPSBnbG9iYWxTdGF0ZTtcclxuXHJcblxyXG4gIGlmIChwbG90cy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtmdW5jdGlvbnNfY29uZmlnLm5ld19iYWNrX2VuZC5sYXlvdXRzICYmXHJcbiAgICAgICAgIE9iamVjdC5rZXlzKHBsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c19jaGVja2VkKS5sZW5ndGggIT09IDAgID8gKFxyXG4gICAgICAgICAgPFBsb3RzV2l0aExheW91dFxyXG4gICAgICAgICAgICBwbG90c19ncm91cGVkX2J5X2xheW91dHM9e3Bsb3RzX2dyb3VwZWRfYnlfbGF5b3V0c19jaGVja2VkfVxyXG4gICAgICAgICAgICBzZWxlY3RlZF9wbG90cz17c2VsZWN0ZWRfcGxvdHN9XHJcbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cclxuICAgICAgICAgICAgaW1hZ2VSZWZTY3JvbGxEb3duPXtpbWFnZVJlZlNjcm9sbERvd259XHJcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlPXtnbG9iYWxTdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxQbG90c1dpdGhvdXRMYXlvdXRzXHJcbiAgICAgICAgICAgIHBsb3RzPXtwbG90c31cclxuICAgICAgICAgICAgc2VsZWN0ZWRfcGxvdHM9e3NlbGVjdGVkX3Bsb3RzfVxyXG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XHJcbiAgICAgICAgICAgIGltYWdlUmVmU2Nyb2xsRG93bj17aW1hZ2VSZWZTY3JvbGxEb3dufVxyXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZT17Z2xvYmFsU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIDw+PC8+O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/plots/plot/index.tsx\n");

/***/ })

})