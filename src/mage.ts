import { Champion } from "./champion";

export class Mage extends Champion {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected atk: number,
    protected def: number,
    protected hp: number
  ) {
    super(firstName, lastName, atk, def, hp);
  }

  public heal(): void {}
}
