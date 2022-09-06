// Remove nodes with no children and have 0 value
var pruneTree = function (root) {
    if (!root) return null;

    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);

    return (root.val || root.left || root.right) ? root : null;
};
