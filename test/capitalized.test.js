const capitalize = require('../src/capitalized.js');

test('specified value should be capitalized', () => {
    expect(capitalize('newton')).toBe("Newton");
});