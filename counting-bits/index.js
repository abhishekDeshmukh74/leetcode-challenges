// for odd i => no of 1s(i) = 1 + no of 1s(i/2) and for even i => no of 1s(i) = no of 1s(i/2)
var countBits = function (n) {
    const table = [0]
    for (let i = 1; i <= n; i++) {
        table[i] = table[Math.floor(i / 2)] + i % 2
    }
    return table
};

console.log(countBits(2))
console.log(countBits(5))
