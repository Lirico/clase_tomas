/* 
    DOM -> Document Object Model 

    Representa la forma en la JS entiende el documento que elementos que se que encuentra insertado
    en el navegador.
    Este documento esta compuesto por un arbol de nodos en forma de elemntos HTML y JS lo entiende
    como si fuese un OBJETO GIGANTE.
*/

const d = document;
const c = console;

// c.log(document)
// c.log(document.doctype)
// c.log(document.documentElement)
// c.log(document.head)
// c.log(document.body)

// Consultas de selector

// Consulta por...
// tag
// const $p = document.getElementsByTagName('p')

// // class
// const $clase = document.getElementsByClassName('clase')

// // id
// const $id = document.getElementById('id') // X

// // name
// const $username = document.getElementsByName('username') // X


// const $divClase = document.querySelector('.clase') // X

// const $todosClase = document.querySelectorAll('.clase') // X



////////////////////////////////////////////////

let contador = 0

const $a = document.querySelector('a');
const $button = document.querySelector('button')


$a.textContent = contador
$a.target = "_blank"
$a.style.color = 'red';




