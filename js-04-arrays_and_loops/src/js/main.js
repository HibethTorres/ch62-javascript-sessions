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


/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/

const shoppingList = ["Leche", "Huevos"];


// 1.push(): Agrega al FINAL (El mas usado)
// Retorna la nueva longitud del array
shoppingList.push("Pan");
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]

// 2. unshift(): Agrega al INICIO (Mueve todos los indices, es mas lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]

// --- Eliminar Elementos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"

// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("Colores iniciales:", colors.toString()); //toString lo convierte a texto
//"Rojo,Verde,Azul,Amarillo,Morado,Naranja"
console.log("Colores iniciales:", colors.join("-")); //con join le damos como separar cada elemento, en este caso con un guion
//"Rojo-Verde-Azul-Amarillo-Morado-Naranja"

//Agregar 2 elementos en el indice 2, sin eliminar otros elementos
colors.splice(2,0, "Rosa", "Cyan");
console.log("Despues de agregar con splice", colors.toString());


/* ================================================================ */
// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres. Hazlo dentro de una funcion Arrow.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

   const manageGuestList = () => { 
   
      const guestList = ["Jenifer", "Emily"]; //Array con 2 nombres iniciales
      guestList.push("Morgan"); //push - Agregar al final: +Morgan
      //"Lista de invitados final: Jenifer,Emily,Morgan"
      guestList.unshift("Spencer"); //unshift - Agregar al inicio 
      //"Lista de invitados final: Spencer,Jenifer,Emily,Morgan"
      guestList.splice(1,1,"Penelope"); //splice - Eliminar el segundo invitado y agregar otro en su lugar: Jenider -> Penelope 
      //"Lista de invitados final: Spencer,Penelope,Emily,Morgan"
      console.log("Lista de invitados final:", guestList.join(', '));
      //"Lista de invitados final: Spencer,Penelope,Emily,Morgan"
   }
   manageGuestList();

/* ================================================================ */

/*================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS (Stack & Queue)
   ================================================================
   Las pilas y colas son estructuras de datos que organizan cómo se 
   almacenan y acceden a los elementos.
   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/
// Navegamos a sitios (push)
const historyStack = [];

historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");
console.log("Historial actual:", historyStack); // ["google.com", "youtube.com", "github.com"]

// Volvemos atrás (pop)
console.log(`Volviendo a: ${historyStack.pop()}`); // "github.com"
console.log("Historial después de pop:", historyStack); // ["google.com", "youtube.com"]
/* ================================================================
   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
//Lista de documentos para imprimir (push)
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]
// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();
console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)
console.log("Cola de impresión después de shift:", printQueue); // ["meme.png", "invoice.docx"]

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/

const taskList = []; //1. Crear array vacío
//2. Agregar 3 tareas
taskList.push("Tarea 1: Organizar los archivos");
taskList.push("Tarea 2: Enviar correos");
taskList.push("Tarea 3: Preparar presentación");
console.log("Lista completa de tareas:", taskList.join(' | ')); //3. Mostrar lista completa
// "Lista completa de tareas: Tarea 1: Organizar los archivos | Tarea 2: Enviar correos | Tarea 3: Preparar presentación"
//3.1 Retirar la primera tarea (FIFO)
const firstTask = taskList.shift(); //shift: Eliminar el primero
console.log("Lista completa de tareas:", taskList.join(' | ')); // "Lista completa de tareas: Tarea 2: Enviar correos | Tarea 3: Preparar presentación"
// 4. Agregar tarea urgente al inicio
taskList.unshift("Tarea Urgente: Revisar reportes financieros"); //unshift: Agregar al inicio
//5. Mostrar lista actualizada
console.log("Lista actualizada de tareas:", taskList.join(' | '));
// "Lista actualizada de tareas: Tarea Urgente: Revisar reportes financieros | Tarea 2: Enviar correos | Tarea 3: Preparar presentación"
//6. Atender la primera tarea
const urgentTask = taskList.shift(); //shift: Eliminar el primero
console.log(`Atendiendo: ${urgentTask}`); // "Atendiendo: Tarea Urgente: Revisar reportes financieros"
console.log("Lista completa de tareas:", taskList.join(' | ')); 
// "Lista completa de tareas: Tarea 2: Enviar correos | Tarea 3: Preparar presentación"

/* =========================THE END============================== */
