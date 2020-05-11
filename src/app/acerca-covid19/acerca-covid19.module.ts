import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaCovid19PageRoutingModule } from './acerca-covid19-routing.module';

import { AcercaCovid19Page } from './acerca-covid19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaCovid19PageRoutingModule
  ],
  declarations: [AcercaCovid19Page]
})
export class AcercaCovid19PageModule {}
