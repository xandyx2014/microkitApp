import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JarabePageRoutingModule } from './jarabe-routing.module';

import { JarabePage } from './jarabe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JarabePageRoutingModule
  ],
  declarations: [JarabePage]
})
export class JarabePageModule {}
