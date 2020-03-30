import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenesLosSintomasPageRoutingModule } from './tenes-los-sintomas-routing.module';

import { TenesLosSintomasPage } from './tenes-los-sintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenesLosSintomasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TenesLosSintomasPage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [
    ReactiveFormsModule
  ]
})
export class TenesLosSintomasPageModule {}
