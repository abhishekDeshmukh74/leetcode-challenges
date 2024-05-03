const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue')

var networkDelayTime = function (times, n, k) {
    const graph = {};
    for (const [u, v, w] of times) {
        if (!graph[u]) graph[u] = [];
        graph[u].push([v, w]);
    }

    let max = 0
    const visited = new Set();
    const minHeap = new MinPriorityQueue()
    minHeap.enqueue(k, 0)

    while (!minHeap.isEmpty()) {

        const { element: currentNode, priority: distance } = minHeap.dequeue();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        max = Math.max(max, distance)
        if (n === visited.size) return max;

        if (!graph[String(currentNode)]) continue

        for (const neighbor of graph[String(currentNode)]) {
            const [nNode, nDistance] = neighbor;
            minHeap.enqueue(nNode, distance + nDistance)
        }
    }
    return visited.size === n ? max : -1
};

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));
console.log(networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 1]], 3, 2));
