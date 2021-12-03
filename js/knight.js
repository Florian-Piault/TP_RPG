"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const champion_1 = require("./champion");
class Knight extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, 1, atk, def, hp);
    }
    attack(target) {
        if (this.canDo()) {
            if (target.isProtected) {
                if (!(target instanceof Knight))
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
exports.Knight = Knight;
