import { Curso } from "./Curso";

// Clases
export class Estudiante {
  //Propiedades de clase
  nombre: string;
  apellido?: string;
  cursos: Curso[];

  private ID: string = "12345";

  //Constructor
  constructor(nombre: string, cursos: Curso[], apellido?: string) {
    //Inicializamos las propiedades
    this.nombre = nombre;
    if (apellido) {
      this.apellido = apellido;
    }
    this.apellido = apellido ? apellido : "";
    this.cursos = cursos;
  }

  // ** GETTERS **
  //   No es un método es una propiedad funcional
  //Cuando es solicitada se ejecuta una función completa.

  get horasEstudiadas(): number {
    let horasEstudiadas = 0;
    this.cursos.forEach((curso: Curso) => {
      horasEstudiadas += curso.horas;
    });
    return horasEstudiadas;
  }

  // ** SETTERS **

  set ID_Estudiante(id: string) {
    this.ID = id;
  }
}
