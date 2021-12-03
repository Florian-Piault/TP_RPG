import { Champion } from "./champion";
import { Archer } from "./archer";
import { Mage } from "./mage";
import { Knight } from "./knight";
import { Boss } from "./boss";

function chooseClass(idx: string): Champion {
  if (parseInt(idx) == 0) return new Mage("Merlin", "l'enchanteur", 5, 4, 15);
  if (parseInt(idx) == 1) return new Archer("Oliver", "Queen", 4, 4, 18);
  if (parseInt(idx) == 2) return new Knight("Lancelot", "du lac", 3, 7, 26);
  else null;
}

class Game {
  champions: Array<Champion>;
  boss: Boss;

  constructor(champ: Array<Champion>, boss: Boss) {
    this.champions = champ;
    this.boss = boss;
  }
}

console.log("Choose your champions: ");
let champs: Array<Champion> = [];
while (champs.length != 3) {
  const classChoice = chooseClass(prompt("0 : mage | 1 : archer | 2 : Knight"));
  if (classChoice) champs.push(classChoice);
}

console.log(champs);
