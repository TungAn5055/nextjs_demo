(function() {
var exports = {};
exports.id = "pages/chuck/random";
exports.ids = ["pages/chuck/random"];
exports.modules = {

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/path */ "./lib/path.js");

var _jsxFileName = "D:\\Code\\nextjs_demo\\components\\layout.js";


function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "check!!!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
} // return an array of possible values for id

async function getStaticPaths() {
  const paths = (0,_lib_path__WEBPACK_IMPORTED_MODULE_1__.getAllPostIds)();
  return {
    paths,
    fallback: false
  };
} //fetch necessary data for the post with id

async function getStaticProps({
  params
}) {}

/***/ }),

/***/ "./lib/path.js":
/*!*********************!*\
  !*** ./lib/path.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllPostIds": function() { return /* binding */ getAllPostIds; },
/* harmony export */   "getListPost": function() { return /* binding */ getListPost; },
/* harmony export */   "getPostData": function() { return /* binding */ getPostData; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ "remark");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ "remark-html");
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'post');
function getAllPostIds() {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        ids: fileName.replace(/\.md$/, '')
      }
    };
  });
}
async function getListPost() {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
  return fileNames.map(file => {
    var _matterResult$data, _matterResult$data2;

    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, file);
    const content = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath);
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(content);
    return {
      id: file.replace(/\.md$/, ''),
      title: matterResult === null || matterResult === void 0 ? void 0 : (_matterResult$data = matterResult.data) === null || _matterResult$data === void 0 ? void 0 : _matterResult$data.title,
      date: matterResult === null || matterResult === void 0 ? void 0 : (_matterResult$data2 = matterResult.data) === null || _matterResult$data2 === void 0 ? void 0 : _matterResult$data2.date
    };
  });
}
async function getPostData(ids) {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${ids}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Use remark to convert markdown into HTML string

  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use((remark_html__WEBPACK_IMPORTED_MODULE_4___default())).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Combine the data with the id

  return _objectSpread({
    ids,
    contentHtml
  }, matterResult.data);
}

/***/ }),

/***/ "./pages/chuck/random.tsx":
/*!********************************!*\
  !*** ./pages/chuck/random.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "default": function() { return /* binding */ Random; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Code\\nextjs_demo\\pages\\chuck\\random.tsx";



