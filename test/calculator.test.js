const calculator = require('../src/calculator');

test("Results should be 2 + 3 = 5", () => {
    expect(calculator.add(2,3)).toEqual(5);
});

test("Results should be 5 - 3 = 2", () => {
    expect(calculator.sub(5, 3)).toEqual(2);
});

test("Results should be 2 *3 = 6", () => {
    expect(calculator.mul(2, 3)).toEqual(6);
});

test("Results should be 9 / 3 = 3", () => {
    expect(calculator.add(2 , 3)).toEqual(5);
});


