const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue')

var findKthLargest = function (nums, k) {
    const minHeap = new MinPriorityQueue()
    for (const num of nums) {
        minHeap.enqueue(num)
        if (minHeap.size() > k) minHeap.dequeue()
    }
    return minHeap.front().element
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
