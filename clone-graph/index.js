function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

var cloneGraph = function (root) {
  const clonedNodes = new Map();

  const dfs = (node) => {
    if (!node) return null;
    if (clonedNodes.has(node)) return clonedNodes.get(node);

    const copy = new Node(node.val);
    clonedNodes.set(node, copy);

    for (const neighbor of node.neighbors) {
      const clonedNeighbor = dfs(neighbor);
      copy.neighbors.push(clonedNeighbor);
    }
    return copy;
  };

  return dfs(root);
};

console.log(cloneGraph(node1));
