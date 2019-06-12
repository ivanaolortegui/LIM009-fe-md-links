"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerAbsoluteAndFile = exports.readFile = exports.getFilesOfDir = exports.fs = void 0;

var _index = require("./index.js");

var _nodeHtmlParser = require("node-html-parser");

var md = require('markdown-it')();

var fs = require('fs');

exports.fs = fs;

var parserMd = function parserMd(content, router) {
  var arraysLinksTotals = [];
  (0, _nodeHtmlParser.parse)(md.render("".concat(content))).querySelectorAll('a').forEach(function (link) {
    arraysLinksTotals.push({
      link: link.rawAttrs,
      text: link.childNodes[0].rawText,
      ruta: router
    });
  });
  return arraysLinksTotals;
}; // Leer carpetas y recursión 


var getFilesOfDir = function getFilesOfDir(router, arrExtension) {
  var arrFiles = fs.readdirSync(router);
  arrFiles.forEach(function (ele) {
    var routerAbsolute = path.join(router, ele);

    if ((0, _index.isDirectory)(routerAbsolute)) {
      getFilesOfDir(routerAbsolute, arrExtension);
    } else {
      if ((0, _index.extensionmd)(routerAbsolute)) {
        arrExtension.push(routerAbsolute);
      }
    }
  });
  return arrExtension;
}; //console.log(getFilesOfDir('/home/ivana/LIM009-fe-md-links/test/', []));
//Leer Archivos


exports.getFilesOfDir = getFilesOfDir;

var readFile = function readFile(router) {
  var arr = getFilesOfDir(router, []);
  return parserMd(arr.map(function (ele) {
    return fs.readFileSync(ele).toString();
  }), router);
};

exports.readFile = readFile;

var routerAbsoluteAndFile = function routerAbsoluteAndFile(router) {
  var routerAbsolute = (0, _index.routeIsAbsolute)(router);

  if ((0, _index.isFile)(routerAbsolute)) {
    if ((0, _index.extensionmd)(routerAbsolute)) {
      //console.log(parserMd(fs.readFileSync(routerAbsolute).toString(), router));
      return parserMd(fs.readFileSync(routerAbsolute).toString(), router);
    }
  } else {
    return readFile(router);
  }
};

exports.routerAbsoluteAndFile = routerAbsoluteAndFile;