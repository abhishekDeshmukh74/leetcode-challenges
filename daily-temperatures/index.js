var dailyTemperatures = function (temperatures) {
    const stack = [];
    const nearestGreaterElement = [];

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (
            stack.length &&
            temperatures[stack[stack.length - 1] < temperatures[i]]
        ) {
            stack.pop();
        }
        if (stack.length === 0) {
            nearestGreaterElement[i] = 0;
        } else {
            nearestGreaterElement[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return nearestGreaterElement;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
