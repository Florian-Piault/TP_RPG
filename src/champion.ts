import { Knight } from "./knight";

interface IChampion {
  protect(): void;
  attack(target: Champion): void;
  getHit(amount: number): void;
  canDo(): boolean;
}

export abstract class Champion implements IChampion {
  public hpMax: number;
  public numberOfActions: number;
  public isProtected: boolean;

  constructor(
    public firstName: string,
    public lastName: string,
    public numberOfTotalActions: number,
    public atk: number,
    public def: number,
    public hp: number
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

  protect(): void {
    if (this.numberOfActions == this.numberOfTotalActions) {
      this.numberOfActions -= this.numberOfTotalActions;
      this.isProtected = true;
    } else {
      console.log('Impossible de se proteger ...');
    }
  }

  attack(target: Champion): void {
    if (this.canDo()) {
      if (target.isProtected) {
          if (!(target instanceof Knight)) target.getHit(this.atk / 2);
      } else {
          target.getHit(this.atk);
      }
      this.numberOfActions--;
    } else {
       console.log('Impossible d\'attaquer ...');
    }
  }

  getHit(amount: number): void {
    if (amount >= this.hp) this.hp = 0;
    else this.hp -= amount;
  }

  isAlive(): boolean {
    return this.hp > 0;
  }

  canDo(): boolean {
    return this.numberOfActions > 0 ? true : false;
  }

  getName(): string{
    return this.firstName+' '+this.lastName
  }
}
