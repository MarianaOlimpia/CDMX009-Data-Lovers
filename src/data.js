//Aquí le estamos pidiendo que importe la función o array 'data' de './data/steam/steam.js'.
import data from './data/steam/steam.js';

// // Funciones

//Función para filtrar por título
export function filterByTitle(title){
  return data.appnews.newsitems.filter(titulo =>titulo.title.toLowerCase().includes(title.toLowerCase())) // no debe ser exactamente igual (regex)
}

//Función para traer todos los títulos.
export function getAllNews(title){
  return data.appnews.newsitems.filter(titulo =>titulo.title.includes(title)) // no debe ser exactamente igual (regex)
}
console.log(getAllNews);
 

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

