var evalRPN = function (tokens) {
    const stack = [];
  
    for (const token of tokens) {
      if (!isNaN(token)) {
        stack.push(Number(token));
      } else {
        const b = stack.pop();
        const a = stack.pop();
        switch (token) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            stack.push(Math.trunc(a / b));
            break;
        }
      }
    }
    return stack.pop();
  };

console.log(evalRPN(['2', '1', '+', '3', '*']));
console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(
  evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])
);
