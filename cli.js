#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const util = require('util');


const [, , ...args] = process.argv;
// console.log(`Hello World ${args}`);
// /home/ivana/LIM009-fe-md-links/test/index.spec.js

const routeIsAbsolute = (args) => {
  if (!path.isAbsolute(`${args}`)) {
    return path.resolve(`${args}`)
  }
  else {
    return path.isAbsolute(`${args}`)
  }

};

const router = routeIsAbsolute(args)
console.log(router)


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
}

isfile(args).then((stats) => console.log(stats))

const extensionmd = (router) => {
  const arrExtension = [];
  if (path.extname(router) === '.md') {
    arrExtension.push(router);
  } else {
    arrExtension
  }
  return arrExtension;
}

console.log(extensionmd('/home/ivana/LIM009-fe-md-links/test/index.md'))


const readdir = util.promisify(fs.readdir);
readdir('/home/ivana/LIM009-fe-md-links/test/').then((file) => {
  console.log(file);
})


