var numTrees = function (n) {
    const table = Array(n + 1).fill(1)

    for (let nodes = 2; nodes <= n; nodes++) {
        let total = 0

        for (let root = 1; root <= nodes; root++) {
            let left = root - 1
            let right = nodes - root
            total += table[left] * table[right]
        }
        table[nodes] = total
    }
    return table[n]
};

console.log(numTrees(1))
console.log(numTrees(3))
console.log(numTrees(4))
console.log(numTrees(19))
