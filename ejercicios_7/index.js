// Ejercicio 1 (Recursion) - Escribe una función recursiva que cuente cuántas veces
// aparece un dígito específico dentro de un número entero.
function contarDigito(numero, digito) {
  // Tu codigo:
}

// Ejercicio 2 (Funciones de Orden Superior) - Crea una función llamada crearMultiplicador
// que reciba un número n y devuelva una nueva función que reciba otro número y lo multiplique por n.
function crearMultiplicador(n) {
  // Tu codigo:
}

// Ejercicio 3 (Funciones de Orden Superior) - Crea una función llamada contarSi que reciba un arreglo
// y una función de condición, y devuelva cuántos elementos del arreglo cumplen esa condición.
function contarSi(arreglo, fnCondicion) {
  // Tu codigo:
}

// Ejercicio 4 (Funciones de Orden Superior) - Crea una función llamada aplicarFunciones que reciba un
// arreglo de funciones y un valor inicial, y aplique cada función al resultado acumulado, devolviendo
// el resultado final.
function aplicarFunciones(funciones, valorInicial) {
  // Tu codigo:
}

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
