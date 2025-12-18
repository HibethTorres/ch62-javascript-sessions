import navbarContent from "./components/navbar"; // importanción por default
// import {navbar:navbarContent } from "./components/navbar"; // importanción nombrada


const initAPP = () => {
    console.log("App initialized");
    //Obtener la referencia al contenedor del navbar por su id
    const navbarContainer = document.getElementById("main-header");
    navbarContainer.innerHTML = navbarContent();


};

export {initAPP}; //Named Export/Exportacion nombrada