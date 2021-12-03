"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const champion_1 = require("./champion");
class Mage extends champion_1.Champion {
    constructor(firstName, lastName, atk, def, hp) {
        super(firstName, lastName, 1, atk, def, hp);
    }
    protect() { }
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
