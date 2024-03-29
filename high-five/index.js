const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// Time Complexity: Assuming N is the total number of items, finding a key in the map takes O(logN) time.Here since we are using a min heap, the size of which is upper bounded(by k = 5 elements) hence pushing an item in the heap takes O(1) time.Hence to insert all the N elements, the total time taken is O(N).Iterating over the map takes O(N) time and extracting all the elements from the min heap is a constant time operation.Hence the overall time taken is O(NlogN)

// Space Complexity: O(N), the space used by allScores.

const highFive = function (items) {
    const result = [];
    const map = new Map();
    const k = 5;

    for (const [id, score] of items) {
        if (!map.has(id)) map.set(id, new MinPriorityQueue());
        const idHeap = map.get(id);
        idHeap.enqueue(score);
        if (idHeap.size() > k) idHeap.dequeue();
    }

    map.forEach((heap, id) => {
        let sum = 0;
        for (let i = 0; i < k; i++) {
            sum += heap.dequeue().element;
        }
        result.push([id, Math.floor(sum / k)]);
    });
    return result.sort((a, b) => a[0] - b[0]);
};

console.log(highFive([[1, 91], [1, 92], [2, 93], [2, 97], [1, 60], [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]]))
console.log(highFive([[1, 100], [7, 100], [1, 100], [7, 100], [1, 100], [7, 100], [1, 100], [7, 100], [1, 100], [7, 100]]))
