
const md = require('markdown-it')();
const fetch = require('node-fetch');
import { isDirectory, routeIsAbsolute, extensionmd, isFile, path, fs } from './index.js'
import { parse } from 'node-html-parser';

// Función para parsear el contenido del archivo md 
const parserMd = (content, router, validate) => {
  let arraysLinksTotals = [];
  parse(md.render(`${content}`)).querySelectorAll('a').forEach((link) => {
    arraysLinksTotals.push({
      link: link.rawAttrs,
      text: link.childNodes[0].rawText,
      ruta: router
    })
  })
  if (validate.validate === true) {
    return Promise.all(arraysLinksTotals.map((link) => {
      const objLink = Object.assign({}, link)
      return fetch(link.link.slice(6, link.link.length - 1)).then((data) => {
        objLink.status = data.status,
        objLink.ok = data.statusText;
        return objLink;
      }).catch((err) => {
        objLink.status = err.message,
        objLink.ok = 'fail';
        return objLink;
      })
    }))
  } else {
    return arraysLinksTotals;
  }
}

// Leer carpetas y recursión 

export const getFilesOfDir = (router, arrExtension) => {
  const arrFiles = fs.readdirSync(router)

  arrFiles.forEach((ele) => {
    const routerAbsolute = path.join(router, ele)
    if (isDirectory(routerAbsolute)) {
      getFilesOfDir(routerAbsolute, arrExtension);

    } else {
      if (extensionmd(routerAbsolute)) {
        arrExtension.push(routerAbsolute);
      }
    }
  })

  return arrExtension;
}

//Leer Archivos

export const readFile = (router, validate) => {
  const arr = getFilesOfDir(router, []);
  return parserMd(arr.map((ele) => {
    return fs.readFileSync(ele).toString();
  }), router, validate)


}
// Función que convierte ruta en absoluta 
//si es archivo y si tiene extensión md y si es carpeta 

export const routerAbsoluteAndFile = (router, validate) => {
  const routerAbsolute = routeIsAbsolute(router);
  if (isFile(routerAbsolute)) {
    if (extensionmd(routerAbsolute)) {
      return parserMd(fs.readFileSync(routerAbsolute).toString(), router, validate);
    } else {
      return [];
    }
  } else {
    return readFile(router, validate)
  }

}
