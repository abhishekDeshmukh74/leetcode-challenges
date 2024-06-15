var earliestAcq = function (logs, n) {
    logs.sort((a, b) => a[0] - b[0])

    const parent = Array.from(Array(n).keys());
    const rank = Array(n).fill(1);

    const union = (node1, node2) => {
        const p1 = find(node1)
        const p2 = find(node2)

        if (p1 === p2) return;

        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
            rank[p2] = 0;
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
            rank[p1] = 0;
        }
        if (rank[p2] === n || rank[p1] === n) return true
    }
    const find = (node) => {
        if (node === parent[node]) return parent[node];
        parent[node] = find(parent[node]);
        return parent[node];
    }

    for (const [time, a, b] of logs) {
        if (union(a, b)) return time
    }
    return -1
};

console.log(earliestAcq([[20190101, 0, 1], [20190104, 3, 4], [20190107, 2, 3], [20190211, 1, 5], [20190224, 2, 4], [20190301, 0, 3], [20190312, 1, 2], [20190322, 4, 5]], 6))
console.log(earliestAcq([[0, 2, 0], [1, 0, 1], [3, 0, 3], [4, 1, 2], [7, 3, 1]], 4))
