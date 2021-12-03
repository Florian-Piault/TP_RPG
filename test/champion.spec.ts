
import { Champion } from "../src/champion"
import { Knight } from "../src/knight"

describe("Champion", () => {
    let knight = new Knight("firstname","lastname",10,10,100)
    let knight2 = new Knight("firstname2","lastname2",10,10,100)
    
    test("Champion should protect himself", () => {
        knight.protect();
        expect(knight.isProtected).toBe(true);
    })

    test("Champion could attack someone.", () => {
        let hpInit = knight2.hp;
        knight.attack(knight2);
        expect(knight2.hp).toBeLessThan(hpInit);
    })
})