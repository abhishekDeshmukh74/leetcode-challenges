// Quick sort
var sortArray = (nums, left = 0, right = nums.length - 1) => {
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

// Merge sort
var sortArray = (nums) => {

    const sort = (low, high) => {
        if (low >= high) return;

        const mid = Math.floor((low + high) / 2)

        sort(low, mid);
        sort(mid + 1, high);
        merge(low, mid, high);
    }

    const merge = (low, mid, high) => {

        const sorted = [];

        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                sorted.push(nums[left]);
                left++;
            } else {
                sorted.push(nums[right]);
                right++;
            }
        }

        while (left <= mid) {
            sorted.push(nums[left]);
            left++;
        }

        while (right <= high) {
            sorted.push(nums[right]);
            right++;
        }

        for (let i = low; i <= high; i++) {
            nums[i] = sorted[i - low];
        }
    }

    sort(0, nums.length - 1)
    return nums;
}

console.log(sortArray([0]))
console.log(sortArray([5, 2, 3, 1]))
console.log(sortArray([5, 1, 1, 2, 0, 0]))
console.log(sortArray([-2, 3, -5]))
