#!/usr/bin/env node

// https://alligator.io/nodejs/command-line-arguments-node-scripts/
// https://codeburst.io/javascript-array-distinct-5edc93501dc4

export const path = process.argv[2];
 
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
   return arg 
 }
 const options = cli(process.argv)
 
import { mdLinks } from './md-links.js'
import { stats, broken } from './main.js'
mdLinks(path, options).then((links) => {
  if (options.stats === true && options.validate === true) {
 console.log(broken(stats(links), links))
} else if(options.stats === true){
  console.log(stats(links))
} else {
 console.log(links);
}
})

  /*  mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md').then((links)=>{
    console.log(links);
    
  });  */