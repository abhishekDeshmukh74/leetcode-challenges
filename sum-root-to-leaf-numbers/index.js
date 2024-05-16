function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

const root4 = new TreeNode(4);
const node9 = new TreeNode(9);
const node0 = new TreeNode(0);
const node5 = new TreeNode(5);
const node1 = new TreeNode(1);
root4.left = node9;
root4.right = node0;
node9.left = node5;
node9.right = node1;

var sumNumbers = function (root) {
  let sum = 0;

  const dfs = (node, path) => {
    if (!node) return;
    if (!node.left && !node.right) {
      sum += Number(path + node.val);
      return;
    }
    dfs(node.left, path + node.val);
    dfs(node.right, path + node.val);
  };
  dfs(root, "");
  return sum;
};

console.log(sumNumbers(root));
console.log(sumNumbers(root4));
