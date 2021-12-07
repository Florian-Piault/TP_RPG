import { Knight } from "./knight";
import { Mage } from "./mage";
import { Archer } from "./archer";
import { Boss } from "./boss";
import { Champion } from "./champion";

let mage: Mage = new Mage("Merlin", "l'enchanteur", 10, 4, 43);
let knight: Knight = new Knight("Lancelot", "du lac", 7, 9, 67);
let archer: Archer = new Archer("Robin", "des bois", 9, 3, 55);
let boss: Boss = new Boss("Dio", "Brando", 20, 10, 100);
let allChampions: Champion[] = [mage, knight, archer];

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
