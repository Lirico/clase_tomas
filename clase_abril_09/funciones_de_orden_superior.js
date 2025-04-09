/******* FUNCIONES DE ORDEN SUPERIOR (CALLBACKS) *******/

// Son funciones que reciben funciones como argumento.


const frutas = ["Mora", "Manzana", "Tomate", "Pera"]

// console.log(frutas.filter(fruta => fruta.length === 4))
// function filter(arreglo, condicion){
//     const elemFiltrados = []

//     for (const elemento of arreglo) {
//         if(condicion(elemento)){
//             elemFiltrados.push(elemento)
//         }
//     }

//     return elemFiltrados
// }

// console.log(filter(frutas, elemento => elemento.length === 4))
// console.log(filter(frutas, (elemento) => elemento.length > 4))

/* 
    arr.forEach()
    arr.map()
    arr.filter()
    arr.find()
    arr.reduce()
*/

// Metodo callback para recorrer un arreglo. Algoritmo de tipo PROCEDIMIENTO

// console.log(frutas.forEach(fruta => {
//     const $li = document.createElement('li');
//     $li.textContent = fruta;
//     document.body.appendChild($li)
// }))
// console.log(frutas.map(fruta => {
//     return fruta + "podrida"
// }))

// console.log(frutas.find(fruta => fruta.length === 4))


// const numeros = [1,2,3,4,5] // 28


// console.log(numeros.reduce((acumulador, elemento) => {
//     return acumulador * elemento
// }, 1))
// const otroNum = 10
// const sonIguales = [1,2,3,4,10,6,7]

// console.log(sonIguales.some(num => num === otroNum))




