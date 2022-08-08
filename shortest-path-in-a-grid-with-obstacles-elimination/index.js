var shortestPath = function (grid, k) {

    if (k >= grid.length + grid[0].length - 2) return grid.length + grid[0].length - 2

    const visited = new Set()
    const queue = [[0, 0, k, 0]]
    const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]

    while (queue.length) {
        let [x, y, obs, distance] = queue.shift()

        if (visited.has(`${x}-${y}-${obs}`)) continue
        if (obs === -1) continue
        if (x === grid.length - 1 && y === grid[0].length - 1) return distance

        visited.add(`${x}-${y}-${obs}`)

        for (let [dx, dy] of directions) {
            let newX = x + dx
            let newY = y + dy
            if (newX < 0 || newX >= grid.length || newY < 0 || newY >= grid[0].length) continue
            queue.push([newX, newY, grid[newX][newY] === 1 ? obs - 1 : obs, distance + 1])
        }
    }
    return -1
};

console.log(shortestPath([
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 0],
    [0, 1, 1],
    [0, 0, 0]
], 1))
console.log(shortestPath([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
], 18))
