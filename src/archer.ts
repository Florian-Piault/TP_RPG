import { Champion } from "./champion";

// can attack twice per turn
export class Archer extends Champion {
  constructor(
    firstName: string,
    lastName: string,
    numberOfActions: number,
    atk: number,
    def: number,
    hp: number
  ) {
    super(firstName, lastName, 2, atk, def, hp);
  }
}
