//Importamos la función filterBYTitle (que filtra por título) del archivo data.js al main.js
import {filterByTitle} from './data.js'
import data from './data/steam/steam.js';

// // Nodos
let newsPanel = document.querySelector('#newsPanel')
// 'let input' trae el input del DOM en el cual tiene el id #wordSearch.
let input = document.querySelector('#wordSearch')

// 'let a' trae el enlace que corresponde al botón de buscar en el DOM. En el cual tiene el id #elClick.
let a = document.querySelector('#elClick')

// 'let prinTitleSearch' es para crear la lista de noticias resultado de la búsqueda por título.
let printTitleSearch = document.createElement ('li');

let categories= document.querySelectorAll(".categories");
console.log(categories);


// //Funciones

//Obtiene la búsqueda del input y retorna el array con los resultados.
const getInputSearch = () => {
    let value = input.value
    let lista = filterByTitle(value)
    // recorrer la lista y colocar los nodos 
newsPanel.style.display='none';
let mostrarNoticias = document.querySelector('.mostrarNoticias')
mostrarNoticias.innerHTML += `
      <section class="resultados">
        <article class="noticia">
          <h3>${lista[0].title}</h3>
          <p>${lista[0].contents}</p>
          <img src="${lista[0].img}" alt="${lista.title}">
        </article>
      </section>`
//    console.log(lista);
}

// // Eventos
//Agrega el evento 'click' al enlace que corresponde al botón de búsqueda.
a.addEventListener('click', getInputSearch)

//
newsPanel.innerHTML = `
<div id="noticiaPrincipal">
<a href="${data.appnews.newsitems[0].url}" title="${data.appnews.newsitems[0].title}"  target="_blank"><img src="${data.appnews.newsitems[0].img}" class="principal"></a>
</div>
<div>
  <ul>
  <li class= "cuatroNovedades" id="noticia1"><a href="${data.appnews.newsitems[1].url}" title="${data.appnews.newsitems[1].title}" target="_blank"><img src="${data.appnews.newsitems[1].img}" class="imgList"></a></li>
  <li class= "cuatroNovedades" id="noticia2"><a href="${data.appnews.newsitems[3].url}" title="${data.appnews.newsitems[3].title}" target="_blank"><img src="${data.appnews.newsitems[3].img}" class="imgList"></a></li>
  <li class= "cuatroNovedades" id="noticia3"><a href="${data.appnews.newsitems[5].url}" title="${data.appnews.newsitems[5].title}" target="_blank"><img src="${data.appnews.newsitems[5].img}" class="imgList"></a></li>
  <li class= "cuatroNovedades" id="noticia4"><a href="${data.appnews.newsitems[7].url}" title="${data.appnews.newsitems[7].title}" target="_blank"><img src="${data.appnews.newsitems[7].img}" class="imgList"></a></li>
  </ul>
</div>  `
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


