var mySqrt = function (x) {
    let left = 1
    let right = x
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        const middleSquare = middle * middle
        if (middleSquare === x) return middle
        middleSquare > x ? right = middle - 1 : left = middle + 1
    }
    return right
};
