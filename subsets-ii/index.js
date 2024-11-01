// Time complexity => O(2^n * n)
var subsetsWithDup = function (nums) {

    nums.sort((a, b) => a - b)
    const subsets = []

    const dfs = (i, arr) => {
        subsets.push([...arr])

        for (let j = i; j < nums.length; j++) {
            if (j > i && nums[j] === nums[j - 1]) continue;
            arr.push(nums[j])
            dfs(j + 1, arr)
            arr.pop()
        }
    }
    dfs(0, [])
    return subsets
};

console.log(subsetsWithDup([1, 2, 2]))
console.log(subsetsWithDup([0]))
