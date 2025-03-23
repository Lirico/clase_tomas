function mesesDelAño(array) { // ["Enero", "Mayo", "Octubre", "Noviembre", "Julio", "Marzo"]
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"

    // Resolver con usando "for...of'.
    // Tu código:

    const mesesEncontrados = []

    for(const mes of array){
        if(mes === "Enero" || mes === "Marzo" || mes === "Noviembre"){
            mesesEncontrados.push(mes)
        }
    }

    
    


}



console.log("-------------- todosIguales(arreglo) --------------")


function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    // Resolver con usando "for...of'.
    //Escribe tu código aquí:

    const primerElemento = arreglo[0]

    for(const elemento of arreglo){
        if(elemento !== primerElemento){
            return false
        }
    }

    return true
}

console.log(todosIguales([43,43,42]))

function mesesDelAño(array) { 
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Resolver con usando "for...of'.
    // Tu código:
}

console.log("-------------- CalcularPromedioCalificaciones(estudiante) --------------")

function calcularPromedioCalificaciones(estudiante){
    // Dado un objeto estudiante compuesto por materias con sus calificaciones,
    // Utiliza un for...in para sumar las calificaciones
    // Y luego retorna el promedio de las calificaciones.
    // Resolver con usando "for...in'.
    // Tu código:

    estudiante = {
        Matematica: 8,
        Lengua: 7,
        Filosofia: 4,
        Fisica: 10
    }

    let sumaCalificaciones = 0
    let cantidadMaterias = 0

    for(const calificaciones in estudiante){
        sumaCalificaciones += estudiante[calificaciones]

        cantidadMaterias++

    }

    return sumaCalificaciones / cantidadMaterias
}

console.log(calcularPromedioCalificaciones())

console.log("-------------- calcularCantidadProductos(inventario) --------------")


function calcularCantidadProductos(inventario){
    // Dado un objeto que representa un inventario con productos,
    // calcular la cantidad de productos que tiene el inventario
    // Retornar dicha cantidad
    // Resolver con usando "for...in'.
    // Tu código:

    inventario = {
        Producto1: 'Celular',
        Producto2: 'Mesa',
        Producto3: 'Heladera',
        Producto4: 'TV',
    }

    let cantidadProductos = 0

    for(const producto in inventario){
        cantidadProductos++
    }

    return cantidadProductos

}

console.log(calcularCantidadProductos())

console.log("-------------- filtrarPaisesPorPoblacion(paises) --------------")


function filtrarPaisesPorPoblacion(paises){
    // Dado un objeto con paises, filtrar todos los paises cuya poblacion es mayor a 10
    // en un array.
    // Retornar dicho array.
    // Resolver con usando "for...in'.
    // Tu código:

    paises = {
        Argentina: { poblacion: 16 },
        Chile: { poblacion: 5 },
        Colombia: { poblacion: 12 },
        Paraguay: { poblacion: 10 },
        Brasil: { poblacion: 15 }
    }

    let paisesFiltrados = []

    for(const pais in paises){
        if(paises[pais].poblacion > 10){
            paisesFiltrados.push(pais)
        }
    }

    return paisesFiltrados

}

console.log(filtrarPaisesPorPoblacion())