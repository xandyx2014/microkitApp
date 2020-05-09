function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recordatorio-recordatorio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/form/form.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/form/form.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRecordatorioFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" class=\"ion-no-padding\">\n    <ion-item>\n      <ion-label position=\"\">Nota</ion-label>\n      <ion-input formControlName=\"nota\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"myForm.get('nota').invalid && myForm.get('nota').touched\" lines=\"none\">\n      <ion-text color=\"danger\" class=\"form-error\">\n        Tiene q ingresar una nota\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha Inicial</ion-label>\n      <ion-datetime  formControlName=\"fechaInicial\" display-format=\"DD.MM.YYYY\"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf=\"myForm.get('fechaInicial').invalid && myForm.get('fechaInicial').touched\" lines=\"none\">\n      <ion-text color=\"danger\" class=\"form-error\">\n        Ingrese la fecha\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha final</ion-label>\n      <ion-datetime  formControlName=\"fechaFinal\" display-format=\"DD.MM.YYYY\"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf=\"myForm.get('fechaFinal').invalid && myForm.get('fechaFinal').touched\" lines=\"none\">\n      <ion-text color=\"danger\" class=\"form-error\">\n        Ingrese la fecha\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Descripcion <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-textarea formControlName=\"descripcion\" maxlength=\"100\"></ion-textarea>\n    </ion-item>\n    <ion-button class=\"ion-padding\" expand=\"full\" color=\"primary\" type=\"submit\" [disabled]=\"myForm.invalid\">\n      Crear\n    </ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/recordatorio.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/recordatorio.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRecordatorioRecordatorioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Recordatorios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"recordatorios.length; else elseTemplate\">\n    <ion-card *ngFor=\"let recordatorio of recordatorios\" (click)=\"presentActionSheet(recordatorio)\">\n      <ion-card-header>\n        <ion-card-title mode=\"md\">{{recordatorio.nota | titlecase}}</ion-card-title>\n        <ion-card-subtitle>Fecha inicial: {{recordatorio.fechaInicial | date:'dd-MM-yyyy hh:mm:ss'}}</ion-card-subtitle>\n        <ion-card-subtitle>Fecha final: {{recordatorio.fechaFinal | date:'dd-MM-yyyy hh:mm:ss'}}</ion-card-subtitle>\n        <ion-card-subtitle> \n          <ng-container *ngIf=\"recordatorio.estado; else elseTemplate\">\n            <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n              <ion-label>Completo</ion-label>\n              <ion-icon name=\"checkmark-outline\"></ion-icon>\n            </ion-chip>\n          </ng-container>\n          <ng-template #elseTemplate>\n            <ion-chip color=\"danger\" mode=\"ios\" outline=\"true\">\n              <ion-label>Incompleto</ion-label>\n              <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-chip>\n          </ng-template>\n          \n          \n      </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        {{recordatorio.descripcion}}\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>No hay recordatorios aun </ion-card-subtitle>\n        \n      </ion-card-header>\n      <ion-card-content>\n        <ion-icon style=\"font-size: 2em;\" name=\"sad-outline\"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"presentModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/uid/dist/index.mjs":
  /*!*****************************************!*\
    !*** ./node_modules/uid/dist/index.mjs ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUidDistIndexMjs(__webpack_module__, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var IDX = 36,
        HEX = '';

    while (IDX--) {
      HEX += IDX.toString(36);
    }
    /* harmony default export */


    __webpack_exports__["default"] = function (len) {
      var str = '',
          num = len || 11;

      while (num--) {
        str += HEX[Math.random() * 36 | 0];
      }

      return str;
    };
    /***/

  },

  /***/
  "./src/app/config/env.config.ts":
  /*!**************************************!*\
    !*** ./src/app/config/env.config.ts ***!
    \**************************************/

  /*! exports provided: URL_STORAGE */

  /***/
  function srcAppConfigEnvConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL_STORAGE", function () {
      return URL_STORAGE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var URL_STORAGE = '[Storage-Recordatorio] microkit';
    /***/
  },

  /***/
  "./src/app/pages/recordatorio/form/form.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/recordatorio/form/form.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRecordatorioFormFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29yZGF0b3Jpby9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/recordatorio/form/form.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/recordatorio/form/form.component.ts ***!
    \***********************************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppPagesRecordatorioFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var uid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! uid */
    "./node_modules/uid/dist/index.mjs");
    /* harmony import */


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var src_app_services_notificacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/notificacion.service */
    "./src/app/services/notificacion.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var FormComponent = /*#__PURE__*/function () {
      function FormComponent(fb, storageService, notificacionService, modalCtrl) {
        _classCallCheck(this, FormComponent);

        this.fb = fb;
        this.storageService = storageService;
        this.notificacionService = notificacionService;
        this.modalCtrl = modalCtrl;
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myForm = this.fb.group({
            id: [Object(uid__WEBPACK_IMPORTED_MODULE_3__["default"])()],
            nota: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: [''],
            fechaInicial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fechaFinal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estado: [false]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var fechaInicial = new Date(this.myForm.value.fechaInicial).toString();
          var fechaFinal = new Date(this.myForm.value.fechaFinal).toString();
          console.log(fechaInicial);
          this.storageService.guardar(Object.assign({}, this.myForm.value, {
            fechaInicial: fechaInicial,
            fechaFinal: fechaFinal
          })).then(function () {
            _this.notificacionService.presentToast('Se ha Creado la nota ');
          });
          this.modalCtrl.dismiss();
          console.log(this.myForm.value);
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: src_app_services_notificacion_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/form/form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.scss */
      "./src/app/pages/recordatorio/form/form.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], src_app_services_notificacion_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], FormComponent);
    /***/
  },

  /***/
  "./src/app/pages/recordatorio/recordatorio-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/recordatorio/recordatorio-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RecordatorioPageRoutingModule */

  /***/
  function srcAppPagesRecordatorioRecordatorioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordatorioPageRoutingModule", function () {
      return RecordatorioPageRoutingModule;
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


    var _recordatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recordatorio.page */
    "./src/app/pages/recordatorio/recordatorio.page.ts");

    var routes = [{
      path: '',
      component: _recordatorio_page__WEBPACK_IMPORTED_MODULE_3__["RecordatorioPage"]
    }];

    var RecordatorioPageRoutingModule = function RecordatorioPageRoutingModule() {
      _classCallCheck(this, RecordatorioPageRoutingModule);
    };

    RecordatorioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RecordatorioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/recordatorio/recordatorio.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/recordatorio/recordatorio.module.ts ***!
    \***********************************************************/

  /*! exports provided: RecordatorioPageModule */

  /***/
  function srcAppPagesRecordatorioRecordatorioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordatorioPageModule", function () {
      return RecordatorioPageModule;
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


    var _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recordatorio-routing.module */
    "./src/app/pages/recordatorio/recordatorio-routing.module.ts");
    /* harmony import */


    var _recordatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recordatorio.page */
    "./src/app/pages/recordatorio/recordatorio.page.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/pages/recordatorio/form/form.component.ts");

    var RecordatorioPageModule = function RecordatorioPageModule() {
      _classCallCheck(this, RecordatorioPageModule);
    };

    RecordatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordatorioPageRoutingModule"]],
      declarations: [_recordatorio_page__WEBPACK_IMPORTED_MODULE_6__["RecordatorioPage"], _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]],
      entryComponents: [_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]]
    })], RecordatorioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/recordatorio/recordatorio.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/recordatorio/recordatorio.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRecordatorioRecordatorioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29yZGF0b3Jpby9yZWNvcmRhdG9yaW8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/recordatorio/recordatorio.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/recordatorio/recordatorio.page.ts ***!
    \*********************************************************/

  /*! exports provided: RecordatorioPage */

  /***/
  function srcAppPagesRecordatorioRecordatorioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordatorioPage", function () {
      return RecordatorioPage;
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


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var src_app_services_recordatorio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/recordatorio.service */
    "./src/app/services/recordatorio.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/pages/recordatorio/form/form.component.ts");

    var RecordatorioPage = /*#__PURE__*/function () {
      function RecordatorioPage(storageService, recordatorioService, modalController, actionSheetController) {
        _classCallCheck(this, RecordatorioPage);

        this.storageService = storageService;
        this.recordatorioService = recordatorioService;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.recordatorios = [];
      }

      _createClass(RecordatorioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.obtenerValores();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "obtenerValores",
        value: function obtenerValores() {
          var _this2 = this;

          this.storageService.obtener().then(function (value) {
            _this2.recordatorios = value;
          });
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                      cssClass: 'my-custom-modal-css'
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function () {
                      _this3.obtenerValores();
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.actionSheetController.create({
                      header: 'Recordatorios',
                      buttons: [{
                        text: 'Completo',
                        icon: 'checkmark-outline',
                        handler: function handler() {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                            var _this5 = this;

                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    console.log('Share clicked');
                                    this.storageService.cambiarEstado(data.id, true).then(function () {
                                      _this5.obtenerValores();
                                    });

                                  case 2:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3, this);
                          }));
                        }
                      }, {
                        text: 'Incompleto',
                        icon: 'close-outline',
                        handler: function handler() {
                          console.log('Share clicked');

                          _this4.storageService.cambiarEstado(data.id, false).then(function () {
                            _this4.obtenerValores();
                          });
                        }
                      }, {
                        text: 'Borrar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.next = 2;
                                    return this.storageService.borrarPorId(data.id);

                                  case 2:
                                    _context4.next = 4;
                                    return this.obtenerValores();

                                  case 4:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        }
                      }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context5.sent;
                    _context5.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return RecordatorioPage;
    }();

    RecordatorioPage.ctorParameters = function () {
      return [{
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: src_app_services_recordatorio_service__WEBPACK_IMPORTED_MODULE_3__["RecordatorioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }];
    };

    RecordatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recordatorio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recordatorio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/recordatorio.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recordatorio.page.scss */
      "./src/app/pages/recordatorio/recordatorio.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], src_app_services_recordatorio_service__WEBPACK_IMPORTED_MODULE_3__["RecordatorioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])], RecordatorioPage);
    /***/
  },

  /***/
  "./src/app/services/notificacion.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notificacion.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificacionService */

  /***/
  function srcAppServicesNotificacionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificacionService", function () {
      return NotificacionService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var NotificacionService = /*#__PURE__*/function () {
      function NotificacionService(toastController) {
        _classCallCheck(this, NotificacionService);

        this.toastController = toastController;
      }

      _createClass(NotificacionService, [{
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      mode: 'md'
                    });

                  case 2:
                    toast = _context6.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return NotificacionService;
    }();

    NotificacionService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    NotificacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], NotificacionService);
    /***/
  },

  /***/
  "./src/app/services/recordatorio.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/recordatorio.service.ts ***!
    \**************************************************/

  /*! exports provided: RecordatorioService */

  /***/
  function srcAppServicesRecordatorioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecordatorioService", function () {
      return RecordatorioService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        LocalNotifications = _capacitor_core__WEBP.LocalNotifications,
        LocalNotificationScheduleResult = _capacitor_core__WEBP.LocalNotificationScheduleResult;

    var RecordatorioService = /*#__PURE__*/function () {
      function RecordatorioService() {
        _classCallCheck(this, RecordatorioService);

        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications.addListener('localNotificationReceived', function (notification) {
          console.log('Notification: ', notification);
        });

        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications.addListener('localNotificationActionPerformed', function (notification) {
          console.log('Notification action performed', notification);
        });
      }

      _createClass(RecordatorioService, [{
        key: "crear",
        value: function crear() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var notify;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications.schedule({
                      notifications: [{
                        title: 'Get 10% off!',
                        body: 'Swipe now to learn more',
                        // Get random id to test cancel
                        id: Math.floor(Math.random() * 10),
                        sound: 'beep.aiff',
                        attachments: [{
                          id: 'face',
                          url: 'res://public/assets/ionitron.png'
                        }],
                        actionTypeId: 'OPEN_PRODUCT',
                        extra: {
                          productId: 'PRODUCT-1'
                        }
                      }]
                    });

                  case 2:
                    notify = _context7.sent;
                    console.log(notify);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }]);

      return RecordatorioService;
    }();

    RecordatorioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RecordatorioService);
    /***/
  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _config_env_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/env.config */
    "./src/app/config/env.config.ts");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Storage;

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);

        this.url = _config_env_config__WEBPACK_IMPORTED_MODULE_3__["URL_STORAGE"];
      }

      _createClass(StorageService, [{
        key: "guardar",
        value: function guardar(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var recordatorios;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.obtener();

                  case 2:
                    recordatorios = _context8.sent;
                    _context8.next = 5;
                    return Storage.set({
                      key: this.url,
                      value: JSON.stringify([].concat(_toConsumableArray(recordatorios), [data]))
                    });

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "borrarPorId",
        value: function borrarPorId(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var recordatorio, data;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.obtener();

                  case 2:
                    recordatorio = _context9.sent;
                    data = recordatorio.filter(function (value) {
                      return value.id !== id;
                    });
                    console.log(data);
                    _context9.next = 7;
                    return Storage.set({
                      key: this.url,
                      value: JSON.stringify(_toConsumableArray(data))
                    });

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "cambiarEstado",
        value: function cambiarEstado(id, estado) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var recordatorios, recordatorioUpdate, data;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.obtener();

                  case 2:
                    recordatorios = _context10.sent;
                    recordatorioUpdate = recordatorios.filter(function (value) {
                      return value.id === id;
                    })[0];
                    data = recordatorios.filter(function (value) {
                      return value.id !== id;
                    });
                    _context10.next = 7;
                    return Storage.set({
                      key: this.url,
                      value: JSON.stringify([Object.assign({}, recordatorioUpdate, {
                        estado: estado
                      })].concat(_toConsumableArray(data)))
                    });

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "obtener",
        value: function obtener() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var ret, body;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Storage.get({
                      key: this.url
                    });

                  case 2:
                    ret = _context11.sent;
                    body = JSON.parse(ret.value);

                    if (!(typeof body === 'undefined' || body === null)) {
                      _context11.next = 6;
                      break;
                    }

                    return _context11.abrupt("return", []);

                  case 6:
                    return _context11.abrupt("return", body);

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }]);

      return StorageService;
    }();

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StorageService);
    /***/
  }
}]);
//# sourceMappingURL=pages-recordatorio-recordatorio-module-es5.js.map