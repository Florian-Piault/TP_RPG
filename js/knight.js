"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const champion_1 = require("./champion");
class Knight extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, 1, atk, def, hp);
    }
}
exports.Knight = Knight;
