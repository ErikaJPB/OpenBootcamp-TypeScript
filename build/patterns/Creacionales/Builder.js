"use strict";
// Se utiliza para construir objetos complejos paso a paso. Utiliza una variedad de algoritmos y combinaciones de objetos. Este patron separa la construccion de un objeto complejo de su representacion, de modo que el mismo proceso de construccion puede crear diferentes representaciones. En TS, para implementar el patrón Builder, primero definimos una interfaz Builder que define los métodos necesarios para construir el objeto complejo. Luego, creamos una clase Director que utiliza el objeto Builder para construir el objeto complejo. Por último, creamos una clase ConcreteBuilder que implementa la interfaz Builder y proporciona la implementación concreta para construir el objeto complejo.
// Product
class Pizza {
    constructor(dough, sauce, toppings) {
        this._dough = dough;
        this._sauce = sauce;
        this._toppings = toppings;
    }
    get dough() {
        return this._dough;
    }
    get sauce() {
        return this._sauce;
    }
    get toppings() {
        return this._toppings;
    }
    describe() {
        return `Pizza con ${this.dough} de masa, ${this.sauce} de salsa y los siguientes ingredientes: ${this.toppings.join(", ")}.`;
    }
}
// Concrete Builder
class MargheritaPizzaBuilder {
    constructor() {
        this._pizza = new Pizza("", "", []);
    }
    setDough(dough) {
        this._pizza = new Pizza(dough, this._pizza.sauce, this._pizza.toppings);
    }
    setSauce(sauce) {
        this._pizza = new Pizza(this._pizza.dough, sauce, this._pizza.toppings);
    }
    setToppings(toppings) {
        this._pizza = new Pizza(this._pizza.dough, this._pizza.sauce, toppings);
    }
    getPizza() {
        return this._pizza;
    }
}
// Director
class PizzaMaker {
    constructor(builder) {
        this._builder = builder;
    }
    makePizza() {
        this._builder.setDough("masa fina");
        this._builder.setSauce("salsa de tomate");
        this._builder.setToppings(["mozzarella", "albahaca"]);
    }
    getPizza() {
        return this._builder.getPizza();
    }
}
// Uso de Builder
const margheritaBuilder = new MargheritaPizzaBuilder();
const pizzaMaker = new PizzaMaker(margheritaBuilder);
pizzaMaker.makePizza();
const pizza = pizzaMaker.getPizza();
console.log(pizza.describe()); // Pizza con masa fina, salsa de tomate de salsa y los siguientes ingredientes: mozzarella, albahaca.
//# sourceMappingURL=Builder.js.map