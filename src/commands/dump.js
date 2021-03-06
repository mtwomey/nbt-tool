'use strict';

const tcommands = require('tcommands');
const nbt = require('../../lib/nbt');

const command = {
    name: 'dump',
    syntax: [
        '-d',
        '--dump'
    ],
    helpText: 'Print out a simplified JSON representation of NBT data',
    handler: handler,
}

tcommands.register(command);

async function handler () {
    let filename = tcommands.getArgValue(command.name);

    if (typeof filename === 'boolean')
        filename = '-';

    if (typeof filename === 'boolean') {
        console.log('Must supply a filename for dump (or STDIN)');
        process.exit(1);
    }

    nbt.getSimplifiedNBTData(filename).then(data => {
        console.log(JSON.stringify(data, null, 2));
    })
}
