function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

var reorderList = function (head) {
  // find middle
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half list
  let secondHalfList = slow.next;
  slow.next = null;
  let prev = null;

  while (secondHalfList) {
    const temp = secondHalfList.next;
    secondHalfList.next = prev;
    prev = secondHalfList;
    secondHalfList = temp;
  }

  // merge two halves
  let firstHalfList = head;
  secondHalfList = prev;

  while (secondHalfList) {
    const temp1 = firstHalfList.next;
    const temp2 = secondHalfList.next;
    firstHalfList.next = secondHalfList;
    secondHalfList.next = temp1;
    firstHalfList = temp1;
    secondHalfList = temp2;
  }
};

console.log(reorderList(node1));
