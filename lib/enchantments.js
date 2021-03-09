'use strict';

const enchantmentIds = {
    "1": "Fire Protection",
    "2": "Feather Falling",
    "3": "Blast Protection",
    "4": "Projectile Protection",
    "6": "Respiration",
    "8": "Aqua Affinity",
    "5": "Thorns",
    "7": "Depth Strider",
    "25": "Frost Walker",
    "9": "Sharpness",
    "10": "Smite",
    "11": "Bane of Arthropods",
    "12": "Knockback",
    "13": "Fire Aspect",
    "15": "Efficiency",
    "16": "Silk Touch",
    "17": "Unbreaking",
    "18": "Fortune",
    "19": "Power",
    "20": "Punch",
    "21": "Flame",
    "22": "Infinity",
    "23": "Luck of the Sea",
    "24": "Lure",
    "26": "Mending",
    "27": "Curse of Binding",
    "28": "Curse of Vanishing",
    "32": "Channelling",
    "34": "Piercing",
    "35": "Quick Charge"
}

function getEnchantmentById(id) {
    return enchantmentIds[id];
}

module.exports = {
    getEnchantmentById: getEnchantmentById
}
