'use strict';

const tcommands = require('tcommands');
const pjson = require('../../package.json');

const command = {
    name: 'version',
    syntax: [
        '-v',
        '--version'
    ],
    helpText: 'Print out nbt-tool version',
    handler: handler
};

tcommands.register(command);

async function handler () {
    console.log(`nbt-tool version ${pjson.version}`);
}
