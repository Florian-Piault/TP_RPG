import { Champion } from "./champion";

export class Archer extends Champion {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected atk: number,
    protected def: number,
    protected hp: number
  ) {
    super(firstName, lastName, atk, def, hp);
  }
}
