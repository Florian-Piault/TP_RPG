"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Champion = void 0;
class Champion {
    constructor(firstName, lastName, atk, def, hp) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.atk = atk;
        this.def = def;
        this.hp = hp;
    }
    protect() { }
    attack(target) { }
    getHit(amount) { }
}
exports.Champion = Champion;
