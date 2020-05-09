import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'nutribebe',
    loadChildren: () => import('./pages/nutribebe/nutribebe.module').then( m => m.NutribebePageModule)
  },
  {
    path: 'vitamina',
    loadChildren: () => import('./pages/vitamina/vitamina.module').then( m => m.VitaminaPageModule)
  },
  {
    path: 'chispita',
    loadChildren: () => import('./pages/chispita/chispita.module').then( m => m.ChispitaPageModule)
  },
  {
    path: 'jarabe',
    loadChildren: () => import('./pages/jarabe/jarabe.module').then( m => m.JarabePageModule)
  },
  {
    path: 'recordatorio',
    loadChildren: () => import('./pages/recordatorio/recordatorio.module').then( m => m.RecordatorioPageModule)
  },
  {
    path: 'tabla',
    loadChildren: () => import('./pages/tabla/tabla.module').then( m => m.TablaPageModule)
  },
  {
    path: '**',
    redirectTo: 'folder',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
