import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfesionalesDetailPageRoutingModule } from './profesionales-detail-routing.module';
import { ProfesionalesDetailPage } from './profesionales-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesionalesDetailPageRoutingModule
  ],
  declarations: [
    ProfesionalesDetailPage
  ]
})
export class ProfesionalesDetailPageModule {}
