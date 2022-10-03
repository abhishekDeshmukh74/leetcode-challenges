var minCost = function (colors, neededTime) {
    let minTime = 0
    for (let i = 0; i < colors.length - 1;) {
        let jump = 1
        let max = neededTime[i]
        let sum = neededTime[i]
        while (colors[i] === colors[i + jump]) {
            sum += neededTime[i + jump]
            max = Math.max(max, neededTime[i + jump])
            jump++
        }
        minTime += sum - max
        i += jump
    }
    return minTime
}

console.log(minCost('abaac', [1, 2, 3, 4, 5]))
console.log(minCost('abc', [1, 2, 3]))
console.log(minCost('aabaa', [1, 2, 3, 4, 1]))
