// You must write an algorithm that runs in O(n) time and uses only constant extra space
var findDuplicates = function (nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1
        if (nums[index] < 0) output.push(index + 1)
        nums[index] = -nums[index]
    }
    return output
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
