import { Champion } from "./champion";
import { Knight } from "./knight";

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
    } else {
      console.log("Impossible d'attaquer ...");
    }
  }

  public heal(): void {
    let power = 3;
    if (this.hpMax == this.hp) {
      console.log("Vous êtes déjà full life !");
    } else if (this.hpMax > this.hp) {
      let difference = this.hpMax - this.hp;
      if (power <= difference) {
        this.hp == this.hpMax;
        console.log("Vous êtes maintenant full life !");
      } else {
        this.hp += power;
        console.log("Vous avez été heal de " + power + " hp !");
      }
    }
  }
}
