/******** RECURSION *******/
/* 
    Es una funcion que se llama a si misma en
    forma de bucle.
*/

// function cuentaRegresiva(numero){

//     console.log(numero)

//     let proximoNumero = numero - 1

//     if(proximoNumero >= 0){
//         cuentaRegresiva(proximoNumero)
//     }
// }

// // 3 2 1 0

// cuentaRegresiva(3)


// SECUENCIA DE FIBONACCI
// f(n) = f(n-2) + f(n-1) donde n >= 2;
// 0, 1, 1, 2, 3, 5, 8, 13...

function fibonacci(n){
    if (n < 2) {
        return n;
    };

    return fibonacci(n - 2) + fibonacci(n - 1);
}



