import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecursosUtilizadosPageRoutingModule } from './recursos-utilizados-routing.module';

import { RecursosUtilizadosPage } from './recursos-utilizados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecursosUtilizadosPageRoutingModule
  ],
  declarations: [RecursosUtilizadosPage]
})
export class RecursosUtilizadosPageModule {}
