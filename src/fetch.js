const fetch = require('node-fetch');

export const fetchLink = (objLink, link) => {
  return fetch(link.link.slice(6, link.link.length - 1)).then((data) => {
    objLink.status = data.status,
      objLink.ok = data.statusText;
    return objLink;
  }).catch((err) => {
    objLink.status = err.message,
      objLink.ok = 'fail';
    return objLink;
  })

}