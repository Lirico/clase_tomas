// Ejercicio 1 (Recursion) - Escribe una función recursiva que cuente cuántas veces
// aparece un dígito específico dentro de un número entero.
function contarDigito(numero, digito) {
    if (numero.length == 0) {
        return 0
    }

    const newArray = numero += []

    if (newArray[0].includes(digito)) {
        return 1 + contarDigito(numero.slice(1), digito)
    }

    return contarDigito(numero.slice(1), digito)
}

console.log(contarDigito(4314141141, 4))

// Ejercicio 2 (Funciones de Orden Superior) - Crea una función llamada crearMultiplicador
// que reciba un número n y devuelva una nueva función que reciba otro número y lo multiplique por n.
function crearMultiplicador(n) {
    return function (x) {
        return x * n
    }
}


// Ejercicio 3 (Funciones de Orden Superior) - Crea una función llamada contarSi que reciba un arreglo
// y una función de condición, y devuelva cuántos elementos del arreglo cumplen esa condición.
function contarSi(arreglo, fnCondicion) {
    let contador = 0
    for(i = 0; i < arreglo.length; i++){
        
    }
    return fnCondicion(arreglo)
}

function par(arreglo){
    return arreglo % 2 === 0

}


console.log(contarSi([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], par))

// Ejercicio 4 (Funciones de Orden Superior) - Crea una función llamada aplicarFunciones que reciba un
// arreglo de funciones y un valor inicial, y aplique cada función al resultado acumulado, devolviendo
// el resultado final.

const funciones = [suma, resta, multi]

function aplicarFunciones(funciones, valorInicial) {
    let resultado = valorInicial
    for(let i = 0; i < funciones.length; i++){
        resultado = funciones[i](resultado) //llama a la funcion en la posicion de i y aplica el resultado actual
    }
    return resultado //una vez que termina el for, muestra el resultado de todas las funciones 
}

function suma(n){
    return n + 5
}

function resta(n){
    return n - 2
}

function multi(n){
    return n * 10
}

console.log(aplicarFunciones(funciones, 5))

// Ejercicio 5 (Clases)
/*
    Implementar la clase Universidad.

    Especificaciones

     - Atributos:

        - nombre (string)

        - cantidadAlumnos (número)

        - carreras (arreglo)

    Métodos:

        - dameNombre(): retorna el nombre

        - info(): retorna una cadena con el nombre, cantidad de alumnos y lista de carreras.
*/

// Ejercicio 6 (Clases)
/* 
    Implementar la clase "Propiedad" que modela un inmueble, con una estructura definida por los siguientes 
    componentes:

    Especificaciones:

    - Atributos:
        - Calle
        - Número
        - Localidad
        - Año de construcción
        - Cantidad de ambientes

    - Metodos: 

        - mismaLocalidad(): Operación que recibe dos propiedades y retorna true si estan en la misma localidad 
        y false en caso contrario.
        - mismaCalle(): Operación que recibe dos propiedades y retorna true si estan en la misma calle y false 
        en caso contrario.
        - mayorNumeración(): Operación que recibe dos propiedades y si están en la misma calle de la misma 
        localidad, retorna la propiedad que posee mayor numeración. Si están calles o en localidades diferentes debe lanzar una excepción.
        - calculaImpuestoARBA(): Operación que retorna el porcentaje de impuesto inmobiliario de una propiedad, 
        según la siguiente regla:
            - Propiedades entre 1871 y 1949:
                - Entre 1 y 3 ambientes: 5% de impuesto
                - Entre 4 y 6 ambientes: 10% de impuesto
                - Más de 6 ambientes: 25 % de impuesto
            - Propiedades desde 1950 hasta la actualidad:
                - Entre 1 y 5 ambientes: 5% de impuesto
                - Más de 5 ambientes: 35 % de impuesto
        - info(): Debe devolver una cadena de texto con la calle, el numero y la localidad.
*/

class Universidad{
    constructor(nombre, cantidadAlumnos, carreras){
        this.nombre = nombre
        this.cantidadAlumnos = cantidadAlumnos
        this.carreras = carreras
    }

    dameNombre(){
        return this.nombre
    }

    info(){
        return `Nombre: ${this.nombre}, Cantidad de Alumnos: ${this.cantidadAlumnos}, Carreras: ${this.carreras}`
    }
    
}

const harvard = new Universidad('Harvard', 20000, ['Derecho', 'Economia', 'Ciencias Politicas'])
console.log(harvard.info())

class Propiedad{
    constructor(calle, numero, localidad, añoDeConstruccion, cantidadDeAmbientes){
        this.calle = calle
        this.numero = numero
        this.localidad = localidad
        this.añoDeConstruccion = añoDeConstruccion
        this.cantidadDeAmbientes = cantidadDeAmbientes
    }

    mismaLocalidad(){

    }

    mismaCalle(){

    }

    mayorNumeración(){

    }

    calculaImpuestoARBA(){
        if(this.añoDeConstruccion >= 1871 && this.añoDeConstruccion <= 1949){
            if(this.cantidadDeAmbientes >= 1 && this.cantidadDeAmbientes <= 3){
                return '5% de impuesto'
            }
            else if(this.cantidadDeAmbientes >= 4 && this.cantidadDeAmbientes <= 6){
                return '10% de impuesto'
            }
            else{
                return '25% de impuesto'
            }
        }
        else if(this.añoDeConstruccion >= 1950 && this.añoDeConstruccion <= 2025){
            if(this.cantidadDeAmbientes >= 1 && this.cantidadDeAmbientes <= 5){
                return '5% de impuesto'
            }
            else{
                return '35% de impuesto'
            }
        }
    }

    info(){
        return `Calle: ${this.calle}, Numero: ${this.numero}, Localidad: ${this.localidad}`
    }
}

const propiedad = new Propiedad()
