export class Champion {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected atk: number,
    protected def: number,
    protected hp: number
  ) {}

  public protect(): void {}
  public attack(target: Champion): void {}
  public getHit(amount: number): void {}
}
