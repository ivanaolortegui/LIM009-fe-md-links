"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _main = require("./main.js");

//Función que me retorna la promesa con el array de objetos
var mdLinks = function mdLinks(router, validate) {
  return new Promise(function (resolve, reject) {
    resolve((0, _main.routerAbsoluteAndFile)(router, validate));
  });
};

exports.mdLinks = mdLinks;