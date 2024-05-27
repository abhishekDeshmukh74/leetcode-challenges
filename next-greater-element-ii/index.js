var nextGreaterElements = function (nums) {
    const nearestGreater = [];
    const stack = [];

    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums[i % nums.length]) {
            stack.pop();
        }
        if (i < nums.length) {
            if (stack.length === 0) {
                nearestGreater[i] = -1;
            } else {
                nearestGreater[i] = stack[stack.length - 1];
            }
        }
        stack.push(nums[i % nums.length]);
    }
    return nearestGreater;
};

console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1, 2, 3, 4, 3]));
