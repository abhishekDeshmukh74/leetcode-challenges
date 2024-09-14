function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(7);
const node2 = new TreeNode(3);
const node3 = new TreeNode(15);
const node4 = new TreeNode(9);
const node5 = new TreeNode(20);
root.left = node2;
root.right = node3;
node3.left = node4;
node3.right = node5;

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = []
    this.pushAll(root)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    const current = this.stack.pop()
    this.pushAll(current.right)
    return current.val
};

BSTIterator.prototype.pushAll = function (node) {
    while (node) {
        this.stack.push(node)
        node = node.left
    }
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return !!this.stack.length
};

var obj = new BSTIterator(root)
console.log(obj.next())
console.log(obj.next())
console.log(obj.hasNext())
console.log(obj.next())
console.log(obj.hasNext())
console.log(obj.next())
console.log(obj.hasNext())
console.log(obj.next())
