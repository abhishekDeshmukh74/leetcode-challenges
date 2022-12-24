const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue');

const topKFrequent = function (nums, k) {
    if (k === nums.length) return nums
    const map = new Map()

    nums.forEach(n => map[n] ? map[n]++ : map[n] = 1)

    const minHeap = new MinPriorityQueue()
    for (const num in map) {
        minHeap.enqueue(Number(num), map[num])
        while (minHeap.size() > k) minHeap.dequeue()
    }
    return minHeap.toArray().map(x => x.element)
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1, 2], 2))
