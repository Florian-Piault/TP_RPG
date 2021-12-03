"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const archer_1 = require("./archer");
const mage_1 = require("./mage");
const knight_1 = require("./knight");
function chooseClass(idx) {
    if (parseInt(idx) == 0)
        return new mage_1.Mage("Merlin", "l'enchanteur", 5, 4, 15);
    if (parseInt(idx) == 1)
        return new archer_1.Archer("Oliver", "Queen", 4, 4, 18);
    if (parseInt(idx) == 2)
        return new knight_1.Knight("Lancelot", "du lac", 3, 7, 26);
    else
        null;
}
class Game {
    constructor(champ, boss) {
        this.champions = champ;
        this.boss = boss;
    }
}
console.log("Choose your champions: ");
let champs = [];
while (champs.length != 3) {
    const classChoice = chooseClass(prompt("0 : mage | 1 : archer | 2 : Knight"));
    if (classChoice)
        champs.push(classChoice);
}
console.log(champs);
