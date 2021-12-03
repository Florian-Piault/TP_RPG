"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boss = void 0;
const champion_1 = require("./champion");
const knight_1 = require("./knight");
class Boss extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, 3, atk, def, hp);
    }
    attack(target) {
        if (this.canDo()) {
            if (target.isProtected) {
                if (!(target instanceof knight_1.Knight))
                    target.getHit(this.atk / 2);
            }
            else {
                target.getHit(this.atk);
            }
            this.numberOfActions--;
        }
        else {
            console.log("Impossible d'attaquer ...");
        }
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
