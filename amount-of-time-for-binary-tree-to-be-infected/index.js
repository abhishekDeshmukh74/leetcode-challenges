function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const root = new TreeNode(1)
const node5 = new TreeNode(5)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node10 = new TreeNode(10)
const node6 = new TreeNode(6)
const node9 = new TreeNode(9)
const node2 = new TreeNode(2)
root.left = node5;
root.right = node3;
node5.right = node4;
node3.left = node10;
node3.right = node6;
node4.left = node9;
node4.right = node2;

var amountOfTime = function (root, start) {
    if (!root) return 0;

    const parentMap = new Map();
    let targetNode = null;

    const bfsToMapParents = (node) => {
        const queue = [node];

        while (queue.length) {
            const currentNode = queue.shift();
            if (currentNode.val === start) targetNode = currentNode;

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

    const findTime = () => {
        const visited = new Set([targetNode.val]);
        const queue = [targetNode];
        let time = 0;

        while (queue.length) {
            const currentQueueSize = queue.length;

            for (let i = 0; i < currentQueueSize; i++) {
                const node = queue.shift();

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
            time++;
        }
        return time - 1;
    };

    bfsToMapParents(root);
    return findTime();
};

console.log(amountOfTime(root, 3))
