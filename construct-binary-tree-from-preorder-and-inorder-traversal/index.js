function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var buildTree = function (preOrder, inOrder) {
  const inorderIndexMap = new Map()
  inOrder.forEach((element, index) => inorderIndexMap.set(element, index));

  const getTree = (pStart = 0, pEnd = preOrder.length - 1, iStart = 0, iEnd = inOrder.length - 1) => {
    if (pStart > pEnd || iStart > iEnd) return null

    const root = new TreeNode(preOrder[pStart]);
    const rootIndex = inorderIndexMap.get(preOrder[pStart]);
    const numsLeft = rootIndex - iStart

    root.left = getTree(pStart + 1, pStart + numsLeft, iStart, iStart + rootIndex - 1);
    root.right = getTree(pStart + numsLeft + 1, pEnd, rootIndex + 1, iEnd);
    return root;
  }

  return getTree(0, preOrder.length - 1, 0, inOrder.length - 1)
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
