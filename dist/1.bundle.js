webpackJsonp([1],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class categoryController {

    constructor(data, template) {
        this._data = data;
        this._template = template;
        this._categories = [];
    };

    main() {
        console.log('category controller test');
    }
    show(param) {
        console.log(`category controller ${param}`);
    }
    add(param) {
        this._data.addCategorie(param);
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = categoryController;



/***/ })

});