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