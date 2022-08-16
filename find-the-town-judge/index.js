var findJudge = function (n, trust) {
    const degrees = Array(n).fill(0)
    for (const [a, b] of trust) {
        degrees[b - 1]++
        degrees[a - 1]--
    }

    for (let i = 0; i < degrees.length; i++) {
        if (degrees[i] === n - 1) return i + 1
    }
    return -1
};

console.log(findJudge(2, [[1, 2]]))
console.log(findJudge(3, [[1, 3], [2, 3]]))
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]))
