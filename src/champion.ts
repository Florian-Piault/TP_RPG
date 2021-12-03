import { Knight } from "./knight";

interface IChampion {
  protect(): void;
  attack(target: Champion): void;
  getHit(amount: number): void;
  canDo(): Boolean;
}

export abstract class Champion implements IChampion {

  protected numberOfActions: number;
  protected isProtected: Boolean;
  protected hpMax: number
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected numberOfTotalActions: number,
    protected atk: number,
    protected def: number,
    protected hp: number,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.numberOfActions = numberOfTotalActions;
    this.numberOfTotalActions = numberOfTotalActions;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.hpMax = hp;
    this.isProtected = false;
  }

  public protect(): void {
    this.isProtected = true;
  }

  public attack(target: Champion): void {
    if (target.isProtected) {
      if(!(target instanceof Knight))
        target.getHit(this.atk / 2);
    }
    else {
      target.getHit(this.atk);
    }
  }

  public getHit(amount: number): void {
    if (amount >= this.hp) this.hp = 0;
    else this.hp -= amount;
  }

  public isAlive(): boolean {
    return this.hp > 0;
  }
  canDo(): Boolean{
    return this.numberOfActions == 0 ? false : true
  }

  getIsProtected(): Boolean{
    return this.isProtected;
  }

  getName(): string{
    return this.firstName+' '+this.lastName
  }
}
