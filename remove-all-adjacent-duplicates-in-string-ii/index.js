var removeDuplicates = function(s, k) {
    const stack = []

    for (const char of s) {
       if(stack.length === 0 || stack[stack.length - 1][0] !== char){
            stack.push([char, 1])
       } else {
           stack[stack.length -1][1]++
       }
       if(stack[stack.length -1][1] === k)stack.pop();
    }

    let result = ''
    for (let [char, count] of stack) {
        result+= char.repeat(count)
    }
    return result;
};

console.log(removeDuplicates("abcd", 2))
console.log(removeDuplicates("deeedbbcccbdaa", 3))
console.log(removeDuplicates("pbbcggttciiippooaais", 2))

