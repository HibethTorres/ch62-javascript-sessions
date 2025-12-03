//Las importaciones van al inicio del archivo
//Importacion nombrada

import { changePrincipalTitle } from "./modules/changePrincipalTitle.js"; //No olvidar agregar la extension .js
import { changeLogo } from "./modules/changeLogo.js";

changePrincipalTitle("title");

//Crear una funcion que se le pase el nombre de la imagen a mostar (cat o dino)
// Esta imagen es la que se debe mostrar en el elemento con id "logo"
changeLogo("cat.jpg");


