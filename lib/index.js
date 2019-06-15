"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFile = exports.extensionmd = exports.routeIsAbsolute = exports.isDirectory = void 0;

var path = require('path');

var fs = require('fs'); // Verifica si es direcctorio


var isDirectory = function isDirectory(router) {
  var stats = fs.lstatSync(router);
  return stats.isDirectory();
};

exports.isDirectory = isDirectory;

var routeIsAbsolute = function routeIsAbsolute(router) {
  if (!path.isAbsolute("".concat(router))) {
    return path.resolve("".concat(router));
  } else {
    return router;
  }
}; // Retorna un buleano si cumple con la extosión md


exports.routeIsAbsolute = routeIsAbsolute;

var extensionmd = function extensionmd(router) {
  return path.extname(router) === '.md';
}; //Leer archivos md


exports.extensionmd = extensionmd;

var isFile = function isFile(router) {
  var stats = fs.lstatSync(router);
  return stats.isFile();
};

exports.isFile = isFile;