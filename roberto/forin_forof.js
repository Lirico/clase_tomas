/********** FOR IN *********/
// For in -> Recorre objetos

const objeto = {
    nombre: "Juan",
    edad: 23,
    genero: "Masculino"
}

for (const propiedad in objeto) {
    console.log(propiedad)
}

/********** FOR OF *********/
// For of -> Recorre arreglos

const numeros = [1,2,3,4,5]

for (const numero of numeros) {
    console.log(numero)
}


