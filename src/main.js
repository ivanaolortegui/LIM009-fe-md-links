
const md = require('markdown-it')();
export const fs = require('fs');
import { isDirectory, routeIsAbsolute, extensionmd, isFile } from './index.js'
import { parse } from 'node-html-parser';


const parserMd = (content, router) => {
	let arraysLinksTotals = [];
	parse(md.render(`${content}`)).querySelectorAll('a').forEach((link) => {
		arraysLinksTotals.push({
			link: link.rawAttrs,
			text: link.childNodes[0].rawText,
			ruta: router
		})
	})
	return arraysLinksTotals;
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

export const readFile = (router) => {
	const arr = getFilesOfDir(router, []);
	return parserMd(arr.map((ele) => {
		return fs.readFileSync(ele).toString();
	}), router)


}

export const routerAbsoluteAndFile = (router) => {
	const routerAbsolute = routeIsAbsolute(router);
	if (isFile(routerAbsolute)) {
		if (extensionmd(routerAbsolute)) {
			return parserMd(fs.readFileSync(routerAbsolute).toString(), router);
		}
	} else {
		return readFile(router)
	}

}
