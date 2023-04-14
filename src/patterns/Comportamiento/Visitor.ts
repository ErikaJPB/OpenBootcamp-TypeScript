// Permite separar algoritmos de una estructura de objetos. Se utiliza cuando se tiene una estructura de objetos compleja y se desea agregar nuevas operaciones a los objetos sin modificar su código. Esto permite definir una nueva operación sin cambiar las clases de los elementos sobre los que trabaja.

// Clase abstracta que define la estructura de los elementos visitables
abstract class Visitable {
  public abstract accept(visitor: Visitor): void;
}

// Clase concreta que implementa la interfaz Visitable
class ConcreteVisitableA extends Visitable {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteVisitableA(this);
  }

  public operationA(): void {
    console.log("Operación A en ConcreteVisitableA");
  }
}

// Clase concreta que implementa la interfaz Visitable
class ConcreteVisitableB extends Visitable {
  public accept(visitor: Visitor): void {
    visitor.visitConcreteVisitableB(this);
  }

  public operationB(): void {
    console.log("Operación B en ConcreteVisitableB");
  }
}

// Interfaz que define las operaciones del Visitor
interface Visitor {
  visitConcreteVisitableA(visitable: ConcreteVisitableA): void;
  visitConcreteVisitableB(visitable: ConcreteVisitableB): void;
}

// Implementación concreta de Visitor
class ConcreteVisitor implements Visitor {
  public visitConcreteVisitableA(visitable: ConcreteVisitableA): void {
    console.log("Visitando ConcreteVisitableA");
    visitable.operationA();
  }

  public visitConcreteVisitableB(visitable: ConcreteVisitableB): void {
    console.log("Visitando ConcreteVisitableB");
    visitable.operationB();
  }
}

// Uso de Visitor

// Creación de un array de elementos visitables

// Creación de un array de elementos visitables
const visitables: Visitable[] = [
  new ConcreteVisitableA(),
  new ConcreteVisitableB(),
];

// Creación de un objeto ConcreteVisitor
const visitor = new ConcreteVisitor();

// Visita cada elemento en el array con el objeto ConcreteVisitor
for (const visitable of visitables) {
  visitable.accept(visitor);
}
