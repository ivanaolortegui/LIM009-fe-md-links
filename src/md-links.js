
import {routerAbsoluteAndFile} from './main.js'
export const mdLinks = (router, validate ) => {
    return new Promise((resolve, reject)=> {
      resolve(routerAbsoluteAndFile(router, validate)); 
    });  
  }

