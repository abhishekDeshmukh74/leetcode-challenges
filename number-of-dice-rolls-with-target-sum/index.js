// Recursive
var numRollsToTarget = function (n, k, target) {

    const MOD = BigInt(10) ** BigInt(9) + BigInt(7); // 10^9 + 7.
    const memo = {}

    const dfs = (cn, cTarget) => {
        if (cn === 0) {
            return cTarget === 0 ? BigInt(1) : BigInt(0)
        }
        if (cTarget < 0) return BigInt(0)
        const key = `${cn}-${cTarget}`
        if (key in memo) return memo[key]

        let count = BigInt(0)
        for (let i = 1; i <= k; i++) {
            count += dfs(cn - 1, cTarget - i)
        }
        memo[key] = count
        return count
    }

    return dfs(n, target) % MOD
}

// TODO
// Iterative

console.log(numRollsToTarget(1, 6, 3))
console.log(numRollsToTarget(2, 6, 7))
console.log(numRollsToTarget(30, 30, 500))
console.log(numRollsToTarget(10, 21, 946))
