const sortArray = (nums, left = 0, right = nums.length - 1) => {
    if (nums.length < 2) return nums
    if (left >= right) return

    const partition = (left, right) => {
        const pivotIndex = Math.floor((left + right) / 2)
        const pivot = nums[pivotIndex]
        while (left <= right) {
            while (nums[left] < pivot) left++
            while (nums[right] > pivot) right--
            if (left <= right) {
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left++
                right--
            }
        }
        return left
    }
    const pIndex = partition(left, right)
    sortArray(nums, left, pIndex - 1)
    sortArray(nums, pIndex, right)
    return nums
}

console.log(sortArray([0]))
console.log(sortArray([5, 2, 3, 1]))
console.log(sortArray([5, 1, 1, 2, 0, 0]))
