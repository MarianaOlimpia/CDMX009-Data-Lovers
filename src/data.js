import data from './data/steam/steam.js';

const completeData = data.appnews.newsitems;

export const filterData = () => {
  let author = completeData.results.filter(filtro => filtro.author != '');
  return author;
}


// esta es una función de ejemplo
//console.log (data);
//export const example = () => {
//  return 'data';
//};

//filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos 
//que sí cumplan con la condición.

//sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. 
//El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy,
//nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, 
//indica si se quiere ordenar de manera ascendente o descendente.