// Approach 1: BFS

var minKnightMoves = function (x, y) {

    const knightDirections = [[2, 1], [-2, 1], [2, -1], [-2, -1], [1, 2], [-1, 2], [1, -2], [-1, -2]]
    const visited = new Set();
    const queue = [[0, 0, 0]]

    while (queue.length) {

        const [currentX, currentY, currentDistance] = queue.shift();
        if (currentX === x && currentY === y) return currentDistance;

        for (const [dx, dy] of knightDirections) {
            const newX = currentX + dx;
            const newY = currentY + dy;
            if (visited.has(`${newX}-${newY}`)) continue

            visited.add(`${newX}-${newY}`)
            queue.push([newX, newY, currentDistance + 1])
        }
    }
};

// Approach 2 Bidirectional BFS
