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
      className: spinnerStyles.spinnerLg,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2h1Y2svdXNlci9baWRdLnRzeCJdLCJuYW1lcyI6WyJTaG93IiwidXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzcGlubmVyU3R5bGVzIiwic3Bpbm5lckxnIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3ZWJzaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FNQTs7O0FBd0RlLFNBQVNBLElBQVQsT0FBc0I7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDakMsTUFBTUMsTUFBTSxHQUFHQyxTQUFTLEVBQXhCLENBRGlDLENBR3BDO0FBQ0E7O0FBRUEsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCO0FBQ3RCLHdCQUNDLDhEQUFDLE9BQUQ7QUFDQyxlQUFTLEVBQUMsUUFEWDtBQUVDLFVBQUksRUFBQyxRQUZOO0FBR0MsYUFBTyxFQUFDLE1BSFQ7QUFJQyxlQUFTLEVBQUVDLGFBQWEsQ0FBQ0MsU0FKMUI7QUFBQSw2QkFNQztBQUFNLGlCQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFVQTs7QUFFRSxzQkFDSSw4REFBQyx1REFBRDtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFLTCxJQUFJLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFBS04sSUFBSSxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsZ0JBQUtQLElBQUksQ0FBQ1E7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFBLGdCQUFLUixJQUFJLENBQUNTO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBN0J1QlYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaHVjay91c2VyL1tpZF0uYTIzNTAxYTJiOTBjZGY3ZTljODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IGdldEFsbFBvc3RJZHMsIGdldFBvc3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vbGliL3BhdGgnXHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocywgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIHJldHVybiBhbGwgc3RhdGljIHBhdGggY2FuIGFjY2VzcyB0byBwYXJhbXNcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHsgICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzP19saW1pdD0zJyk7XHJcbiAgICAgICAgY29uc3QgcGF0aHMgPSB1c2Vycy5kYXRhLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BhdGhzJywgcGF0aHMpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGF0aHM6cGF0aHMsXHJcbiAgICAgICAgICAgIGZhbGxiYWNrOiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhdGhzOltdLFxyXG4gICAgICAgICAgICBmYWxsYmFjazogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgIHBhdGhzOltcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWQ6ICcxJ1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZDogJzInXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgLy8gICB9XHJcbiAgfVxyXG5cclxuLy8gZ2V0IGRhdGEgZm9ybSBwYXJhbSBnZXQgZGF0YVxyXG4vLyBmb3IgcGFnZSBhZGQgdG8gcHJvcHNcclxuLy8gd2hlcmUgY2FsbCBkYXRhIGFwaSBcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jKHsgcGFyYW1zIH0pID0+ICB7XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLycgKyBwYXJhbXM/LmlkKTtcclxuICAgIGNvbnNvbGUubG9nKCdhbm4nLCBwYXJhbXMpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHVzZXI6IHVzZXJzPy5kYXRhLFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3coe3VzZXJ9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuXHQvLyBOZXUgdHJhbmcgY2h1YSB0YW8gcmEsIGlzRmFsbGJhY2sgY3VhIHJvdXRlciA9PT0gdHJ1ZVxyXG5cdC8vIFZhIHRyYW5nIHRhbSB0aG9pIHNhdSBkYXkgc2UgZHVvYyByZW5kZXJcclxuXHJcblx0aWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8U3Bpbm5lclxyXG5cdFx0XHRcdGFuaW1hdGlvbj0nYm9yZGVyJ1xyXG5cdFx0XHRcdHJvbGU9J3N0YXR1cydcclxuXHRcdFx0XHR2YXJpYW50PSdkYXJrJ1xyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3Bpbm5lclN0eWxlcy5zcGlubmVyTGd9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPkxPQURJTkcgLi4uLjwvc3Bhbj5cclxuXHRcdFx0PC9TcGlubmVyPlxyXG5cdFx0KVxyXG5cdH1cclxuICAgIFxyXG4gICAgcmV0dXJuICggICBcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDI+RGF0YSBkZXRhaWw6PC9oMj5cclxuICAgICAgICAgICAgPGgzPnt1c2VyLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPGg0Pnt1c2VyLmVtYWlsfTwvaDQ+XHJcbiAgICAgICAgICAgIDxoND57dXNlci5waG9uZX08L2g0PlxyXG4gICAgICAgICAgICA8aDQ+e3VzZXIud2Vic2l0ZX08L2g0PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=