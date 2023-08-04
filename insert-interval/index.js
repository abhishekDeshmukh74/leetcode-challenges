var insert = function (intervals, newInterval) {
    const result = []

    for (const [index, [startInt, endInt]] of intervals.entries()) {
        if (newInterval[1] < startInt) {
            result.push(newInterval)
            return result.concat(intervals.slice(index))
        } else if (newInterval[0] > endInt) {
            result.push([startInt, endInt])
        } else {
            newInterval = [Math.min(newInterval[0], startInt), Math.max(newInterval[1], endInt)]
        }
    }
    result.push(newInterval)
    return result
}

console.log(insert([[1, 3], [6, 9]], [2, 5]))
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
