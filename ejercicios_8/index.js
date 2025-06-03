// Ejercicio 1 (Recursion) - Escribe una función recursiva que invierta el orden de los elementos de un arreglo.
function invertirArreglo(arr) {
    if (arr.length == 0) {
        return ''
    }

    return invertirArreglo(arr[0]) + []
}

console.log(invertirArreglo([1, 2, 3, 4, 5]))

// Ejercicio 2 (Funciones de orden superior) - Crea una función llamada negar que reciba una función de condición y devuelva 
// una nueva función que invierta el resultado de la condición (si devuelve true, ahora devuelve false y viceversa).
function negar(fnCondicion) {
    // Tu codigo
}

// Ejercicio 3 (Funciones de orden superior) - Crea una función llamada ejecutarConRetraso que reciba una función fn y un 
//  en milisegundos, y devuelva una nueva función que, al ser llamada, ejecute fn después del tiempo indicado.
// Pista: Investigar con que funcion de JS se puede realizar una ejecucion con retraso.
function ejecutarConRetraso(fn, milisegundos) {
    // Tu codigo
}

// Ejercicio 4 (Clases)
/* 
    Implementar la clase "Tiempo" que modela una duracion en horas, minutos y segundos.

    Se deben implementar las siguientes operaciones:

    tiempoASegundos: Operación que toma una variable de tipo tiempo y retorna la cantidad en segundos.
    tiemposDesdeSegundos: Operación que recibe un tiempo en segundos como parámetro y retorna una variable de tipo tiempo, en horas minutos y segundos.
    mayorDuracion: Operación que recibe dos variables de tipo tiempo y retorna la de mayor duración.
    info: Debe retornar una cadena con la siguiente estructura: 'horas':'minutos':'segundos'.

    Nota: Una variable de tipo tiempo seria una instancia de la clase tiempo.
*/

class Tiempo {
    constructor(horas, minutos, segundos) {
        this.horas = horas
        this.minutos = minutos
        this.segundos = segundos
    }

    tiempoASegundos() {
        return this.horas * 3600 + this.minutos * 60 + this.segundos
    }

    tiemposDesdeSegundos(segundos) {
        const horas, minutos, segundos = 
    }
}

// Ejercicio 5 (Clases)
/* 
    Modelar la clase "Cronometro", que contiene un tiempo inicial y un tiempo final.

    Se deben implementar las siguientes operaciones:

    Constructor: Queremos modelar el tiempo inicial y final con la clase "Tiempo" del ejercicio anterior. Se pueden tener dos 
    variables que se inicializaran en otra operación de la interface.
    Comenzar: Debe recibir las hs,min y seg iniciales.
    Finalizar: Debe recibir las hs,min y seg finales.
    TiempoEmpleado: Devuelve una variable de tipo Tiempo con la diferencia entre el tiempo inicial y el final.
*/

// Ejercicio 6 (Clases)
/* 
    Modelar la clase "Rectangulo" a partir de los dos lados que lo definen.

    Se deben implementar las siguientes operaciones:

    Constructor: Recibe las longitudes de ambos lados
    area: calcula y devuelve el area del rectangulo
    perimetro: calcula y devuelve el perimetro
    info: devuelve la longitud de los lados
    Luego, modelar la clase "Cuadrado" teniendo unicamente como variable interna en la estructura una variable de tipo "Rectangulo". 
    La clase Cuadrado debe tener las mismas operaciones que la clase Rectangulo.

    Ayuda:

    Área(Rectángulo) = lado1 * lado2

    Área(Cuadrado) = lado^2

    Perímetro(Rectangulo) = 2 * lado1 + 2 * lado2

    Perímetro(Cuadrado) = 4 * lado
*/

class Rectangulo {
    constructor(lado1, lado2) {
        this.lado1 = lado1
        this.lado2 = lado2
    }

    area() {
        return this.lado1 * this.lado2
    }

    perimetro() {
        return 2 * this.lado1 + 2 * this.lado2
    }

    info() {
        return `Lado 1: ${this.lado1}, Lado 2: ${this.lado2}`
    }
}

class Cuadrado {
    constructor(lado) {
        this.lado = lado
    }

    area() {
        return this.lado^2
    }

    perimetro() {
        return 4 * this.lado
    }

    info() {
        return `Lado: ${this.lado}`
    }
}