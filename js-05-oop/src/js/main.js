//Las importaciones van al inicio del archivo
//Importacion nombrada

import { changePrincipalTitle } from "./modules/changePrincipalTitle.js"; //No olvidar agregar la extension .js
import { changeLogo } from "./modules/changeLogo.js";
import { aliceUser } from "./modules/literalObject.js";

changePrincipalTitle("title");

//Crear una funcion que se le pase el nombre de la imagen a mostar (cat o dino)
// Esta imagen es la que se debe mostrar en el elemento con id "logo"
changeLogo("cat.jpg");

console.log( aliceUser.getFullName() );
console.log( aliceUser );
console.log( aliceUser.stringify() );

