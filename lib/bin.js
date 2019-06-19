#!/usr/bin/env node
"use strict";

var _cli = require("./cli.js");

var bin = process.argv;
var path = process.argv[2];
(0, _cli.mdLink)(path, (0, _cli.cli)(bin));