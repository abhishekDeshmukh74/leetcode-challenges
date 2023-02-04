const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

var leastInterval = function (tasks, n) {
  const map = {};
  tasks.forEach((task) => (map[task] ? map[task]++ : (map[task] = 1)));

  const maxHeap = new MaxPriorityQueue();
  for (const key in map) maxHeap.enqueue(map[key]);

  let time = 0;
  const queue = []; // [frequency, idleTime]

  while (maxHeap.size() || queue.length) {
    time++;
    if (maxHeap.size()) {
      const max = maxHeap.dequeue();
      if (max.priority - 1 !== 0) queue.push([max.priority - 1, time + n]);
    }

    if (queue.length && queue[0][1] === time) {
      const processing = queue.shift();
      maxHeap.enqueue(processing[0]);
    }
  }
  return time;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0));
console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
);
