var missingNumber = function (nums) {
    return nums.length * (nums.length + 1) / 2 - nums.reduce((a, c) => a + c)
};

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
