console.log("Hola Typescript");

// Declaracion de variables:

var name: string = "Erika";

console.log("Hola, " + name);
console.log("Qué tal ", name, "?");
console.log(`¿Como han ido las vacaciones, ${name} ?`);

let email = "erikajpinedab@gmail.com";
console.log(`El email de ${name} es ${email}`);

const PI: number = 3.1416;
console.log(`El valor de PI es ${PI}`);

var apellido: any = "Pineda";
// tipo any permite cambiar el tipo de dato
apellido = 2;

var error: boolean;
error = false;

console.log(`Hay error?: ${error}`);

//Instanciar múltiples variables

let a: string, b: boolean, c: number; //3 variables sin valor inicial

a = "Typescript";
b = true;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null, undefined

// Lista de cadena de texto
let listaTareas: string[] = ["Tarea 1", "Tarea 2", "Tarea 3"];

// Combinación de cadenas de texto
let valores: (string | number | boolean)[] = [false, "hola", true, 56];

//Enumerados

enum Estados {
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let estadoTarea: Estados = Estados.Pendiente;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

// podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.Pendiente,
  urgencia: 10,
};

console.log(`Tarea: ${tarea1.nombre}`);

// Asignación múltiple de variables

let miTarea = {
  titulo: "Mi tarea",
  estado: Estados.Completado,
  urgencia: 1,
};

// Declaración 1 a 1 de variables
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

// ** Factor Spread(Propagación)

// En asignación de variables
let { titulo, estado, urgencia } = miTarea;

// En listas
let listaCompraLunes: string[] = ["Leche", "Agua", "Azucar"];
let listaCompraMartes: string[] = [
  ...listaCompraLunes,
  "Carne",
  "Cafe",
  "Huevos",
];
let listaCompraMiercoles: string[] = ["Pan", "Queso"];
let listaCompraSemana = [
  ...listaCompraLunes,
  ...listaCompraMartes,
  ...listaCompraMiercoles,
];

// En Objetos
let estadoApp = {
  usuario: "Admin",
  session: 3,
  jwt: "Bearer123456789",
};

// cambiar valor por propagación
let nuevoEstado = {
  ...estadoApp,
  session: 4,
};

// Types de TypeScript
type Producto = {
  precio: number;
  nombre: string;
  anio: number;
};

let coche: Producto = {
  nombre: "Audi",
  precio: 45000,
  anio: 2010,
};

// ** Condicionales

// Operadores Ternarios
console.log(
  coche.anio < 2010
    ? `Coche: ${coche.nombre} es viejo`
    : `Coche: ${coche.nombre} es nuevo`
);

// If - else
if (error) {
  console.log("Hay error");
} else {
  console.log("No hay error");
}

//else if
if (coche.anio < 2010) {
  console.log(`Coche: ${coche.nombre} es viejo`);
} else if (coche.anio === 2010) {
  console.log(`Coche: ${coche.nombre} es del 2010`);
} else {
  console.log(`Coche: ${coche.nombre} es nuevo`);
}

// Switch
switch (tarea1.estado) {
  case Estados.Completado:
    console.log("La tarea está completada");
    break;
  case Estados.Incompleto:
    console.log("La tarea no esta completada");
    break;
  case Estados.Pendiente:
    console.log("La tarea está pendiente");
    break;
  default:
    break;
}

// ** Bucles

let listaTareasNueva: Tarea[] = [
  {
    nombre: "Tarea 1",
    estado: Estados.Completado,
    urgencia: 2,
  },
  {
    nombre: "Tarea 2",
    estado: Estados.Pendiente,
    urgencia: 0,
  },
  {
    nombre: "Tarea 3",
    estado: Estados.Completado,
    urgencia: 15,
  },
];

// For Each
listaTareasNueva.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} - ${tarea.nombre}`);
});

// For Of
for (const tarea of listaTareasNueva) {
  console.log(`${tarea.nombre}`);
}

// For Clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
  const tarea = listaTareasNueva[index];
  console.log(`${index} - ${tarea.nombre}`);
}

// Bucle While
while (tarea1.estado !== Estados.Completado) {
  if (tarea1.urgencia === 5) {
    tarea1.estado = Estados.Completado;
    break;
  } else {
    tarea1.urgencia++;
  }
}

// Bucle Do While
do {
  tarea1.urgencia++;
  tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
