"use strict";
// Minimiza el uso de memoria al compartir tanto como sea posible el estado común entre multiples objetos, es decir, utiliza un objeto compartido para representar ese estado común y luego utiliza objetos únicos para representar el estado único de cada objeto.
// Flyweight
// Clase Flyweight tiene un estado compartido que se pasa en el constructor y un estado único que se pasa en el método operation(). El método operation() imprime el estado compartido y el estado único del objeto.
class Flyweight {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }
    operation(uniqueState) {
        console.log(`Flyweight: Compartido "${this.sharedState}" y único "${uniqueState}".`);
    }
}
// FlyweightFactory que actúa como un repositorio de objetos Flyweight y los crea bajo demanda.
class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }
    // El método getFlyweight devuelve un objeto Flyweight existente o crea uno nuevo si no existe
    getFlyweight(sharedState) {
        if (!this.flyweights[sharedState]) {
            this.flyweights[sharedState] = new Flyweight(sharedState);
        }
        return this.flyweights[sharedState];
    }
    listFlyweights() {
        const count = Object.keys(this.flyweights).length;
        console.log(`FlyweightFactory: Total de flyweights creados: ${count}`);
        for (const sharedState in this.flyweights) {
            console.log(this.flyweights[sharedState]);
        }
    }
}
// Uso del Flyweight
const factoryOne = new FlyweightFactory();
const flyweightOne = factoryOne.getFlyweight("Compartido"); // Flyweight: Compartido "Compartido" y único "Compartido".
flyweightOne.operation("A"); // Flyweight: Compartido "Compartido" y único "A".
const flyweightTwo = factoryOne.getFlyweight("Compartido"); //
flyweightTwo.operation("B"); // Flyweight: Compartido "Compartido" y único "B".
const flyweightThree = factoryOne.getFlyweight("Compartido");
flyweightThree.operation("C"); // Flyweight: Compartido "Compartido" y único "C".
const flyweightFour = factoryOne.getFlyweight("No compartido");
flyweightFour.operation("D"); // Flyweight: Compartido "No compartido" y único "D".
factoryOne.listFlyweights(); // FlyweightFactory: Total de flyweights creados: 4
//# sourceMappingURL=Flyweight.js.map