// Let n be the number of array elements and m be the subSetSum

// Time Complexity: O(m⋅n)
// In the worst case where there is no overlapping calculation, the maximum number of entries in the memo would be m⋅n.For each entry, overall we could consider that it takes constant time, i.e.each invocation of dfs() at most emits one entry in the memo

// Space Complexity: O(m⋅n)
// The overall computation is proportional to the number of entries in memo.Hence, the overall time complexity is O(m⋅n). We are using a 2 dimensional array memo of size m⋅n and O(n) space to store the recursive call stack.This gives us the space complexity as O(n) +O(m⋅n) = O(m⋅n)

// Top Down Recursive - Memoization
var canPartition = function (nums) {
    const sum = nums.reduce((a, c) => a + c)
    if (sum % 2 !== 0) return false

    const memo = {}
    const dfs = (i, target) => {
        if (target < 0 || i >= nums.length) return false;
        if (target === 0) return true;
        const key = `${i}-${target}`;
        if (key in memo) return memo[key]

        memo[key] = dfs(i + 1, target - nums[i]) || dfs(i + 1, target)
        return memo[key]
    }
    return dfs(0, sum / 2)
};

// Bottom Up Iterative Dynamic Programming
var canPartition = function (nums) {
    const sum = nums.reduce((a, c) => a + c)
    if (sum % 2 !== 0) return false

    const targetSum = sum / 2;
    const table = Array(targetSum + 1).fill(false)
    table[0] = true

    for (const num of nums) {
        const temp = []
        for (let i = 0; i <= targetSum; i++) {
            if (table[i] && i + num <= targetSum) temp.push(i + num);
        }
        for (let i = 0; i < temp.length; i++) table[temp[i]] = true
    }
    return table[targetSum]
};

console.log(canPartition([1, 5, 11, 5]))
console.log(canPartition([1, 2, 3, 5]))
console.log(canPartition([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 97]))
