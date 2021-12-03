"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
const champion_1 = require("./champion");
class Archer extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, atk, def, hp);
    }
}
exports.Archer = Archer;
