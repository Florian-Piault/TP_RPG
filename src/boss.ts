import { Champion } from "./champion";

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

  public attack(targets: Array<Champion>): void {
    // attack a random target;
    const length: number = targets.length;
    const randomValue: number = Math.floor(Math.random() * length);
  }
}
