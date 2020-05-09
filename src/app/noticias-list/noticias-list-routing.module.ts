import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasListPage } from './noticias-list.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasListPageRoutingModule {}
