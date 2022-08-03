webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

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
/* harmony import */ var _meetupId___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./[meetupId] */ "./pages/[meetupId]/index.js");

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxxRkFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXREO0FBRUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsT0FBSyxFQUNILG9GQUpKO0FBS0VDLFNBQU8sRUFBRSxpQ0FMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQURvQixFQVNwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsa0JBRlQ7QUFHRUMsT0FBSyxFQUNILG9GQUpKO0FBS0VDLFNBQU8sRUFBRSxrQ0FMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVRvQixFQWlCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGlCQUZUO0FBR0VDLE9BQUssRUFDSCxvRkFKSjtBQUtFQyxTQUFPLEVBQUUsa0NBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FqQm9CLEVBeUJwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsT0FBSyxFQUNILG9GQUpKO0FBS0VDLFNBQU8sRUFBRSxrQ0FMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQXpCb0IsQ0FBdEI7O0FBbUNBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FkU0YsUTs7QUFzQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2ZTllMmVhMTkwZTVjNThhZTE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCBNZWV0dXBEZXRhaWxzIGZyb20gXCIuL1ttZWV0dXBJZF1cIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkEgZmlyc3QgTWVldHVwIFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cucGxhbmV0d2FyZS5jb20vd3BpbWFnZXMvMjAyMC8wNy9uZXcteW9yay1iZXN0LWNpdGllcy1uZXcteW9yay1jaXR5LmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUSGlzIGlzIGEgZmlyc3QgbWVldHVwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiQSBzZWNvbmQgTWVldHVwIFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cucGxhbmV0d2FyZS5jb20vd3BpbWFnZXMvMjAyMC8wNy9uZXcteW9yay1iZXN0LWNpdGllcy1uZXcteW9yay1jaXR5LmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgMTAsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVEhpcyBpcyBhIHNlY29uZCBtZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0zXCIsXHJcbiAgICB0aXRsZTogXCJBIHRoaXJkIE1lZXR1cCBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LnBsYW5ldHdhcmUuY29tL3dwaW1hZ2VzLzIwMjAvMDcvbmV3LXlvcmstYmVzdC1jaXRpZXMtbmV3LXlvcmstY2l0eS5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDE1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRIaXMgaXMgYSB0aGlyZCBtZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm00XCIsXHJcbiAgICB0aXRsZTogXCJBIGZvcnRoIE1lZXR1cCBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vd3d3LnBsYW5ldHdhcmUuY29tL3dwaW1hZ2VzLzIwMjAvMDcvbmV3LXlvcmstYmVzdC1jaXRpZXMtbmV3LXlvcmstY2l0eS5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDIwLCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRIaXMgaXMgYSBmb3J0aCBtZWV0dXBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIC8vIGFsbCBjb2RlIGhlcmUgd2lsbCBydW4gb24gc2VydmVyLCBuZXZlciBvbiBjbGllbnRcclxuLy8gICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICBjb25zdCByZXAgPSBjb250ZXh0LnJlcDtcclxuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gQVBJXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07IC8vIG5vIG5lZWQgdG8gcmV2YWxpZGF0ZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gd29ya3MgZm9yIGV2ZXJ5IGluY29taW5nIHJlcXVlc3RcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL2FzZGY6UXdlYXNkMTJAY2x1c3RlcjAucG85dGwubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpOyAvLyBnZXQgYW4gYXJyYXkgb2YgZG9jdW1lbnRzXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICB9KSksIC8vIHRoZXkgd291bGQgYmUgcHJlcGFyZWQgdGhlbiBzZXQgZm9yIEhvbWVQYWdlKHByb3BzKVxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDYwLCAvLyBldmVyeSA2MCBzZWNvbmRzXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==