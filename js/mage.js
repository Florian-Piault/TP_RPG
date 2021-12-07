"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const champion_1 = require("./champion");
const knight_1 = require("./knight");
const prompts = require("prompts");
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
            console.log(`${this.firstName} ${this.lastName} (PV:${this.hp}/${this.hpMax}) attaque ${target.firstName} ${target.lastName} (PV:${target.hp}/${target.hpMax}) de ${this.atk}`);
        }
        else {
            console.log(`${this.firstName} ne peut pas attaquer...`);
        }
    }
    heal(target) {
        let power = 3;
        if (target.hpMax == target.hp) {
            console.log(`${target.getName()} est déjà full life !`);
        }
        else {
            let difference = target.hpMax - target.hp;
            if (power >= difference) {
                target.hp = target.hpMax;
                console.log(`${target.getName()} est maintenant full life !`);
            }
            else {
                target.hp += power;
                console.log(`${target.getName()} a été heal de ${power} hp ! (${target.hp}/${target.hpMax})`);
            }
        }
    }
}
exports.Mage = Mage;
