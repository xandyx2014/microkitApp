(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{qhFj:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var t=u("pMnS"),i=u("MKJQ"),r=u("sZkV"),a=u("SVse"),b=u("mrSG"),c=u("gcOT");const{Storage:s}=c.a;let d=(()=>{class l{constructor(){this.url="[Storage-Recordatorio] microkit"}guardar(l){return b.a(this,void 0,void 0,(function*(){const n=yield this.obtener();yield s.set({key:this.url,value:JSON.stringify([...n,l])})}))}borrarPorId(l){return b.a(this,void 0,void 0,(function*(){const n=(yield this.obtener()).filter(n=>n.id!==l);console.log(n),yield s.set({key:this.url,value:JSON.stringify([...n])})}))}cambiarEstado(l,n){return b.a(this,void 0,void 0,(function*(){const u=yield this.obtener(),o=u.filter(n=>n.id===l)[0],e=u.filter(n=>n.id!==l);yield s.set({key:this.url,value:JSON.stringify([Object.assign({},o,{estado:n}),...e])})}))}obtener(){return b.a(this,void 0,void 0,(function*(){const l=yield s.get({key:this.url}),n=JSON.parse(l.value);return null==n?[]:n}))}}return l.ngInjectableDef=o.Nb({factory:function(){return new l},token:l,providedIn:"root"}),l})(),h=(()=>{class l{constructor(){c.a.LocalNotifications.addListener("localNotificationReceived",l=>{console.log("Notification: ",l)}),c.a.LocalNotifications.addListener("localNotificationActionPerformed",l=>{console.log("Notification action performed",l)})}crear(){return b.a(this,void 0,void 0,(function*(){const l=yield c.a.LocalNotifications.schedule({notifications:[{title:"Get 10% off!",body:"Swipe now to learn more",id:Math.floor(10*Math.random()),sound:"beep.aiff",attachments:[{id:"face",url:"res://public/assets/ionitron.png"}],actionTypeId:"OPEN_PRODUCT",extra:{productId:"PRODUCT-1"}}]});console.log(l)}))}}return l.ngInjectableDef=o.Nb({factory:function(){return new l},token:l,providedIn:"root"}),l})();for(var g=u("s7LF"),p=36,m="";p--;)m+=p.toString(36);var f=function(l){for(var n="",u=l||11;u--;)n+=m[36*Math.random()|0];return n};let v=(()=>{class l{constructor(l){this.toastController=l}presentToast(l){return b.a(this,void 0,void 0,(function*(){(yield this.toastController.create({message:l,duration:2e3,mode:"md"})).present()}))}}return l.ngInjectableDef=o.Nb({factory:function(){return new l(o.Ob(r.Ib))},token:l,providedIn:"root"}),l})();class y{constructor(l,n,u,o){this.fb=l,this.storageService=n,this.notificacionService=u,this.modalCtrl=o}ngOnInit(){this.myForm=this.fb.group({id:[f()],nota:["",g.m.required],descripcion:[""],fechaInicial:["",g.m.required],fechaFinal:["",g.m.required],estado:[!1]})}onSubmit(){const l=new Date(this.myForm.value.fechaInicial).toString(),n=new Date(this.myForm.value.fechaFinal).toString();console.log(l),this.storageService.guardar(Object.assign({},this.myForm.value,{fechaInicial:l,fechaFinal:n})).then(()=>{this.notificacionService.presentToast("Se ha Creado la nota ")}),this.modalCtrl.dismiss(),console.log(this.myForm.value)}}class k{constructor(l,n,u,o){this.storageService=l,this.recordatorioService=n,this.modalController=u,this.actionSheetController=o,this.recordatorios=[]}ngOnInit(){return b.a(this,void 0,void 0,(function*(){yield this.obtenerValores()}))}obtenerValores(){this.storageService.obtener().then(l=>{this.recordatorios=l})}presentModal(){return b.a(this,void 0,void 0,(function*(){const l=yield this.modalController.create({component:y,cssClass:"my-custom-modal-css"});return l.onDidDismiss().then(()=>{this.obtenerValores()}),yield l.present()}))}presentActionSheet(l){return b.a(this,void 0,void 0,(function*(){const n=yield this.actionSheetController.create({header:"Recordatorios",buttons:[{text:"Completo",icon:"checkmark-outline",handler:()=>b.a(this,void 0,void 0,(function*(){console.log("Share clicked"),this.storageService.cambiarEstado(l.id,!0).then(()=>{this.obtenerValores()})}))},{text:"Incompleto",icon:"close-outline",handler:()=>{console.log("Share clicked"),this.storageService.cambiarEstado(l.id,!1).then(()=>{this.obtenerValores()})}},{text:"Borrar",role:"destructive",icon:"trash",handler:()=>b.a(this,void 0,void 0,(function*(){yield this.storageService.borrarPorId(l.id),yield this.obtenerValores()}))},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield n.present()}))}}var x=o.nb({encapsulation:0,styles:[[""]],data:{}});function C(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),o.pb(1,0,null,null,6,"ion-chip",[["color","primary"],["mode","ios"],["outline","true"]],null,null,null,i.U,i.j)),o.ob(2,49152,null,0,r.q,[o.h,o.k,o.x],{color:[0,"color"],mode:[1,"mode"],outline:[2,"outline"]},null),(l()(),o.pb(3,0,null,0,2,"ion-label",[],null,null,null,i.gb,i.v)),o.ob(4,49152,null,0,r.L,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Completo"])),(l()(),o.pb(6,0,null,0,1,"ion-icon",[["name","checkmark-outline"]],null,null,null,i.cb,i.r)),o.ob(7,49152,null,0,r.A,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"primary","ios","true"),l(n,7,0,"checkmark-outline")}),null)}function A(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,6,"ion-chip",[["color","danger"],["mode","ios"],["outline","true"]],null,null,null,i.U,i.j)),o.ob(1,49152,null,0,r.q,[o.h,o.k,o.x],{color:[0,"color"],mode:[1,"mode"],outline:[2,"outline"]},null),(l()(),o.pb(2,0,null,0,2,"ion-label",[],null,null,null,i.gb,i.v)),o.ob(3,49152,null,0,r.L,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["Incompleto"])),(l()(),o.pb(5,0,null,0,1,"ion-icon",[["name","close-outline"]],null,null,null,i.cb,i.r)),o.ob(6,49152,null,0,r.A,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"danger","ios","true"),l(n,6,0,"close-outline")}),null)}function I(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,23,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.presentActionSheet(l.context.$implicit)&&o),o}),i.T,i.e)),o.ob(1,49152,null,0,r.k,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,18,"ion-card-header",[],null,null,null,i.Q,i.g)),o.ob(3,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,3,"ion-card-title",[["mode","md"]],null,null,null,i.S,i.i)),o.ob(5,49152,null,0,r.o,[o.h,o.k,o.x],{mode:[0,"mode"]},null),(l()(),o.Hb(6,0,["",""])),o.Db(7,1),(l()(),o.pb(8,0,null,0,3,"ion-card-subtitle",[],null,null,null,i.R,i.h)),o.ob(9,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(l()(),o.Hb(10,0,["Fecha inicial: ",""])),o.Db(11,2),(l()(),o.pb(12,0,null,0,3,"ion-card-subtitle",[],null,null,null,i.R,i.h)),o.ob(13,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(l()(),o.Hb(14,0,["Fecha final: ",""])),o.Db(15,2),(l()(),o.pb(16,0,null,0,4,"ion-card-subtitle",[],null,null,null,i.R,i.h)),o.ob(17,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(l()(),o.eb(16777216,null,0,1,null,C)),o.ob(19,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),o.eb(0,[["elseTemplate",2]],0,0,null,A)),(l()(),o.pb(21,0,null,0,2,"ion-card-content",[],null,null,null,i.P,i.f)),o.ob(22,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(l()(),o.Hb(23,0,[" "," "]))],(function(l,n){l(n,5,0,"md"),l(n,19,0,n.context.$implicit.estado,o.Ab(n,20))}),(function(l,n){var u=o.Ib(n,6,0,l(n,7,0,o.Ab(n.parent.parent,0),n.context.$implicit.nota));l(n,6,0,u);var e=o.Ib(n,10,0,l(n,11,0,o.Ab(n.parent.parent,1),n.context.$implicit.fechaInicial,"dd-MM-yyyy hh:mm:ss"));l(n,10,0,e);var t=o.Ib(n,14,0,l(n,15,0,o.Ab(n.parent.parent,1),n.context.$implicit.fechaFinal,"dd-MM-yyyy hh:mm:ss"));l(n,14,0,t),l(n,23,0,n.context.$implicit.descripcion)}))}function S(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),o.eb(16777216,null,null,1,null,I)),o.ob(2,278528,null,0,a.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.eb(0,null,null,0))],(function(l,n){l(n,2,0,n.component.recordatorios)}),null)}function F(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,10,"ion-card",[],null,null,null,i.T,i.e)),o.ob(1,49152,null,0,r.k,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,4,"ion-card-header",[],null,null,null,i.Q,i.g)),o.ob(3,49152,null,0,r.m,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.R,i.h)),o.ob(5,49152,null,0,r.n,[o.h,o.k,o.x],null,null),(l()(),o.Hb(-1,0,["No hay recordatorios aun "])),(l()(),o.pb(7,0,null,0,3,"ion-card-content",[],null,null,null,i.P,i.f)),o.ob(8,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(l()(),o.pb(9,0,null,0,1,"ion-icon",[["name","sad-outline"],["style","font-size: 2em;"]],null,null,null,i.cb,i.r)),o.ob(10,49152,null,0,r.A,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,10,0,"sad-outline")}),null)}function E(l){return o.Jb(0,[o.Cb(0,a.o,[]),o.Cb(0,a.d,[o.s]),(l()(),o.pb(2,0,null,null,10,"ion-header",[],null,null,null,i.bb,i.q)),o.ob(3,49152,null,0,r.z,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,8,"ion-toolbar",[["color","light"]],null,null,null,i.vb,i.K)),o.ob(5,49152,null,0,r.xb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.O,i.d)),o.ob(7,49152,null,0,r.j,[o.h,o.k,o.x],null,null),(l()(),o.pb(8,0,null,0,1,"ion-menu-button",[["color","primary"]],null,null,null,i.jb,i.z)),o.ob(9,49152,null,0,r.P,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.pb(10,0,null,0,2,"ion-title",[["color","primary"]],null,null,null,i.ub,i.J)),o.ob(11,49152,null,0,r.vb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Hb(-1,0,["Recordatorios"])),(l()(),o.pb(13,0,null,null,10,"ion-content",[],null,null,null,i.W,i.l)),o.ob(14,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.eb(16777216,null,0,1,null,S)),o.ob(16,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),o.eb(0,[["elseTemplate",2]],0,0,null,F)),(l()(),o.pb(18,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.Z,i.n)),o.ob(19,49152,null,0,r.u,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),o.pb(20,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.presentModal()&&o),o}),i.Y,i.o)),o.ob(21,49152,null,0,r.v,[o.h,o.k,o.x],null,null),(l()(),o.pb(22,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.cb,i.r)),o.ob(23,49152,null,0,r.A,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,5,0,"light"),l(n,9,0,"primary"),l(n,11,0,"primary"),l(n,16,0,u.recordatorios.length,o.Ab(n,17)),l(n,19,0,"end","bottom"),l(n,23,0,"add")}),null)}function J(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-recordatorio",[],null,null,null,E,x)),o.ob(1,114688,null,0,k,[d,h,r.Bb,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var H=o.lb("app-recordatorio",k,J,{},{},[]),j=o.nb({encapsulation:0,styles:[[""]],data:{}});function N(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,4,"ion-item",[["lines","none"]],null,null,null,i.fb,i.u)),o.ob(1,49152,null,0,r.F,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(2,0,null,0,2,"ion-text",[["class","form-error"],["color","danger"]],null,null,null,i.sb,i.H)),o.ob(3,49152,null,0,r.sb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Hb(-1,0,[" Tiene q ingresar una nota "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"danger")}),null)}function D(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,4,"ion-item",[["lines","none"]],null,null,null,i.fb,i.u)),o.ob(1,49152,null,0,r.F,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(2,0,null,0,2,"ion-text",[["class","form-error"],["color","danger"]],null,null,null,i.sb,i.H)),o.ob(3,49152,null,0,r.sb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Hb(-1,0,[" Ingrese la fecha "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"danger")}),null)}function M(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,4,"ion-item",[["lines","none"]],null,null,null,i.fb,i.u)),o.ob(1,49152,null,0,r.F,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.pb(2,0,null,0,2,"ion-text",[["class","form-error"],["color","danger"]],null,null,null,i.sb,i.H)),o.ob(3,49152,null,0,r.sb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Hb(-1,0,[" Ingrese la fecha "]))],(function(l,n){l(n,1,0,"none"),l(n,3,0,"danger")}),null)}function P(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,68,"ion-content",[],null,null,null,i.W,i.l)),o.ob(1,49152,null,0,r.s,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,66,"form",[["class","ion-no-padding"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,t=l.component;return"submit"===n&&(e=!1!==o.Ab(l,4).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Ab(l,4).onReset()&&e),"ngSubmit"===n&&(e=!1!==t.onSubmit()&&e),e}),null,null)),o.ob(3,16384,null,0,g.q,[],null,null),o.ob(4,540672,null,0,g.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Eb(2048,null,g.a,null,[g.d]),o.ob(6,16384,null,0,g.k,[[4,g.a]],null,null),(l()(),o.pb(7,0,null,null,11,"ion-item",[],null,null,null,i.fb,i.u)),o.ob(8,49152,null,0,r.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(9,0,null,0,2,"ion-label",[["position",""]],null,null,null,i.gb,i.v)),o.ob(10,49152,null,0,r.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Nota"])),(l()(),o.pb(12,0,null,0,6,"ion-input",[["formControlName","nota"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Ab(l,13)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ab(l,13)._handleInputEvent(u.target)&&e),e}),i.eb,i.t)),o.ob(13,16384,null,0,r.Hb,[o.k],null,null),o.Eb(1024,null,g.h,(function(l){return[l]}),[r.Hb]),o.ob(15,671744,null,0,g.c,[[3,g.a],[8,null],[8,null],[6,g.h],[2,g.p]],{name:[0,"name"]},null),o.Eb(2048,null,g.i,null,[g.c]),o.ob(17,16384,null,0,g.j,[[4,g.i]],null,null),o.ob(18,49152,null,0,r.E,[o.h,o.k,o.x],{type:[0,"type"]},null),(l()(),o.eb(16777216,null,null,1,null,N)),o.ob(20,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(21,0,null,null,11,"ion-item",[],null,null,null,i.fb,i.u)),o.ob(22,49152,null,0,r.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(23,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.gb,i.v)),o.ob(24,49152,null,0,r.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Fecha Inicial"])),(l()(),o.pb(26,0,null,0,6,"ion-datetime",[["display-format","DD.MM.YYYY"],["formControlName","fechaInicial"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Ab(l,27)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ab(l,27)._handleChangeEvent(u.target)&&e),e}),i.X,i.m)),o.ob(27,16384,null,0,r.Gb,[o.k],null,null),o.Eb(1024,null,g.h,(function(l){return[l]}),[r.Gb]),o.ob(29,671744,null,0,g.c,[[3,g.a],[8,null],[8,null],[6,g.h],[2,g.p]],{name:[0,"name"]},null),o.Eb(2048,null,g.i,null,[g.c]),o.ob(31,16384,null,0,g.j,[[4,g.i]],null,null),o.ob(32,49152,null,0,r.t,[o.h,o.k,o.x],null,null),(l()(),o.eb(16777216,null,null,1,null,D)),o.ob(34,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(35,0,null,null,11,"ion-item",[],null,null,null,i.fb,i.u)),o.ob(36,49152,null,0,r.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(37,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.gb,i.v)),o.ob(38,49152,null,0,r.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Fecha final"])),(l()(),o.pb(40,0,null,0,6,"ion-datetime",[["display-format","DD.MM.YYYY"],["formControlName","fechaFinal"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Ab(l,41)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ab(l,41)._handleChangeEvent(u.target)&&e),e}),i.X,i.m)),o.ob(41,16384,null,0,r.Gb,[o.k],null,null),o.Eb(1024,null,g.h,(function(l){return[l]}),[r.Gb]),o.ob(43,671744,null,0,g.c,[[3,g.a],[8,null],[8,null],[6,g.h],[2,g.p]],{name:[0,"name"]},null),o.Eb(2048,null,g.i,null,[g.c]),o.ob(45,16384,null,0,g.j,[[4,g.i]],null,null),o.ob(46,49152,null,0,r.t,[o.h,o.k,o.x],null,null),(l()(),o.eb(16777216,null,null,1,null,M)),o.ob(48,16384,null,0,a.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.pb(49,0,null,null,16,"ion-item",[],null,null,null,i.fb,i.u)),o.ob(50,49152,null,0,r.F,[o.h,o.k,o.x],null,null),(l()(),o.pb(51,0,null,0,5,"ion-label",[["position","floating"]],null,null,null,i.gb,i.v)),o.ob(52,49152,null,0,r.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Descripcion "])),(l()(),o.pb(54,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,i.sb,i.H)),o.ob(55,49152,null,0,r.sb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Hb(-1,0,["*"])),(l()(),o.pb(57,0,null,0,8,"ion-textarea",[["formControlName","descripcion"],["maxlength","100"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Ab(l,60)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Ab(l,60)._handleInputEvent(u.target)&&e),e}),i.tb,i.I)),o.ob(58,540672,null,0,g.f,[],{maxlength:[0,"maxlength"]},null),o.Eb(1024,null,g.g,(function(l){return[l]}),[g.f]),o.ob(60,16384,null,0,r.Hb,[o.k],null,null),o.Eb(1024,null,g.h,(function(l){return[l]}),[r.Hb]),o.ob(62,671744,null,0,g.c,[[3,g.a],[6,g.g],[8,null],[6,g.h],[2,g.p]],{name:[0,"name"]},null),o.Eb(2048,null,g.i,null,[g.c]),o.ob(64,16384,null,0,g.j,[[4,g.i]],null,null),o.ob(65,49152,null,0,r.tb,[o.h,o.k,o.x],{maxlength:[0,"maxlength"]},null),(l()(),o.pb(66,0,null,null,2,"ion-button",[["class","ion-padding"],["color","primary"],["expand","full"],["type","submit"]],null,null,null,i.N,i.c)),o.ob(67,49152,null,0,r.i,[o.h,o.k,o.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],type:[3,"type"]},null),(l()(),o.Hb(-1,0,[" Crear "]))],(function(l,n){var u=n.component;l(n,4,0,u.myForm),l(n,10,0,""),l(n,15,0,"nota"),l(n,18,0,"text"),l(n,20,0,u.myForm.get("nota").invalid&&u.myForm.get("nota").touched),l(n,24,0,"floating"),l(n,29,0,"fechaInicial"),l(n,34,0,u.myForm.get("fechaInicial").invalid&&u.myForm.get("fechaInicial").touched),l(n,38,0,"floating"),l(n,43,0,"fechaFinal"),l(n,48,0,u.myForm.get("fechaFinal").invalid&&u.myForm.get("fechaFinal").touched),l(n,52,0,"floating"),l(n,55,0,"danger"),l(n,58,0,"100"),l(n,62,0,"descripcion"),l(n,65,0,"100"),l(n,67,0,"primary",u.myForm.invalid,"full","submit")}),(function(l,n){l(n,2,0,o.Ab(n,6).ngClassUntouched,o.Ab(n,6).ngClassTouched,o.Ab(n,6).ngClassPristine,o.Ab(n,6).ngClassDirty,o.Ab(n,6).ngClassValid,o.Ab(n,6).ngClassInvalid,o.Ab(n,6).ngClassPending),l(n,12,0,o.Ab(n,17).ngClassUntouched,o.Ab(n,17).ngClassTouched,o.Ab(n,17).ngClassPristine,o.Ab(n,17).ngClassDirty,o.Ab(n,17).ngClassValid,o.Ab(n,17).ngClassInvalid,o.Ab(n,17).ngClassPending),l(n,26,0,o.Ab(n,31).ngClassUntouched,o.Ab(n,31).ngClassTouched,o.Ab(n,31).ngClassPristine,o.Ab(n,31).ngClassDirty,o.Ab(n,31).ngClassValid,o.Ab(n,31).ngClassInvalid,o.Ab(n,31).ngClassPending),l(n,40,0,o.Ab(n,45).ngClassUntouched,o.Ab(n,45).ngClassTouched,o.Ab(n,45).ngClassPristine,o.Ab(n,45).ngClassDirty,o.Ab(n,45).ngClassValid,o.Ab(n,45).ngClassInvalid,o.Ab(n,45).ngClassPending),l(n,57,0,o.Ab(n,58).maxlength?o.Ab(n,58).maxlength:null,o.Ab(n,64).ngClassUntouched,o.Ab(n,64).ngClassTouched,o.Ab(n,64).ngClassPristine,o.Ab(n,64).ngClassDirty,o.Ab(n,64).ngClassValid,o.Ab(n,64).ngClassInvalid,o.Ab(n,64).ngClassPending)}))}function B(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-form",[],null,null,null,P,j)),o.ob(1,114688,null,0,y,[g.b,d,v,r.Bb],null,null)],(function(l,n){l(n,1,0)}),null)}var O=o.lb("app-form",y,B,{},{},[]),T=u("iInd");class w{}u.d(n,"RecordatorioPageModuleNgFactory",(function(){return V}));var V=o.mb(e,[],(function(l){return o.xb([o.yb(512,o.j,o.X,[[8,[t.a,H,O]],[3,o.j],o.v]),o.yb(4608,a.l,a.k,[o.s,[2,a.t]]),o.yb(4608,g.o,g.o,[]),o.yb(4608,r.b,r.b,[o.x,o.g]),o.yb(4608,r.Bb,r.Bb,[r.b,o.j,o.p]),o.yb(4608,r.Eb,r.Eb,[r.b,o.j,o.p]),o.yb(4608,g.b,g.b,[]),o.yb(1073742336,a.b,a.b,[]),o.yb(1073742336,g.n,g.n,[]),o.yb(1073742336,g.e,g.e,[]),o.yb(1073742336,r.zb,r.zb,[]),o.yb(1073742336,g.l,g.l,[]),o.yb(1073742336,T.o,T.o,[[2,T.t],[2,T.m]]),o.yb(1073742336,w,w,[]),o.yb(1073742336,e,e,[]),o.yb(1024,T.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);