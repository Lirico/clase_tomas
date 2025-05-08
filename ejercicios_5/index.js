// Ejercicio 1 (Recursion)
// Crea una función recursiva que sume solo los números pares de un arreglo.
function sumaPares(arr) {

    if(arr.length === 0){
        return 0
    }

    const primerElemento = arr[0]

    const resto = arr.slice(1)

    const suma = primerElemento % 2 === 0 ? primerElemento : 0

    return suma + sumaPares(resto)
}


// Ejercicio 2 (Recursion)
// Crea una función recursiva que reemplace todas las apariciones de un carácter por otro en una cadena.
function reemplazarCaracter(cadena, original, nuevo) {

    if(cadena.length === 0) return ''

    const cadenaRecortada = cadena.slice(1)

    const primerElemento = cadena[0]
    
    const caracter = primerElemento === original ? nuevo : primerElemento

    return caracter + reemplazarCaracter(cadenaRecortada, original, nuevo)
}



// Ejercicio 3 (Closures)
// Crea una función que permita agregar tareas a una lista y obtener la lista completa, pero sin exponer la lista directamente.
function createTodoList() {
    let tareas = []

    return function(tarea){
        if(tarea){
            tareas.push(tarea)
        }
        return tareas
    }
}

// Ejercicio 4 (Funciones de orden superior)
// Crea una función llamada componer que reciba dos funciones f y g, y devuelva una nueva función
//  que, al ser llamada con un valor x, devuelva el resultado de aplicar primero g a x y luego f al resultado.

function componer(f, g) {
    return function(x) { 
        return f(g(x))
    }
}

// Ejercicio 5 (Funciones de orden superior)
// Crea una función llamada repetir que reciba una función fn y un número n, y devuelva una nueva función 
// que, al ser llamada con un valor x, aplique fn a x un total de n veces.
function repetir(fn, n) {
    return function(x) {
        let resultado = x;

        for(let i = 0; i < n; i++){
            resultado = fn(x) 
        }
        return resultado;
    }
}

// Tenemos que usar un for para aplicar fn a x .... tantas veces (n veces).

// Ejercicio 6
/* 
    Crear clases Persona y Estudiante con herencia
    Objetivo
    Crear una clase base Persona con propiedades y métodos básicos.

    Crear una clase derivada Estudiante que herede de Persona y agregue propiedades y métodos propios.

    Practicar el uso de constructor, super(), y métodos personalizados.

    Especificaciones
    Clase Persona:

    Propiedades:

    nombre (string)

    edad (número)

    Método:

    saludar(): imprime "Hola, mi nombre es [nombre] y tengo [edad] años."

    Clase Estudiante (hereda de Persona):

    Propiedades adicionales:

    carrera (string)

    notas (arreglo de números)

    Métodos adicionales:

    promedio(): calcula y retorna el promedio de las notas.

    Sobrescribe saludar() para que imprima:
    "Hola, soy [nombre], estudio [carrera] y tengo [edad] años."
*/
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, carrera, notas){
        super(nombre,edad)
        this.carrera = carrera
        this.notas = notas
    }

    promedio(){
        let suma = 0
        for(i = 0; i < this.notas.length; i++){
            suma += notas[i]
        }
        return suma / this.notas.length
    }

    saludar(){
        return `Hola, soy ${nombre}, estudio ${carrera} y tengo ${edad} años.`
    }
}