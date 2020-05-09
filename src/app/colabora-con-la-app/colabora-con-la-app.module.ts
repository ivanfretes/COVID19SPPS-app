import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaboraConLaAppPageRoutingModule } from './colabora-con-la-app-routing.module';

import { ColaboraConLaAppPage } from './colabora-con-la-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaboraConLaAppPageRoutingModule
  ],
  declarations: [ColaboraConLaAppPage]
})
export class ColaboraConLaAppPageModule {}
