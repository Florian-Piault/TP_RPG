"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Champion = void 0;
const knight_1 = require("./knight");
class Champion {
    constructor(firstName, lastName, numberOfTotalActions, atk, def, hp) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.numberOfTotalActions = numberOfTotalActions;
        this.atk = atk;
        this.def = def;
        this.hp = hp;
        this.firstName = firstName;
        this.lastName = lastName;
        this.numberOfActions = numberOfTotalActions;
        this.numberOfTotalActions = numberOfTotalActions;
        this.atk = atk;
        this.def = def;
        this.hp = hp;
        this.hpMax = hp;
        this.isProtected = false;
    }
    protect() {
        this.isProtected = true;
    }
    attack(target) {
        if (target.isProtected) {
            if (!(target instanceof knight_1.Knight))
                target.getHit(this.atk / 2);
        }
        else {
            target.getHit(this.atk);
        }
    }
    getHit(amount) {
        if (amount >= this.hp)
            this.hp = 0;
        else
            this.hp -= amount;
    }
    isAlive() {
        return this.hp > 0;
    }
    canDo() {
        return this.numberOfActions == 0 ? false : true;
    }
    getIsProtected() {
        return this.isProtected;
    }
}
exports.Champion = Champion;
