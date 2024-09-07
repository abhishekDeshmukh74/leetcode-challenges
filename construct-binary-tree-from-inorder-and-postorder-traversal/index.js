function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

var buildTree = function (inorder, postorder) {
    const inorderIndexMap = new Map()
    inorder.forEach((num, index) => inorderIndexMap.set(num, index))

    const getTree = (iStart, iEnd, pStart, pEnd) => {
        if (iStart > iEnd || pStart > pEnd) return null

        const root = new TreeNode(postorder[pEnd])
        const rootIndex = inorderIndexMap.get(postorder[pEnd])
        const numsLeft = rootIndex - iStart

        root.left = getTree(iStart, rootIndex - 1, pStart, pStart + numsLeft - 1)
        root.right = getTree(rootIndex + 1, iEnd, pStart + numsLeft, pEnd - 1)
        return root
    }
    return getTree(0, inorder.length - 1, 0, postorder.length - 1)
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
