#!/usr/bin/env node
// https://alligator.io/nodejs/command-line-arguments-node-scripts/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.args = void 0;

var _mdLinks = require("./md-links.js");

var args = process.argv[2];
exports.args = args;
var validate = process.argv[3] === '--validate' ? {
  'validate': true
} : {
  'validate': false
};
exports.validate = validate;
(0, _mdLinks.mdLinks)("".concat(args), validate).then(function (links) {
  /*   let total = 0;
   links.forEach((ele)=> { 
      if(ele.link){
         total +=1;
      } 
  })
  
    console.log(total); */
  console.log(links);
});