'use strict';

const tcommands = require('tcommands');
const nbt = require('../../lib/nbt');

const command = {
    name: 'playerInfo',
    syntax: [
        '-pi',
        '--playerInfo'
    ],
    helpText: 'Print out player info from player NBT data',
    handler: handler
};

tcommands.register(command);

async function handler () {
    let filename = tcommands.getArgValue(command.name);

    if (typeof filename === 'boolean')
        filename = '-';

    nbt.getSimplifiedNBTData(filename).then(data => {
        let health = getAttribute(data, 'minecraft:health');
        if (!health) {
            console.log(`Error: This doesn't appear to be player NBT data.`);
            process.exit(1);
        }
        console.log(`Position (x, y, z): ${Math.round(data.Pos[0])}, ${Math.round(data.Pos[1])}, ${Math.round(data.Pos[2])}`);

        console.log(`Health: ${health.Current} / ${health.Base}`);

        let hunger = getAttribute(data, 'minecraft:player.hunger');
        console.log(`Hunger: ${hunger.Current} / ${hunger.Base}`);

        let saturation = getAttribute(data, 'minecraft:player.saturation');
        console.log(`Hunger Saturation: ${Math.round(saturation.Current)} / ${saturation.Base}`);

        let level = getAttribute(data, 'minecraft:player.level');
        console.log(`Player Level: ${Math.round(level.Current)}`);
    })
}

function getAttribute(data, s) {
    if (data.Attributes)
        return data.Attributes.filter(attribute => attribute.Name === s)[0];
    return undefined;
}
