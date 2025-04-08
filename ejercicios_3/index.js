/************* RECURSION **********/

// Ejercicio 1 - Escribe una función recursiva que reciba un arreglo de números 
// y devuelva la suma de todos sus elementos.
function sumaArreglo(arr) {

    if(arr === ''){
        return 0        // si el arreglo esta vacio, retorna 0
    }

    /* return arr[0] + sumaArreglo(arr.slice(1)) */   // obtengo el primer elemento y lo sumo con los demas

}

console.log(sumaArreglo([]))

// Ejercicio 2 - Escribe una función recursiva que determine si un elemento 
// específico existe dentro de un arreglo.
function buscarElemento(arr, elemento) {

    if(arr === ''){
        return false    // Si el arreglo esta vacio, retorna false
    }

    if(elemento === arr[0]){
        return true                          // si el elemento es igual al primer elemento del arreglo devuelve true
    }

    return buscarElemento(arr.slice(0))      // si no es igual al primer elemento del arreglo lo sacamos y seguimos con el siguiente elemento

}

console.log(buscarElemento())

// Ejercicio 3 - Escribe una función recursiva que encuentre el número más grande en un arreglo de números.
function encontrarMaximo(arr) {

    if(arr === ''){
        return 0
    }

    /* if(arr[0] > arr.slice(1)){
        return arr
    } */

    return arr[0] > encontrarMaximo(arr.slice(1))

}

console.log(encontrarMaximo([23,42,12]))

/************* CLOSURES **********/

// Ejercicio 1 - Crea una función que actúe como un contador. Cada vez que se llame al contador, 
// debe incrementar y devolver el valor actual.
function createCounter() {
    let contador = 0

    return function(){
        contador++

        console.log(contador)
    }
}

createCounter()

// Ejercicio 2 - Crea una función que permita generar saludos personalizados para diferentes nombres.
function createGreeting(greeting) {

    return function(nombre){
        console.log(`${greeting} ${nombre}`)
    }
}

const hola = saludar('hola')
const chau = saludar('chau')

console.log(hola('Pedro'))
console.log(chau('Pedro'))