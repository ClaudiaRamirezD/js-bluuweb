// function Persona(nombre) {
//     this.nombre = nombre;

//     this.saludar = function () {
//         return `${this.nombre} dice: Hola Honguito!`;
//     };
//     // this.saludarIngles = function () {
//     //     return `${this.nombre} dice: Hello mushroom!`;
//     // };
// }

// Persona.prototype.saludarIngles = function () {
//         return `${this.nombre} says: Hello mushroom!`;
//     };

// const flamingo = new Persona('Flamingo hermoso');
// console.log(flamingo);
// console.log(flamingo.saludar());
// console.log(flamingo.saludarIngles());

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return `${this.nombre} dice hola`;
    }
}

const juanito = new Persona("juanito");
console.log(juanito.saludar());