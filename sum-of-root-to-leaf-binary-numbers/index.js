var sumRootToLeaf = function (root) {
    let rootToLeaf = 0
    if (!root) return rootToLeaf

    const traverse = (node, currentNum) => {
        currentNum = currentNum << 1 | node.val
        if (!node.left && !node.right) rootToLeaf += currentNum

        node.left && traverse(node.left, currentNum)
        node.right && traverse(node.right, currentNum)
    }
    traverse(root)
    return rootToLeaf
}

console.log(sumRootToLeaf(root))
