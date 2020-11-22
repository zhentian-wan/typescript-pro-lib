import {sum} from "../src/index"
describe("sum should caclcualte two numbers sum", () => {
    test("two number sum", () => {
        expect(sum(1,2)).toEqual(3)
    })
});