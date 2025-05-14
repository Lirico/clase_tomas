// Ejercicio 1 (Recursion)
// Crea una función recursiva que cuente cuántos elementos de un arreglo son mayores que un valor dado.
function contarMayores(arr, valor) {

    if(arr.length === 0){
        return 0
    }

    if(arr[0] > valor){
        return 1 + contarMayores(arr.slice(1), valor) //valor
    }
    
    return contarMayores(arr.slice(1), valor) //valor
}

// console.log(contarMayores([5, 8, 3, 10, 11], 6))
// console.log('--------------------------------------------------------------------------')

// Ejercicio 2 (Recursion) 
// Calcular la total de los números impares hasta n
function totalImpares(n) {
    if (n <= 0) {
        return 0; // si n es 0 o menor que 0, termina la recursion
    }

    if(n % 2 !== 0){
        return n + totalImpares(n - 2)  // 13 / 11 / 9 / 7 / 5 / 3 / 1 = 49
    }

    return totalImpares(n - 1)


    /* for (let i = 1; i <= n; i += 2) {
        console.log(i);
    } */

}

// console.log(totalImpares(13)) // 1 - 3 - 5 - 7 - 9 - 11 - 13 = 49
// console.log('--------------------------------------------------------------------------')


// Ejercicio 3 (Funciones de orden superior)
// Crea una función llamada ordenarPor que reciba un arreglo y una función de comparación, y devuelva el arreglo ordenado según esa función.
function compareFnMenorAMayor(a, b){
    return a - b
}

function ordenarPor(arreglo, fnComparacion) {
    return arreglo.sort(fnComparacion)
}


// Ejercicio 4 (Funciones de orden superior)
// Crea una función llamada crearFiltro que reciba un valor limite y devuelva una función que reciba 
// un número y devuelva true si el número es mayor que el limite, o false en caso contrario. Luego, 
// usa esta función para filtrar un arreglo de números.
function limite(limite) {
    return function(n){
        return n > limite
    }
}

function filter(arreglo, condicion){
    const filtrados = []

    for (const elemento of arreglo) {
        if(condicion(elemento)){
            filtrados.push(elemento)
        }
    }

    return filtrados
}

const condicion = limite(8)

// console.log(filter([1,5,8,10,3,7], condicion))


// Ejercicio 5 (Funciones de orden superior)
// Crea una función llamada transformar que reciba un arreglo y una función fn, y devuelva un nuevo 
// arreglo con los elementos transformados aplicando fn a cada uno.


function transformar(arreglo, fn) {
    return arreglo.map(fn)          //cada elemento del arreglo se le aplica fn
}

transformar([1, 2, 3], (n) => n * 2)




// Ejercicio 6 (Clases)
/* 
    Sistema básico de gestión de empleados.

    Especificaciones

    Clase Empleado:

     - Propiedades:

        - nombre (string)

        - salario (número)

    Métodos:

        - mostrarInfo(): imprime "Empleado: [nombre], Salario: $[salario]"

    Clase Gerente (hereda de Empleado):

        - Propiedades adicionales:

            - departamento (string)

        - Métodos adicionales:

            - Sobrescribe mostrarInfo() para imprimir:
              "Gerente: [nombre], Departamento: [departamento], Salario: $[salario]"

            - aumentarSalario(porcentaje): aumenta el salario en el porcentaje dado.
*/

class Empleado{
    constructor(nombre, salario){
        this.nombre = nombre
        this.salario = salario
    }

    mostrarInfo(){
        return `Empleado: ${nombre}, Salario: ${salario}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, salario, departamento){
        super(nombre, salario)
        this.departamento = departamento
    }

    mostrarInfo(){
        return `Gerente: ${nombre}, Departamento: ${departamento}, Salario: ${salario}`
    }

    aumentarSalario(porcentaje){
        let aumento = salario * (porcentaje / 100) // multiplica el salario por el porcentaje convertido a decimal

        let total = salario + aumento 

        return total
    }
}

































/************* EJEMPLOS **************/
// function map(arreglo, fn){
//     const newArr = []

//     for (elemento of arreglo) {
//         newArr.push(fn(elemento))
//     }

//     return newArr
// }

// console.log(map([1,2,3], (n) => n * 2))
// console.log(map([1,2,3], (n) => n ** 2))

// Array.prototype.map2 = function(fn) {
//     const newArr = []

//     for (elemento of this) {
//         newArr.push(fn(elemento))
//     }

//     return newArr
// }

// const arr = [1,2,3]

// console.log(arr.map2((num) => num * 2))
