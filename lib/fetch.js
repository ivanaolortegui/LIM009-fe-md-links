"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchLink = void 0;

var fetch = require('node-fetch');

var fetchLink = function fetchLink(objLink, link) {
  return fetch(link.link.slice(6, link.link.length - 1)).then(function (data) {
    objLink.status = data.status, objLink.ok = data.statusText;
    return objLink;
  })["catch"](function (err) {
    objLink.status = err.message, objLink.ok = 'fail';
    return objLink;
  });
};

exports.fetchLink = fetchLink;