import { formHandler } from "./form-handler";


const setupEventListener = () => { 
    console.log("Event listener has been set up.");

    //Manejo del formulario
    //const form = document.getElementById("task-form");
    const taskForm = document.querySelector("#task-form");

    taskForm.addEventListener("submit", (event) => { /* Arrow function dentro del Event Listener */
        event.preventDefault(); //Evita que la pagina se recargue al enviar el formulario
        console.log("Form submitted!");
        const data = formHandler(); //Llamamos a la funcion del modulo form-handler
        console.table(data); //Mostramos los datos en formato tabla
    });

}

export {setupEventListener}; //Named Export/Exportacion nombrada