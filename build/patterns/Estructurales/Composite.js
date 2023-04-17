"use strict";
// Se utiliza para tratar los objetos individuales y grupos de objetos de la misma manera, permitiendo que los clientes trabajen con ellos de manera uniforme. Utiliza una estructura de árbol para representar los objetos individuales y grupos de objetos.
// Componente base
class Component {
    constructor(name) {
        this._name = name;
    }
}
// Componente hoja
class Leaf extends Component {
    constructor(name) {
        super(name);
    }
    operation() {
        console.log(`Operación en ${this._name}`);
    }
}
// Componente compuesto
class Composite extends Component {
    constructor(name) {
        super(name);
        this._children = [];
    }
    add(component) {
        this._children.push(component);
    }
    remove(component) {
        const index = this._children.indexOf(component);
        if (index !== -1) {
            this._children.splice(index, 1);
        }
    }
    operation() {
        console.log(`Operación en ${this._name}`);
        for (const child of this._children) {
            child.operation();
        }
    }
}
// Uso del Composite
const root = new Composite("root");
const branch1 = new Composite("branch1");
const branch2 = new Composite("branch2");
const leaf1 = new Leaf("leaf1");
const leaf2 = new Leaf("leaf2");
const leaf3 = new Leaf("leaf3");
root.add(branch1);
branch1.add(leaf1);
root.add(branch2);
branch2.add(leaf2);
branch2.add(leaf3);
root.operation();
//# sourceMappingURL=Composite.js.map