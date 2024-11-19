var calPoints = function (operations) {
    const stack = [];

    for (const op of operations) {
        if (op === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if (op === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else if (op === 'C') {
            stack.pop();
        } else {
            stack.push(Number(op));
        }
    }
    return stack.reduce((a, b) => a + b, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]))
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))
