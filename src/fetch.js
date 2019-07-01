const fetch = require('node-fetch');

export const fetchLink = (objLink, link) => {
  return fetch(link.link).then((data) => {
    objLink.status = data.status
    if(data.status > 400 & data.status<600 ){ 
      objLink.ok = 'fail';
    } else {
      objLink.ok = data.statusText;
    } 
    return objLink;
  }).catch((err) => {
    objLink.status = err.message,
    objLink.ok = 'fail';
    return objLink;
  })

}

//http://aplicaciones.cultura.gob.pe/pages/pgw_login