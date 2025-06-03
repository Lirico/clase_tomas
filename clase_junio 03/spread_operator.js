
/* SPREAD OPERATOR */

// Nos permite fusionar el contenido, elemento por elemento de un arreglo en otro.

// ...

// const arr1 = [1,2,3,4,5] // 1 2 3 4 5
// const arr2 = [6,7,8,9,10]

// const arr3 = [...arr1, ...arr2]


// console.log(arr3)

let carrito = []

function insertarProducto(producto){
    carrito = [...carrito, producto]
    console.log(carrito)
}

insertarProducto("Termo Stanley")
insertarProducto("Zapatilla")
insertarProducto("Pepino")
