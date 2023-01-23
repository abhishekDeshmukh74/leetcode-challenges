const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// Heap
var findClosestElements = function (arr, k, x) {
  const maxHeap = new MaxPriorityQueue({
    compare: (a, b) => {
      const diffA = Math.abs(a - x);
      const diffB = Math.abs(b - x);
      if (diffA === diffB) return a < b;
      return diffA < diffB;
    },
  });

  arr.forEach((num) => {
    maxHeap.enqueue(num);
    while (maxHeap.size() > k) maxHeap.dequeue();
  });
  return maxHeap.toArray().sort((a, b) => a - b);
};

// TODO: more approaches
var findClosestElements = function (arr, k, x) {

};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
