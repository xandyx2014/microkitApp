function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vitamina-vitamina-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vitamina/vitamina.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vitamina/vitamina.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVitaminaVitaminaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Vitamina A</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"assets/img/vitamina.jpg\"></ion-img>\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/img/nutribebe/azul.png\" />\n    </ion-avatar>\n    <ion-label>\n      Para niños de 6 a 11 meses.\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/img/nutribebe/rojo.png\" />\n    </ion-avatar>\n    <ion-label>\n      Para niños de 12 a 59 meses.\n    </ion-label>\n  </ion-item>\n  <ion-card>\n    <ion-card-content>\n      <ion-text color=\"dark\">\n        Es esencial en los niños, previene posibles enfermedades como la ceguera, hacen que los niños sean sanos, ayuda\n        a la\n        estimulación del sistema inmune, disminuye los casos de diarrea y el sarampión y reduce la anemia. A partir de\n        los 6\n        meses de edad, los niños deben recibir 1 dosis de vitamina A cada 6 meses hasta que su quinto cumpleaños. Acude\n        al\n        centro de salud más cercano que tengas y realiza tu control de niño sano para que te entreguen la vitamina A\n      </ion-text>\n      <br>\n      <ion-text color=\"medium\">\n        NOTA* las manos siempre lavadas y limpian antes de manipular la vitamina que va a consumir el niño o niña\n      </ion-text>\n      <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/o_tCcDaYocA\" frameborder=\"0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/vitamina/vitamina-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/vitamina/vitamina-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: VitaminaPageRoutingModule */

  /***/
  function srcAppPagesVitaminaVitaminaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VitaminaPageRoutingModule", function () {
      return VitaminaPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _vitamina_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vitamina.page */
    "./src/app/pages/vitamina/vitamina.page.ts");

    var routes = [{
      path: '',
      component: _vitamina_page__WEBPACK_IMPORTED_MODULE_3__["VitaminaPage"]
    }];

    var VitaminaPageRoutingModule = function VitaminaPageRoutingModule() {
      _classCallCheck(this, VitaminaPageRoutingModule);
    };

    VitaminaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VitaminaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/vitamina/vitamina.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/vitamina/vitamina.module.ts ***!
    \***************************************************/

  /*! exports provided: VitaminaPageModule */

  /***/
  function srcAppPagesVitaminaVitaminaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VitaminaPageModule", function () {
      return VitaminaPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _vitamina_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vitamina-routing.module */
    "./src/app/pages/vitamina/vitamina-routing.module.ts");
    /* harmony import */


    var _vitamina_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vitamina.page */
    "./src/app/pages/vitamina/vitamina.page.ts");

    var VitaminaPageModule = function VitaminaPageModule() {
      _classCallCheck(this, VitaminaPageModule);
    };

    VitaminaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vitamina_routing_module__WEBPACK_IMPORTED_MODULE_5__["VitaminaPageRoutingModule"]],
      declarations: [_vitamina_page__WEBPACK_IMPORTED_MODULE_6__["VitaminaPage"]]
    })], VitaminaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/vitamina/vitamina.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/vitamina/vitamina.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVitaminaVitaminaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpdGFtaW5hL3ZpdGFtaW5hLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/vitamina/vitamina.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/vitamina/vitamina.page.ts ***!
    \*************************************************/

  /*! exports provided: VitaminaPage */

  /***/
  function srcAppPagesVitaminaVitaminaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VitaminaPage", function () {
      return VitaminaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VitaminaPage = /*#__PURE__*/function () {
      function VitaminaPage() {
        _classCallCheck(this, VitaminaPage);
      }

      _createClass(VitaminaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VitaminaPage;
    }();

    VitaminaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vitamina',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vitamina.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vitamina/vitamina.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vitamina.page.scss */
      "./src/app/pages/vitamina/vitamina.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VitaminaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-vitamina-vitamina-module-es5.js.map