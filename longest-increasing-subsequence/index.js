// Recursive
var lengthOfLIS = function (nums) {

    const memo = {}
    let result = 1;

    const dfs = (i) => {
        if (memo[i]) return memo[i]

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                memo[i] = Math.max(memo[i] || 0, 1 + dfs(j))
                result = Math.max(memo[i], result)
            }
        }
        return memo[i] || 1
    };

    for (let i = 0; i < nums.length; i++) dfs(i)
    return result
}

// Iterative
var lengthOfLIS = function (nums) {

    const table = Array(nums.length).fill(1)
    let max = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                table[j] = Math.max(table[j], 1 + table[i])
                max = Math.max(max, table[j])
            }
        }
    }
    return max
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101]))
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))
