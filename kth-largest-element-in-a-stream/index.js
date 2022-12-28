const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue')

var KthLargest = function (k, nums) {
    this.k = k
    this.nums = nums
    this.minHeap = new MinPriorityQueue()
    nums.forEach(num => this.minHeap.enqueue(num))
}

KthLargest.prototype.add = function (val) {
    this.minHeap.enqueue(val)
    while (this.minHeap.size() > this.k) this.minHeap.dequeue()
    return this.minHeap.front().element
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3))
console.log(kthLargest.add(5))
console.log(kthLargest.add(10))
console.log(kthLargest.add(9))
console.log(kthLargest.add(4))
