function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

var connect = function (root) {
  if (!root) return null;
  const queue = [root];
  while (queue.length) {
    const currentLevelLength = queue.length;
    for (let i = 0; i < currentLevelLength; i++) {
      const current = queue.shift();
      if (i < currentLevelLength - 1) {
        const rightNode = queue[0];
        current.next = rightNode;
      }
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
  }
  return root;
};

console.log(connect(root));
