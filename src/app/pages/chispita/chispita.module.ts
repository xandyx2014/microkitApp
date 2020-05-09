import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChispitaPageRoutingModule } from './chispita-routing.module';

import { ChispitaPage } from './chispita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChispitaPageRoutingModule
  ],
  declarations: [ChispitaPage]
})
export class ChispitaPageModule {}
