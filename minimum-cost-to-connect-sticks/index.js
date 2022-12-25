const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue')

var connectSticks = function (sticks) {
    const minHeap = new MinPriorityQueue()
    sticks.forEach(stick => minHeap.enqueue(stick));

    let minCost = 0
    while (minHeap.size() > 1) {
        const cost = minHeap.dequeue().element + minHeap.dequeue().element
        minCost += cost
        minHeap.enqueue(cost)
    }
    return minCost
}

console.log(connectSticks([2, 4, 3]))
