// Iterative DFS
var allPathsSourceTarget = function (graph) {

    const result = [];
    const stack = [[0, []]]

    while (stack.length) {
        const [current, currentPath] = stack.pop();
        if (current === graph.length - 1) result.push([...currentPath, current]);

        for (const neighbor of graph[current]) {
            stack.push([neighbor, [...currentPath, current]])
        }
    }
    return result
};

// Iterative BFS
var allPathsSourceTarget = function (graph) {
    const result = [];
    const queue = [[0, []]]

    while (queue.length) {
        const [current, currentPath] = queue.shift();
        if (current === graph.length - 1) result.push([...currentPath, current]);

        for (const neighbor of graph[current]) {
            queue.push([neighbor, [...currentPath, current]])
        }
    }
    return result
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))
