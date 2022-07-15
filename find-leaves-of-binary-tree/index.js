function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

var findLeaves = function (root) {
  const result = [];
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) return -1;
    const left = dfs(node.left);
    const right = dfs(node.right);
    const current = Math.max(left, right) + 1;
    if (!result[current]) result[current] = [];
    result[current].push(node.val);
    return current;
  }
};

console.log(findLeaves(root));
