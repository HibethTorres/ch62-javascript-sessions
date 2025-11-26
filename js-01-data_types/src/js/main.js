console.log("Session JS01 - Data Types");

/* ================================================================
   1. VARIABLES Y NOMENCLATURA (5 min)
   ================================================================
   Reglas modernas:
   - 'const': Úsalo por defecto (valores constantes).
   - 'let': Úsalo solo si el valor va a cambiar (reasignación).
   - 'var': EVITAR (es obsoleto en desarrollo moderno).
   
   Nomenclatura (CamelCase):
   - Correcto: userAge, firstName, isActive
   - Incorrecto: user_age, FirstName, is_active
*/

//TODO: Declara 3 variables para un perfil de usuario ficticio

const userName = "PenelopeGarcia"; // Nombre de usuario - String - const en lugar de let porque no va a cambiar
let userAge = 33;         // Edad del usuario - Integer
let userEmotion = "Happy";    // Estado activo del usuario - String

// --- Template Literals (Backticks ``) ---
// Permiten interpolación ${} y saltos de línea. Más limpio que concatenar con '+'.
// ejemplo:  `Hola ch62, soy ${userName}`

const firstName = "Daniel";
let currentAge = 24;
const currentNationality = "Mexican";

// De las variables anteriores muestra en console el sig. mensaje:
// "My name is Daniel, I am 24 years old and I am Mexican."

console.log(`My name is ${firstName}, I am ${currentAge} years old and I am ${currentNationality}.`);
//Ventaja de usar template literals: podemos hacer saltos de linea sin usar \n que se refleja en consola
// \n se usa para saltos de linea en strings normales


/* ================================================================
   3. DATOS PRIMITIVOS: NUMBER Y BIGINT 
   ================================================================
   JavaScript tiene un solo tipo para enteros y decimales: 'number'.
   Number: Tipo de dato numérico de 64 bits para representar valores enteros, punto flotante, +Infinity, -Infinity, NaN
*/

const gravityEarth = 9.81; // Aceleracion debida a la gravedad en m/s² - Float

console.log(typeof gravityEarth); // Muestra el tipo de dato de la variable gravityEarth - 'number'

/*
Tipos de datos number.

- numeros positivos: 100, 1, 0.258
- numeros negativos: -1, -50.35
- valores que no pueden ser representados numericamente: NaN, sigue siendo un dato tipo 'number'
  /Un NaN lo quiero comparar con otro NaN nunca van a ser iguales/
- numero infinitos: +Infinity, -Infinity
*/

console.log( typeof 3.141592 ); // 'number'
console.log( typeof (3*3)  ); // 'number'
console.log( typeof "" ); // 'string'
console.log( typeof " " ); // 'string'
console.log( 3*"pitufo trabajador" ); // NaN
console.log( typeof ( 3 * "pitufo trabajador") ); // number
console.log( typeof (NaN) ); // 'number'
console.log( typeof +Infinity ); // 'number'
console.log( typeof ( 3 + "Viernes temático" ) ); // 'string'
console.log( typeof ( "3Viernes temático" ) ); // 'string'
console.log( 4 / 0 ); // +Infinity
console.log( typeof (4 / 0) ); // number
console.log( "4" * "2"); // 8
console.log( typeof ("4" * "2") ); // 'number'
console.log( typeof (8) ); // 'number'

console.log( typeof "4" * "2" ); // NaN
console.log( 'string' * "2" ); // NaN


