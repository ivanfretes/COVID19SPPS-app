import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticuloDetailPage } from './articulo-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ArticuloDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticuloDetailPageRoutingModule {}
