'use strict'

const fs = require('fs');
const nbt = require('prismarine-nbt');

let simplifiedNBTData = null;

function getSimplifiedNBTData(filename) {
    return new Promise((resolve, reject) => {
        if (simplifiedNBTData)
            return (simplifiedNBTData);
        let buffer;
        if (filename === '-') {
            buffer = fs.readFileSync('/dev/stdin');
        } else {
            buffer = fs.readFileSync(filename);
        }

        nbt.parse(buffer).then(results => {
            simplifiedNBTData = nbt.simplify(results.parsed);
            resolve(simplifiedNBTData);
        });
    });
}

module.exports = {
    getSimplifiedNBTData: getSimplifiedNBTData
}
