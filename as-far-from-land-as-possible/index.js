var maxDistance = function (grid) {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    const queue = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) queue.push([i, j])
        }
    }

    if (queue.length === 0 || queue.length === grid.length * grid[0].length) return -1
    let level = 0

    while (queue.length) {
        let currentLevelSize = queue.length
        level++

        while (currentLevelSize--) {
            const [x, y] = queue.shift();
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length) continue
                if (grid[newX][newY] !== 0) continue
                grid[newX][newY] = level
                queue.push([newX, newY])
            }
        }
    }
    return level - 1
}

console.log(maxDistance([[1, 0, 1], [0, 0, 0], [1, 0, 1]]))
console.log(maxDistance([[1, 0, 0], [0, 0, 0], [0, 0, 0]]))
console.log(maxDistance([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]))
