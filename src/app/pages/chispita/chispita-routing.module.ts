import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChispitaPage } from './chispita.page';

const routes: Routes = [
  {
    path: '',
    component: ChispitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChispitaPageRoutingModule {}
