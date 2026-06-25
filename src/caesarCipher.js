function caesarCipher(str, num) {
    num = num % 26;
    let lowerCaseStr = str.toLowerCase();
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';
     for (let i = 0; i < lowerCaseStr.length; i++) {
        let currentLetter = lowerCaseStr[i];
        if(alpha.indexOf(currentLetter) < 0) {
            newStr += currentLetter;
            continue;
        }

        let currentIndex = alpha.indexOf(currentLetter);
        let newIndex = currentIndex + num;

        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        if(str[i] === str[i].toUpperCase()){
            newStr += alpha[newIndex].toUpperCase();
        } else newStr += alpha[newIndex];
     }
     return newStr;
}

// caesarCipher('xyz',3);
module.exports = caesarCipher;