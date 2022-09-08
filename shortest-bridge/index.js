var shortestBridge = function (grid) {

    const visited = new Set()
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    const queue = []

    const dfs = (x, y) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return
        if (grid[x][y] === 0) return
        const key = `${x}-${y}`
        if (visited.has(key)) return

        visited.add(key)
        queue.push([x, y])
        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
    }

    const bfs = () => {
        let level = 0
        while (queue.length) {
            level++
            let currentLevel = queue.length

            while (currentLevel--) {
                const [x, y] = queue.shift()
                for (const [dx, dy] of directions) {
                    const newX = x + dx;
                    const newY = y + dy;
                    if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length) continue
                    const key = `${newX}-${newY}`
                    if (visited.has(key)) continue
                    if (grid[newX][newY] === 1) return level - 1

                    visited.add(key)
                    queue.push([newX, newY])
                }
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j)
                return bfs()
            }
        }
    }
};

console.log(shortestBridge([[0, 1], [1, 0]]))
