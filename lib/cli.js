#!/usr/bin/env node
"use strict";

var _mdLinks = require("./md-links.js");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2); // console.log(`Hello World ${args}`);
// /home/ivana/LIM009-fe-md-links/test/index.spec.js


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