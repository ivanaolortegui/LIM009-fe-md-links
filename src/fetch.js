const fetch = require('node-fetch');

export const fetchLink = (objLink, link) => {
  return fetch(link.link).then((data) => {
    objLink.status = data.status,
      objLink.ok = data.statusText;
    return objLink;
  }).catch((err) => {
    objLink.status = err.message,
      objLink.ok = 'fail';
    return objLink;
  })

}