//Importamos la función filterBYTitle (que filtra por título) del archivo data.js al main.js
import {filterByTitle} from './data.js'
import data from './data/steam/steam.js';

// // Nodos
let noticiaPrincipal = document.querySelector('#noticiaPrincipal').innerHTML = `
    <div id="noticiaPrincipal">${data.appnews.newsitems[0].title}
    <img src="${data.appnews.newsitems[0].img}">
    <p>${data.appnews.newsitems[0].contents}</p>
    </div>`
    
// 'let input' trae el input del DOM en el cual tiene el id #wordSearch.
let input = document.querySelector('#wordSearch')

// 'let a' trae el enlace que corresponde al botón de buscar en el DOM. En el cual tiene el id #elClick.
let a = document.querySelector('#elClick')

// 'let prinTitleSearch' es para crear la lista de noticias resultado de la búsqueda por título.
let printTitleSearch = document.createElement ('li');


// //Funciones

//Obtiene la búsqueda del input y retorna el array con los resultados.
const getInputSearch = () => {
    let value = input.value
    let lista = filterByTitle(value)
    // recorrer la lista y colocar los nodos 

    console.log(lista);
}

// // Eventos
//Agrega el evento 'click' al enlace que corresponde al botón de búsqueda.
a.addEventListener('click', getInputSearch)
    
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


