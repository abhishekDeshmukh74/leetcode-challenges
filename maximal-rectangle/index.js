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

    // Calculate the largest rectangle area
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        const width = nearestSmallerRight[i] - nearestSmallerLeft[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};

var maximalRectangle = function (matrix) {

    const heights = []
    let maxArea = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            heights[j] = (matrix[i][j] === '1') ? (heights[j] || 0) + 1 : 0;
        }
        const area = largestRectangleArea(heights);
        maxArea = Math.max(maxArea, area)
    }
    return maxArea
};

console.log(maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]))
console.log(maximalRectangle([["0"]]))
console.log(maximalRectangle([["1"]]))
