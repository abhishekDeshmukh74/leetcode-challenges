var minStartValue = function (nums) {
    let runningSum = 0
    let min = 0

    for (const num of nums) {
        runningSum += num;
        if (runningSum < min) min = runningSum
    }
    return (min <= 0) ? 1 - min : min - 1
};

console.log(minStartValue([-3, 2, -3, 4, 2]))
console.log(minStartValue([1, 2]))
console.log(minStartValue([1, -2, -3]))
console.log(minStartValue([2, 3, 5, -5, -1]))
