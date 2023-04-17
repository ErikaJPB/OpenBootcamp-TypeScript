"use strict";
// Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. En TS se puede implementar este patron utilizando interfaces y clases abstractas.
// Clase abstracta para la fabrica abstracta
class AbstractFactory {
}
// Implementacion concreta de la fabrica abstracta
class ConcreteFactory {
    createProductA() {
        return new ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1();
    }
}
// Implementacion concreta del producto A
class ConcreteProductA1 {
    methodA() {
        return "Método A de ConcreteProductA";
    }
}
// Implementacion concreta del producto B
class ConcreteProductB1 {
    methodB() {
        return 123;
    }
}
// Utilizamos la fabrica abstracta para crear los productos
const factory = new ConcreteFactory();
const productA = factory.createProductA();
const productB = factory.createProductB();
// Llamamos a los metodos de los productos
console.log(productA.methodA()); // Metodo A de ConcreteProductA
console.log(productB.methodB()); // 123
//# sourceMappingURL=AbstractFactory.js.map