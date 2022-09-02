var nearestExit = function (maze, entrance) {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    const queue = [entrance]
    maze[entrance[0]][entrance[1]] = '+'

    let steps = 0
    while (queue.length) {
        let currentLevelQueueLength = queue.length
        steps++

        while (currentLevelQueueLength--) {
            const [x, y] = queue.shift()
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX < 0 || newY < 0 || newX > maze.length - 1 || newY > maze[0].length - 1) continue
                if (maze[newX][newY] === '+') continue
                if (newX * newY === 0 || newX === maze.length - 1 || newY === maze[0].length - 1) return steps
                maze[newX][newY] = '+'

                queue.push([newX, newY])
            }
        }
    }
    return -1
}

console.log(nearestExit([['+', '+', '.', '+'], ['.', '.', '.', '+'], ['+', '+', '+', '.']], [1, 2]))
console.log(nearestExit([['+', '+', '+'], ['.', '.', '.'], ['+', '+', '+']], [1, 0]))
console.log(nearestExit([['.', '+']], [0, 0]))
console.log(nearestExit([
    ['+', '.', '+', '+', '+', '+', '+'],
    ['+', '.', '+', '.', '.', '.', '+'],
    ['+', '.', '+', '.', '+', '.', '+'],
    ['+', '.', '.', '.', '+', '.', '+'],
    ['+', '+', '+', '+', '+', '.', '+']
], [0, 1]))
