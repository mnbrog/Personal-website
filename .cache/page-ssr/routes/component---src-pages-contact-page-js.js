"use strict";
exports.id = "component---src-pages-contact-page-js";
exports.ids = ["component---src-pages-contact-page-js"];
exports.modules = {

/***/ "./src/pages/ContactPage.js?export=default":
/*!*************************************************!*\
  !*** ./src/pages/ContactPage.js?export=default ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


const ContactWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ContactPage__ContactWrapper"
})(["text-align:center;padding:4rem 2rem;color:", ";background-color:", ";min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.darkNavy);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "ContactPage__Heading"
})(["font-size:clamp(36px,8vw,60px);margin-bottom:1rem;"]);
const Message = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "ContactPage__Message"
})(["font-size:1.2em;margin:0.5rem 0;"]);
const DownloadLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "ContactPage__DownloadLink"
})(["display:inline-block;margin-top:1.5rem;padding:0.6em 1.4em;background-color:", ";color:", ";text-decoration:none;border-radius:4px;font-weight:bold;transition:background-color 0.3s ease;&:hover{background-color:", ";}"], ({
  theme
}) => theme.colors.accent, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.lightSlate);
const ContactPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Heading, null, "Contact Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Message, null, "Need my easy to save phone contact? Click my contact card below."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DownloadLink, {
  href: "/Brogan_Michael.vcf",
  download: true
}, "\uD83D\uDCC7 Save Contact Card"));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-page-js.js.map