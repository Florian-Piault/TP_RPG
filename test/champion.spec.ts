
import { Champion } from "../src/champion"
import { Knight } from "../src/knight"
import { Mage } from "../src/mage"

describe("Champion", () => {
    let knight: Champion;
    let knight2: Champion;
    let mage: Champion;

    beforeEach(() => {
        knight = new Knight("firstname","lastname",10,10,100)
        knight2 = new Knight("firstname2","lastname2",10,10,100)
        mage = new Mage("firstname3","lastname3",10,10,100)
    })

    test("Champion should protect himself", () => {
        knight.protect();
        expect(knight.isProtected).toBe(true);
    })

    test("Champion should protect from an attack", () => {
        let hpInit = mage.hp;
        mage.protect();
        knight.attack(mage)
        expect(mage.hp).toEqual(hpInit - mage.atk/2);
    })

    test("Champion shouldn't protect himself when is exausted", () => {
        knight.attack(knight2);
        knight.protect();
        expect(knight.isProtected).toBe(false);
    })

    test("Champion could attack someone.", () => {
        let hpInit = knight2.hp;
        knight.attack(knight2);
        expect(knight2.hp).toBeLessThan(hpInit);
    })

    test("Champion could live after be attacked.", () => {
        knight.attack(knight2);
        expect(knight2.isAlive()).toBe(true);
    })

    test("Champion could die after be attacked.", () => {
        knight2.hp = 10;
        knight.attack(knight2);
        expect(knight2.isAlive()).toBe(false);
    })

    test("Champion couldn't attack when is exausted.", () => {
        knight.attack(knight2);
        knight.attack(knight2);
        expect(knight.canDo()).toBe(false);
    })

   /*  test("Whatever champion could attack knight but the knight is strong....", () => {
        knight.protect();
        mage.attack(knight);
        expect(knight.canDo()).toBe(false);
    }) */
})