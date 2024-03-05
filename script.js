console.log("Hello world!", "Juan Silva");
// Existen dos tipos de variables en JS: const => NO se puede modificar. let => SI se puede modificar.
const nombre = "Juan";
// const => NO se puede modificar.
let apellido = "Silva";
apellido = "Ramirez";

// let => SI se puede modificar.
// Existen varios tipos de datos iniciales:
// Numbre: Int & Float
// String
// Boolean: true & false
// Symbol
// undefined
// null
// biglnt

const edad = 19.0;
console.log("Mi edad es", edad);

const esMayorDeEdad = true;
console.log ("Esmayor de edad", esMayorDeEdad);

const notaA = 5;
const notaB = 4;

const promedio = (notaA + notaB)/2;
console.log("El promedio es ", promedio);

const nombreCompleto = nombre + " " + apellido;
console.log("Mi nombre completo es", nombreCompleto);

const tipoDeDato = typeof edad;
console.log(tipoDeDato);

const numero = parseInt("5");
console.log(numero, typeof numero);

const edadPorConsola = prompt("Ingrese su edad");
console.log(edadPorConsola, typeof edadPorConsola)