// Importamos la función filterBYTitle (que filtra por título) del archivo data.js al main.js
import {
  // eslint-disable-next-line max-len
  filterByTitle, getAllNews, getSteamBlog, getPcGamer, getProductUpdates, getEurogamer, getRockPaperShotgun, filterNewsByFeedname
} from './data.js';
import data from './data/steam/steam.js';

// // Nodos
const newsPanel = document.querySelector('#newsPanel');
// 'let input' trae el input del DOM en el cual tiene el id #wordSearch.
const input = document.querySelector('#wordSearch');

// 'a' trae el enlace que corresponde al botón de buscar en el DOM id #elClick.
const a = document.querySelector('#elClick');

// let showNews corresponde a la sección en HTML donde se mostrarán las listas de noticias.
const showNews = document.querySelector('.showNews');

// let lista es la variable que va a contener los arrays.
let lista = [];

// Antiguos Nodos para Funciones Individuales.
// // let catAllNews trae el enlace que corresponde a la categoría "Todas las categorías".
// const catAllNews = document.querySelector('#allTheNews');

// // const catTF2blog trae el enlace que corresponde a la categoría "Steam Blog".
// const catTF2blog = document.querySelector('#tf2_blog');

// // const catTF2blog trae el enlace que corresponde a la categoría "Pc Gamer".
// const catPcGamer = document.querySelector('#pcgamer');

// // const catProductUpdates trae el enlace que corresponde a la categoría "Product Updates".
// const catProductUpdates = document.querySelector('#steam_updates');

// // const catProductUpdates trae el enlace que corresponde a la categoría "Eurogamer".
// const catEurogamer = document.querySelector('#eurogamer');

// // const catProductUpdates trae el enlace que corresponde a la categoría "Rock, Paper, Shotgun".
// const catRPS = document.querySelector('#rps');

// Nodo para traer todas las categorías
const category = document.querySelectorAll('.categories');

// Nodo para guardar la categoría seleccionada por el usuario.
let filteredNews = [];

// // Eventos
// Agrega el evento 'click' al enlace que corresponde al botón de búsqueda.
a.addEventListener('click', getInputSearch);
catAllNews.addEventListener('click', getCatAllNews);
catTF2blog.addEventListener('click', getSteamNews);
catPcGamer.addEventListener('click', getPcGamerNews);
catProductUpdates.addEventListener('click', getProductUpdatesNews);
catEurogamer.addEventListener('click', getEurogamerNews);
catRPS.addEventListener('click', getRPSNews);


// //Funciones

// Oculta el panel de novedades para mostrar el espacio donde se imprime la lista de noticias.
const showAndHide = () => {
  newsPanel.style.display = 'none';
  showNews.innerHTML = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const searchFilter of lista) {
    showNews.innerHTML += `
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
  showAndHide();
};

// Obtiene la lista de noticias al seleccionar la categoría "Todas las categorías".
const getCatAllNews = () => {
  // let allNewsOption = catAllNews.id;
  lista = getAllNews();
  // console.log(lista);
  showAndHide();
};

// // Obtiene la lista de noticias al seleccionar la categoría "Steam Blog".
// const getSteamNews = () => {
//   lista = getSteamBlog();
//   // console.log(lista);
//   showAndHide();
// };

// // Obtiene la lista de noticias al seleccionar la categoría "Pc Gamer".
// const getPcGamerNews = () => {
//   lista = getPcGamer();
//   // console.log(lista);
//   showAndHide();
// };

// // Obtiene la lista de noticias al seleccionar la categoría "Product Updates".
// const getProductUpdatesNews = () => {
//   lista = getProductUpdates();
//   // console.log(lista)
//   showAndHide();
// };

// // Obtiene la lista de noticias al seleccionar la categoría "Eurogamer".
// const getEurogamerNews = () => {
//   lista = getEurogamer();
//   // console.log(lista)
//   showAndHide();
// };

// // Obtiene la lista de noticias al seleccionar la categoría "Rock, Paper, Shotgun".
// const getRPSNews = () => {
//   lista = getRockPaperShotgun();
//   // console.log(lista)
//   showAndHide();
// };

// Función que genera el array según la categoría electa en Submenú de Categorías.
for (let i = 0; i < category.length; i += 1) {
  category[i].addEventListener('click', () => {
    let categoryId = category[i].id;
    filteredNews = filterNewsByFeedname(categoryId);
    console.log(filteredNews) // 1 son correctas // 2 tunear el show and hide (showNews) 3.-  Usar la lista para dibujar las noticias
    showAndHide(filteredNews);
  });
}


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
