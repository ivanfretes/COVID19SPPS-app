import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ProfesionalesDetailPage } from '../profesionales-detail/profesionales-detail.page';
import { IProfesional } from 'src/models/profesional';

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
    let profesionales : IProfesional[] = [
      {
        nro_socio : 240,
        nombre_apellido : 'Lic. Franca La Carrubba',
        registro_nro : 63,
        telefono_celular : `0981 417 533 / francalac@googlemail.com`,
        hora_dia_disponible : 'lunes, miercoles, jueves a partir 20:30 hs',
        modalidad_atencion : 'Email',
        profesion_rama : 'psicologia'
      }
    ]

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
