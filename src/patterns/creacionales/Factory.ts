// Forma mas controlada de crear objetos sin especificar la clase exacta que se creara. Proporciona una interfaz para crear objetos en una subclase, lo que permite a la clase delegar la responsabilidad de la creacion de objetos a una o varias subclases. Util cuando se necesita dar alta flexibilidad al codigo.

// Interfaz Product que define las operaciones que se pueden realizar en un producto.
interface Product {
  operation(): string;
}

// Clases que implementan la interfaz Product
class ConcreteProductA implements Product {
  public operation(): string {
    return "Resultado de Producto A";
  }
}

class ConcreteProductB implements Product {
  public operation(): string {
    return "Resultado de Producto B";
  }
}

// Clase abstracta Creator que define el factoryMethod() que debe ser implementado por las subclases:

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    // Llamamos al factoryMethod() para crear un objecto Product
    const product = this.factoryMethod();

    // Usamos el objeto Product creado.
    return `Creator: El mismo codigo del creador ha funcionado con ${product.operation()}`;
  }
}

// Creamos varias subclases de Creator que implementan el metodo factoryMethod() y devuelven una instancia de una de las clases ConcreteProduct

class ConcreteCreatorA extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// Ahora podemos utilizar este patron para crear objetos Product sin tener que especificar la clase exacta que se creara en cada caso:

function clientCode(creator: Creator) {
  console.log(creator.someOperation());
}

console.log("Cliente: Probando ConcreteCreatorA...");
clientCode(new ConcreteCreatorA());

console.log("Cliente: Probando ConcreteCreatorB...");
clientCode(new ConcreteCreatorB());
