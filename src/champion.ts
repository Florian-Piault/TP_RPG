interface IChampion {
  protect(): void;
  attack(target: Champion): void;
  getHit(amount: number): void;
}

export abstract class Champion implements IChampion {
  hpMax: number;
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected numberOfActions: number,
    protected atk: number,
    protected def: number,
    protected hp: number
  ) {
    this.hpMax = hp;
  }

  public protect(): void {}

  public attack(target: Champion): void {
    target.getHit(this.atk);
  }

  public getHit(amount: number): void {
    this.hp -= amount;
  }

  public isAlive(): boolean {
    return this.hp > 0;
  }
}
