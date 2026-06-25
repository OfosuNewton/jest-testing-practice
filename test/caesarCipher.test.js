const caesarCipher = require('../src/caesarCipher.js');

// Testing Wrapping from z to a 
test('wrapping from z to a', () => {
    expect(caesarCipher('xyz',3)).toBe('abc');
});

//Testing for case preservation
test('checking for case preservation', () => {
    expect(caesarCipher('Hello',3)).toBe('Khoor');
});

//Testinfor punctuation, space and other non alphabetical characters
test('testing for unchanged punctuations, spaces and any other non alphabetical characters', () => {
    expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
});