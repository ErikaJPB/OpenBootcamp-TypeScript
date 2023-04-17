"use strict";
// Se utiliza para separar la abstracción de una clase de su implementación, permitiendo que ambas cambien independientemente sin afectar a la otra. Utiliza composición en lugar de herencia para lograr esta separación.
// Implementación concreta
class Green {
    fill() {
        console.log("Rellenando con color verde");
    }
}
class Red {
    fill() {
        console.log("Rellenando con color rojo");
    }
}
// Clase abstracta que utiliza una implementación
class AbstractShape {
    constructor(color) {
        this._color = color;
    }
}
// Clase concreta que utiliza una implementación
class Circle extends AbstractShape {
    constructor(color) {
        super(color);
    }
    draw() {
        console.log("Dibujando un circulo");
        this._color.fill();
    }
}
// Uso del Bridge
const red = new Red();
const green = new Green();
const redCircle = new Circle(red);
redCircle.draw();
const greenCircle = new Circle(green);
greenCircle.draw();
//# sourceMappingURL=Bridge.js.map