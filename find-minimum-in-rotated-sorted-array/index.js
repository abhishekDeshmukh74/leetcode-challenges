const findMin = (nums) => {

    let left = 0;
    let right = nums.length - 1;
    let min = nums[0]

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        min = Math.min(nums[mid], min)
        nums[mid] < nums[right] ? right = mid - 1 : left = mid + 1
    }
    return min
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))
console.log(findMin([11, 13, 15, 17]))
console.log(findMin([1]))
console.log(findMin([2, 1]))
console.log(findMin([3, 1, 2]))
