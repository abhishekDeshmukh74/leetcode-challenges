var findRedundantConnection = function (edges) {

    const parent = Array.from(Array(edges.length + 1).keys())
    const rank = Array(edges.length + 1).fill(1)

    const find = (n) => {
        let p = parent[n]
        while (p !== parent[p]) p = parent[parent[p]]
        return p
    }

    const union = (n1, n2) => {
        const p1 = find(n1);
        const p2 = find(n2);
        if (p1 === p2) return false;

        if (rank[p1] > rank[p2]) {
            parent[p2] = p1
            rank[p1] += rank[p2]
        } else {
            parent[p1] = p2
            rank[p2] += rank[p1]
        }
        return true
    }

    for (const [n1, n2] of edges) if (!union(n1, n2)) return [n1, n2]
};

console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]]))
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))
console.log(findRedundantConnection([[7, 8], [2, 6], [2, 8], [1, 4], [9, 10], [1, 7], [3, 9], [6, 9], [3, 5], [3, 10]]))
