import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VitaminaPageRoutingModule } from './vitamina-routing.module';

import { VitaminaPage } from './vitamina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitaminaPageRoutingModule
  ],
  declarations: [VitaminaPage]
})
export class VitaminaPageModule {}
