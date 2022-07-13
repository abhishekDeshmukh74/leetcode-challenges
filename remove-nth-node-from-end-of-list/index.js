function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(4);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let left = dummy;
  let right = head;
  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;
  return dummy.next;
};

console.log(removeNthFromEnd(head, 2));
