
// https://alligator.io/nodejs/command-line-arguments-node-scripts/
// https://codeburst.io/javascript-array-distinct-5edc93501dc4


import { mdLinks } from './md-links.js'
import { stats, broken } from './main.js'
//import {bin, path } from './bin.js'
 
  export const cli = (argsmt) => {
     const arg = {};  
    if (argsmt.indexOf('--validate') !=-1)  {   
      arg.validate = true  
   } else {
    arg.validate = false;
   } 
   if  (argsmt.indexOf('--stats') !=-1) {
    arg.stats = true
   }  else {
    arg.stats = false;
   } 
   
   return arg;
 }
 //const options = cli(bin)


export const mdLink = (path, options)=> {
   return mdLinks(path, options).then((links) => {
    if (options.stats === true && options.validate === true) {
   console.log(broken(stats(links), links))
   return broken(stats(links), links);
  } else if(options.stats === true){
    console.log(stats(links))
    return stats(links);
  } else {
    console.log(links);
    return links;
  }
  }) 
}
//mdLink(path, options)
 
  /*  mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md').then((links)=>{
    console.log(links);
    
  });  */