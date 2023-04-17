"use strict";
// Permite separar algoritmos de una estructura de objetos. Se utiliza cuando se tiene una estructura de objetos compleja y se desea agregar nuevas operaciones a los objetos sin modificar su código. Esto permite definir una nueva operación sin cambiar las clases de los elementos sobre los que trabaja.
// Clase abstracta que define la estructura de los elementos visitables
class Visitable {
}
// Clase concreta que implementa la interfaz Visitable
class ConcreteVisitableA extends Visitable {
    accept(visitor) {
        visitor.visitConcreteVisitableA(this);
    }
    operationA() {
        console.log("Operación A en ConcreteVisitableA");
    }
}
// Clase concreta que implementa la interfaz Visitable
class ConcreteVisitableB extends Visitable {
    accept(visitor) {
        visitor.visitConcreteVisitableB(this);
    }
    operationB() {
        console.log("Operación B en ConcreteVisitableB");
    }
}
// Implementación concreta de Visitor
class ConcreteVisitor {
    visitConcreteVisitableA(visitable) {
        console.log("Visitando ConcreteVisitableA");
        visitable.operationA();
    }
    visitConcreteVisitableB(visitable) {
        console.log("Visitando ConcreteVisitableB");
        visitable.operationB();
    }
}
// Uso de Visitor
// Creación de un array de elementos visitables
// Creación de un array de elementos visitables
const visitables = [
    new ConcreteVisitableA(),
    new ConcreteVisitableB(),
];
// Creación de un objeto ConcreteVisitor
const visitor = new ConcreteVisitor();
// Visita cada elemento en el array con el objeto ConcreteVisitor
for (const visitable of visitables) {
    visitable.accept(visitor);
}
//# sourceMappingURL=Visitor.js.map