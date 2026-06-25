const reverseString = require('../src/reverseString.js');

test('specified value should be reversed', () => {
    expect(reverseString('newton')).toBe("notwen");
});