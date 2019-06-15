#!/usr/bin/env node

// https://alligator.io/nodejs/command-line-arguments-node-scripts/
const args = process.argv[2];
const validate = process.argv[3] === '--validate' ? { 'validate' : true } :
 { 'validate' : false };

import { mdLinks } from './md-links.js'
mdLinks(`${args}`, validate).then((links) => {
  console.log(links);

})





