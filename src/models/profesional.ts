export interface IProfesional { 
  nro_socio : number|string,
  nombre_apellido : string,
  registro_nro : number|string,
  telefono_celular : string,
  hora_dia_disponible : string,
  modalidad_atencion : string|string[],
  profesion_rama : string,
  email : string
}