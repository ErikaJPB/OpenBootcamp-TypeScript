"use strict";
// Se utiliza para agregar funcionalidad a un objeto dinámicamente, sin necesidad de crear una subclase para cada combinación posible de funcionalidades. Utiliza la composición en lugar de la herencia para agregar funcionalidad.
// Componente concreto
class ConcreteComponentOne {
    operationOne() {
        return "Componente Uno concreto";
    }
}
// Decorador base
class Decorator {
    constructor(component) {
        this._component = component;
    }
}
// Decorador concreto
class ConcreteDecoratorA extends Decorator {
    constructor(component) {
        super(component);
    }
    operationOne() {
        return `Operación Uno del decorador A (${this._component.operationOne()})`;
    }
}
// Decorador concreto
class ConcreteDecoratorB extends Decorator {
    constructor(component) {
        super(component);
    }
    operationOne() {
        return `Operación Uno del decorador B (${this._component.operationOne()})`;
    }
}
// Uso del Decorator
const concreteComponentOne = new ConcreteComponentOne();
const decoratedComponentA = new ConcreteDecoratorA(concreteComponentOne);
const decoratedComponentB = new ConcreteDecoratorB(decoratedComponentA);
console.log(concreteComponentOne.operationOne()); // Componente Uno concreto
console.log(decoratedComponentA.operationOne()); // Operación Uno del decorador A (Componente Uno concreto)
console.log(decoratedComponentB.operationOne()); // Operación Uno del decorador B (Operación Uno del decorador A (Componente Uno concreto))
//# sourceMappingURL=Decorator.js.map