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

// const $a = document.querySelector('a');
// const $button = document.querySelector('button')

// $a.textContent = "Pepe"
// $a.target = "_blank"
// $a.style.color = 'red';

//////////////////////////////////////////////

// const pokemons = [
//     {
//         img: "https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif?resize=480%2C342&ssl=1",
//         name: "Pikachu",
//         type: "Electric",
//         bgColor: "yellow"
//     },
//     {
//         img: "https://upload.wikimedia.org/wikipedia/it/archive/4/43/20120529174523%21Bulbasaur.png",
//         name: "Bulbasaur",
//         type: "Plant/Venom",
//         bgColor: "green"
//     },
//     {
//         img: "https://freepngimg.com/thumb/pokemon/117717-charmander-png-image-high-quality-thumb.png",
//         name: "Charmander",
//         type: "Fire",
//         bgColor: "orange"
//     },
//     {
//         img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8355c42b-bec4-426e-a0fa-f39523ea6c02/da74aa6-367253cd-ef9e-41fe-83df-64b857675335.png/v1/fill/w_848,h_720/vamo_a_calmarno_render_by_taringamemes_da74aa6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODM1NWM0MmItYmVjNC00MjZlLWEwZmEtZjM5NTIzZWE2YzAyXC9kYTc0YWE2LTM2NzI1M2NkLWVmOWUtNDFmZS04M2RmLTY0Yjg1NzY3NTMzNS5wbmciLCJ3aWR0aCI6Ijw9ODQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZNF3N5MBYnZKSWpRRuWvSYFLbTvxacfR439C1L60lDk",
//         name: "Squirtle",
//         type: "Water",
//         bgColor: "blue"
//     },
//     {
//         img: "https://www.com/static-assets/content-assets/cms2/img/pokedex/full/017.png",
//         name: "Pidgeotto",
//         type: "Flying/Normal",
//         bgColor: "gold"
//     },
// ]

// const $cards = document.querySelector(".cards");
// const $fragment = document.createDocumentFragment()



// pokemons.forEach(pokemon => {
//     const {img, name, type, bgColor} = pokemon;

//     // Creando los elementos de la card
//     const $card = document.createElement("div"),
//       $img = document.createElement("img"),
//       $h3 = document.createElement("h3"),
//       $p = document.createElement("p");
    
//     // Insertar elementos
//     $fragment.append($card)
//     $card.appendChild($img);
//     $card.appendChild($h3);
//     $card.appendChild($p);
    
//     // Insertar atributos
//     $card.className = "card";
//     $img.src = img;
//     $img.alt = name;
//     $h3.textContent = name;
//     $p.textContent = type;
    
//     // Estilos
//     $card.style.backgroundColor = bgColor;
// })s

// $cards.appendChild($fragment)

// const $p = document.querySelector('p')

// const $button = document.querySelector('button');

// $p.classList.add("manolo")

// $p.classList.remove("pepe")

// console.log($p.classList)