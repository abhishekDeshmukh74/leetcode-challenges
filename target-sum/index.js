// Recursive
// Time complexity: O(t⋅n).The memo array of size O(t⋅n) has been filled just once.Here, tt refers to the sum of the nums array and n refers to the length of the nums array.
// Space complexity: O(t⋅n).The depth of recursion tree can go up to n.The memo array contains t⋅n elements.

var findTargetSumWays = function (nums, target) {
    const memo = {}
    const dfs = (i, total) => {
        if (i === nums.length) {
            return (total === target) ? 1 : 0
        }
        const key = `${i},${total}`
        if (key in memo) return memo[key]
        memo[key] = dfs(i + 1, total + nums[i]) + dfs(i + 1, total - nums[i])
        return memo[key]
    }
    return dfs(0, 0)
};
