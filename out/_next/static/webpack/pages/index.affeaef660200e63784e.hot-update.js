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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/deanvlue/dev/reactjs/nextjs/test/pages/index.js",
    _s = $RefreshSig$();

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, props), {}, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter modal-transparent",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Header, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Title, {
        id: "contained-modal-title-vcenter text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: "img/button_yellow.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Body, {
      children: archivos.map(function (a) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
          size: "lg",
          className: "itemPizarra",
          block: true,
          children: [" ", a.titulo, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_5__.default.Footer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
        className: "btn-success",
        onClick: props.onHide,
        children: "Cerrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_c = MyVerticallyCenteredModal;
function App() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      modalShow = _useState[0],
      setModalShow = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row h-100",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "col-sm-12 my-auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
          onClick: function onClick() {
            return setModalShow(true);
          },
          className: "btn-image animatediv",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "/img/button.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MyVerticallyCenteredModal, {
      show: modalShow,
      onHide: function onHide() {
        return setModalShow(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

_s(App, "xuPPltV/3J92+XaNotdpXxySp+I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTXlWZXJ0aWNhbGx5Q2VudGVyZWRNb2RhbCIsInByb3BzIiwiYXJjaGl2b3MiLCJpZCIsInRpdHVsbyIsInVybCIsIm1hcCIsImEiLCJvbkhpZGUiLCJBcHAiLCJ1c2VTdGF0ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUlBO0FBQ0E7O0FBQ0E7QUFFQTs7QUFHQSxTQUFTQSx5QkFBVCxDQUFtQ0MsS0FBbkMsRUFBMEM7QUFBQTs7QUFFeEMsTUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsVUFBTSxFQUFFLGFBRlY7QUFHRUMsT0FBRyxFQUFFO0FBSFAsR0FEZSxFQU1mO0FBQ0VGLE1BQUUsRUFBRSxDQUROO0FBRUVDLFVBQU0sRUFBRSxhQUZWO0FBR0VDLE9BQUcsRUFBRTtBQUhQLEdBTmUsRUFXZjtBQUNFRixNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUUsYUFGVjtBQUdFQyxPQUFHLEVBQUU7QUFIUCxHQVhlLEVBZ0JmO0FBQ0VGLE1BQUUsRUFBRSxDQUROO0FBRUVDLFVBQU0sRUFBRSxhQUZWO0FBR0VDLE9BQUcsRUFBRTtBQUhQLEdBaEJlLEVBcUJmO0FBQ0VGLE1BQUUsRUFBRSxDQUROO0FBRUVDLFVBQU0sRUFBRSxhQUZWO0FBR0VDLE9BQUcsRUFBRTtBQUhQLEdBckJlLENBQWpCO0FBNkJBLHNCQUNFLDhEQUFDLDBEQUFELGtDQUNNSixLQUROO0FBRUUsUUFBSSxFQUFDLElBRlA7QUFHRSx1QkFBZ0IsaURBSGxCO0FBSUUsWUFBUSxNQUpWO0FBQUEsNEJBTUUsOERBQUMsaUVBQUQ7QUFBQSw2QkFDRSw4REFBQyxnRUFBRDtBQUFhLFVBQUUsRUFBQywyQ0FBaEI7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBV0UsOERBQUMsK0RBQUQ7QUFBQSxnQkFHSUMsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQUMsQ0FBQyxFQUFJO0FBQ2hCLDRCQUFRLDhEQUFDLDJEQUFEO0FBQVEsY0FBSSxFQUFDLElBQWI7QUFBa0IsbUJBQVMsRUFBQyxhQUE1QjtBQUEwQyxlQUFLLE1BQS9DO0FBQUEsMEJBQWtEQSxDQUFDLENBQUNILE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQUVELE9BSEQ7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFxQkUsOERBQUMsaUVBQUQ7QUFBQSw2QkFDRSw4REFBQywyREFBRDtBQUFRLGlCQUFTLEVBQUMsYUFBbEI7QUFBZ0MsZUFBTyxFQUFFSCxLQUFLLENBQUNPLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7S0ExRFFSLHlCO0FBNERNLFNBQVNTLEdBQVQsR0FBZTtBQUFBOztBQUFBLGtCQUNNQywrQ0FBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBLE1BQ3JCQyxTQURxQjtBQUFBLE1BQ1ZDLFlBRFU7O0FBRTVCLHNCQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsK0JBQ0UsOERBQUMsMkRBQUQ7QUFBUSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1BLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsV0FBakI7QUFBMkMsbUJBQVMsRUFBQyxzQkFBckQ7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVVFLDhEQUFDLHlCQUFEO0FBQ0UsVUFBSSxFQUFFRCxTQURSO0FBRUUsWUFBTSxFQUFFO0FBQUEsZUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0FwQnVCSCxHOztNQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFmZmVhZWY2NjAyMDBlNjM3ODRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcblxuXG4vL2ltcG9ydCBidG5SZWdyZXNvIGZyb20gJy9wdWJsaWMvaW1nL2J1dHRvbi5wbmcnO1xuLy9pbXBvcnQgYnRuVGl0dWxvIGZyb20gJy9wdWJsaWMvaW1nL2J1dHRvbl95ZWxsb3cucG5nJztcbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBMaXN0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuXG5mdW5jdGlvbiBNeVZlcnRpY2FsbHlDZW50ZXJlZE1vZGFsKHByb3BzKSB7XG5cbiAgY29uc3QgYXJjaGl2b3MgPSBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXR1bG86IFwiQXJjaGl2byAwMDFcIixcbiAgICAgIHVybDogXCJodHRwczovL2xhZXNjdWVsYWVuY2FzYS5teC9kYXRhL2ZpY2hhcy9wcmlfMV9lZl9zMV9wcmlfMDAxNi5wZGZcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXR1bG86IFwiQXJjaGl2byAwMDJcIixcbiAgICAgIHVybDogXCJodHRwczovL2xhZXNjdWVsYWVuY2FzYS5teC9kYXRhL2ZpY2hhcy9wcmlfMV9lZl9zMV9wcmlfMDAxNi5wZGZcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMsXG4gICAgICB0aXR1bG86IFwiQXJjaGl2byAwMDNcIixcbiAgICAgIHVybDogXCJodHRwczovL2xhZXNjdWVsYWVuY2FzYS5teC9kYXRhL2ZpY2hhcy9wcmlfMV9lZl9zMV9wcmlfMDAxNi5wZGZcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICB0aXR1bG86IFwiQXJjaGl2byAwMDRcIixcbiAgICAgIHVybDogXCJodHRwczovL2xhZXNjdWVsYWVuY2FzYS5teC9kYXRhL2ZpY2hhcy9wcmlfMV9lZl9zMV9wcmlfMDAxNi5wZGZcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICB0aXR1bG86IFwiQXJjaGl2byAwMDVcIixcbiAgICAgIHVybDogXCJodHRwczovL2xhZXNjdWVsYWVuY2FzYS5teC9kYXRhL2ZpY2hhcy9wcmlfMV9lZl9zMV9wcmlfMDAxNi5wZGZcIlxuICAgIH0sXG5cbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBzaXplPVwibGdcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXIgbW9kYWwtdHJhbnNwYXJlbnRcIlxuICAgICAgY2VudGVyZWRcbiAgICA+XG4gICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPSdpbWcvYnV0dG9uX3llbGxvdy5wbmcnIC8+XG4gICAgICAgIDwvTW9kYWwuVGl0bGU+XG4gICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgIDxNb2RhbC5Cb2R5PlxuXG4gICAgICAgIHtcbiAgICAgICAgICBhcmNoaXZvcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKDxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiaXRlbVBpemFycmFcIiBibG9jaz4ge2EudGl0dWxvfSA8L0J1dHRvbj4pXG5cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXtwcm9wcy5vbkhpZGV9PkNlcnJhcjwvQnV0dG9uPlxuICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBoLTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBteS1hdXRvXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9IGNsYXNzTmFtZT1cImJ0bi1pbWFnZSBhbmltYXRlZGl2XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9idXR0b24ucG5nJyAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxNeVZlcnRpY2FsbHlDZW50ZXJlZE1vZGFsXG4gICAgICAgIHNob3c9e21vZGFsU2hvd31cbiAgICAgICAgb25IaWRlPXsoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpfVxuICAgICAgLz5cblxuICAgIDwvZGl2PlxuICApXG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==