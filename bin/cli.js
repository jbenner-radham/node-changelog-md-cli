#!/usr/bin/env node

'use strict';

const app = require('../');

let changelog = app();

console.log(changelog);
