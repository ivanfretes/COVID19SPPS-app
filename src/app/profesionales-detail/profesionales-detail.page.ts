import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { IProfesional } from 'src/models/profesional';

@Component({
  selector: 'app-profesionales-detail',
  templateUrl: './profesionales-detail.page.html',
  styleUrls: ['./profesionales-detail.page.scss'],
})
export class ProfesionalesDetailPage implements OnInit {

  profesional : IProfesional = {
    email : '',
    hora_dia_disponible : '',
    nombre_apellido : '',
    nro_socio : '',
    profesion_rama : '',
    registro_nro : '',
    telefono_celular : '',
    modalidad_atencion : ''
  }
  subjectText : "Buenas, me comunico desde COVID19py App"

  constructor(
    public navParams : NavParams,
    public modalCtrl : ModalController
  ) { 
    
  }

  ngOnInit() {
    this.profesional = this.navParams.get('profesional');
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  contactarPorSkype(){
    alert(`Busque en skype la cuenta: ${this.profesional.email}`)  
  }

  contactarProfesional(){
    console.log(this.profesional)
  }
}


