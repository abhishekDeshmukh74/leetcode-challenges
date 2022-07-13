function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);
root.left = node2;
root.right = node3;
node2.right = node5;

// Iterative DFS
var binaryTreePaths = function (root, path) {
  if (!root) return [];
  const newPath = !path ? `${root.val}` : `${path}->${root.val}`;
  if (!root.left && !root.right) return [newPath];

  const leftPaths = binaryTreePaths(root.left, newPath);
  const rightPaths = binaryTreePaths(root.right, newPath);
  return [...leftPaths, ...rightPaths];
};

// Iterative DFS
var binaryTreePaths = function (root) {
  if (!root) return [];
  const paths = [];
  const stack = [[root, ``]];

  while (stack.length) {
    const [current, path] = stack.pop();
    const newPath = `${path}->${current.val}`;
    if (!current.left && !current.right) paths.push(newPath.slice(2));

    current.left && stack.push([current.left, newPath]);
    current.right && stack.push([current.right, newPath]);
  }

  return paths;
};

console.log(binaryTreePaths(root));
