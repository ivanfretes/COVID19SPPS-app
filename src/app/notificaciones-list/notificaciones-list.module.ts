import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesListPageRoutingModule } from './notificaciones-list-routing.module';

import { NotificacionesListPage } from './notificaciones-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesListPageRoutingModule
  ],
  declarations: [NotificacionesListPage]
})
export class NotificacionesListPageModule {}
