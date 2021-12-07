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
            target.isProtected = false;
            this.numberOfActions--;
            console.log(`${this.firstName} ${this.lastName} (PV:${this.hp}/${this.hpMax}) attaque ${target.firstName} ${target.lastName} (PV:${target.hp}/${target.hpMax}) de ${this.atk}`);
        }
        else {
            console.log(`${this.firstName} ne peut pas attaquer...`);
        }
    }
}
exports.Knight = Knight;
