import { Champion } from "../src/champion"
import { Knight } from "../src/knight"
import { Archer } from "../src/archer"
import { Mage } from "../src/mage"

describe("Mage", () => {
    let knight: Knight;
    let mage: Mage;
    let archer: Archer;

    beforeEach(() => {
        knight = new Knight("firstname","lastname",10,10,100)
        mage = new Mage("firstname3","lastname3",10,10,100)
        archer = new Archer("firstname2","lastname2",10,10,100)
    })

    test("Mage could heal another champion who is full hp.", () => {
        let initHp = knight.hp
        mage.heal(knight);
        expect(knight.hp).toEqual(initHp);
    })

    test("Mage could heal another champion.", () => {
        mage.attack(knight);
        let initHp = knight.hp
        mage.heal(knight);
        expect(knight.hp).toBeGreaterThan(initHp);
    })

    test("Mage could heal another champion to the maximum hp.", () => {
        knight.hp -= 3;
        mage.heal(knight);
        expect(knight.hp).toEqual(knight.hpMax);
    })

 /*    test("Mage could heal another champion from list.", () => {
        knight.hp -= 3;
        mage.healSomeone([knight,mage]);
        expect(knight.hp).toEqual(knight.hpMax);
    }) */
});
