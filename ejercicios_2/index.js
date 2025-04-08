console.log("-------------- sumaHastaN(n) --------------")
function sumaHastaN(n) {    
    // Escribe una función recursiva que sume todos los números desde 1 hasta n.

    if (n === 1) {
        return 1;
    }

    return n + sumaHastaN(n - 1); 
}

console.log(sumaHastaN(2))

console.log("-------------- factorial(n) --------------")


function factorial(n) {
    // Escribe una función recursiva para calcular el factorial de un número n.

    if(n === 0 || n === 1){
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(3))

console.log("-------------- contarDigitos(numero) --------------")


function contarDigitos(numero) {
    // Escribe una función recursiva que cuente la cantidad de dígitos en un número entero.

    if(numero < 10){
        return 1
    }

    return 1 + contarDigitos(Math.floor(numero / 10)) 
}

console.log(contarDigitos(9))

console.log("-------------- invertirCadena(cadena) --------------")


function invertirCadena(cadena) {
    // Escribe una función recursiva que invierta una cadena de texto.

    if(cadena === ''){
        return ''
    }

    return invertirCadena(cadena.slice(1)) + cadena[0]

}

console.log(invertirCadena('hola'))

console.log("-------------- potencia(base, exponente) --------------")


function potencia(base, exponente) {
    // Escribe una función recursiva que calcule la potencia de un número base elevado a un exponente exponente.

    if(exponente === 0){
        return 1
    }

    return base * potencia(base, exponente - 1)

}

console.log(potencia(2,3))