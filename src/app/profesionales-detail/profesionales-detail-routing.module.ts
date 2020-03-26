import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalesDetailPage } from './profesionales-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesionalesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesionalesDetailPageRoutingModule {}
