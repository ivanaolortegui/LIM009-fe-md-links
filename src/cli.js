#!/usr/bin/env node

// https://alligator.io/nodejs/command-line-arguments-node-scripts/
export const args = process.argv[2];
export const validate = process.argv[3] === '--validate' ? { 'validate' : true } :
 { 'validate' : false };

import { mdLinks } from './md-links.js'

mdLinks(`${args}`, validate).then((links) => {
/*   let total = 0;
 links.forEach((ele)=> { 
    if(ele.link){
       total +=1;
    } 
})

  console.log(total); */
  console.log(links);
  

})





