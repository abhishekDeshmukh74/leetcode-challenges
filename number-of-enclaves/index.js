var numEnclaves = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const containsBoundary = i * j === 0 || i === grid.length - 1 || j === grid[0].length - 1
            if (grid[i][j] === 1 && containsBoundary) exploreArea(grid, i, j)
        }
    }

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) count++
        }
    }
    return count;
};

const exploreArea = (grid, i, j) => {
    const key = `${i}-${j}`
    const iInbounds = i >= 0 && i < grid.length;
    const jInbounds = j >= 0 && j < grid[0].length;
    if (!iInbounds || !jInbounds || grid[i][j] === 0) return;
    grid[i][j] = 0
    exploreArea(grid, i + 1, j)
    exploreArea(grid, i - 1, j)
    exploreArea(grid, i, j + 1)
    exploreArea(grid, i, j - 1)
}

console.log(numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
]))
