const minimumSemesters = (n, relations) => {
    const graph = {};
    const inDegrees = {};

    for (let i = 1; i <= n; i++) {
        inDegrees[i] = 0;
        graph[i] = [];
    }

    for (const [prev, next] of relations) {
        graph[prev].push(next);
        inDegrees[next]++;
    }


    const queue = [];
    let count = 0;
    let minimumSemesters = 0;

    // Topological sort
    for (const node in inDegrees) {
        if (inDegrees[node] === 0) queue.push(node);
    }

    while (queue.length) {
        let currentQueueLength = queue.length;

        while (currentQueueLength--) {
            const current = queue.shift();
            for (const neighbor of graph[current]) {
                inDegrees[neighbor]--;
                if (inDegrees[neighbor] === 0) queue.push(neighbor);
            }
            count++;
        }
        minimumSemesters++;
    }
    return count === n ? minimumSemesters : -1;
};

console.log(
    minimumSemesters(3, [
        [1, 3],
        [2, 3],
    ])
);

console.log(
    minimumSemesters(3, [
        [1, 2],
        [2, 3],
        [3, 1],
    ])
);
