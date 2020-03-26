import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasDetailPage } from './noticias-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasDetailPageRoutingModule {}
