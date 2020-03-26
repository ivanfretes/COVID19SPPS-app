import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenesLosSintomasPage } from './tenes-los-sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: TenesLosSintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenesLosSintomasPageRoutingModule {}
