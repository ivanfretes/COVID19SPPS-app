import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboraConLaAppPage } from './colabora-con-la-app.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboraConLaAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboraConLaAppPageRoutingModule {}
