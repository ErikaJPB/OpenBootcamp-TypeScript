// Se utiliza para agregar funcionalidad a un objeto dinámicamente, sin necesidad de crear una subclase para cada combinación posible de funcionalidades. Utiliza la composición en lugar de la herencia para agregar funcionalidad.

// Componente base
interface ComponentOne {
  operationOne(): string;
}

// Componente concreto
class ConcreteComponentOne implements ComponentOne {
  public operationOne(): string {
    return "Componente Uno concreto";
  }
}

// Decorador base
abstract class Decorator implements ComponentOne {
  protected _component: ComponentOne;

  constructor(component: ComponentOne) {
    this._component = component;
  }

  public abstract operationOne(): string;
}

// Decorador concreto
class ConcreteDecoratorA extends Decorator {
  constructor(component: ComponentOne) {
    super(component);
  }

  public operationOne(): string {
    return `Operación Uno del decorador A (${this._component.operationOne()})`;
  }
}

// Decorador concreto
class ConcreteDecoratorB extends Decorator {
  constructor(component: ComponentOne) {
    super(component);
  }

  public operationOne(): string {
    return `Operación Uno del decorador B (${this._component.operationOne()})`;
  }
}

// Uso del Decorator
const concreteComponentOne: ComponentOne = new ConcreteComponentOne();

const decoratedComponentA: ComponentOne = new ConcreteDecoratorA(
  concreteComponentOne
);
const decoratedComponentB: ComponentOne = new ConcreteDecoratorB(
  decoratedComponentA
);

console.log(concreteComponentOne.operationOne()); // Componente Uno concreto
console.log(decoratedComponentA.operationOne()); // Operación Uno del decorador A (Componente Uno concreto)
console.log(decoratedComponentB.operationOne()); // Operación Uno del decorador B (Operación Uno del decorador A (Componente Uno concreto))
