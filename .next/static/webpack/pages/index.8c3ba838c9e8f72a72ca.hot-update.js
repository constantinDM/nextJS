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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCxvRkFKSjtBQUtFQyxTQUFPLEVBQUUsaUNBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGtCQUZUO0FBR0VDLE9BQUssRUFDSCxvRkFKSjtBQUtFQyxTQUFPLEVBQUUsa0NBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FUb0IsRUFpQnBCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxpQkFGVDtBQUdFQyxPQUFLLEVBQ0gsb0ZBSko7QUFLRUMsU0FBTyxFQUFFLGtDQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBakJvQixFQXlCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCxvRkFKSjtBQUtFQyxTQUFPLEVBQUUsa0NBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0F6Qm9CLENBQXRCOztBQW1DQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBckJTRixROztBQTZDTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGMzYmE4MzhjOWU4ZjcyYTcyY2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbHMgZnJvbSBcIi4vW21lZXR1cElkXVwiO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiQSBmaXJzdCBNZWV0dXAgXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3d3dy5wbGFuZXR3YXJlLmNvbS93cGltYWdlcy8yMDIwLzA3L25ldy15b3JrLWJlc3QtY2l0aWVzLW5ldy15b3JrLWNpdHkuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRIaXMgaXMgYSBmaXJzdCBtZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJBIHNlY29uZCBNZWV0dXAgXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3d3dy5wbGFuZXR3YXJlLmNvbS93cGltYWdlcy8yMDIwLzA3L25ldy15b3JrLWJlc3QtY2l0aWVzLW5ldy15b3JrLWNpdHkuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUSGlzIGlzIGEgc2Vjb25kIG1lZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTNcIixcclxuICAgIHRpdGxlOiBcIkEgdGhpcmQgTWVldHVwIFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cucGxhbmV0d2FyZS5jb20vd3BpbWFnZXMvMjAyMC8wNy9uZXcteW9yay1iZXN0LWNpdGllcy1uZXcteW9yay1jaXR5LmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgMTUsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVEhpcyBpcyBhIHRoaXJkIG1lZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTRcIixcclxuICAgIHRpdGxlOiBcIkEgZm9ydGggTWVldHVwIFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cucGxhbmV0d2FyZS5jb20vd3BpbWFnZXMvMjAyMC8wNy9uZXcteW9yay1iZXN0LWNpdGllcy1uZXcteW9yay1jaXR5LmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgMjAsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVEhpcyBpcyBhIGZvcnRoIG1lZXR1cFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SZWFjdCBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgLy8gYWxsIGNvZGUgaGVyZSB3aWxsIHJ1biBvbiBzZXJ2ZXIsIG5ldmVyIG9uIGNsaWVudFxyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcCA9IGNvbnRleHQucmVwO1xyXG4vLyAgIC8vIGZldGNoIGRhdGEgZnJvbSBBUElcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgfTsgLy8gbm8gbmVlZCB0byByZXZhbGlkYXRlIGJlY2F1c2UgdGhpcyBmdW5jdGlvbiB3b3JrcyBmb3IgZXZlcnkgaW5jb21pbmcgcmVxdWVzdFxyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYXNkZjpRd2Vhc2QxMkBjbHVzdGVyMC5wbzl0bC5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7IC8vIGdldCBhbiBhcnJheSBvZiBkb2N1bWVudHNcclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKSwgLy8gdGhleSB3b3VsZCBiZSBwcmVwYXJlZCB0aGVuIHNldCBmb3IgSG9tZVBhZ2UocHJvcHMpXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogNjAsIC8vIGV2ZXJ5IDYwIHNlY29uZHNcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9