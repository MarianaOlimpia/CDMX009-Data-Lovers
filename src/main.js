// Importamos la función filterBYTitle (que filtra por título) del archivo data.js al main.js
import {filterByTitle, getAllNews} from './data.js'
import data from './data/steam/steam.js';

// // Nodos
let newsPanel = document.querySelector('#newsPanel')
// 'let input' trae el input del DOM en el cual tiene el id #wordSearch.
let input = document.querySelector('#wordSearch')

// 'let a' trae el enlace que corresponde al botón de buscar en el DOM. En el cual tiene el id #elClick.
let a = document.querySelector('#elClick')

//let catAllNews trae el enlace que corresponde a la categoría "Todas las categorías".
let catAllNews = document.querySelector('#allTheNews')

// 'let prinTitleSearch' es para crear la lista de noticias resultado de la búsqueda por título.
let printTitleSearch = document.createElement ('li');

let categories= document.querySelectorAll(".categories");
//console.log(categories);


// //Funciones

//Obtiene la búsqueda del input y retorna el array con los resultados.
const getInputSearch = () => {
    let value = input.value
    let lista = filterByTitle(value)
    // recorrer la lista y colocar los nodos 
newsPanel.style.display='none';
let mostrarNoticias = document.querySelector('.mostrarNoticias')
mostrarNoticias.innerHTML = ""
for(let searchFilter of lista) {
  //console.log(prueba.title);
  mostrarNoticias.innerHTML += `
      <section class="resultados">
        <article class="noticia">
          <h3><a href="${searchFilter.url}">${searchFilter.title}</a></h3>
          <p>${searchFilter.contents}</p>
          <a href="${searchFilter.url}"><img src="${searchFilter.img}" alt="${searchFilter.title}"></a>
        </article>
      </section>`
 }
} 

// Obtiene la lista de noticias al seleccionar la categoría "Todas las categorías".
const getCatAllNews = () => {
  let allNews = a.getAllNews('#allTheNews')
  newsList.style.display='none';
  let mostrarNoticias = document.querySelector('.mostrarNoticias')
  for(let searchAllNews of lista) {
    //console.log(prueba.title);
    mostrarNoticias.innerHTML += `
        <section class="resultados">
          <article class="noticia">
            <h3><a href="${searchAllNews.url}">${searchAllNews.title}</a></h3>
            <p>${searchAllNews.contents}</p>
            <a href="${searchAllNews.url}"><img src="${searchAllNews.img}" alt="${searchAllNews.title}"></a>
          </article>
        </section>`
  }      
}

// // Eventos
//Agrega el evento 'click' al enlace que corresponde al botón de búsqueda.
a.addEventListener('click', getInputSearch);

catAllNews.addEventListener('click', getCatAllNews);

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

//Imprime la lista de todas las noticias.
newsList.innerHTML = `
<div id="noticiaPrincipal">
<a href="${data.appnews.newsitems[0].url}" title="${data.appnews.newsitems[0].title}"  target="_blank"><img src="${data.appnews.newsitems[0].img}" class="principal"></a>
</div>
<div>
  <ul>
  <li class= "cuatroNovedades" id="noticia1"><a href="${data.appnews.newsitems[1].url}" title="${data.appnews.newsitems[1].title}" target="_blank"><img src="${data.appnews.newsitems[1].img}" class="imgList"></a></li>
  <li class= "cuatroNovedades" id="noticia2"><a href="${data.appnews.newsitems[2].url}" title="${data.appnews.newsitems[2].title}" target="_blank"><img src="${data.appnews.newsitems[2].img}" class="imgList"></a></li>
  <li class= "cuatroNovedades" id="noticia3"><a href="${data.appnews.newsitems[3].url}" title="${data.appnews.newsitems[3].title}" target="_blank"><img src="${data.appnews.newsitems[3].img}" class="imgList"></a></li>
  <li class= "cuatroNovedades" id="noticia4"><a href="${data.appnews.newsitems[4].url}" title="${data.appnews.newsitems[4].title}" target="_blank"><img src="${data.appnews.newsitems[4].img}" class="imgList"></a></li>
  </ul>
</div>  `

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


