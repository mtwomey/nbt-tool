'use strict';

const tcommands = require('tcommands');
const nbt = require('../../lib/nbt');
const enchantments = require('../../lib/enchantments');

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
                if (item.tag) {
                    const tags  = Object.entries(item.tag).map(([key, value]) => {
                        if (key === 'ench') { // Dig into enchantments and get that info
                            return(value.map(enchantment => {
                                return `${enchantments.getEnchantmentById(enchantment.id)} Lvl ${enchantment.lvl} `;
                            }).join(', '));
                        }
                        return(`${key}: ${value}`);
                    });
                    s += ` [${tags.join(', ')}]`;
                }
                console.log(s);
            }
        })
    })
}
