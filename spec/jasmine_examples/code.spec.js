const { Calculator } = require('../../lib/jasmine_examples/code.js');

const codeForTest = new Calculator();

describe('homework 15 tests', () => {
   
    // Addition
    it(`addition is calculated propery`, async () => {
        let sum = codeForTest.add(2, 1, 14, 9);
        expect(sum).toEqual(26);
    })

    it(`addition: negative values`, async () => {
        let sum = codeForTest.add(-2, -1, 14, -9);
        expect(sum).toEqual(2);
    })

    it(`addition: true/false value`, async () => {
        let sum = codeForTest.add(2, 1, true, 9);
        expect(sum).toEqual(13); // true = 1
    })

    it(`addition: Infinity value`, async () => {
        let sum = codeForTest.add(2, Infinity, 14, 9);
        expect(sum).toEqual(Infinity);
    })

    it(`addition: NaN value`, async () => {
        let sum = codeForTest.add(2, NaN, 14, 9);
        expect(sum).toBeNaN();
    })

    // Multiplication
    it(`multiplication is calculated propery`, async () => {
        let multi = codeForTest.multiply(3, 1, 6, 2);
        expect(multi).toEqual(36);
    })

    it(`multiplication: negative values`, async () => {
        let multi = codeForTest.multiply(-3, -1, -6, 2);
        expect(multi).toEqual(-36);
    })

    it(`multiplication: true/false value`, async () => {
        let multi = codeForTest.multiply(true, 1, 6, 2);
        expect(multi).toEqual(12);
    })

    it(`multiplication: Infinity value`, async () => {
        let multi = codeForTest.multiply(3, 1, Infinity, 2);
        expect(multi).toEqual(Infinity);
    })

    it(`multiplication: NaN value`, async () => {
        let multi = codeForTest.multiply(3, 1, NaN, 2);
        expect(multi).toBeNaN();
    })

    // Subtraction
    it(`subtraction is calculated propery`, async () => {
        const subtraction = codeForTest.subtract(16, 2);
        expect(subtraction).toEqual(14);
    })

    it(`subtraction: negative values`, async () => {
        const subtraction = codeForTest.subtract(-16, 2);
        expect(subtraction).toEqual(-18);
    })

    it(`subtraction: true/false value`, async () => {
        const subtraction = codeForTest.subtract(16, false);
        expect(subtraction).toEqual(16);
    })

    it(`subtraction: Infinity value`, async () => {
        const subtraction = codeForTest.subtract(16, Infinity);
        expect(subtraction).toEqual(-Infinity);
    })

    it(`subtraction: NaN value`, async () => {
        const subtraction = codeForTest.subtract(16, NaN);
        expect(subtraction).toBeNaN();
    })

    // Division
    it(`division is calculated propery`, async () => {
        const division = codeForTest.divide(24, 6);
        expect(division).toEqual(4);
    })

    it(`division: negative values`, async () => {
        const division = codeForTest.divide(24, -6);
        expect(division).toEqual(-4);
    })

    it(`division: true/false value`, async () => {
        const division = codeForTest.divide(24, true);
        expect(division).toEqual(24);
    })

    it(`division: Infinity value`, async () => {
        const division = codeForTest.divide(24, Infinity);
        expect(division).toEqual(0);
    })

    it(`division: NaN value`, async () => {
        const division = codeForTest.divide(24, NaN);
        expect(division).toBeNaN();
    })

    // Exponentiation
    it(`exponentiation is calculated propery`, async () => {
        const exponentiation = codeForTest.exponent(2);
        expect(exponentiation).toEqual(7.38905609893065);
    })

    it(`exponentiation: negative values`, async () => {
        const exponentiation = codeForTest.exponent(-2);
        expect(exponentiation).toEqual(0.1353352832366127);
    })

    it(`exponentiation: true/false value`, async () => {
        const exponentiation = codeForTest.exponent(true);
        expect(exponentiation).toEqual(2.718281828459045);
    })

    it(`exponentiation: Infinity value`, async () => {
        const exponentiation = codeForTest.exponent(Infinity);
        expect(exponentiation).toEqual(Infinity);
    })

    it(`exponentiation: NaN value`, async () => {
        const exponentiation = codeForTest.exponent(NaN);
        expect(exponentiation).toBeNaN();
    })

});


