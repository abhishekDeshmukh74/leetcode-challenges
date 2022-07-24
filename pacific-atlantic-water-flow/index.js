var pacificAtlantic = function (heights) {

    const pacific = new Set();
    const atlantic = new Set();

    const dfs = (i, j, visited, prevDistance) => {
        if (i < 0 || j < 0 || i >= heights.length || j >= heights[0].length) return
        if (visited.has(i + '-' + j)) return
        if (heights[i][j] < prevDistance) return

        visited.add(i + '-' + j)
        dfs(i + 1, j, visited, heights[i][j])
        dfs(i - 1, j, visited, heights[i][j])
        dfs(i, j + 1, visited, heights[i][j])
        dfs(i, j - 1, visited, heights[i][j])
    }

    // rows
    for (let j = 0; j < heights[0].length; j++) {
        dfs(0, j, pacific, -1)
        dfs(heights.length - 1, j, atlantic, -1)
    }

    // columns
    for (let i = 0; i < heights.length; i++) {
        dfs(i, 0, pacific, -1)
        dfs(i, heights[0].length - 1, atlantic, -1)
    }

    const result = []
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[i].length; j++) {
            if (pacific.has(i + '-' + j) && atlantic.has(i + '-' + j)) result.push([i, j])
        }
    };
    return result
}

console.log(pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
]))
