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