var evalRPN = function (tokens) {
    const stack = []

    for (const token of tokens) {
        if (token === '+') {
            stack.push(stack.pop() + stack.pop())
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop())
        } else if (token === '-') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b - a)
        } else if (token === '/') {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(Math.trunc(b / a))
        } else {
            stack.push(Number(token))
        }
    }
    return stack.pop()
};

console.log(evalRPN(['2', '1', '+', '3', '*']))
console.log(evalRPN(['4', '13', '5', '/', '+']))
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']))
