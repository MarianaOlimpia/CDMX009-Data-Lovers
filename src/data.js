// Aquí le estamos pidiendo que importe la función o array 'data' de './data/steam/steam.js'.
import data from './data/steam/steam.js';

// // Funciones

// Función para filtrar por título
export function filterByTitle(title) {
  return data.appnews.newsitems.filter(titulo =>titulo.title.toLowerCase().includes(title.toLowerCase()));
}
// console.log(filterByTitle);

// Función para traer todos los títulos.
export function getAllNews() {
  return data.appnews.newsitems.filter(titulo =>titulo.title);
}

export function getSteamBlog() {
  return data.appnews.newsitems.filter(steam =>steam.feedname === 'tf2_blog');
}

export function getPcGamer() {
  return data.appnews.newsitems.filter(pcGamer =>pcGamer.feedname === 'pcgamer');
}