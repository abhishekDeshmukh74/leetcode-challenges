// Time Complexity: O(N + E), where N is the number of nodes in the graph, and E is the number of edges. We explore each node once when we transform it from uncolored to colored, traversing all its edges in the process.
var isBipartite = function (graph) {

    const colors = Array(graph.length).fill(-1)

    for (let i = 0; i < graph.length; i++) {

        if (colors[i] !== -1) continue;

        const queue = [[i, 0]]

        while (queue.length) {
            const [current, color] = queue.shift();

            if (colors[current] === -1) {
                colors[current] = color;
                for (const neighbor of graph[current]) {
                    queue.push([neighbor, color ^ 1])
                }
            }
            if (colors[current] !== color) return false
        }
    }
    return true
};

console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]))
console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]))
