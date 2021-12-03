import { Champion } from "./champion";
import { Knight } from "./knight";

export class Boss extends Champion {
  constructor(
    firstName: string,
    lastName: string,
    atk: number,
    def: number,
    hp: number
  ) {
    super(firstName, lastName, 3, atk, def, hp);
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

  public getTarget(targets: Champion[]): Champion {
    // get a random target if they're alive
    const length: number = targets.length;
    const randomIndex: number = Math.floor(Math.random() * length);
    if (targets[randomIndex].isAlive()) return targets[randomIndex];

    // if the target is dead, call the methods again
    targets.splice(randomIndex, 1);
    return this.getTarget(targets);
  }
}
