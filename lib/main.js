"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerAbsoluteAndFile = exports.readDir = exports.getFilesOfDir = exports.stats = exports.broken = void 0;

var _fetch = require("./fetch.js");

var _index = require("./index.js");

var _nodeHtmlParser = require("node-html-parser");

var md = require('markdown-it')();

// funcion para stats y validate
var broken = function broken(links, arr) {
  var brokens = 0;
  arr.forEach(function (ele) {
    return ele.ok === 'fail' ? brokens += 1 : brokens += 0;
  });
  var result = links.concat("\nBroken : ".concat(brokens));
  return "".concat(result);
}; // Funcion para stats


exports.broken = broken;

var stats = function stats(links) {
  var total = links.length;
  var unique = [];
  links.forEach(function (ele) {
    unique.indexOf(ele.link) === -1 ? unique.push(ele.link) : unique;
  });
  return "Total :".concat(total, "\nUnique :").concat(unique.length);
}; // Función para parsear el contenido del archivo md 


exports.stats = stats;

var parserMd = function parserMd(content, router, validate) {
  var arraysLinksTotals = [];
  (0, _nodeHtmlParser.parse)(md.render("".concat(content))).querySelectorAll('a').forEach(function (link) {
    if (!link.childNodes[0]) {
      arraysLinksTotals.push({
        link: link.attributes.href,
        text: '',
        ruta: router
      });
    } else {
      arraysLinksTotals.push({
        link: link.attributes.href,
        text: link.childNodes[0].rawText,
        ruta: router
      });
    }
  });

  if (validate.validate === true) {
    return Promise.all(arraysLinksTotals.map(function (link) {
      var objLink = Object.assign({}, link);
      return (0, _fetch.fetchLink)(objLink, link);
    }));
  } else {
    return arraysLinksTotals;
  }
}; // Leer carpetas y recursión 


var getFilesOfDir = function getFilesOfDir(router, arrExtension) {
  var arrFiles = _index.fs.readdirSync(router);

  arrFiles.forEach(function (ele) {
    var routerAbsolute = _index.path.join(router, ele);

    if ((0, _index.isDirectory)(routerAbsolute)) {
      getFilesOfDir(routerAbsolute, arrExtension);
    } else {
      if ((0, _index.extensionmd)(routerAbsolute)) {
        arrExtension.push(routerAbsolute);
      }
    }
  });
  return arrExtension;
}; //Leer Archivos


exports.getFilesOfDir = getFilesOfDir;

var readDir = function readDir(router, validate) {
  var arr = getFilesOfDir(router, []);
  return parserMd(arr.map(function (ele) {
    return _index.fs.readFileSync(ele).toString();
  }), router, validate);
}; // Función que convierte ruta en absoluta 
//si es archivo y si tiene extensión md y si es carpeta 


exports.readDir = readDir;

var routerAbsoluteAndFile = function routerAbsoluteAndFile(router, validate) {
  var routerAbsolute = (0, _index.routeIsAbsolute)(router);

  if ((0, _index.isFile)(routerAbsolute)) {
    if ((0, _index.extensionmd)(routerAbsolute)) {
      return parserMd(_index.fs.readFileSync(routerAbsolute).toString(), router, validate);
    } else {
      return [];
    }
  } else {
    return readDir(router, validate);
  }
};

exports.routerAbsoluteAndFile = routerAbsoluteAndFile;