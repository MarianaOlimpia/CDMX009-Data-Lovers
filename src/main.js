import {filterByTitle} from './data.js'

let input = document.querySelector('#wordSearch')
let a = document.querySelector('#elClick')

a.addEventListener('click',()=>{
    let value = input.value
    let lista = filterByTitle(value)
    // recorrer la lista y colocar los nodos 

    console.log(lista);
})
    
// console.log(filtTitle);

// // //Búsqueda por palabra
// //Obtiene el botón.
// const btnSearch = document.querySelector('#iconSearch');

// //Obtiene la palabra que se ingresa en el input de búsqueda por palabra. let getWord es la función que se encarga de ello y donde se va a almacenar la palabra como valor. letwordSearch es la variable que obtiene el input.
// let getWord = () => {
//     let wordSearch = document.querySelector('#wordSearch');
//     console.log(wordSearch.value);
// }

// //Se agrega un evento, en este caso 'click' a la variable que trae el botón de búsqueda. Se agrega 'getWord' después de la coma para indicarle que esa será la función que realizará una vez escuche el click.
// btnSearch.addEventListener('click', getWord);

// // // Búsqueda por categorías.
// //Trae el elemento "Todas las categorías"
// const all = document.querySelector('#all');

// //Agrega el evento 'click' a "Todas las categorías"
// all.addEventListener('click', filtTitle);


