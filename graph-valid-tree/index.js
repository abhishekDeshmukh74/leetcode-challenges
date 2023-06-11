var validTree = function (n, edges) {

    const graph = {}
    for (let i = 0; i < n; i++) graph[i] = []
    for (const [a, b] of edges) {
        graph[a].push(b)
        graph[b].push(a)
    }

    const visited = new Set()
    const dfs = (i, prev) => {
        if (visited.has(i)) return false
        visited.add(i)

        for (const j of graph[i]) {
            if (j === prev) continue
            if (!dfs(j, i)) return false
        }
        return true
    }
    return dfs(0, -1) && visited.size === n
};

// console.log(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))
// console.log(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]))
console.log(validTree(4, [[2, 3], [1, 2], [1, 3]]))
