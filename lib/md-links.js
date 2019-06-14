"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _main = require("./main.js");

var mdLinks = function mdLinks(router, validate) {
  return new Promise(function (resolve, reject) {
    resolve((0, _main.routerAbsoluteAndFile)(router, validate));
  });
};
/*  mdLinks('/home/ivana/LIM009-fe-md-links/test/readme.md').then((links)=>{
  console.log(links);
  
});  */


exports.mdLinks = mdLinks;