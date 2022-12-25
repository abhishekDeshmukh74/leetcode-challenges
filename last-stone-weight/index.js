const {
    MaxPriorityQueue,
} = require('@datastructures-js/priority-queue')

var lastStoneWeight = function (stones) {
    const maxHeap = new MaxPriorityQueue()
    stones.forEach(stone => maxHeap.enqueue(stone))

    while (maxHeap.size() > 1) {
        const x = maxHeap.dequeue().element
        const y = maxHeap.dequeue().element
        if (x !== y) maxHeap.enqueue(Math.abs(x - y))
    }
    return maxHeap.front() ? maxHeap.front().element : 0
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
console.log(lastStoneWeight([1, 1]))
console.log(lastStoneWeight([7]))
