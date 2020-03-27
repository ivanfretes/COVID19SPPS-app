import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ProfesionalesDetailPage } from '../profesionales-detail/profesionales-detail.page';
import { IProfesional } from 'src/models/profesional';
import { profesionales } from 'src/mocks/profesionales';

@Component({
  selector: 'app-profesionales-list',
  templateUrl: './profesionales-list.page.html',
  styleUrls: ['./profesionales-list.page.scss'],
})
export class ProfesionalesListPage implements OnInit {
  profesionales : IProfesional[] = []
  
  constructor(
    public modalCtrl : ModalController,
    public alertCtrl : AlertController) { }

  /**
   * Retorna el listado de profesionales disponibles
   */
  getProfesionalesList(){
    this.profesionales = profesionales
  }

  ngOnInit() {
    this.getProfesionalesList()
  }


  /**
   * Visualiza mediante un modal el detalle de un profesional
   * @param profesional
   */
  async verDetalleProfesional(profesional : any){
    let modalCtrl = await this.modalCtrl.create({
      component : ProfesionalesDetailPage,
      componentProps : { profesional }
    });
    modalCtrl.present();
  }

}
