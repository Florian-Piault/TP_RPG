import { Champion } from "./champion";

export class Mage extends Champion {
  constructor(
    firstName: string,
    lastName: string,
    atk: number,
    def: number,
    hp: number
  ) {
    super(firstName, lastName, atk, def, hp);
  }

  public protect(): void {}
  public heal(): void {}
}
