/* 
    Crear la clase “SalaDeCine” que modela una sala de cine con los siguientes componentes: una estructura que 
    permita almacenar las butacas, un elemento por cada butaca (por defecto será una sala de 30 filas, con 40 
    asientos cada una), el número de sala, el tipo (2 posibles: “2D” o “3D”). La sala se va ocupando con 
    espectadores, un espectador se define por dos cosas, dni y edad.

    Escribir para la clase SalaDeCine al menos las siguientes operaciones:

    constructor(numero, tipo, cantFilas, cantAsientos): que construye una variable de tipo SalaDeCine
    ocuparAsiento(fila,columna,dni, edad): que recibe por parámetros la ubicación del espectador que ingresa 
    (fila y columna) y ocupa la butaca con el dni y la edad del espectador. Si la butaca no existe o esta 
    ocupada debe retornar una cadena de texto explicando la situacion.
    asientosVaciosFila(fila): que recibe un número de fila y devuelve la cantidad de butacas vacías en esa fila.
    gananciaTotal(): que calcula la ganancia total de la función, teniendo en cuenta que la entrada de los 
    menores de 14 años sale $2500 y la de los mayores $4000 en las salas 2D y $4000 y $6000 en las salas 3D.
    vaciarSala(): que vacía la sala luego de que termine la película, marcando como desocupada a todas las 
    butacas para la próxima función.

*/

class Espectador {
  constructor(dni, edad) {
    this.dni = dni;
    this.edad = edad;
  }
  edad() {
    return this.edad;
  }
  info() {
    return `Espectador: dni ${this.dni} - edad ${this.edad}`;
  }
}

class SalaDeCine {
  constructor(numero, tipo, cantFilas = 30, cantAsientos = 40) {
    // Peasignacion de parametros -> 2015
    this.numero = numero;
    this.tipo = tipo;
    this.cantFilas = cantFilas;
    this.cantAsientos = cantAsientos;
    this.sala = []
  }

  construirSala() {
    for (let i = 0; i < this.cantFilas; i++) {
      this.sala.push([]);
      for (let j = 0; j < this.cantAsientos; j++) {
        this.sala[i][j] = null;
      }
    }
    return this.sala;
  }

  info() {
    return `Sala nro ${this.numero} - ${this.tipo}`;
  }

  ocuparAsiento(fila, columna, dni, edad){
      if (fila > this.sala[fila].length) {
          return "La butaca seleccionada no existe."
      }
      this.sala[fila][columna] = new Espectador(dni, edad)
  }
}

const sala2d = new SalaDeCine(2, "2D");
const sala3d = new SalaDeCine(2, "3D");

sala2d.construirSala()

sala2d.ocuparAsiento(10, 4, 33756282, 17)
sala2d.ocuparAsiento(13, 7, 33756282, 17)

console.log(sala2d);