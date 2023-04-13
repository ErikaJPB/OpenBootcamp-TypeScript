// Minimiza el uso de memoria al compartir tanto como sea posible el estado común entre multiples objetos, es decir, utiliza un objeto compartido para representar ese estado común y luego utiliza objetos únicos para representar el estado único de cada objeto.

// Flyweight

// Clase Flyweight tiene un estado compartido que se pasa en el constructor y un estado único que se pasa en el método operation(). El método operation() imprime el estado compartido y el estado único del objeto.
class Flyweight {
  private sharedState: string;

  constructor(sharedState: string) {
    this.sharedState = sharedState;
  }

  public operation(uniqueState: string): void {
    console.log(
      `Flyweight: Compartido "${this.sharedState}" y único "${uniqueState}".`
    );
  }
}

// FlyweightFactory que actúa como un repositorio de objetos Flyweight y los crea bajo demanda.
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  // El método getFlyweight devuelve un objeto Flyweight existente o crea uno nuevo si no existe
  public getFlyweight(sharedState: string): Flyweight {
    if (!this.flyweights[sharedState]) {
      this.flyweights[sharedState] = new Flyweight(sharedState);
    }
    return this.flyweights[sharedState];
  }

  public listFlyweights(): void {
    const count = Object.keys(this.flyweights).length;
    console.log(`FlyweightFactory: Total de flyweights creados: ${count}`);
    for (const sharedState in this.flyweights) {
      console.log(this.flyweights[sharedState]);
    }
  }
}

// Uso del Flyweight
const factoryOne: FlyweightFactory = new FlyweightFactory();
const flyweightOne: Flyweight = factoryOne.getFlyweight("Compartido"); // Flyweight: Compartido "Compartido" y único "Compartido".
flyweightOne.operation("A"); // Flyweight: Compartido "Compartido" y único "A".
const flyweightTwo: Flyweight = factoryOne.getFlyweight("Compartido"); //
flyweightTwo.operation("B"); // Flyweight: Compartido "Compartido" y único "B".
const flyweightThree: Flyweight = factoryOne.getFlyweight("Compartido");
flyweightThree.operation("C"); // Flyweight: Compartido "Compartido" y único "C".
const flyweightFour: Flyweight = factoryOne.getFlyweight("No compartido");
flyweightFour.operation("D"); // Flyweight: Compartido "No compartido" y único "D".
factoryOne.listFlyweights(); // FlyweightFactory: Total de flyweights creados: 4
