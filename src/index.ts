import {
  deleteAllCookies,
  deleteCookie,
  getCookieValue,
  setCookie,
} from "cookies-utils";
import { LISTA_CURSOS } from "./mock/cursos.mock";
import { Curso } from "./models/Curso";
import { Estudiante } from "./models/Estudiante";
import { Trabajador, Jefe } from "./models/Persona";
import { ITarea, Nivel } from "./models/interfaces/ITarea";
import { Programar } from "./models/Programar";

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

// Sobrecarga de funciones

function mostrarError(error: string | number): void {
  console.log("Ha habido un error", error);
}

// Persistencia de datos

// 1. Local Storage --> Almacena los datos en el navegador de forma persistente, no se elimina automaticamente.
// 2. Session Storage --> La diferencia radica en la sesion del navegador, los datos persisten en la sesion del navegador.
// 3. Cookies --> Tienen una fecha de caducidad y tienen un ambito de URL.

// Local Storage

function guardarDatos(): void {
  localStorage.setItem("nombre", "Erika");
  localStorage.setItem("apellido", "Pineda");
  localStorage.setItem("edad", "30");
}

function leerDatos(): void {
  const nombre = localStorage.getItem("nombre");
  const apellido = localStorage.getItem("apellido");
  const edad = localStorage.getItem("edad");
}

// Cookies

const cookieOptions = {
  name: "usuario", // string,
  value: "Erika", // string,
  maxAge: 10 * 60, // number, in seconds
  expires: new Date(2099, 10, 1), // optional Date,
  path: "/", // optional string,
};

//setear cookie
setCookie(cookieOptions);

// eliminar cookie
deleteCookie("usuario");

//eliminar todas las cookies
deleteAllCookies();

//leer cookie
let cookieLeida = getCookieValue("usuario");

// Gestion de eventos

// Clase temporizador

class Temporizador {
  public terminar?: () => void;

  public empezar(): void {
    setTimeout(() => {
      //Comprobamos que existe la funcion terminar como callback
      if (!this.terminar) return;

      // Cuando haya pasado el tiempo se ejecutara la funcion terminar
      this.terminar();
    }, 10000);
  }
}

const miTemporazizador: Temporizador = new Temporizador();

// Definir la funcion del callback a ejecutar cuando termine el tiempo del temporizador

miTemporazizador.terminar = () => {
  console.log("Evento Terminado");
};

// Lanzamos el temporizador

miTemporazizador.empezar(); // Inicia el time out y cuando termine, se ejecuta la funcion terminar.

setInterval(() => console.log("Tic"), 10000);

// Eliminar la ejecucion de la funcion
delete miTemporazizador.terminar;

// Extender de EventTarget
document.getElementById("boton")?.addEventListener("click", () => {
  console.log("Haz hecho click");
});

// ** CLASES **

// Creamos curso

// const cursoTs: Curso = new Curso("TypeScript", 15);
// const cursoJs: Curso = new Curso("JavaScript", 20);

// const listaCursos: Curso[] = [];
// listaCursos.push(cursoTs, cursoJs); // [Lista de cursos]

// Usamos el Mock
const listaCursos: Curso[] = LISTA_CURSOS;

// Creamos estudiante
const erika: Estudiante = new Estudiante("Erika", listaCursos, "Pineda");

console.log(`${erika.nombre} estudia `);
//Iteramos por cada uno de ellos
erika.cursos.forEach((curso) => {
  console.log(`${curso.nombre} (${curso.horas} horas)`); // Typescript (15 horas)
});

const cursoAngular: Curso = new Curso("Angular", 40);

erika.cursos.push(cursoAngular); // [typeScript, JavaScript, Angular]

erika.horasEstudiadas; // number

//erika.ID; // es privada - la unica forma de acceder es generando un getter o un setter especifico para el ID

erika.ID_Estudiante = "2244466"; // Se puede modificar y podria recibir nueva informacion

// Saber instancia de un objeto/variable
// Se suelen utilizar en javascript  porque si el codigo esta tipado no es necesario

// Typeof
if (typeof erika === "object") {
  console.log("Es un objeto");
}

// Instanceof
if (erika instanceof Estudiante) {
  console.log("Es un estudiante");
}

let fechaDeNacimiento = new Date(1986, 9, 22);

if (fechaDeNacimiento instanceof Date) {
  console.log("Es una fecha");
}

// **HERENCIA Y POLIMORFISMO**

let trabajador1 = new Trabajador("Erika", "Pineda", 36, 2000);

let trabajador2 = new Trabajador("Jose", "Perez", 30, 1000);

let trabajador3 = new Trabajador("Maria", "Mendez", 40, 3000);

trabajador1.saludar(); // herencia de Persona

let jefe = new Jefe("Pablo", "Garcia", 50);

jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);

jefe.trabajadores.forEach((trabajador: Trabajador) => {
  trabajador.saludar();
});

trabajador1.saludar(); // herencia de Persona
jefe.saludar(); // herencia de Persona

// Interfaces

let programar: ITarea = {
  titulo: "Programar en TypeScript",
  descripcion: "Practicar con Katas para aprender a desarrollar con TS",
  urgencia: Nivel.Urgente,
  completada: false,
  resumen: function (): string {
    return `${this.titulo} - ${this.completada} - Nivcel: ${this.urgencia}`;
  },
};

console.log(programar.resumen());

// Tarea de Programacion

let programarTS = new Programar(
  "TypeScript",
  "Tarea de programacion en TS",
  false,
  Nivel.Bloqueante
);
console.log(programarTS.resumen());

// ** Decoradores experimentales ---> @ **
// -Clases
// -Parametros
// -Metodos
// -Propiedades

function Override(label: string) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => label,
    });
  };
}

class PruebaDecorador {
  @Override("Prueba") // llamar a la funcion override
  nombre: string = "Erika";
}

let prueba = new PruebaDecorador();
console.log(prueba.nombre); // "Prueba" - simpre devolvera prueba, a pesar de q se le ponga otro valor.

// Otra funcion para usarla como decorador

function SoloLectura(target: any, key: string) {
  Object.defineProperty(target, key, {
    writable: false,
  });
}

class PruebaSoloLectura {
  @SoloLectura
  nombre: string = "";
}

let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Erika";

console.log(pruebaLectura.nombre); // undefined, no se le puede dar un valor, es solo de lectura

// Decorador para parametros de un metodo
function mostrarPosicion(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("Posicion: ", parameterIndex);
}

class PruebaMetodoDecorador {
  prueba(a: string, @mostrarPosicion b: boolean) {
    console.log(b);
  }
}

let newPruebaMetodoDecorador = new PruebaMetodoDecorador().prueba(
  "Hola",
  false
);
