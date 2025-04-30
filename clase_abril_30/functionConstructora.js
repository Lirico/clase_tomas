


function Jedi(nombre, arma, edad, frase){
    // Atributos -> Son a la plantilla lo que las propiedades a un objeto
    this.nombre = nombre;
    this.arma = arma;
    this.edad = edad;

    // Metodos -> Funcion que vive dentro del scope de un objeto, clase o funcion constructora
    this.frase = function() {
        return frase;
    };
}

const yoda = new Jedi("Yoda", "Sable de luz", "Desconocida", "Si cobrar en dolares tu quieres, estudiar ingles tu debes!");
const maceWindu = new Jedi("Mace Windu", "Sable de Luz", 67, "Aaaaaaaaaaaaaaaaaahs");

console.log(yoda.frase())
console.log(maceWindu.frase())
