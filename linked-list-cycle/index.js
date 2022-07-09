function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(3);
const node2 = new ListNode(2);
const node0 = new ListNode(0);
const node4 = new ListNode(4);

head.next = node2;
node2.next = node0;
node2.next = node4;
node4.next = node2;

// O(n) space
// var hasCycle = function (head) {
//   let set = new Set();
//   while (head) {
//     if (set.has(head)) return true;
//     set.add(head);
//     head = head.next;
//   }
//   return false;
// };

// var hasCycle = function (head) {
//   while (head) {
//     if (head.visited) return true;
//     head.visited = true;
//     head = head.next;
//   }
//   return false;
// };

// O(1) space
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};

console.log(hasCycle(head));
