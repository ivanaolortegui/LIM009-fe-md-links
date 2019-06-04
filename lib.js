#!/usr/bin/env node
const path = require('path');
const [,, ...args] = process.argv;
// console.log(`Hello World ${args}`);
// /home/ivana/LIM009-fe-md-links/test/index.spec.js

 export const routeIsAbsolute = (args) => {
    return path.isAbsolute(`${args}`)
 };
 console.log(routeIsAbsolute(args))


 