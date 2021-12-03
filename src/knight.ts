import { Champion } from "./champion";

// method protect() prevents all damage taken
export class Knight extends Champion {
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
}
