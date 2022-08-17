class Node {
    constructor(key, val = 0) {
        this.key = key
        this.val = val
    }
}

class MinHeap { // Object version
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(node) {
        this.array.push(node);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;
        let pIdx = this.getParent(idx)
        let pNode = this.array[pIdx]
        let node = this.array[idx]
        if (!pNode || !node) return;
        if (pNode.val > node.val) {
            [this.array[idx], this.array[pIdx]] = [this.array[pIdx], this.array[idx]];
            this.siftUp(pIdx);
        }
    }

    poll() { // delete min/max
        if (this.array.length <= 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let min = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return min;
    }

    siftDown(idx) {
        if (this.array.length <= 2) return;
        let node = this.array[idx]
        if (!node) return;

        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);

        let lNodeVal = this.array[leftIdx] ? this.array[leftIdx].val : Infinity;
        let rNodeVal = this.array[rightIdx] ? this.array[rightIdx].val : Infinity

        if (node.val < lNodeVal && node.val < rNodeVal) return;

        let swapIdx;
        if (lNodeVal < rNodeVal) {
            swapIdx = leftIdx
        } else {
            swapIdx = rightIdx
        }

        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]]
        this.siftDown(swapIdx);

    }

    isEmpty() {
        return this.array.length <= 1
    }

    peek() {
        return this.array[1];
    }
}


var networkDelayTime = function (times, n, k) {
    const graph = {};
    for (const [u, v, w] of times) {
        if (!graph[u]) graph[u] = [];
        graph[u].push([v, w]);
    }

    let max = 0
    const visited = new Set();
    const pQueue = new MinHeap()
    pQueue.insert(new Node(k, 0))

    while (!pQueue.isEmpty()) {

        const { key: currentNode, val: distance } = pQueue.poll();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        max = Math.max(max, distance)
        if (n === visited.size) return max;

        if (!graph[String(currentNode)]) continue

        for (const neighbor of graph[String(currentNode)]) {
            const [nNode, nDistance] = neighbor;
            pQueue.insert(new Node(nNode, distance + nDistance))
        }
    }
    return visited.size === n ? max : -1
};

console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2));
console.log(networkDelayTime([[1, 2, 1], [2, 3, 2], [1, 3, 1]], 3, 2));
