import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import uid from 'uid';
import { StorageService } from 'src/app/services/storage.service';
import { NotificacionService } from 'src/app/services/notificacion.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private notificacionService: NotificacionService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      id: [uid()],
      nota: ['', Validators.required],
      descripcion: [''],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      estado: [false]
    });
  }
  onSubmit() {
    const fechaInicial = new Date(this.myForm.value.fechaInicial).toString();
    const fechaFinal = new Date(this.myForm.value.fechaFinal).toString();
    console.log(fechaInicial);
    this.storageService.guardar({
      ...this.myForm.value,
      fechaInicial,
      fechaFinal
    }).then( () => {
      this.notificacionService.presentToast('Se ha Creado la nota ');
    });
    this.modalCtrl.dismiss();
    console.log(this.myForm.value);
  }
}
