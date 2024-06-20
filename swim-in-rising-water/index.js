const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

const swimInWater = (grid) => {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const visited = Array(grid.length)
        .fill()
        .map(() => Array(grid.length).fill(false));

    const minHeap = new MinPriorityQueue();
    minHeap.enqueue([0, 0], grid[0][0]);

    while (minHeap.size()) {
        const {
            element: [x, y],
            priority: time,
        } = minHeap.dequeue();

        if (x === grid.length - 1 && y === grid[0].length - 1) return time;

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length)
                continue;
            if (visited[newX][newY]) continue;

            visited[newX][newY] = true; // Mark as visited before enqueuing
            minHeap.enqueue([newX, newY], Math.max(grid[newX][newY], time));
        }
    }
};

console.log(
    swimInWater([
        [0, 2],
        [1, 3],
    ])
);
console.log(
    swimInWater([
        [0, 1, 2, 3, 4],
        [24, 23, 22, 21, 5],
        [12, 13, 14, 15, 16],
        [11, 17, 18, 19, 20],
        [10, 9, 8, 7, 6],
    ])
);
