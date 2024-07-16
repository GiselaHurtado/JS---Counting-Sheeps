// countsheeps.test.js

import { describe, expect, it } from "vitest";
import { countSheeps } from "../app.js";

describe('How many sheep are there?', () => {

    it('should return the number of sheeps in the list', () => {
        const list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
        const expected = 17;

        const result = countSheeps(list1);

        expect(result).toBeTypeOf("number");
        expect(result).toEqual(expected);
    });

    it('should return 0 if there are no sheeps in the list', () => {
        const list2 = [false, false, false];
        const expected = 0;

        const result = countSheeps(list2);

        expect(result).toBeTypeOf("number");
        expect(result).toEqual(expected);
    });

    it('should return 0 if there are no sheeps in the list', () => {
        const list2 = [false, false, false];
        const expected = 0;

        const result = countSheeps(list2);

        expect(result).toBeTypeOf("number");
        expect(result).toEqual(expected);
    });

    it('should return the correct message if there are no sheeps', () => {
        const list2 = [false, false, false];
        const result = countSheeps(list2);

        expect(result).toEqual(0);
        expect(result === 0 ? "UPS!!! Wolfs eaten Sheeps" : `There are ${result} sheep in total`).toEqual("UPS!!! Wolfs eaten Sheeps");
    });

    it('should return the correct message if there are sheeps', () => {
        const list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
        const result = countSheeps(list1);

        expect(result).toEqual(17);
        expect(result === 0 ? "UPS!!! Wolfs eaten Sheeps" : `There are ${result} sheep in total`).toEqual("There are 17 sheep in total");
    });

  
});

