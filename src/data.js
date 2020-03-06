import data from './data/steam/steam.js';

export const example = () => {
    return 'example';

}
console.log(data);

let filtro = data.appnews.newsitems.filter (titulo => {
return titulo.title
}) 
 console.log(filtro);