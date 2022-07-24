var searchRange = function (nums, target) {

    const binarySearch = (left, right, leftBias) => {
        let i = -1
        while (left <= right) {
            let middle = Math.floor((left + right) / 2)
            if (nums[middle] > target) {
                right = middle - 1
            } else if (nums[middle] < target) {
                left = middle + 1
            } else {
                i = middle;
                leftBias ? right = middle - 1 : left = middle + 1
            }
        }
        return i
    }

    let left = 0;
    let right = nums.length - 1
    return [binarySearch(left, right, true), binarySearch(left, right, false)]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
