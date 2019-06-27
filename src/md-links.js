
import {routerAbsoluteAndFile} from './main.js'
//Función que me retorna la promesa con el array de objetos
export const mdLinks = (router, validate ) => {
    return new Promise((resolve, reject)=> {
      resolve(routerAbsoluteAndFile(router, validate)); 
    });  
  }

