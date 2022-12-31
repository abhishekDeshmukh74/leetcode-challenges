// Time complexity: O(log⁡N)
// Space complexity: O(N)

const {
    MaxPriorityQueue,
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue')


var MedianFinder = function () {
    this.maxHeap = new MaxPriorityQueue()
    this.minHeap = new MinPriorityQueue()
}

MedianFinder.prototype.addNum = function (num) {
    const size = this.maxHeap.size() + this.minHeap.size()
    if (size % 2 === 0) {
        if (num < this.minHeap.front()?.element) {
            this.maxHeap.enqueue(num)
        } else {
            this.minHeap.enqueue(num)
            this.maxHeap.enqueue(this.minHeap.dequeue().element)
        }
    } else {
        if (num < this.maxHeap.front().element) {
            this.maxHeap.enqueue(num)
            this.minHeap.enqueue(this.maxHeap.dequeue().element)
        } else {
            this.minHeap.enqueue(num)
        }
    }
}


MedianFinder.prototype.findMedian = function () {
    const length = this.maxHeap.size() + this.minHeap.size()
    return length % 2 === 0 ? (this.maxHeap.front().element + this.minHeap.front().element) / 2 : this.maxHeap.front().element
}

const medianFinder = new MedianFinder()
console.log(medianFinder.addNum(1))    // arr = [1]
console.log(medianFinder.addNum(2))    // arr = [1, 2]
console.log(medianFinder.findMedian()) // return 1.5
console.log(medianFinder.addNum(3))    // arr[1, 2, 3]
console.log(medianFinder.findMedian()) // return 2.0
