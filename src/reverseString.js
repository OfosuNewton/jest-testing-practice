function reverseMe(string_value) {
    return string_value.split('').reverse().join('');
}

reverseMe("newton");
module.exports = reverseMe;