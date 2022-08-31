var countSubIslands = function (grid1, grid2) {
    const visited = new Set()
    let count = 0

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= grid2.length || c >= grid2[0].length) return true
        if (grid2[r][c] === 0) return true
        if (visited.has(`${r}-${c}`)) return true

        visited.add(`${r}-${c}`)
        let result = true
        if (grid1[r][c] === 0) result = false
        const right = dfs(r + 1, c)
        const left = dfs(r - 1, c)
        const down = dfs(r, c + 1)
        const up = dfs(r, c - 1)
        return result && right && left && down && up
    }

    for (let i = 0; i < grid2.length; i++) {
        for (let j = 0; j < grid2[i].length; j++) {
            if (grid2[i][j] === 1 && !visited.has(`${i}-${j}`) && dfs(i, j)) count++
        }
    }
    return count
};

console.log(countSubIslands(
    [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]],
    [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]
))
