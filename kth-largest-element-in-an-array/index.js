const { MinPriorityQueue } = require("@datastructures-js/priority-queue")

// Heap
// Time complexity: O(Nlogk)
var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue()
  for (const num of nums) {
    minHeap.enqueue(num)
    if (minHeap.size() > k) minHeap.dequeue()
  }
  return minHeap.front().element
}

// Quick select
// Time complexity: O(n) average case, O(n2) worst case
var findKthLargest = function (nums, k) {
  const quickSelect = (left, right) => {
    const pivot = nums[right]
    let p = left

    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]]
        p++
      }
    }
    [nums[p], nums[right]] = [nums[right], nums[p]]

    if (p === nums.length - k) return nums[p]
    if (p > nums.length - k) {
      return quickSelect(left, p - 1);
    } else {
      return quickSelect(p + 1, right);
    }
  }
  return quickSelect(0, nums.length - 1)
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
