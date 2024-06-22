var largestRectangleArea = function (heights) {

    const nearestSmallerLeft = []
    let stack = []
    // nearest smaller to left
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) stack.pop()

        nearestSmallerLeft[i] = (stack.length === 0) ? -1 : stack[stack.length - 1];
        stack.push(i)
    }

    stack = []
    const nearestSmallerRight = []
    // nearest smaller to right
    for (let i = heights.length - 1; i >= 0; i--) {
        while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) stack.pop()

        nearestSmallerRight[i] = (stack.length === 0) ? heights.length : stack[stack.length - 1];
        stack.push(i)
    }

    // calculate the largest rectangle area
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        const width = nearestSmallerRight[i] - nearestSmallerLeft[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([2, 4]))
