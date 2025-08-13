
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var maxSubsequence = function (nums, k) {
    const minHeap = new MinPriorityQueue((element) => element.number);

    for (let i = 0; i < nums.length; i++) {
        minHeap.enqueue({ number: nums[i], position: i });
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    const res = [];
    while (!minHeap.isEmpty()) {
        res.push(minHeap.dequeue());
    }

    return res.sort((a, b) => a.position - b.position).map(v => v.number);
};

var maxSubsequence = function (nums, k) {
    const result = [];
    const indices = nums
        .map((num, index) => ({ num, index }))
        .sort((a, b) => b.num - a.num)
        .slice(0, k)
        .sort((a, b) => a.index - b.index);

    for (let item of indices) {
        result.push(item.num);
    }

    return result;
};

console.log(maxSubsequence([2, 1, 3, 3], 2));      // Output: [3, 3]
console.log(maxSubsequence([-1, -2, 3, 4], 3));    // Output: [-1, 3, 4]
console.log(maxSubsequence([3, 4, 3, 3], 2));      // Output: [3, 4]
console.log(maxSubsequence([50, -75], 2));         // Output: [50, -75]
