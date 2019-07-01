"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchLink = void 0;

var fetch = require('node-fetch');

var fetchLink = function fetchLink(objLink, link) {
  return fetch(link.link).then(function (data) {
    objLink.status = data.status;

    if (data.status > 400 & data.status < 600) {
      objLink.ok = 'fail';
    } else {
      objLink.ok = data.statusText;
    }

    return objLink;
  })["catch"](function (err) {
    objLink.status = err.message, objLink.ok = 'fail';
    return objLink;
  });
}; //http://aplicaciones.cultura.gob.pe/pages/pgw_login


exports.fetchLink = fetchLink;