var closedIsland = function (grid) {
    let isl = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 0 && dfs(r, c, grid)) isl++
        }
    }
    return isl
};

function dfs(r, c, grid) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length) return false
    if (grid[r][c] === 1) return true
    grid[r][c] = 1
    const top = dfs(r + 1, c, grid)
    const bottom = dfs(r - 1, c, grid)
    const right = dfs(r, c + 1, grid)
    const left = dfs(r, c - 1, grid)
    return top && bottom && right && left
}

console.log(
    closedIsland([
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ])
);

console.log(
    closedIsland([
        [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
        [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
        [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 0]
    ])
);
