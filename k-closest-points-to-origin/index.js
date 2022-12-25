const {
    MaxPriorityQueue,
} = require('@datastructures-js/priority-queue')

var kClosest = function (points, k) {

    if (points.length === k) return points
    const distances = points.map(([x, y]) => Math.sqrt(x * x + y * y))

    const maxHeap = new MaxPriorityQueue()
    for (let i = 0; i < distances.length; i++) {
        maxHeap.enqueue(i, distances[i])
        while (maxHeap.size() > k) maxHeap.dequeue()
    }
    return maxHeap.toArray().map(x => points[x.element])
};

console.log(kClosest([[1, 3], [-2, 2]], 1))
