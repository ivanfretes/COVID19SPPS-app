import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { IProfesional } from 'src/models/profesional';

@Component({
  selector: 'app-profesionales-detail',
  templateUrl: './profesionales-detail.page.html',
  styleUrls: ['./profesionales-detail.page.scss'],
})
export class ProfesionalesDetailPage implements OnInit {

  profesional : IProfesional
  subjectText : "Buenas, me comunico desde COVID19py App"

  constructor(
    public navParams : NavParams,
    public modalCtrl : ModalController
  ) { 
    this.profesional = this.navParams.get('profesional');
  }

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  contactarProfesional(){
    console.log(this.profesional)
  }
}


