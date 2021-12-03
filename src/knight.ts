import { Champion } from "./champion";

// method protect() prevents all damage taken
export class Knight extends Champion {
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
}
