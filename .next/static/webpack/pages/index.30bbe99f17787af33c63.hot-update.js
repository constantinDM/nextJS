webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _meetupId___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./[meetupId] */ "./pages/[meetupId]/index.js");

var _jsxFileName = "C:\\Users\\Constantin\\Desktop\\React-notes\\ReactApp\\325-06-onwards-to-a-bigger-project-starting-project\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";




var DUMMY_MEETUPS = [{
  id: "m1",
  title: "A first Meetup ",
  image: "https://www.planetware.com/wpimages/2020/07/new-york-best-cities-new-york-city.jpg",
  address: "Some address 5, 12345 Some City",
  description: "THis is a first meetup"
}, {
  id: "m2",
  title: "A second Meetup ",
  image: "https://www.planetware.com/wpimages/2020/07/new-york-best-cities-new-york-city.jpg",
  address: "Some address 10, 12345 Some City",
  description: "THis is a second meetup"
}, {
  id: "m3",
  title: "A third Meetup ",
  image: "https://www.planetware.com/wpimages/2020/07/new-york-best-cities-new-york-city.jpg",
  address: "Some address 15, 12345 Some City",
  description: "THis is a third meetup"
}, {
  id: "m4",
  title: "A forth Meetup ",
  image: "https://www.planetware.com/wpimages/2020/07/new-york-best-cities-new-york-city.jpg",
  address: "Some address 20, 12345 Some City",
  description: "THis is a forth meetup"
}];

function HomePage(props) {
  return;

  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 3
  }, this);
} // export async function getServerSideProps(context) {
//   // all code here will run on server, never on client
//   const req = context.req;
//   const rep = context.rep;
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }; // no need to revalidate because this function works for every incoming request
// }


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCxvRkFKSjtBQUtFQyxTQUFPLEVBQUUsaUNBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGtCQUZUO0FBR0VDLE9BQUssRUFDSCxvRkFKSjtBQUtFQyxTQUFPLEVBQUUsa0NBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FUb0IsRUFpQnBCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxpQkFGVDtBQUdFQyxPQUFLLEVBQ0gsb0ZBSko7QUFLRUMsU0FBTyxFQUFFLGtDQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBakJvQixFQXlCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCxvRkFKSjtBQUtFQyxTQUFPLEVBQUUsa0NBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0F6Qm9CLENBQXRCOztBQW1DQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2Qjs7QUFDQTtBQUFBLHVFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FsQlNGLFE7O0FBMENNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMGJiZTk5ZjE3Nzg3YWYzM2M2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVldHVwRGV0YWlscyBmcm9tIFwiLi9bbWVldHVwSWRdXCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIGZpcnN0IE1lZXR1cCBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LnBsYW5ldHdhcmUuY29tL3dwaW1hZ2VzLzIwMjAvMDcvbmV3LXlvcmstYmVzdC1jaXRpZXMtbmV3LXlvcmstY2l0eS5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVEhpcyBpcyBhIGZpcnN0IG1lZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIkEgc2Vjb25kIE1lZXR1cCBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LnBsYW5ldHdhcmUuY29tL3dwaW1hZ2VzLzIwMjAvMDcvbmV3LXlvcmstYmVzdC1jaXRpZXMtbmV3LXlvcmstY2l0eS5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDEwLCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRIaXMgaXMgYSBzZWNvbmQgbWVldHVwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtM1wiLFxyXG4gICAgdGl0bGU6IFwiQSB0aGlyZCBNZWV0dXAgXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3d3dy5wbGFuZXR3YXJlLmNvbS93cGltYWdlcy8yMDIwLzA3L25ldy15b3JrLWJlc3QtY2l0aWVzLW5ldy15b3JrLWNpdHkuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxNSwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUSGlzIGlzIGEgdGhpcmQgbWVldHVwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtNFwiLFxyXG4gICAgdGl0bGU6IFwiQSBmb3J0aCBNZWV0dXAgXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3d3dy5wbGFuZXR3YXJlLmNvbS93cGltYWdlcy8yMDIwLzA3L25ldy15b3JrLWJlc3QtY2l0aWVzLW5ldy15b3JrLWNpdHkuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAyMCwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUSGlzIGlzIGEgZm9ydGggbWVldHVwXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuO1xyXG4gIDxGcmFnbWVudD5cclxuICAgIDxIZWFkPjwvSGVhZD5cclxuICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG4gIDwvRnJhZ21lbnQ+O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuLy8gICAvLyBhbGwgY29kZSBoZXJlIHdpbGwgcnVuIG9uIHNlcnZlciwgbmV2ZXIgb24gY2xpZW50XHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVwID0gY29udGV4dC5yZXA7XHJcbi8vICAgLy8gZmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgfSxcclxuLy8gICB9OyAvLyBubyBuZWVkIHRvIHJldmFsaWRhdGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIHdvcmtzIGZvciBldmVyeSBpbmNvbWluZyByZXF1ZXN0XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9hc2RmOlF3ZWFzZDEyQGNsdXN0ZXIwLnBvOXRsLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTsgLy8gZ2V0IGFuIGFycmF5IG9mIGRvY3VtZW50c1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSkpLCAvLyB0aGV5IHdvdWxkIGJlIHByZXBhcmVkIHRoZW4gc2V0IGZvciBIb21lUGFnZShwcm9wcylcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCwgLy8gZXZlcnkgNjAgc2Vjb25kc1xyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=