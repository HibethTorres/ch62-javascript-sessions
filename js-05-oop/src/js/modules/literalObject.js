/* Ejemplo de Objeto Literal en JavaScript 
- Util para configuraciones unicas
- No escalable para crear multiples instancias/entidades
-Facil de crear y usar
-Evitar tener decenas de variables sueltas
*/
 const internalId = Symbol ("id"); //Esto es una variable privada
 //Dato primitivo unico e inmutable

 const aliceUser = { //Definiendo un objeto literal
    [internalId]: "User-T100", //Esto es un atributo privado, no se puede acceder desde fuera del objeto
    //Los corchetes permiten usar una expresion como nombre de atributo, usamos el valor de la variable internalId
    name: "Alice", //Atributos, campos, o fields
    age: 30,
    email: "alice@gmail.com",
    
    getFullName() { //Metodo o funcion o accion dentro del objeto
       // return `${literalUser.name} ${literalUser.lastName} ${literalUser.age}`;
       return `${this.name} ${this.lastName} ${this.age}`; //this no funciona en arrow functions
       //En lugar del nombre de variable del objeto se usa 'this' para referirse al objeto actual
    },
    stringify() {
        return JSON.stringify(this);
    }
}

export { aliceUser}