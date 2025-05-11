// Ejercicio 1 (Recursion)
// Crea una función recursiva que cuente cuántos elementos de un arreglo son mayores que un valor dado.
function contarMayores(arr, valor) {
    // tu codigo
}

// Ejercicio 2 (Recursion) 
// Calcular la suma de los números impares hasta n
function sumaImpares(n) {
    // tu codigo
}

// Ejercicio 3 (Funciones de orden superior)
// Crea una función llamada ordenarPor que reciba un arreglo y una función de comparación, y devuelva el arreglo ordenado según esa función.
function ordenarPor(arreglo, fnComparacion) {
    // tu codigo
}

// Ejercicio 4 (Funciones de orden superior)
// Crea una función llamada crearFiltro que reciba un valor limite y devuelva una función que reciba 
// un número y devuelva true si el número es mayor que el limite, o false en caso contrario. Luego, 
// usa esta función para filtrar un arreglo de números.
function crearFiltro(limite) {
    // tu codigo
}

// Ejercicio 5 (Funciones de orden superior)
// Crea una función llamada transformar que reciba un arreglo y una función fn, y devuelva un nuevo 
// arreglo con los elementos transformados aplicando fn a cada uno.
function transformar(arreglo, fn) {
    // Tu codigo
}


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