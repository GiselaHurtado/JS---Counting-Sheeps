import { describe, expect, it } from "vitest";
import { countSheeps } from "../app.js";

describe('How many sheep are there?', () => {

    it('The true ones are sheep, the false ones are wolves, returns the number of sheeps', () => {

        const sheepCount= 0
        const petalsFlower2 = 4
        const expected = true;

        const result = isLove(petalsFlower1, petalsFlower2);

        expect(result).toBeTypeOf("boolean");
        expect(result).toEqual(expected);


    })

    it('one petal is equal to the other(odd-odd or even-even), returns false', () => {

        const petalsFlower1 = 2
        const petalsFlower2 = 2
        const expected = false;

        const result = isLove(petalsFlower1, petalsFlower2);

        expect(result).toBeTypeOf("boolean");
        expect(result).toEqual(expected);

    })

    it('one petal is even and the other odd, returns true', () => {

        const petalsFlower1 = 0
        const petalsFlower2 = 1
        const expected = true;

        const result = isLove(petalsFlower1, petalsFlower2);

        expect(result).toBeTypeOf("boolean");
        expect(result).toEqual(expected);

    })

    it('one petal is equal to the other (odd-odd or even-even), returns false', () => {

        const petalsFlower1 = 0
        const petalsFlower2 = 0
        const expected = false;

        const result = isLove(petalsFlower1, petalsFlower2);

        expect(result).toBeTypeOf("boolean");
        expect(result).toEqual(expected);

    })

})
