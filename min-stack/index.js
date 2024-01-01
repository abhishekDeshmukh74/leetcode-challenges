
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length -1]) this.minStack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const poppedValue = this.stack.pop()
    if (poppedValue === this.minStack[this.minStack.length - 1]) this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

var stack1 = new MinStack()
console.log(stack1.push(-2))
console.log(stack1.push(0))
console.log(stack1.push(-3))
console.log(stack1.getMin())
console.log(stack1.pop())
console.log(stack1.top())
console.log(stack1.getMin())

var stack2 = new MinStack()
console.log(stack2.push(0))
console.log(stack2.push(1))
console.log(stack2.push(1))
console.log(stack2.getMin())
console.log(stack2.pop())
console.log(stack2.getMin())
