
import {routerAbsoluteAndFile} from './main.js'
export const mdLinks = (router, validate ) => {
    return new Promise((resolve, reject)=> {
      resolve(routerAbsoluteAndFile(router, validate)); 
    });
     
  }

  /*  mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md').then((links)=>{
    console.log(links);
    
  });  */