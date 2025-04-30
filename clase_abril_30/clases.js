


// Al no ser funcion pareceria no poder declarar parametros y recibir argumentos
// Una class representa un objeto plantilla para instanciar objetos literales
class Persona {
    constructor(nombre, brazos, piernas, frase){
        // Aqui se definen los atributos
        this.nombre = nombre;
        this.brazos = brazos;
        this.piernas = piernas;
        this.frase = frase;
    }

    decirFrase(){
        return this.frase
    }
}

const tomas = new Persona("Tomas", 2, 2, "Llamame toto")

class Empleado extends Persona {
    constructor(nombre, brazos, piernas, frase, salario, aguinaldo){
        super(nombre,brazos,piernas,frase)
        this.salario = salario;
        this.aguinaldo = aguinaldo;
    }

    decirFrase(){
        return this.frase
    }
}

class Piquetero extends Persona {
    constructor(nombre, brazos, piernas, frase, palos, neumaticos){
        super(nombre,brazos,piernas,frase)
        this.palos = palos;
        this.neumaticos = neumaticos;
    }
}

const toto = new Empleado("Tomas", 2, 2, "Por fin me llaman toto", "5000000", "2500000")

console.log(toto.decirFrase())


