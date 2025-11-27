console.log ("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  ! Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  ! Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/


console.log(saludar("Johan")); // undefined porque la funcion saludar no retorna nada

function saludar (nombre) {  //funciones declaradas
    console.log (`Hola ${nombre}, que vas a comer hoy?`);
}


/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

//Funcion y metodo son sinonimos, al menos en JavaScript. 



/**    Comentario de funcion: debe ser con /**
 * Funcion que recibe nombre y apellido y retorna el nombre completo
 * @param {string} firstName - El primer nombre de la persona.
 * @param {string} lastName - El apellido de la persona.
 * @returns concatenación de firstName y lastName de la persona en la Ch62.
 * No es necesario poner comentario de la funcion, pero es buena practica
*/


const printFullName = function (firstName, lastName) {  //Declaramos la variable y asignamos la función
  //Si la variable contiene otra funcion llevara const en lugar de let
  return `${firstName} ${lastName} estudiante de la Ch62`; //String template literal
};  //Este tipo de funciones terminan en punto y coma, no es obligatorio pero es buena practica

console.log(printFullName("Johan", "Gonzalez")); //Llamado a la funcion expresada

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - !!! Si tiene una sola instrucción no requiere las llaves {}
 - !!! Si la instrucción es el mismo retorno, no requiere la palabra return, porquue esta misma funcion retorna el resultado de la expresión.

sintaxis:
    const nombreVariable = (parametros) => instrucción;   //Si y solo si tienes 1 parametro puedes no poner los paréntesis, si tienes 0 o 2 o mas, debes usarlos

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

//Convertir la funcion printFullName a funcion flecha

const printFullNameArrow = (firstName, lastName) => `${firstName} ${lastName} estudiante de la Ch62 con funcion flecha`;

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const makeCoffe = ( type = "Americano" ) => `Preparando un café ${type}`; //Si no se le pasa ningun argumento, el tipo de cafe sera Americano, por ende sera tipo string

console.log( makeCoffe("Latte") ); // Preparando un café Latte
console.log( makeCoffe() ); // Preparando un café undefined //Porque no se le indico ningun valor/argumento, por ende no tiene tipo y sale undefined


// TODO: generar una función que calcule el área de un rectángulo
// usando parámetros por defecto para largo y ancho.

const calcularAreaRectangulo = (base = 4, altura = 2) => base * altura;

console.log(calcularAreaRectangulo(5,3)); //15 //Se asignan nuevos valores 5 y 3, sobreescribiendo los valores por defecto
console.log(calcularAreaRectangulo()); //8 //Usa los valores por defecto 4 y 2
console.log(calcularAreaRectangulo(7)); //14 //Usa 7 y el valor por defecto 2


//Ejemplo de uso de default parameters en funciones declaradas
console.log( `Vales 1000, estoy diciendo que vales: ${parseInt("1000", 10)}` ); //1000
console.log( `Vales 1000 base 2, estoy diciendo que vales: ${parseInt("1000", 2)}` ); //8, porque 1*2^3 + 0*2^2 + 0*2^1 + 0*2^0 = 8
console.log( `Vales 1000 base por defecto, estoy diciendo que vales: ${parseInt("1000")}` ); //1000, porque el parametro radix toma el valor por defecto de 10


/*
  Pase de datos:
  - Por valor (tipos primitivos: number, string, boolean, null, undefined, symbol, bigint) /Es una copia del valor mismo
    Se crea una copia independiente del dato. Si modificas la copia, el original NO cambia.
  - Por referencia (objetos(no primitivos)): arrays, funciones, objetos literales) /No se pasa una copia, sino una referencia a la ubicación en memoria del objeto, lo que ocurra dentro de la referenia afecta al objeto original
  Se pasa la dirección de memoria (referencia), no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
*/


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
*/

// Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};

console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2

// Aplicando funciones de callback para mejorar el diseño
// 1. La funcion principal esta "cerrada" (no la tocamos mas)

const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b); // Llamamos a la función pasada como argumento
};

//console.log(`Usando incorrectamente la funcion calculate: ${calculate(5, 3, 10)}`); // Usando incorrectamente la funcion calculate: NaN porque 10 no es una funcion

// 2.Deifinimos operaciones basicas como funciones separadas
const subtract = (a, b) => a - b;
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//Aplicar a la función calculate la función subtract como callback
console.log(`Realizando una resta: ${calculate(5, 3, subtract)}`); // Realizando una resta: 2 //Si usamos parentesis en subtract(), se ejecuta inmediatamente y no funciona como callback
// Aplicar a la función calculate la función multiplicacion como callback
console.log(`Realizando una multiplicación: ${calculate(5, 3, multiply)}`); // Realizando una multiplicación: 15
// Aplicar a la función calculate la función suma como callback
console.log(`Realizando una suma: ${calculate(5, 3, add)}`); // Realizando una suma: 8
// Aplicar a la función calculate la función división como callback
console.log(`Realizando una división: ${calculate(6, 3, divide)}`); // Realizando una división: 2

//Aplicar una funcion que calcule la potencia de un numero
console.log(`Realizando una potencia: ${calculate(6, 3, (a, b) => a ** b)}`); // Realizando una potencia: 8 //Usando funcion anonima como callback
 //Tambien podemos usar Math.pow(a,b) //No se ejecuta, solo se pasa la referencia/se define

// Aplicar una función que calcule el residuo de una división, para saber si 6 es divisible entre 3
console.log(`Realizando una operación de residuo: ${calculate(6, 3, (a, b) => a % b)}`); // Realizando una operación de residuo: 0
// Si el resultado es 0, significa que 6 es divisible entre 3