const getServerSideProps = async () => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://api.chucknorris.io/jokes/random');
    console.log('annn', data);
    return {
      props: {
        data: data
      }
    };
  } catch (e) {
    console.log(e);
  }
};
function Random({
  data
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: "form-inline my-2 my-lg-0 ml-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        className: "form-control mr-sm-2",
        type: "search",
        placeholder: "Search",
        "aria-label": "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: "btn btn-outline-success my-2 my-sm-0",
        type: "submit",
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: data === null || data === void 0 ? void 0 : data.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: data === null || data === void 0 ? void 0 : data.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: data === null || data === void 0 ? void 0 : data.icon_url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "layout_container__2t4v2"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/chuck/random.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL2xpYi9wYXRoLmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9wYWdlcy9jaHVjay9yYW5kb20udHN4Iiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicmVtYXJrXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlbWFyay1odG1sXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZ2V0QWxsUG9zdElkcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwb3N0c0RpcmVjdG9yeSIsInBhdGgiLCJwcm9jZXNzIiwiY3dkIiwiZmlsZU5hbWVzIiwiZnMiLCJtYXAiLCJmaWxlTmFtZSIsImlkcyIsInJlcGxhY2UiLCJnZXRMaXN0UG9zdCIsImZpbGUiLCJmdWxsUGF0aCIsImNvbnRlbnQiLCJtYXR0ZXJSZXN1bHQiLCJtYXR0ZXIiLCJpZCIsInRpdGxlIiwiZGF0YSIsImRhdGUiLCJnZXRQb3N0RGF0YSIsImZpbGVDb250ZW50cyIsInByb2Nlc3NlZENvbnRlbnQiLCJyZW1hcmsiLCJ1c2UiLCJodG1sIiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyIsImdldFNlcnZlclNpZGVQcm9wcyIsImF4aW9zIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiZSIsIlJhbmRvbSIsInZhbHVlIiwiaWNvbl91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUM7QUFBRixDQUFoQixFQUE4QjtBQUN6QyxzQkFBTztBQUFLLGFBQVMsRUFBRUMscUVBQWhCO0FBQUEsNEJBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxFQUVKRCxRQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0QsQyxDQUVIOztBQUNPLGVBQWVFLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsS0FBSyxHQUFHQyx3REFBYSxFQUEzQjtBQUNBLFNBQU87QUFDTEQsU0FESztBQUVMRSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQyxDQUVEOztBQUNPLGVBQWVDLGNBQWYsQ0FBOEI7QUFBQ0M7QUFBRCxDQUE5QixFQUF3QyxDQUU5QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLGNBQWMsR0FBR0MsZ0RBQUEsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsQ0FBdkI7QUFFTyxTQUFTUCxhQUFULEdBQXlCO0FBQzVCLFFBQU1RLFNBQVMsR0FBR0MscURBQUEsQ0FBZUwsY0FBZixDQUFsQjtBQUNBLFNBQU9JLFNBQVMsQ0FBQ0UsR0FBVixDQUFjQyxRQUFRLElBQUk7QUFDN0IsV0FBTztBQUNMUixZQUFNLEVBQUU7QUFDTlMsV0FBRyxFQUFFRCxRQUFRLENBQUNFLE9BQVQsQ0FBaUIsT0FB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QTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQVdJO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0EsSUFBTCxhQUFLQSxJQUFMLHVCQUFLQSxJQUFJLENBQUVGO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxrQkFBS0UsSUFBTCxhQUFLQSxJQUFMLHVCQUFLQSxJQUFJLENBQUVpQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUEsa0JBQUtqQixJQUFMLGFBQUtBLElBQUwsdUJBQUtBLElBQUksQ0FBRWtCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0JILEM7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLG1DOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2NodWNrL3JhbmRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcyB9IGZyb20gJy4uL2xpYi9wYXRoJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxPmNoZWNrISEhPC9oMT5cclxuICAgICAge2NoaWxkcmVufTwvZGl2PlxyXG4gIH1cclxuXHJcbi8vIHJldHVybiBhbiBhcnJheSBvZiBwb3NzaWJsZSB2YWx1ZXMgZm9yIGlkXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuLy9mZXRjaCBuZWNlc3NhcnkgZGF0YSBmb3IgdGhlIHBvc3Qgd2l0aCBpZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuXHJcbn0iLCJpbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXHJcbmltcG9ydCByZW1hcmsgZnJvbSAncmVtYXJrJ1xyXG5pbXBvcnQgaHRtbCBmcm9tICdyZW1hcmstaHRtbCdcclxuY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Bvc3QnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBvc3RJZHMoKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSlcclxuICAgIHJldHVybiBmaWxlTmFtZXMubWFwKGZpbGVOYW1lID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIGlkczogZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExpc3RQb3N0KCkge1xyXG4gIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcclxuICByZXR1cm4gZmlsZU5hbWVzLm1hcChmaWxlID0+IHtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKHBvc3RzRGlyZWN0b3J5LCBmaWxlKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgpXHJcbiAgICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoY29udGVudClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBmaWxlLnJlcGxhY2UoL1xcLm1kJC8sICcnKSxcclxuICAgICAgdGl0bGU6IG1hdHRlclJlc3VsdD8uZGF0YT8udGl0bGUsXHJcbiAgICAgIGRhdGU6IG1hdHRlclJlc3VsdD8uZGF0YT8uZGF0ZVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGEoaWRzKSB7XHJcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGAke2lkc30ubWRgKVxyXG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKVxyXG5cclxuICAvLyBVc2UgZ3JheS1tYXR0ZXIgdG8gcGFyc2UgdGhlIHBvc3QgbWV0YWRhdGEgc2VjdGlvblxyXG4gIGNvbnN0IG1hdHRlclJlc3VsdCA9IG1hdHRlcihmaWxlQ29udGVudHMpXHJcblxyXG4vLyBVc2UgcmVtYXJrIHRvIGNvbnZlcnQgbWFya2Rvd24gaW50byBIVE1MIHN0cmluZ1xyXG5jb25zdCBwcm9jZXNzZWRDb250ZW50ID0gYXdhaXQgcmVtYXJrKClcclxuLnVzZShodG1sKVxyXG4ucHJvY2VzcyhtYXR0ZXJSZXN1bHQuY29udGVudClcclxuY29uc3QgY29udGVudEh0bWwgPSBwcm9jZXNzZWRDb250ZW50LnRvU3RyaW5nKClcclxuXHJcbiAgLy8gQ29tYmluZSB0aGUgZGF0YSB3aXRoIHRoZSBpZFxyXG4gIHJldHVybiB7XHJcbiAgICBpZHMsXHJcbiAgICBjb250ZW50SHRtbCxcclxuICAgIC4uLm1hdHRlclJlc3VsdC5kYXRhXHJcbiAgfVxyXG59IiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5jaHVja25vcnJpcy5pby9qb2tlcy9yYW5kb20nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYW5ubicsIGRhdGEpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5kb20oe2RhdGF9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMCBtbC01XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBhcmlhLWxhYmVsPVwiU2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbXktMiBteS1zbS0wXCIgdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxoMz57ZGF0YT8uaWR9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoND57ZGF0YT8udmFsdWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxoND57ZGF0YT8uaWNvbl91cmx9PC9oND5cclxuICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL2NodWNrL3VzZXIvJHtpdGVtcz8uaWR9YH0+c2hvdyBtb3JlPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibGF5b3V0X2NvbnRhaW5lcl9fMnQ0djJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFyay1odG1sXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9