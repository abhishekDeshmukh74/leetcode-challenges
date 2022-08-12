// Recursive
var divisorGame = function (n) {
    if (n === 1) return false

    for (let i = 1; i < n; i++) {
        if (n % i === 0 && divisorGame(n - i) === false) return true
        return false
    }
};

var divisorGame = function (n) {
    return n % 2 === 0
};

console.log(divisorGame(2))
console.log(divisorGame(3))
console.log(divisorGame(9))
console.log(divisorGame(10000))
