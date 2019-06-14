#!/usr/bin/env node
//const [, , ...args] = process.argv;
"use strict";

var _mdLinks = require("./md-links.js");

var args = process.argv[2];
var validate = process.argv[3]; // console.log(`Hello World ${args}`);
// /home/ivana/LIM009-fe-md-links/test/index.spec.js
//const options = require('options');

(0, _mdLinks.mdLinks)("".concat(args)).then(function (links) {
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