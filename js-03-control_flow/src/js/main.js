/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

let isActive = true;
if (isActive === true) console.log("El usuario está activo"); //Si la condición es verdadera, entonces se ejecuta la sentencia
//Los espacios en blanco y saltos de línea no afectan la ejecución del código en JavaScript, asi como las tabulaciones
//No necesitamos usar llaves si solo hay una sentencia a ejecutar con el if
//Pero es recomendable usarlas para mejorar la legibilidad del código y las empresas tienen su propia guía de estilos


if (isActive)  { //No es necesario comparar con true, ya que isActive ya es un valor booleano
    console.log("El usuario está activo");  //Esta es la mejor versión de estilo segun las guías de estilo
                                            //Usar las llaves nos puede ayudar a evitar errores en el futuro
} else { //else tampoco necesita llaves, ya que no tiene una condición, pero es recomendable usarlas por legibilidad
    console.log("El usuario no está activo"); 
} 

/*
  = Operador de asignación
  == Comparador de igualdad que compara solo el valor
  != Comparador de desigualdad que compara solo el valor
  === Comparador estrictamemte igual que compara valor y tipo de dato  
  //No nos hace conversiones de tipo implicitas
  !== Comparador estrictamente diferente que compara valor y tipo de dato //No nos hace conversiones de tipo implicitas
*/

//Bloque de codigo: 
//Conjunto de sentencias agrupadas entre llaves { ... }
{
    let firstName = "Juan";
    let lastName = "Perez";
    var alias = "Juampi"; //var tiene alcance global o de función, no de bloque
    let age = 28;

    console.log(firstName, lastName, alias); //Se imprime "Juan Perez Juampi"
    {//Bloque anidado
        let firstName = "Sergio";
        let lastName = "Torres"; 
        var alias = "Serch"; 
        var alias = "Serchmo"; //Reasignación o redeclaracion de variable var
        console.log(firstName, lastName, alias, age); //Se imprime "Sergio Torres Serchmo 28"
        // porque las variables firstName y lastName son diferentes a las del bloque padre, 
        //pero alias se sobreescribe porque es var
    }
    
    console.log(firstName, lastName, alias, age); //Se imprime "Juan Perez Serchmo 28"

}
console.log(alias); //Se imprime "Serchmo" porque alias fue declarada con var y tiene alcance global o de función
//console.log(firstName); //Error: firstName is not defined, porque firstName fue declarada con let y tiene alcance de bloque
//console.log(lastName); //Error: lastName is not defined, porque lastName fue declarada con let y tiene alcance de bloque
//console.log(age); //Error: age is not defined, porque age fue declarada con let y tiene alcance de bloque


/*
EJERCICIO:
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".

 Imprimir el valor del retorno por consola.
*/
const revisarTemperatura = (temperatura) => { //Arrow function
    if (temperatura > 25) { //Si la temperatura es mayor a 25
        return "Hace calor"; //retonar "Hace calor"
    } else { //En caso contrario
        return "Hace frío"; //retornar "Hace frío"
    }   
}
console.log(revisarTemperatura(30)); //Imprimir el valor del retorno por consola (mayor a 25) //Imprime "Hace calor"
console.log(revisarTemperatura(20)); //Imprimir el valor del retorno por consola (menor a 25) //Imprime "Hace frío"
console.log(revisarTemperatura(25)); //Imprimir el valor del retorno por consola (igual a 25) //Imprime "Hace frío"

//Otra forma de resolver el ejercicio usando operador ternario
const revisarTemperaturaTernario = (temperatura) => 
    temperatura > 25 ? "Hace calor" : "Hace frío"; //Operador ternario  


/*
Realizar una funcion (Arrow function) que reciba el valor booleano de si una persona esta feliz o no
Si la persona esta feliz, mostrar en la interfaz de usuario la imagen "public/images/dino.jpg"
En caso contrario, mostrar la imagen "public/images/dino-emo.png"
*/



//if-else-if
const checkTemperature = (temperature) => {
    let message = "";
  if (temperature > 30) {
    message = "It's hot";
} else if (temperature >= 15 && temperature <= 30) { 
    message = "It's warm";
} else if (temperature < 15 && temperature >= 0){
    message = "It's cold";
} else {
    message = "It's freezing";
}
    return message;
};

console.log(checkTemperature(35)); //Imprime "It's hot"
console.log(checkTemperature(20)); //Imprime "It's warm"
console.log(checkTemperature(10)); //Imprime "It's cold"
console.log(checkTemperature(-5)); //Imprime "It's freezing"


//Operador AND (&&) y OR (||)
/*
Operador de cortocircuito.

 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.
 
 Se consideran falsos: "", 0, null, undefined, NaN
*/
console.log( true && false ); // false
console.log( true && "Usando corto circuito "); // "Usando corto circuito "
console.log( "false" && "Mi mente sigue de vacaciones"); // "Mi mente sigue de vacaciones"
console.log( 0 && "Chau, chau"); // 0
console.log( "" && "Chau, chau"); // ""
console.log( false && "Chau, chau"); // false

console.log( true || false ); // true
console.log( true || "Usando corto circuito "); // true
console.log( "false" || "Mi mente sigue de vacaciones"); // "false"
console.log( 0 || "Chau, chau"); // "Chau, chau"
console.log( "" || "Chau, chau"); // "Chau, chau"
console.log( false || "Chau, chau"); // "Chau, chau"
console.log( false || undefined ); // undefined

console.log( "Activado" && undefined ); // undefined

const isLoggedIn = true;
if(isLoggedIn) {
    console.log("El usuario está logueado");
}  else {
    console.log("El usuario no está logueado");    
}

console.log( isLoggedIn && "El usuario está logueado" || "El usuario no está logueado" ); 

/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/

function getWeather(weatherCode) { //Funcion que recibe un código weatherCode
   
    let description = "";

    if (weatherCode === 0) {
        description = "Clear sky";
    } else if (weatherCode === 1 || weatherCode === 2 || weatherCode === 3) {
        description = "Mainly clear, partly cloudy, and overcast";
    } else if (weatherCode === 45 || weatherCode === 48) {
        description = "Fog and depositing rime fog";
    } else {
        description = "Unknown weather code";
    }
    return description;
};

//--------------- Condicional Switch-case --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
