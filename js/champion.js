"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Champion = void 0;
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
        if (this.numberOfActions == this.numberOfTotalActions) {
            this.numberOfActions -= this.numberOfTotalActions;
            this.isProtected = true;
        }
        else {
            console.log("Impossible de se proteger ...");
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
        return this.numberOfActions > 0 ? true : false;
    }
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}
exports.Champion = Champion;
