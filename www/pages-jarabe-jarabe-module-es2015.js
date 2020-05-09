(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jarabe-jarabe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jarabe/jarabe.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jarabe/jarabe.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Jarabe sulfato ferroso</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"assets/img/sulfato.webp\" alt=\"\" srcset=\"\">\n  <ion-card>\n    <ion-card-content>\n      El jarabe de hierro o también conocido con jarabe de sulfato ferroso también previene la anemia y se consume desde\n      los 2 años hasta los 5 años de edad, acude al centro de salud para para asistir al control del niño sano y te\n      entreguen el sulfato ferroso, el niño o niña debe de consumir\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/jarabe/jarabe-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/jarabe/jarabe-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: JarabePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JarabePageRoutingModule", function() { return JarabePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jarabe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jarabe.page */ "./src/app/pages/jarabe/jarabe.page.ts");




const routes = [
    {
        path: '',
        component: _jarabe_page__WEBPACK_IMPORTED_MODULE_3__["JarabePage"]
    }
];
let JarabePageRoutingModule = class JarabePageRoutingModule {
};
JarabePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JarabePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/jarabe/jarabe.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/jarabe/jarabe.module.ts ***!
  \***********************************************/
/*! exports provided: JarabePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JarabePageModule", function() { return JarabePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _jarabe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jarabe-routing.module */ "./src/app/pages/jarabe/jarabe-routing.module.ts");
/* harmony import */ var _jarabe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jarabe.page */ "./src/app/pages/jarabe/jarabe.page.ts");







let JarabePageModule = class JarabePageModule {
};
JarabePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _jarabe_routing_module__WEBPACK_IMPORTED_MODULE_5__["JarabePageRoutingModule"]
        ],
        declarations: [_jarabe_page__WEBPACK_IMPORTED_MODULE_6__["JarabePage"]]
    })
], JarabePageModule);



/***/ }),

/***/ "./src/app/pages/jarabe/jarabe.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/jarabe/jarabe.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2phcmFiZS9qYXJhYmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/jarabe/jarabe.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/jarabe/jarabe.page.ts ***!
  \*********************************************/
/*! exports provided: JarabePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JarabePage", function() { return JarabePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JarabePage = class JarabePage {
    constructor() { }
    ngOnInit() {
    }
};
JarabePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jarabe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jarabe.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jarabe/jarabe.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jarabe.page.scss */ "./src/app/pages/jarabe/jarabe.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], JarabePage);



/***/ })

}]);
//# sourceMappingURL=pages-jarabe-jarabe-module-es2015.js.map