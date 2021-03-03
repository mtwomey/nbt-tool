'use strict';

const tcommands = require('tcommands');
const nbt = require('../../lib/nbt');

const command = {
    name: 'inventory',
    syntax: [
        '-i',
        '--inventory'
    ],
    helpText: 'Print out player inventory from player NBT data',
    handler: handler
};

tcommands.register(command);

async function handler () {
    let filename = tcommands.getArgValue(command.name);

    if (typeof filename === 'boolean')
        filename = '-';

    nbt.getSimplifiedNBTData(filename).then(data => {
        data.Inventory.forEach(item => {
            if (item.Name) {
                let s = item.Name.replace(/^minecraft:/, '');
                if (item.Count > 1)
                    s += ` x ${item.Count}`;
                console.log(s);
            }

        })
    })
}
