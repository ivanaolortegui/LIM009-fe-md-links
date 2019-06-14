#!/usr/bin/env node
//const [, , ...args] = process.argv;
// https://alligator.io/nodejs/command-line-arguments-node-scripts/
"use strict";

var _mdLinks = require("./md-links.js");

var args = process.argv[2];
var validate = process.argv[3] === '--validate' ? {
  'validate': true
} : {
  'validate': false
};
console.log(validate.validate); // console.log(`Hello World ${args}`);
// /home/ivana/LIM009-fe-md-links/test/index.spec.js

(0, _mdLinks.mdLinks)("".concat(args), validate).then(function (links) {
  console.log(links);
});
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