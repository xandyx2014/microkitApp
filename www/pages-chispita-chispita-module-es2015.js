(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chispita-chispita-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chispita/chispita.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chispita/chispita.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Chispitas nutricionales</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"assets/img/chispitas.jpg\" alt=\"\" srcset=\"\">\n  <ion-card>\n    <ion-card-content>\n      <ion-text color=\"dark\">\n        Las chispitas nutricionales son muy importantes previenen la anemia en el bebé o niño, se consume a partir de\n        los 6 meses de edad hasta los 2 años de edad, acude al centro de salud más cercano que tengas y realiza tu\n        control de niño sano para que te entreguen las chispitas nutricionales, las personas encargadas en atenderte te\n        entregaran 1 vez al año, 60 sobres equivalentes a 2 meses, donde él bebe debe de consumir 1 sobre al día con una\n        fruta de preferencia y adecuada para la edad.\n      </ion-text>\n      <br>\n      <ion-text color=\"primary\">\n        <h4>Ingredientes</h4>\n      </ion-text>\n      <ul>\n        <li>Sobre de chispitas nutricionales </li>\n        <li>Fruta de preferencia (manzana roja, guineo, pera, papaya) </li>\n      </ul>\n      <ion-text color=\"primary\">\n        <h4>PREPARACIÓN </h4>\n      </ion-text>\n      <ol>\n        <li>Abra un sobre de las chispitas nutricionales cada día durante 60 días seguidos. </li>\n        <li>Separe 2 cucharas de la papilla y vacíe todo el contenido del sobre en la pequeña porción de papilla que\n          separó previamente. </li>\n        <li>Mezcle bien todo el contenido y dar al bebe en cucharas</li>\n      </ol>\n      <br>\n      <ion-text color=\"medium\">\n        NOTA* no debe de sobrar nada, una vez abierto no guardar el sobre\n      </ion-text>\n      <br>\n      <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/jlqEZT7HPmY\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/chispita/chispita-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/chispita/chispita-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChispitaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChispitaPageRoutingModule", function() { return ChispitaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chispita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chispita.page */ "./src/app/pages/chispita/chispita.page.ts");




const routes = [
    {
        path: '',
        component: _chispita_page__WEBPACK_IMPORTED_MODULE_3__["ChispitaPage"]
    }
];
let ChispitaPageRoutingModule = class ChispitaPageRoutingModule {
};
ChispitaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChispitaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chispita/chispita.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chispita/chispita.module.ts ***!
  \***************************************************/
/*! exports provided: ChispitaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChispitaPageModule", function() { return ChispitaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _chispita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chispita-routing.module */ "./src/app/pages/chispita/chispita-routing.module.ts");
/* harmony import */ var _chispita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chispita.page */ "./src/app/pages/chispita/chispita.page.ts");







let ChispitaPageModule = class ChispitaPageModule {
};
ChispitaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chispita_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChispitaPageRoutingModule"]
        ],
        declarations: [_chispita_page__WEBPACK_IMPORTED_MODULE_6__["ChispitaPage"]]
    })
], ChispitaPageModule);



/***/ }),

/***/ "./src/app/pages/chispita/chispita.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/chispita/chispita.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoaXNwaXRhL2NoaXNwaXRhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/chispita/chispita.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/chispita/chispita.page.ts ***!
  \*************************************************/
/*! exports provided: ChispitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChispitaPage", function() { return ChispitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChispitaPage = class ChispitaPage {
    constructor() { }
    ngOnInit() {
    }
};
ChispitaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chispita',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chispita.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chispita/chispita.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chispita.page.scss */ "./src/app/pages/chispita/chispita.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChispitaPage);



/***/ })

}]);
//# sourceMappingURL=pages-chispita-chispita-module-es2015.js.map