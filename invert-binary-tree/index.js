function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(4)
const node2 = new TreeNode(2)
const node7 = new TreeNode(7)
const node1 = new TreeNode(1)
const node3 = new TreeNode(3)
const node6 = new TreeNode(6)
const node9 = new TreeNode(9)

root.left = node2;
root.right = node7;
node2.left = node1;
node2.right = node3;
node7.left = node6;
node7.right = node9;

// Recursive DFS
// var invertTree = function (root) {
//   if (!root) return null;

//   const left = root.left;
//   root.left = root.right;
//   root.right = left;

//   invertTree(root.left);
//   invertTree(root.right);

//   return root;
// };

// Iterative BFS
var invertTree = function (root) {
  if (!root) return null;
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    const left = current.left;
    current.left = current.right;
    current.right = left;

    current.left && queue.push(current.left);
    current.right && queue.push(current.right);
  }
  return root;
};

console.log(invertTree(root));
