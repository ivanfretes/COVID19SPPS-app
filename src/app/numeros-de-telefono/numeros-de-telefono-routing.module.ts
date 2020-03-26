import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumerosDeTelefonoPage } from './numeros-de-telefono.page';

const routes: Routes = [
  {
    path: '',
    component: NumerosDeTelefonoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumerosDeTelefonoPageRoutingModule {}
