"use strict";
exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./src/pages/404.js?export=default":
/*!*****************************************!*\
  !*** ./src/pages/404.js?export=default ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
// src/pages/404.js


const NotFoundWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "sc-404__NotFoundWrapper"
})(["text-align:center;padding:4rem 2rem;color:", ";background-color:", ";min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.darkNavy);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "sc-404__Heading"
})(["font-size:clamp(36px,8vw,60px);margin-bottom:1rem;"]);
const Message = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "sc-404__Message"
})(["font-size:1.2em;margin:0.5rem 0;"]);
const DogVideo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].video.withConfig({
  displayName: "sc-404__DogVideo"
})(["max-width:100%;width:400px;height:auto;margin:1.5rem 0;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.3);@media (max-width:768px){width:100%;}"]);
const HomeLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "sc-404__HomeLink"
})(["display:inline-block;margin-top:1.5rem;padding:0.6em 1.4em;background-color:", ";color:", ";text-decoration:none;border-radius:4px;font-weight:bold;transition:background-color 0.3s ease;&:hover{background-color:", ";}"], ({
  theme
}) => theme.colors.teal, ({
  theme
}) => theme.colors.darkNavy, ({
  theme
}) => theme.colors.lightTeal);
const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NotFoundWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading, null, "404\xA0\u2013\xA0Oops! Page not found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Message, null, "I must\u2019ve forgotten to route this page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Message, null, "While I fix that, here\u2019s a little something to make up for it:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DogVideo, {
  src: "/Dog_Codes_Website_Video_Ready.mp4",
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  "aria-label": "My dog reminding me to check my links"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Message, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("em", null, "(My dog, making sure I double-check my links!)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HomeLink, {
  href: "/"
}, "\u2190 Go back home"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map