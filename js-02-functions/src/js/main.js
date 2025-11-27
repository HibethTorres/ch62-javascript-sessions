console.log ("JS02");

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

console.log(printFullName("Johan", "Gonzalez")); //Llamado a la funcion expresada


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

