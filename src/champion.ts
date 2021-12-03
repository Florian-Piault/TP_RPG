import { Knight } from "./knight";

interface IChampion {
  protect(): void;
  attack(target: Champion): void;
  getHit(amount: number): void;
  canDo(): Boolean;
}

export abstract class Champion implements IChampion {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected numberOfTotalActions: number,
    protected numberOfActions: number,
    protected atk: number,
    protected def: number,
    protected hp: number,
    protected isProtected: Boolean
  ) {}

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
  
  canDo(): Boolean{
    return this.numberOfActions == 0 ? false : true
  }
}
