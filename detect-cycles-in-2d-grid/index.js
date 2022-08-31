const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

const containsCycle = function (grid) {
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

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length) continue;
            if (grid[newX][newY] !== grid[i][j]) continue;
            if (newX === parentX && newY === parentY) continue;
            if (visited.has(`${newX}-${newY}`)) continue
            queue.push([newX, newY, x, y]);
        }
    }
    return false
}

console.log(containsCycle([
    ['a', 'a', 'a', 'a'],
    ['a', 'b', 'b', 'a'],
    ['a', 'b', 'b', 'a'],
    ['a', 'a', 'a', 'a'],
]))

console.log(containsCycle([
    ['b', 'a', 'c'],
    ['c', 'a', 'c'],
    ['d', 'd', 'c'],
    ['b', 'c', 'c']
]))

console.log(containsCycle([
    ['f', 'a', 'a', 'c', 'b'],
    ['e', 'a', 'a', 'e', 'c'],
    ['c', 'f', 'b', 'b', 'b'],
    ['c', 'e', 'a', 'b', 'e'],
    ['f', 'e', 'f', 'b', 'f']
]))
