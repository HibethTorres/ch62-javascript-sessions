/**
 * Modulo para manejar formularios
 * @returns {object} objeto con los inputs del formulario
 */
const formHandler = (formReference) => {

    /*
    const tasktitle = document.getElementById("taskTitle").value; //Para leer formulario usamos .value, usado para la mayoria de los inputs
    //Para checkbox usamos .checked
    const assignedTo = document.getElementById("assignedTo").value;


    return {
        tasktitle: tasktitle,  // nombre:atributo
        assignedTo: assignedTo
    }; */

        const formData = new FormData(formReference); //Crea un objeto FormData a partir del formulario
        const data = Object.fromEntries(formData.entries()); //Convierte FormData a un objeto normal
        return data; //Devuelve el objeto con los datos del formulario
/*
FormData: Una fomrra mas sencilla de manejar formularios en JS
Permite recopilar y gestionar los datos de un formulario de manera sencilla.
*/
};

export { formHandler }; //exportacion nombrada