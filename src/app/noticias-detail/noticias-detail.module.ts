import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasDetailPageRoutingModule } from './noticias-detail-routing.module';

import { NoticiasDetailPage } from './noticias-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasDetailPageRoutingModule
  ],
  declarations: [NoticiasDetailPage]
})
export class NoticiasDetailPageModule {}
