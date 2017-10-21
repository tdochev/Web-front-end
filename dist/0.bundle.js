webpackJsonp([0],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_logo_png__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__images_logo_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__images_logo_png__);

class homeController {

    constructor(data, template) {
        this._data = data;
        this._template = template;
        this._categories = [];
    };

    test() {
        console.log('home controller test');
    }
    main() {
        const headerLen = $('header').length;
        if (headerLen < 1) {
            this._data.getCategories().then((r) => {
                for (var prop in r) {
                    this._categories.push(r[prop]);
                }
                this._template.loadTemplate('home').then((compiledTemplate) => {
                    $('body').append(compiledTemplate(this._categories));
                })
            });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = homeController;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo.png";

/***/ })

});