import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

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
  ],
<<<<<<< HEAD
=======
  
  providers: [
    NavParams
  ],
>>>>>>> ec17480f9c8f553f64c29d0d8cc56d7b972cac5f
})
export class ProfesionalesDetailPageModule {}
