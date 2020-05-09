(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-folder-folder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/folder/folder.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/folder/folder.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"light\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card mode=\"md\"  class=\"ion-activatable fadeIn\" routerLink=\"/nutribebe\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n          <img src=\"assets/img/nutribebe.jpg\" alt=\"\" srcset=\"\">\n          <ion-card-header>\n            <ion-card-subtitle color=\"primary\">NutriBebe</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            Informacion para Nutribebes\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card  mode=\"md\" class=\"ion-activatable fadeIn\" routerLink=\"/vitamina\">\n\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n          <img src=\"assets/img/vitamina.jpg\" alt=\"\" srcset=\"\">\n          <ion-card-header>\n            <ion-card-subtitle color=\"primary\">Vitamina A</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            Informacion para Vitamina A\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card mode=\"md\"  class=\"ion-activatable fadeIn\" routerLink=\"/chispita\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n          <img src=\"assets/img/chispitas.jpg\" alt=\"\" srcset=\"\">\n          <ion-card-header>\n            <ion-card-subtitle color=\"primary\">Chispitas Nutricionales</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            Informacion para Chispitas\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card mode=\"md\"  class=\"ion-activatable fadeIn\" routerLink=\"/jarabe\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n          <img src=\"assets/img/sulfato.webp\" alt=\"\" srcset=\"\">\n          <ion-card-header>\n            <ion-card-subtitle color=\"primary\">Jarabe sulfato ferroso</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            Informacion para Jarabe...\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card mode=\"md\"  class=\"ion-activatable fadeIn\" routerLink=\"/tabla\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n          <img src=\"assets/img/tabla.jpg\" alt=\"\" srcset=\"\">\n          <ion-card-header>\n            <ion-card-subtitle color=\"primary\">Micronutrientes</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            Segun la edad\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" routerLink=\"/recordatorio\">\n    <ion-fab-button >\n      <ion-icon class=\"bounceIn\" name=\"time\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/folder/folder-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/folder/folder-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "./src/app/pages/folder/folder.page.ts");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/folder/folder.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/folder/folder.module.ts ***!
  \***********************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/pages/folder/folder-routing.module.ts");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "./src/app/pages/folder/folder.page.ts");







let FolderPageModule = class FolderPageModule {
};
FolderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/pages/folder/folder.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/folder/folder.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\nimg {\n  height: 140px;\n  width: 100%;\n}\n\n.bounceIn {\n  animation: bounceInKey 1s cubic-bezier(0.47, 0, 0.745, 0.715) infinite alternate-reverse forwards;\n}\n\n@-webkit-keyframes bounceInKey {\n  0% {\n    transform: translateZ(0);\n  }\n  100% {\n    transform: translateZ(-400px);\n  }\n}\n\n@keyframes bounceInKey {\n  0% {\n    transform: translateZ(0);\n  }\n  100% {\n    transform: translateZ(-400px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9sZGVyL0U6XFxwcm95ZWN0c19pb25pY1xcbWljcm9raWRzL3NyY1xcYXBwXFxwYWdlc1xcZm9sZGVyXFxmb2xkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb2xkZXIvZm9sZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDQyxpR0FBQTtBQ0dEOztBRERBO0VBQ0k7SUFDRSx3QkFBQTtFQ0lKO0VERkU7SUFDRSw2QkFBQTtFQ0lKO0FBQ0Y7O0FEVkE7RUFDSTtJQUNFLHdCQUFBO0VDSUo7RURGRTtJQUNFLDZCQUFBO0VDSUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5pbWcge1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5ib3VuY2VJbiB7XG5cdGFuaW1hdGlvbjogYm91bmNlSW5LZXkgMXMgY3ViaWMtYmV6aWVyKDAuNDcwLCAwLjAwMCwgMC43NDUsIDAuNzE1KSBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZSBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgYm91bmNlSW5LZXkge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTQwMHB4KTtcbiAgICB9XG4gIH1cbiAgIiwiaW9uLWNvbCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm91bmNlSW4ge1xuICBhbmltYXRpb246IGJvdW5jZUluS2V5IDFzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluS2V5IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTQwMHB4KTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/folder/folder.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/folder/folder.page.ts ***!
  \*********************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FolderPage = class FolderPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FolderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/folder/folder.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./folder.page.scss */ "./src/app/pages/folder/folder.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FolderPage);



/***/ })

}]);
//# sourceMappingURL=pages-folder-folder-module-es2015.js.map