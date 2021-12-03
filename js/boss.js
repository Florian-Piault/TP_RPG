"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boss = void 0;
const champion_1 = require("./champion");
class Boss extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, 3, atk, def, hp);
    }
    getTarget(targets) {
        const length = targets.length;
        const randomIndex = Math.floor(Math.random() * length);
        if (targets[randomIndex].isAlive())
            return targets[randomIndex];
        targets.splice(randomIndex, 1);
        return this.getTarget(targets);
    }
}
exports.Boss = Boss;
