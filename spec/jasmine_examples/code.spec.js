const { Calculator } = require('../../lib/jasmine_examples/code.js');

const codeForTest = new Calculator();

describe('homework 15 tests', () => {

    it(`addition is calculated propery`, async () => {
        const array = [13, 2.08, 21, 973];
        const sum = codeForTest.add(array);
        expect(sum).toEqual(1009.08);
    })

    it(`multiplication is calculated propery`, async () => {
        const array = [3, 2, 21, 1.5];
        const multi = codeForTest.multiply(array);
        expect(multi).toEqual(189);
    })

    it(`subtraction is calculated propery`, async () => {
        const subtraction = codeForTest.subtract(756, 15);
        expect(subtraction).toEqual(741);
    })

    it(`division is calculated propery`, async () => {
        const division = codeForTest.divide(265, 5);
        expect(division).toEqual(53);
    })

    it(`exponentiation is calculated propery`, async () => {
        const exponentiation = codeForTest.exponent(2);
        expect(exponentiation).toEqual(7.38905609893065);
    })

});


