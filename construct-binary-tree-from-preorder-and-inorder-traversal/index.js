function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
const node9 = new TreeNode(9)
const node20 = new TreeNode(20)
const node15 = new TreeNode(15)
const node7 = new TreeNode(7)
root.left = node9;
root.right = node20;
node20.left = node15;
node20.right = node7;

var buildTree = function (preOrder, inOrder) {
  const map = new Map()
  inOrder.forEach((element, index) => map.set(element, index));

  const getTree = (pStart = 0, pEnd = preOrder.length - 1, iStart = 0, iEnd = inOrder.length - 1) => {
    if (pStart > pEnd || iStart > iEnd) return null

    const root = new TreeNode(preOrder[pStart]);
    const rootIndex = map.get(preOrder[pStart]);
    const numsLeft = rootIndex - iStart

    root.left = getTree(pStart + 1, pStart + numsLeft, iStart, iStart + rootIndex - 1);
    root.right = getTree(pStart + numsLeft + 1, pEnd, rootIndex + 1, iEnd);
    return root;
  }

  return getTree(0, preOrder.length - 1, 0, inOrder.length - 1)
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
