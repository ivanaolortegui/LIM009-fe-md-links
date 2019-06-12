#!/usr/bin/env node


const [, , ...args] = process.argv;
// console.log(`Hello World ${args}`);
// /home/ivana/LIM009-fe-md-links/test/index.spec.js

import { mdLinks} from './md-links.js'
mdLinks(`${args}`).then((links)=> {
  console.log(links);
  
})

/* 
export const isfile = (router) => {
  return new Promise((resolve, reject) => {
    fs.stat(`${router}`, (err, stats) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(stats.isFile())
      }
    })
  })
} */





