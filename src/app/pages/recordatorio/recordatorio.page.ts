import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import uid from 'uid';
import { Recordatorio } from 'src/app/interface/recordatorio.interface';
import { RecordatorioService } from 'src/app/services/recordatorio.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.page.html',
  styleUrls: ['./recordatorio.page.scss'],
})
export class RecordatorioPage implements OnInit {
  recordatorios: Recordatorio[] = [];
  constructor(
    private storageService: StorageService,
    private recordatorioService: RecordatorioService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController
  ) { }

  async ngOnInit() {
    // this.recordatorioService.crear();
    /*await this.storageService.guardar({
      id: uid(),
      descripcion: 'lorem ipsn',
      estado: false,
      fechaFinal: new Date().toString(),
      fechaInicial: new Date().toString(),
      nota: 'esta es una nota titulo'
    });*/
    await this.obtenerValores();
    // this.storageService.borrarPorId('rthtso0uiyq93sygt3jnn0ueyej4j7s3');
  }
  obtenerValores() {
    this.storageService.obtener().then( (value) => {
      this.recordatorios = value;
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: FormComponent,
      cssClass: 'my-custom-modal-css'
    });
    modal.onDidDismiss().then( () => {
      this.obtenerValores();
    });
    return await modal.present();
  }
  async presentActionSheet(data: Recordatorio) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Recordatorios',
      buttons: [
      {
        text: 'Completo',
        icon: 'checkmark-outline',
        handler: async () => {
          console.log('Share clicked');
          this.storageService.cambiarEstado(data.id, true).then( () => {
             this.obtenerValores();
          });
        }
      },
      {
        text: 'Incompleto',
        icon: 'close-outline',
        handler: () => {
          console.log('Share clicked');
          this.storageService.cambiarEstado(data.id, false).then( () => {
            this.obtenerValores();
         });
        }
      },
      {
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: async () => {
          await this.storageService.borrarPorId(data.id);
          await this.obtenerValores();
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
