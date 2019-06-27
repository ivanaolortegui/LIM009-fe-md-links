"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLink = exports.cli = void 0;

var _mdLinks = require("./md-links.js");

var _main = require("./main.js");

// https://alligator.io/nodejs/command-line-arguments-node-scripts/
// https://codeburst.io/javascript-array-distinct-5edc93501dc4
//Función cli 
var cli = function cli(argsmt) {
  var arg = {};

  if (argsmt.indexOf('--validate') != -1) {
    arg.validate = true;
  } else {
    arg.validate = false;
  }

  if (argsmt.indexOf('--stats') != -1) {
    arg.stats = true;
  } else {
    arg.stats = false;
  }

  return arg;
}; // Función donde le paso los argumentos para la función que retorna la promesa


exports.cli = cli;

var mdLink = function mdLink(path, options) {
  return (0, _mdLinks.mdLinks)(path, options).then(function (links) {
    if (options.stats === true && options.validate === true) {
      console.log((0, _main.broken)((0, _main.stats)(links), links));
      return (0, _main.broken)((0, _main.stats)(links), links);
    } else if (options.stats === true) {
      console.log((0, _main.stats)(links));
      return (0, _main.stats)(links);
    } else {
      console.log(links);
      return links;
    }
  });
};
/*  mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md').then((links)=>{
  console.log(links);
  
});  */


exports.mdLink = mdLink;