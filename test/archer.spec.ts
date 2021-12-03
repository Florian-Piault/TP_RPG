import { Champion } from "../src/champion"
import { Archer } from "../src/archer"
import { Knight } from "../src/knight";

describe("Champion", () => {
    let archer: Archer;
    let knight: Knight;

    beforeEach(() => {
        archer = new Archer("firstname","lastname",10,10,100)
        knight = new Knight("firstname2","lastname2",10,10,100)
    })

    test("Archer could attack twice", () => {
        archer.attack(knight);
        archer.attack(knight);
        expect(knight.hp).toEqual(knight.hpMax - (archer.atk*2));
    })

})