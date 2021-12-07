"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const champion_1 = require("./champion");
const knight_1 = require("./knight");
const archer_1 = require("./archer");
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
    healSomeone(targets) {
        let power = 3;
        let target;
        console.log("Qui voulez-vous heal ?");
        let alive = targets.filter((champion) => {
            champion.isAlive();
        });
        console.log("Voici les champions encore en vie !");
        alive.forEach((champion, index) => {
            if (champion instanceof knight_1.Knight) {
                console.log(index + " - " + champion.getName() + " le chevalier");
            }
            else if (champion instanceof archer_1.Archer) {
                console.log(index + " - " + champion.getName() + " l'archer");
            }
            else if (champion instanceof Mage && champion !== this) {
                console.log(index + " - " + champion.getName() + " le mage");
            }
            else if (champion instanceof Mage && champion !== this) {
                console.log(index + " - " + "Vous-même");
            }
        });
        let input = prompt();
        if (input) {
            target = alive[input];
            this.heal(target);
        }
    }
    heal(target) {
        let power = 3;
        if (target.hpMax == target.hp) {
            console.log("Vous êtes déjà full life !");
        }
        else {
            let difference = target.hpMax - target.hp;
            if (power >= difference) {
                target.hp = target.hpMax;
                console.log("Vous êtes maintenant full life !");
            }
            else {
                target.hp += power;
                console.log("Vous avez été heal de " + power + " hp !");
            }
        }
    }
}
exports.Mage = Mage;
