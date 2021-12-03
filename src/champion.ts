import { Knight } from "./knight";

interface IChampion {
  protect(): void;
  attack(target: Champion): void;
  getHit(amount: number): void;
  canDo(): Boolean;
}

export abstract class Champion implements IChampion {

  public numberOfActions: number;
  public isProtected: Boolean;

  constructor(
    public firstName: string,
    public lastName: string,
    public numberOfTotalActions: number,
    public atk: number,
    public def: number,
    public hp: number,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.numberOfActions = numberOfTotalActions;
    this.numberOfTotalActions = numberOfTotalActions;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
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
    this.hp -= amount;
  }
  
  public canDo(): Boolean{
    return this.numberOfActions == 0 ? false : true
  }

}
