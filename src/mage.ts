import { Champion } from "./champion";

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

  public protect(): void {}
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
