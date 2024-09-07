function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(3)
const node5 = new TreeNode(5)
const node1 = new TreeNode(1)
const node6 = new TreeNode(6)
const node2 = new TreeNode(2)
const node0 = new TreeNode(0)
const node8 = new TreeNode(8)
const node7 = new TreeNode(7)
const node4 = new TreeNode(4)
root.left = node5;
root.right = node1;
node5.left = node6;
node5.right = node2;
node1.left = node0;
node1.right = node8;
node2.left = node7;
node2.right = node4;

var distanceK = function (root, target, k) {
    if (!root) return 0;
    const parentMap = new Map();

    const bfsToMapParents = (node) => {
        const queue = [node];

        while (queue.length) {
            const currentNode = queue.shift();

            if (currentNode.left) {
                queue.push(currentNode.left);
                parentMap.set(currentNode.left, currentNode);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
                parentMap.set(currentNode.right, currentNode);
            }
        }
    };

    const traverse = () => {
        const result = []
        const queue = [target];
        const visited = new Set([target.val]);
        let level = 0;

        while (queue.length) {
            const currentQueueSize = queue.length;

            for (let i = 0; i < currentQueueSize; i++) {
                const node = queue.shift();

                if (level === k) {
                    result.push(node.val)
                    continue
                }

                const parent = parentMap.get(node);
                if (parent && !visited.has(parent.val)) {
                    visited.add(parent.val);
                    queue.push(parent);
                }

                if (node.left && !visited.has(node.left.val)) {
                    visited.add(node.left.val);
                    queue.push(node.left);
                }

                if (node.right && !visited.has(node.right.val)) {
                    visited.add(node.right.val);
                    queue.push(node.right);
                }
            }
            level++;
        }
        return result
    };

    bfsToMapParents(root)
    return traverse()
};

console.log(distanceK(root, node5, 2))
