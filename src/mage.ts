import { Champion } from "./champion";
import { Knight } from "./knight";
import { Archer } from "./archer";
const prompts = require("prompts");

export class Mage extends Champion {
  constructor(
    firstName: string,
    lastName: string,
    atk: number,
    def: number,
    hp: number
  ) {
    super(firstName, lastName, 1, atk, def, hp);
  }

  attack(target: Champion): void {
    if (this.canDo()) {
      if (target.isProtected) {
        if (!(target instanceof Knight)) target.getHit(this.atk / 2);
      } else {
        target.getHit(this.atk);
      }
      this.numberOfActions--;
      console.log(
        `${this.firstName} ${this.lastName} (PV:${this.hp}/${this.hpMax}) attaque ${target.firstName} ${target.lastName} (PV:${target.hp}/${target.hpMax}) de ${this.atk}`
      );
    } else {
      console.log(`${this.firstName} ne peut pas attaquer...`);
    }
  }
  // public async healSomeone(targets: Champion[]): Promise<void> {
  //   let power = 3;
  //   let target: Champion;
  //   let aliveInput: number;
  //   let input: number;

  //   let alive = targets.filter((champion) => {
  //     return champion.isAlive();
  //   });
  //   console.log("Voici les champions encore en vie !");
  //   // console.log(alive)
  //   alive.forEach((champion, index) => {
  //     if (champion instanceof Knight) {
  //       console.log(
  //         index +
  //           " - " +
  //           champion.getName() +
  //           ` le chevalier ${this.hp}/${this.hpMax}`
  //       );
  //     } else if (champion instanceof Archer) {
  //       console.log(
  //         index +
  //           " - " +
  //           champion.getName() +
  //           ` l'archer ${this.hp}/${this.hpMax}`
  //       );
  //     } else if (champion instanceof Mage && champion !== this) {
  //       console.log(
  //         index +
  //           " - " +
  //           champion.getName() +
  //           ` le mage ${this.hp}/${this.hpMax}`
  //       );
  //     } else if (champion instanceof Mage && champion === this) {
  //       console.log(index + " - " + `Vous-même ${this.hp}/${this.hpMax}`);
  //     }
  //   });

  //   (async () => {
  //     const response = await prompts({
  //       type: "number",
  //       name: "value",
  //       message: "Qui voulez-vous heal ?",
  //       validate: (value) =>
  //         value >= alive.length
  //           ? `Vous devez choisir un personnage disponible`
  //           : true,
  //     });
  //     input = response.value;
  //     target = alive[input];
  //     if (target.hpMax == target.hp) {
  //       console.log(target.getName() + " est déjà full life !");
  //     } else {
  //       let difference = target.hpMax - target.hp;
  //       if (power >= difference) {
  //         target.hp = target.hpMax;
  //         console.log(target.getName() + " est maintenant full life !");
  //       } else {
  //         target.hp += power;
  //         console.log(target.getName() + " a été heal de " + power + " hp !");
  //         console.log(
  //           target.getName() + " est maintenant à " + target.hp + " hp ❤"
  //         );
  //       }
  //     }
  //   })();
  //   return new Promise((resolve) => {});
  //   // let input = prompt();
  // }
  public heal(target: Champion): void {
    let power = 3;

    if (target.hpMax == target.hp) {
      console.log(`${target.getName()} est déjà full life !`);
    } else {
      let difference = target.hpMax - target.hp;
      if (power >= difference) {
        target.hp = target.hpMax;
        console.log(`${target.getName()} est maintenant full life !`);
      } else {
        target.hp += power;
        console.log(
          `${target.getName()} a été heal de ${power} hp ! (${target.hp}/${
            target.hpMax
          })`
        );
      }
    }
  }
}
