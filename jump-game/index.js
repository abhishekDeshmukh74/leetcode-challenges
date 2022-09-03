// Dynamic Programming
var canJump = function (nums) {
    const table = Array(nums.length).fill(false);
    table[0] = true;

    for (let i = 0; i <= nums.length; i++) {
        if (table[i]) {
            for (let j = 1; j <= nums[i]; j++) {
                if (i + j > nums.length) continue;
                table[i + j] = true;
            }
        }
    }
    return table[nums.length];
};

// TODO - GREEDY

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([0]))
