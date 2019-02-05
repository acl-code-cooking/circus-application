/* eslint-disable */

global.window = {}
require('mock-local-storage')
console.log(global.localStorage);

// import localStorage from 'mock-local-storage';

require = require('esm')(module);
module.exports = require("./tests.js");