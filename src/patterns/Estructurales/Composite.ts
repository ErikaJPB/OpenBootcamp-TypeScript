// Se utiliza para tratar los objetos individuales y grupos de objetos de la misma manera, permitiendo que los clientes trabajen con ellos de manera uniforme. Utiliza una estructura de árbol para representar los objetos individuales y grupos de objetos.

// Componente base

abstract class Component {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public abstract operation(): void;
}

// Componente hoja

class Leaf extends Component {
  constructor(name: string) {
    super(name);
  }

  public operation(): void {
    console.log(`Operación en ${this._name}`);
  }
}

// Componente compuesto

class Composite extends Component {
  private _children: Component[] = [];

  constructor(name: string) {
    super(name);
  }

  public add(component: Component): void {
    this._children.push(component);
  }

  public remove(component: Component): void {
    const index = this._children.indexOf(component);
    if (index !== -1) {
      this._children.splice(index, 1);
    }
  }

  public operation(): void {
    console.log(`Operación en ${this._name}`);
    for (const child of this._children) {
      child.operation();
    }
  }
}

// Uso del Composite

const root: Composite = new Composite("root");
const branch1: Composite = new Composite("branch1");
const branch2: Composite = new Composite("branch2");

const leaf1: Leaf = new Leaf("leaf1");
const leaf2: Leaf = new Leaf("leaf2");
const leaf3: Leaf = new Leaf("leaf3");

root.add(branch1);
branch1.add(leaf1);
root.add(branch2);
branch2.add(leaf2);
branch2.add(leaf3);

root.operation();
