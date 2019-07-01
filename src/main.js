
const md = require('markdown-it')();
import { fetchLink } from './fetch.js'
import { isDirectory, routeIsAbsolute, extensionmd, isFile, path, fs } from './index.js'
import { parse } from 'node-html-parser';


// funcion para stats y validate
export const broken = (links, arr) => {
  let brokens = 0;
  arr.forEach(ele => ele.ok === 'fail' ?  brokens += 1 : brokens += 0);
  const result = links.concat(`\nBroken : ${brokens}`)
  return `${result}`;
}

// Funcion para stats
export const stats = (links) => {
  let total = links.length;
  let unique = [];
  links.forEach((ele) => {
    unique.indexOf(ele.link) === -1 ? unique.push(ele.link) : unique;
  })
  return `Total :${total}\nUnique :${unique.length}`
}

// Función para parsear el contenido del archivo md 
const parserMd = (content, router, validate) => {
  const arraysLinksTotals = [];
  parse(md.render(`${content}`)).querySelectorAll('a').forEach((link) => {
    if (!link.childNodes[0]) {
      arraysLinksTotals.push({
        link: link.attributes.href,
        text: '',
        ruta: router
      })
    } else {
      arraysLinksTotals.push({
        link: link.attributes.href,
        text: link.childNodes[0].rawText,
        ruta: router
      })
    }

  })
  if (validate.validate === true) {
    return Promise.all(arraysLinksTotals.map((link) => {
      const objLink = Object.assign({}, link)
      return fetchLink(objLink, link)
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

export const readDir = (router, validate) => {
  const arr = getFilesOfDir(router, []);
  return parserMd(arr.map((ele) =>  fs.readFileSync(ele).toString()), router, validate)
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
    return readDir(router, validate)
  }

}
