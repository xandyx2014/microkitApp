(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recordatorio-recordatorio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/form/form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/form/form.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" class=\"ion-no-padding\">\n    <ion-item>\n      <ion-label position=\"\">Nota</ion-label>\n      <ion-input formControlName=\"nota\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"myForm.get('nota').invalid && myForm.get('nota').touched\" lines=\"none\">\n      <ion-text color=\"danger\" class=\"form-error\">\n        Tiene q ingresar una nota\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha Inicial</ion-label>\n      <ion-datetime  formControlName=\"fechaInicial\" display-format=\"DD.MM.YYYY\"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf=\"myForm.get('fechaInicial').invalid && myForm.get('fechaInicial').touched\" lines=\"none\">\n      <ion-text color=\"danger\" class=\"form-error\">\n        Ingrese la fecha\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha final</ion-label>\n      <ion-datetime  formControlName=\"fechaFinal\" display-format=\"DD.MM.YYYY\"></ion-datetime>\n    </ion-item>\n    <ion-item *ngIf=\"myForm.get('fechaFinal').invalid && myForm.get('fechaFinal').touched\" lines=\"none\">\n      <ion-text color=\"danger\" class=\"form-error\">\n        Ingrese la fecha\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Descripcion <ion-text color=\"danger\">*</ion-text></ion-label>\n      <ion-textarea formControlName=\"descripcion\" maxlength=\"100\"></ion-textarea>\n    </ion-item>\n    <ion-button class=\"ion-padding\" expand=\"full\" color=\"primary\" type=\"submit\" [disabled]=\"myForm.invalid\">\n      Crear\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/recordatorio.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/recordatorio.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Recordatorios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"recordatorios.length; else elseTemplate\">\n    <ion-card *ngFor=\"let recordatorio of recordatorios\" (click)=\"presentActionSheet(recordatorio)\">\n      <ion-card-header>\n        <ion-card-title mode=\"md\">{{recordatorio.nota | titlecase}}</ion-card-title>\n        <ion-card-subtitle>Fecha inicial: {{recordatorio.fechaInicial | date:'dd-MM-yyyy hh:mm:ss'}}</ion-card-subtitle>\n        <ion-card-subtitle>Fecha final: {{recordatorio.fechaFinal | date:'dd-MM-yyyy hh:mm:ss'}}</ion-card-subtitle>\n        <ion-card-subtitle> \n          <ng-container *ngIf=\"recordatorio.estado; else elseTemplate\">\n            <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n              <ion-label>Completo</ion-label>\n              <ion-icon name=\"checkmark-outline\"></ion-icon>\n            </ion-chip>\n          </ng-container>\n          <ng-template #elseTemplate>\n            <ion-chip color=\"danger\" mode=\"ios\" outline=\"true\">\n              <ion-label>Incompleto</ion-label>\n              <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-chip>\n          </ng-template>\n          \n          \n      </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        {{recordatorio.descripcion}}\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n  <ng-template #elseTemplate>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>No hay recordatorios aun </ion-card-subtitle>\n        \n      </ion-card-header>\n      <ion-card-content>\n        <ion-icon style=\"font-size: 2em;\" name=\"sad-outline\"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"presentModal()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/uid/dist/index.mjs":
/*!*****************************************!*\
  !*** ./node_modules/uid/dist/index.mjs ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var IDX=36, HEX='';
while (IDX--) HEX += IDX.toString(36);

/* harmony default export */ __webpack_exports__["default"] = (function (len) {
	var str='', num = len || 11;
	while (num--) str += HEX[Math.random() * 36 | 0];
	return str;
});


/***/ }),

/***/ "./src/app/config/env.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/env.config.ts ***!
  \**************************************/
/*! exports provided: URL_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_STORAGE", function() { return URL_STORAGE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const URL_STORAGE = '[Storage-Recordatorio] microkit';


/***/ }),

