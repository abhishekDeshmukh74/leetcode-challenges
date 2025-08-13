var lengthOfLongestSubsequence = function (nums, target) {
    const memo = Array.from({ length: nums.length + 1 }, () => Array(target + 1));

    const dfs = (i, sum) => {

        if (sum > target) return -1;   // positive-only
        if (i === nums.length) return sum === target ? 0 : -1;

        if (memo[i][sum] !== undefined) return memo[i][sum];

        let take = -1;
        const next = dfs(i + 1, sum + nums[i]);
        if (next !== -1) take = 1 + next;

        const skip = dfs(i + 1, sum);

        return memo[i][sum] = Math.max(take, skip);
    }

    return dfs(0, 0)
};

console.log(lengthOfLongestSubsequence([1, 2, 3, 4, 5], 9));      // Output: 3
console.log(lengthOfLongestSubsequence([4, 1, 3, 2, 1, 5], 7));    // Output: 4
console.log(lengthOfLongestSubsequence([1, 1, 5, 4, 5], 3));      // Output: -1
console.log(lengthOfLongestSubsequence(
    [3, 7, 6, 7, 2, 2, 2, 10, 7, 10, 8, 7, 7, 10, 7, 3, 1, 2, 8, 3, 5, 1, 5, 8, 4, 8, 8, 7, 6, 2, 4, 8, 10, 9, 5, 9, 2, 3, 1, 7, 4, 10, 7, 5, 2, 8, 6, 5, 1, 3, 5, 9, 9, 10, 6, 10],
    162
)); // Output: 38
