var wallsAndGates = function (rooms) {

    const INF = 2147483647;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const queue = []

    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[i].length; j++) {
            if (rooms[i][j] === 0) queue.push([i, j])
        }
    }

    while (queue.length) {

        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX < 0 || newY < 0 || newX >= rooms.length || newY >= rooms[0].length) continue;
            if (rooms[newX][newY] !== INF) continue;

            rooms[newX][newY] = rooms[x][y] + 1
            queue.push([newX, newY])
        }
    }
    return rooms
};

console.log(wallsAndGates([
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]]
))
