function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
root.left = node4
root.right = node5
node4.left = node1
node4.right = node2

const subRoot = new TreeNode(4)
const subnode1 = new TreeNode(1)
const subnode2 = new TreeNode(2)
subRoot.left = subnode1
subRoot.right = subnode2

const isSubtree = (root, subRoot) => {

    const isSameTree = (p, q) => {
        if (!p && !q) return true;
        if (!p && q) return false;
        if (p && !q) return false;
        if (p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };

    if (!subRoot) return true
    if (!root) return false
    if (isSameTree(root, subRoot)) return true

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
}

console.log(isSubtree(root, subRoot))
