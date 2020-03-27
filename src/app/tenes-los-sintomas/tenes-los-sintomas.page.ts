import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

const MAX_EDAD = 100
const MIN_EDAD = 1

@Component({
  selector: 'app-tenes-los-sintomas',
  templateUrl: './tenes-los-sintomas.page.html',
  styleUrls: ['./tenes-los-sintomas.page.scss'],
})
export class TenesLosSintomasPage implements OnInit {

  cuestionarioForm : FormGroup;
  
  constructor(
    private formBuilder: FormBuilder) {
      this.cuestionarioForm = this.formBuilder.group({
        como_te_sintis : 'M', // Como te sentis
        sexo : 'M', // genero
        edad : '', // Edad
        viajaste : 'N', // Viajaste recientemente
        contacto_covid19 : 'N', // Contacto o zona de Covid
        fiebre_mas_38 : 'N', // Fiebre > 38
        dolor_cabeza : 'N',
        tos : 'N',
        goteo_nasal : 'N',
        dificultad_respirar : 'N', // 
        enfermedades_relacionadas : '', //
        trabajas_con_pacientes : 'N',
        ciudad_de_residencia : '',
        barrio_de_residencia : '',
        saliste_de_casa_ultimamente : 'N', // Si saliste de tu casa ultimamente
        referencia_de_ciudad : '', // Info de referencia de la zona donde vive,
     es_prueba : 'S', // Envias para curiosear la app
      })
  }

  onSubmit(cuestionarioForm) {
    
    alert('Por el momento el test no se encuentra disponible')
    
    /*if (isNaN(cuestionarioForm.edad) || 
      cuestionarioForm.edad < MIN_EDAD ||
      cuestionarioForm.edad > MAX_EDAD){
        alert('Edad debe ser un número valido')
        return;
    }
      
    if (!isNaN(cuestionarioForm.ciudad_de_residencia.trim()) ||
        cuestionarioForm.ciudad_de_residencia.trim() == ''){
      alert('Por favor indique su ciudad')
      return;
    }

    console.log(cuestionarioForm)*/
    
  }

  ngOnInit() {
  }

}
