
// Time Complexity**: O(n * 2^n)
// Space Complexity**: O(n * 2^n)
var subsets = function (nums) {
    const answer = []

    const dfs = (i, arr) => {
        answer.push([...arr])
        for (let j = i; j < nums.length; j++) {
            arr.push(nums[j])
            dfs(j + 1, arr)
            arr.pop()
        }
    }

    dfs(0, [])
    return answer
};
console.log(subsets([1, 2, 3]))
console.log(subsets([0]))
