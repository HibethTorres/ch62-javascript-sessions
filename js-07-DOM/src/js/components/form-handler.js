/**
 * Modulo para manejar formularios
 * @returns {object} objeto con los inputs del formulario
 */
const formHandler = () => {
    const tasktitle = document.getElementById("taskTitle").value; //Para leer formulario usamos .value, usado para la mayoria de los inputs
    //Para checkbox usamos .checked


    return {
        tasktitle: tasktitle  // nombre:atributo
    };
};

export { formHandler }; //exportacion nombrada