"use strict";
// Define la estructura básica de un algoritmo en una superclase y permite que las subclases implementen o redefinan partes del algoritmo sin cambiar su estructura global.
// Clase abstracta que define la estructura básica del algoritmo
class Algorithm {
    // Método Template que define la estructura del algoritmo
    templateMethod() {
        this.step1();
        this.step2();
        this.step3();
    }
    // Método con implementación predeterminada que puede ser sobrescrito por las subclases
    step2() {
        console.log("Realizando Step 2");
    }
    // Método con implementación predeterminada que puede ser sobrescrito por las subclases
    step3() {
        console.log("Realizando Step 3");
    }
}
// Implementación concreta de Algorithm
class ConcreteAlgorithm extends Algorithm {
    step1() {
        console.log("Realizando Step 1");
    }
    step3() {
        console.log("Realizando Step 3 Especializado");
    }
}
// Ejemplo: Tax Calculator
// Clase abstracta que define la estructura básica del algoritmo de cálculo de impuestos
class TaxCalculator {
    // Método Template que define la estructura del algoritmo
    calculateTax(price) {
        const taxRate = this.getTaxRate();
        const taxableAmount = this.calculateTaxableAmount(price);
        const tax = taxableAmount * taxRate;
        return tax;
    }
}
// Implementación concreta de TaxCalculator para calcular impuestos en EE. UU.
class USATaxCalculator extends TaxCalculator {
    getTaxRate() {
        return 0.08;
    }
    calculateTaxableAmount(price) {
        return price;
    }
}
// Implementación concreta de TaxCalculator para calcular impuestos en Colombia
class ColombiaTaxCalculator extends TaxCalculator {
    getTaxRate() {
        return 0.19;
    }
    calculateTaxableAmount(price) {
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
//# sourceMappingURL=Template.js.map