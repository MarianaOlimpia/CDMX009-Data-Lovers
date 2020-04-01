// Importamos la función filterBYTitle (que filtra por título) del archivo data.js al main.js
import {
  filterByTitle, getAllNews, filterNewsByFeedname,
} from './data.js';
import data from './data/steam/steam.js';

// // Nodos
const newsPanel = document.querySelector('#newsPanel');
// 'let input' trae el input del DOM en el cual tiene el id #wordSearch.
const input = document.querySelector('#wordSearch');
// 'a' trae el enlace que corresponde al botón de buscar en el DOM id #elClick.
const a = document.querySelector('#elClick');
// let newsList corresponde a la sección en HTML donde se mostrarán las listas de noticias.
const newsList = document.querySelector('.news');
// let lista es la variable que va a contener los arrays.
let lista = [];
// let catAllNews trae el enlace que corresponde a la categoría "Todas las categorías".
const catAllNews = document.querySelector('#allTheNews');
// Nodo para traer todas las categorías
const category = document.querySelectorAll('.categories');

// //Funciones
// Oculta el panel de novedades para mostrar el espacio donde se imprime la lista de noticias.
const showNews = () => {
  newsPanel.style.display = 'none';
  newsList.innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const searchFilter of lista) {
    newsList.innerHTML += `
      <section class="resultados">
        <article class="noticia">
          <h3><a href="${searchFilter.url}" target="_blank">${searchFilter.title}</a></h3>
          <p>${searchFilter.contents}</p>
          <a href="${searchFilter.url}" target="_blank"><img src="${searchFilter.img}" alt="${searchFilter.title}"></a>
        </article>
      </section>`;
  }
};

// Obtiene la búsqueda del input y retorna el array con los resultados.
const getInputSearch = () => {
  const value = input.value;
  lista = filterByTitle(value);
  showNews();
};

// Obtiene la lista de noticias al seleccionar la categoría "Todas las categorías".
const getCatAllNews = () => {
  // let allNewsOption = catAllNews.id;
  lista = getAllNews();
  // console.log(lista);
  showNews();
};

// Función que genera el array según la categoría electa en Submenú de Categorías.
for (let i = 0; i < category.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  category[i].addEventListener('click', () => {
    const categoryId = category[i].id;
    lista = filterNewsByFeedname(categoryId);
    showNews();
  });
}

// // Eventos
// Agrega el evento 'click' al enlace que corresponde al botón de búsqueda.
a.addEventListener('click', getInputSearch);
catAllNews.addEventListener('click', getCatAllNews);

// Imprimiendo noticias en Panel de Novedades.
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
</div>  `;
