
const path = require('path');
const fs = require('fs');


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


export const extensionmd = (router) => {
    return path.extname(router) === '.md'
}

//Leer archivos md


export const isFile = (router) => {
    let stats = fs.lstatSync(router)
    return stats.isFile()
}