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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, books[i].best_book.title));
  }

  return __jsx("div", {
    className: "jsx-2424648395",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2424648395",
    __self: _this
  }, "book.jsx-2424648395{height:200px;width:200px;background-color:red;border-radius:10px;}div.jsx-2424648395{background:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXhtZXRjYWxmZS9Eb2N1bWVudHMvc3JjL0Jvb2tMaXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFHd0IsQUFNRSxhQUxILEVBTWQsVUFMdUIscUJBQ0YsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9tYXhtZXRjYWxmZS9Eb2N1bWVudHMvc3JjL0Jvb2tMaXN0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5cbnZhciBwYXJzZXIgPSByZXF1aXJlKCdmYXN0LXhtbC1wYXJzZXInKTtcblxuZnVuY3Rpb24gZmV0Y2hEYXRhKHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZldGNoKHVybClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxuICAgICAgLnRoZW4oYm9keSA9PiByZXNvbHZlKGJvZHkpKVxuICB9KVxufVxuXG5jb25zdCBNYWluQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gIGxldCBib29rcyA9IHByb3BzLkdvb2RyZWFkc1Jlc3BvbnNlLnNlYXJjaC5yZXN1bHRzLndvcms7XG4gIGxldCBib29rRWxlbWVudHMgPSBbXTtcbiAgXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhib29rc1tpXSk7XG4gICAgYm9va0VsZW1lbnRzLnB1c2goXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9va1wiPlxuICAgICAgICB7Ym9va3NbaV0uYmVzdF9ib29rLnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBib29rIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAge2Jvb2tFbGVtZW50c31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5NYWluQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHhtbERhdGEgPSBhd2FpdCBmZXRjaERhdGEoXCJodHRwczovL3d3dy5nb29kcmVhZHMuY29tL3NlYXJjaC54bWw/a2V5PVA4OVJVZ0x2cElrM1ZWcXprNTRLY3cmcT1FbmRlciUyN3MrR2FtZVwiKTtcbiAgbGV0IGRhdGEgPSBwYXJzZXIucGFyc2UoeG1sRGF0YSk7XG5cbiAgcmV0dXJuIHBhcnNlci5wYXJzZSh4bWxEYXRhKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbXBvbmVudFxuIl19 */\n/*@ sourceURL=/Users/maxmetcalfe/Documents/src/BookList/pages/index.js */"), bookElements);
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
//# sourceMappingURL=index.js.f485c83136dbc9042493.hot-update.js.map