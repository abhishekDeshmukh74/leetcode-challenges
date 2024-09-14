// Time complexity: O(N^3)
// Space complexity: O(N^2)
var maxCoins = function (nums) {
    nums = [1, ...nums, 1]
    const dp = Array(nums.length).fill().map(() => Array(nums.length).fill(0))

    const dfs = (i, j) => {
        if (i > j) return 0
        if (dp[i][j] !== 0) return dp[i][j]

        for (let k = i; k <= j; k++) {
            const coins = nums[i - 1] * nums[k] * nums[j + 1] + dfs(i, k - 1) + dfs(k + 1, j)
            dp[i][j] = Math.max(coins, dp[i][j])
        }
        return dp[i][j]
    }
    return dfs(1, nums.length - 2)
}

var maxCoins = function (nums) {
    nums = [1, ...nums, 1]
    const dp = Array(nums.length).fill().map(() => Array(nums.length).fill(0))

    for (let i = nums.length - 2; i >= 1; i--) {
        for (let j = 1; j <= nums.length - 2; j++) {
            if (i > j) continue;
            for (let k = i; k <= j; k++) {
                const coins = nums[i - 1] * nums[k] * nums[j + 1] + dp[i][k - 1] + dp[k + 1][j]
                dp[i][j] = Math.max(coins, dp[i][j])
            }
        }
    }
    return dp[1][nums.length - 2]
}

console.log(maxCoins([1, 5]))
console.log(maxCoins([3, 1, 5, 8]))
console.log(maxCoins([8, 2, 6, 8, 9, 8, 1, 4, 1, 5, 3, 0, 7, 7, 0, 4, 2]))
