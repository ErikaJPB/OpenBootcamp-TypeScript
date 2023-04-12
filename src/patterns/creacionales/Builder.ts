// Se utiliza para construir objetos complejos paso a paso. Utiliza una variedad de algoritmos y combinaciones de objetos. Este patron separa la construccion de un objeto complejo de su representacion, de modo que el mismo proceso de construccion puede crear diferentes representaciones. En TS, para implementar el patrón Builder, primero definimos una interfaz Builder que define los métodos necesarios para construir el objeto complejo. Luego, creamos una clase Director que utiliza el objeto Builder para construir el objeto complejo. Por último, creamos una clase ConcreteBuilder que implementa la interfaz Builder y proporciona la implementación concreta para construir el objeto complejo.

// Product
class Pizza {
  private _dough: string;
  private _sauce: string;
  private _toppings: string[];

  constructor(dough: string, sauce: string, toppings: string[]) {
    this._dough = dough;
    this._sauce = sauce;
    this._toppings = toppings;
  }

  public get dough(): string {
    return this._dough;
  }

  public get sauce(): string {
    return this._sauce;
  }

  public get toppings(): string[] {
    return this._toppings;
  }

  public describe(): string {
    return `Pizza con ${this.dough} de masa, ${
      this.sauce
    } de salsa y los siguientes ingredientes: ${this.toppings.join(", ")}.`;
  }
}

// Builder

interface PizzaBuilder {
  setDough(dough: string): void;
  setSauce(sauce: string): void;
  setToppings(toppings: string[]): void;
  getPizza(): Pizza;
}

// Concrete Builder

class MargheritaPizzaBuilder implements PizzaBuilder {
  private _pizza: Pizza;

  constructor() {
    this._pizza = new Pizza("", "", []);
  }

  public setDough(dough: string): void {
    this._pizza = new Pizza(dough, this._pizza.sauce, this._pizza.toppings);
  }

  public setSauce(sauce: string): void {
    this._pizza = new Pizza(this._pizza.dough, sauce, this._pizza.toppings);
  }

  public setToppings(toppings: string[]): void {
    this._pizza = new Pizza(this._pizza.dough, this._pizza.sauce, toppings);
  }

  public getPizza(): Pizza {
    return this._pizza;
  }
}

// Director
class PizzaMaker {
  private _builder: PizzaBuilder;

  constructor(builder: PizzaBuilder) {
    this._builder = builder;
  }

  public makePizza(): void {
    this._builder.setDough("masa fina");
    this._builder.setSauce("salsa de tomate");
    this._builder.setToppings(["mozzarella", "albahaca"]);
  }

  public getPizza(): Pizza {
    return this._builder.getPizza();
  }
}

// Uso de Builder

const margheritaBuilder: PizzaBuilder = new MargheritaPizzaBuilder();
const pizzaMaker: PizzaMaker = new PizzaMaker(margheritaBuilder);
pizzaMaker.makePizza();

const pizza: Pizza = pizzaMaker.getPizza();
console.log(pizza.describe()); // Pizza con masa fina, salsa de tomate de salsa y los siguientes ingredientes: mozzarella, albahaca.
