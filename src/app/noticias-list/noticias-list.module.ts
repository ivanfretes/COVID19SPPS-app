import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasListPageRoutingModule } from './noticias-list-routing.module';

import { NoticiasListPage } from './noticias-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasListPageRoutingModule
  ],
  declarations: [NoticiasListPage]
})
export class NoticiasListPageModule {}
