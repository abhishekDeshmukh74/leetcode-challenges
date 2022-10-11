var increasingTriplet = function (nums) {
    let left = Infinity
    let middle = Infinity

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= left) {
            left = nums[i]
        } else if (nums[i] <= middle) {
            middle = nums[i]
        } else return true
    }
    return false
}

console.log(increasingTriplet([1, 2, 3, 4, 5]))
console.log(increasingTriplet([5, 4, 3, 2, 1]))
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))
console.log(increasingTriplet([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