/***/ "./src/app/pages/recordatorio/form/form.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/recordatorio/form/form.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29yZGF0b3Jpby9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/recordatorio/form/form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/recordatorio/form/form.component.ts ***!
  \***********************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uid */ "./node_modules/uid/dist/index.mjs");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_notificacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notificacion.service */ "./src/app/services/notificacion.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let FormComponent = class FormComponent {
    constructor(fb, storageService, notificacionService, modalCtrl) {
        this.fb = fb;
        this.storageService = storageService;
        this.notificacionService = notificacionService;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.myForm = this.fb.group({
            id: [Object(uid__WEBPACK_IMPORTED_MODULE_3__["default"])()],
            nota: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descripcion: [''],
            fechaInicial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fechaFinal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estado: [false]
        });
    }
    onSubmit() {
        const fechaInicial = new Date(this.myForm.value.fechaInicial).toString();
        const fechaFinal = new Date(this.myForm.value.fechaFinal).toString();
        console.log(fechaInicial);
        this.storageService.guardar(Object.assign({}, this.myForm.value, { fechaInicial,
            fechaFinal })).then(() => {
            this.notificacionService.presentToast('Se ha Creado la nota ');
        });
        this.modalCtrl.dismiss();
        console.log(this.myForm.value);
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: src_app_services_notificacion_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.scss */ "./src/app/pages/recordatorio/form/form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        src_app_services_notificacion_service__WEBPACK_IMPORTED_MODULE_5__["NotificacionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], FormComponent);



/***/ }),

/***/ "./src/app/pages/recordatorio/recordatorio-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/recordatorio/recordatorio-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecordatorioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPageRoutingModule", function() { return RecordatorioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recordatorio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recordatorio.page */ "./src/app/pages/recordatorio/recordatorio.page.ts");




const routes = [
    {
        path: '',
        component: _recordatorio_page__WEBPACK_IMPORTED_MODULE_3__["RecordatorioPage"]
    }
];
let RecordatorioPageRoutingModule = class RecordatorioPageRoutingModule {
};
RecordatorioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecordatorioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/recordatorio/recordatorio.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/recordatorio/recordatorio.module.ts ***!
  \***********************************************************/
/*! exports provided: RecordatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPageModule", function() { return RecordatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recordatorio-routing.module */ "./src/app/pages/recordatorio/recordatorio-routing.module.ts");
/* harmony import */ var _recordatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recordatorio.page */ "./src/app/pages/recordatorio/recordatorio.page.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/pages/recordatorio/form/form.component.ts");








let RecordatorioPageModule = class RecordatorioPageModule {
};
RecordatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _recordatorio_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecordatorioPageRoutingModule"]
        ],
        declarations: [_recordatorio_page__WEBPACK_IMPORTED_MODULE_6__["RecordatorioPage"], _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]],
        entryComponents: [_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"]]
    })
], RecordatorioPageModule);



/***/ }),

/***/ "./src/app/pages/recordatorio/recordatorio.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/recordatorio/recordatorio.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29yZGF0b3Jpby9yZWNvcmRhdG9yaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/recordatorio/recordatorio.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/recordatorio/recordatorio.page.ts ***!
  \*********************************************************/
/*! exports provided: RecordatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioPage", function() { return RecordatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_recordatorio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/recordatorio.service */ "./src/app/services/recordatorio.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/pages/recordatorio/form/form.component.ts");






