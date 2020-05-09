import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JarabePage } from './jarabe.page';

const routes: Routes = [
  {
    path: '',
    component: JarabePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JarabePageRoutingModule {}
