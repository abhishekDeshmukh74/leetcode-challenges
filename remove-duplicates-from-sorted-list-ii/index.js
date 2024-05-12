function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node31 = new ListNode(3);
const node32 = new ListNode(3);
const node41 = new ListNode(4);
const node42 = new ListNode(4);
const node5 = new ListNode(5);
node1.next = node2;
node2.next = node31;
node31.next = node32;
node32.next = node41;
node41.next = node42;
node42.next = node5;

var deleteDuplicates = function (head) {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let current = head;

  while (current) {
    // if duplicates found
    if (current.next && current.next.val === current.val) {
      while (current.next && current.next.val === current.val) {
        current = current.next;
      }
      prev.next = current.next;
    } else {
      prev = prev.next;
    }
    current = current.next;
  }
  return dummy.next;
};

console.log(deleteDuplicates(node1));
