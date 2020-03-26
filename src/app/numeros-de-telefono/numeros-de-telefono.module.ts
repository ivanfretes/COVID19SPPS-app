import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumerosDeTelefonoPageRoutingModule } from './numeros-de-telefono-routing.module';

import { NumerosDeTelefonoPage } from './numeros-de-telefono.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumerosDeTelefonoPageRoutingModule
  ],
  declarations: [NumerosDeTelefonoPage]
})
export class NumerosDeTelefonoPageModule {}
