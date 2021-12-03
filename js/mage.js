"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const champion_1 = require("./champion");
const knight_1 = require("./knight");
class Mage extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, 1, atk, def, hp);
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
    heal() {
        let power = 3;
        if (this.hpMax == this.hp) {
            console.log("Vous êtes déjà full life !");
        }
        else if (this.hpMax > this.hp) {
            let difference = this.hpMax - this.hp;
            if (power <= difference) {
                this.hp == this.hpMax;
                console.log("Vous êtes maintenant full life !");
            }
            else {
                this.hp += power;
                console.log("Vous avez été heal de " + power + " hp !");
            }
        }
    }
}
exports.Mage = Mage;
