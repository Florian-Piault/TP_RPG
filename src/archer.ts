import { Champion } from "./champion";
import { Knight } from "./knight";

// can attack twice per turn
export class Archer extends Champion {
  constructor(
    firstName: string,
    lastName: string,
    atk: number,
    def: number,
    hp: number
  ) {
    super(firstName, lastName, 2, atk, def, hp);
  }

  attack(target: Champion): void {
    if (this.canDo()) {
      if (target.isProtected) {
        if (!(target instanceof Knight)) target.getHit(this.atk / 2);
      } else {
        target.getHit(this.atk);
      }
      target.isProtected = false;
      this.numberOfActions--;
      console.log(
        `${this.firstName} ${this.lastName} (PV:${this.hp}/${this.hpMax}) attaque ${target.firstName} ${target.lastName} (PV:${target.hp}/${target.hpMax}) de ${this.atk}`
      );
    } else {
      console.log(`${this.firstName} ne peut pas attaquer...`);
    }
  }
}
