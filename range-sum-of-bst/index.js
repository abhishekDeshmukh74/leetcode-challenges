function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(10)
const node5 = new TreeNode(5)
const node15 = new TreeNode(15)
const node3 = new TreeNode(3)
const node7 = new TreeNode(7)
const node18 = new TreeNode(18)

root.left = node5;
root.right = node15;
node5.left = node3;
node5.right = node7;
node15.right = node18;

// Recursive BST
// var rangeSumBST = function (root, low, high) {
//   if (!root) return 0;
//   let sum = root.val;
//   if (root.val < low) sum = 0;
//   if (root.val > high) sum = 0;

//   return sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
// };

// inorder
var rangeSumBST = function (root, low, high) {
  const stack = []
  let current = root
  let sum = 0

  while (true) {
    if (current) {
      stack.push(current)
      current = current.left
    } else {
      if (!stack.length) return sum
      current = stack.pop()
      if (current.val >= low && current.val <= high) sum += current.val
      if (current.val > high) return sum
      current = current.right
    }
  }
};

console.log(rangeSumBST(root, 7, 15));
