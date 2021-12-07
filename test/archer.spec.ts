import { Champion } from "../src/champion"
import { Knight } from "../src/knight"
import { Archer } from "../src/archer"
import { Mage } from "../src/mage";

describe("Archer", () => {
    let archer: Archer;
    let mage: Mage;

    beforeEach(() => {
        archer = new Archer("firstname","lastname",10,10,100)
        mage = new Mage("firstname2","lastname2",10,10,100)
    })

    test("Archer could attack twice", () => {
        archer.attack(mage);
        archer.attack(mage);
        expect(mage.hp).toEqual(mage.hpMax - (archer.atk*2));
    })

    test("Archer could attack twice someone who is first protected", () => {
        mage.protect();
        archer.attack(mage);
        archer.attack(mage);
        expect(mage.isProtected).toBe(false);
    })

    test("Archer couldn't attack when is exausted", () => {
        archer.attack(mage);
        archer.attack(mage);
        archer.attack(mage);
        expect(mage.hp).toBe(mage.hpMax-(archer.atk*2));
    })

})