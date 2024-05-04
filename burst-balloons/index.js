// Time complexity: O(N^3)
// Space complexity: O(N^2)

var maxCoins = function (nums) {
    nums = [1, ...nums, 1]
    const memo = Array.from(
        { length: nums.length + 2 },
        () => Array(nums.length + 2).fill(0)
    );
    const dfs = (i, j) => {
        if (i > j) return 0
        if (memo[i][j]) return memo[i][j]
        for (let k = i; k <= j; k++) {
            let coins = nums[i - 1] * nums[k] * nums[j + 1] + dfs(i, k - 1) + dfs(k + 1, j)
            memo[i][j] = Math.max(coins, memo[i][j])
        }
        return memo[i][j]
    }
    return dfs(1, nums.length - 2)
};

// Iterative
var maxCoins = function (nums) {
    const n = nums.length;
    nums = [1, ...nums, 1]
    const dp = Array.from(
        { length: n + 2 },
        () => Array(n + 2).fill(0)
    );
    for (let i = n; i >= 1; i--) {
        for (let j = i; j <= n; j++) {
            for (let ind = i; ind <= j; ind++) {
                let cost = (nums[i - 1] * nums[ind] * nums[j + 1]) + dp[i][ind - 1] + dp[ind + 1][j];
                dp[i][j] = Math.max(cost, dp[i][j]);
            }
        }
    }
    return dp[1][n];
};

console.log(maxCoins([1, 5]))
console.log(maxCoins([3, 1, 5, 8]))
console.log(maxCoins([8, 2, 6, 8, 9, 8, 1, 4, 1, 5, 3, 0, 7, 7, 0, 4, 2]))
