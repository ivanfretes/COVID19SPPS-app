import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaCovid19Page } from './acerca-covid19.page';

const routes: Routes = [
  {
    path: '',
    component: AcercaCovid19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcercaCovid19PageRoutingModule {}
