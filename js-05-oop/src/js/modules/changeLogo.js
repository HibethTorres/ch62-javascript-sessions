
//Crear una funcion que se le pase el nombre de la imagen a mostar (cat o dino)
// Esta imagen es la que se debe mostrar en el elemento con id "logo"

/** Cambia la imagen inicial por la especificada en la ruta
 * 
 * @param {string} imageRoute Ruta relativa, considerar como inicio la ubicación de este modulo
 */
const changeLogo = (imageRoute) => { //Definiendo la funcion changeLogo
    const logoElement = document.getElementById("logo"); //Seleccionando el elemento con id "logo"

    if ( imageRoute && logoElement !== null ) { //Evaluando que el valor sea verdadero, diferente de null
        logoElement.src = `/assets/img/${imageRoute}`; //Cambiando la ruta de la imagen
    } else {
        console.warn( `Element with route "${ imageRoute }" not found.` ); //El warn me manda un mensaje de advertencia en la consola con un triangulo amarillo
    }
}

//Exportación nombrada
export {changeLogo};