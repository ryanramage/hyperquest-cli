#!/usr/bin/env node
var hyperquest = require('hyperquest');
hyperquest(process.argv[2]).pipe(process.stdout);