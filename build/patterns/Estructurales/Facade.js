"use strict";
// Proporciona una interfaz simplificada y coherente para un sistema complejo, ocultar la complejidad del sistema, mejorar la modularidad y proporcionar un punto de control centralizado.
// Subsistema 1
class SubsystemOne {
    operationOne() {
        return "Operación del Subsistema 1";
    }
}
// Subsistema 2
class SubsystemTwo {
    operationTwo() {
        return "Operación del Subsistema 2";
    }
}
// Subsistema 3
class SubsystemThree {
    operationThree() {
        return "Operación del Subsistema 3";
    }
}
// Fachada
class Facade {
    constructor() {
        this.subsystemOne = new SubsystemOne();
        this.subsystemTwo = new SubsystemTwo();
        this.subsystemThree = new SubsystemThree();
    }
    operation() {
        let result = "Fachada realiza las siguientes operaciones:\n";
        result += this.subsystemOne.operationOne;
        result += "\n";
        result += this.subsystemTwo.operationTwo;
        result += "\n";
        result += this.subsystemThree.operationThree;
        return result;
    }
}
// Uso del facade
const facade = new Facade();
console.log(facade.operation()); // Fachada realiza las siguientes operaciones: Operación del Subsistema 1 Operación del Subsistema 2 Operación del Subsistema 3
//# sourceMappingURL=Facade.js.map