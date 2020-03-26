import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesionalesListPage } from './profesionales-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesionalesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesionalesListPageRoutingModule {}
