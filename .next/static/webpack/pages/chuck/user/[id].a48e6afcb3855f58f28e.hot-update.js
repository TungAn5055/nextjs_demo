self["webpackHotUpdate_N_E"]("pages/chuck/user/[id]",{

/***/ "./pages/chuck/user/[id].tsx":
/*!***********************************!*\
  !*** ./pages/chuck/user/[id].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Show; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Code\\nextjs_demo\\pages\\chuck\\user\\[id].tsx",
    _s = $RefreshSig$();


 // return all static path can access to params

var __N_SSG = true;
function Show(_ref) {
  _s();

  var user = _ref.user;
  var router = useRouter(); // Neu trang chua tao ra, isFallback cua router === true
  // Va trang tam thoi sau day se duoc render

  if (router.isFallback) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spinner, {
      animation: "border",
      role: "status",
      variant: "dark",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "sr-only",
        children: "LOADING ...."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Data detail:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: user.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: user.phone
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: user.website
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, this);
}

_s(Show, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", true);

_c = Show;

var _c;

$RefreshReg$(_c, "Show");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2h1Y2svdXNlci9baWRdLnRzeCJdLCJuYW1lcyI6WyJTaG93IiwidXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsIndlYnNpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQU1BOzs7QUF3RGUsU0FBU0EsSUFBVCxPQUFzQjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLFNBQVMsRUFBeEIsQ0FEaUMsQ0FHcEM7QUFDQTs7QUFFQSxNQUFJRCxNQUFNLENBQUNFLFVBQVgsRUFBdUI7QUFDdEIsd0JBQ0MsOERBQUMsT0FBRDtBQUNDLGVBQVMsRUFBQyxRQURYO0FBRUMsVUFBSSxFQUFDLFFBRk47QUFHQyxhQUFPLEVBQUMsTUFIVDtBQUFBLDZCQU1DO0FBQU0saUJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQVVBOztBQUVFLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQUtILElBQUksQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLGdCQUFLSixJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUk7QUFBQSxnQkFBS0wsSUFBSSxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJO0FBQUEsZ0JBQUtOLElBQUksQ0FBQ087QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7R0E3QnVCUixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NodWNrL3VzZXIvW2lkXS5hNDhlNmFmY2IzODU1ZjU4ZjI4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi8uLi9saWIvcGF0aCdcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gcmV0dXJuIGFsbCBzdGF0aWMgcGF0aCBjYW4gYWNjZXNzIHRvIHBhcmFtc1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4geyAgICAgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnM/X2xpbWl0PTMnKTtcclxuICAgICAgICBjb25zdCBwYXRocyA9IHVzZXJzLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygncGF0aHMnLCBwYXRocylcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXRoczpwYXRocyxcclxuICAgICAgICAgICAgZmFsbGJhY2s6IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGF0aHM6W10sXHJcbiAgICAgICAgICAgIGZhbGxiYWNrOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgcGF0aHM6W1xyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZDogJzEnXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlkOiAnMidcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIC8vICAgICBdLFxyXG4gICAgLy8gICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICAvLyAgIH1cclxuICB9XHJcblxyXG4vLyBnZXQgZGF0YSBmb3JtIHBhcmFtIGdldCBkYXRhXHJcbi8vIGZvciBwYWdlIGFkZCB0byBwcm9wc1xyXG4vLyB3aGVyZSBjYWxsIGRhdGEgYXBpIFxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMoeyBwYXJhbXMgfSkgPT4gIHtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJyArIHBhcmFtcz8uaWQpO1xyXG4gICAgY29uc29sZS5sb2coJ2FubicsIHBhcmFtcylcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdXNlcjogdXNlcnM/LmRhdGEsXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvdyh7dXNlcn0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG5cdC8vIE5ldSB0cmFuZyBjaHVhIHRhbyByYSwgaXNGYWxsYmFjayBjdWEgcm91dGVyID09PSB0cnVlXHJcblx0Ly8gVmEgdHJhbmcgdGFtIHRob2kgc2F1IGRheSBzZSBkdW9jIHJlbmRlclxyXG5cclxuXHRpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxTcGlubmVyXHJcblx0XHRcdFx0YW5pbWF0aW9uPSdib3JkZXInXHJcblx0XHRcdFx0cm9sZT0nc3RhdHVzJ1xyXG5cdFx0XHRcdHZhcmlhbnQ9J2RhcmsnXHJcblx0XHRcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+TE9BRElORyAuLi4uPC9zcGFuPlxyXG5cdFx0XHQ8L1NwaW5uZXI+XHJcblx0XHQpXHJcblx0fVxyXG4gICAgXHJcbiAgICByZXR1cm4gKCAgIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMj5EYXRhIGRldGFpbDo8L2gyPlxyXG4gICAgICAgICAgICA8aDM+e3VzZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8aDQ+e3VzZXIuZW1haWx9PC9oND5cclxuICAgICAgICAgICAgPGg0Pnt1c2VyLnBob25lfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoND57dXNlci53ZWJzaXRlfTwvaDQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiBcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==