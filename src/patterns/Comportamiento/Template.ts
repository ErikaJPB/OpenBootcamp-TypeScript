// Define la estructura básica de un algoritmo en una superclase y permite que las subclases implementen o redefinan partes del algoritmo sin cambiar su estructura global.

// Clase abstracta que define la estructura básica del algoritmo
abstract class Algorithm {
  // Método Template que define la estructura del algoritmo
  public templateMethod(): void {
    this.step1();
    this.step2();
    this.step3();
  }

  // Método abstracto que debe ser implementado por las subclases
  protected abstract step1(): void;

  // Método con implementación predeterminada que puede ser sobrescrito por las subclases
  protected step2(): void {
    console.log("Realizando Step 2");
  }

  // Método con implementación predeterminada que puede ser sobrescrito por las subclases
  protected step3(): void {
    console.log("Realizando Step 3");
  }
}

// Implementación concreta de Algorithm
class ConcreteAlgorithm extends Algorithm {
  protected step1(): void {
    console.log("Realizando Step 1");
  }

  protected step3(): void {
    console.log("Realizando Step 3 Especializado");
  }
}
// Ejemplo: Tax Calculator

// Clase abstracta que define la estructura básica del algoritmo de cálculo de impuestos

abstract class TaxCalculator {
  // Método Template que define la estructura del algoritmo
  public calculateTax(price: number): number {
    const taxRate = this.getTaxRate();
    const taxableAmount = this.calculateTaxableAmount(price);
    const tax = taxableAmount * taxRate;
    return tax;
  }

  // Método abstracto que debe ser implementado por las subclases
  protected abstract getTaxRate(): number;

  // Método abstracto que debe ser implementado por las subclases
  protected abstract calculateTaxableAmount(price: number): number;
}

// Implementación concreta de TaxCalculator para calcular impuestos en EE. UU.
class USATaxCalculator extends TaxCalculator {
  protected getTaxRate(): number {
    return 0.08;
  }

  protected calculateTaxableAmount(price: number): number {
    return price;
  }
}

// Implementación concreta de TaxCalculator para calcular impuestos en Colombia
class ColombiaTaxCalculator extends TaxCalculator {
  protected getTaxRate(): number {
    return 0.19;
  }

  protected calculateTaxableAmount(price: number): number {
    return price * 0.95; // 5% de descuento en Colombia
  }
}

// Creación de un objeto USATaxCalculator
const usaCalculator = new USATaxCalculator();

// Cálculo de impuestos para un producto con precio de $100 en EE.UU.
console.log(usaCalculator.calculateTax(100)); // 8

// Creación de un objeto ColombiaTaxCalculator
const colombiaCalculator = new ColombiaTaxCalculator();

// Cálculo de impuestos para un producto con precio de $100 en Colombia
console.log(colombiaCalculator.calculateTax(100)); // 18.05
