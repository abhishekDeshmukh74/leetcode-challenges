var pivotIndex = function (nums) {
    const total = nums.reduce((a, c) => a + c)
    let currentSum = 0

    for (let i = 0; i < nums.length; i++) {
        const expectedSumAddition = total - nums[i]
        if (currentSum === expectedSumAddition / 2) return i
        currentSum += nums[i]
    }
    return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
