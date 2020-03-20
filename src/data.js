//Aquí le estamos pidiendo que importe la función o array 'data' de './data/steam/steam.js'.
import data from './data/steam/steam.js';

// // Funciones

//Función para filtrar por título
export function filterByTitle(title){
  return data.appnews.newsitems.filter(titulo =>titulo.title.toLowerCase().includes(title.toLowerCase())) // no debe ser exactamente igual (regex)
}
//console.log(filterByTitle);

//Función para traer todos los títulos.
export function getAllNews(title){
  return data.appnews.newsitems.filter(titulo =>titulo.title)
}
// Función para traer sólo las noticias de "Tf2 Blog".
export function getSteamBlog(){
  return data.appnews.newsitems.filter(steam =>steam.feedname==='tf2_blog')
}

// Función para traer sólo las noticias de la categoría "Pc Gamer".
export function getPcGamer(){
  return data.appnews.newsitems.filter(pcGamer =>pcGamer.feedname==='pcgamer')
}
 
// Función para traer sólo las noticias de la categoría "Product Updates".
export function getProductUpdates(){
  return data.appnews.newsitems.filter(productUp =>productUp.feedname==='steam_updates')
}

// Función para traer sólo las noticias de la categoría "Eurogamer".
export function getEurogamer(){
  return data.appnews.newsitems.filter(eurogamer =>eurogamer.feedname==='eurogamer')
}

// Función para traer sólo las noticias de la categoría "Rock, Paper, Shotgun".
export function getRockPaperShotgun(){
  return data.appnews.newsitems.filter(rps =>rps.feedname==='rps')
}

//Ciclo que trae todas las noticias por título.
/* for (let i = 0; i<filterTitle.length; i++) {
   let newsTitle = filterTitle[i].title;
   console.log(newsTitle);
 }

console.log(filterByTitle);*/

// //Intento de filtrar por palabra siguiendo video de .filter
// var filtWord = filtTitle.filter (newTitle => {
//   return newTitle.title.includes('All') 
// })

// console.log(filtWord);

// //Función para filtrar por palabra.
//  export const filtWord = filtTitle.filter (wordSearchTitle => {
//   return wordSearchTitle.title.includes(getWord())
//   })

// //Ciclo que trae todas las noticias por palabra.
//   for (let i = 0; i<filtWord.length; i++) {
//     let newsTitle = filtWord[i].title;
//     console.log(newsTitle);
//   }
// console.log(filtWord);

// //

