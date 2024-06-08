const countPairs = (n, edges) => {
    const parent = Array.from(Array(n).keys());
    const rank = Array(n).fill(1);

    const find = (node) => {
        if (node === parent[node]) return parent[node];
        parent[node] = find(parent[node]);
        return parent[node];
    };

    const union = (n1, n2) => {
        const p1 = find(n1);
        const p2 = find(n2);

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
    };

    for (const [n1, n2] of edges) union(n1, n2);

    const maxEdges = ((n - 1) * n) / 2;
    const currentEdges = rank.reduce((a, c) => a + ((c - 1) * c) / 2, 0);
    return maxEdges - currentEdges;
};

console.log(
    countPairs(3, [
        [0, 1],
        [0, 2],
        [1, 2],
    ])
);
console.log(
    countPairs(7, [
        [0, 2],
        [0, 5],
        [2, 4],
        [1, 6],
        [5, 4],
    ])
);
console.log(countPairs(1, []));
console.log(countPairs(12, []));
console.log(
    countPairs(11, [
        [5, 0],
        [1, 0],
        [10, 7],
        [9, 8],
        [7, 2],
        [1, 3],
        [0, 2],
        [8, 5],
        [4, 6],
        [4, 2],
    ])
);
