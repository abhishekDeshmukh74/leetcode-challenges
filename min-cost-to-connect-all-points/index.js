const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue')


var minCostConnectPoints = function (points) {
    let result = 0;
    let nodesUsed = 0;
    const visited = [];

    const minHeap = new MinPriorityQueue();
    minHeap.enqueue(0, 0);

    while (nodesUsed < points.length) {
        const { element: minNode, priority: minWeight } = minHeap.dequeue();
        if (visited[minNode]) continue;

        nodesUsed += 1;
        visited[minNode] = true;
        result += minWeight;

        const [x1, y1] = points[minNode];
        for (let i = 0; i < points.length; i++) {
            if (visited[i]) continue;

            const [x2, y2] = points[i];
            const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            minHeap.enqueue(i, distance);
        }
    }
    return result;
};


console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]))
console.log(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]]))
