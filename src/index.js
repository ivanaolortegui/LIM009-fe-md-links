export const path = require('path');
export const fs = require('fs');

// Verifica si es direcctorio
export const isDirectory = (router) => {
	let stats = fs.lstatSync(router)
	return stats.isDirectory()
}

export const routeIsAbsolute = (router) => {
	if (!path.isAbsolute(`${router}`)) {
		return path.resolve(`${router}`)
	}
	else {
		return router;
	}

};

// Retorna un buleano si cumple con la extensión md
export const extensionmd = (router) => {
	return path.extname(router) === '.md'
}

//Leer archivos md

export const isFile = (router) => {
	let stats = fs.lstatSync(router)
	return stats.isFile()
}