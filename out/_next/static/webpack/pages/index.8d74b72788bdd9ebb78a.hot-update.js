self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _home_deanvlue_dev_reactjs_nextjs_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/deanvlue/dev/reactjs/nextjs/test/pages/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_deanvlue_dev_reactjs_nextjs_test_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //import btnRegreso from '/public/img/button.png';
//import btnTitulo from '/public/img/button_yellow.png';



function MyVerticallyCenteredModal(props) {
  var _this = this;

  var archivos = [{
    id: 1,
    titulo: "Archivo 001",
    url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
  }, {
    id: 2,
    titulo: "Archivo 002",
    url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
  }, {
    id: 3,
    titulo: "Archivo 003",
    url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
  }, {
    id: 4,
    titulo: "Archivo 004",
    url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
  }, {
    id: 5,
    titulo: "Archivo 005",
    url: "https://laescuelaencasa.mx/data/fichas/pri_1_ef_s1_pri_0016.pdf"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, props), {}, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter modal-transparent",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Header, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {
          src: "/public/img/button_yellow.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Body, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup, {
        children: archivos.map(function (a) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup.Item, {
            className: "itemPizarra",
            as: "li",
            children: a.titulo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_3__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "btn-success",
        onClick: props.onHide,
        children: "Cerrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

_c = MyVerticallyCenteredModal;
function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row h-100",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "col-sm-12 my-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__.default, {
          onClick: function onClick() {
            return setModalShow(true);
          },
          className: "btn-image animatediv",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Image, {
            src: "/public/img/button.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MyVerticallyCenteredModal, {
      show: modalShow,
      onHide: function onHide() {
        return setModalShow(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 5
  }, this);
}
_c2 = App;

var _c, _c2;

$RefreshReg$(_c, "MyVerticallyCenteredModal");
$RefreshReg$(_c2, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTXlWZXJ0aWNhbGx5Q2VudGVyZWRNb2RhbCIsInByb3BzIiwiYXJjaGl2b3MiLCJpZCIsInRpdHVsbyIsInVybCIsIm1hcCIsImEiLCJvbkhpZGUiLCJBcHAiLCJzZXRNb2RhbFNob3ciLCJtb2RhbFNob3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBQ0E7O0FBR0EsU0FBU0EseUJBQVQsQ0FBbUNDLEtBQW5DLEVBQTBDO0FBQUE7O0FBRXhDLE1BQU1DLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE1BQUUsRUFBRSxDQUROO0FBRUVDLFVBQU0sRUFBRSxhQUZWO0FBR0VDLE9BQUcsRUFBRTtBQUhQLEdBRGUsRUFNZjtBQUNFRixNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUUsYUFGVjtBQUdFQyxPQUFHLEVBQUU7QUFIUCxHQU5lLEVBV2Y7QUFDRUYsTUFBRSxFQUFFLENBRE47QUFFRUMsVUFBTSxFQUFFLGFBRlY7QUFHRUMsT0FBRyxFQUFFO0FBSFAsR0FYZSxFQWdCZjtBQUNFRixNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUUsYUFGVjtBQUdFQyxPQUFHLEVBQUU7QUFIUCxHQWhCZSxFQXFCZjtBQUNFRixNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUUsYUFGVjtBQUdFQyxPQUFHLEVBQUU7QUFIUCxHQXJCZSxDQUFqQjtBQTZCQSxzQkFDRSw4REFBQywwREFBRCxrQ0FDTUosS0FETjtBQUVFLFFBQUksRUFBQyxJQUZQO0FBR0UsdUJBQWdCLGlEQUhsQjtBQUlFLFlBQVEsTUFKVjtBQUFBLDRCQU1FLDhEQUFDLGlFQUFEO0FBQUEsNkJBQ0UsOERBQUMsZ0VBQUQ7QUFBYSxVQUFFLEVBQUMsK0JBQWhCO0FBQUEsK0JBQ0UsOERBQUMsS0FBRDtBQUFPLGFBQUcsRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBV0UsOERBQUMsK0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxzREFBRDtBQUFBLGtCQUVJQyxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFBQyxDQUFDLEVBQUk7QUFDaEIsOEJBQVEsOERBQUMsMkRBQUQ7QUFBZ0IscUJBQVMsRUFBQyxhQUExQjtBQUF3QyxjQUFFLEVBQUMsSUFBM0M7QUFBQSxzQkFBaURBLENBQUMsQ0FBQ0g7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUjtBQUNELFNBRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBb0JFLDhEQUFDLGlFQUFEO0FBQUEsNkJBQ0UsOERBQUMsMkRBQUQ7QUFBUSxpQkFBUyxFQUFDLGFBQWxCO0FBQWdDLGVBQU8sRUFBRUgsS0FBSyxDQUFDTyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7O0tBekRRUix5QjtBQTJETSxTQUFTUyxHQUFULEdBQWU7QUFDNUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxXQUFqQjtBQUEyQyxtQkFBUyxFQUFDLHNCQUFyRDtBQUFBLGlDQUNFLDhEQUFDLEtBQUQ7QUFBTyxlQUFHLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFVRSw4REFBQyx5QkFBRDtBQUNFLFVBQUksRUFBRUMsU0FEUjtBQUVFLFlBQU0sRUFBRTtBQUFBLGVBQU1ELFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUE7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7TUFuQnVCRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkNzRiNzI3ODhiZGQ5ZWJiNzhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG4vL2ltcG9ydCBidG5SZWdyZXNvIGZyb20gJy9wdWJsaWMvaW1nL2J1dHRvbi5wbmcnO1xuLy9pbXBvcnQgYnRuVGl0dWxvIGZyb20gJy9wdWJsaWMvaW1nL2J1dHRvbl95ZWxsb3cucG5nJztcbmltcG9ydCB7IExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cblxuZnVuY3Rpb24gTXlWZXJ0aWNhbGx5Q2VudGVyZWRNb2RhbChwcm9wcykge1xuXG4gIGNvbnN0IGFyY2hpdm9zID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0dWxvOiBcIkFyY2hpdm8gMDAxXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9sYWVzY3VlbGFlbmNhc2EubXgvZGF0YS9maWNoYXMvcHJpXzFfZWZfczFfcHJpXzAwMTYucGRmXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0dWxvOiBcIkFyY2hpdm8gMDAyXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9sYWVzY3VlbGFlbmNhc2EubXgvZGF0YS9maWNoYXMvcHJpXzFfZWZfczFfcHJpXzAwMTYucGRmXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdGl0dWxvOiBcIkFyY2hpdm8gMDAzXCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9sYWVzY3VlbGFlbmNhc2EubXgvZGF0YS9maWNoYXMvcHJpXzFfZWZfczFfcHJpXzAwMTYucGRmXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdGl0dWxvOiBcIkFyY2hpdm8gMDA0XCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9sYWVzY3VlbGFlbmNhc2EubXgvZGF0YS9maWNoYXMvcHJpXzFfZWZfczFfcHJpXzAwMTYucGRmXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgdGl0dWxvOiBcIkFyY2hpdm8gMDA1XCIsXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9sYWVzY3VlbGFlbmNhc2EubXgvZGF0YS9maWNoYXMvcHJpXzFfZWZfczFfcHJpXzAwMTYucGRmXCJcbiAgICB9LFxuXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgc2l6ZT1cImxnXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyIG1vZGFsLXRyYW5zcGFyZW50XCJcbiAgICAgIGNlbnRlcmVkXG4gICAgPlxuICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvcHVibGljL2ltZy9idXR0b25feWVsbG93LnBuZycgLz5cbiAgICAgICAgPC9Nb2RhbC5UaXRsZT5cbiAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYXJjaGl2b3MubWFwKGEgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9XCJpdGVtUGl6YXJyYVwiIGFzPVwibGlcIj57YS50aXR1bG99PC9MaXN0R3JvdXAuSXRlbT4pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3Byb3BzLm9uSGlkZX0+Q2VycmFyPC9CdXR0b24+XG4gICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICA8L01vZGFsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGgtMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIG15LWF1dG9cIj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsU2hvdyh0cnVlKX0gY2xhc3NOYW1lPVwiYnRuLWltYWdlIGFuaW1hdGVkaXZcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9wdWJsaWMvaW1nL2J1dHRvbi5wbmcnIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPE15VmVydGljYWxseUNlbnRlcmVkTW9kYWxcbiAgICAgICAgc2hvdz17bW9kYWxTaG93fVxuICAgICAgICBvbkhpZGU9eygpID0+IHNldE1vZGFsU2hvdyhmYWxzZSl9XG4gICAgICAvPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==