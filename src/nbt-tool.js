#!/usr/local/bin/node
'use strict';

const args = process.argv.slice(2);
const tcommands = require('tcommands');

tcommands.loadCommands(`${__dirname}/commands`);
tcommands.processCommands({defaultCommand: 'help'});
