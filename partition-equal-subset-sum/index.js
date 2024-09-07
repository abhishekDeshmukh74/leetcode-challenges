// Let n be the number of array elements and m be the subSetSum

// Time Complexity: O(m⋅n)
// In the worst case where there is no overlapping calculation, the maximum number of entries in the memo would be m⋅n.For each entry, overall we could consider that it takes constant time, i.e.each invocation of dfs() at most emits one entry in the memo

// Space Complexity: O(m⋅n)
// The overall computation is proportional to the number of entries in memo. Hence, the overall time complexity is O(m⋅n). We are using a 2 dimensional array memo of size m⋅n and O(n) space to store the recursive call stack.This gives us the space complexity as O(n) + O(m⋅n) = O(m⋅n)

// Top Down Recursive - Memoization
var canPartition = function (nums) {
    const sum = nums.reduce((a, c) => a + c);
    if (sum % 2 !== 0) return false;
    const targetSum = sum / 2;

    const dp = Array(nums.length)
        .fill()
        .map(() => Array(targetSum + 1).fill());

    const dfs = (i, target) => {
        if (target < 0) return false;
        if (i < 0) return false;
        if (target === 0) return true;
        if (dp[i][target] !== undefined) return dp[i][target];

        return (dp[i][target] = dfs(i - 1, target - nums[i]) || dfs(i - 1, target));
    };

    dfs(nums.length - 1, targetSum);
};

// Bottom Up Iterative Dynamic Programming
var canPartition = function (nums) {
    const sum = nums.reduce((a, c) => a + c);
    if (sum % 2 !== 0) return false;
    const targetSum = sum / 2;

    const dp = Array(nums.length)
        .fill()
        .map(() => Array(targetSum + 1).fill(false));

    for (let i = 0; i < nums.length; i++) dp[i][0] = true;

    for (let i = 0; i < nums.length; i++) {
        for (let target = 1; target <= targetSum; target++) {
            if (i - 1 < 0) continue;
            if (target - nums[i - 1] >= 0) {
                dp[i][target] = dp[i - 1][target] || dp[i - 1][target - nums[i - 1]];
            } else {
                dp[i][target] = dp[i - 1][target];
            }
        }
    }
    return dp[nums.length - 1][targetSum];
};

// Bottom Up Iterative Dynamic Programming
var canPartition = function (nums) {
    const sum = nums.reduce((a, c) => a + c);
    if (sum % 2 !== 0) return false;
    const targetSum = sum / 2;

    const dp = Array(nums.length)
        .fill()
        .map(() => Array(targetSum + 1).fill(false));

    for (let i = 0; i < nums.length; i++) dp[i][0] = true;

    for (let i = 0; i < nums.length; i++) {
        for (let target = 1; target <= targetSum; target++) {
            if (i - 1 < 0) continue;
            if (target - nums[i - 1] >= 0) {
                dp[i][target] = dp[i - 1][target] || dp[i - 1][target - nums[i - 1]];
            } else {
                dp[i][target] = dp[i - 1][target];
            }
        }
    }
    return dp[nums.length - 1][targetSum];
};

// Bottom Up Iterative Dynamic Programming - 1D space optimization
var canPartition = function (nums) {
    const sum = nums.reduce((a, c) => a + c);
    if (sum % 2 !== 0) return false;
    const targetSum = sum / 2;

    let prev = Array(targetSum + 1).fill(false);
    prev[0] = true;

    for (let i = 0; i < nums.length; i++) {
        let current = Array(targetSum + 1).fill(false);
        current[0] = true;

        for (let target = 1; target <= targetSum; target++) {
            if (target - nums[i] >= 0) {
                current[target] = prev[target] || prev[target - nums[i]];
            } else {
                current[target] = prev[target];
            }
        }
        prev = current;
    }

    return prev[targetSum];
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
console.log(
    canPartition([
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 99, 97,
    ])
);
