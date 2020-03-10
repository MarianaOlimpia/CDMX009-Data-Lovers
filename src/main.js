import {filtTitle} from './data.js';
    
console.log(filtTitle);

//Obtiene el botón.
const btnSearch = document.querySelector('#iconSearch');

//Obtiene la palabra que se ingresa en el input de búsqueda por palabra. let getWord es la función que se encarga de ello y donde se va a almacenar la palabra como valor. letwordSearch es la variable que obtiene el input.
export let getWord = () => {
    let wordSearch = document.querySelector('#wordSearch');
    console.log(wordSearch.value);
}

//Se agrega un evento, en este caso 'click' a la variable que trae el botón de búsqueda. Se agrega 'getWord' después de la coma para indicarle que esa será la función que realizará una vez escuche el click.
btnSearch.addEventListener('click', getWord);

