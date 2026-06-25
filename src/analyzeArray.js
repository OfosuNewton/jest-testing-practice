function analyzeArray(array) {
    return {
        average: array.reduce((sum, num) => sum + num, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}
// console.log(analyzeArray([1,8,3,4,2,6]));
module.exports = analyzeArray;