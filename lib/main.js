"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerAbsoluteAndFile = exports.readFile = exports.getFilesOfDir = void 0;

var _index = require("./index.js");

var _nodeHtmlParser = require("node-html-parser");

var md = require('markdown-it')();

var fetch = require('node-fetch');

// Función para parsear el contenido del archivo md 
var parserMd = function parserMd(content, router, validate) {
  var arraysLinksTotals = [];
  (0, _nodeHtmlParser.parse)(md.render("".concat(content))).querySelectorAll('a').forEach(function (link) {
    arraysLinksTotals.push({
      link: link.rawAttrs,
      text: link.childNodes[0].rawText,
      ruta: router
    });
  });

  if (validate.validate === true) {
    return Promise.all(arraysLinksTotals.map(function (link) {
      var objLink = Object.assign({}, link);
      return fetch(link.link.slice(6, link.link.length - 1)).then(function (data) {
        objLink.status = data.status, objLink.ok = data.statusText;
        return objLink;
      })["catch"](function (err) {
        objLink.status = err.message, objLink.ok = 'fail';
        return objLink;
      });
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

var readFile = function readFile(router, validate) {
  var arr = getFilesOfDir(router, []);
  return parserMd(arr.map(function (ele) {
    return _index.fs.readFileSync(ele).toString();
  }), router, validate);
}; // Función que convierte ruta en absoluta 
//si es archivo y si tiene extensión md y si es carpeta 


exports.readFile = readFile;

var routerAbsoluteAndFile = function routerAbsoluteAndFile(router, validate) {
  var routerAbsolute = (0, _index.routeIsAbsolute)(router);

  if ((0, _index.isFile)(routerAbsolute)) {
    if ((0, _index.extensionmd)(routerAbsolute)) {
      return parserMd(_index.fs.readFileSync(routerAbsolute).toString(), router, validate);
    } else {
      return [];
    }
  } else {
    return readFile(router, validate);
  }
};

exports.routerAbsoluteAndFile = routerAbsoluteAndFile;