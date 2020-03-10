//Aquí le estamos pidiendo que importe la función o array 'data' de './data/steam/steam.js'.
import data from './data/steam/steam.js';
// import {getWord} from './main.js'

// export const example = () => {
//     return 'example';

// }
// console.log(data);

//Obtiene el botón.
const btnSearch = document.querySelector('#iconSearch');

//Obtiene la palabra que se ingresa en el input de búsqueda por palabra. let getWord es la función que se encarga de ello y donde se va a almacenar la palabra como valor. letwordSearch es la variable que obtiene el input.
export let getWord = () => {
    let wordSearch = document.querySelector('#wordSearch');
    console.log(wordSearch.value);
}

//Se agrega un evento, en este caso 'click' a la variable que trae el botón de búsqueda. Se agrega 'getWord' después de la coma para indicarle que esa será la función que realizará una vez escuche el click.
btnSearch.addEventListener('click', getWord);

// //Función que hace el array para traer todos los elementos con título.
export const filtTitle = data.appnews.newsitems.filter (titulo => {
return titulo.title
}) 

//Ciclo que trae todas las noticias por título.
 for (let i = 0; i<filtTitle.length; i++) {
   let tituloNoticia = filtTitle[i].title;
   console.log(tituloNoticia);
 }

console.log(filtTitle);

var filtWord = filtTitle.filter (newsTitle => {
  return newsTitle.title.includes('All') 
})

console.log(filtWord);

// //Función para filtrar por palabra.
//  export const filtWord = filtTitle.filter (wordSearchTitle => {
//   return wordSearchTitle.title.includes(getWord())
//   })

// //Ciclo que trae todas las noticias por palabra.
//   for (let i = 0; i<filtWord.length; i++) {
//     let tituloNoticia = filtWord[i].title;
//     console.log(tituloNoticia);
//   }
// console.log(filtWord);

