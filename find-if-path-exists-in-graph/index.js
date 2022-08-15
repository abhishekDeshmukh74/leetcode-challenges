const buildGraph = (edges) => {
    const graph = {}
    for (const [a, b] of edges) {
        if (!graph[a]) graph[a] = []
        if (!graph[b]) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}
// Recursive DFS
const validPath = function (n, edges, source, destination) {

    const graph = buildGraph(edges)
    const visited = new Set()
    const dfs = (src, dest) => {

        if (src === dest) return true
        if (visited.has(String(src))) return false

        visited.add(String(src))

        for (const neighbor of graph[src]) {
            if (dfs(neighbor, dest)) return true
        }
        return false
    }

    return dfs(source, destination)
};

// Iterative BFS
const validPath = function (n, edges, source, destination) {

    const graph = buildGraph(edges)
    const visited = new Set()

    const queue = [source]

    while (queue.length) {
        const current = queue.shift();
        if (current === destination) return true
        if (!graph[current]) return true

        visited.add(String(current))

        for (const neighbor of graph[current]) {
            !visited.has(String(neighbor)) && queue.push(neighbor)
        }
    }
    return false
};

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))
console.log(validPath(1, [], 0, 0))
