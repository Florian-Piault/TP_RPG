
import { Knight } from "../src/knight"

describe("Knight", () => {
    let knight = new Knight("firstname","lastname",10,10,100)
    test("Knight should protect himself", () => {
        knight.protect();
        expect(knight.getIsProtected()).toBe(true);
    })
})