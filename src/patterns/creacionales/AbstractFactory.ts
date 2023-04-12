// Proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. En TS se puede implementar este patron utilizando interfaces y clases abstractas.

// Interfaz abstracta para la fabrica de productos A
interface AbstractProductA {
  methodA(): string;
}

// Interfaz abstracta para la fabrica de productos B
interface AbstractProductB {
  methodB(): number;
}

// Clase abstracta para la fabrica abstracta
abstract class AbstractFactory {
  abstract createProductA(): AbstractProductA;
  abstract createProductB(): AbstractProductB;
}

// Implementacion concreta de la fabrica abstracta
class ConcreteFactory implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

// Implementacion concreta del producto A
class ConcreteProductA1 implements AbstractProductA {
  methodA(): string {
    return "Método A de ConcreteProductA";
  }
}

// Implementacion concreta del producto B
class ConcreteProductB1 implements AbstractProductB {
  methodB(): number {
    return 123;
  }
}

// Utilizamos la fabrica abstracta para crear los productos
const factory: AbstractFactory = new ConcreteFactory();
const productA: AbstractProductA = factory.createProductA();
const productB: AbstractProductB = factory.createProductB();

// Llamamos a los metodos de los productos
console.log(productA.methodA()); // Metodo A de ConcreteProductA
console.log(productB.methodB()); // 123
