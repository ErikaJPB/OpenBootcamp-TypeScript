// Se utiliza para separar la abstracción de una clase de su implementación, permitiendo que ambas cambien independientemente sin afectar a la otra. Utiliza composición en lugar de herencia para lograr esta separación.

// Abstracción (interfaz o clase abstracta)

interface Shape {
  draw(): void;
}

// Implementación(interfaz o clase abstracta)

interface Color {
  fill(): void;
}

// Implementación concreta

class Green implements Color {
  public fill(): void {
    console.log("Rellenando con color verde");
  }
}

class Red implements Color {
  public fill(): void {
    console.log("Rellenando con color rojo");
  }
}

// Clase abstracta que utiliza una implementación

abstract class AbstractShape implements Shape {
  protected _color: Color;

  constructor(color: Color) {
    this._color = color;
  }

  public abstract draw(): void;
}

// Clase concreta que utiliza una implementación

class Circle extends AbstractShape {
  constructor(color: Color) {
    super(color);
  }

  public draw(): void {
    console.log("Dibujando un circulo");
    this._color.fill();
  }
}

// Uso del Bridge

const red: Color = new Red();
const green: Color = new Green();

const redCircle: Shape = new Circle(red);
redCircle.draw();

const greenCircle: Shape = new Circle(green);
greenCircle.draw();
