"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const champion_1 = require("./champion");
class Mage extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, atk, def, hp);
    }
    protect() { }
    heal() { }
}
exports.Mage = Mage;
