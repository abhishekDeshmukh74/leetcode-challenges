var minPathSum = function (grid) {
    const table = Array(grid.length).fill().map(() => Array(grid[0].length).fill(0))
    table[0][0] = grid[0][0]

    // first row base case
    for (let c = 1; c < grid[0].length; c++) {
        table[0][c] = table[0][c - 1] + grid[0][c]
    }
    // first column base case
    for (let r = 1; r < grid.length; r++) {
        table[r][0] = table[r - 1][0] + grid[r][0]
    }

    for (let r = 1; r < grid.length; r++) {
        for (let c = 1; c < grid[r].length; c++) {
            table[r][c] = grid[r][c] + Math.min(table[r - 1][c], table[r][c - 1])
        }
    }
    return table[grid.length - 1][grid[0].length - 1]
}
