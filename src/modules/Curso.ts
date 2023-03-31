import { Estudiante } from "./Estudiante";

export class Curso {
  //Propiedades de clase
  nombre: string;
  horas: number;

  constructor(nombre: string, horas: number) {
    this.nombre = nombre;
    this.horas = horas;
  }
}
