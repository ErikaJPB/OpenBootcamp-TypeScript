"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
// Clases
class Estudiante {
    //Constructor
    constructor(nombre, cursos, apellido) {
        this.ID = "12345";
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
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    // ** SETTERS **
    set ID_Estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map