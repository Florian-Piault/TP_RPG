"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knight_1 = require("./knight");
const mage_1 = require("./mage");
const archer_1 = require("./archer");
const boss_1 = require("./boss");
let mage = new mage_1.Mage("Merlin", "l'enchanteur", 10, 4, 43);
let knight = new knight_1.Knight("Lancelot", "du lac", 7, 9, 67);
let archer = new archer_1.Archer("Robin", "des bois", 9, 3, 55);
let boss = new boss_1.Boss("Dio", "Brando", 20, 10, 100);
let allChampions = [mage, knight, archer];
console.log("--TOUR 1");
knight.attack(boss);
mage.attack(boss);
archer.attack(boss);
archer.attack(boss);
archer.attack(boss);
boss.attack(boss.getTarget(allChampions));
if (allChampions.every((c) => c.isAlive())) {
    console.log("\n--TOUR 2");
    allChampions.forEach((c) => c.resetTurn());
    boss.resetTurn();
    knight.protect();
    archer.attack(boss);
    archer.protect();
    mage.heal(archer);
    boss.attack(boss.getTarget(allChampions));
    boss.attack(boss.getTarget(allChampions));
    boss.attack(boss.getTarget(allChampions));
    if (!boss.isAlive())
        console.log(`${boss.getName()} est mort... vous avez gagné !`);
}
if (allChampions.every((c) => c.isAlive())) {
    console.log("\n--TOUR 3");
    allChampions.forEach((c) => c.resetTurn());
    boss.resetTurn();
    knight.protect();
    archer.attack(boss);
    archer.protect();
    mage.heal(archer);
    boss.attack(boss.getTarget(allChampions));
    boss.attack(boss.getTarget(allChampions));
    boss.attack(boss.getTarget(allChampions));
    if (!boss.isAlive())
        console.log(`${boss.getName()} est mort... vous avez gagné !`);
}
if (allChampions.every((c) => c.isAlive())) {
    console.log("\n--TOUR 4");
    allChampions.forEach((c) => c.resetTurn());
    boss.resetTurn();
    mage.attack(mage);
    knight.attack(mage);
    archer.attack(mage);
    archer.attack(mage);
    boss.attack(boss.getTarget(allChampions));
    boss.attack(boss.getTarget(allChampions));
    boss.attack(boss.getTarget(allChampions));
    if (!boss.isAlive())
        console.log(`${boss.getName()} est mort... vous avez gagné !`);
}
console.log("vous avez perdu ");
