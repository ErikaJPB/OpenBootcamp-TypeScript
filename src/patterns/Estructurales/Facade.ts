// Proporciona una interfaz simplificada y coherente para un sistema complejo, ocultar la complejidad del sistema, mejorar la modularidad y proporcionar un punto de control centralizado.

// Subsistema 1

class SubsystemOne {
  public operationOne(): string {
    return "Operación del Subsistema 1";
  }
}

// Subsistema 2
class SubsystemTwo {
  public operationTwo(): string {
    return "Operación del Subsistema 2";
  }
}

// Subsistema 3
class SubsystemThree {
  public operationThree(): string {
    return "Operación del Subsistema 3";
  }
}

// Fachada

class Facade {
  private subsystemOne: SubsystemOne;
  private subsystemTwo: SubsystemTwo;
  private subsystemThree: SubsystemThree;

  constructor() {
    this.subsystemOne = new SubsystemOne();
    this.subsystemTwo = new SubsystemTwo();
    this.subsystemThree = new SubsystemThree();
  }

  public operation(): string {
    let result = "Fachada realiza las siguientes operaciones:\n";
    result += this.subsystemOne.operationOne;
    result += "\n";
    result += this.subsystemTwo.operationTwo;
    result += "\n";
    result += this.subsystemThree.operationThree;
    return result;
  }
}

// Uso del facade

const facade: Facade = new Facade();
console.log(facade.operation()); // Fachada realiza las siguientes operaciones: Operación del Subsistema 1 Operación del Subsistema 2 Operación del Subsistema 3
