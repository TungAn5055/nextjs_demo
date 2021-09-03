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
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Code\\nextjs_demo\\pages\\chuck\\user\\[id].tsx",
    _s = $RefreshSig$();



 // return all static path can access to params

var __N_SSG = true;
function Show(_ref) {
  _s();

  var user = _ref.user;
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // Neu trang chua tao ra, isFallback cua router === true
  // Va trang tam thoi sau day se duoc render

  if (router.isFallback) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "sr-only",
      children: "LOADING ...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Data detail:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: user.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: user.email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: user.phone
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      children: user.website
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, this);
}

_s(Show, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2h1Y2svdXNlci9baWRdLnRzeCJdLCJuYW1lcyI6WyJTaG93IiwidXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsIndlYnNpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7Q0FHQTs7O0FBd0RlLFNBQVNBLElBQVQsT0FBc0I7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDakMsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QixDQURpQyxDQUdwQztBQUNBOztBQUVBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QjtBQUN0Qix3QkFDQztBQUFNLGVBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBR0E7O0FBRUUsc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSxnQkFBS0gsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUEsZ0JBQUtKLElBQUksQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLGdCQUFLTCxJQUFJLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0k7QUFBQSxnQkFBS04sSUFBSSxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztHQXRCdUJSLEk7VUFDTEcsOEQ7OztLQURLSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NodWNrL3VzZXIvW2lkXS5iNWI3ODU2MDY4YTc4ODUxMjgwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi8uLi9saWIvcGF0aCdcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcblxyXG4vLyByZXR1cm4gYWxsIHN0YXRpYyBwYXRoIGNhbiBhY2Nlc3MgdG8gcGFyYW1zXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7ICAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycz9fbGltaXQ9MycpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhzID0gdXNlcnMuZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXRocycsIHBhdGhzKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhdGhzOnBhdGhzLFxyXG4gICAgICAgICAgICBmYWxsYmFjazogdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXRoczpbXSxcclxuICAgICAgICAgICAgZmFsbGJhY2s6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vICAgcmV0dXJuIHtcclxuICAgIC8vICAgICBwYXRoczpbXHJcbiAgICAvLyAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlkOiAnMSdcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWQ6ICcyJ1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIF0sXHJcbiAgICAvLyAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIC8vICAgfVxyXG4gIH1cclxuXHJcbi8vIGdldCBkYXRhIGZvcm0gcGFyYW0gZ2V0IGRhdGFcclxuLy8gZm9yIHBhZ2UgYWRkIHRvIHByb3BzXHJcbi8vIHdoZXJlIGNhbGwgZGF0YSBhcGkgXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyh7IHBhcmFtcyB9KSA9PiAge1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8nICsgcGFyYW1zPy5pZCk7XHJcbiAgICBjb25zb2xlLmxvZygnYW5uJywgcGFyYW1zKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB1c2VyOiB1c2Vycz8uZGF0YSxcclxuICAgICAgICByZXZhbGlkYXRlOiAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93KHt1c2VyfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcblx0Ly8gTmV1IHRyYW5nIGNodWEgdGFvIHJhLCBpc0ZhbGxiYWNrIGN1YSByb3V0ZXIgPT09IHRydWVcclxuXHQvLyBWYSB0cmFuZyB0YW0gdGhvaSBzYXUgZGF5IHNlIGR1b2MgcmVuZGVyXHJcblxyXG5cdGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5MT0FESU5HIC4uLi48L3NwYW4+XHJcblx0XHQpXHJcblx0fVxyXG4gICAgXHJcbiAgICByZXR1cm4gKCAgIFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMj5EYXRhIGRldGFpbDo8L2gyPlxyXG4gICAgICAgICAgICA8aDM+e3VzZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8aDQ+e3VzZXIuZW1haWx9PC9oND5cclxuICAgICAgICAgICAgPGg0Pnt1c2VyLnBob25lfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoND57dXNlci53ZWJzaXRlfTwvaDQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiBcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==