var knightDialer = function (n) {
    const MOD = 1e9 + 7;

    const knightMoves = [
        [4, 6],
        [6, 8],
        [7, 9],
        [4, 8],
        [0, 3, 9],
        [],
        [0, 1, 7],
        [2, 6],
        [1, 3],
        [2, 4],
    ];

    const memo = new Array(n + 1).fill(0).map(() => new Array(10).fill(-1));

    const dfs = (num, steps) => {
        if (steps === n) return 1;
        if (memo[steps][num] !== -1) return memo[steps][num];

        let count = 0;
        for (const next of knightMoves[num]) {
            count = (count + dfs(next, steps + 1)) % MOD;
        }

        return memo[steps][num] = count;
    };

    let totalCount = 0;
    for (let i = 0; i <= 9; i++) {
        totalCount = (totalCount + dfs(i.toString(), 1)) % MOD;
    }
    return totalCount;
};

console.log(knightDialer(1))
console.log(knightDialer(2))
console.log(knightDialer(3131))
