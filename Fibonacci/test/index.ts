import {expect} from "chai";
import {Fibonacci} from "../src";

describe("Methods to do with Fibonacci numbers", () => {
    const fibo = new Fibonacci();

    it("Prints 10 numbers when specified in sequence", () => {
        expect(fibo.getNumbers(10).length).to.equal(10);
    });
});
