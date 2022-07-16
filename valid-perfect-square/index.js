// var isPerfectSquare = function (num) {
//   const result = []
//   for (let i = 1; i * i <= num; i++) result.push(i * i)
//   return result.pop() === num
// };

var isPerfectSquare = function (num) {
    if (num < 2) return true;

    let left = 2;
    let right = Math.floor(num / 2)

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        const guess = middle * middle
        if (guess === num) return true
        guess > num ? right = middle - 1 : left = middle + 1
    }
    return false
};

console.log(isPerfectSquare(9))
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
