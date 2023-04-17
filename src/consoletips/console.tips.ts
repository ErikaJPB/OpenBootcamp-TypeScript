// console log

console.log("Hola");

let lista = ["Uno", "Dos", "Tres"];

lista.forEach(() => console.log);

let nombre = "Erika";

console.log(`Hola ${nombre}!`);

// console clear

console.clear();

// console Assert

var a: number = 100;

console.assert(a === 1000, "Error", `Otro mensaje: ${a}`);

// console Count

function contador(texto: string) {
  console.count(texto);
}

contador("Hola"); //1
contador("Adios"); // 1
contador("Hola"); // 2

console.countReset(); // reset contador

// console Info, warn, error

console.info("Texto informativo");
console.warn("Texto de advertencia");
console.error("Texto de error");

// Console Trace

function uno() {}

function dos() {}

function tres() {
  console.trace(); // Trazar por donde se ha ido ejecutando para llegar a este punto.
}

uno(); // inicia el trace por consola.

// console DIR = muestra valores de objetos de manera bonita.

let coche = {
  marca: "Volkswagen",
  modelo: "Polo",
  color: "Blanco",
  matricula: "ABC123",
  especificaciones: {
    motor: "2.0",
    cilindros: "4",
    potencia: "220",
  },
};

console.dir(coche);

// console table

console.table(coche);

// console.time - contabilizar el tiempo de ejecución

function espera() {
  for (let i = 0; i < 1000; i++) {
    // ...
  }
}
console.time("Prueba"); // inicia el cronometro
espera();
console.timeEnd("Prueba"); // finaliza el cronometro y contabiliza el tiempo que ha pasado.

// console group - Agrupaciones de console

console.group("Números");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();
