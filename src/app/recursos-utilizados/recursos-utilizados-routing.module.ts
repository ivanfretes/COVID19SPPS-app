import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecursosUtilizadosPage } from './recursos-utilizados.page';

const routes: Routes = [
  {
    path: '',
    component: RecursosUtilizadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosUtilizadosPageRoutingModule {}
