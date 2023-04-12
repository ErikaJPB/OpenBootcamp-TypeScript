// Minimiza el uso de memoria al compartir tanto como sea posible el estado común entre multiples objetos, es decir, utiliza un objeto compartido para representar ese estado común y luego utiliza objetos únicos para representar el estado único de cada objeto.

// Flyweight

// Flyweight
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

// FlyweightFactory
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

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
const flyweightOne: Flyweight = factoryOne.getFlyweight("Compartido");
flyweightOne.operation("A");
const flyweightTwo: Flyweight = factoryOne.getFlyweight("Compartido");
flyweightTwo.operation("B");
const flyweightThree: Flyweight = factoryOne.getFlyweight("Compartido");
flyweightThree.operation("C");
const flyweightFour: Flyweight = factoryOne.getFlyweight("No compartido");
flyweightFour.operation("D");
factoryOne.listFlyweights();
