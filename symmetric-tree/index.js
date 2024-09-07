function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(1)

const pNode2 = new TreeNode(2)
const pNode3 = new TreeNode(3)
const pNode4 = new TreeNode(4)
const qNode2 = new TreeNode(2)
const qNode3 = new TreeNode(3)
const qNode4 = new TreeNode(4)

root.left = pNode2
root.right = qNode2
pNode2.left = null
pNode2.right = pNode3
qNode2.left = null
qNode2.right = pNode3

var isSymmetric = function (root) {
  if (!root) return true;

  const dfs = (root1, root2) => {
    if (!root1 && !root2) return true
    if (!root1 || !root2) return false
    if (root1.val !== root2.val) return false
    return dfs(root1.left, root2.right) && dfs(root1.right, root2.left);
  }
  return dfs(root.left, root.right)
};

console.log(isSymmetric(root));
