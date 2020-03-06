import data from './data/steam/steam.js';

// export const example = () => {
//     return 'example';

// }
// console.log(data);
//funcion que hace array para traer todos los elementos con titulo
export const filtTitle = data.appnews.newsitems.filter (titulo => {
return titulo.title
}) 
 console.log(filtTitle);

 //ciclo que trae todos los titulos de los elementos de la funcion filtTitle
 for (let i = 0; i<filtTitle.length; i++) {
   let tituloNoticia = filtTitle[i].title;
   console.log(tituloNoticia);
 }