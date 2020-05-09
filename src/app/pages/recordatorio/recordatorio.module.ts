import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordatorioPageRoutingModule } from './recordatorio-routing.module';

import { RecordatorioPage } from './recordatorio.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RecordatorioPageRoutingModule
  ],
  declarations: [RecordatorioPage, FormComponent],
  entryComponents: [FormComponent]
})
export class RecordatorioPageModule {}
