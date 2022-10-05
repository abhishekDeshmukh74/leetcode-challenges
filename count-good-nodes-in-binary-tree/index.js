function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
const node1_1 = new TreeNode(1)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node1_2 = new TreeNode(1)
const node5 = new TreeNode(5)
root.left = node1_1;
root.right = node4;
node1_1.left = node3;
node4.left = node1_2;
node4.right = node5;

// Recursive DFS

// Iterative DFS

// Iterative BFS
var goodNodes = function (root) {
  if (!root) return 0;
  let count = 0;
  const queue = [[root, -Infinity]];
  while (queue.length) {
    const [current, maxVal] = queue.shift();
    const currentMax = Math.max(current.val, maxVal);
    if (current.val >= maxVal) count++;
    current.left && queue.push([current.left, currentMax]);
    current.right && queue.push([current.right, currentMax]);
  }
  return count;
};

console.log(goodNodes(root));
