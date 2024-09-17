// Recursive
var minCost = function (n, cuts) {
    cuts = [0, ...cuts.sort((a, b) => a - b), n]
    const dp = Array(cuts.length).fill().map(() => Array(cuts.length).fill())
    const dfs = (i, j) => {
        if (i > j) return 0
        if (dp[i][j] !== undefined) return dp[i][j]

        let minCost = Infinity
        for (let k = i; k <= j; k++) {
            let cost = cuts[j + 1] - cuts[i - 1] + dfs(i, k - 1) + dfs(k + 1, j)
            minCost = Math.min(minCost, cost)
        }
        return dp[i][j] = minCost
    }
    return dfs(1, n)
};

// Iterative
var minCost = function (n, cuts) {
    cuts = [0, ...cuts.sort((a, b) => a - b), n];
    const dp = Array(cuts.length).fill().map(() => Array(cuts.length).fill(0));

    for (let i = cuts.length - 2; i >= 1; i--) {
        for (let j = i; j <= cuts.length - 2; j++) {
            if (i > j) continue;
            let minCost = Infinity
            for (let k = i; k <= j; k++) {
                let cost = cuts[j + 1] - cuts[i - 1] + dp[i][k - 1] + dp[k + 1][j];
                minCost = Math.min(minCost, cost);
            }
            dp[i][j] = minCost
        }
    }
    return dp[1][cuts.length - 2];
};

console.log(minCost(7, [1, 3, 4, 5]))
console.log(minCost(9, [5, 6, 1, 4, 2]))
console.log(minCost(13, [3, 12, 1, 5, 9, 11, 4, 8, 7, 2, 6, 10]))
