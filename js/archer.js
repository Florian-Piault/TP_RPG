"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
const champion_1 = require("./champion");
const knight_1 = require("./knight");
class Archer extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, 2, atk, def, hp);
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
}
exports.Archer = Archer;
