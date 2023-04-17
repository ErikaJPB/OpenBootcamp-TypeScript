"use strict";
// Se utiliza para crear nuevos objetos duplicados de un objeto existente, sin tener que crear una nueva instancia cada vez. En vez de crear la instancia se clona el objeto original.
class ConcretePrototype {
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }
    clone() {
        return new ConcretePrototype(this.property1, this.property2);
    }
}
// Creamos un objeto prototype
const prototype = new ConcretePrototype("Valor1", 123);
// Clonamos el objeto prototype
const clone1 = prototype.clone();
// Modificamos el valor de la propiedad property1 del objeto clonado
clone1.property1 = "Valor2";
// Clonamos el objeto prototype de nuevo
const clone2 = prototype.clone();
console.log(clone1.property1); // Valor2
console.log(clone2.property2); // 123
console.log(clone2.property1); // Valor1
console.log(clone2.property2); // 123
//# sourceMappingURL=Prototype.js.map