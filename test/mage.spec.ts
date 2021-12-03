import { Champion } from "../src/champion"
import { Knight } from "../src/knight"
import { Mage } from "../src/mage"

describe("Mage", () => {
let knight: Champion;
    let knight2: Champion;
    let mage: Champion;

    beforeEach(() => {
        knight = new Knight("firstname","lastname",10,10,100)
        knight2 = new Knight("firstname2","lastname2",10,10,100)
        mage = new Mage("firstname3","lastname3",10,10,100)
    })

    /* test("Champion should protect himself", () => {
        knight.protect();
        expect(knight.isProtected).toBe(true);
    }) */
});
