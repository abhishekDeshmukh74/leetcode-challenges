var containsCycle = function (grid) {
    const visited = new Set();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!visited.has(`${i}-${j}`) && explore(grid, i, j, visited)) return true
        }
    }
    return false
};

const explore = (grid, i, j, visited) => {

    const queue = [[i, j, -1, -1]]

    while (queue.length) {

        const [x, y, parentX, parentY] = queue.shift();
        if (visited.has(`${x}-${y}`)) return true
        visited.add(`${x}-${y}`)

        const directions = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            const xInbounds = newX >= 0 && newX < grid.length;
            const yInbounds = newY >= 0 && newY < grid[0].length;
            if (!xInbounds || !yInbounds) continue;
            if (grid[newX][newY] !== grid[i][j]) continue;
            if (newX === parentX && newY === parentY) continue;
            if (visited.has(`${newX}-${newY}`)) continue
            queue.push([newX, newY, x, y]);
        }
    }
    return false
}
