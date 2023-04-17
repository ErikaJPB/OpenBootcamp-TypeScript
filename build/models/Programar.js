"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, descripcion, completada, urgencia) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;
        this.urgencia = urgencia;
    }
    resumen() {
        return `Tarea de Programacion : ${this.titulo} - ${this.completada}`;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=Programar.js.map