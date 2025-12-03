/*
 Ventajas de trabajar con ED Modules:
    1. Modularidad: Puedes dividir tu código en módulos más pequeños y manejables, 
    lo que facilita la organización y el mantenimiento del código.
    2. Reutilización: Puedes reutilizar módulos en diferentes partes de
     tu aplicación o incluso en diferentes proyectos, lo que ahorra tiempo y esfuerzo.
    3. Dependencias explícitas: Puedes declarar las dependencias de un módulo 
    de manera clara, lo que facilita la comprensión de cómo interactúan los diferentes módulos entre sí.
    4. Mejora del rendimiento: Los navegadores pueden cargar y ejecutar módulos 
    de manera más eficiente, ya que solo cargan los módulos necesarios cuando se requieren.    
*/

/**
 * 
 * Modifica el titulo principal de la pagina
 * @param {string} titleId - El ID del elemento del titulo a moodificar
 */

const changePrincipalTitle = ( titleId ) => { //Tambien se podria agregar 'export' antes de 'const' para exportar la funcion directamente
    const titleElement = document.getElementById( titleId );
    if ( titleElement !==null ) { //Evaluando que el valor sea verdadero, diferente de null
        titleElement.innerText = "OOP in JavaScript, Cohorte 62";
    } else {
        console.warn( `Element with id "${ titleId }" not found.` ); //El warn me manda un mensaje de advertencia en la consola con un triangulo amarillo
        //El error me marca un mensaje de error en la consola con una X roja
    }
};

//Exporta la funcion para que pueda ser utilizada en otros moodulos.
//Exportacion nombrada
export { changePrincipalTitle }; //Las exportaciones van al final del archivo