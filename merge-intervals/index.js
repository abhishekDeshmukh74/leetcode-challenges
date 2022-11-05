var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const merged = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        const lastEnd = merged[merged.length - 1][1]

        // merge interval
        if (start <= lastEnd) {
            merged[merged.length - 1][1] = Math.max(end, lastEnd)
        } else {
            merged.push(intervals[i])
        }
    }
    return merged
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [4, 5]]))
