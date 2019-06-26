#!/usr/bin/env node
import { mdLink, cli } from './cli.js';
const bin = process.argv;
const path = process.argv[2];
mdLink(path, cli(bin))
