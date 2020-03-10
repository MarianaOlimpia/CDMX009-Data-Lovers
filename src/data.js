//Aquí le estamos pidiendo que importe la función o array 'data' de './data/steam/steam.js'.
import data from './data/steam/steam.js';

// export const example = () => {
//     return 'example';

// }
// console.log(data);

//Función que hace array para traer todos los elementos con título.
export const filtTitle = data.appnews.newsitems.filter (titulo => {
return titulo.title
}) 
 console.log(filtTitle);

 //Ciclo que trae todos los títulos de los elementos de la función filtTitle.
 for (let i = 0; i<filtTitle.length; i++) {
   let tituloNoticia = filtTitle[i].title;
   console.log(tituloNoticia);
 }



// fetch('https://raw.githubusercontent.com/MarianaOlimpia/CDMX009-Data-Lovers/master/src/data/steam/steam.json')
//.then(data => data.json)
//.then(datos => {
//  console.log(datos)})