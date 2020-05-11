import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { ProfesionalesListPageRoutingModule } from './profesionales-list-routing.module';

import { ProfesionalesListPage } from './profesionales-list.page';
import { ProfesionalesDetailPage } from '../profesionales-detail/profesionales-detail.page';
import { ProfesionalesDetailPageModule } from '../profesionales-detail/profesionales-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesionalesListPageRoutingModule,
    ProfesionalesDetailPageModule
  ],
  declarations: [
    ProfesionalesListPage
  ],
  exports : [
    ProfesionalesListPage
  ]
})
export class ProfesionalesListPageModule {}
