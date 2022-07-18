// Multiple ways to solve this problem
var trap = function (height) {
    const maxLeftArr = [height[0]];
    let leftMax = height[0];
    for (let i = 1; i < height.length; i++) {
        leftMax = Math.max(leftMax, height[i])
        maxLeftArr[i] = leftMax
    }

    const maxRightArr = [height[height.length - 1]];
    let rightMax = height[height.length - 1];
    for (let i = height.length - 1; i >= 0; i--) {
        rightMax = Math.max(rightMax, height[i])
        maxRightArr[i] = rightMax
    }

    let count = 0;
    for (let i = 0; i < height.length; i++) {
        console.log(Math.min(maxLeftArr[i], maxRightArr[i]) - height[i])
        count += Math.min(maxLeftArr[i], maxRightArr[i]) - height[i]
    }
    return count;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
