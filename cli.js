#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var jsonschema2mk = require("./");
// console.log(argv)
var jsm = new jsonschema2mk(argv);
console.log(jsm.generate(jsm.data));
