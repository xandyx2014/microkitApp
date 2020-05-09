(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabla-tabla-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabla/tabla.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabla/tabla.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Micronutrientes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-align-items-center\">\n  <ion-slides mode=\"ios\" pager=\"ios\" scrollbar=\"ios\">\n    <ion-slide>\n      <ion-card mode=\"md\"  class=\"ion-activatable fadeIn\" routerLink=\"/nutribebe\">\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        <img src=\"assets/img/nutribebe.jpg\" alt=\"\" srcset=\"\">\n        <ion-card-header>\n          <ion-card-subtitle color=\"primary\">NutriBebe</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          6 meses a 23 meses\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card  mode=\"md\" class=\"ion-activatable fadeIn\" routerLink=\"/vitamina\">\n\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        <img src=\"assets/img/vitamina.jpg\" alt=\"\" srcset=\"\">\n        <ion-card-header>\n          <ion-card-subtitle color=\"primary\">Vitamina A</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          A Partir de los 6 meses <br> a 59 meses\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-col size=\"6\">\n        <ion-card mode=\"md\"  class=\"ion-activatable fadeIn\" routerLink=\"/chispita\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n          <img src=\"assets/img/chispitas.jpg\" alt=\"\" srcset=\"\">\n          <ion-card-header>\n            <ion-card-subtitle color=\"primary\">Chispitas Nutricionales</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            De 6 meses a menor de 2 años\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-slide>\n    <ion-slide>\n      <ion-card mode=\"md\"  class=\"ion-activatable fadeIn\" routerLink=\"/jarabe\">\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        <img src=\"assets/img/sulfato.webp\" alt=\"\" srcset=\"\">\n        <ion-card-header>\n          <ion-card-subtitle color=\"primary\">Jarabe sulfato ferroso</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          De 24 meses a 59 meses\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tabla/tabla-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabla/tabla-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TablaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPageRoutingModule", function() { return TablaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabla_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabla.page */ "./src/app/pages/tabla/tabla.page.ts");




const routes = [
    {
        path: '',
        component: _tabla_page__WEBPACK_IMPORTED_MODULE_3__["TablaPage"]
    }
];
let TablaPageRoutingModule = class TablaPageRoutingModule {
};
TablaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TablaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabla/tabla.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tabla/tabla.module.ts ***!
  \*********************************************/
/*! exports provided: TablaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPageModule", function() { return TablaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tabla_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabla-routing.module */ "./src/app/pages/tabla/tabla-routing.module.ts");
/* harmony import */ var _tabla_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabla.page */ "./src/app/pages/tabla/tabla.page.ts");







let TablaPageModule = class TablaPageModule {
};
TablaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabla_routing_module__WEBPACK_IMPORTED_MODULE_5__["TablaPageRoutingModule"]
        ],
        declarations: [_tabla_page__WEBPACK_IMPORTED_MODULE_6__["TablaPage"]]
    })
], TablaPageModule);



/***/ }),

/***/ "./src/app/pages/tabla/tabla.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/tabla/tabla.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 140px;\n  width: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGEvRTpcXHByb3llY3RzX2lvbmljXFxtaWNyb2tpZHMvc3JjXFxhcHBcXHBhZ2VzXFx0YWJsYVxcdGFibGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJsYS90YWJsYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFibGEvdGFibGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbn1cclxuIiwiaW1nIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgd2lkdGg6IDE0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tabla/tabla.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabla/tabla.page.ts ***!
  \*******************************************/
/*! exports provided: TablaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaPage", function() { return TablaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablaPage = class TablaPage {
    constructor() { }
    ngOnInit() {
    }
};
TablaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabla',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabla.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabla/tabla.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabla.page.scss */ "./src/app/pages/tabla/tabla.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TablaPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabla-tabla-module-es2015.js.map