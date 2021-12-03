import { Champion } from "./champion";

export class Mage extends Champion {
  constructor(
    firstName: string,
    lastName: string,
    numberOfActions: number,
    atk: number,
    def: number,
    hp: number
  ) {
    super(firstName, lastName, 1, atk, def, hp);
  }

  public protect(): void {}
  public heal(): void {}
}
