/*********** RECURSION  ***********/


// Ejercicio 1 - Escribe una función recursiva que determine si una cadena es un palíndromo 
// (se lee igual de izquierda a derecha que de derecha a izquierda).
function esPalindromo(cadena) {

    if(cadena.length <= 1) {
        return true;
    }
    
    if(cadena[0] !== cadena[cadena.length - 1])

    return esPalindromo(cadena.slice(1, -1))
}


// Ejercicio 2 - Escribe una función recursiva que cuente cuántas vocales hay en una cadena.
function contarVocales(cadena) {
    if(cadena === ''){ // cadena.length === 0
        return 0
    }

    let vocales = ['a','e','i','o','u'] 

    if(vocales.includes(cadena[0])){
        return 1 + contarVocales(cadena.slice(1))
    }

    return contarVocales(cadena.slice(1))

}

// console.log(contarVocales('manolo'))

/*********** CLOSURES  ***********/
// Ejercicio 1 - Crea una función que permita agregar frases a un banco y luego obtener todas 
// las frases almacenadas.
function createPhraseBank() {
    let frases = []

    return function(frase){
        if (frase){
            frases.push(frase)
        } else {
            return frases
        }
    }
}

const banco = createPhraseBank()

banco('Hola')
banco('chau')

// console.log(banco())

// Ejercicio 2 - Crea una función que permita generar usuarios con contraseñas y verificar si 
// la contraseña ingresada es correcta.
function createUser(password) {

    return function(ingresar){
        return password === ingresar
    }
}

// function createUser(username, password) {

//     return {
//         getUsername: function() {
//             return username;
//         },
//         checkPassword: function(ingresar){
//             return password === ingresar
//         }
//     }
// }

// const usuario = createUser('Tomas', '12345')


// const usuario = createUser('Tomas', '12345')

// console.log(usuario('Tomas'))
// console.log(usuario('12345'))


/*********** FUNCIONES DE ORDEN SUPERIOR  ***********/
// Ejercicio 1 - Crea una función aplicarDescuento que reciba una lista de precios y una función 
// que calcule el descuento. La función de descuento debe recibir un precio y devolver el precio 
// con el descuento aplicado.

const precios = [1000, 5000, 3500]

// Funcion de descuento
function descuento(precio) {
    return precio * 0.20
}
function descuento2(precio) {
    return precio * 0.40
}

// Funcion aplicar descuento
function aplicarDescuento(precios, fnDescuento){
    return precios.map(precio => precio - fnDescuento(precio))
}


// Ejercicio 2 - Crear una replica de la funcionalidad del metodo "find" como funcion independiente.
function find(arreglo, condicion){
    for (const elemento of arreglo) {
        if (condicion(elemento)) {
            return elemento;
        }
    }

    return;
}
