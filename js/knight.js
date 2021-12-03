"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const champion_1 = require("./champion");
class Knight extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, atk, def, hp);
        this.firstName = firstName;
        this.lastName = lastName;
        this.atk = atk;
        this.def = def;
        this.hp = hp;
    }
}
exports.Knight = Knight;
