
const productos = [
    {
        id: "1",
        nombre: "Producto A",
        prcio: 10
    },
    {
        id: "2",
        nombre: "Producto B",
        prcio: 20
    },
    {
        id: "3",
        nombre: "Producto C",
        prcio: 30
    },
    {
        id: "4",
        nombre: "Producto D",
        prcio: 40
    },
]

console.log("---- CARRITO ----")


function addToCart(id){
   const newItem = productos.find(producto => producto.id === id)

   console.log(newItem)
}




// COERICION DE TIPOS DE DATO

console.log( 3 > (2 > 1) )




