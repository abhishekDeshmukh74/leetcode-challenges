var reduce = function (nums, fn, init) {
    nums.forEach(num => {
        init = fn(init, num)
    });
    return init
};

console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0))
console.log(reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100))
