#!/usr/bin/env node
// https://alligator.io/nodejs/command-line-arguments-node-scripts/
"use strict";

var _mdLinks = require("./md-links.js");

var args = process.argv[2];
var validate = process.argv[3] === '--validate' ? {
  'validate': true
} : {
  'validate': false
};
(0, _mdLinks.mdLinks)("".concat(args), validate).then(function (links) {
  console.log(links);
});