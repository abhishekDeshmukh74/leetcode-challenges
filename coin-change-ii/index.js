var change = function (amount, coins) {

    const dp = Array(coins.length).fill().map(() => Array(amount + 1).fill())

    const dfs = (i, target) => {
        if (i === 0) return target % coins[0] === 0 ? 1 : 0

        if (dp[i][target] !== undefined) return dp[i][target];

        let notTake = dfs(i - 1, target)
        let take = 0
        if (coins[i] <= target) take = dfs(i, target - coins[i])
        return dp[i][target] = take + notTake

    }
    return dfs(coins.length - 1, amount)
};

var change = function (amount, coins) {

    const dp = Array(coins.length).fill().map(() => Array(amount + 1).fill(0))

    for (let target = 0; target <= amount; target++) {
        dp[0][target] = (target % coins[0] === 0) ? 1 : 0;
    }

    for (let i = 1; i < coins.length; i++) {
        for (let target = 0; target <= amount; target++) {
            let notTake = dp[i - 1][target]
            let take = 0
            if (coins[i] <= target) take = dp[i][target - coins[i]]
            dp[i][target] = take + notTake
        }
    }

    return dp[coins.length - 1][amount]
};

var change = function (amount, coins) {

    let prev = Array(amount + 1).fill(0)

    for (let target = 0; target <= amount; target++) {
        prev[target] = (target % coins[0] === 0) ? 1 : 0;
    }

    for (let i = 1; i < coins.length; i++) {
        const current = []
        for (let target = 0; target <= amount; target++) {
            let notTake = prev[target]
            let take = 0
            if (coins[i] <= target) take = current[target - coins[i]]
            current[target] = take + notTake
        }
        prev = current
    }
    return prev[amount]
};

console.log(change(5, [1, 2, 5]))
console.log(change(3, [2]))
console.log(change(10, [10]))
console.log(change(5, [2, 5]))
