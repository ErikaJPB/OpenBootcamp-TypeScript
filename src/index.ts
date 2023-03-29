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

// Funciones

/**
 * Funcion que muestra un saludo por consola
 */

function saludar() {
  let nombre = "Erika";
  console.log(`Hola ${nombre}!`);
}

// Invocación de la función
saludar();

/**
 * Función que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */

function saludarPersona(nombre: string) {
  console.log(`Hola ${nombre}!`);
}

saludarPersona("Erika");
/**
 * Función que muestra un adios por consola a una persona
 * @param nombre Nombre de la persona a despedir por defecto sera Erika
 */

function despedirPersona(nombre: string = "Erika") {
  console.log(`Adios, ${nombre}`);
}

despedirPersona(); // Adios, Erika
despedirPersona("Juan"); // Adios, Juan

/**
 * Función que muestra un adios por consola a una persona
 * @param nombre (opcional) Nombre de la persona a despedir
 */
function despedirOpcional(nombre?: string) {
  if (nombre) {
    console.log(`Adios, ${nombre}!`);
  } else {
    console.log(`Adios!`);
  }
}

despedirOpcional(); // Adios!
despedirOpcional("Juanjo"); // Adios Juanjo!

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
  if (apellidos) {
    console.log(`${nombre} ${apellidos} tiene ${edad} años`);
  } else {
    console.log(`${nombre} tiene ${edad} años`);
  }
}

variosParams("Erika"); // Erika tiene 18 años
variosParams("Erika", "Pineda"); // Erika Pineda tiene 18 años
variosParams("Erika", "Pineda", 20); // Erika Pineda tiene 20 años
variosParams("Erika", undefined, 20); // Erika Pineda tiene 20 años

function ejemploVariosTipos(a: string | number) {
  if (typeof a === "string") {
    console.log(`${a} es un string`);
  } else if (typeof a === "number") {
    console.log(`${a} es un numero`);
  } else {
    console.log(`${a} no es un string ni un numero`);
    throw Error("A no es un string ni un numero");
  }
}

ejemploVariosTipos("hola");
ejemploVariosTipos(3);

/**
 *
 * @param nombre Nombre de la persona
 * @param apellidos  Apellidos de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre: string, apellidos: string): string {
  return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Erika", "Pineda");
console.log(nombreCompleto); // Erika Pineda
console.log(ejemploReturn("Erika", "Pineda")); // Erika Pineda

/**
 *
 * @param nombres es una lista de nombres de string
 */
function ejemploMultipleParams(...nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploMultipleParams("Erika", "Pedro", "Juan", "Luis", "Maria");

const lista = ["Alberto", "Sandra"];
ejemploMultipleParams(...lista);

function ejemploParamLista(nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

ejemploParamLista(lista);

type Empleado = {
  nombre: string;
  apellido: string;
  edad: number;
};

let empleadoUno: Empleado = {
  nombre: "Erika",
  apellido: "Pineda",
  edad: 30,
};

// Funciones flecha

const mostrarEmpleado = (empleado: Empleado): string =>
  `${empleado.nombre} ${empleado.apellido} tiene ${empleado.edad} años`;

mostrarEmpleado(empleadoUno); // Erika Pineda tiene 30 años

const datosEmpleado = (empleado: Empleado): string => {
  if (empleado.edad > 70) {
    return `${empleado.nombre} ${empleado.apellido} está en edad de jubilación`;
  } else {
    return `${empleado.nombre} ${empleado.apellido} está en edad laboral`;
  }
};

datosEmpleado(empleadoUno); // Erika Pineda está en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => string) => {
  if (empleado.edad > 70) {
    return;
  } else {
    return cobrar(); // callback a ejecutar
  }
};

obtenerSalario(empleadoUno, () => "Cobrar Erika Pineda");

const cobrarEmpleado = (empleado: Empleado) => {
  console.log(`${empleado.nombre} ${empleado.apellido} cobra su salario`);
};

// Funciones Async

async function ejemploAsync(): Promise<string> {
  // Await

  await console.log(
    "Tarea a completar antes de seguir con la secuencia de instrucciones"
  );
  console.log("Tarea Completada");
  return "Completado";
}

ejemploAsync()
  .then((respuesta) => {
    console.log("Respuesta", respuesta);
  })
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => {
    console.log("Finalizado");
  });

// Generators

function* ejemploGenerator() {
  // yield

  let index = 0;

  while (index < 5) {
    // Emitimos valor incrementado
    yield index++;
  }
}

// Guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

// Acceder a los valores emitidos

console.log(generadora.next().value); // { value: 0, done: false }
console.log(generadora.next().value); // { value: 1, done: false }
console.log(generadora.next().value); // { value: 2, done: false }
console.log(generadora.next().value); // { value: 3, done: false }
console.log(generadora.next().value); // { value: 4, done: false }
console.log(generadora.next().value); // { value: undefined, done: true }

// Worker

// Watcher

function* watcher(valor: number) {
  yield valor; // emitimos el valor inicial
  yield* worker(valor); // Llamamos a las emisiones del worker para que emita otros valores
  yield valor + 4; // emitimos el valor final + 4
}

function* worker(valor: number) {
  yield valor + 1;
  yield valor + 2;
  yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // { value: 0, done: false }  lo ha hecho el watcher
console.log(generatorSaga.next().value); // { value: 1, done: false }  lo ha hecho el worker
console.log(generatorSaga.next().value); // { value: 2, done: false }  lo ha hecho el worker
console.log(generatorSaga.next().value); // { value: 3, done: false }  lo ha hecho el worker
console.log(generatorSaga.next().value); // { value: 4, done: false }  lo ha hecho el watcher
