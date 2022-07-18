// Recursive DFS
// const countComponents = function (n, edges) {
//     const graph = buildGraph(edges);
//     let count = 0;
//     const visited = new Set();
//     for (const node in graph) explore(graph, node, visited) && count++
//     return count + n -visited.size;
// };


// const explore = function (graph, current, visited) {
//     if (visited.has(String(current))) return false;
//     visited.add(String(current))
//     for (const neighbor of graph[current]) explore(graph, neighbor, visited)
//     return true;
// }

const buildGraph = function (edges) {
    const graph = {}
    for (const [a, b] of edges) {
        if (!graph[a]) graph[a] = []
        if (!graph[b]) graph[b] = []
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph
}

// Iterative DFS
const countComponents = function (n, edges) {
    const graph = buildGraph(edges);
    let count = 0;
    const visited = new Set();
    for (const node in graph) {
        if (!visited.has(String(node))) {
            explore(graph, node, visited)
            count++
        }
    }
    return count + n - visited.size;
}
const explore = function (graph, current, visited) {
    const stack = [current]

    while (stack.length) {
        const poppedNode = stack.pop();
        if (visited.has(String(poppedNode))) continue;
        visited.add(String(poppedNode));
        for (const neighbor of graph[poppedNode]) {
            stack.push(neighbor);
        }
    }
}

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]))
console.log(countComponents(5, [[0, 1], [1, 2], [0, 2], [3, 4]]))
console.log(countComponents(4, [[2, 3], [1, 2], [1, 3]]))
