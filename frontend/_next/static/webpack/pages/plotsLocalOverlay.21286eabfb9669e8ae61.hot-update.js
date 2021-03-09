webpackHotUpdate_N_E("pages/plotsLocalOverlay",{

/***/ "./plotsLocalOverlayPageComponents/options/reference.tsx":
/*!***************************************************************!*\
  !*** ./plotsLocalOverlayPageComponents/options/reference.tsx ***!
  \***************************************************************/
/*! exports provided: Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Reference\", function() { return Reference; });\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _jsrootSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jsrootSwitch */ \"./plotsLocalOverlayPageComponents/options/jsrootSwitch.tsx\");\n/* harmony import */ var _overlayPositionSelectionProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlayPositionSelectionProps */ \"./plotsLocalOverlayPageComponents/options/overlayPositionSelectionProps.tsx\");\n/* harmony import */ var _sizeSelection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sizeSelection */ \"./plotsLocalOverlayPageComponents/options/sizeSelection.tsx\");\n/* harmony import */ var _checkBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkBox */ \"./plotsLocalOverlayPageComponents/options/checkBox.tsx\");\n/* harmony import */ var _components_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/constants */ \"./components/constants.ts\");\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styledComponents */ \"./plotsLocalOverlayPageComponents/styledComponents.ts\");\n/* harmony import */ var _components_customization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/customization */ \"./components/customization/index.tsx\");\n/* harmony import */ var _routerChangers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routerChangers */ \"./plotsLocalOverlayPageComponents/routerChangers.ts\");\n/* harmony import */ var clean_deep__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! clean-deep */ \"./node_modules/clean-deep/src/index.js\");\n/* harmony import */ var clean_deep__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(clean_deep__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ernestapetraityte/projects/CERN/dqmgui_frontend/plotsLocalOverlayPageComponents/options/reference.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar warning = function warning() {\n  antd__WEBPACK_IMPORTED_MODULE_5__[\"message\"].warning('Plot is already customized');\n};\n\nvar Reference = function Reference(_ref) {\n  _s();\n\n  var _React$useState7;\n\n  var router = _ref.router,\n      parameters = _ref.parameters,\n      setParameters = _ref.setParameters;\n  var query = router.query;\n  var defaultSize = parameters.size;\n  var defaultOverlayPosition = query.overlayPosition ? query.overlayPosition : 'overlay';\n  var defaultJSROOTState = query.jsroot ? query.jsroot === 'true' ? true : false : false;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"](false),\n      _React$useState2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      openCustomization = _React$useState2[0],\n      setOpenCustomization = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"]({}),\n      _React$useState4 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      customizationParams = _React$useState4[0],\n      setCustomizationParams = _React$useState4[1];\n\n  var isPlotCustomized = Object.keys(parameters.customizeProps ? parameters.customizeProps : {}).length > 0;\n  var checkBoxes = [{\n    label: 'Normalize',\n    value: query.normalize ? query.normalize === 'true' ? true : false : true\n  }, {\n    label: 'Stats',\n    value: query.stats ? query.stats === 'true' ? true : false : true\n  }, {\n    label: 'Error',\n    value: query.error ? query.error === 'true' ? true : false : false\n  }];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"]((_React$useState7 = {\n    size: defaultSize,\n    jsroot: defaultJSROOTState,\n    ref: defaultOverlayPosition\n  }, Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, checkBoxes[0].label.toLocaleLowerCase(), checkBoxes[0].value), Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, checkBoxes[1].label.toLocaleLowerCase(), checkBoxes[1].value), Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState7, checkBoxes[2].label.toLocaleLowerCase(), checkBoxes[2].value), _React$useState7)),\n      _React$useState6 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      reference = _React$useState6[0],\n      setReference = _React$useState6[1];\n\n  react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"](function () {\n    var copy = _objectSpread({}, parameters); //@ts-ignore\n\n\n    copy.height = _components_constants__WEBPACK_IMPORTED_MODULE_10__[\"sizes\"][reference.size].size.h; //@ts-ignore\n\n    copy.width = _components_constants__WEBPACK_IMPORTED_MODULE_10__[\"sizes\"][reference.size].size.w;\n    copy.size = reference.size;\n\n    if (copy.overlaidSeparately) {\n      copy.overlaidSeparately.ref = reference.ref;\n    }\n\n    copy.jsroot = reference.jsroot;\n    copy.size = reference.size;\n    copy.stats = reference.stats;\n    copy.normalize = reference.normalize;\n    copy.error = reference.error;\n    copy.customizeProps = customizationParams;\n\n    var addedPropsToParameters = _objectSpread(_objectSpread({}, copy), {}, {\n      overlaidSeparately: _objectSpread({}, copy.overlaidSeparately)\n    }); //@ts-ignore\n\n\n    setParameters(addedPropsToParameters);\n  }, [reference.size, reference.jsroot, reference.ref, reference[checkBoxes[0].label.toLocaleLowerCase()], reference[checkBoxes[1].label.toLocaleLowerCase()], reference[checkBoxes[2].label.toLocaleLowerCase()], customizationParams, query.ref, query.normalize, query.stats, query.error, query.jsroot, query.size]);\n  react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"](function () {\n    var costumization = {\n      xtype: query.xtype,\n      xmin: query.xmin,\n      xmax: query.xmax,\n      ytype: query.ytype,\n      ymin: query.ymin,\n      ymax: query.ymax,\n      ztype: query.ztype,\n      zmin: query.zmin,\n      zmax: query.zmax,\n      drawopts: query.drawopts,\n      withref: query.withref\n    };\n    setCustomizationParams(clean_deep__WEBPACK_IMPORTED_MODULE_14___default()(costumization));\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"](function () {\n    if (isPlotCustomized) {\n      console.log(isPlotCustomized);\n      warning;\n    }\n  }, [isPlotCustomized]);\n  return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Wrapper\"], {\n    direction: \"column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 10\n    }\n  }, __jsx(_components_customization__WEBPACK_IMPORTED_MODULE_12__[\"Customization\"], {\n    plot_name: parameters.plot_name,\n    open: openCustomization,\n    customizationParams: customizationParams,\n    onCancel: function onCancel() {\n      return setOpenCustomization(false);\n    },\n    setCustomizationParams: /*#__PURE__*/function () {\n      var _ref2 = Object(_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {\n        return _Users_ernestapetraityte_projects_CERN_dqmgui_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setCustomizationParams(params);\n                _context.next = 3;\n                return Object(_routerChangers__WEBPACK_IMPORTED_MODULE_13__[\"SetCustomizationParams\"])(router, params, parameters);\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 5\n    }\n  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Wrapper\"], {\n    direction: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 5\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  }, __jsx(_sizeSelection__WEBPACK_IMPORTED_MODULE_8__[\"SizeSelection\"], {\n    setReference: setReference,\n    reference: reference,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 9\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }\n  }, __jsx(_overlayPositionSelectionProps__WEBPACK_IMPORTED_MODULE_7__[\"OverlayPositionSelection\"], {\n    setReference: setReference,\n    reference: reference,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n    space: '2',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }\n  }, __jsx(_jsrootSwitch__WEBPACK_IMPORTED_MODULE_6__[\"JSROOTSwitch\"], {\n    disabled: !!query.overlayPlots,\n    setReference: setReference,\n    reference: reference,\n    d: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 9\n    }\n  })), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n    space: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__[\"Tooltip\"], {\n    title: isPlotCustomized ? 'This plot is customized!' : '',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }\n  }, __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"StyledButton\"], {\n    isPlotCustomized: isPlotCustomized.toString(),\n    onClick: function onClick() {\n      return setOpenCustomization(!openCustomization);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 11\n    }\n  }, \"Customize\")))), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Wrapper\"], {\n    direction: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 5\n    }\n  }, checkBoxes.map(function (checkBox) {\n    return __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_11__[\"Grid\"], {\n      space: '2',\n      key: checkBox.label,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 11\n      }\n    }, __jsx(_checkBox__WEBPACK_IMPORTED_MODULE_9__[\"CheckBox\"], {\n      option: checkBox,\n      setReference: setReference,\n      reference: reference,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 13\n      }\n    }));\n  })));\n};\n\n_s(Reference, \"enabV9as7EIeykn812ZbB/wOE9A=\");\n\n_c = Reference;\n\nvar _c;\n\n$RefreshReg$(_c, \"Reference\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGxvdHNMb2NhbE92ZXJsYXlQYWdlQ29tcG9uZW50cy9vcHRpb25zL3JlZmVyZW5jZS50c3g/OTI4OSJdLCJuYW1lcyI6WyJ3YXJuaW5nIiwibWVzc2FnZSIsIlJlZmVyZW5jZSIsInJvdXRlciIsInBhcmFtZXRlcnMiLCJzZXRQYXJhbWV0ZXJzIiwicXVlcnkiLCJkZWZhdWx0U2l6ZSIsInNpemUiLCJkZWZhdWx0T3ZlcmxheVBvc2l0aW9uIiwib3ZlcmxheVBvc2l0aW9uIiwiZGVmYXVsdEpTUk9PVFN0YXRlIiwianNyb290IiwiUmVhY3QiLCJvcGVuQ3VzdG9taXphdGlvbiIsInNldE9wZW5DdXN0b21pemF0aW9uIiwiY3VzdG9taXphdGlvblBhcmFtcyIsInNldEN1c3RvbWl6YXRpb25QYXJhbXMiLCJpc1Bsb3RDdXN0b21pemVkIiwiT2JqZWN0Iiwia2V5cyIsImN1c3RvbWl6ZVByb3BzIiwibGVuZ3RoIiwiY2hlY2tCb3hlcyIsImxhYmVsIiwidmFsdWUiLCJub3JtYWxpemUiLCJzdGF0cyIsImVycm9yIiwicmVmIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJyZWZlcmVuY2UiLCJzZXRSZWZlcmVuY2UiLCJjb3B5IiwiaGVpZ2h0Iiwic2l6ZXMiLCJoIiwid2lkdGgiLCJ3Iiwib3ZlcmxhaWRTZXBhcmF0ZWx5IiwiYWRkZWRQcm9wc1RvUGFyYW1ldGVycyIsImNvc3R1bWl6YXRpb24iLCJ4dHlwZSIsInhtaW4iLCJ4bWF4IiwieXR5cGUiLCJ5bWluIiwieW1heCIsInp0eXBlIiwiem1pbiIsInptYXgiLCJkcmF3b3B0cyIsIndpdGhyZWYiLCJjbGVhbkRlZXAiLCJjb25zb2xlIiwibG9nIiwicGxvdF9uYW1lIiwicGFyYW1zIiwiU2V0Q3VzdG9taXphdGlvblBhcmFtcyIsIm92ZXJsYXlQbG90cyIsInRvU3RyaW5nIiwibWFwIiwiY2hlY2tCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJDLDhDQUFPLENBQUNELE9BQVIsQ0FBZ0IsNEJBQWhCO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUEyRDtBQUFBOztBQUFBOztBQUFBLE1BQXhEQyxNQUF3RCxRQUF4REEsTUFBd0Q7QUFBQSxNQUFoREMsVUFBZ0QsUUFBaERBLFVBQWdEO0FBQUEsTUFBcENDLGFBQW9DLFFBQXBDQSxhQUFvQztBQUFBLE1BQzFFQyxLQUQwRSxHQUNoRUgsTUFEZ0UsQ0FDMUVHLEtBRDBFO0FBRWxGLE1BQU1DLFdBQVcsR0FBR0gsVUFBVSxDQUFDSSxJQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHSCxLQUFLLENBQUNJLGVBQU4sR0FBd0JKLEtBQUssQ0FBQ0ksZUFBOUIsR0FBZ0QsU0FBL0U7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0wsS0FBSyxDQUFDTSxNQUFOLEdBQWVOLEtBQUssQ0FBQ00sTUFBTixLQUFpQixNQUFqQixHQUEwQixJQUExQixHQUFpQyxLQUFoRCxHQUF3RCxLQUFuRjs7QUFKa0Ysd0JBS2hDQyw4Q0FBQSxDQUFlLEtBQWYsQ0FMZ0M7QUFBQTtBQUFBLE1BSzNFQyxpQkFMMkU7QUFBQSxNQUt4REMsb0JBTHdEOztBQUFBLHlCQU01QkYsOENBQUEsQ0FBb0IsRUFBcEIsQ0FONEI7QUFBQTtBQUFBLE1BTTNFRyxtQkFOMkU7QUFBQSxNQU10REMsc0JBTnNEOztBQU9sRixNQUFNQyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVloQixVQUFVLENBQUNpQixjQUFYLEdBQTRCakIsVUFBVSxDQUFDaUIsY0FBdkMsR0FBd0QsRUFBcEUsRUFBd0VDLE1BQXhFLEdBQWlGLENBQTFHO0FBRUEsTUFBTUMsVUFBVSxHQUFHLENBQUM7QUFDbEJDLFNBQUssRUFBRSxXQURXO0FBRWxCQyxTQUFLLEVBQUVuQixLQUFLLENBQUNvQixTQUFOLEdBQWtCcEIsS0FBSyxDQUFDb0IsU0FBTixLQUFvQixNQUFwQixHQUE2QixJQUE3QixHQUFvQyxLQUF0RCxHQUE4RDtBQUZuRCxHQUFELEVBSW5CO0FBQ0VGLFNBQUssRUFBRSxPQURUO0FBRUVDLFNBQUssRUFBRW5CLEtBQUssQ0FBQ3FCLEtBQU4sR0FBY3JCLEtBQUssQ0FBQ3FCLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsSUFBekIsR0FBZ0MsS0FBOUMsR0FBc0Q7QUFGL0QsR0FKbUIsRUFRbkI7QUFDRUgsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsU0FBSyxFQUFFbkIsS0FBSyxDQUFDc0IsS0FBTixHQUFjdEIsS0FBSyxDQUFDc0IsS0FBTixLQUFnQixNQUFoQixHQUF5QixJQUF6QixHQUFnQyxLQUE5QyxHQUFzRDtBQUYvRCxHQVJtQixDQUFuQjs7QUFUa0YseUJBc0JoRGYsOENBQUE7QUFDaENMLFFBQUksRUFBRUQsV0FEMEI7QUFFaENLLFVBQU0sRUFBRUQsa0JBRndCO0FBR2hDa0IsT0FBRyxFQUFFcEI7QUFIMkIsb0xBSS9CYyxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNDLEtBQWQsQ0FBb0JNLGlCQUFwQixFQUorQixFQUlXUCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNFLEtBSnpCLGtMQUsvQkYsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFkLENBQW9CTSxpQkFBcEIsRUFMK0IsRUFLV1AsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRSxLQUx6QixrTEFNL0JGLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0MsS0FBZCxDQUFvQk0saUJBQXBCLEVBTitCLEVBTVdQLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0UsS0FOekIscUJBdEJnRDtBQUFBO0FBQUEsTUFzQjNFTSxTQXRCMkU7QUFBQSxNQXNCaEVDLFlBdEJnRTs7QUErQmxGbkIsaURBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFNb0IsSUFBSSxxQkFBUTdCLFVBQVIsQ0FBVixDQURvQixDQUVwQjs7O0FBQ0E2QixRQUFJLENBQUNDLE1BQUwsR0FBY0MsNERBQUssQ0FBQ0osU0FBUyxDQUFDdkIsSUFBWCxDQUFMLENBQXNCQSxJQUF0QixDQUEyQjRCLENBQXpDLENBSG9CLENBSXBCOztBQUNBSCxRQUFJLENBQUNJLEtBQUwsR0FBYUYsNERBQUssQ0FBQ0osU0FBUyxDQUFDdkIsSUFBWCxDQUFMLENBQXNCQSxJQUF0QixDQUEyQjhCLENBQXhDO0FBQ0FMLFFBQUksQ0FBQ3pCLElBQUwsR0FBWXVCLFNBQVMsQ0FBQ3ZCLElBQXRCOztBQUNBLFFBQUl5QixJQUFJLENBQUNNLGtCQUFULEVBQTZCO0FBQzNCTixVQUFJLENBQUNNLGtCQUFMLENBQXdCVixHQUF4QixHQUE4QkUsU0FBUyxDQUFDRixHQUF4QztBQUNEOztBQUNESSxRQUFJLENBQUNyQixNQUFMLEdBQWNtQixTQUFTLENBQUNuQixNQUF4QjtBQUNBcUIsUUFBSSxDQUFDekIsSUFBTCxHQUFZdUIsU0FBUyxDQUFDdkIsSUFBdEI7QUFDQXlCLFFBQUksQ0FBQ04sS0FBTCxHQUFhSSxTQUFTLENBQUNKLEtBQXZCO0FBQ0FNLFFBQUksQ0FBQ1AsU0FBTCxHQUFpQkssU0FBUyxDQUFDTCxTQUEzQjtBQUNBTyxRQUFJLENBQUNMLEtBQUwsR0FBYUcsU0FBUyxDQUFDSCxLQUF2QjtBQUNBSyxRQUFJLENBQUNaLGNBQUwsR0FBc0JMLG1CQUF0Qjs7QUFDQSxRQUFNd0Isc0JBQXNCLG1DQUFRUCxJQUFSO0FBQWNNLHdCQUFrQixvQkFBT04sSUFBSSxDQUFDTSxrQkFBWjtBQUFoQyxNQUE1QixDQWhCb0IsQ0FpQnBCOzs7QUFDQWxDLGlCQUFhLENBQUNtQyxzQkFBRCxDQUFiO0FBRUQsR0FwQkQsRUFvQkcsQ0FBQ1QsU0FBUyxDQUFDdkIsSUFBWCxFQUNIdUIsU0FBUyxDQUFDbkIsTUFEUCxFQUVIbUIsU0FBUyxDQUFDRixHQUZQLEVBR0hFLFNBQVMsQ0FBQ1IsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFkLENBQW9CTSxpQkFBcEIsRUFBRCxDQUhOLEVBSUhDLFNBQVMsQ0FBQ1IsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFkLENBQW9CTSxpQkFBcEIsRUFBRCxDQUpOLEVBS0hDLFNBQVMsQ0FBQ1IsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxLQUFkLENBQW9CTSxpQkFBcEIsRUFBRCxDQUxOLEVBTUhkLG1CQU5HLEVBT0hWLEtBQUssQ0FBQ3VCLEdBUEgsRUFRSHZCLEtBQUssQ0FBQ29CLFNBUkgsRUFTSHBCLEtBQUssQ0FBQ3FCLEtBVEgsRUFVSHJCLEtBQUssQ0FBQ3NCLEtBVkgsRUFXSHRCLEtBQUssQ0FBQ00sTUFYSCxFQVlITixLQUFLLENBQUNFLElBWkgsQ0FwQkg7QUFrQ0FLLGlEQUFBLENBQWdCLFlBQUk7QUFDbEIsUUFBTTRCLGFBQWEsR0FBRztBQUNwQkMsV0FBSyxFQUFFcEMsS0FBSyxDQUFDb0MsS0FETztBQUVwQkMsVUFBSSxFQUFFckMsS0FBSyxDQUFDcUMsSUFGUTtBQUdwQkMsVUFBSSxFQUFFdEMsS0FBSyxDQUFDc0MsSUFIUTtBQUlwQkMsV0FBSyxFQUFFdkMsS0FBSyxDQUFDdUMsS0FKTztBQUtwQkMsVUFBSSxFQUFFeEMsS0FBSyxDQUFDd0MsSUFMUTtBQU1wQkMsVUFBSSxFQUFFekMsS0FBSyxDQUFDeUMsSUFOUTtBQU9wQkMsV0FBSyxFQUFFMUMsS0FBSyxDQUFDMEMsS0FQTztBQVFwQkMsVUFBSSxFQUFFM0MsS0FBSyxDQUFDMkMsSUFSUTtBQVNwQkMsVUFBSSxFQUFFNUMsS0FBSyxDQUFDNEMsSUFUUTtBQVVwQkMsY0FBUSxFQUFFN0MsS0FBSyxDQUFDNkMsUUFWSTtBQVdwQkMsYUFBTyxFQUFFOUMsS0FBSyxDQUFDOEM7QUFYSyxLQUF0QjtBQWFBbkMsMEJBQXNCLENBQUNvQyxrREFBUyxDQUFDWixhQUFELENBQVYsQ0FBdEI7QUFDRCxHQWZELEVBZUUsRUFmRjtBQWlCQTVCLGlEQUFBLENBQWdCLFlBQUk7QUFDbEIsUUFBR0ssZ0JBQUgsRUFBb0I7QUFDbEJvQyxhQUFPLENBQUNDLEdBQVIsQ0FBWXJDLGdCQUFaO0FBQ0FsQixhQUFPO0FBQ1I7QUFDRixHQUxELEVBS0UsQ0FBQ2tCLGdCQUFELENBTEY7QUFPQSxTQUFPLE1BQUMsMERBQUQ7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsd0VBQUQ7QUFDRSxhQUFTLEVBQUVkLFVBQVUsQ0FBQ29ELFNBRHhCO0FBRUUsUUFBSSxFQUFFMUMsaUJBRlI7QUFHRSx1QkFBbUIsRUFBRUUsbUJBSHZCO0FBSUUsWUFBUSxFQUFFO0FBQUEsYUFBTUQsb0JBQW9CLENBQUMsS0FBRCxDQUExQjtBQUFBLEtBSlo7QUFLRSwwQkFBc0I7QUFBQSx5VUFBRSxpQkFBTzBDLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QnhDLHNDQUFzQixDQUFDd0MsTUFBRCxDQUF0QjtBQURzQjtBQUFBLHVCQUVoQkMsK0VBQXNCLENBQUN2RCxNQUFELEVBQVNzRCxNQUFULEVBQWlCckQsVUFBakIsQ0FGTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQVlMLE1BQUMsMERBQUQ7QUFBUyxhQUFTLEVBQUMsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBTSxTQUFLLEVBQUUsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLGdCQUFZLEVBQUU0QixZQURoQjtBQUVFLGFBQVMsRUFBRUQsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQU1FLE1BQUMsdURBQUQ7QUFBTSxTQUFLLEVBQUUsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RkFBRDtBQUNFLGdCQUFZLEVBQUVDLFlBRGhCO0FBRUUsYUFBUyxFQUFFRCxTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLEVBWUUsTUFBQyx1REFBRDtBQUFNLFNBQUssRUFBRSxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQ0UsWUFBUSxFQUFFLENBQUMsQ0FBQ3pCLEtBQUssQ0FBQ3FELFlBRHBCO0FBRUUsZ0JBQVksRUFBRTNCLFlBRmhCO0FBR0UsYUFBUyxFQUFFRCxTQUhiO0FBR3VCLEtBQUMsTUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsRUFrQkUsTUFBQyx1REFBRDtBQUFNLFNBQUssRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQVMsU0FBSyxFQUFFYixnQkFBZ0IsR0FBRywwQkFBSCxHQUFnQyxFQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFjLG9CQUFnQixFQUFFQSxnQkFBZ0IsQ0FBQzBDLFFBQWpCLEVBQWhDO0FBQTZELFdBQU8sRUFBRTtBQUFBLGFBQ3BFN0Msb0JBQW9CLENBQUMsQ0FBQ0QsaUJBQUYsQ0FEZ0Q7QUFBQSxLQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0FsQkYsQ0FaSyxFQXFDTCxNQUFDLDBEQUFEO0FBQVMsYUFBUyxFQUFDLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSVMsVUFBVSxDQUFDc0MsR0FBWCxDQUFlLFVBQUNDLFFBQUQ7QUFBQSxXQUNiLE1BQUMsdURBQUQ7QUFBTSxXQUFLLEVBQUUsR0FBYjtBQUFrQixTQUFHLEVBQUVBLFFBQVEsQ0FBQ3RDLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtEQUFEO0FBQVUsWUFBTSxFQUFFc0MsUUFBbEI7QUFDRSxrQkFBWSxFQUFFOUIsWUFEaEI7QUFFRSxlQUFTLEVBQUVELFNBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRGE7QUFBQSxHQUFmLENBRkosQ0FyQ0ssQ0FBUDtBQWlERCxDQTFJTTs7R0FBTTdCLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9wbG90c0xvY2FsT3ZlcmxheVBhZ2VDb21wb25lbnRzL29wdGlvbnMvcmVmZXJlbmNlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5cclxuaW1wb3J0IHsgSlNST09UU3dpdGNoIH0gZnJvbSAnLi9qc3Jvb3RTd2l0Y2gnO1xyXG5pbXBvcnQgeyBPdmVybGF5UG9zaXRpb25TZWxlY3Rpb24gfSBmcm9tICcuL292ZXJsYXlQb3NpdGlvblNlbGVjdGlvblByb3BzJztcclxuaW1wb3J0IHsgU2l6ZVNlbGVjdGlvbiB9IGZyb20gJy4vc2l6ZVNlbGVjdGlvbic7XHJcbmltcG9ydCB7IENoZWNrQm94IH0gZnJvbSAnLi9jaGVja0JveCdcclxuaW1wb3J0IHsgUGFyYW1ldGVyc0ZvckFwaSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBzaXplcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgR3JpZCwgU3R5bGVkQnV0dG9uLCBXcmFwcGVyIH0gZnJvbSAnLi4vc3R5bGVkQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ3VzdG9taXphdGlvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY3VzdG9taXphdGlvbic7XHJcbmltcG9ydCB7IEN1c3RvbWl6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9kaXNwbGF5L2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBTZXRDdXN0b21pemF0aW9uUGFyYW1zIH0gZnJvbSAnLi4vcm91dGVyQ2hhbmdlcnMnO1xyXG5pbXBvcnQgY2xlYW5EZWVwIGZyb20gJ2NsZWFuLWRlZXAnO1xyXG5cclxuXHJcbmludGVyZmFjZSBSZWZlcmVuY2VQcm9wcyB7XHJcbiAgcm91dGVyOiBOZXh0Um91dGVyXHJcbiAgcGFyYW1ldGVyczogUGFyYW1ldGVyc0ZvckFwaTtcclxuICBzZXRQYXJhbWV0ZXJzOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxQYXJhbWV0ZXJzRm9yQXBpIHwgdW5kZWZpbmVkPj5cclxufVxyXG5cclxuY29uc3Qgd2FybmluZyA9ICgpID0+IHtcclxuICBtZXNzYWdlLndhcm5pbmcoJ1Bsb3QgaXMgYWxyZWFkeSBjdXN0b21pemVkJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUmVmZXJlbmNlID0gKHsgcm91dGVyLCBwYXJhbWV0ZXJzLCBzZXRQYXJhbWV0ZXJzIH06IFJlZmVyZW5jZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyXHJcbiAgY29uc3QgZGVmYXVsdFNpemUgPSBwYXJhbWV0ZXJzLnNpemVcclxuICBjb25zdCBkZWZhdWx0T3ZlcmxheVBvc2l0aW9uID0gcXVlcnkub3ZlcmxheVBvc2l0aW9uID8gcXVlcnkub3ZlcmxheVBvc2l0aW9uIDogJ292ZXJsYXknXHJcbiAgY29uc3QgZGVmYXVsdEpTUk9PVFN0YXRlID0gcXVlcnkuanNyb290ID8gcXVlcnkuanNyb290ID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UgOiBmYWxzZVxyXG4gIGNvbnN0IFtvcGVuQ3VzdG9taXphdGlvbiwgc2V0T3BlbkN1c3RvbWl6YXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1c3RvbWl6YXRpb25QYXJhbXMsIHNldEN1c3RvbWl6YXRpb25QYXJhbXNdID0gUmVhY3QudXNlU3RhdGU8YW55Pih7fSlcclxuICBjb25zdCBpc1Bsb3RDdXN0b21pemVkID0gT2JqZWN0LmtleXMocGFyYW1ldGVycy5jdXN0b21pemVQcm9wcyA/IHBhcmFtZXRlcnMuY3VzdG9taXplUHJvcHMgOiB7fSkubGVuZ3RoID4gMFxyXG5cclxuICBjb25zdCBjaGVja0JveGVzID0gW3tcclxuICAgIGxhYmVsOiAnTm9ybWFsaXplJyxcclxuICAgIHZhbHVlOiBxdWVyeS5ub3JtYWxpemUgPyBxdWVyeS5ub3JtYWxpemUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSA6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnU3RhdHMnLFxyXG4gICAgdmFsdWU6IHF1ZXJ5LnN0YXRzID8gcXVlcnkuc3RhdHMgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSA6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnRXJyb3InLFxyXG4gICAgdmFsdWU6IHF1ZXJ5LmVycm9yID8gcXVlcnkuZXJyb3IgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSA6IGZhbHNlXHJcbiAgfV1cclxuXHJcbiAgY29uc3QgW3JlZmVyZW5jZSwgc2V0UmVmZXJlbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHNpemU6IGRlZmF1bHRTaXplLFxyXG4gICAganNyb290OiBkZWZhdWx0SlNST09UU3RhdGUsXHJcbiAgICByZWY6IGRlZmF1bHRPdmVybGF5UG9zaXRpb24sXHJcbiAgICBbY2hlY2tCb3hlc1swXS5sYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSgpXTogY2hlY2tCb3hlc1swXS52YWx1ZSxcclxuICAgIFtjaGVja0JveGVzWzFdLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCldOiBjaGVja0JveGVzWzFdLnZhbHVlLFxyXG4gICAgW2NoZWNrQm94ZXNbMl0ubGFiZWwudG9Mb2NhbGVMb3dlckNhc2UoKV06IGNoZWNrQm94ZXNbMl0udmFsdWUsXHJcbiAgfSlcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNvcHkgPSB7IC4uLnBhcmFtZXRlcnMgfVxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBjb3B5LmhlaWdodCA9IHNpemVzW3JlZmVyZW5jZS5zaXplXS5zaXplLmhcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY29weS53aWR0aCA9IHNpemVzW3JlZmVyZW5jZS5zaXplXS5zaXplLndcclxuICAgIGNvcHkuc2l6ZSA9IHJlZmVyZW5jZS5zaXplXHJcbiAgICBpZiAoY29weS5vdmVybGFpZFNlcGFyYXRlbHkpIHtcclxuICAgICAgY29weS5vdmVybGFpZFNlcGFyYXRlbHkucmVmID0gcmVmZXJlbmNlLnJlZiBhcyBzdHJpbmdcclxuICAgIH1cclxuICAgIGNvcHkuanNyb290ID0gcmVmZXJlbmNlLmpzcm9vdFxyXG4gICAgY29weS5zaXplID0gcmVmZXJlbmNlLnNpemVcclxuICAgIGNvcHkuc3RhdHMgPSByZWZlcmVuY2Uuc3RhdHMgYXMgYm9vbGVhblxyXG4gICAgY29weS5ub3JtYWxpemUgPSByZWZlcmVuY2Uubm9ybWFsaXplIGFzIGJvb2xlYW5cclxuICAgIGNvcHkuZXJyb3IgPSByZWZlcmVuY2UuZXJyb3IgYXMgYm9vbGVhblxyXG4gICAgY29weS5jdXN0b21pemVQcm9wcyA9IGN1c3RvbWl6YXRpb25QYXJhbXNcclxuICAgIGNvbnN0IGFkZGVkUHJvcHNUb1BhcmFtZXRlcnMgPSB7IC4uLmNvcHksIG92ZXJsYWlkU2VwYXJhdGVseTogeyAuLi5jb3B5Lm92ZXJsYWlkU2VwYXJhdGVseSB9IH1cclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgc2V0UGFyYW1ldGVycyhhZGRlZFByb3BzVG9QYXJhbWV0ZXJzKVxyXG5cclxuICB9LCBbcmVmZXJlbmNlLnNpemUsXHJcbiAgcmVmZXJlbmNlLmpzcm9vdCxcclxuICByZWZlcmVuY2UucmVmLFxyXG4gIHJlZmVyZW5jZVtjaGVja0JveGVzWzBdLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCldLFxyXG4gIHJlZmVyZW5jZVtjaGVja0JveGVzWzFdLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCldLFxyXG4gIHJlZmVyZW5jZVtjaGVja0JveGVzWzJdLmxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKCldLFxyXG4gIGN1c3RvbWl6YXRpb25QYXJhbXMsXHJcbiAgcXVlcnkucmVmLFxyXG4gIHF1ZXJ5Lm5vcm1hbGl6ZSxcclxuICBxdWVyeS5zdGF0cyxcclxuICBxdWVyeS5lcnJvcixcclxuICBxdWVyeS5qc3Jvb3QsXHJcbiAgcXVlcnkuc2l6ZV0pXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgY29zdHVtaXphdGlvbiA9IHtcclxuICAgICAgeHR5cGU6IHF1ZXJ5Lnh0eXBlIGFzIHN0cmluZyxcclxuICAgICAgeG1pbjogcXVlcnkueG1pbiBhcyBzdHJpbmcsXHJcbiAgICAgIHhtYXg6IHF1ZXJ5LnhtYXggYXMgc3RyaW5nLFxyXG4gICAgICB5dHlwZTogcXVlcnkueXR5cGUgYXMgc3RyaW5nLFxyXG4gICAgICB5bWluOiBxdWVyeS55bWluIGFzIHN0cmluZyxcclxuICAgICAgeW1heDogcXVlcnkueW1heCBhcyBzdHJpbmcsXHJcbiAgICAgIHp0eXBlOiBxdWVyeS56dHlwZSBhcyBzdHJpbmcsXHJcbiAgICAgIHptaW46IHF1ZXJ5LnptaW4gYXMgc3RyaW5nLFxyXG4gICAgICB6bWF4OiBxdWVyeS56bWF4IGFzIHN0cmluZyxcclxuICAgICAgZHJhd29wdHM6IHF1ZXJ5LmRyYXdvcHRzIGFzIHN0cmluZyxcclxuICAgICAgd2l0aHJlZjogcXVlcnkud2l0aHJlZiBhcyBzdHJpbmcsXHJcbiAgICB9XHJcbiAgICBzZXRDdXN0b21pemF0aW9uUGFyYW1zKGNsZWFuRGVlcChjb3N0dW1pemF0aW9uKSlcclxuICB9LFtdKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKGlzUGxvdEN1c3RvbWl6ZWQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhpc1Bsb3RDdXN0b21pemVkKVxyXG4gICAgICB3YXJuaW5nXHJcbiAgICB9XHJcbiAgfSxbaXNQbG90Q3VzdG9taXplZF0pXHJcblxyXG4gIHJldHVybiA8V3JhcHBlciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgIDxDdXN0b21pemF0aW9uXHJcbiAgICAgIHBsb3RfbmFtZT17cGFyYW1ldGVycy5wbG90X25hbWV9XHJcbiAgICAgIG9wZW49e29wZW5DdXN0b21pemF0aW9ufVxyXG4gICAgICBjdXN0b21pemF0aW9uUGFyYW1zPXtjdXN0b21pemF0aW9uUGFyYW1zfVxyXG4gICAgICBvbkNhbmNlbD17KCkgPT4gc2V0T3BlbkN1c3RvbWl6YXRpb24oZmFsc2UpfVxyXG4gICAgICBzZXRDdXN0b21pemF0aW9uUGFyYW1zPXthc3luYyAocGFyYW1zOiBDdXN0b21pemVQcm9wcykgPT4ge1xyXG4gICAgICAgIHNldEN1c3RvbWl6YXRpb25QYXJhbXMocGFyYW1zKVxyXG4gICAgICAgIGF3YWl0IFNldEN1c3RvbWl6YXRpb25QYXJhbXMocm91dGVyLCBwYXJhbXMsIHBhcmFtZXRlcnMpXHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLz5cclxuICAgIDxXcmFwcGVyIGRpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICA8R3JpZCBzcGFjZT17JzInfT5cclxuICAgICAgICA8U2l6ZVNlbGVjdGlvblxyXG4gICAgICAgICAgc2V0UmVmZXJlbmNlPXtzZXRSZWZlcmVuY2V9XHJcbiAgICAgICAgICByZWZlcmVuY2U9e3JlZmVyZW5jZX1cclxuICAgICAgICAvPjwvR3JpZD5cclxuICAgICAgPEdyaWQgc3BhY2U9eycyJ30+XHJcbiAgICAgICAgPE92ZXJsYXlQb3NpdGlvblNlbGVjdGlvblxyXG4gICAgICAgICAgc2V0UmVmZXJlbmNlPXtzZXRSZWZlcmVuY2V9XHJcbiAgICAgICAgICByZWZlcmVuY2U9e3JlZmVyZW5jZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIHNwYWNlPXsnMid9PlxyXG4gICAgICAgIDxKU1JPT1RTd2l0Y2hcclxuICAgICAgICAgIGRpc2FibGVkPXshIXF1ZXJ5Lm92ZXJsYXlQbG90c31cclxuICAgICAgICAgIHNldFJlZmVyZW5jZT17c2V0UmVmZXJlbmNlfVxyXG4gICAgICAgICAgcmVmZXJlbmNlPXtyZWZlcmVuY2V9ZFxyXG4gICAgICAgIC8+PC9HcmlkPlxyXG4gICAgICA8R3JpZCBzcGFjZT1cIjJcIj5cclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17aXNQbG90Q3VzdG9taXplZCA/ICdUaGlzIHBsb3QgaXMgY3VzdG9taXplZCEnIDogJyd9PlxyXG4gICAgICAgICAgPFN0eWxlZEJ1dHRvbiBpc1Bsb3RDdXN0b21pemVkPXtpc1Bsb3RDdXN0b21pemVkLnRvU3RyaW5nKCl9IG9uQ2xpY2s9eygpID0+IFxyXG4gICAgICAgICAgICBzZXRPcGVuQ3VzdG9taXphdGlvbighb3BlbkN1c3RvbWl6YXRpb24pfT5DdXN0b21pemU8L1N0eWxlZEJ1dHRvbj5cclxuICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvV3JhcHBlcj5cclxuICAgIDxXcmFwcGVyIGRpcmVjdGlvbj1cInJvd1wiPlxyXG4gICAgICB7XHJcbiAgICAgICAgY2hlY2tCb3hlcy5tYXAoKGNoZWNrQm94KSA9PlxyXG4gICAgICAgICAgPEdyaWQgc3BhY2U9eycyJ30ga2V5PXtjaGVja0JveC5sYWJlbH0+XHJcbiAgICAgICAgICAgIDxDaGVja0JveCBvcHRpb249e2NoZWNrQm94fVxyXG4gICAgICAgICAgICAgIHNldFJlZmVyZW5jZT17c2V0UmVmZXJlbmNlfVxyXG4gICAgICAgICAgICAgIHJlZmVyZW5jZT17cmVmZXJlbmNlfVxyXG4gICAgICAgICAgICAvPjwvR3JpZD5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIDwvV3JhcHBlcj5cclxuICA8L1dyYXBwZXI+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plotsLocalOverlayPageComponents/options/reference.tsx\n");

/***/ })

})