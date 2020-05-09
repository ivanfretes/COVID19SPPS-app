import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticuloDetailPageRoutingModule } from './articulo-detail-routing.module';

import { ArticuloDetailPage } from './articulo-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticuloDetailPageRoutingModule
  ],
  declarations: [ArticuloDetailPage]
})
export class ArticuloDetailPageModule {}
