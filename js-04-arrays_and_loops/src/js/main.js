//While nos sirve si el numero de iteraciones no es definida desde un inicio

console.log("Sesion JS-04: Arrays y Bucles");

/* ================================================================
   ARRAYS (ARREGLOS) 
   ================================================================
   Un Array es una estructura de datos que nos permite almacenar 
   múltiples valores en una sola variable.
   
   Analogía: Una cajonera donde cada cajón tiene un número (índice)
   para identificar qué hay dentro.
*/


//const myArray = [true, 42, "Hola", null, {"nombre:Juan"}, [1,2,3]];

// --- 1. Definicion ---
// Sintaxis moderna: Usamos corchetes [] (Array Literal)
// Nota: Usamos 'const' aunque el contenido cambie.
// Lo que es constante es la referencia en la memoria, no los datos internos.

const frutas = []; //Empty Array
//Se recomienda que el nombre de los Array sea en plural
//Se declara con const para que no se reasigne el Array, pero si se pueden modificar sus elementos
//Los arreglos son elementos mutables, pero no reasignables, solo se puede modificar su contenido

const fruits = new Array(); // array using the constructor function (less common)

const numeros = [5]; //Array with one element
const numbers = new Array(5); //Array with 5 empty slots

// --- 2. Acceso a los elementos ---
// Los indices comienzan en 0 (Zero-based index)
// [0] -> Primer elemento
// [lenght - 1] -> Ultimo elemento

const techStack = ["HTML", "CSS", "JavaScript"];

//Acceder al primer elemento
console.log( techStack.length ); //3
console.log(`Accediendo al primer elemento: ${techStack[0]}`); //"HTML"

//Accediento al segundo elemento
console.log(`Accediendo al segundo elemento: ${techStack[1]}`); //"CSS"

//Accediento al ultimo elemento (length - 1)
console.log(`Accediendo al ultimo elemento: ${techStack[techStack.length - 1]}`); //"JavaScript"

// --- 3.Modificacion de Elementos ---
techStack [1] = "Sass"; //Cambiando "CSS" por "Sass"
console.log("Después de la modificación:", techStack); // ["HTML", "Sass", "JavaScript"]

//Agregar un nuevo elemento al final
//teckStack[3]
techStack[techStack.length] = "Typescript"; // ["HTML", "Sass", "JavaScript", "TypeScript"]