let RecordatorioPage = class RecordatorioPage {
    constructor(storageService, recordatorioService, modalController, actionSheetController) {
        this.storageService = storageService;
        this.recordatorioService = recordatorioService;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.recordatorios = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.recordatorioService.crear();
            /*await this.storageService.guardar({
              id: uid(),
              descripcion: 'lorem ipsn',
              estado: false,
              fechaFinal: new Date().toString(),
              fechaInicial: new Date().toString(),
              nota: 'esta es una nota titulo'
            });*/
            yield this.obtenerValores();
            // this.storageService.borrarPorId('rthtso0uiyq93sygt3jnn0ueyej4j7s3');
        });
    }
    obtenerValores() {
        this.storageService.obtener().then((value) => {
            this.recordatorios = value;
        });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                cssClass: 'my-custom-modal-css'
            });
            modal.onDidDismiss().then(() => {
                this.obtenerValores();
            });
            return yield modal.present();
        });
    }
    presentActionSheet(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Recordatorios',
                buttons: [
                    {
                        text: 'Completo',
                        icon: 'checkmark-outline',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            console.log('Share clicked');
                            this.storageService.cambiarEstado(data.id, true).then(() => {
                                this.obtenerValores();
                            });
                        })
                    },
                    {
                        text: 'Incompleto',
                        icon: 'close-outline',
                        handler: () => {
                            console.log('Share clicked');
                            this.storageService.cambiarEstado(data.id, false).then(() => {
                                this.obtenerValores();
                            });
                        }
                    },
                    {
                        text: 'Borrar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            yield this.storageService.borrarPorId(data.id);
                            yield this.obtenerValores();
                        })
                    },
                    {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
RecordatorioPage.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: src_app_services_recordatorio_service__WEBPACK_IMPORTED_MODULE_3__["RecordatorioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
RecordatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recordatorio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recordatorio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recordatorio/recordatorio.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recordatorio.page.scss */ "./src/app/pages/recordatorio/recordatorio.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
        src_app_services_recordatorio_service__WEBPACK_IMPORTED_MODULE_3__["RecordatorioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
], RecordatorioPage);



/***/ }),

/***/ "./src/app/services/notificacion.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notificacion.service.ts ***!
  \**************************************************/
/*! exports provided: NotificacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificacionService", function() { return NotificacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let NotificacionService = class NotificacionService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                mode: 'md'
            });
            toast.present();
        });
    }
};
NotificacionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
NotificacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], NotificacionService);



/***/ }),

/***/ "./src/app/services/recordatorio.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/recordatorio.service.ts ***!
  \**************************************************/
/*! exports provided: RecordatorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordatorioService", function() { return RecordatorioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



const { LocalNotifications, LocalNotificationScheduleResult } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let RecordatorioService = class RecordatorioService {
    constructor() {
        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications.addListener('localNotificationReceived', (notification) => {
            console.log('Notification: ', notification);
        });
        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
            console.log('Notification action performed', notification);
        });
    }
    crear() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const notify = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].LocalNotifications.schedule({
                notifications: [{
                        title: 'Get 10% off!',
                        body: 'Swipe now to learn more',
                        // Get random id to test cancel
                        id: Math.floor(Math.random() * 10),
                        sound: 'beep.aiff',
                        attachments: [
                            { id: 'face', url: 'res://public/assets/ionitron.png' }
                        ],
                        actionTypeId: 'OPEN_PRODUCT',
                        extra: {
                            productId: 'PRODUCT-1'
                        }
                    }]
            });
            console.log(notify);
        });
    }
};
RecordatorioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RecordatorioService);



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _config_env_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/env.config */ "./src/app/config/env.config.ts");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let StorageService = class StorageService {
    constructor() {
        this.url = _config_env_config__WEBPACK_IMPORTED_MODULE_3__["URL_STORAGE"];
    }
    guardar(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const recordatorios = yield this.obtener();
            yield Storage.set({
                key: this.url,
                value: JSON.stringify([
                    ...recordatorios,
                    data
                ])
            });
        });
    }
    borrarPorId(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const recordatorio = yield this.obtener();
            const data = recordatorio.filter(value => value.id !== id);
            console.log(data);
            yield Storage.set({
                key: this.url,
                value: JSON.stringify([
                    ...data,
                ])
            });
        });
    }
    cambiarEstado(id, estado) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const recordatorios = yield this.obtener();
            const recordatorioUpdate = recordatorios.filter(value => value.id === id)[0];
            const data = recordatorios.filter(value => value.id !== id);
            yield Storage.set({
                key: this.url,
                value: JSON.stringify([Object.assign({}, recordatorioUpdate, { estado }), ...data])
            });
        });
    }
    obtener() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ret = yield Storage.get({ key: this.url });
            const body = JSON.parse(ret.value);
            if (typeof body === 'undefined' || body === null) {
                return [];
            }
            return body;
        });
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StorageService);



/***/ })

}]);
//# sourceMappingURL=pages-recordatorio-recordatorio-module-es2015.js.map