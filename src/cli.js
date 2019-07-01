
import { mdLinks } from './md-links.js'
import { stats, broken } from './main.js'

//Función cli 
export const cli = (argsmt) => {
  const arg = {};
  if (argsmt.indexOf('--validate') != -1) {
    arg.validate = true
  } else {
    arg.validate = false;
  }
  if (argsmt.indexOf('--stats') != -1) {
    arg.stats = true
  } else {
    arg.stats = false;
  }

  return arg;
}

// Función donde le paso los argumentos para la función que retorna la promesa
export const mdLink = (path, options) => {
  return mdLinks(path,  { 'validate' : options.validate} ).then((links) => {
    if (options.stats === true && options.validate === true) {
      console.log(broken(stats(links), links))
      return broken(stats(links), links);
    } else if (options.stats === true) {
      console.log(stats(links))
      return stats(links);
    } else {
      let resultString = ``
      links.forEach((ele) => {
        for (let keys in ele) {
          resultString += ` ${ele[keys]} `
        }
        resultString += `\n`
      })
      console.log(resultString);
      return resultString;
    }
  })
}

