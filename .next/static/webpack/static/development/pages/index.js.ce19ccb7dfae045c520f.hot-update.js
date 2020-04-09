webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/Users/maxmetcalfe/Documents/src/BookList/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var parser = __webpack_require__(/*! fast-xml-parser */ "./node_modules/fast-xml-parser/src/parser.js");

function fetchData(url) {
  return new Promise(function (resolve, reject) {
    node_fetch__WEBPACK_IMPORTED_MODULE_3___default()(url).then(function (res) {
      return res.text();
    }).then(function (body) {
      return resolve(body);
    });
  });
}

var MainComponent = function MainComponent(props) {
  var books = props.GoodreadsResponse.search.results.work;
  var bookElements = [];

  for (var i = 0; i < books.length; i++) {
    console.log(books[i]);
    bookElements.push(__jsx("div", {
      "class": "book",
      className: "jsx-185459193",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "185459193",
      __self: _this
    }, "body.jsx-185459193{height:200px;width:200px;background-color:red;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhtZXRjYWxmZS9Eb2N1bWVudHMvc3JjL0Jvb2tMaXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHMEIsYUFDRCxZQUNTLHFCQUNGLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvbWF4bWV0Y2FsZmUvRG9jdW1lbnRzL3NyYy9Cb29rTGlzdC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZmFzdC14bWwtcGFyc2VyJyk7XG5cbmZ1bmN0aW9uIGZldGNoRGF0YSh1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcbiAgICAgIC50aGVuKGJvZHkgPT4gcmVzb2x2ZShib2R5KSlcbiAgfSlcbn1cblxuY29uc3QgTWFpbkNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICBsZXQgYm9va3MgPSBwcm9wcy5Hb29kcmVhZHNSZXNwb25zZS5zZWFyY2gucmVzdWx0cy53b3JrO1xuICBsZXQgYm9va0VsZW1lbnRzID0gW107XG4gIFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc29sZS5sb2coYm9va3NbaV0pO1xuICAgIGJvb2tFbGVtZW50cy5wdXNoKFxuICAgICAgPGRpdiBjbGFzcz1cImJvb2tcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtib29rc1tpXS5iZXN0X2Jvb2sudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2Jvb2tFbGVtZW50c31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5NYWluQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHhtbERhdGEgPSBhd2FpdCBmZXRjaERhdGEoXCJodHRwczovL3d3dy5nb29kcmVhZHMuY29tL3NlYXJjaC54bWw/a2V5PVA4OVJVZ0x2cElrM1ZWcXprNTRLY3cmcT1FbmRlciUyN3MrR2FtZVwiKTtcbiAgbGV0IGRhdGEgPSBwYXJzZXIucGFyc2UoeG1sRGF0YSk7XG5cbiAgcmV0dXJuIHBhcnNlci5wYXJzZSh4bWxEYXRhKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbXBvbmVudFxuIl19 */\n/*@ sourceURL=/Users/maxmetcalfe/Documents/src/BookList/pages/index.js */"), books[i].best_book.title));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, bookElements);
};

MainComponent.getInitialProps = function _callee() {
  var xmlData, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetchData("https://www.goodreads.com/search.xml?key=P89RUgLvpIk3VVqzk54Kcw&q=Ender%27s+Game"));

        case 2:
          xmlData = _context.sent;
          data = parser.parse(xmlData);
          return _context.abrupt("return", parser.parse(xmlData));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (MainComponent);

/***/ })

})
//# sourceMappingURL=index.js.ce19ccb7dfae045c520f.hot-update.js.map