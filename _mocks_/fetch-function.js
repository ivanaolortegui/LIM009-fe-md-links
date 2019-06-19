
export const fetchLinkStatus =(route) => {
  const obj = {};
  return fetch(route).then((data) => {
    obj.status = data.status,
    obj.ok = data.statusText;
    return objLink;
  }).catch((err) => {
    obj.status = err.message,
    obj.ok = 'fail';
    return objLink;
  })
}
fetchLinkStatus ('https://es.wikipedia.org/wiki/Markdown')


 /*  "jest": {
    "automock": false,
    "setupFiles": [
      "./setupJest.js"
    ]
  } */