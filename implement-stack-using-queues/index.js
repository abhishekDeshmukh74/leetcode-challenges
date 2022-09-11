var MyStack = function () {
    this.queue1 = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {

    for (let i = 0; i < this.queue1.length - 1; i++) {
        this.queue1.push(this.queue1.shift())
    }
    return this.queue1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue1[this.queue1.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue1.length === 0
};


/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
