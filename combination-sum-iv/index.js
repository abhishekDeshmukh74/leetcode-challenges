var combinationSum4 = function (nums, target) {
    const memo = Array(nums.length + 1).fill().map(() => Array(target + 1).fill())

    function dfs(i, rem) {
        if (rem === 0) return 1;
        if (rem < 0) return 0;
        if (memo[i][rem] !== undefined) return memo[i][rem];

        let ways = 0;
        for (let j = 0; j < nums.length; j++) {
            ways += dfs(j, rem - nums[j]);
        }

        return memo[i][rem] = ways;
    }

    return dfs(0, target);
};

console.log(combinationSum4([1, 2, 3], 4)); // Output: 7
console.log(combinationSum4([9], 3));       // Output: 0
