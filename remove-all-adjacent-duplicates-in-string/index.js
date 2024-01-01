var removeDuplicates = function(s) {
    const stack = [];

    for (const char of s) {
        stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
    }
    
    return stack.join('');
};

console.log(removeDuplicates('abbaca'))
console.log(removeDuplicates('azxxzy'))