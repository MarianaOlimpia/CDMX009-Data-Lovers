// Aquí le estamos pidiendo que importe la función o array 'data' de './data/steam/steam.js'.
import data from './data/steam/steam.js';

// // Funciones
// Función para filtrar por título
export function filterByTitle(title) {
  // eslint-disable-next-line max-len
  return data.appnews.newsitems.filter((titulo) => titulo.title.toLowerCase().includes(title.toLowerCase()));
}

// Función para traer todos los títulos.
export function getAllNews() {
  return data.appnews.newsitems.filter((titulo) => titulo.title);
}

// Función para traer los títulos por feedname.
export function filterNewsByFeedname(categoryId) {
  return data.appnews.newsitems.filter((news) => news.feedname === categoryId);
}
