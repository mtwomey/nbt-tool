'use strict';

const tcommands = require('tcommands');
const nbt = require('../../lib/nbt');

tcommands.register({
    name: 'inventory',
    syntax: [
        '-i',
        '--inventory',
    ],
    helpText: 'Print out player inventory from player NBT data',
    handler: handler,
});

async function handler () {
    let filename = tcommands.getArgValue('inventory');

    if (typeof filename === 'boolean')
        filename = '-';

    nbt.getSimplifiedNBTData(filename).then(data => {
        data.Inventory.forEach(item => {
            if (item.Name)
                console.log(item.Name);
        })
    })
}
